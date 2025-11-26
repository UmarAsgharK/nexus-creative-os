import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Brain,
  Users,
  Zap,
  Puzzle,
  BarChart3,
  Shield,
  ChevronDown,
} from 'lucide-react'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const features = [
    {
      icon: Brain,
      title: 'Intelligent Insights',
      description: 'Get smart recommendations and insights that help your team make data-driven decisions faster.',
      details: 'Our AI analyzes patterns in your workflow, identifies optimization opportunities, and provides actionable recommendations. The system learns from your team\'s behavior to deliver increasingly accurate insights over time.',
      color: 'from-purple-600 to-indigo-600',
    },
    {
      icon: Users,
      title: 'Real-time Collaboration',
      description: 'Work together seamlessly with live updates, comments, and notifications that keep everyone in sync.',
      details: 'See changes as they happen with real-time synchronization across all devices. Comment threads, @mentions, and instant notifications ensure nothing falls through the cracks.',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Automate repetitive tasks and workflows with intelligence that learns from your team\'s patterns.',
      details: 'Create custom automation rules with our visual builder. The system suggests automations based on your usage patterns and can handle complex multi-step workflows.',
      color: 'from-amber-600 to-orange-600',
    },
    {
      icon: Puzzle,
      title: 'Seamless Integration',
      description: 'Connect with all your favorite tools - Slack, Jira, GitHub, and 100+ more integrations available.',
      details: 'Native integrations with popular tools mean data flows automatically. Set up once and watch your tools work together seamlessly without manual data entry.',
      color: 'from-emerald-600 to-green-600',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track performance, identify bottlenecks, and optimize workflows with comprehensive analytics.',
      details: 'Deep-dive analytics with customizable dashboards, export capabilities, and scheduled reports. Track KPIs, team performance, and project health in real-time.',
      color: 'from-indigo-600 to-purple-600',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, SSO, and compliance with SOC 2, GDPR, and HIPAA standards.',
      details: 'Your data is encrypted at rest and in transit. Regular security audits, compliance certifications, and granular access controls give you complete control.',
      color: 'from-red-600 to-rose-600',
    },
  ]

  return (
    <section id="features" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to streamline collaboration and boost productivity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isExpanded = expandedIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-xl border border-gray-200 hover:border-primary-600/50 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                whileHover={{ y: -3 }}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="text-white" size={24} />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-gray-400" size={20} />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-3">
                    {feature.description}
                  </p>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 text-sm leading-relaxed pt-3 border-t border-gray-100">
                          {feature.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
