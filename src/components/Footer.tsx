import { Plus, Shield, BadgeCheck, Award } from 'lucide-react'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.733-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const SERVICES_LINKS = [
  'Sports Injury Treatment',
  'Arthroscopic Surgery',
  'ACL & Ligament Repair',
  'Shoulder & Elbow Care',
  'Knee Specialist',
  'Rehabilitation',
  'PRP Therapy',
]

const QUICK_LINKS = [
  { href: '#home',     label: 'Home' },
  { href: '#about',    label: 'About Dr. Praveen' },
  { href: '#services', label: 'Services' },
  { href: '#why-us',   label: 'Why Choose Us' },
  { href: '#contact',  label: 'Book Appointment' },
]

const CERTS = [
  { icon: Shield,      label: 'DOH Licensed' },
  { icon: BadgeCheck,  label: 'Board Certified' },
  { icon: Award,       label: 'Sports Med Fellow' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="nav-logo" onClick={e => { e.preventDefault(); scrollTo('#home') }} aria-label="Dr. Praveen Home" style={{ marginBottom: '1rem' }}>
              <span className="nav-logo-mark"><Plus size={20} aria-hidden="true" /></span>
              <span>
                Dr. Praveen
                <span className="nav-logo-sub">Specialist Sports Medicine</span>
              </span>
            </a>
            <p>
              Expert Sports Medicine care at FitClinic Abu Dhabi. Helping athletes and active individuals recover, rebuild and return to peak performance.
            </p>
            <div className="footer-cert-badges">
              {CERTS.map(c => (
                <span className="footer-cert" key={c.label}>
                  <c.icon size={12} aria-hidden="true" />
                  {c.label}
                </span>
              ))}
            </div>
            <div className="footer-social" role="list" aria-label="Social media links">
              <a href="#" className="footer-social-link" role="listitem" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/drpraveenravi?utm_source=qr&igsi=MXdpa2owN3p1b2N4OQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                role="listitem"
                aria-label="Follow Dr. Praveen Ravi on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/dr-praveen-ravi-mbbs-md-01007817a"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                role="listitem"
                aria-label="Connect with Dr. Praveen Ravi on LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://x.com/Praveensportmed"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                role="listitem"
                aria-label="Follow Dr. Praveen Ravi on X"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <div className="footer-col">
              <h5>Quick Links</h5>
              <ul>
                {QUICK_LINKS.map(link => (
                  <li key={link.href}>
                    <a href={link.href} onClick={e => { e.preventDefault(); scrollTo(link.href) }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services links">
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                {SERVICES_LINKS.map(s => (
                  <li key={s}>
                    <a href="#services" onClick={e => { e.preventDefault(); scrollTo('#services') }}>
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Contact info */}
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: 1.6 }}>FitClinic, Abu Dhabi, UAE</li>
              <li>
                <a href="tel:+971547541252">+971 547 541 252</a>
              </li>
              <li>
                <a href="mailto:praveenortho1@gmail.com">praveenortho1@gmail.com</a>
              </li>
              <li style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Sun–Thu: 9 AM – 6 PM<br />
                Sat: 10 AM – 2 PM
              </li>
            </ul>
            <div style={{ marginTop: '1.5rem' }}>
              <a
                href="#contact"
                className="btn btn-primary btn-sm"
                onClick={e => { e.preventDefault(); scrollTo('#contact') }}
              >
                Book Appointment
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {year} Dr. Praveen – FitClinic Abu Dhabi. All rights reserved.</p>
          <p>
            <a href="#">Privacy Policy</a>
            {' · '}
            <a href="#">Terms</a>
            {' · '}
            <a href="#">Sitemap</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
