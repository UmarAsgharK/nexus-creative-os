import { motion } from 'framer-motion'
import { Play, Sparkles } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden dark-section pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,106,31,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-500/20 backdrop-blur-sm border border-primary-500/40 rounded-full mb-8">
                <Sparkles size={14} className="text-primary-300" />
                <span className="text-sm font-medium text-primary-100">
                  New: Visual Version Control 2.0
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              The Creative OS for{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                Modern Teams
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
            >
              Nexus bridges the gap between design and engineering. Generate production-ready code, manage design tokens, and ship faster—all from one source of truth.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.a
                href="#"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(249,115,22,0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                Start Creating
              </motion.a>
              <motion.a
                href="#"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg font-semibold text-lg hover:bg-white/15 transition-all duration-300 text-center flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play size={18} fill="currentColor" />
                View Demo
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 text-sm text-gray-400">
              <div>Trusted by</div>
              <div className="flex items-center gap-6 opacity-70">
                {['Vercel', 'Stripe', 'Airbnb', 'Linear'].map((company, i) => (
                  <div key={i} className="text-white font-medium">
                    {company}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-white/60 text-sm">Dashboard</div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <motion.div
                        key={i}
                        className="bg-white/5 rounded-lg p-3 border border-white/10"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      >
                        <div className="h-20 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
