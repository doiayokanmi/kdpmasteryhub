'use client'

import { motion } from 'motion/react'


export default function Stat({
  value,
  title,
  subtitle,
  highlight = false,
}: {
  value: React.ReactNode
  title: string
  subtitle: string
  highlight?: boolean
}) {
  return (
    <motion.div
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
    </motion.div>
  )
}