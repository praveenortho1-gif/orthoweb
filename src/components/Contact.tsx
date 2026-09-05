import { useState, useRef, useEffect, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'

interface FormState {
  name: string; email: string; phone: string; service: string; message: string
}
const INITIAL: FormState = { name: '', email: '', phone: '', service: '', message: '' }

const INFO_CARDS = [
  {
    icon: MapPin,
    title: 'Location',
    lines: ['FitClinic Exercise & Sport Medicine', 'Abu Dhabi, United Arab Emirates'],
  },
  {
    icon: Phone,
    title: 'Phone / WhatsApp',
    lines: ['+971 547 541 252'],
    href: 'tel:+971547541252',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['praveenortho1@gmail.com'],
    href: 'mailto:praveenortho1@gmail.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Sun – Thu: 9:00 AM – 6:00 PM', 'Saturday: 10:00 AM – 2:00 PM'],
  },
]

const SERVICES = [
  'Sports Injury Treatment',
  'Arthroscopic Surgery',
  'ACL & Ligament Repair',
  'Shoulder & Elbow Care',
  'Knee Specialist',
  'Rehabilitation Program',
  'PRP / Regenerative Therapy',
  'Injury Prevention Screening',
  'General Orthopaedic Consultation',
]

export default function Contact() {
  const [form,        setForm]        = useState<FormState>(INITIAL)
  const [submitting,  setSubmitting]  = useState(false)
  const [submitted,   setSubmitted]   = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
      }),
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1400))
    setSubmitting(false)
    setSubmitted(true)
    setForm(INITIAL)
    setTimeout(() => setSubmitted(false), 6000)
  }

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [key]: e.target.value }))

  return (
    <>
      {/* ── CTA Banner ── */}
      <div style={{
        background: 'linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%)',
        padding: '3.5rem 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 800, color: 'var(--white)', marginBottom: '0.75rem' }}>
            Ready to Get Back in the Game?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '1.75rem', maxWidth: '480px', margin: '0 auto 1.75rem' }}>
            Don't let an injury sideline you. Book your consultation with Dr. Praveen today.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <a href="tel:+971547541252" className="btn btn-navy btn-lg">
              <Phone size={18} /> Call Now
            </a>
            <a
              href="https://wa.me/971547541252"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

        </div>
      </div>

      {/* ── Main contact section ── */}
      <section className="contact section-py" id="contact" ref={sectionRef}>
        <div className="container">
          <div className="contact-grid">

            {/* ── Info column ── */}
            <div>
              <p className="label reveal">Get In Touch</p>
              <h2 className="section-heading reveal reveal-delay-1">
                Book Your <span>Appointment</span>
              </h2>
              <p className="section-sub reveal reveal-delay-2" style={{ marginBottom: '2rem' }}>
                Fill in the form and our team will confirm your appointment within 2 hours during clinic hours.
              </p>

              <div className="contact-info-cards reveal reveal-delay-3">
                {INFO_CARDS.map(card => (
                  <div className="contact-info-card" key={card.title}>
                    <div className="contact-info-icon" aria-hidden="true">
                      <card.icon size={20} />
                    </div>
                    <div className="contact-info-body">
                      <h4>{card.title}</h4>
                      {card.lines.map((line, i) => (
                        card.href
                          ? <p key={i}><a href={card.href}>{line}</a></p>
                          : <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp shortcut */}
              {/* WhatsApp + Instagram side by side */}
              <div className="reveal reveal-delay-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.5rem' }}>
                <a
                  href="https://wa.me/971547541252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  aria-label="Book via WhatsApp"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/drpraveenravi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.875rem 1.5rem',
                    background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
                    color: '#fff',
                    fontSize: '0.9375rem', fontWeight: 600,
                    borderRadius: 'var(--r-full)',
                    transition: 'opacity 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @drpraveenravi
                </a>
                <a
                  href="https://www.linkedin.com/in/dr-praveen-ravi-mbbs-md-01007817a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.875rem 1.5rem',
                    background: '#0A66C2',
                    color: '#fff',
                    fontSize: '0.9375rem', fontWeight: 600,
                    borderRadius: 'var(--r-full)',
                    transition: 'background 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#084e96'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#0A66C2'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://x.com/Praveensportmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on X"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.875rem 1.5rem',
                    background: '#000000',
                    color: '#fff',
                    fontSize: '0.9375rem', fontWeight: 600,
                    borderRadius: 'var(--r-full)',
                    transition: 'background 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#333'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#000'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.733-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  @Praveensportmed
                </a>
              </div>

              {/* Embedded map */}
              <div className="reveal reveal-delay-5" style={{ marginTop: '1.5rem', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
                <iframe
                  title="FitClinic Abu Dhabi — Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.9554!2d54.37219!3d24.45261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665757a35159%3A0xddb6861f2b34ebfb!2sFitClinic%20Exercise%20and%20Sport%20Medicine%20Medical%20Center!5e0!3m2!1sen!2sae!4v1725000000000!5m2!1sen!2sae"
                  width="100%"
                  height="260"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="FitClinic location on Google Maps"
                />
                <a
                  href="https://share.google/igttb5Hie2NpJSmlY"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    padding: '0.75rem',
                    background: 'var(--bg-light)',
                    borderTop: '1px solid var(--gray-200)',
                    fontSize: '0.8125rem', fontWeight: 600,
                    color: 'var(--teal)',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--teal-light)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-light)')}
                >
                  <MapPin size={14} aria-hidden="true" />
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* ── Form column ── */}
            <div className="form-card reveal reveal-delay-2">
              {submitted ? (
                <div className="form-success">
                  <CheckCircle size={56} className="form-success-icon" aria-hidden="true" />
                  <h3>Appointment Request Sent!</h3>
                  <p>Our team will contact you within 2 working hours to confirm your appointment.</p>
                </div>
              ) : (
                <>
                  <p className="form-title">Request an Appointment</p>
                  <p className="form-sub">All fields marked * are required.</p>

                  <form className="form-fields" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name" type="text" required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={set('name')}
                      />
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                          id="email" type="email" required
                          placeholder="you@email.com"
                          value={form.email}
                          onChange={set('email')}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone / WhatsApp *</label>
                        <input
                          id="phone" type="tel" required
                          placeholder="+971 XX XXX XXXX"
                          value={form.phone}
                          onChange={set('phone')}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="service">Service Required</label>
                      <select id="service" value={form.service} onChange={set('service')}>
                        <option value="">Select a service…</option>
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Tell us about your condition</label>
                      <textarea
                        id="message" rows={4}
                        placeholder="Brief description of your injury or concern…"
                        value={form.message}
                        onChange={set('message')}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-full" disabled={submitting}>
                      {submitting ? (
                        'Sending…'
                      ) : (
                        <><Send size={16} /> Send Request</>
                      )}
                    </button>

                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>
                      We confirm within 2 hours during clinic hours. Your data is kept private.
                    </p>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── Floating mobile CTA ── */}
      <div className="mobile-cta" role="complementary" aria-label="Quick contact">
        <a href="https://wa.me/971547541252" target="_blank" rel="noopener noreferrer" className="mobile-cta-btn mobile-cta-wa" aria-label="WhatsApp">
          <MessageCircle size={18} /> WhatsApp
        </a>
        <a href="tel:+971547541252" className="mobile-cta-btn mobile-cta-book" aria-label="Call clinic">
          <Phone size={18} /> Call
        </a>
      </div>
    </>
  )
}
