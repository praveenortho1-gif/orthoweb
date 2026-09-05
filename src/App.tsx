import './styles/index.css'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Services     from './components/Services'
import Expertise    from './components/Expertise'
// Testimonials hidden — real reviews to be added later
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
