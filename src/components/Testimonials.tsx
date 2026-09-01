import { useState, useEffect } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: "Dr. Praveen's expertise in ACL reconstruction was exceptional. After my injury, I thought my football career was over. Six months post-surgery, I'm back on the field stronger than ever.",
    author: 'Ahmed M.',
    role: 'Professional Football Player',
    initials: 'AM',
  },
  {
    text: "The care I received at FitClinic was outstanding. Dr. Praveen took the time to explain every step of my treatment and made sure I was comfortable throughout my recovery journey.",
    author: 'Sarah K.',
    role: 'Marathon Runner',
    initials: 'SK',
  },
  {
    text: "After years of shoulder pain affecting my tennis game, Dr. Praveen's arthroscopic surgery gave me a new lease on my sporting life. Highly recommended for any athlete dealing with injuries.",
    author: 'Raj J.',
    role: 'Tennis Coach',
    initials: 'RJ',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Patient Stories</span>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Real experiences from athletes who trusted us with their care
          </p>
        </div>
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div 
              className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
              key={testimonial.author}
            >
              <div className="testimonial-content">
                <Quote className="quote-icon" size={48} />
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.initials}</div>
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
