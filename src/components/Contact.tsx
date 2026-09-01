import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, title: 'Location', content: ['FitClinic, Abu Dhabi', 'United Arab Emirates'] },
  { icon: Phone, title: 'Phone', content: ['+971 2 XXX XXXX'] },
  { icon: Mail, title: 'Email', content: ['dr.praveen@fitclinic.ae'] },
  { icon: Clock, title: 'Working Hours', content: ['Sun - Thu: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'] },
]

const serviceOptions = [
  'Sports Injury Treatment',
  'Arthroscopic Surgery',
  'Joint Reconstruction',
  'Shoulder & Elbow Care',
  'Knee Specialist',
  'Rehabilitation Programs',
  'General Consultation',
]

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: '', email: '', phone: '', service: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        {/* CTA Banner */}
        <div className="cta-banner">
          <h2>Ready to Get Back in the Game?</h2>
          <p>Schedule your consultation today and take the first step towards recovery.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Book Your Consultation</h2>
            <p className="contact-description">
              Ready to start your journey to recovery? Contact us to schedule an appointment 
              with Dr. Praveen at FitClinic Abu Dhabi.
            </p>
            <div className="contact-details">
              {contactInfo.map((item) => (
                <div className="contact-item" key={item.title}>
                  <div className="contact-icon">
                    <item.icon size={24} />
                  </div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    {item.content.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper">
            {isSubmitted ? (
              <div className="form-success">
                <CheckCircle size={64} />
                <h3>Thank You!</h3>
                <p>Your message has been sent. We will contact you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      required
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Required</label>
                  <select
                    id="service"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your condition or concern..."
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary btn-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
