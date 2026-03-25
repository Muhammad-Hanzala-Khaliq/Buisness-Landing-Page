import { getDb } from "../../../../lib/mongo";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const cookieHeader = request.headers.get("cookie") || "";
    const match = /(?:^|;\s*)admin_session=([^;]+)/.exec(cookieHeader);
    if (!match) {
      return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const db = await getDb();
    const leads = await db
      .collection("leads")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const sanitized = leads.map((l) => {
      const { _id, ...rest } = l;
      return { id: _id?.toString() || "", ...rest };
    });

    return new Response(JSON.stringify({ ok: true, leads: sanitized }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Error fetching leads:", e);
    return new Response(JSON.stringify({ ok: false, error: "Failed to fetch leads" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
