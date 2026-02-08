import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Does Nexus work with existing projects?',
      answer: 'Yes! Nexus can ingest your existing CSS/Tailwind configuration and map it back to a new design system. You don\'t need to start from scratch.',
    },
    {
      question: 'Which design tools do you support?',
      answer: 'We currently have deep two-way integration with Figma. Sketch and Adobe XD support is in beta and coming soon to all users.',
    },
    {
      question: 'Is the generated code actually usable?',
      answer: 'Absolutely. We pride ourselves on "Clean Code" generation. Nexus produces semantic, accessible, and type-safe code that looks like it was written by a senior engineer.',
    },
    {
      question: 'Can I host Nexus on-premise?',
      answer: 'Yes, Enterprise plans include the option for self-hosting Nexus within your own VPC for complete data sovereignty and security.',
    },
    {
      question: 'How does Visual Version Control work?',
      answer: 'Just like Git. You create a "branch" of your design system to make changes. When you\'re ready, you open a Pull Request where teammates can review visual diffs before merging.',
    },
    {
      question: 'Do you support mobile apps?',
      answer: 'Yes! Nexus exports native code for iOS (SwiftUI) and Android (Jetpack Compose), as well as React Native and Flutter.',
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

