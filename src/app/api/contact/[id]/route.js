import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { isAdmin } from "@/lib/auth";

export async function GET(req, { params }) {
  if (!isAdmin(req)) return NextResponse.json({ success: false }, { status: 401 });
  await connectDB();
  const contact = await Contact.findById(params.id).lean();
  if (!contact) return NextResponse.json({ success: false }, { status: 404 });
  return NextResponse.json({ success: true, data: contact });
}

export async function PATCH(req, { params }) {
  if (!isAdmin(req)) return NextResponse.json({ success: false }, { status: 401 });
  try {
    await connectDB();
    const body = await req.json();
    const update = {};
    if (body.status) update.status = body.status;
    if (body.reply) {
      update.$push = { replies: { message: body.reply, sentBy: "admin" } };
      update.status = "REPLIED";
    }
    const contact = await Contact.findByIdAndUpdate(params.id, update, { new: true });
    return NextResponse.json({ success: true, data: contact });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  if (!isAdmin(req)) return NextResponse.json({ success: false }, { status: 401 });
  await connectDB();
  await Contact.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
