import { useState } from 'react'

const FIELDS = [
  { name: 'email', label: 'Email', type: 'email', placeholder: 'info@gmail.com' },
  { name: 'contact', label: 'Contact', type: 'tel', placeholder: '+XX XXXXXXXXX' },
  { name: 'message', label: 'Message', type: 'textarea', placeholder: 'type here' },
]

export default function ContactSection() {
  const [values, setValues] = useState({ email: '', contact: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
    setSent(false)
  }

  // No backend yet, so this just acknowledges rather than pretending to send.
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="pb-24">
      <div className="shell grid items-start gap-12 sm:grid-cols-2 sm:gap-20">
        <div className="sm:pt-16">
          <p className="eyebrow">Contact us</p>
          <h2 className="section-title mt-3 max-w-[14ch]">WE ARE ALWAYS READY TO HELP YOU.</h2>

          <ul className="mt-8 space-y-3 text-[13px] text-ink/75">
            <li className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M4 6h16v12H4z" /><path d="m4 7 8 6 8-6" />
              </svg>
              For Inquires: Info@bersihclean.com
            </li>
            <li className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
              </svg>
              bersihclean.com
            </li>
            <li className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" />
              </svg>
              Kuta, Bali
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-brand-mist p-8 sm:p-10">
          <h3 className="text-center text-xl font-bold text-brand-deep">Get In Touch</h3>

          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            {FIELDS.map((f) => (
              <div key={f.name}>
                <label htmlFor={f.name} className="mb-1.5 block text-[11px] font-medium text-ink/65">
                  {f.label}
                </label>
                {f.type === 'textarea' ? (
                  <textarea
                    id={f.name} name={f.name} rows={3} placeholder={f.placeholder}
                    value={values[f.name]} onChange={onChange}
                    className="w-full resize-none rounded-md border border-black/10 bg-white px-3 py-2.5 text-[12.5px] text-ink outline-none transition placeholder:text-ink/30 focus:border-brand-blue"
                  />
                ) : (
                  <input
                    id={f.name} name={f.name} type={f.type} placeholder={f.placeholder}
                    value={values[f.name]} onChange={onChange}
                    className="w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-[12.5px] text-ink outline-none transition placeholder:text-ink/30 focus:border-brand-blue"
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full rounded-md bg-leaf py-3 text-[12.5px] font-semibold tracking-wide text-white transition hover:brightness-95"
            >
              Submit
            </button>

            {sent && (
              <p className="text-center text-[12px] font-medium text-leaf">
                Thanks — we'll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
