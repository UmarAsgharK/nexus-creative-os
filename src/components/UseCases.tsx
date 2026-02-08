import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Target, BarChart3, Zap, CheckCircle2, ArrowRight } from 'lucide-react'

const UseCases = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const useCases = [
    {
      title: 'Visualize Your Journey',
      description: 'Map out every stage of your process with intuitive dashboards. Track progress in real-time, identify potential bottlenecks, and gain a clear view of your performance.',
      icon: Target,
      color: 'from-blue-600 to-cyan-600',
      examples: ['Pipeline visualization', 'Progress tracking', 'Bottleneck identification', 'Performance metrics'],
    },
    {
      title: 'Supercharge Communication',
      description: 'Automate personalized campaigns, schedule follow-up reminders, and engage with customers at the right moments to strengthen relationships and boost conversion rates.',
      icon: Zap,
      color: 'from-amber-600 to-orange-600',
      examples: ['Automated campaigns', 'Smart scheduling', 'Customer engagement', 'Conversion optimization'],
    },
    {
      title: 'Illuminate Insights',
      description: 'Gain actionable intelligence with robust reporting tools. Analyze trends, identify top-performing areas, and understand behavior to make data-driven decisions.',
      icon: BarChart3,
      color: 'from-purple-600 to-pink-600',
      examples: ['Trend analysis', 'Performance reports', 'Behavior tracking', 'Data visualization'],
    },
    {
      title: 'Integrate Effortlessly',
      description: 'Seamlessly connect with your favorite tools. By creating a unified ecosystem, you\'ll eliminate data silos and streamline workflows across your entire organization.',
      icon: CheckCircle2,
      color: 'from-emerald-600 to-green-600',
      examples: ['Tool integration', 'Data synchronization', 'Workflow automation', 'Unified ecosystem'],
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
            Unleash the Power of <span className="text-primary-600">Connection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our platform transforms the way you work, communicate, and grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            const isHovered = hoveredIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white rounded-xl border border-gray-200 hover:border-primary-600/50 transition-all duration-300 cursor-pointer overflow-hidden group"
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="text-white" size={32} />
                    </motion.div>
                    <motion.div
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className={`text-gray-400 ${isHovered ? 'text-primary-600' : ''} transition-colors`} size={20} />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Key Capabilities:</p>
                    <ul className="space-y-2">
                      {useCase.examples.map((example, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${useCase.color}`} />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default UseCases
