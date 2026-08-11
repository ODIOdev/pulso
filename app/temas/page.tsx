import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { demoTemaPages, demoTopics } from "@/lib/demo";

const featured = Object.entries(demoTemaPages);

export default function TemasPage() {
  return (
    <SiteShell>
      <main className="shell py-10 md:py-16">
        <div className="text-xs font-black tracking-[0.15em] text-blue-600">TEMAS</div>
        <h1 className="section-title mt-3">Issue tracker</h1>
        <p className="muted mt-4 max-w-2xl">
          Temas que están moviendo la conversación. Scores demo hasta conectar series históricas.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {featured.map(([slug, tema]) => (
            <Link key={slug} href={`/temas/${slug}`} className="card p-6 hover:border-blue-300 transition-colors">
              <div className="text-xs font-black tracking-[0.12em] text-blue-600">{tema.title.toUpperCase()}</div>
              <div className="text-4xl font-black tracking-[-0.05em] mt-5">{tema.score}</div>
              <p className="muted text-sm mt-3">{tema.summary}</p>
            </Link>
          ))}
        </div>

        <div className="grid-auto mt-6">
          {demoTopics.map((topic) => (
            <Link key={topic.name} href={`/temas/${topic.slug}`} className="card p-5 hover:border-blue-300 transition-colors">
              <div className="flex justify-between gap-3">
                <span className="font-black">{topic.name}</span>
                <span className={`text-sm font-black ${topic.delta >= 0 ? "text-emerald-700" : "text-red-600"}`}>
                  {topic.delta >= 0 ? "↑" : "↓"} {Math.abs(topic.delta)}
                </span>
              </div>
              <div className="text-4xl font-black tracking-[-0.05em] mt-7">{topic.score}</div>
              <div className="progress mt-4">
                <span style={{ width: `${topic.score}%` }} />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
