import { ChevronDown } from 'lucide-react'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '5000+', label: 'Patients Treated' },
  { value: '98%', label: 'Success Rate' },
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">Sports Orthopaedic Specialist</p>
          <h1 className="hero-title">Dr. Praveen</h1>
          <p className="hero-description">
            Dedicated to helping athletes and active individuals recover faster 
            and perform better. Specialized sports orthopaedic care at FitClinic Abu Dhabi.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Book Consultation</a>
            <a href="#services" className="btn btn-secondary">Our Services</a>
          </div>
        </div>
        <div className="hero-stats">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <ChevronDown className="scroll-arrow" size={24} />
      </div>
    </section>
  )
}
