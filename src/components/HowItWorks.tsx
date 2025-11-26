import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { UserPlus, Link2, Rocket, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your free account in less than 2 minutes. No credit card required to get started.',
      color: 'from-primary-500 to-primary-600',
      details: 'Simply provide your email and create a password. You\'ll receive a confirmation email to verify your account.',
      time: '2 minutes',
    },
    {
      number: '02',
      icon: Link2,
      title: 'Connect Your Tools',
      description: 'Integrate with your existing workflow tools. We support 100+ popular apps and services.',
      color: 'from-blue-500 to-cyan-500',
      details: 'Browse our integration library and connect your favorite tools with one-click setup. Most integrations take less than a minute.',
      time: '5 minutes',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Boost Productivity',
      description: 'Start collaborating smarter with AI-powered insights and automation that adapts to your team.',
      color: 'from-purple-500 to-pink-500',
      details: 'Begin using our platform immediately. Our AI learns from your usage patterns and provides personalized recommendations.',
      time: 'Instant',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Started in Three Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of teams already using our platform to transform their workflow.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500 opacity-20" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isHovered = hoveredStep === index
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                  onHoverStart={() => setHoveredStep(index)}
                  onHoverEnd={() => setHoveredStep(null)}
                >
                  <motion.div 
                    className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 text-center cursor-pointer overflow-hidden ${
                      isHovered ? 'border-primary-600' : 'border-gray-200'
                    }`}
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Number Badge */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <motion.div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                          isHovered ? 'bg-primary-600' : 'bg-gray-400'
                        }`}
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {index + 1}
                      </motion.div>
                    </div>

                    {/* Icon */}
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mt-4`}
                      animate={{ 
                        scale: isHovered ? 1.1 : 1,
                        rotate: isHovered ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="text-white" size={40} />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base mb-4">
                      {step.description}
                    </p>
                    
                    {/* Time Badge */}
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 mb-4">
                      <CheckCircle size={12} />
                      {step.time}
                    </div>

                    {/* Expanded Details on Hover */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: isHovered ? 'auto' : 0, 
                        opacity: isHovered ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 text-sm leading-relaxed pt-4 border-t border-gray-100">
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

export default HowItWorks
