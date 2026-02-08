import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Users, Star, CheckCircle, Globe } from 'lucide-react'

const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      const stepDuration = duration / steps

      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return <span ref={ref}>{count}{suffix}</span>
}

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    {
      icon: Users,
      value: 50,
      suffix: 'K+',
      label: 'Active Users',
      color: 'from-primary-600 to-primary-700',
    },
    {
      icon: Star,
      value: 98,
      suffix: '%',
      label: 'Satisfaction Rate',
      color: 'from-amber-600 to-orange-600',
    },
    {
      icon: CheckCircle,
      value: 2,
      suffix: 'M+',
      label: 'Tasks Completed',
      color: 'from-emerald-600 to-green-600',
    },
    {
      icon: Globe,
      value: 150,
      suffix: '+',
      label: 'Countries',
      color: 'from-blue-600 to-cyan-600',
    },
  ]

  return (
    <section ref={ref} className="py-16 dark-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 border border-gray-200 cursor-pointer"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="text-white" size={24} />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {isInView ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
