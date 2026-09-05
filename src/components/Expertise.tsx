import { useEffect, useRef } from 'react'
import {
  Trophy, Microscope, Sparkles, Clock, Users, Star,
  GraduationCap, Award, BadgeCheck, Medal,
} from 'lucide-react'

/* ── Why Choose cards — unique value props, no cred repetition ── */
const WHY_CARDS = [
  {
    icon: Trophy,
    title: 'FIFA Certified',
    desc: 'Holds the FIFA Diploma in Football Medicine — a globally recognised sports medicine qualification.',
  },
  {
    icon: Microscope,
    title: 'Regenerative Medicine',
    desc: 'Advanced PRP and USG-guided regenerative techniques to accelerate tissue healing without surgery.',
  },
  {
    icon: Sparkles,
    title: 'Personalised Care',
    desc: 'Every patient receives a bespoke non-operative treatment and rehabilitation plan.',
  },
  {
    icon: Clock,
    title: 'Fast Recovery Focus',
    desc: 'Evidence-based protocols designed for optimised return-to-sport with minimal downtime.',
  },
  {
    icon: Users,
    title: 'Multidisciplinary Team',
    desc: 'Works closely with physiotherapists and athletic trainers for seamless continuum of care.',
  },
  {
    icon: Star,
    title: 'Academic Excellence',
    desc: 'MD topper at GGSIPU 2021; ranked 3083 nationally in NEET PG — research-backed clinical practice.',
  },
]

/* ── Qualifications — single source of truth across entire site ── */
const QUALIFICATIONS = [
  {
    icon: GraduationCap,
    category: 'Education',
    items: [
      'MD Sports Medicine — GGSIPU / Safdarjung Hospital, New Delhi · Gold Topper, July 2021',
      'MBBS — Govt. Theni Medical College, Tamil Nadu Dr. MGR Medical University (2016)',
    ],
  },
  {
    icon: Award,
    category: 'Licences & Certifications',
    items: [
      'DOH Licensed Specialist Sports Medicine — Abu Dhabi (GD-47361)',
      'DHA Licensed Specialist Sports Medicine — Dubai (22777942)',
      'FIFA Diploma in Football Medicine',
      'BLS & ACLS Certified Instructor — American Heart Association Accredited',
    ],
  },
  {
    icon: Medal,
    category: 'Achievements & Distinctions',
    items: [
      'Gold Topper — MD Sports Medicine theory exam, GGSIPU, July 2021',
      'Ranked 3083 in NEET PG 2018 (national entrance); top ranker among Sports Medicine peers',
      'Distinctions in Anatomy, Pharmacology & Pathology — Tamil Nadu Dr. MGR Medical University',
      'Team Doctor — Indian National Tournaments',
      'Doping Control Officer — Indian National Tournaments',
    ],
  },
  {
    icon: BadgeCheck,
    category: 'Affiliations',
    items: [
      'Member, UAE Sports Medicine & Exercise Science Society',
      'Published researcher; presenter at national sports medicine conferences',
    ],
  },
]

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section className="why section-py" id="why-us" ref={sectionRef}>
      <div className="container">

        {/* ── Section header ── */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="label reveal" style={{ justifyContent: 'center' }}>Why Dr. Praveen</p>
          <h2 className="section-heading reveal reveal-delay-1" style={{ textAlign: 'center' }}>
            The <span>FitClinic</span> Difference
          </h2>
          <p className="section-sub reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            Combining academic excellence, FIFA-certified expertise and genuine commitment to
            getting you back to what you love.
          </p>
        </div>

        {/* ── Why cards ── */}
        <div className="why-cards reveal reveal-delay-2" style={{ marginBottom: '5rem' }}>
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

        {/* ── Qualifications — single place on the whole site ── */}
        <div className="reveal" style={{ marginTop: '1rem' }}>
          <p className="label" style={{ marginBottom: '2rem' }}>
            Qualifications, Licences &amp; Achievements
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {QUALIFICATIONS.map(group => (
              <div
                key={group.category}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: 'var(--r-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-xs)',
                }}
              >
                {/* Card header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.25rem',
                  background: 'var(--navy)',
                }}>
                  <div style={{
                    width: 36, height: 36,
                    background: 'rgba(15,157,154,0.2)',
                    borderRadius: 'var(--r-sm)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <group.icon size={18} style={{ color: 'var(--teal)' }} aria-hidden="true" />
                  </div>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--white)',
                    letterSpacing: '0.02em',
                  }}>
                    {group.category}
                  </h4>
                </div>

                {/* Items */}
                <ul style={{ padding: '0.75rem 1.25rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {group.items.map(item => (
                    <li
                      key={item}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: '0.625rem',
                        fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55,
                        paddingTop: '0.625rem',
                        borderTop: '1px solid var(--gray-100)',
                      }}
                    >
                      <span style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: 'var(--teal)', flexShrink: 0, marginTop: '5px',
                      }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
