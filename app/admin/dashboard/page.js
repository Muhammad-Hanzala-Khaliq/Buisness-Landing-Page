import { getDb } from "../../../lib/mongo";
import AdminLogoutButton from "../../../components/AdminLogoutButton";
import AdminGuard from "../../../components/AdminGuard";
import AdminLeadsTable from "../../../components/AdminLeadsTable";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Dashboard",
  description: "View and manage clinic leads",
};

export default async function AdminDashboardPage() {
  // Ensure we are truly dynamic by reading cookies (even if we don't use them here, AdminGuard will)
  const cookieStore = await cookies();

  let leads = [];
  try {
    const db = await getDb();
    if (db) {
      leads = await db
        .collection("leads")
        .find({})
        .sort({ createdAt: -1 })
        .toArray();
    }
  } catch (e) {
    console.error("DB Error:", e);
  }

  const sanitized = leads.map((l) => {
    const id = l._id ? l._id.toString() : "";
    const { _id, ...rest } = l;
    return { id, ...rest };
  });
  const total = sanitized.length;

  return (
    <AdminGuard>
      <main className="min-h-screen px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-foreground">
                Leads Dashboard
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Total leads: {total}
              </p>
            </div>
            <AdminLogoutButton />
          </div>

          <AdminLeadsTable initialLeads={sanitized} />
        </div>
      </main>
    </AdminGuard>
  );
}
