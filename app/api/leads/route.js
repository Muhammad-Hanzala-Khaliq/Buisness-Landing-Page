import { getDb } from "../../../lib/mongo";

export async function POST(request) {
  try {
    const body = await request.json();
    const db = await getDb();
    await db.collection("leads").insertOne(body);
    return Response.json({ ok: true }, { status: 200 });
  } catch (e) {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
}
