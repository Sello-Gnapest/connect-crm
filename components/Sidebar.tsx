import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Overview', active: true },
  { href: '/leads', label: 'Leads' },
  { href: '/deals', label: 'Deals' },
  { href: '/customers', label: 'Customers' },
  { href: '/activities', label: 'Activities' },
  { href: '/settings', label: 'Settings' }
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-200 bg-slate-950 text-slate-200">
      <div className="flex items-center gap-3 border-b border-slate-800 px-6 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 font-bold text-white">C</div>
        <div>
          <p className="text-lg font-semibold text-white">Connect CRM</p>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Sales OS</p>
        </div>
      </div>

      <nav className="space-y-2 px-4 py-6">
        {navItems.map(({ href, label, active }) => (
          <Link
            key={label}
            href={href}
            className={[
              'flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition',
              active
                ? 'bg-slate-800 text-white'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            ].join(' ')}
          >
            <span>{label}</span>
            {active ? <span className="h-2 w-2 rounded-full bg-brand-400" /> : null}
          </Link>
        ))}
      </nav>

      <div className="mt-8 border-t border-slate-800 px-4 py-5">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">Team</p>
        <div className="space-y-3">
          {['Alicia Ward', 'Noah Brooks', 'Emma Liu'].map((person) => (
            <div key={person} className="flex items-center gap-3 rounded-xl bg-slate-900 px-3 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white">
                {person
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-100">{person}</p>
                <p className="text-xs text-slate-400">Account team</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
