import type { ReactNode } from "react";
import { Header } from "@/components/Header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <footer className="shell py-10 text-sm muted">
        <div className="border-t border-neutral-200 pt-6 flex flex-col md:flex-row justify-between gap-3">
          <span>© Pulso RD</span>
          <span>Opinión pública · Transparencia · Metodología</span>
        </div>
      </footer>
    </>
  );
}
