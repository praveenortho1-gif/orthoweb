import { 
  Activity, 
  Scissors, 
  Bone, 
  Dumbbell,
  CircleDot,
  HeartPulse
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Activity,
    title: 'Sports Injury Treatment',
    description: 'Expert diagnosis and treatment of acute and chronic sports injuries including sprains, strains, fractures, and overuse injuries.',
  },
  {
    icon: Scissors,
    title: 'Arthroscopic Surgery',
    description: 'Minimally invasive keyhole surgery for joint problems with faster recovery times and less post-operative pain.',
  },
  {
    icon: Bone,
    title: 'Joint Reconstruction',
    description: 'Advanced techniques for ACL, PCL, and ligament reconstruction to restore stability and function to damaged joints.',
  },
  {
    icon: Dumbbell,
    title: 'Shoulder & Elbow Care',
    description: 'Specialized treatment for rotator cuff injuries, shoulder instability, tennis elbow, and other upper extremity conditions.',
  },
  {
    icon: CircleDot,
    title: 'Knee Specialist',
    description: 'Comprehensive knee care including meniscus repair, cartilage restoration, and knee replacement surgery when needed.',
  },
  {
    icon: HeartPulse,
    title: 'Rehabilitation Programs',
    description: 'Customized rehabilitation protocols designed to optimize recovery and prevent re-injury for athletes of all levels.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Specialized Services</h2>
          <p className="section-subtitle">
            Comprehensive sports orthopaedic care tailored to your needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">
                <service.icon size={40} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
