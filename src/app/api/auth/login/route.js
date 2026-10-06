import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

export async function POST(req) {
  const { email, password } = await req.json();
  if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });
  }
  const token = signToken({ email, role: "admin" });
  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_token", token, {
    httpOnly: true, sameSite: "lax", path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
