export default function LeadTable({ leads }: { leads: Array<{ name: string; company: string; owner: string; stage: string; value: string }> }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Lead pipeline</h2>
        <span className="text-sm text-slate-500">Updated 5 minutes ago</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500">
              <th className="pb-3 pr-4 font-medium">Lead</th>
              <th className="pb-3 pr-4 font-medium">Company</th>
              <th className="pb-3 pr-4 font-medium">Owner</th>
              <th className="pb-3 pr-4 font-medium">Stage</th>
              <th className="pb-3 font-medium">Value</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.name} className="border-b border-slate-100 last:border-0">
                <td className="py-3 pr-4 font-medium text-slate-800">{lead.name}</td>
                <td className="py-3 pr-4 text-slate-600">{lead.company}</td>
                <td className="py-3 pr-4 text-slate-600">{lead.owner}</td>
                <td className="py-3 pr-4">
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
                    {lead.stage}
                  </span>
                </td>
                <td className="py-3 font-semibold text-slate-800">{lead.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
