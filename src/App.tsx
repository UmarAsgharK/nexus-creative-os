import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import InteractiveDemo from './components/InteractiveDemo'
import WhyChooseUs from './components/WhyChooseUs'
import IndustriesWeServe from './components/IndustriesWeServe'
import Benefits from './components/Benefits'
import Comparison from './components/Comparison'
import FeatureShowcase from './components/FeatureShowcase'
import Integrations from './components/Integrations'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <ScrollProgress progress={scrollProgress} />
      <Navigation />
      <Hero />
      <Stats />
      <HowItWorks />
      <InteractiveDemo />
      <WhyChooseUs />
      <IndustriesWeServe />
      <Benefits />
      <Comparison />
      <FeatureShowcase />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App

