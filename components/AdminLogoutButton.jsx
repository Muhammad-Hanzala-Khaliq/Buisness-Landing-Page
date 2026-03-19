"use client";

import { useRouter } from "next/navigation";

export default function AdminLogoutButton() {
  const router = useRouter();
  const onLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };
  return (
    <button
      onClick={onLogout}
      className="px-4 py-2 rounded-full bg-muted text-foreground border border-subtle hover:bg-muted/80 transition"
    >
      Logout
    </button>
  );
}
