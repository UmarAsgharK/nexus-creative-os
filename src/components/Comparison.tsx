import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, X, Info } from 'lucide-react'

const Comparison = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  const features = [
    {
      name: 'Design-to-Code Sync',
      us: true,
      competitor1: false,
      competitor2: false,
      description: 'Bi-directional syncing between Figma and Git repositories',
    },
    {
      name: 'AI Component Generation',
      us: true,
      competitor1: false,
      competitor2: true,
      description: 'Generate production-ready React/Vue components from images or prompts',
    },
    {
      name: 'Visual Version Control',
      us: true,
      competitor1: false,
      competitor2: false,
      description: 'Branch, merge, and diff design changes visually like Git',
    },
    {
      name: 'Automated Documentation',
      us: true,
      competitor1: true,
      competitor2: false,
      description: 'Storybook and style guide auto-generated from your source',
    },
    {
      name: 'Framework Agnostic',
      us: true,
      competitor1: false,
      competitor2: false,
      description: 'Export to React, Vue, Svelte, Angular, iOS, and Android',
    },
    {
      name: 'Enterprise Security',
      us: true,
      competitor1: true,
      competitor2: true,
      description: 'SOC 2 Type II, SSO, and on-premise deployment options',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Compare Options
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we stack up against the competition
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-100 to-gray-50 border-b-2 border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 bg-primary-50 border-x border-gray-200">
                    <div className="flex flex-col items-center gap-1">
                      <span>Nexus</span>
                      <span className="text-xs font-normal text-primary-600">Unified</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Competitor A</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => {
                  const isHovered = hoveredRow === index
                  return (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className={`border-b border-gray-200 transition-colors cursor-pointer relative ${isHovered ? 'bg-primary-50/50' : 'hover:bg-gray-50'
                        }`}
                      onHoverStart={() => setHoveredRow(index)}
                      onHoverEnd={() => setHoveredRow(null)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 group/cell">
                          <span className="text-sm font-medium text-gray-900">{feature.name}</span>
                          <div className="relative opacity-0 group-hover/cell:opacity-100 transition-opacity duration-200">
                            <Info className="w-4 h-4 text-gray-400" />
                            <div className="absolute left-0 bottom-full mb-2 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/cell:opacity-100 transition-opacity pointer-events-none z-10">
                              {feature.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center bg-primary-50/30 border-x border-gray-200">
                        {feature.us ? (
                          <motion.div
                            className="flex justify-center"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1, type: 'spring' }}
                            whileHover={{ scale: 1.2 }}
                          >
                            <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center shadow-md">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            className="flex justify-center"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                          >
                            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                              <X className="w-4 h-4 text-white" />
                            </div>
                          </motion.div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {feature.competitor1 ? (
                          <motion.div
                            className="flex justify-center"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1, type: 'spring' }}
                            whileHover={{ scale: 1.2 }}
                          >
                            <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center shadow-md">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            className="flex justify-center"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                          >
                            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                              <X className="w-4 h-4 text-white" />
                            </div>
                          </motion.div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {feature.competitor2 ? (
                          <motion.div
                            className="flex justify-center"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1, type: 'spring' }}
                            whileHover={{ scale: 1.2 }}
                          >
                            <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center shadow-md">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            className="flex justify-center"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                          >
                            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                              <X className="w-4 h-4 text-white" />
                            </div>
                          </motion.div>
                        )}
                      </td>
                    </motion.tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Comparison
