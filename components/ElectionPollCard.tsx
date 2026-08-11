"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { acdMediaJuly2026 } from "@/lib/election-poll";
import type { PollResult, PulseQuestion } from "@/lib/types";

type Props = {
  question: PulseQuestion | null;
};

export function ElectionPollCard({ question }: Props) {
  const [audience, setAudience] = useState<"DR" | "US">("DR");
  const [region, setRegion] = useState("");
  const [selected, setSelected] = useState("");
  const [siteResults, setSiteResults] = useState<PollResult[]>([]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [tab, setTab] = useState<"published" | "site">("published");

  useEffect(() => {
    if (question) loadSiteResults(question.id);
  }, [question]);

  async function loadSiteResults(questionId: string) {
    const res = await fetch(`/api/polls/${questionId}/results`, { cache: "no-store" });
    if (!res.ok) return;
    const json = await res.json();
    setSiteResults((json.results ?? []) as PollResult[]);
  }

  async function submitVote() {
    if (!question || !selected) return;
    setSubmitting(true);
    setMessage("");

    const res = await fetch(`/api/polls/${question.id}/vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        option: selected,
        audience,
        region: region.trim() || null,
      }),
    });

    const json = await res.json().catch(() => ({}));
    setSubmitting(false);

    if (!res.ok) {
      setMessage(json.error ?? "No pudimos registrar tu respuesta.");
      return;
    }

    setMessage("Respuesta registrada en Pulso RD.");
    setTab("site");
    await loadSiteResults(question.id);
  }

  const options = question?.options ?? acdMediaJuly2026.results.map((r) => r.option);
  const published = acdMediaJuly2026.results
    .slice()
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 7);
  const siteTotal = siteResults.reduce((sum, row) => sum + row.votes, 0);
  const siteDisplay = siteResults
    .slice()
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 7);

  return (
    <div className="card p-5 md:p-8" id="elecciones-hero">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div>
          <div className="text-xs font-black tracking-[0.15em] text-blue-600">ELECCIONES 2028</div>
          <div className="text-xs muted mt-1">Preferencia presidencial · datos publicados</div>
        </div>
        <div className="flex rounded-full bg-neutral-100 p-1">
          {(["DR", "US"] as const).map((value) => (
            <button
              key={value}
              onClick={() => setAudience(value)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                audience === value ? "bg-white shadow-sm" : "text-neutral-500"
              }`}
            >
              {value === "DR" ? "🇩🇴 RD" : "🇺🇸 Diáspora"}
            </button>
          ))}
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-black tracking-[-0.04em] max-w-4xl">
        {question?.question ?? acdMediaJuly2026.question}
      </h2>

      <p className="text-xs muted mt-3 leading-5 max-w-3xl">
        Resultados principales de {acdMediaJuly2026.firm} ({acdMediaJuly2026.fieldwork}). La votación del sitio es
        participación web aparte.{" "}
        <Link href="/metodologia" className="font-bold underline">
          Metodología
        </Link>
      </p>

      <div className="grid lg:grid-cols-2 gap-8 mt-6">
        <div>
          <div className="grid sm:grid-cols-2 gap-2 max-h-[280px] overflow-y-auto pr-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => setSelected(option)}
                className={`text-left rounded-2xl border p-3.5 font-bold transition ${
                  selected === option
                    ? "border-blue-600 bg-blue-50"
                    : "border-neutral-200 bg-white hover:border-neutral-400"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-3 mt-4">
            <input
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder={audience === "DR" ? "Provincia (opcional)" : "Estado de EE.UU. (opcional)"}
              className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none focus:border-blue-600"
            />
            <button
              onClick={submitVote}
              disabled={!question || !selected || submitting}
              className="rounded-2xl bg-neutral-950 text-white px-6 py-3 font-black disabled:opacity-40"
            >
              {submitting ? "Enviando…" : "Votar aquí"}
            </button>
          </div>

          {message && <p className="mt-3 text-sm font-semibold">{message}</p>}
        </div>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex rounded-full bg-neutral-100 p-1">
              <button
                onClick={() => setTab("published")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                  tab === "published" ? "bg-white shadow-sm" : "text-neutral-500"
                }`}
              >
                ACD Media
              </button>
              <button
                onClick={() => setTab("site")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                  tab === "site" ? "bg-white shadow-sm" : "text-neutral-500"
                }`}
              >
                Pulso RD web
              </button>
            </div>
            <Link href="/elecciones/2028" className="text-xs font-bold">
              Ver candidatos →
            </Link>
          </div>

          {tab === "published" ? (
            <>
              <div className="text-xs muted mb-4">
                {acdMediaJuly2026.firm} · {acdMediaJuly2026.fieldwork} · n≈
                {acdMediaJuly2026.sampleSize.toLocaleString("en-US")} ·{" "}
                <a
                  href={acdMediaJuly2026.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold underline"
                >
                  Fuente
                </a>
              </div>
              <div className="grid gap-3">
                {published.map((result) => (
                  <div key={result.option}>
                    <div className="flex justify-between text-sm font-bold mb-1.5">
                      <span>{result.option}</span>
                      <span>{result.percentage}%</span>
                    </div>
                    <div className="progress">
                      <span style={{ width: `${Math.min(result.percentage, 100)}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="text-xs muted mb-4">
                Participación en este sitio · no es muestra representativa
                {siteTotal > 0 ? ` · ${siteTotal} votos` : ""}
              </div>
              {siteTotal === 0 ? (
                <p className="muted text-sm">Aún no hay votos web. Usa el formulario de la izquierda para participar.</p>
              ) : (
                <div className="grid gap-3">
                  {siteDisplay.map((result) => (
                    <div key={result.option}>
                      <div className="flex justify-between text-sm font-bold mb-1.5">
                        <span>{result.option}</span>
                        <span>{result.percentage}%</span>
                      </div>
                      <div className="progress">
                        <span style={{ width: `${result.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
