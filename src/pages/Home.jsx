import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Icon from '../components/Icon'
import fiveStar from '../assets/five-star.jpg'
import ContactSection from '../components/ContactSection'
import { SERVICES, ADVANTAGES } from '../data/content'

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero-wash relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28">
        <div className="shell">
          <h1 className="text-center text-[13vw] font-extrabold leading-[0.95] tracking-[-0.02em] text-ink sm:text-[118px]">
            BERSIH CLEAN
          </h1>

          <div className="relative mt-4 grid items-center gap-8 sm:mt-0 sm:grid-cols-3">
            <div className="order-2 sm:order-1">
              <p className="text-lg font-semibold text-ink">Clean linen. Zero friction.</p>
              <p className="mt-2 max-w-[30ch] text-[13px] leading-relaxed text-ink/70">
                Bersih clean is a commercial laundry partner purpose-built for luxury villas,
                vacation rentals, and boutique hospitality managers.
              </p>
            </div>

            {/* The logo overlaps the wordmark in the design, so it is pulled up. */}
            <div className="order-1 flex justify-center sm:order-2 sm:mt-2">
              <img src={logo} alt="Bersih Clean logo" className="w-[240px] max-w-full sm:w-[330px]" />
            </div>

            <div className="order-3 sm:justify-self-end sm:text-right">
              <p className="text-2xl font-extrabold leading-tight text-brand-blue">
                READY TO<br />CONNECT?
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-block rounded-md bg-leaf px-8 py-3 text-[13px] font-semibold tracking-wide text-white shadow-sm transition hover:brightness-95"
              >
                CONNECT NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="py-24">
        <div className="shell grid gap-10 sm:grid-cols-[minmax(0,260px)_1fr] sm:gap-16">
          <div>
            <p className="eyebrow">About us</p>
            <h2 className="section-title mt-3">WHO<br />ARE<br />WE?</h2>
          </div>
          <p className="max-w-[62ch] self-start text-[13.5px] leading-[1.9] text-ink/75">
            Bersih Clean is a commercial laundry partner purpose-built for luxury villas, vacation
            rentals, and boutique hospitality managers. Engineered to eliminate the operational
            bottlenecks of island hospitality, we combine industrial processing power with digital
            logistics to deliver crisp, hygienic linens with zero friction. While our primary
            operations handle high-volume villa linen turnovers, our ecosystem is built to scale
            seamlessly into on-demand, premium personal valet laundry for staying guests.
          </p>
        </div>
      </section>

      {/* ---------- CORE SERVICES ---------- */}
      <section className="pb-24">
        <div className="shell">
          <div className="grid gap-10 sm:grid-cols-[minmax(0,260px)_1fr] sm:gap-16">
            <div>
              <p className="eyebrow">What we offer</p>
              <h2 className="section-title mt-3">CORE<br />SERVICES</h2>
            </div>
            <p className="max-w-[62ch] self-start text-[13.5px] leading-[1.9] text-ink/75">
              A complete laundry workflow designed around the pace, standards, and guest expectations
              of premium hospitality. we combine industrial processing power with digital logistics to
              deliver crisp, hygienic linens with zero friction.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <article key={s.title} className="rounded-xl bg-brand-mist p-7 transition hover:shadow-md">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-brand-blue shadow-sm">
                  <Icon name={s.icon} />
                </span>
                <h3 className="mt-5 text-[13.5px] font-semibold leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-ink/65">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="pb-24">
        <div className="shell">
          <p className="eyebrow">Why choose us?</p>
          <h2 className="section-title mt-3 max-w-[16ch]">THE BERSIH CLEAN ADVANTAGE</h2>

          <div className="mt-12 grid gap-x-16 gap-y-10 sm:grid-cols-2">
            {ADVANTAGES.map((a) => (
              <div key={a.title}>
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-sky text-brand-blue">
                  <Icon name={a.icon} />
                </span>
                <h3 className="mt-4 text-[13.5px] font-semibold text-brand-blue">{a.title}</h3>
                <p className="mt-1.5 max-w-[46ch] text-[12.5px] leading-relaxed text-ink/70">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FIVE-STAR ---------- */}
      <section className="pb-24">
        <div className="shell grid items-center gap-12 sm:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <img
              src={fiveStar}
              alt="Folded linen held in arms"
              className="h-[400px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow">The guest experience starts here</p>
            <h2 className="section-title mt-3 max-w-[13ch]">FIVE-STAR PRESENTATION, EVERY TURNOVER.</h2>
            <p className="mt-5 max-w-[46ch] text-[13px] leading-[1.9] text-ink/75">
              We treat linen presentation as an extension of the guest experience. By combining
              rigorous textile quality control with reliable logistics, bersih clean ensures your
              villas consistently meet five-star standards from the bed to the pool.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
