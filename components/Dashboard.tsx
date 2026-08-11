import Link from "next/link";
import { demoDiaspora, demoRegions, demoTopics } from "@/lib/demo";
import type { PulseQuestion } from "@/lib/types";
import { ElectionPollCard } from "./ElectionPollCard";
import { PollCard } from "./PollCard";

export function Dashboard({
  question,
  electionQuestion,
}: {
  question: PulseQuestion | null;
  electionQuestion: PulseQuestion | null;
}) {
  return (
    <main>
      <section className="shell py-10 md:py-16" id="pulso">
        <div className="grid gap-5">
          <div className="card p-6 md:p-9 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.16em] font-black text-blue-600">ELECCIONES 2028</div>
              <h1 className="text-4xl md:text-6xl font-black tracking-[-0.065em] mt-4">
                El pulso electoral de los dominicanos.
              </h1>
              <p className="muted text-base md:text-lg mt-5">
                Participación web sobre posibles candidatos presidenciales — con metodología visible y sin presentarlo
                como muestra representativa.
              </p>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-5 shrink-0">
              <div>
                <div className="metric">2028</div>
                <div className="muted font-bold mt-2">Presidenciales · RD + diáspora</div>
              </div>
              <Link
                href="/elecciones/2028"
                className="rounded-full bg-neutral-950 text-white px-4 py-2.5 text-sm font-bold"
              >
                Ver candidatos
              </Link>
            </div>
          </div>

          <ElectionPollCard question={electionQuestion} />
        </div>
      </section>

      <section className="shell py-6 md:py-10" id="participa">
        <div className="flex items-end justify-between gap-4 mb-5">
          <div>
            <div className="text-xs font-black tracking-[0.15em] text-blue-600">PRIORIDADES</div>
            <h2 className="section-title mt-2">Pregunta del día</h2>
          </div>
        </div>
        <div className="max-w-3xl">
          <PollCard initialQuestion={question} />
        </div>
      </section>

      <section className="shell py-6 md:py-12" id="temas">
        <div className="flex items-end justify-between gap-4 mb-5">
          <div>
            <div className="text-xs font-black tracking-[0.15em] text-blue-600">ISSUE TRACKER</div>
            <h2 className="section-title mt-2">Temas que están moviendo la conversación.</h2>
          </div>
          <Link href="/temas" className="hidden md:block text-sm font-bold">
            Ver todos →
          </Link>
        </div>

        <div className="grid-auto">
          {demoTopics.map((topic) => (
            <Link key={topic.name} href={`/temas/${topic.slug}`} className="card p-5 hover:border-blue-300 transition-colors">
              <div className="flex justify-between gap-3">
                <span className="font-black">{topic.name}</span>
                <span className={`text-sm font-black ${topic.delta >= 0 ? "text-emerald-700" : "text-red-600"}`}>
                  {topic.delta >= 0 ? "↑" : "↓"} {Math.abs(topic.delta)}
                </span>
              </div>
              <div className="text-4xl font-black tracking-[-0.05em] mt-7">{topic.score}</div>
              <div className="progress mt-4"><span style={{ width: `${topic.score}%` }} /></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="shell py-10 md:py-14" id="regiones">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="card p-6 md:p-8">
            <div className="text-xs font-black tracking-[0.15em] text-blue-600">REPÚBLICA DOMINICANA</div>
            <h2 className="section-title mt-2">Pulso por región</h2>
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
                  <div className="progress"><span style={{ width: `${Math.min(region.score, 100)}%` }} /></div>
                </div>
              ))}
            </div>
            <Link href="/mapa/santiago" className="inline-block mt-6 text-sm font-bold">
              Ver Santiago →
            </Link>
          </div>

          <div className="card p-6 md:p-8" id="diaspora">
            <div className="text-xs font-black tracking-[0.15em] text-blue-600">DIÁSPORA</div>
            <h2 className="section-title mt-2">Dominicanos en EE.UU.</h2>
            <div className="grid gap-4 mt-7">
              {demoDiaspora.map((region) => (
                <div key={region.name}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    {region.slug === "new-york" || region.slug === "new-jersey" || region.slug === "florida" ? (
                      <Link href={`/diaspora/${region.slug}`}>{region.name}</Link>
                    ) : (
                      <span>{region.name}</span>
                    )}
                    <span>{region.score}</span>
                  </div>
                  <div className="progress"><span style={{ width: `${region.score}%` }} /></div>
                </div>
              ))}
            </div>
            <Link href="/diaspora" className="inline-block mt-6 text-sm font-bold">
              Ver diáspora →
            </Link>
          </div>
        </div>
      </section>

      <section className="shell py-8 md:py-16">
        <div className="rounded-[26px] bg-neutral-950 text-white p-7 md:p-10">
          <div className="text-xs tracking-[0.15em] font-black text-blue-400">DATA CONFIDENCE</div>
          <h2 className="section-title mt-3 max-w-3xl">Cada número debe poder explicar de dónde salió.</h2>
          <p className="text-neutral-400 mt-4 max-w-3xl leading-7">
            Publica tamaño de muestra, fechas de campo, método, segmentación, ponderación y limitaciones.
            No presentes respuestas web auto-seleccionadas como una encuesta representativa de toda la población.
          </p>
        </div>
      </section>
    </main>
  );
}
