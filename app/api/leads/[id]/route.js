import { getDb } from "../../../../lib/mongo";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic";

// Avoid cookies() due to runtime incompatibility; parse from request headers

export async function DELETE(request, { params }) {
  try {
    const cookieHeader = request.headers.get("cookie") || "";
    const match = cookieHeader.match(/(?:^|;\s*)admin_session=([^;]+)/);
    const sessionValue = match?.[1];
    if (!sessionValue) {
      return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(request.url);
    const id = (params && params.id) || url.searchParams.get("id");
    if (!id) {
      return Response.json({ ok: false, error: "Missing id" }, { status: 400 });
    }
    if (!ObjectId.isValid(id)) {
      return Response.json({ ok: false, error: "Invalid id" }, { status: 400 });
    }
    const db = await getDb();
    if (!db) {
      return Response.json({ ok: false, error: "Database not connected" }, { status: 500 });
    }
    const result = await db.collection("leads").deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return Response.json({ ok: false, error: "Not found" }, { status: 404 });
    }
    return Response.json({ ok: true }, { status: 200 });
  } catch (e) {
    const message = e?.message || "Server error";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
