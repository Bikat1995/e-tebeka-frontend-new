"use client";

import { useEffect, useMemo } from "react";
import { Loader2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import LogoHeader from "@/components/LogoHeader";
import Footer from "@/components/Footer";
import { useSession } from "@/components/SessionProvider";
import { canAccessPath, getDashboardPath } from "@/lib/session";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const isAdminRoute = useMemo(() => pathname.startsWith("/admin"), [pathname]);
  const isProtectedRoute = useMemo(
    () => pathname.startsWith("/dashboard") || pathname.startsWith("/admin"),
    [pathname]
  );

  const hasAccess = !isProtectedRoute || (!!user && canAccessPath(pathname, user));

  useEffect(() => {
    if (!isProtectedRoute || isLoading) {
      return;
    }

    if (!user) {
      router.replace("/login");
      return;
    }

    if (!canAccessPath(pathname, user)) {
      router.replace(getDashboardPath(user));
    }
  }, [isLoading, isProtectedRoute, pathname, router, user]);

  return (
    <div className="flex min-h-screen flex-col">
      <LogoHeader />
      {isProtectedRoute && (isLoading || !hasAccess) ? (
        <main className="flex flex-1 items-center justify-center px-4">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-600 shadow-sm">
            <Loader2 className="h-4 w-4 animate-spin text-teal-600" />
            Checking your access...
          </div>
        </main>
      ) : (
        <main className="flex-1 shrink-0">{children}</main>
      )}
      <Footer />
    </div>
  );
}
