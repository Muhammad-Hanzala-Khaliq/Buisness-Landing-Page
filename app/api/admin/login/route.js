import { NextResponse } from "next/server";

const VALID_EMAIL = "admin@clinic.com";
const VALID_PASSWORD = "SecurePass123";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      const res = NextResponse.json({ ok: true });
      res.cookies.set("admin_session", "active", {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 6, // 6 hours
      });
      return res;
    }
    return NextResponse.json({ ok: false, error: "Invalid credentials" }, { status: 401 });
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
