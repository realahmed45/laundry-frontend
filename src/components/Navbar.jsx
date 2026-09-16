import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'HOME' },
  { to: '/profile', label: 'PROFILE' },
  { to: '/contact', label: 'CONTACT' },
]

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 pt-6">
      <nav className="shell flex justify-center">
        <div className="flex items-center gap-1 rounded-full bg-white/70 px-2 py-1.5 shadow-sm ring-1 ring-black/5 backdrop-blur">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-[12px] font-semibold tracking-wide transition
                 ${isActive ? 'bg-brand-sky text-brand-deep' : 'text-ink/70 hover:text-brand-deep'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          {/* The little arrow pill that sits after CONTACT in the design. */}
          <Link
            to="/contact"
            aria-label="Go to contact"
            className="ml-1 grid h-8 w-8 place-items-center rounded-full bg-brand-blue text-white transition hover:bg-brand-deep"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  )
}
