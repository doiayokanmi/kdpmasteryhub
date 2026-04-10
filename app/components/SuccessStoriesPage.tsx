'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen,
  DollarSign,
  TrendingUp,
  Star,
  Clock,
  Target,
  Quote,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Award,
} from 'lucide-react'
import Link from 'next/link'

/* ─── DATA ─── */
const stories = [
  {
    id: 1,
    name: 'Luqman Adewale',
    role: 'Full-Time Author',
    image: 'https://i.pravatar.cc/200?img=5',
    location: 'London, UK',
    niche: 'Self-Help & Personal Development',
    joinedDate: 'March 2022',
    booksPublished: 31,
    monthlyEarnings: '$6,800',
    timeToFirstSale: '11 days',
    highlight: 'Quit 9-to-5 within 8 months',
    color: 'orange',
    summary: 'From a frustrated office worker to a full-time author earning over $6,800 per month — Luqman\'s transformation is one of the most remarkable in our community.',
    challenge: 'Luqman had tried to publish on KDP twice before joining KDP Mastery Hub. Both times he uploaded books with poor formatting, no keyword research, and covers he described as "embarrassing." Neither book made a single sale. He was close to giving up entirely.',
    solution: 'After going through the KDP Mastery Fundamentals and Book Formatting modules, Luqman relaunched his two existing books with professional covers and proper formatting. He then applied the Amazon Marketing Strategies course to run targeted ads. Within 30 days, both books were generating consistent daily sales.',
    outcome: 'Within 8 months of joining, Luqman had published 31 books across 4 niches, built a monthly passive income of $6,800, and handed in his resignation. He now runs his publishing business full-time from home.',
    quote: 'I almost gave up. Two failed attempts had knocked my confidence completely. KDP Mastery Hub didn\'t just teach me the technical stuff — it restored my belief that this was actually possible.',
    stats: [
      { icon: BookOpen, label: 'Books Published', value: '31' },
      { icon: DollarSign, label: 'Monthly Earnings', value: '$6,800' },
      { icon: Clock, label: 'Time to First Sale', value: '11 days' },
      { icon: TrendingUp, label: 'Revenue Growth', value: '+840%' },
    ],
  },
  {
    id: 2,
    name: 'Eniola Adebayo',
    role: 'Marketing Specialist',
    image: 'https://i.pravatar.cc/200?img=14',
    location: 'Toronto, Canada',
    niche: 'Business & Finance',
    joinedDate: 'January 2023',
    booksPublished: 12,
    monthlyEarnings: '$2,100',
    timeToFirstSale: '6 days',
    highlight: 'Zero to $2,100/mo in 3 months',
    color: 'blue',
    summary: 'Eniola arrived with strong writing skills but zero knowledge of how Amazon\'s algorithm works. By mastering the marketing module, she went from no sales to consistent daily income within 90 days.',
    challenge: 'Despite publishing 3 books independently before joining, Eniola had never broken 5 sales in a single month. Her books were well-written but invisible on Amazon — no keyword optimisation, no categories strategy, and no ad spend.',
    solution: 'Eniola laser-focused on the Marketing Strategies and KDP Advertising modules. She rebuilt all her book listings from scratch using the keyword research framework and restructured her Amazon Ads campaigns using the bid optimisation techniques taught in the course.',
    outcome: 'In month one she earned $380. In month two, $1,100. By month three she crossed $2,100 and hasn\'t looked back. She now publishes one new book per month and mentors three other students inside the community.',
    quote: 'I had good books that nobody could find. KDP Mastery Hub taught me that publishing is 50% writing and 50% marketing. Once I understood that, everything changed.',
    stats: [
      { icon: BookOpen, label: 'Books Published', value: '12' },
      { icon: DollarSign, label: 'Monthly Earnings', value: '$2,100' },
      { icon: Clock, label: 'Time to First Sale', value: '6 days' },
      { icon: TrendingUp, label: 'Month-3 Growth', value: '+453%' },
    ],
  },
  {
    id: 3,
    name: 'Damilola Ayokanmi',
    role: 'Published Author',
    image: 'https://i.pravatar.cc/200?img=1',
    location: 'Lagos, Nigeria',
    niche: 'Children\'s Books & Education',
    joinedDate: 'July 2022',
    booksPublished: 15,
    monthlyEarnings: '$2,500',
    timeToFirstSale: '14 days',
    highlight: '15 books in 6 months',
    color: 'green',
    summary: 'Damilola set an ambitious goal when she joined: publish 12 books in her first year. She beat that target by 3 — and built a $2,500/month income in the process.',
    challenge: 'Damilola wanted to create educational children\'s books but was intimidated by the illustration and formatting requirements. She also had no idea how to price books or choose the right categories on Amazon.',
    solution: 'She worked through the KDP Setup and Formatting modules sequentially, then partnered with a freelance illustrator she found through the community. The course\'s section on category and keyword selection was transformative for her niche.',
    outcome: 'Fifteen published books in six months — all professionally formatted, properly categorised, and consistently ranked. Her "Early Readers" series became the top earner, generating $1,200/month on its own.',
    quote: 'I had no idea you could publish 15 books in 6 months without sacrificing quality. The system in this course makes it completely achievable.',
    stats: [
      { icon: BookOpen, label: 'Books Published', value: '15' },
      { icon: DollarSign, label: 'Monthly Earnings', value: '$2,500' },
      { icon: Clock, label: 'Time to First Sale', value: '14 days' },
      { icon: Award, label: 'Series Created', value: '3' },
    ],
  },
]

