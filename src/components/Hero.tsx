import { useEffect, useRef } from 'react'
import { Phone, MessageCircle, ChevronDown, ShieldCheck, Award, GraduationCap, BadgeCheck, Play } from 'lucide-react'

const STATS = [
  { value: '6+',   label: 'Years Experience' },
  { value: '2K+',  label: 'Patients Treated' },
  { value: '2',    label: 'UAE Licences' },
  { value: '4.9★', label: 'Google Rating' },
]

const TRUST_ITEMS = [
  { icon: ShieldCheck,   text: 'DOH & DHA Licensed Specialist' },
  { icon: Award,         text: 'FIFA Diploma in Football Medicine' },
  { icon: GraduationCap, text: 'MD Sports Medicine — Gold Topper, 2021' },
  { icon: BadgeCheck,    text: 'BLS & ACLS Certified Instructor (AHA)' },
]

const REEL_URL  = 'https://www.instagram.com/reel/DZpVjBdsaqh/'
const EMBED_URL = 'https://www.instagram.com/reel/DZpVjBdsaqh/embed/'

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
            <div className="hero-grid">

              {/* ── Left: text + stats ── */}
              <div ref={textRef}>
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

              {/* ── Right: Instagram Reel embed ── */}
              <div className="hero-video-col">
                {/* Label */}
                <div className="hero-video-label">
                  <Play size={13} aria-hidden="true" />
                  Introduction
                </div>

                {/* Embed frame */}
                <div className="hero-video-frame">
                  <iframe
                    src={EMBED_URL}
                    title="Dr. Praveen Ravi — Introduction Reel"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block', borderRadius: 'inherit' }}
                    allowFullScreen
                    loading="lazy"
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    aria-label="Dr. Praveen Ravi introduction video"
                  />
                </div>

                {/* Fallback link */}
                <a
                  href={REEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-video-fallback"
                  aria-label="Watch on Instagram"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Watch on Instagram
                </a>
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

      {/* Trust bar */}
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
