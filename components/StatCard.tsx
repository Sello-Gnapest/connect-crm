export default function StatCard({
  label,
  value,
  change,
  tone = 'brand'
}: {
  label: string;
  value: string;
  change: string;
  tone?: 'brand' | 'emerald' | 'amber' | 'purple';
}) {
  const toneStyles = {
    brand: 'bg-brand-50 text-brand-700',
    emerald: 'bg-emerald-50 text-emerald-700',
    amber: 'bg-amber-50 text-amber-700',
    purple: 'bg-violet-50 text-violet-700'
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{label}</p>
        <span className={`rounded-full px-2 py-1 text-xs font-semibold ${toneStyles[tone]}`}>{change}</span>
      </div>
      <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900">{value}</p>
    </div>
  );
}
