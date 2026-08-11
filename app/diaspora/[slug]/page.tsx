import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { demoDiasporaPages, type DiasporaSlug } from "@/lib/demo";

const slugs = Object.keys(demoDiasporaPages) as DiasporaSlug[];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function DiasporaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const place = demoDiasporaPages[slug as DiasporaSlug];
  if (!place) notFound();

  return (
    <SiteShell>
      <main className="shell py-10 md:py-16">
        <Link href="/diaspora" className="text-sm font-bold">
          ← Diáspora
        </Link>
        <div className="card p-6 md:p-10 mt-6 max-w-4xl">
          <div className="text-xs font-black tracking-[0.15em] text-blue-600">DIÁSPORA · EE.UU.</div>
          <h1 className="section-title mt-3">{place.title}</h1>
          <p className="muted mt-4">{place.summary}</p>
          <div className="metric mt-8">{place.score}</div>
          <div className="progress mt-4 max-w-md">
            <span style={{ width: `${place.score}%` }} />
          </div>
          <h2 className="font-black text-lg mt-10">Prioridades demo</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {place.priorities.map((item) => (
              <span key={item} className="rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-bold">
                {item}
              </span>
            ))}
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
