type Props = {
  country: string;
  name: string;
  pulsoScore: number;
  responses: number;
  topIssue: string;
  sentiment: number;
  change7d: number;
  confidence: "High" | "Medium" | "Low" | "Alta" | "Media" | "Baja";
};

function formatResponses(n: number) {
  return n.toLocaleString("en-US");
}

export function RegionScorecard({
  country,
  name,
  pulsoScore,
  responses,
  topIssue,
  sentiment,
  change7d,
  confidence,
}: Props) {
  const metrics = [
    { label: "Pulso Score", value: pulsoScore.toFixed(1) },
    { label: "Responses", value: formatResponses(responses) },
    { label: "Top issue", value: topIssue },
    {
      label: "Sentiment",
      value: `${sentiment > 0 ? "+" : ""}${sentiment.toFixed(1)}`,
      tone: sentiment >= 0 ? "text-emerald-700" : "text-red-600",
    },
    {
      label: "7-day change",
      value: `${change7d >= 0 ? "↑" : "↓"} ${Math.abs(change7d).toFixed(1)}`,
      tone: change7d >= 0 ? "text-emerald-700" : "text-red-600",
    },
    { label: "Confidence", value: confidence },
  ];

  return (
    <article className="card p-6 md:p-8">
      <div className="text-xs font-black tracking-[0.15em] text-blue-600">{country}</div>
      <h2 className="section-title mt-2">{name}</h2>
      <dl className="grid sm:grid-cols-2 gap-4 mt-7">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-neutral-200 px-4 py-3">
            <dt className="muted text-xs font-bold tracking-[0.08em] uppercase">{metric.label}</dt>
            <dd className={`text-2xl font-black tracking-[-0.04em] mt-1 ${metric.tone ?? ""}`}>
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
