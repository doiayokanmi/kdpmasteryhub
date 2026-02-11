'use client'

import React, { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'motion/react'
import { slides } from '@/lib/utils'



export default function EmblaCarousel() {
  const autoplay = Autoplay({ delay: 6000, stopOnInteraction: false })
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay])
  const [activeIndex, setActiveIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setActiveIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <div
      className="embla relative w-full overflow-hidden"
      onMouseEnter={() => autoplay.stop()}
      onMouseLeave={() => autoplay.play()}
    >
      {/* VIEWPORT */}
      <div ref={emblaRef} className="embla__viewport">
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide min-w-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay */}
              <div className="h-[80vh] md:h-screen bg-black/60 flex items-center justify-center px-6">
                <motion.div
                  key={activeIndex === index ? index : 'inactive'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-center max-w-3xl text-white space-y-6"
                >
                  <h1 className="text-3xl md:text-5xl font-bold">
                    {slide.title}
                  </h1>

                  {/* LINE-BY-LINE TEXT */}
                  <div className="space-y-2 text-lg text-gray-200">
                    {slide.lines.map((line, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.15 }}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>

                  {slide.cta && (
                    <motion.a href='#'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="mt-6 bg-[#F97A0B] hover:bg-[#e06a00] px-6 py-3 rounded-lg text-white font-medium"
                    >
                      {slide.cta}
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROGRESS DOTS */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-3 h-3 rounded-full transition ${
              activeIndex === i
                ? 'bg-[#F97A0B]'
                : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
