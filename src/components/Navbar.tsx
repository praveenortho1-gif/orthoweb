import { useState, useEffect } from 'react'
import { Menu, X, Plus } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#testimonials', label: 'Testimonials' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : ''
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <span className="logo-icon"><Plus size={24} /></span>
          <span className="logo-text">Dr. Praveen</span>
        </a>

        <button 
          className="nav-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="nav-link"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contact" 
              className="nav-link nav-cta"
              onClick={closeMobileMenu}
            >
              Book Appointment
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
