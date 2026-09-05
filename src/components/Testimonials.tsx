import { useEffect, useRef } from 'react'
import { Star } from 'lucide-react'

interface Testimonial {
  initials: string
  name: string
  role: string
  text: string
  stars: number
  featured?: boolean
}

const TESTIMONIALS: Testimonial[] = [
  {
    initials: 'AM',
    name: 'Ahmed M.',
    role: 'Professional Footballer',
    stars: 5,
    text: "After my ACL tear I thought my career was over. Dr. Praveen's rehabilitation plan and clinical guidance were exceptional. I was back on the pitch in 7 months — stronger than before.",
    featured: true,
  },
  {
    initials: 'SK',
    name: 'Sarah K.',
    role: 'Marathon Runner',
    stars: 5,
    text: "Dr. Praveen diagnosed my knee issue when two other clinics missed it. His treatment plan and aftercare were thorough. I completed the Abu Dhabi Marathon 6 months later.",
  },
  {
    initials: 'RJ',
    name: 'Raj J.',
    role: 'Tennis Coach',
    stars: 5,
    text: "Years of shoulder pain resolved after Dr. Praveen's targeted treatment and PRP therapy. The difference is night and day. I can coach and play again without any discomfort.",
  },
  {
    initials: 'FA',
    name: 'Fatima A.',
    role: 'CrossFit Athlete',
    stars: 5,
    text: "Dr. Praveen's rehabilitation programme got me back to light training in 10 weeks. The team at FitClinic genuinely care about your recovery and long-term wellbeing.",
  },
  {
    initials: 'KP',
    name: 'Khalid P.',
    role: 'Weekend Cyclist',
    stars: 5,
    text: "Fractured my collarbone in a crash. Dr. Praveen explained every option clearly and helped me make the right decision. Recovery was seamless and the results are perfect.",
  },
  {
    initials: 'OT',
    name: 'Omar T.',
    role: 'Youth Football Coach',
    stars: 5,
    text: "Several players from my team have been seen by Dr. Praveen. Every single one has had a great outcome. He is our go-to sports medicine specialist in Abu Dhabi.",
  },
]

function StarRow({ count }: { count: number }) {
  return (
    <div className="testi-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
        }
      }),
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="testimonials section-py" id="testimonials" ref={sectionRef}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="label reveal" style={{ justifyContent: 'center' }}>Patient Stories</p>
          <h2 className="section-heading reveal reveal-delay-1" style={{ textAlign: 'center' }}>
            Real Results, <span>Real People</span>
          </h2>
          <p className="section-sub reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            Over 5,000 patients have trusted Dr. Praveen to get them back to doing what they love.
          </p>
        </div>

        {/* Summary row */}
        <div className="reveal reveal-delay-2" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem 3rem',
          padding: '1.5rem 2rem',
          background: 'var(--white)',
          borderRadius: 'var(--r-lg)',
          border: '1px solid var(--gray-200)',
          marginBottom: '2.5rem',
          boxShadow: 'var(--shadow-xs)',
        }}>
          {[
            { value: '4.9 / 5', label: 'Average Rating' },
            { value: '5,000+', label: 'Happy Patients' },
            { value: '98%',    label: 'Would Recommend' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>{s.label}</p>
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#f59e0b' }}>
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} fill="currentColor" aria-hidden="true" />)}
          </div>
        </div>

        {/* Card grid */}
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <article
              className={`testi-card reveal reveal-delay-${Math.min(i + 1, 5)}${t.featured ? ' testi-featured' : ''}`}
              key={t.name}
              aria-label={`Testimonial from ${t.name}`}
            >
              <div className="testi-quote" aria-hidden="true">"</div>
              <StarRow count={t.stars} />
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">{t.initials}</div>
                <div>
                  <p className="testi-name">{t.name}</p>
                  <p className="testi-role">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
