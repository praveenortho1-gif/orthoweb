import { Award, CheckCircle } from 'lucide-react'

const features = [
  'Fellowship in Sports Medicine',
  'Advanced Arthroscopic Techniques',
  'Team Physician Experience',
  'Published Researcher',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <span className="placeholder-icon">👨‍⚕️</span>
            </div>
            <div className="about-badge">
              <Award className="badge-icon" size={32} />
              <span className="badge-text">Board Certified</span>
            </div>
          </div>
          <div className="about-text">
            <span className="section-tag">About Dr. Praveen</span>
            <h2 className="section-title">Committed to Excellence in Sports Orthopaedics</h2>
            <p className="about-description">
              Dr. Praveen is a distinguished sports orthopaedic specialist with extensive experience 
              in treating athletes and active individuals. Based at FitClinic Abu Dhabi, he combines 
              cutting-edge medical techniques with a patient-centered approach to deliver exceptional care.
            </p>
            <p className="about-description">
              With specialized training in sports medicine and orthopaedic surgery, Dr. Praveen has 
              helped thousands of patients return to their active lifestyles. His expertise spans 
              from minimally invasive procedures to complex joint reconstructions.
            </p>
            <div className="about-features">
              {features.map((feature) => (
                <div className="feature-item" key={feature}>
                  <CheckCircle className="feature-icon" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
