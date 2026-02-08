import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Megaphone, TrendingUp, Users, CheckCircle2 } from 'lucide-react'

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: 'dev',
      label: 'Development Teams',
      icon: Code,
      title: 'Streamline Your Development Workflow',
      description: 'Integrate seamlessly with GitHub, Jira, and your CI/CD pipeline. Get intelligent code reviews, automated task assignment, and real-time collaboration that keeps your team aligned.',
      features: [
        'Automated PR reviews and suggestions',
        'Smart task prioritization based on dependencies',
        'Real-time sprint planning and tracking',
        'Integration with 50+ dev tools',
      ],
      color: 'from-blue-500 to-cyan-500',
      stats: 'Used by 10,000+ developers',
    },
    {
      id: 'marketing',
      label: 'Marketing Teams',
      icon: Megaphone,
      title: 'Amplify Your Marketing Impact',
      description: 'Coordinate campaigns, track performance, and optimize strategies with intelligent insights. Help marketing teams collaborate on content, manage campaigns, and measure ROI effectively.',
      features: [
        'Campaign planning and collaboration',
        'Content calendar and approval workflows',
        'Performance analytics and insights',
        'Multi-channel campaign management',
      ],
      color: 'from-purple-500 to-pink-500',
      stats: 'Powering 5,000+ campaigns',
    },
    {
      id: 'sales',
      label: 'Sales Teams',
      icon: TrendingUp,
      title: 'Close More Deals, Faster',
      description: 'Manage your sales pipeline, automate follow-ups, and get intelligent insights on deal health. Help sales teams stay organized and never miss an opportunity.',
      features: [
        'Pipeline management and forecasting',
        'Automated follow-up reminders',
        'Deal health scoring and alerts',
        'CRM integration and sync',
      ],
      color: 'from-green-500 to-emerald-500',
      stats: 'Managing $2B+ in pipeline',
    },
    {
      id: 'hr',
      label: 'HR Teams',
      icon: Users,
      title: 'Transform Your HR Operations',
      description: 'Streamline recruitment, onboarding, and employee management with intelligent workflows. Help HR teams automate processes and focus on what matters most - people.',
      features: [
        'Recruitment pipeline management',
        'Automated onboarding workflows',
        'Employee engagement tracking',
        'Performance review automation',
      ],
      color: 'from-orange-500 to-red-500',
      stats: 'Supporting 50,000+ employees',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Every Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our platform adapts to your team's unique workflow
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Tab Navigation */}
          <div className="lg:col-span-2">
            <div className="space-y-2">
              {tabs.map((tab, index) => {
                const Icon = tab.icon
                const isActive = activeTab === index
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 relative overflow-hidden ${isActive
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      }`}
                    whileHover={{ x: isActive ? 0 : 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500"
                        layoutId="activeTab"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                    <div className="flex items-center gap-3 relative z-10">
                      <motion.div
                        animate={{ rotate: isActive ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon size={20} />
                      </motion.div>
                      <span className="font-semibold">{tab.label}</span>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {tabs.map((tab, index) => {
                if (index !== activeTab) return null
                const Icon = tab.icon
                return (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tab.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="text-white" size={32} />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                      >
                        {tab.stats}
                      </motion.div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {tab.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {tab.description}
                    </p>
                    <ul className="space-y-3">
                      {tab.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                        >
                          <motion.div
                            className={`w-6 h-6 rounded-full bg-gradient-to-br ${tab.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </motion.div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveDemo
