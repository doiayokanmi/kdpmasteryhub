'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

/* ---------- COUNT UP COMPONENT ---------- */
interface CountUpProps {
  end: number
  suffix?: string
  duration?: number
  decimals?: number
}

function CountUp({
  end,
  suffix = '',
  duration = 1.6,
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })
  const [count, setCount] = useState(0)
  const frameRef = useRef<number | undefined>(undefined) // ✅ Fixed
  const startTimeRef = useRef<number | undefined>(undefined) // ✅ Fixed
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) return
    
    hasAnimatedRef.current = true

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      const progress = Math.min((timestamp - startTimeRef.current) / (duration * 1000), 1)
      const currentCount = progress * end

      setCount(currentCount)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [isInView, end, duration])

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString()

  return (
    <span ref={ref} aria-live="polite">
      {formattedCount}
      {suffix}
    </span>
  )
}

/* ---------- STAT ITEM ---------- */
interface StatProps {
  value: React.ReactNode
  title: string
  subtitle: string
  highlight?: boolean
}

function Stat({ value, title, subtitle, highlight = false }: StatProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-3"
    >
      <div
        className={`text-5xl md:text-6xl font-bold ${
          highlight ? 'text-[#7C2D12]' : 'text-white'
        }`}
      >
        {value}
      </div>

      <p className="text-lg font-medium text-white">
        {title}
      </p>

      <p className="text-sm text-white/80">
        {subtitle}
      </p>
    </motion.article>
  )
}

/* ---------- MAIN SECTION ---------- */
export default function HighlightText() {
  return (
    <section
      className="
        py-24 px-6
        text-white
        text-center
        nanum-gothic
        bg-gradient-to-br
        from-[#F97A0B]
        via-[#FB923C]
        to-[#FED7AA]
      "
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-medium"
      >
        Proven Results That Speak
      </motion.h2>

      {/* STATS */}
      <div
        className="
          mt-16
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-12
          max-w-7xl
          mx-auto
        "
      >
        <Stat
          value={<CountUp end={700} suffix="+" />}
          title="Students Enrolled"
          subtitle="Learning KDP with DSAM"
        />

        <Stat
          value={<CountUp end={1000} suffix="+" />}
          title="Books Published"
          subtitle="By our students"
        />

        <Stat
          value={<CountUp end={4.9} decimals={1} />}
          title="Average Rating"
          subtitle="From 100+ reviews"
        />

        <Stat
          value={<CountUp end={100} suffix="K+" />}
          title="DSAM's Earnings"
          subtitle="Combined revenue generated"
          highlight
        />
      </div>
    </section>
  )
}