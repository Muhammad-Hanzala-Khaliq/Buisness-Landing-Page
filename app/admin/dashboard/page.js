"use client";

import { useEffect, useState } from "react";
import AdminLogoutButton from "../../../components/AdminLogoutButton";
import AdminGuard from "../../../components/AdminGuard";
import AdminLeadsTable from "../../../components/AdminLeadsTable";

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/admin/leads", {
          method: "GET",
          cache: "no-store",
          credentials: "include",
        });

        if (!res.ok) {
          const body = await res.json().catch(() => null);
          throw new Error(body?.error || `Failed to fetch leads (${res.status})`);
        }

        const data = await res.json();
        if (data.ok) {
          setLeads(data.leads || []);
        } else {
          throw new Error(data.error || "Failed to load leads");
        }
      } catch (err) {
        console.error("Error loading leads:", err);
        setError(err.message || "Failed to load leads");
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

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
                Total leads: {loading ? "..." : leads.length}
              </p>
            </div>
            <AdminLogoutButton />
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/50 text-destructive">
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center p-12">
              <div className="text-muted-foreground">Loading leads...</div>
            </div>
          ) : (
            <AdminLeadsTable initialLeads={leads} />
          )}
        </div>
      </main>
    </AdminGuard>
  );
}
