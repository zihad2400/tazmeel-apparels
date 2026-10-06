import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { sendContactNotification, sendAutoReply } from "@/lib/mailer";
import { isAdmin } from "@/lib/auth";

// ⭐ Simple in-memory rate limiting (per IP)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // 3 requests per minute

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || { count: 0, startTime: now };

  if (now - record.startTime > RATE_LIMIT_WINDOW) {
    record.count = 1;
    record.startTime = now;
  } else {
    record.count++;
  }

  rateLimitMap.set(ip, record);
  return record.count <= RATE_LIMIT_MAX;
}

// ⭐ POST — Submit contact form (public)
export async function POST(req) {
  try {
    // Rate limit check
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please wait a minute.",
        },
        { status: 429 }
      );
    }

    await connectDB();
    const body = await req.json();
    const { name, email, phone, company, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Message length check
    if (message.length < 10) {
      return NextResponse.json(
        { success: false, error: "Message is too short." },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const contact = await Contact.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone?.trim() || "",
      company: company?.trim() || "",
      subject: subject?.trim() || "General Inquiry",
      message: message.trim(),
      status: "NEW",
    });

    console.log("✅ Contact saved to DB:", contact._id);

    // Send emails (non-blocking)
    Promise.allSettled([
      sendContactNotification({
        name,
        email,
        phone,
        company,
        subject,
        message,
      }),
      sendAutoReply(email, name),
    ])
      .then((results) => {
        results.forEach((result, i) => {
          if (result.status === "rejected") {
            console.error(`Email ${i} failed:`, result.reason);
          } else {
            console.log(`✅ Email ${i} sent`);
          }
        });
      })
      .catch((e) => console.error("Email error:", e));

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
        data: {
          id: contact._id,
          name: contact.name,
          email: contact.email,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/contact error:", err);
    return NextResponse.json(
      { success: false, error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

// ⭐ GET — List all contacts (admin only)
export async function GET(req) {
  if (!isAdmin(req)) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const q = searchParams.get("q");

    const filter = {};
    if (status && status !== "ALL") filter.status = status;
    if (q) {
      filter.$or = [
        { name: { $regex: q, $options: "i" } },
        { email: { $regex: q, $options: "i" } },
        { subject: { $regex: q, $options: "i" } },
        { message: { $regex: q, $options: "i" } },
      ];
    }

    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (err) {
    console.error("GET /api/contact error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
