import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Search, Settings, Rocket, CheckCircle, Info } from 'lucide-react'

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedStep, setSelectedStep] = useState<number | null>(null)

  const steps = [
    {
      icon: Search,
      title: 'Discover',
      description: 'Explore our platform and understand how it can transform your workflow. Browse features, read case studies, and see real-world examples.',
      color: 'from-blue-600 to-cyan-600',
      details: 'Start with a free trial to explore all features. Our team provides guided tours and resources to help you understand the platform\'s capabilities.',
      duration: '5 minutes',
    },
    {
      icon: Settings,
      title: 'Configure',
      description: 'Set up your workspace with our intuitive configuration tools. Customize settings, integrate your tools, and tailor the experience to your needs.',
      color: 'from-purple-600 to-pink-600',
      details: 'Use our setup wizard to configure your workspace. Import existing data, connect integrations, and customize workflows to match your processes.',
      duration: '15 minutes',
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Go live with confidence. Our team provides support during launch to ensure everything runs smoothly from day one.',
      color: 'from-amber-600 to-orange-600',
      details: 'Launch with full support from our team. We provide training sessions, documentation, and ongoing assistance to ensure a smooth transition.',
      duration: '1 day',
    },
    {
      icon: CheckCircle,
      title: 'Succeed',
      description: 'Achieve your goals with ongoing support, regular updates, and a platform that grows with your business.',
      color: 'from-emerald-600 to-green-600',
      details: 'Continue growing with regular feature updates, dedicated support, and a platform that evolves with your business needs.',
      duration: 'Ongoing',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, proven approach to getting you up and running
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 via-amber-600 to-emerald-600 opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isSelected = selectedStep === index
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: 'spring',
                    stiffness: 100
                  }}
                  className="relative"
                >
                  <motion.div 
                    className={`bg-white rounded-2xl p-6 border-2 transition-all duration-300 text-center cursor-pointer overflow-hidden ${
                      isSelected ? 'border-primary-600 shadow-xl' : 'border-gray-200 hover:border-primary-600/50 hover:shadow-lg'
                    }`}
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedStep(isSelected ? null : index)}
                  >
                    {/* Number Badge */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ${
                        isSelected ? 'bg-primary-600' : 'bg-gray-400'
                      }`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mt-6`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-white" size={32} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-3">
                      {step.description}
                    </p>
                    
                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 mb-3">
                      <Info size={12} />
                      {step.duration}
                    </div>

                    {/* Expanded Details */}
                    <motion.div
                      initial={false}
                      animate={{ height: isSelected ? 'auto' : 0, opacity: isSelected ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 text-sm leading-relaxed pt-3 border-t border-gray-100">
                        {step.details}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
