import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Building2, Wrench, Shield, Sun, Factory, Home, ChevronRight } from 'lucide-react'

const IndustriesWeServe = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const industries = [
    {
      icon: Building2,
      title: 'Construction and Real Estate',
      description: 'Optimize project timelines, resource allocation, and client communication with custom workflows designed specifically for the construction and real estate industries.',
      color: 'from-amber-600 to-orange-600',
      details: 'Track projects from bid to completion, manage subcontractors, handle permits and inspections, and maintain client relationships all in one platform.',
    },
    {
      icon: Wrench,
      title: 'Professional Services',
      description: 'Simplify service scheduling, team coordination, and client management for faster resolution and happier clients.',
      color: 'from-blue-600 to-indigo-600',
      details: 'Schedule appointments, dispatch technicians, track service history, manage inventory, and process payments efficiently.',
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Streamline claims management, policy administration, and customer service workflows with specialized solutions.',
      color: 'from-emerald-600 to-teal-600',
      details: 'Process claims faster, manage policies, track renewals, handle underwriting, and provide excellent customer service.',
    },
    {
      icon: Sun,
      title: 'Solar Installation',
      description: 'Track installations, inventory management, and production cycles in real-time to boost productivity and reduce delays.',
      color: 'from-yellow-600 to-orange-600',
      details: 'Manage installation projects, track equipment inventory, schedule maintenance, and monitor system performance.',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Optimize production schedules, quality control processes, and supply chain management with intelligent workflows.',
      color: 'from-gray-600 to-gray-700',
      details: 'Track production lines, manage quality control, optimize inventory, coordinate suppliers, and ensure compliance.',
    },
    {
      icon: Home,
      title: 'Property Management',
      description: 'Manage properties, tenants, maintenance requests, and financial records all in one place.',
      color: 'from-purple-600 to-pink-600',
      details: 'Handle tenant applications, track leases, manage maintenance requests, process rent payments, and generate financial reports.',
    },
  ]

  return (
    <section className="py-20 dark-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by businesses across diverse industries with specialized solutions for each sector.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            const isHovered = hoveredIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 hover:border-primary-500/50 transition-all duration-300 cursor-pointer overflow-hidden group"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center flex-shrink-0`}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                    <motion.div
                      animate={{ x: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0.5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="text-white" size={20} />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm mb-3">
                    {industry.description}
                  </p>
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-300 text-sm leading-relaxed pt-3 border-t border-white/20">
                          {industry.details}
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

export default IndustriesWeServe
