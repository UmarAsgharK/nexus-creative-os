import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: 'This platform has completely transformed how our team collaborates. The insights are incredibly accurate and have saved us hours every week.',
      author: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechCorp',
      avatar: 'SC',
      rating: 5,
    },
    {
      quote: 'The automation features are a game-changer. We\'ve reduced our meeting time by 40% and increased productivity across the board.',
      author: 'Michael Rodriguez',
      role: 'Engineering Lead',
      company: 'InnovateCo',
      avatar: 'MR',
      rating: 5,
    },
    {
      quote: 'Best investment we\'ve made in our workflow tools. The integration capabilities and real-time collaboration are unmatched.',
      author: 'Emily Johnson',
      role: 'Marketing Director',
      company: 'GlobalSys',
      avatar: 'EJ',
      rating: 5,
    },
    {
      quote: 'Implementation was seamless and the support team was exceptional. We were up and running in days, not weeks.',
      author: 'David Kim',
      role: 'Operations Director',
      company: 'DataFlow',
      avatar: 'DK',
      rating: 5,
    },
  ]

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-primary-600 text-primary-600" />
      ))}
    </div>
  )

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={ref} className="pt-20 pb-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by Teams Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what teams are saying about our platform
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-gray-200"
            >
              <StarRating rating={testimonials[currentIndex].rating} />
              <p className="text-gray-700 italic mb-8 leading-relaxed text-lg md:text-xl">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 hover:border-primary-600 flex items-center justify-center shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="text-gray-700" size={20} />
            </motion.button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 hover:border-primary-600 flex items-center justify-center shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="text-gray-700" size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
