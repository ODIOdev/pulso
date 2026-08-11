import { AdminShell } from "@/components/admin/AdminShell";

const checks = [
  { name: "RLS en tablas sensibles", status: "Pass" },
  { name: "HMAC / anti-repeat vote", status: "Pass" },
  { name: "CAPTCHA", status: "Pending" },
  { name: "Rate limiting distribuido", status: "Pending" },
  { name: "Sample-size suppression", status: "Pending" },
];

export default function AdminDataQualityPage() {
  return (
    <AdminShell title="Data quality" eyebrow="DATA QUALITY">
      <div className="grid gap-3">
        {checks.map((check) => (
          <div key={check.name} className="card p-4 flex items-center justify-between gap-4">
            <span className="font-bold">{check.name}</span>
            <span
              className={`text-sm font-black ${
                check.status === "Pass" ? "text-emerald-700" : "text-amber-700"
              }`}
            >
              {check.status}
            </span>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
