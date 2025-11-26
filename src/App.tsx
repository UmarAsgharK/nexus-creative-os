import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import InteractiveDemo from './components/InteractiveDemo'
import WhyChooseUs from './components/WhyChooseUs'
import IndustriesWeServe from './components/IndustriesWeServe'
import UseCases from './components/UseCases'
import Benefits from './components/Benefits'
import Process from './components/Process'
import Comparison from './components/Comparison'
import FeatureShowcase from './components/FeatureShowcase'
import Integrations from './components/Integrations'
import Capabilities from './components/Capabilities'
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
      <Features />
      <HowItWorks />
      <InteractiveDemo />
      <WhyChooseUs />
      <IndustriesWeServe />
      <UseCases />
      <Benefits />
      <Process />
      <Comparison />
      <FeatureShowcase />
      <Integrations />
      <Capabilities />
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

