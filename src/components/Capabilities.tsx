import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Layers, Workflow, Database, Lock, Globe2, Sparkles } from 'lucide-react'

const Capabilities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    {
      name: 'Core Features',
      icon: Layers,
      items: [
        { title: 'Dashboard Analytics', description: 'Comprehensive dashboards with real-time metrics', icon: '📊' },
        { title: 'Task Management', description: 'Organize and prioritize tasks efficiently', icon: '✅' },
        { title: 'Team Collaboration', description: 'Work together in real-time with seamless communication', icon: '👥' },
      ],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      name: 'Automation',
      icon: Workflow,
      items: [
        { title: 'Workflow Builder', description: 'Create custom automation workflows visually', icon: '⚙️' },
        { title: 'Smart Triggers', description: 'Automate actions based on conditions and events', icon: '🔔' },
        { title: 'Scheduled Tasks', description: 'Set up recurring tasks and reminders automatically', icon: '⏰' },
      ],
      color: 'from-purple-600 to-pink-600',
    },
    {
      name: 'Data & Security',
      icon: Database,
      items: [
        { title: 'Data Backup', description: 'Automatic daily backups with point-in-time recovery', icon: '💾' },
        { title: 'Encryption', description: 'End-to-end encryption for all your data', icon: '🔒' },
        { title: 'Compliance', description: 'Meet GDPR, HIPAA, and SOC 2 requirements', icon: '🛡️' },
      ],
      color: 'from-emerald-600 to-green-600',
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
            Platform Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive feature set organized by category
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon size={18} />
                {category.name}
              </button>
            )
          })}
        </div>

        {/* Content Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {categories[activeCategory].items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-600/50 hover:shadow-xl transition-all duration-300 cursor-pointer`}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Capabilities

