export async function GET(request) {
  try {
    const cookieHeader = request.headers.get("cookie") || "";
    const match = cookieHeader.match(/(?:^|;\s*)admin_session=([^;]+)/);
    const sessionValue = match?.[1];
    if (sessionValue) {
      return Response.json({ ok: true }, { status: 200 });
    }
    return Response.json({ ok: false }, { status: 401 });
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
}
