import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'You can start a 14-day free trial with full access to all features. No credit card required. After the trial, you can choose to continue with a paid plan or your account will be paused. You can cancel anytime during the trial.',
    },
    {
      question: 'What integrations are available?',
      answer: 'Our platform integrates with 100+ popular tools including Slack, Microsoft Teams, Jira, GitHub, Google Workspace, Notion, Trello, Asana, and many more. We also offer custom integrations for Enterprise plans.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level encryption (AES-256), comply with SOC 2 Type II, GDPR, and HIPAA standards. Your data is stored in secure, encrypted databases and we never share your information with third parties.',
    },
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges or credits to your account.',
    },
    {
      question: 'Do you offer discounts for annual plans?',
      answer: 'Yes! Annual plans save you 20% compared to monthly billing. You\'ll see the savings reflected in your pricing when you select the yearly option.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'Starter plans include email support with 24-hour response time. Professional plans get priority support with faster response times. Enterprise plans include dedicated support with a dedicated account manager and custom training.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you\'ll continue to have access until the end of your billing period.',
    },
    {
      question: 'How does the AI automation work?',
      answer: 'Our AI learns from your team\'s patterns and workflows to suggest and automate repetitive tasks. You can create custom automation rules, and the AI will help optimize them over time. All automations can be reviewed and approved before execution.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our platform
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary-600/50 transition-colors duration-300 cursor-pointer"
              whileHover={{ x: 3 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 text-lg pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

