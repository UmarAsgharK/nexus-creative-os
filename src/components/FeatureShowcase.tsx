import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { BarChart3, Zap, Shield, ArrowRight } from 'lucide-react'

const FeatureShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const showcases = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics Dashboard',
      description: 'Get real-time insights into your business performance with our comprehensive analytics dashboard. Track key metrics, identify trends, and make data-driven decisions with confidence.',
      features: ['Real-time data visualization', 'Customizable reports', 'Export capabilities', 'Interactive charts'],
      color: 'from-blue-600 to-cyan-600',
      imageSide: 'left',
      benefits: ['Increase decision speed by 60%', 'Identify trends instantly', 'Export to multiple formats'],
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Automation',
      description: 'Automate complex workflows with our powerful automation engine. Set up rules, triggers, and actions that work seamlessly in the background to save you time and reduce errors.',
      features: ['Workflow automation', 'Smart triggers', 'Conditional logic', 'Scheduled tasks'],
      color: 'from-amber-600 to-orange-600',
      imageSide: 'right',
      benefits: ['Save 10+ hours per week', 'Reduce errors by 90%', 'Scale operations effortlessly'],
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Your data security is our top priority. We implement industry-leading security measures to protect your information and ensure compliance with global standards.',
      features: ['End-to-end encryption', 'Regular security audits', 'Compliance certifications', 'Access controls'],
      color: 'from-emerald-600 to-green-600',
      imageSide: 'left',
      benefits: ['SOC 2 Type II certified', 'GDPR compliant', '99.9% uptime SLA'],
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
            Feature Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the powerful features that set us apart
          </p>
        </motion.div>

        <div className="space-y-24">
          {showcases.map((showcase, index) => {
            const Icon = showcase.icon
            const isEven = showcase.imageSide === 'right'
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Image/Visual Side */}
                <div className="flex-1 w-full">
                  <motion.div
                    className={`h-80 rounded-2xl bg-gradient-to-br ${showcase.color} flex items-center justify-center shadow-2xl cursor-pointer relative overflow-hidden`}
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                  >
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                        rotate: isHovered ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="text-white" size={120} />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      animate={{ opacity: isHovered ? 0.3 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="flex-1 w-full flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {showcase.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {showcase.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {showcase.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.2 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${showcase.color} mt-2 flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Benefits on Hover */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isHovered ? 'auto' : 0,
                      opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</p>
                      <ul className="space-y-2">
                        {showcase.benefits.map((benefit, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <ArrowRight className={`w-4 h-4 text-transparent bg-gradient-to-r ${showcase.color} bg-clip-text`} />
                            {benefit}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeatureShowcase
