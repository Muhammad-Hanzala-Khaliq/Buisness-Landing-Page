import { getDb } from "../../../../lib/mongo";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    // Verify admin session
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("admin_session");
    
    if (!sessionCookie || !sessionCookie.value) {
      return Response.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const db = await getDb();
    if (!db) {
      return Response.json(
        { ok: false, error: "Database not connected" },
        { status: 500 }
      );
    }

    const leads = await db
      .collection("leads")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const sanitized = leads.map((l) => {
      const id = l._id ? l._id.toString() : "";
      const { _id, ...rest } = l;
      return { id, ...rest };
    });

    return Response.json({ ok: true, leads: sanitized }, { status: 200 });
  } catch (e) {
    console.error("Error fetching leads:", e);
    return Response.json(
      { ok: false, error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}
