import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { RegionScorecard } from "@/components/RegionScorecard";
import { demoRegionInsights, demoRegions } from "@/lib/demo";

const santiago = demoRegionInsights.santiago;

export default function MapaPage() {
  return (
    <SiteShell>
      <main className="shell py-10 md:py-16">
        <div className="text-xs font-black tracking-[0.15em] text-blue-600">MAPA</div>
        <h1 className="section-title mt-3">Pulso por región</h1>
        <p className="muted mt-4 max-w-2xl">
          Vista regional demo de República Dominicana. El mapa SVG/GeoJSON llega en un siguiente módulo.
        </p>

        <div className="mt-8">
          <RegionScorecard {...santiago} />
          <div className="mt-3">
            <Link href="/mapa/santiago" className="text-sm font-bold">
              Abrir ficha Santiago →
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mt-8">
          <div className="card p-6 md:p-8 min-h-[360px] flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#edf3ff,transparent_55%),linear-gradient(180deg,#fff,#f6f7f8)]">
            <div className="text-center">
              <div className="text-5xl font-black tracking-[-0.06em]">RD</div>
              <p className="muted mt-3 max-w-sm">Placeholder cartográfico · provincias y scores agregados</p>
            </div>
          </div>
          <div className="card p-6 md:p-8">
            <h2 className="font-black text-lg">Regiones demo</h2>
            <div className="grid gap-4 mt-7">
              {demoRegions.map((region) => (
                <div key={region.name}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    {region.slug === "santiago" ? (
                      <Link href="/mapa/santiago">{region.name}</Link>
                    ) : (
                      <span>{region.name}</span>
                    )}
                    <span>{region.score}</span>
                  </div>
                  <div className="progress">
                    <span style={{ width: `${Math.min(region.score, 100)}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <Link href="/diaspora" className="inline-block mt-8 text-sm font-bold">
              Ver diáspora EE.UU. →
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
