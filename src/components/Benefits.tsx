import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Clock, Shield, Zap, Globe, TrendingUp, Heart, ArrowRight } from 'lucide-react'

const Benefits = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automate repetitive tasks and focus on what matters most. Our platform reduces manual work by up to 60%.',
      hoverText: 'Average teams save 15+ hours per week with our automation features.',
      color: 'from-blue-600 to-cyan-600',
      stat: '60%',
      statLabel: 'Time Saved',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Your data is protected with bank-level encryption and compliance with industry standards.',
      hoverText: '99.9% uptime SLA with enterprise-grade infrastructure and monitoring.',
      color: 'from-emerald-600 to-green-600',
      stat: '99.9%',
      statLabel: 'Uptime',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with optimized infrastructure and minimal latency.',
      hoverText: 'Sub-100ms response times ensure your team never waits for the platform.',
      color: 'from-amber-600 to-orange-600',
      stat: '<100ms',
      statLabel: 'Response Time',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access your work from anywhere in the world with our cloud-based infrastructure.',
      hoverText: 'Available in 150+ countries with data centers on every continent.',
      color: 'from-purple-600 to-pink-600',
      stat: '150+',
      statLabel: 'Countries',
    },
    {
      icon: TrendingUp,
      title: 'Scale Easily',
      description: 'Grow your team and operations without worrying about infrastructure limitations.',
      hoverText: 'From startup to enterprise - scale from 1 to 10,000+ users seamlessly.',
      color: 'from-indigo-600 to-purple-600',
      stat: '10K+',
      statLabel: 'Users Supported',
    },
    {
      icon: Heart,
      title: 'User-Friendly',
      description: 'Intuitive interface designed for users of all technical levels. No training required.',
      hoverText: '95% of users are productive within their first day without any training.',
      color: 'from-red-600 to-rose-600',
      stat: '95%',
      statLabel: 'Day 1 Productivity',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Key Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes our platform the right choice for your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isHovered = hoveredIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 100 }}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-primary-600/50 hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Hover Overlay */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.color} p-6 text-white`}
                    >
                      <div className="h-full flex flex-col justify-between">
                        <div>
                          <div className={`w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4`}>
                            <Icon className="text-white" size={24} />
                          </div>
                          <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                          <p className="text-white/90 text-sm leading-relaxed">{benefit.hoverText}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <span className="text-2xl">{benefit.stat}</span>
                          <span className="text-white/80">{benefit.statLabel}</span>
                          <ArrowRight className="ml-auto" size={16} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Default Content */}
                <div className={`p-6 ${isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
