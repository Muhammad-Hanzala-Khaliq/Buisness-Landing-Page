"use client";

import { useState } from "react";

export default function AdminLeadsTable({ initialLeads }) {
  const [leads, setLeads] = useState(initialLeads || []);
  const [busyId, setBusyId] = useState(null);
  const [modal, setModal] = useState({ open: false, id: null, name: "" });
  const [toast, setToast] = useState({ show: false, type: "success", message: "" });

  const confirmDelete = (id, name) => {
    if (!id) {
      setToast({ show: true, type: "error", message: "Missing id" });
      return;
    }
    setModal({ open: true, id, name: name || "" });
  };

  const onDelete = async () => {
    const id = modal.id;
    if (!id) return;
    try {
      setBusyId(id);
      const res = await fetch(`/api/leads/${encodeURIComponent(id)}?id=${encodeURIComponent(id)}`, { method: "DELETE", credentials: "include" });
      if (!res.ok) {
        let msg = "Delete failed";
        try {
          const data = await res.json();
          if (data?.error) msg = data.error;
        } catch {}
        setToast({ show: true, type: "error", message: msg });
        setModal({ open: false, id: null, name: "" });
        setBusyId(null);
        return;
      }
      setLeads((prev) => prev.filter((l) => l.id !== id));
      setToast({ show: true, type: "success", message: "Lead deleted" });
      setModal({ open: false, id: null, name: "" });
      setBusyId(null);
    } catch {
      setToast({ show: true, type: "error", message: "Delete failed" });
      setModal({ open: false, id: null, name: "" });
      setBusyId(null);
    }
  };

  return (
    <div className="rounded-2xl border border-muted/50 bg-surface-elevated shadow-2xl overflow-hidden">
      <div className="max-h-[70vh] overflow-y-auto overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-muted/20 text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Clinic</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Budget</th>
              <th className="px-4 py-3">Notes</th>
              <th className="px-4 py-3">Submitted</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-muted/40">
            {leads.map((l, idx) => {
              const id = l.id || String(idx);
              return (
                <tr key={id} className="hover:bg-muted/10">
                  <td className="px-4 py-3 break-words whitespace-normal">{l.name || "-"}</td>
                  <td className="px-4 py-3 break-words whitespace-normal">{l.email || "-"}</td>
                  <td className="px-4 py-3">{l.phone || "-"}</td>
                  <td className="px-4 py-3 break-words whitespace-normal">{l.clinicName || "-"}</td>
                  <td className="px-4 py-3">{l.city || "-"}</td>
                  <td className="px-4 py-3 break-words whitespace-normal">{l.service || "-"}</td>
                  <td className="px-4 py-3">{l.budget || "-"}</td>
                  <td className="px-4 py-3 break-words whitespace-normal">{l.notes || "-"}</td>
                  <td className="px-4 py-3">
                    {l.createdAt ? new Date(l.createdAt).toLocaleString("en-GB", { hour12: false }) : "-"}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      disabled={busyId === id}
                      onClick={() => confirmDelete(id, l.name)}
                      className="px-3 py-2 rounded-full bg-destructive text-destructive-foreground hover:brightness-110 transition disabled:opacity-60"
                    >
                      {busyId === id ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl surface-card p-6 border border-muted/40">
            <h3 className="text-lg font-bold text-foreground mb-2">Delete Lead</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Are you sure you want to delete{modal.name ? ` “${modal.name}”` : " this lead"}? This action cannot be
              undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-full bg-muted text-foreground border border-subtle hover:bg-muted/80 transition"
                onClick={() => setModal({ open: false, id: null, name: "" })}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-full bg-destructive text-destructive-foreground hover:brightness-110 transition"
                onClick={onDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {toast.show && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50" onAnimationEnd={() => setToast({ ...toast, show: false })}>
          <div
            className={`px-4 py-2 rounded-full shadow-lg ${
              toast.type === "success"
                ? "bg-primary text-primary-foreground"
                : "bg-destructive text-destructive-foreground"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}
    </div>
  );
}
