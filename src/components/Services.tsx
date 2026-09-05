import { useState, useEffect, useRef } from 'react'
import {
  Activity, Scissors, Bone, Dumbbell, CircleDot, HeartPulse, Zap, Shield,
  ChevronDown,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/* ── Service cards ─────────────────────────────────────── */
interface Service {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}

const SERVICES: Service[] = [
  {
    icon: Activity,
    title: 'Sports Injury Treatment',
    desc: 'Comprehensive diagnosis and management of acute and chronic sports injuries — from sprains and strains to complex ligament tears.',
    tags: ['Acute Injuries', 'Overuse Injuries', 'Fractures'],
  },
  {
    icon: Scissors,
    title: 'Arthroscopic Surgery',
    desc: 'Minimally invasive keyhole surgery for joints. Smaller incisions, less pain, faster return to activity.',
    tags: ['Knee', 'Shoulder', 'Ankle', 'Hip'],
  },
  {
    icon: Bone,
    title: 'ACL & Ligament Repair',
    desc: 'State-of-the-art ACL, PCL and multi-ligament reconstruction using the latest graft techniques and protocols.',
    tags: ['ACL', 'PCL', 'MCL', 'Multi-Ligament'],
  },
  {
    icon: Dumbbell,
    title: 'Shoulder & Elbow Care',
    desc: "Rotator cuff repair, shoulder stabilisation, SLAP repairs, tennis elbow and golfer's elbow treatment.",
    tags: ['Rotator Cuff', 'Instability', 'Tennis Elbow'],
  },
  {
    icon: CircleDot,
    title: 'Knee Specialist',
    desc: 'Meniscus repair and transplantation, cartilage restoration, patella disorders and partial knee replacement.',
    tags: ['Meniscus', 'Cartilage', 'Patella', 'Knee OA'],
  },
  {
    icon: HeartPulse,
    title: 'Rehabilitation Programs',
    desc: 'Structured, sport-specific rehab programmes designed in partnership with expert physiotherapists to ensure optimal recovery.',
    tags: ['Post-Op Rehab', 'Return to Sport', 'Prevention'],
  },
  {
    icon: Zap,
    title: 'PRP & Regenerative Therapy',
    desc: 'Platelet-Rich Plasma injections and regenerative medicine to accelerate healing without surgery where clinically appropriate.',
    tags: ['PRP', 'Injections', 'Non-Surgical'],
  },
  {
    icon: Shield,
    title: 'Injury Prevention & Screening',
    desc: 'Pre-participation screening and biomechanical assessments for teams and individual athletes to prevent injuries before they occur.',
    tags: ['Screening', 'Biomechanics', 'Teams'],
  },
]

/* ── Conditions by body part ───────────────────────────── */
interface ConditionGroup {
  emoji: string
  area: string
  color: string          // teal accent variant
  conditions: string[]
}

const CONDITION_GROUPS: ConditionGroup[] = [
  {
    emoji: '🦵',
    area: 'Knee',
    color: '#0F9D9A',
    conditions: [
      'Knee Pain',
      'ACL Tear',
      'Meniscus Tear',
      'Chondromalacia Patella',
      'Patellar Instability',
      'Osteoarthritis',
    ],
  },
  {
    emoji: '💪',
    area: 'Shoulder',
    color: '#0a7d7a',
    conditions: [
      'Shoulder Pain',
      'Rotator Cuff Tear',
      'Shoulder Impingement',
      'Biceps Tendinitis',
      'Shoulder Instability',
    ],
  },
  {
    emoji: '🦾',
    area: 'Elbow',
    color: '#0B2545',
    conditions: [
      'Elbow Pain',
      'Lateral Epicondylitis (Tennis Elbow)',
      'Medial Epicondylitis (Golfer\'s Elbow)',
      'Triceps Tendinitis',
    ],
  },
  {
    emoji: '🤚',
    area: 'Wrist',
    color: '#12375e',
    conditions: [
      'Wrist Pain',
      'TFCC Injury',
      "De Quervain's Tendinitis",
    ],
  },
  {
    emoji: '🏃',
    area: 'Hip',
    color: '#1a4a7a',
    conditions: [
      'Gluteal Tendinitis',
      'Hamstring Tendinitis',
      'Adductor Tendinitis',
      'IT Band (ITB) Syndrome',
    ],
  },
  {
    emoji: '🦶',
    area: 'Foot & Ankle',
    color: '#0d6e6e',
    conditions: [
      'Achilles Tendinitis',
      'Plantar Fasciitis',
      'Ankle Sprain',
    ],
  },
  {
    emoji: '🔄',
    area: 'Neck',
    color: '#1e5a8a',
    conditions: [
      'Neck Pain',
      'Cervical Spondylosis',
    ],
  },
  {
    emoji: '🧍',
    area: 'Low Back',
    color: '#164f7a',
    conditions: [
      'Low Back Pain',
      'Lumbar Spondylosis',
    ],
  },
]

/* ── Accordion item ────────────────────────────────────── */
function ConditionAccordion({ group, defaultOpen }: { group: ConditionGroup; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false)

  return (
    <div
      style={{
        background: open ? 'var(--white)' : 'rgba(255,255,255,0.04)',
        border: `1px solid ${open ? 'rgba(15,157,154,0.35)' : 'rgba(255,255,255,0.09)'}`,
        borderRadius: 'var(--r-md)',
        overflow: 'hidden',
        transition: 'background 0.25s ease, border-color 0.25s ease',
      }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.25rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          gap: '0.75rem',
          textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              width: 38, height: 38,
              background: open ? group.color : 'rgba(15,157,154,0.15)',
              borderRadius: 'var(--r-sm)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem',
              flexShrink: 0,
              transition: 'background 0.25s ease',
            }}
            aria-hidden="true"
          >
            {group.emoji}
          </span>
          <div>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9375rem',
              fontWeight: 700,
              color: open ? 'var(--navy)' : 'var(--white)',
              lineHeight: 1.2,
            }}>
              {group.area}
            </p>
            <p style={{
              fontSize: '0.75rem',
              color: open ? 'var(--text-muted)' : 'rgba(255,255,255,0.5)',
              marginTop: '0.15rem',
            }}>
              {group.conditions.length} conditions
            </p>
          </div>
        </div>
        <ChevronDown
          size={18}
          style={{
            color: open ? 'var(--teal)' : 'rgba(255,255,255,0.4)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease, color 0.25s ease',
            flexShrink: 0,
          }}
          aria-hidden="true"
        />
      </button>

      {/* Body */}
      <div
        style={{
          maxHeight: open ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <ul style={{
          padding: '0 1.25rem 1.25rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '0.5rem',
        }}>
          {group.conditions.map(c => (
            <li
              key={c}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                padding: '0.5rem 0.75rem',
                background: 'var(--bg-light)',
                borderRadius: 'var(--r-sm)',
                border: '1px solid var(--gray-200)',
              }}
            >
              <span
                style={{ width: 6, height: 6, background: 'var(--teal)', borderRadius: '50%', flexShrink: 0 }}
                aria-hidden="true"
              />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ── Main component ────────────────────────────────────── */
export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.reveal')
    if (!cards) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    cards.forEach(c => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="services section-py" id="services" ref={sectionRef}>
      <div className="container">

        {/* ── Section header ── */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <p className="label reveal">What We Treat</p>
          <h2 className="section-heading reveal reveal-delay-1">
            Specialised <span>Services</span>
          </h2>
          <p className="section-sub reveal reveal-delay-2">
            From elite athletes to weekend warriors, we deliver world-class orthopaedic care tailored to your goals and lifestyle.
          </p>
        </div>

        {/* ── Service cards grid ── */}
        <div className="services-grid">
          {SERVICES.map((svc, i) => (
            <div
              className={`service-card reveal reveal-delay-${Math.min(i % 4 + 1, 5)}`}
              key={svc.title}
            >
              <div className="service-icon-wrap" aria-hidden="true">
                <svc.icon size={26} />
              </div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
              <div className="service-tags">
                {svc.tags.map(tag => (
                  <span className="service-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Conditions by body part ── */}
        <div className="reveal" style={{ marginTop: '4rem' }}>
          {/* Dark panel header */}
          <div style={{
            background: 'var(--navy)',
            borderRadius: 'var(--r-xl) var(--r-xl) 0 0',
            padding: '2rem 2rem 1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1rem',
          }}>
            <div>
              <p style={{
                fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.5rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <span style={{ display: 'inline-block', width: 20, height: 2, background: 'var(--teal)', borderRadius: 2 }} />
                Conditions Treated
              </p>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.625rem)',
                fontWeight: 700,
                color: 'var(--white)',
                lineHeight: 1.2,
              }}>
                Orthopaedic Conditions by Body Area
              </h3>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(15,157,154,0.15)',
              border: '1px solid rgba(15,157,154,0.3)',
              borderRadius: 'var(--r-full)',
              padding: '0.4rem 1rem',
            }}>
              <span style={{ width: 8, height: 8, background: 'var(--teal)', borderRadius: '50%' }} />
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--teal)' }}>
                {CONDITION_GROUPS.reduce((sum, g) => sum + g.conditions.length, 0)} conditions listed
              </span>
            </div>
          </div>

          {/* Accordion list */}
          <div style={{
            background: 'var(--navy)',
            borderRadius: '0 0 var(--r-xl) var(--r-xl)',
            padding: '0 2rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.625rem',
          }}>
            {CONDITION_GROUPS.map((group, i) => (
              <ConditionAccordion
                key={group.area}
                group={group}
                defaultOpen={i === 0}   // Knee open by default
              />
            ))}

            {/* CTA inside the panel */}
            <div style={{
              marginTop: '1rem',
              padding: '1.25rem',
              background: 'rgba(15,157,154,0.1)',
              border: '1px solid rgba(15,157,154,0.2)',
              borderRadius: 'var(--r-md)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', maxWidth: '480px' }}>
                Don't see your condition? Dr. Praveen manages a wide range of orthopaedic issues — get in touch for a consultation.
              </p>
              <a
                href="#contact"
                className="btn btn-primary btn-sm"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
