'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Filter, BookOpen, DollarSign, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'

/* ─── DATA ─── */
const allTestimonials = [
  {
    id: 1,
    name: 'Damilola Ayokanmi',
    role: 'Published Author',
    image: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    category: 'KDP Setup',
    text: 'KDP Mastery Hub completely transformed my publishing journey. I went from zero knowledge to publishing 15 books in just 6 months. The step-by-step tutorials leave nothing to guesswork — every lesson builds perfectly on the last.',
    booksPublished: 15,
    monthlyEarnings: '$2,500',
    location: 'Lagos, Nigeria',
  },
  {
    id: 2,
    name: 'Mr. Babs Olumide',
    role: 'KDP Entrepreneur',
    image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    category: 'Marketing',
    text: 'The best investment I have made in my publishing career. The marketing strategies are practical and actually work — not just theory. I doubled my book sales within 60 days of applying what I learned in the marketing module.',
    booksPublished: 22,
    monthlyEarnings: '$4,200',
    location: 'Abuja, Nigeria',
  },
  {
    id: 3,
    name: 'Luqman Adewale',
    role: 'Full-Time Author',
    image: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    category: 'Coaching',
    text: 'I was sceptical at first — I had tried other platforms. But KDP Mastery Hub delivered beyond my expectations. The one-on-one coaching sessions helped me identify and fix the exact mistakes that were killing my sales. I quit my 9-to-5 within 8 months.',
    booksPublished: 31,
    monthlyEarnings: '$6,800',
    location: 'London, UK',
  },
  {
    id: 4,
    name: 'Ibrahim Damilola',
    role: 'Beginner Success Story',
    image: 'https://i.pravatar.cc/150?img=13',
    rating: 5,
    category: 'KDP Setup',
    text: 'As a complete beginner with no writing background, I was totally overwhelmed. The KDP Setup module broke everything down into bite-sized steps. I published my first book in just 2 weeks and made my first sale the very next day!',
    booksPublished: 8,
    monthlyEarnings: '$1,200',
    location: 'Kano, Nigeria',
  },
  {
    id: 5,
    name: 'Adetorera Aduke',
    role: 'Design Expert',
    image: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    category: 'Formatting',
    text: 'The formatting and cover design tutorials are worth the entire course price alone. My books now look completely professional and readers actually comment on the quality of the layout. My reviews improved dramatically after I applied these lessons.',
    booksPublished: 18,
    monthlyEarnings: '$3,500',
    location: 'Ibadan, Nigeria',
  },
  {
    id: 6,
    name: 'Eniola Adebayo',
    role: 'Marketing Specialist',
    image: 'https://i.pravatar.cc/150?img=14',
    rating: 5,
    category: 'Marketing',
    text: 'The marketing strategies taught here are pure gold. I went from zero sales to consistent daily income in just 3 months. The Amazon Ads module alone helped me cut my advertising cost per click by 40% while doubling conversions.',
    booksPublished: 12,
    monthlyEarnings: '$2,100',
    location: 'Toronto, Canada',
  },
  {
    id: 7,
    name: 'Chioma Okafor',
    role: 'Nonfiction Author',
    image: 'https://i.pravatar.cc/150?img=20',
    rating: 5,
    category: 'Coaching',
    text: 'The coaching cohort changed everything for me. Having direct access to mentors who have already done what I am trying to do removed so much uncertainty. Within 4 months of joining the coaching programme I had published 3 books and earned back my investment many times over.',
    booksPublished: 9,
    monthlyEarnings: '$1,800',
    location: 'Port Harcourt, Nigeria',
  },
  {
    id: 8,
    name: 'Segun Fashola',
    role: 'Side-Income Author',
    image: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    category: 'Formatting',
    text: 'I work a full-time job and I needed something that was practical and time-efficient. KDP Mastery Hub fit perfectly — I went through the formatting course during weekends and had my first properly formatted paperback ready in two weeks.',
    booksPublished: 5,
    monthlyEarnings: '$750',
    location: 'Accra, Ghana',
  },
  {
    id: 9,
    name: 'Amina Yusuf',
    role: 'Children\'s Book Author',
    image: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    category: 'KDP Setup',
    text: 'I specialise in children\'s books and was worried the course wouldn\'t apply to my niche. I was wrong. The cover design and formatting sections were incredibly relevant and the KDP setup guidance is universal. I now have 6 children\'s books live on Amazon.',
    booksPublished: 6,
    monthlyEarnings: '$950',
    location: 'Kaduna, Nigeria',
  },
]

const categories = ['All', 'KDP Setup', 'Formatting', 'Marketing', 'Coaching']

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`}
        />
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? allTestimonials : allTestimonials.filter((t) => t.category === active)

  const totalEarnings = '$23,800+'
  const avgRating = '4.9'
  const totalBooks = allTestimonials.reduce((s, t) => s + t.booksPublished, 0)

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
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            What Our Students Say
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Real Results, Real People</h1>
          <p className="text-orange-100 text-lg max-w-xl mx-auto">
            These aren't cherry-picked quotes — they're outcomes from everyday people who committed to learning and took action.
          </p>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto mt-12 grid grid-cols-3 gap-4"
        >
          {[
            { icon: BookOpen, value: `${totalBooks}+`, label: 'Books Published' },
            { icon: DollarSign, value: totalEarnings, label: 'Student Earnings / mo' },
            { icon: TrendingUp, value: `${avgRating}★`, label: 'Average Rating' },
          ].map((s, i) => (
            <div key={s.label} className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
              <s.icon className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <p className="text-2xl sm:text-3xl font-bold">{s.value}</p>
              <p className="text-orange-100 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Filter bar ── */}
      <section className="bg-white border-b px-4 py-5 sticky top-[68px] z-30">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400 mr-1 flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-400">{filtered.length} reviews</span>
        </div>
      </section>

      {/* ── Cards ── */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t, i) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow"
              >
                {/* Quote icon */}
                <Quote className="w-7 h-7 text-orange-200 mb-3 flex-shrink-0" />

                {/* Rating */}
                <StarRating rating={t.rating} />

                {/* Category tag */}
                <span className="mt-2 inline-block text-xs font-semibold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full w-fit">
                  {t.category}
                </span>

                {/* Text */}
                <p className="mt-3 text-gray-700 text-sm leading-relaxed flex-1">{t.text}</p>

                {/* Stats */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-orange-400" />
                    {t.booksPublished} books
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-green-400" />
                    {t.monthlyEarnings}/mo
                  </span>
                </div>

                {/* Author */}
                <div className="mt-4 flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-orange-100" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role} · {t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            Your story could be next
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of authors who have already transformed their publishing journey with KDP Mastery Hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-7 py-4 rounded-xl transition-all hover:shadow-lg"
            >
              Start Your Journey <ArrowRight className="w-4 h-4" />
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
