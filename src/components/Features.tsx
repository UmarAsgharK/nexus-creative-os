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
      title: 'AI-Powered Asset Gen',
      description: 'Generate high-fidelity assets from natural language prompts directly within your workspace.',
      details: 'Nexus learns your brand style guide and generates UI components, icons, and layout variations that perfectly match your design system.',
      color: 'from-purple-600 to-indigo-600',
    },
    {
      icon: Users,
      title: 'Live Design Sync',
      description: 'Bridging the gap between Figma and Code. Changes in design reflect instantly in production.',
      details: 'Bi-directional syncing means developers and designers are finally looking at the same source of truth. No more "handover" meetings.',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Zap,
      title: 'Visual Version Control',
      description: 'Git for designers. Branch, merge, and revert design changes visually.',
      details: 'Track every pixel change with visual diffs. Review branches in a collaborative environment before merging to the master design system.',
      color: 'from-amber-600 to-orange-600',
    },
    {
      icon: Puzzle,
      title: 'Component Autonomy',
      description: 'Smart components that adapt to content and context automatically.',
      details: 'Our autonomous components resize, reflow, and restyle themselves based on real data, saving you from creating 50 variants for one button.',
      color: 'from-emerald-600 to-green-600',
    },
    {
      icon: BarChart3,
      title: 'UX Analytics',
      description: 'Heatmaps and user journey tracking built directly into your prototypes.',
      details: 'Get real user feedback on your designs before writing a single line of code. Identify friction points with AI-analysis of user sessions.',
      color: 'from-indigo-600 to-purple-600',
    },
    {
      icon: Shield,
      title: 'Asset Protection',
      description: 'Watermarking and rights management for all your creative assets.',
      details: 'Automatically secure your intellectual property. Set usage rights and expiration dates for shared assets with external clients.',
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
