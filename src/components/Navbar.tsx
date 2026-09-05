import { useState, useEffect, useCallback } from 'react'
import { Phone } from 'lucide-react'

const NAV_LINKS = [
  { href: '#home',     label: 'Home' },
  { href: '#about',    label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why-us',   label: 'Why Us' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [drawerOpen,  setDrawerOpen]  = useState(false)
  const [activeLink,  setActiveLink]  = useState('#home')

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Active section tracker ── */
  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveLink(`#${e.target.id}`)
        })
      },
      { rootMargin: '-50% 0px -45% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  /* ── Lock body scroll when drawer open ── */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const close = useCallback(() => setDrawerOpen(false), [])

  const handleNavClick = (href: string) => {
    close()
    const el = document.querySelector(href)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* ── Main nav bar ── */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav-inner">

          {/* Logo */}
          <a href="#home" className="nav-logo" onClick={() => handleNavClick('#home')} aria-label="Dr. Praveen Home">
            <span className="nav-logo-mark">P</span>
            <span>
              Dr. Praveen
              <span className="nav-logo-sub">Sports Medicine</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link${activeLink === link.href ? ' active' : ''}`}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="tel:+971547541252"
            className="btn btn-primary btn-sm"
            style={{ display: 'none' }}
            aria-label="Call us"
          >
            <Phone size={15} /> +971 547 541 252
          </a>
          <style>{`@media(min-width:1024px){.nav-desktop-cta{display:inline-flex!important}}`}</style>
          <a
            href="tel:+971547541252"
            className="btn btn-primary btn-sm nav-desktop-cta"
            style={{ display: 'none' }}
            aria-label="Call us"
          >
            <Phone size={15} /> Book Now
          </a>

          {/* Hamburger */}
          <button
            className={`nav-toggle${drawerOpen ? ' open' : ''}`}
            onClick={() => setDrawerOpen(v => !v)}
            aria-expanded={drawerOpen}
            aria-controls="nav-drawer"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── Overlay ── */}
      <div
        className={`nav-overlay${drawerOpen ? ' open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <aside
        id="nav-drawer"
        className={`nav-drawer${drawerOpen ? ' open' : ''}`}
        aria-hidden={!drawerOpen}
      >
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }} role="list">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-drawer-link${activeLink === link.href ? ' active' : ''}`}
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-drawer-cta" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a href="tel:+971547541252" className="btn btn-primary btn-full">
            <Phone size={16} /> Call Clinic
          </a>
          <a href="#contact" className="btn btn-outline-navy btn-full" onClick={() => handleNavClick('#contact')}>
            Book Appointment
          </a>
        </div>

        <p style={{
          marginTop: '2rem',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.35)',
          lineHeight: 1.6
        }}>
          FitClinic, Abu Dhabi, UAE<br />
          Sun–Thu: 9 AM–6 PM
        </p>
      </aside>
    </>
  )
}
