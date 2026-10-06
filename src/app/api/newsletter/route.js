import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";

export async function POST(req) {
  try {
    // Connect to MongoDB
    await connectDB();

    const body = await req.json();
    const { email } = body;

    // Validation
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email: cleanEmail });

    if (existing) {
      return NextResponse.json({
        success: true,
        message: "You are already subscribed!",
        alreadySubscribed: true,
      });
    }

    // Save new subscriber
    const subscriber = await Newsletter.create({ email: cleanEmail });

    console.log("✅ Newsletter subscriber saved:", cleanEmail);

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully!",
      data: {
        id: subscriber._id,
        email: subscriber.email,
      },
    });
  } catch (err) {
    console.error("❌ Newsletter error:", err);

    // Specific error messages
    if (err.code === 11000) {
      return NextResponse.json({
        success: true,
        message: "You are already subscribed!",
        alreadySubscribed: true,
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: err.message || "Server error",
      },
      { status: 500 }
    );
  }
}
