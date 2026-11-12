export default function PipelineBoard({ deals }: { deals: Array<{ name: string; value: string; stage: string; probability: number }> }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Deal pipeline</h2>
        <span className="text-sm text-slate-500">Quarterly forecast</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2"> 
        {deals.map((deal) => (
          <div key={deal.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between">
              <p className="font-medium text-slate-900">{deal.name}</p>
              <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
                {deal.stage}
              </span>
            </div>

            <p className="mt-4 text-2xl font-bold text-slate-900">{deal.value}</p>

            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                <span>Probability</span>
                <span>{deal.probability}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-200">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-600"
                  style={{ width: `${deal.probability}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
