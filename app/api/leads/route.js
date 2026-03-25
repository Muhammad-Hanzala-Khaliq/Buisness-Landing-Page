import { getDb } from "../../../lib/mongo";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const body = await request.json();
    const db = await getDb();
    if (!db) {
      return Response.json({ ok: false, error: "Database not connected" }, { status: 500 });
    }
    await db.collection("leads").insertOne(body);
    return Response.json({ ok: true }, { status: 200 });
  } catch (e) {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
}
