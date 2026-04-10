'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Lightbulb,
  Rocket,
  Users,
  TrendingUp,
  Heart,
  Star,
  ArrowRight,
  Quote,
} from 'lucide-react'
import Link from 'next/link'

const timeline = [
  {
    year: '2019',
    icon: Lightbulb,
    title: 'The Idea',
    color: 'orange',
    body: 'David Samuel, a self-published author struggling to crack Amazon KDP, spent two years learning through costly trial and error. After publishing his 5th book and finally seeing consistent sales, he realised the knowledge he had gained was worth far more than any single book.',
  },
  {
    year: '2020',
    icon: BookOpen,
    title: 'First Students',
    color: 'blue',
    body: 'Starting with a WhatsApp group of 12 aspiring authors, David began sharing weekly tips on formatting, cover design, and KDP account setup. Within three months, 9 of those 12 members had published their first book.',
  },
  {
    year: '2021',
    icon: Rocket,
    title: 'KDP Mastery Hub Launches',
    color: 'purple',
    body: 'The WhatsApp group outgrew itself. KDP Mastery Hub officially launched as a structured online platform with its first three courses. Within the first six months, over 500 students enrolled from Nigeria, the UK, Canada, and the US.',
  },
  {
    year: '2022',
    icon: Users,
    title: 'Growing the Team',
    color: 'green',
    body: 'Sarah Johnson joined as Head of Content, bringing her bestselling author experience to build out the formatting and cover design curriculum. The student community crossed 2,000 members and the first coaching cohort launched.',
  },
  {
    year: '2023',
    icon: TrendingUp,
    title: 'Scaling Impact',
    color: 'orange',
    body: 'Marketing Director Michael Chen joined and helped students implement data-driven Amazon advertising strategies. Collective student earnings exceeded $500,000 for the year — a milestone that reinforced the platform\'s mission.',
  },
  {
    year: '2024',
    icon: Star,
    title: 'Community of 10,000+',
    color: 'yellow',
    body: 'KDP Mastery Hub crossed 10,000 enrolled students. New resources including free templates, live Q&A sessions, and a private community forum were added. The platform was recognised by three independent publishing blogs as a top KDP education resource.',
  },
  {
    year: '2025 →',
    icon: Heart,
    title: 'The Mission Continues',
    color: 'red',
    body: 'Today, KDP Mastery Hub continues to expand its curriculum and community. The mission remains unchanged: give every aspiring author — regardless of background or budget — the knowledge and confidence to publish successfully on Amazon KDP.',
  },
]

const values = [
  {
    icon: BookOpen,
    title: 'Clarity Over Complexity',
    body: 'We break down the publishing process into clear, actionable steps. No jargon, no overwhelm — just practical guidance that works.',
  },
  {
    icon: Heart,
    title: 'Student-First Always',
    body: 'Every course, resource, and update starts with one question: does this genuinely help our students succeed? If the answer is no, we don\'t build it.',
  },
  {
    icon: TrendingUp,
    title: 'Results That Matter',
    body: 'We measure success by our students\' outcomes — books published, income earned, goals achieved. Testimonials are evidence, not decoration.',
  },
  {
    icon: Users,
    title: 'Community Over Competition',
    body: 'Authors grow faster together. Our community is built on collaboration, shared knowledge, and genuine support between members.',
  },
]

const colorMap: Record<string, { bg: string; icon: string; dot: string }> = {
  orange: { bg: 'bg-orange-100', icon: 'text-orange-500', dot: 'bg-orange-500' },
  blue:   { bg: 'bg-blue-100',   icon: 'text-blue-500',   dot: 'bg-blue-500'   },
  purple: { bg: 'bg-purple-100', icon: 'text-purple-500', dot: 'bg-purple-500' },
  green:  { bg: 'bg-green-100',  icon: 'text-green-500',  dot: 'bg-green-500'  },
  yellow: { bg: 'bg-yellow-100', icon: 'text-yellow-500', dot: 'bg-yellow-500' },
  red:    { bg: 'bg-red-100',    icon: 'text-red-500',    dot: 'bg-red-500'    },
}

export default function OurStoryPage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="min-h-[55vh] bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center"
        >
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            From Frustration to a<br />Platform That Changes Lives
          </h1>
          <p className="text-orange-100 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            KDP Mastery Hub was born out of one author's struggle — and a deep belief that the knowledge to succeed on Amazon shouldn't be locked away behind years of expensive trial and error.
          </p>
        </motion.div>
      </section>

      {/* ── Founder quote ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-orange-50 rounded-3xl p-8 sm:p-12"
          >
            <Quote className="absolute top-6 left-6 w-10 h-10 text-orange-200" />
            <blockquote className="text-xl sm:text-2xl font-medium text-gray-800 leading-relaxed text-center px-6">
              "I wasted two years and thousands of dollars figuring out KDP on my own. I built KDP Mastery Hub so no one else has to."
            </blockquote>
            <div className="flex items-center justify-center gap-3 mt-8">
              <img
                src="https://i.pravatar.cc/80?img=12"
                alt="David Samuel"
                className="w-12 h-12 rounded-full ring-2 ring-orange-200"
              />
              <div>
                <p className="font-bold text-gray-900">David Samuel</p>
                <p className="text-sm text-gray-500">Founder & CEO, KDP Mastery Hub</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">How We Got Here</h2>
            <p className="text-gray-600">Every milestone driven by one goal: student success.</p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />

            <div className="space-y-10">
              {timeline.map((item, i) => {
                const c = colorMap[item.color]
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.45 }}
                    className="flex gap-5"
                  >
                    {/* Icon dot */}
                    <div className="flex-shrink-0 hidden sm:flex flex-col items-center">
                      <div className={`w-11 h-11 rounded-full ${c.bg} flex items-center justify-center ring-4 ring-white z-10`}>
                        <item.icon className={`w-5 h-5 ${c.icon}`} />
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.bg} ${c.icon}`}>
                          {item.year}
                        </span>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">What We Stand For</h2>
            <p className="text-gray-600">Values aren't posters on a wall — they're in every course we build.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-orange-50 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats banner ── */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-white text-center">
          {[
            { value: '10,000+', label: 'Students Enrolled' },
            { value: '500+',    label: 'Books Published' },
            { value: '$500K+',  label: 'Student Earnings' },
            { value: '4.9★',    label: 'Average Rating' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-3xl sm:text-4xl font-bold">{s.value}</p>
              <p className="text-orange-100 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to write your own story?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of authors who turned their knowledge into published books and consistent income.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-7 py-4 rounded-xl transition-all hover:shadow-lg"
            >
              Get Started Today <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/success"
              className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-600 font-semibold px-7 py-4 rounded-xl hover:bg-orange-50 transition-colors"
            >
              Read Success Stories
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
