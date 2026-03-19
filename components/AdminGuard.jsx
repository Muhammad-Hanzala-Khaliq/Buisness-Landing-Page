"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminGuard({ children }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/api/admin/session", { cache: "no-store" });
        if (!alive) return;
        if (!res.ok) {
          router.replace("/admin/login");
          return;
        }
        setAllowed(true);
      } catch {
        router.replace("/admin/login");
      }
    })();
    return () => {
      alive = false;
    };
  }, [router]);

  if (!allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Verifying access…</div>
      </div>
    );
  }
  return children;
}
