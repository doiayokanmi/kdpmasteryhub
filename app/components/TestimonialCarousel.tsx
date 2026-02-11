'use client'

import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/utils'



/* ---------- STAR RATING COMPONENT ---------- */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-300 text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

/* ---------- TESTIMONIAL CARD ---------- */
function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0]
}) {
  return (
    <div className="relative flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          bg-white
          rounded-2xl
          shadow-xl
          p-8
          h-full
          flex
          flex-col
          relative
          hover:shadow-2xl
          transition-shadow
          duration-300
        "
      >
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 opacity-10">
          <Quote className="w-16 h-16 text-orange-500" />
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover ring-4 ring-orange-100"
          />
          <div>
            <h3 className="font-bold text-lg text-gray-900">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <StarRating rating={testimonial.rating} />
        </div>

        {/* Review Text */}
        <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
          "{testimonial.text}"
        </p>

        {/* Stats */}
        <div className="flex gap-6 pt-4 border-t border-gray-100">
          <div>
            <p className="text-2xl font-bold text-orange-500">
              {testimonial.booksPublished}
            </p>
            <p className="text-xs text-gray-600">Books Published</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">
              {testimonial.monthlyEarnings}
            </p>
            <p className="text-xs text-gray-600">Monthly Earnings</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/* ---------- MAIN TESTIMONIAL CAROUSEL ---------- */
export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      skipSnaps: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const [selectedIndex, setSelectedIndex] = React.useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of successful authors who transformed their lives with
            our KDP mastery program
          </p>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            -translate-x-4
            bg-white
            hover:bg-orange-500
            text-gray-800
            hover:text-white
            rounded-full
            p-3
            shadow-lg
            transition-all
            duration-300
            z-10
            hidden
            md:block
          "
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={scrollNext}
          className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            translate-x-4
            bg-white
            hover:bg-orange-500
            text-gray-800
            hover:text-white
            rounded-full
            p-3
            shadow-lg
            transition-all
            duration-300
            z-10
            hidden
            md:block
          "
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${
                  index === selectedIndex
                    ? 'bg-orange-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }
              `}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-16"
      >
        <p className="text-gray-600 mb-6">
          Ready to write your own success story?
        </p>
        <button
          className="
            bg-gradient-to-r
            from-orange-500
            to-orange-600
            text-white
            px-8
            py-4
            rounded-full
            font-semibold
            text-lg
            hover:from-orange-600
            hover:to-orange-700
            transition-all
            duration-300
            shadow-lg
            hover:shadow-xl
            hover:scale-105
          "
        >
          Start Your Journey Today
        </button>
      </motion.div>
    </section>
  )
}
