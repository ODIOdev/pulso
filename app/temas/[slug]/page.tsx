import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { demoTemaPages, type TemaSlug } from "@/lib/demo";

const slugs = Object.keys(demoTemaPages) as TemaSlug[];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function TemaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tema = demoTemaPages[slug as TemaSlug];
  if (!tema) notFound();

  return (
    <SiteShell>
      <main className="shell py-10 md:py-16">
        <Link href="/temas" className="text-sm font-bold">
          ← Temas
        </Link>
        <div className="card p-6 md:p-10 mt-6 max-w-4xl">
          <div className="text-xs font-black tracking-[0.15em] text-blue-600">TEMA</div>
          <h1 className="section-title mt-3">{tema.title}</h1>
          <p className="muted mt-4">{tema.summary}</p>
          <div className="flex items-end gap-4 mt-8">
            <div className="metric">{tema.score}</div>
            <div className={`font-black ${tema.delta >= 0 ? "text-emerald-700" : "text-red-600"}`}>
              {tema.delta >= 0 ? "↑" : "↓"} {Math.abs(tema.delta)}
            </div>
          </div>
          <div className="progress mt-4 max-w-md">
            <span style={{ width: `${tema.score}%` }} />
          </div>
          <ul className="mt-8 grid gap-3 text-neutral-700">
            {tema.highlights.map((item) => (
              <li key={item} className="rounded-2xl border border-neutral-200 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </SiteShell>
  );
}
