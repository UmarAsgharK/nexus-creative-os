import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Slack, Zap, Mail, Calendar, FileText } from 'lucide-react'

const Integrations = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const integrations = [
    { name: 'GitHub', icon: Github, color: 'from-gray-800 to-gray-900' },
    { name: 'Slack', icon: Slack, color: 'from-purple-600 to-pink-600' },
    { name: 'Zapier', icon: Zap, color: 'from-orange-500 to-red-500' },
    { name: 'Gmail', icon: Mail, color: 'from-red-500 to-pink-500' },
    { name: 'Calendar', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
    { name: 'Docs', icon: FileText, color: 'from-green-500 to-emerald-500' },
  ]

  return (
    <section className="py-20 dark-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Integrations
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with 100+ popular tools and services
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => {
            const Icon = integration.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center aspect-square cursor-pointer group"
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{integration.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Integrations

