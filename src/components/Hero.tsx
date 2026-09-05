import { useEffect, useRef } from 'react'
import { Phone, MessageCircle, ChevronDown, ShieldCheck, Award, GraduationCap, BadgeCheck } from 'lucide-react'

const STATS = [
  { value: '6+',   label: 'Years Experience' },
  { value: '2K+',  label: 'Patients Treated' },
  { value: '2',    label: 'UAE Licences' },
  { value: '4.9★', label: 'Google Rating' },
]

/* Trust bar — 4 distinct items, shown once, no duplication elsewhere */
const TRUST_ITEMS = [
  { icon: ShieldCheck,   text: 'DOH & DHA Licensed Specialist' },
  { icon: Award,         text: 'FIFA Diploma in Football Medicine' },
  { icon: GraduationCap, text: 'MD Sports Medicine — Gold Topper, 2021' },
  { icon: BadgeCheck,    text: 'BLS & ACLS Certified Instructor (AHA)' },
]

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const children = textRef.current?.querySelectorAll('.hero-animate')
    children?.forEach((el, i) => {
      const h = el as HTMLElement
      h.style.opacity = '0'
      h.style.transform = 'translateY(24px)'
      h.style.transition = `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`
      requestAnimationFrame(() => {
        h.style.opacity = '1'
        h.style.transform = 'translateY(0)'
      })
    })
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <>
      <section className="hero" id="home" aria-label="Hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-bg-dot-grid" />
          <div className="hero-bg-circle hero-bg-circle-1" />
          <div className="hero-bg-circle hero-bg-circle-2" />
          <div className="hero-bg-glow" />
        </div>

        <div className="hero-inner">
          <div className="container">
            {/* Single-column layout — no right panel */}
            <div className="hero-text-wrap" ref={textRef}>
              <div className="hero-eyebrow hero-animate">
                Specialist Sports Medicine · FitClinic Abu Dhabi
              </div>

              <h1 className="hero-title hero-animate">
                Expert <span className="accent">Sports Medicine</span>
                <br />&amp; Musculoskeletal Care
              </h1>

              <p className="hero-desc hero-animate">
                <strong style={{ color: 'rgba(255,255,255,0.92)' }}>Dr. Praveen Ravi</strong> is a
                DOH &amp; DHA licensed Specialist in Sports Medicine at{' '}
                <strong style={{ color: 'rgba(255,255,255,0.92)' }}>FitClinic, Abu Dhabi</strong> —
                delivering evidence-based, non-operative care for athletes and active individuals
                across the UAE.
              </p>

              <div className="hero-actions hero-animate">
                <button className="btn btn-primary btn-lg" onClick={() => scrollTo('contact')}>
                  Book Consultation
                </button>
                <a
                  href="https://wa.me/971547541252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-quick-contact"
                  aria-label="WhatsApp Dr. Praveen"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
                <a href="tel:+971547541252" className="hero-quick-contact" aria-label="Call clinic">
                  <Phone size={18} />
                  +971 547 541 252
                </a>
              </div>

              <div className="hero-stats hero-animate">
                {STATS.map(s => (
                  <div className="hero-stat" key={s.label}>
                    <span className="hero-stat-number">{s.value}</span>
                    <span className="hero-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo('about')}
          aria-label="Scroll down"
          style={{
            position: 'absolute', bottom: '2rem', left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem',
            color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            background: 'none', border: 'none', cursor: 'pointer',
            animation: 'hero-bounce 2.2s ease-in-out infinite',
          }}
        >
          <span>Scroll</span>
          <ChevronDown size={18} />
        </button>
        <style>{`@keyframes hero-bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(8px)}}`}</style>
      </section>

      {/* Trust bar — credentials shown once, here only */}
      <div className="trust-bar" role="complementary" aria-label="Credentials">
        <div className="container">
          <div className="trust-bar-inner">
            {TRUST_ITEMS.map(item => (
              <div className="trust-item" key={item.text}>
                <item.icon size={15} aria-hidden="true" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