const colorMap: Record<string, { badge: string; border: string; stat: string }> = {
  orange: { badge: 'bg-orange-100 text-orange-700', border: 'border-orange-200', stat: 'text-orange-600' },
  blue:   { badge: 'bg-blue-100 text-blue-700',     border: 'border-blue-200',   stat: 'text-blue-600'   },
  green:  { badge: 'bg-green-100 text-green-700',   border: 'border-green-200',  stat: 'text-green-600'  },
}

function StoryCard({ story }: { story: typeof stories[0] }) {
  const [expanded, setExpanded] = useState(false)
  const c = colorMap[story.color]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white rounded-3xl shadow-sm border-2 ${c.border} overflow-hidden`}
    >
      {/* Top section */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row gap-5">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src={story.image}
              alt={story.name}
              className="w-20 h-20 rounded-2xl object-cover ring-4 ring-gray-100"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2 className="text-xl font-bold text-gray-900">{story.name}</h2>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${c.badge}`}>
                {story.highlight}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-1">{story.role} · {story.location}</p>
            <p className="text-sm text-gray-500">Niche: <span className="font-medium text-gray-700">{story.niche}</span></p>

            {/* Stars */}
            <div className="flex gap-0.5 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <p className="mt-5 text-gray-600 leading-relaxed">{story.summary}</p>

        {/* Stats row */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {story.stats.map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-xl p-3 text-center">
              <s.icon className={`w-4 h-4 mx-auto mb-1 ${c.stat}`} />
              <p className={`text-lg font-bold ${c.stat}`}>{s.value}</p>
              <p className="text-xs text-gray-500 mt-0.5 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
        >
          {expanded ? 'Show less' : 'Read the full story'}
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Expanded content */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="border-t border-gray-100 px-6 sm:px-8 pb-8 pt-6 space-y-5 bg-gray-50"
        >
          {[
            { label: 'The Challenge', icon: Target, text: story.challenge },
            { label: 'The Solution', icon: BookOpen, text: story.solution },
            { label: 'The Outcome', icon: TrendingUp, text: story.outcome },
          ].map((section) => (
            <div key={section.label}>
              <div className="flex items-center gap-2 mb-2">
                <section.icon className="w-4 h-4 text-orange-500" />
                <h3 className="font-bold text-gray-900 text-sm">{section.label}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{section.text}</p>
            </div>
          ))}

          {/* Pull quote */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 mt-2">
            <Quote className="w-6 h-6 text-orange-200 mb-2" />
            <blockquote className="text-gray-700 italic text-sm leading-relaxed">
              "{story.quote}"
            </blockquote>
            <p className="mt-3 text-xs font-semibold text-gray-500">— {story.name}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function SuccessStoriesPage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 pt-32 pb-20 px-4 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block bg-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Success Stories
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">From Student to Published Author</h1>
          <p className="text-orange-100 text-lg max-w-xl mx-auto">
            In-depth stories of real students who used KDP Mastery Hub to build publishing businesses — complete with their challenges, breakthroughs, and numbers.
          </p>
        </motion.div>
      </section>

      {/* ── Stories ── */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
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
            Ready to write your success story?
          </h2>
          <p className="text-gray-600 mb-8">
            Every person featured here started exactly where you are now. The only difference is they started.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-7 py-4 rounded-xl transition-all hover:shadow-lg"
            >
              Get Started Today <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-600 font-semibold px-7 py-4 rounded-xl hover:bg-orange-50 transition-colors"
            >
              See All Testimonials
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
