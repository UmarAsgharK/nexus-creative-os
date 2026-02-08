import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const plans = [
    {
      name: 'Creator',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'For individual designers and developers',
      features: [
        'Up to 3 Projects',
        'Basic AI Integration',
        'Community Support',
        '1GB Storage',
        'Public Projects',
        'Basic Analytics',
      ],
      cta: 'Start Creating',
      popular: false,
    },
    {
      name: 'Studio',
      monthlyPrice: 49,
      yearlyPrice: 39,
      description: 'For growing design teams and agencies',
      features: [
        'Unlimited Projects',
        'Advanced AI Models',
        'Priority Support',
        '100GB Storage',
        'Private Projects',
        'Team Collaboration',
        'Visual Version Control',
        'Figma Sync',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Agency',
      monthlyPrice: 199,
      yearlyPrice: 159,
      description: 'For large organizations scaling design',
      features: [
        'Unlimited Everything',
        'Custom AI Models',
        'Dedicated Success Manager',
        'Unlimited Storage',
        'SSO & Advanced Security',
        'Audit Logs',
        'API Access',
        'White Labeling',
        'Custom Contracts',
        '24/7 Phone Support',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  return (
    <section id="pricing" ref={ref} className="pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Start free, upgrade as you grow. All plans include a 14-day free trial.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${isYearly ? 'bg-primary-600' : 'bg-gray-300'
                }`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'
                  }`}
              />
            </button>
            <span className={`font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-xl p-6 border-2 transition-all duration-300 flex flex-col cursor-pointer ${plan.popular
                  ? 'border-primary-600 shadow-lg scale-105'
                  : 'border-gray-200 shadow-sm hover:shadow-md'
                }`}
              whileHover={{ y: -5, scale: plan.popular ? 1.08 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-primary-600 text-white rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-5 mt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <div className="mb-5">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                {isYearly && (
                  <p className="text-sm text-gray-500 mt-1">
                    Billed annually (${plan.yearlyPrice * 12}/year)
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 mt-auto ${plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
