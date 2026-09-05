import { useEffect, useRef } from 'react'
import { CheckCircle, Award, GraduationCap, MapPin } from 'lucide-react'

/* Qualifications — no overlap with skills list */
const CREDENTIALS = [
  { icon: GraduationCap, text: 'MD Sports Medicine — GGSIPU, New Delhi · Topper, July 2021' },
  { icon: GraduationCap, text: 'MBBS — Govt. Theni Medical College, Tamil Nadu (2016)' },
  { icon: Award,         text: 'FIFA Diploma in Football Medicine' },
  { icon: Award,         text: 'DOH Licensed Specialist · GD-47361' },
  { icon: Award,         text: 'DHA Licensed Specialist · 22777942' },
  { icon: Award,         text: 'BLS & ACLS Provider (AHA Accredited)' },
  { icon: Award,         text: 'Team Doctor & Doping Control Officer — Indian National Tournaments' },
]

/* Clinical skills — concise, distinct items */
const SKILLS = [
  'USG-Guided Injections & PRP Therapy',
  'Musculoskeletal Ultrasound Imaging',
  'Non-Operative Rehabilitation Design',
  'Pre-Participation Evaluations (PPE)',
  'On-Field Emergency & Trauma Care',
  'Biomechanical & Injury Prevention Assessment',
  'X-Ray / CT / MRI Interpretation',
  'Doping Control (WADA Standards)',
]

interface WorkExp {
  role: string; org: string; location: string; period: string
  current?: boolean; highlights: string[]
}

/* Work highlights trimmed — no cross-role repetition */
const WORK: WorkExp[] = [
  {
    role: 'Specialist Sports Medicine',
    org: 'FitClinic Exercise & Sport Medicine',
    location: 'Abu Dhabi, UAE',
    period: 'June 2026 – Present',
    current: true,
    highlights: [
      'Manage acute & chronic musculoskeletal conditions across elite and recreational athletes.',
      'Design bespoke non-operative rehab plans aligned to individual biomechanics and goals.',
      'Perform USG-guided injections and regenerative medicine procedures.',
      'Lead multidisciplinary collaboration with physiotherapists and athletic trainers.',
    ],
  },
  {
    role: 'Specialist Sports Medicine',
    org: 'Tarmeem Orthopedic Hospital',
    location: 'Abu Dhabi, UAE',
    period: 'Dec 2025 – Apr 2026',
    highlights: [
      'Conducted pre-participation medical evaluations (PPEs) and athlete readiness assessments.',
      'Delivered on-field injury triage and emergency care at live sporting events.',
      'Ensured full compliance with international anti-doping regulatory standards.',
      'Engaged in clinical research to advance evidence-based sports medicine practice.',
    ],
  },
  {
    role: 'Consultant & Assistant Professor',
    org: 'Saveetha Medical College & Hospital',
    location: 'Chennai, India',
    period: '2021 – 2025',
    highlights: [
      'Taught MBBS students and PG residents through lectures, ward rounds and procedural training.',
      'Published peer-reviewed research; presented at national medical conferences.',
      'Served as internal examiner for university clinical and theoretical assessments.',
    ],
  },
]

export default function About() {
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

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="about section-py" id="about" ref={sectionRef}>
      <div className="container">

        {/* ── Photo + Bio ── */}
        <div className="about-grid">

          {/* Photo — clean frame, no floating badges */}
          <div className="about-photo-wrap reveal">
            <div className="about-photo" role="img" aria-label="Dr. Praveen Ravi">
              <img
                src="/dr-praveen.jpg"
                alt="Dr. Praveen Ravi, Specialist Sports Medicine at FitClinic Abu Dhabi"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  borderRadius: 'inherit',
                }}
              />
            </div>
          </div>

          {/* Bio */}
          <div className="about-body">
            <p className="label reveal">About the Doctor</p>
            <h2 className="section-heading reveal reveal-delay-1">
              Dr. Praveen Ravi<br />
              <span>Specialist Sports Medicine</span>
            </h2>

            <div className="reveal reveal-delay-2">
              <p>
                Dr. Praveen Ravi is a <strong>DOH &amp; DHA licensed Specialist in Sports Medicine</strong> at
                FitClinic, Abu Dhabi. Holding an <strong>MD in Sports Medicine</strong> from Safdarjung Hospital,
                New Delhi — where he topped the theory examination — and a <strong>FIFA Diploma in Football
                Medicine</strong>, he brings 6+ years of evidence-based clinical expertise to every consultation.
              </p>
              <p>
                His focus is on <strong>non-operative, patient-centred care</strong>: accurate diagnosis through
                advanced imaging, precise USG-guided procedures, regenerative therapy, and individualised
                rehabilitation — getting athletes and active individuals safely back to peak performance.
              </p>
            </div>

            <div className="about-checklist reveal reveal-delay-3">
              {SKILLS.map(skill => (
                <div className="about-check" key={skill}>
                  <CheckCircle size={17} aria-hidden="true" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-4" style={{ marginTop: '2rem' }}>
              <a href="#contact" className="btn btn-navy" onClick={scrollToContact}>
                Book a Consultation
              </a>
            </div>
          </div>
        </div>

        {/* ── Qualifications ── */}
        <div className="reveal" style={{ marginTop: '4rem' }}>
          <p className="label" style={{ marginBottom: '1.25rem' }}>Qualifications &amp; Licences</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '0.75rem',
          }}>
            {CREDENTIALS.map(c => (
              <div
                key={c.text}
                className="cred-card"
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                  padding: '1rem 1.125rem',
                  background: 'var(--bg-light)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: 'var(--r-md)',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(15,157,154,0.4)'
                  el.style.boxShadow = 'var(--shadow-sm)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--gray-200)'
                  el.style.boxShadow = 'none'
                }}
              >
                <c.icon size={18} style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '1px' }} aria-hidden="true" />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{c.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Work timeline ── */}
        <div className="reveal" style={{ marginTop: '4rem' }}>
          <p className="label" style={{ marginBottom: '1.5rem' }}>Work Experience</p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {WORK.map((job, idx) => (
              <div key={job.org} style={{ display: 'flex', gap: '1.5rem' }}>

                {/* Spine */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{
                    width: 14, height: 14, borderRadius: '50%', marginTop: '4px', flexShrink: 0, zIndex: 1,
                    background: job.current ? 'var(--teal)' : 'var(--gray-300)',
                    border: `3px solid ${job.current ? 'var(--teal)' : 'var(--gray-200)'}`,
                    boxShadow: job.current ? '0 0 0 4px rgba(15,157,154,0.2)' : 'none',
                  }} />
                  {idx < WORK.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: 'var(--gray-200)', margin: '4px 0' }} />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingBottom: idx < WORK.length - 1 ? '2rem' : 0, flex: 1 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.2 }}>
                      {job.role}
                    </h4>
                    {job.current && (
                      <span style={{
                        fontSize: '0.7rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase',
                        background: 'rgba(15,157,154,0.12)', border: '1px solid rgba(15,157,154,0.25)',
                        borderRadius: 'var(--r-full)', padding: '0.15rem 0.6rem', letterSpacing: '0.06em',
                      }}>Current</span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--teal)', marginBottom: '0.2rem' }}>{job.org}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem 1rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MapPin size={12} aria-hidden="true" />{job.location}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>📅 {job.period}</span>
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    {job.highlights.map(h => (
                      <li key={h} style={{
                        fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6,
                        display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                      }}>
                        <span style={{ color: 'var(--teal)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
