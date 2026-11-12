import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import PipelineBoard from '@/components/PipelineBoard';
import LeadTable from '@/components/LeadTable';
import { summaryStats, deals, leads } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 p-6 lg:p-8">
          <header className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-600">Sales overview</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight">Connect CRM</h1>
            </div>

            <Link
              href="/leads"
              className="rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
            >
              + New lead
            </Link>
          </header>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {summaryStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
            <PipelineBoard deals={deals} />

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Today&apos;s focus</h2>
                <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">12 items</span>
              </div>

              <ul className="space-y-4">
                {[
                  ['Discovery call', 'Alicia Ward', '10:30 AM'],
                  ['Proposal review', 'Northstar Labs', '1:00 PM'],
                  ['Contract follow-up', 'Harbor & Co', '3:15 PM'],
                  ['Renewal check-in', 'SummitOS', '5:00 PM']
                ].map(([title, customer, time]) => (
                  <li key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-slate-800">{title}</p>
                      <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                        scheduled
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{customer}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{time}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-8">
            <LeadTable leads={leads} />
          </section>
        </main>
      </div>
    </div>
  );
}
