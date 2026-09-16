import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const socials = [
  { label: 'Facebook', path: 'M13.2 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14 3.5c-2.4 0-4 1.45-4 4.12V9.9H7.3V13H10v8h3.2Z' },
  { label: 'Instagram', path: 'M12 2.9c2.95 0 3.3.01 4.47.06 1.08.05 1.66.23 2.05.38.51.2.88.44 1.27.83.39.39.63.76.83 1.27.15.39.33.97.38 2.05.05 1.17.06 1.52.06 4.47s-.01 3.3-.06 4.47c-.05 1.08-.23 1.66-.38 2.05a3.4 3.4 0 0 1-.83 1.27c-.39.39-.76.63-1.27.83-.39.15-.97.33-2.05.38-1.17.05-1.52.06-4.47.06s-3.3-.01-4.47-.06c-1.08-.05-1.66-.23-2.05-.38a3.4 3.4 0 0 1-1.27-.83 3.4 3.4 0 0 1-.83-1.27c-.15-.39-.33-.97-.38-2.05C2.91 15.3 2.9 14.95 2.9 12s.01-3.3.06-4.47c.05-1.08.23-1.66.38-2.05.2-.51.44-.88.83-1.27.39-.39.76-.63 1.27-.83.39-.15.97-.33 2.05-.38C8.7 2.91 9.05 2.9 12 2.9Zm0 5.43a3.67 3.67 0 1 0 0 7.34 3.67 3.67 0 0 0 0-7.34Zm0 6.05a2.38 2.38 0 1 1 0-4.76 2.38 2.38 0 0 1 0 4.76Zm4.67-6.2a.86.86 0 1 1-1.72 0 .86.86 0 0 1 1.72 0Z' },
  { label: 'LinkedIn', path: 'M6.94 8.5H4.1V21h2.84V8.5ZM5.52 3a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3ZM20 14.16c0-3.3-1.76-4.83-4.11-4.83-1.9 0-2.75 1.04-3.22 1.77V8.5H9.83c.04.8 0 12.5 0 12.5h2.84v-6.98c0-.25.02-.5.09-.68.2-.5.66-1.02 1.43-1.02 1.01 0 1.41.77 1.41 1.9V21H18.5l1.5-.01v-6.83Z' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-mist">
      <div className="shell py-12">
        <div className="flex flex-col gap-8 border-b border-black/5 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Bersih Clean" className="h-9 w-auto" />
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-brand-deep">BERSIH </span>
                <span className="text-brand-blue">CLEAN</span>
              </span>
            </div>
            <p className="mt-2 pl-[3rem] text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/55">
              B2B Villa Linen Care
            </p>
          </div>

          <nav className="flex items-center gap-3 text-[12px] font-semibold text-ink/70">
            <Link to="/" className="transition hover:text-brand-deep">HOME</Link>
            <span className="text-black/15">|</span>
            <Link to="/profile" className="transition hover:text-brand-deep">PROFILE</Link>
            <span className="text-black/15">|</span>
            <Link to="/contact" className="transition hover:text-brand-deep">CONTACT</Link>
          </nav>
        </div>

        <div className="flex flex-col-reverse gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-ink/50">All rights reserved 2026</p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-8 w-8 place-items-center rounded-full text-ink/55 transition hover:bg-brand-blue hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
