import { useEffect, useRef } from 'react'
import { Trophy, Microscope, Sparkles, Clock, Users, Star, MapPin, Phone, Medal } from 'lucide-react'

const EXPERTISE_BARS = [
  { label: 'Non-Operative Sports Injury Management', pct: 95 },
  { label: 'USG-Guided Injections & PRP Therapy',    pct: 93 },
  { label: 'Musculoskeletal Imaging Interpretation',  pct: 92 },
  { label: 'Rehabilitation Programme Design',         pct: 90 },
  { label: 'Pre-Participation Medical Evaluation',    pct: 88 },
  { label: 'On-Field Emergency & Trauma Care',        pct: 92 },
]

const WHY_CARDS = [
  {
    icon: Trophy,
    title: 'FIFA Certified',
    desc: 'Holds the prestigious FIFA Diploma in Football Medicine — globally recognised sports medicine qualification.',
  },
  {
    icon: Microscope,
    title: 'Regenerative Medicine',
    desc: 'Advanced PRP and regenerative techniques to accelerate healing without surgery where appropriate.',
  },
  {
    icon: Sparkles,
    title: 'Personalised Care',
    desc: 'Bespoke non-operative rehabilitation plans tailored to individual biomechanics and performance goals.',
  },
  {
    icon: Clock,
    title: 'Fast Recovery Focus',
    desc: 'Evidence-based protocols for optimised return-to-sport timelines with minimal downtime.',
  },
  {
    icon: Users,
    title: 'Multidisciplinary Team',
    desc: 'Close collaboration with physiotherapists and athletic trainers for seamless continuum of care.',
  },
  {
    icon: Star,
    title: 'Academic Excellence',
    desc: 'MD topper at GGSIPU 2021 and ranked 3083 nationally in NEET PG — bringing research-backed expertise.',
  },
]

const ACCOMPLISHMENTS = [
  { icon: Medal, text: 'Topped MD Sports Medicine theory exam — Guru Gobind Singh Indraprastha University, July 2021' },
  { icon: Medal, text: 'Ranked 3083 in NEET PG 2018 (highly competitive national entrance); topped among Sports Medicine peers' },
  { icon: Medal, text: 'Active DOH Licence GD-47361 & DHA Licence 22777942 — Specialist Sports Medicine' },
  { icon: Medal, text: 'Certified BLS & ACLS provider (American Heart Association accredited)' },
  { icon: Medal, text: 'FIFA Diploma in Football Medicine' },
  { icon: Medal, text: 'Distinctions in Anatomy, Pharmacology & Pathology — Tamil Nadu Dr. MGR Medical University' },
  { icon: Medal, text: 'Team Doctor & Doping Control Officer — Indian National Tournaments' },
]

const CLINIC_INFO = [
  { icon: MapPin, label: 'Location', value: 'FitClinic, Abu Dhabi, UAE' },
  { icon: Phone,  label: 'Phone',    value: '+971 547 541 252' },
  { icon: Clock,  label: 'Hours',    value: 'Sun–Thu 9AM–6PM, Sat 10AM–2PM' },
]

export default function Expertise() {
  const sectionRef    = useRef<HTMLElement>(null)
  const barsRef       = useRef<HTMLDivElement>(null)
  const barsAnimated  = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
      }),
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !barsAnimated.current) {
          barsAnimated.current = true
          barsRef.current?.querySelectorAll('.exp-fill').forEach(el => el.classList.add('animated'))
        }
      },
      { threshold: 0.4 }
    )
    if (barsRef.current) observer.observe(barsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="why section-py" id="why-us" ref={sectionRef}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="label reveal" style={{ justifyContent: 'center' }}>Why Choose Dr. Praveen</p>
          <h2 className="section-heading reveal reveal-delay-1" style={{ textAlign: 'center' }}>
            The <span>FitClinic</span> Difference
          </h2>
          <p className="section-sub reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            Combining academic excellence, FIFA-certified expertise and a genuine commitment to
            getting you back to what you love.
          </p>
        </div>

        {/* Why cards + bars */}
        <div className="why-grid">

          <div className="why-cards reveal reveal-delay-2">
            {WHY_CARDS.map(card => (
              <div className="why-card" key={card.title}>
                <div className="why-card-icon" aria-hidden="true">
                  <card.icon size={22} />
                </div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-3">
            <p className="label" style={{ marginBottom: '1.5rem' }}>Clinical Expertise</p>
            <div className="expertise-bars" ref={barsRef}>
              {EXPERTISE_BARS.map(item => (
                <div className="exp-item" key={item.label}>
                  <div className="exp-header">
                    <span>{item.label}</span>
                    <span>{item.pct}%</span>
                  </div>
                  <div
                    className="exp-track"
                    role="progressbar"
                    aria-valuenow={item.pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={item.label}
                  >
                    <div
                      className="exp-fill"
                      style={{ '--target-width': `${item.pct}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Clinic info */}
            <div style={{
              marginTop: '2.5rem', padding: '1.5rem',
              background: 'var(--bg-light)', borderRadius: 'var(--r-lg)',
              border: '1px solid var(--gray-200)',
            }}>
              <p style={{
                fontSize: '0.8125rem', fontWeight: 700, color: 'var(--navy)',
                textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem',
              }}>
                Clinic Information
              </p>
              {CLINIC_INFO.map(info => (
                <div key={info.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.875rem' }}>
                  <info.icon size={16} style={{ color: 'var(--teal)', marginTop: '2px', flexShrink: 0 }} aria-hidden="true" />
                  <div>
                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{info.label}</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Accomplishments strip ── */}
        <div className="reveal" style={{ marginTop: '4rem' }}>
          <p className="label" style={{ marginBottom: '1.25rem' }}>Key Accomplishments</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '0.875rem',
          }}>
            {ACCOMPLISHMENTS.map(a => (
              <div key={a.text} style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.875rem',
                padding: '1.125rem 1.25rem',
                background: 'var(--bg-light)',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--r-md)',
              }}>
                <div style={{
                  width: 36, height: 36,
                  background: 'rgba(15,157,154,0.12)',
                  border: '1px solid rgba(15,157,154,0.25)',
                  borderRadius: 'var(--r-sm)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <a.icon size={18} style={{ color: 'var(--teal)' }} aria-hidden="true" />
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{a.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
