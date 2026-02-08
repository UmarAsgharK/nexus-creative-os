import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { DollarSign, TrendingUp, Award, CheckCircle2 } from 'lucide-react'

const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState(0)

  const reasons = [
    {
      icon: TrendingUp,
      title: 'Accelerated Velocity',
      description: 'Ship products 50% faster by removing the friction between design and engineering. No more redlines, no more back-and-forth.',
      points: [
        'Automated asset generation',
        'Instant code export',
        'Real-time prototyping',
        'Reduced QA cycles',
      ],
      color: 'from-emerald-600 to-green-600',
    },
    {
      icon: CheckCircle2,
      title: 'Pixel-Perfect Consistency',
      description: 'Ensure your brand looks exactly as intended across every touchpoint. Our AI enforces design system rules automatically.',
      points: [
        'Global style synchronization',
        'Automated accessibility checks',
        'Multi-platform support',
        'Visual regression testing',
      ],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Award,
      title: 'Enterprise Scalability',
      description: 'Built to handle complex design systems and large teams. scale from a single product to a multi-brand ecosystem.',
      points: [
        'Multi-repo support',
        'Granular permissions',
        'Audit logs & history',
        'SSO & Enterprise support',
      ],
      color: 'from-primary-500 to-primary-600',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-primary-600">Nexus</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The only platform that treats design and code as a single source of truth.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 mb-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === index
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{reason.title}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${reasons[activeTab].color} flex items-center justify-center mb-6`}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {(() => {
                  const Icon = reasons[activeTab].icon
                  return <Icon className="text-white" size={40} />
                })()}
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {reasons[activeTab].title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {reasons[activeTab].description}
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                {reasons[activeTab].points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${reasons[activeTab].color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <CheckCircle2 className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
