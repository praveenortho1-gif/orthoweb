import { Trophy, Microscope, Sparkles, Clock } from 'lucide-react'

const expertiseAreas = [
  { name: 'ACL & Ligament Injuries', percentage: 95 },
  { name: 'Meniscus & Cartilage Repair', percentage: 92 },
  { name: 'Shoulder Reconstruction', percentage: 90 },
  { name: 'Sports Trauma Management', percentage: 88 },
]

const features = [
  { icon: Trophy, title: 'Professional Athletes', description: 'Trusted by professional athletes and sports teams across the UAE' },
  { icon: Microscope, title: 'Latest Technology', description: 'State-of-the-art diagnostic and surgical equipment' },
  { icon: Sparkles, title: 'Personalized Care', description: 'Individualized treatment plans for optimal outcomes' },
  { icon: Clock, title: 'Quick Recovery', description: 'Focus on minimally invasive techniques for faster healing' },
]

export default function Expertise() {
  return (
    <section className="expertise" id="expertise">
      <div className="container">
        <div className="expertise-content">
          <div className="expertise-text">
            <span className="section-tag">Areas of Expertise</span>
            <h2 className="section-title">Specialized in Sports Orthopaedics</h2>
            <p className="expertise-description">
              Dr. Praveen brings specialized expertise in treating sports-related injuries 
              and conditions, with a focus on getting athletes back to peak performance.
            </p>
            <div className="expertise-list">
              {expertiseAreas.map((area) => (
                <div className="expertise-item" key={area.name}>
                  <div className="expertise-item-header">
                    <h4>{area.name}</h4>
                    <span>{area.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress" 
                      style={{ width: `${area.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="expertise-features">
            {features.map((feature) => (
              <div className="expertise-card" key={feature.title}>
                <div className="card-icon">
                  <feature.icon size={32} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
