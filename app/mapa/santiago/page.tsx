import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { RegionScorecard } from "@/components/RegionScorecard";
import { demoRegionInsights } from "@/lib/demo";

export default function SantiagoPage() {
  return (
    <SiteShell>
      <main className="shell py-10 md:py-16">
        <Link href="/mapa" className="text-sm font-bold">
          ← Mapa
        </Link>
        <div className="mt-6">
          <RegionScorecard {...demoRegionInsights.santiago} />
        </div>
      </main>
    </SiteShell>
  );
}
