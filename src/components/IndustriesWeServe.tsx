import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Building2, Wrench, Shield, Sun, Factory, Home, ChevronRight } from 'lucide-react'

const IndustriesWeServe = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const industries = [
    {
      icon: Wrench,
      title: 'Design Ops',
      description: 'Streamline your design system governance and distribution. Keep everyone aligned with a single source of truth.',
      color: 'from-amber-600 to-orange-600',
      details: 'Automate token distribution, manage component libraries, and track adoption across your organization.',
    },
    {
      icon: Building2,
      title: 'Product Teams',
      description: 'Move from concept to ship faster than ever. Prototype with real code components and validate ideas instantly.',
      color: 'from-blue-600 to-indigo-600',
      details: 'Connect design to development, run user tests on production-ready code, and iterate with confidence.',
    },
    {
      icon: Shield,
      title: 'Enterprise',
      description: 'Scale your design system across multiple brands and products with enterprise-grade security and control.',
      color: 'from-emerald-600 to-teal-600',
      details: 'SSO, Audit logs, Role-based access control, and dedicated support for large organizations.',
    },
    {
      icon: Sun,
      title: 'Startups',
      description: 'Build your MVP with professional polish from day one. Nexus gives you a world-class design system out of the box.',
      color: 'from-yellow-600 to-orange-600',
      details: 'Access premium component libraries, automated branding, and rapid prototyping tools.',
    },
    {
      icon: Factory,
      title: 'Engineering',
      description: 'Stop guessing CSS values. Get production-ready code for React, Vue, Svelte, and more directly from the design.',
      color: 'from-gray-600 to-gray-700',
      details: 'Clean code generation, type safety, and seamless integration with your existing CI/CD pipeline.',
    },
    {
      icon: Home,
      title: 'Marketing',
      description: 'Launch landing pages and campaigns independently while staying 100% on-brand.',
      color: 'from-purple-600 to-pink-600',
      details: 'Visual page builder powered by your design system, A/B testing, and built-in analytics.',
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
            Built for Modern Teams
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Whether you're a startup or a global enterprise, Nexus adapts to your workflow.
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
