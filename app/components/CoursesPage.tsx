'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen, PenTool, Image, Megaphone, CheckCircle, Clock, Users,
  Star, ArrowRight, Video, Award, Filter, Zap,
} from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    slug: 'kdp-mastery',
    title: 'KDP Mastery Fundamentals',
    subtitle: 'The complete beginner-to-publisher course',
    description: 'Everything you need to set up your KDP account, write or source your first book, format it correctly, choose the right categories and keywords, and make your first sale on Amazon.',
    icon: BookOpen,
    color: 'orange',
    price: '₦75,000',
    priceUSD: '$50',
    level: 'Beginner',
    duration: '11+ hrs',
    lessons: 27,
    students: '700+',
    rating: 4.9,
    reviews: 312,
    badge: 'Most Popular',
    outcomes: [
      'Fully set up and optimised KDP account',
      'Publish your first book within 30 days',
      'Understand Amazon\'s ranking algorithm',
      'Choose profitable niches and keywords',
      'Price your book for maximum royalties',
    ],
    image: '/course-preview.jpg',
  },
  {
    slug: 'formatting',
    title: 'Book Formatting Mastery',
    subtitle: 'Professional formatting for eBook & paperback',
    description: 'Learn to format any book to Amazon\'s exact specifications using Microsoft Word and Vellum. Covers eBooks, paperbacks, low-content interiors, images, ToC, and export settings.',
    icon: PenTool,
    color: 'purple',
    price: '₦55,000',
    priceUSD: '$37',
    level: 'Beginner',
    duration: '6h 15m',
    lessons: 18,
    students: '450+',
    rating: 4.8,
    reviews: 204,
    badge: null,
    outcomes: [
      'Format a paperback manuscript in Word from scratch',
      'Create a professional eBook with working ToC',
      'Design low-content interiors for journals and planners',
      'Optimise images and export print-ready PDFs',
      'Avoid the most common KDP rejection reasons',
    ],
    image: '/course-preview.jpg',
  },
  {
    slug: 'design',
    title: 'Cover Design Secrets',
    subtitle: 'Create bestseller-worthy covers without a designer',
    description: 'Learn to design professional eBook and paperback covers in Canva and Adobe Express. Covers typography, colour psychology, niche research, competitor analysis, and spine calculation.',
    icon: Image,
    color: 'pink',
    price: '₦50,000',
    priceUSD: '$33',
    level: 'Beginner',
    duration: '5h 00m',
    lessons: 15,
    students: '380+',
    rating: 4.9,
    reviews: 178,
    badge: null,
    outcomes: [
      'Research what covers sell in your niche',
      'Design a full eBook cover in Canva from scratch',
      'Calculate paperback spine width correctly',
      'Use typography and colour to attract your ideal reader',
      'Brief a designer effectively (if you outsource)',
    ],
    image: '/course-preview.jpg',
  },
  {
    slug: 'marketing',
    title: 'Amazon Marketing Strategies',
    subtitle: 'Rank higher, sell more, earn consistently',
    description: 'Proven marketing tactics to increase your book\'s visibility on Amazon — covering keyword optimisation, Amazon Ads, book launch strategy, review generation, and scaling to multiple titles.',
    icon: Megaphone,
    color: 'green',
    price: '₦65,000',
    priceUSD: '$43',
    level: 'Intermediate',
    duration: '9h 45m',
    lessons: 28,
    students: '520+',
    rating: 4.9,
    reviews: 267,
    badge: 'Advanced',
    outcomes: [
      'Run profitable Amazon Sponsored Products campaigns',
      'Optimise your listing for Amazon\'s A9 algorithm',
      'Execute a 5-day book launch sequence',
      'Generate legitimate reviews ethically',
      'Scale a multi-title publishing portfolio',
    ],
    image: '/course-preview.jpg',
  },
]

const colorMap: Record<string, { bg: string; icon: string; badge: string; btn: string; border: string }> = {
  orange: { bg: 'bg-orange-50',  icon: 'text-orange-500 bg-orange-100', badge: 'bg-orange-500',  btn: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700', border: 'border-orange-200' },
  purple: { bg: 'bg-purple-50',  icon: 'text-purple-500 bg-purple-100', badge: 'bg-purple-500',  btn: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700', border: 'border-purple-200' },
  pink:   { bg: 'bg-pink-50',    icon: 'text-pink-500 bg-pink-100',     badge: 'bg-pink-500',    btn: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',       border: 'border-pink-200'   },
  green:  { bg: 'bg-green-50',   icon: 'text-green-600 bg-green-100',   badge: 'bg-green-600',   btn: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',   border: 'border-green-200'  },
}

const levelColor: Record<string, string> = {
  Beginner:     'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced:     'bg-red-100 text-red-700',
}

export default function CoursesPage() {
  const [filter, setFilter] = useState('All')
  const levels = ['All', 'Beginner', 'Intermediate']

  const filtered = filter === 'All' ? courses : courses.filter(c => c.level === filter)

  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 pt-32 pb-20 px-4 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">All Courses</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Your Publishing Journey Starts Here</h1>
          <p className="text-orange-100 text-lg max-w-xl mx-auto">Four comprehensive courses covering every stage of Amazon KDP publishing — from account setup to scaling a profitable portfolio.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { value: '4', label: 'Courses' },
            { value: '88', label: 'Total Lessons' },
            { value: '2,000+', label: 'Students' },
            { value: '4.9★', label: 'Avg Rating' },
          ].map(s => (
            <div key={s.label} className="bg-white/10 backdrop-blur rounded-2xl py-4 px-2">
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-orange-100 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b px-4 py-4 sticky top-[68px] z-30">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 items-center">
          <Filter className="w-4 h-4 text-gray-400 mr-1" />
          {levels.map(l => (
            <button key={l} onClick={() => setFilter(l)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filter === l ? 'bg-orange-500 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600'}`}>
              {l}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-400">{filtered.length} courses</span>
        </div>
      </section>

      {/* Course cards */}
      <section className="bg-gray-50 py-14 px-4 pb-20">
        <div className="max-w-5xl mx-auto space-y-8">
          {filtered.map((course, i) => {
            const c = colorMap[course.color]
            return (
              <motion.div key={course.slug} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                className={`bg-white rounded-3xl shadow-sm border-2 ${c.border} overflow-hidden hover:shadow-md transition-shadow`}>
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6">

                  {/* Icon + badge */}
                  <div className="flex-shrink-0 flex flex-col items-start gap-3">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${c.icon}`}>
                      <course.icon className="w-8 h-8" />
                    </div>
                    {course.badge && (
                      <span className={`text-xs font-bold text-white px-2.5 py-1 rounded-full ${c.badge}`}>{course.badge}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2 className="text-xl font-bold text-gray-900">{course.title}</h2>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${levelColor[course.level]}`}>{course.level}</span>
                    </div>
                    <p className="text-sm text-orange-600 font-semibold mb-2">{course.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{course.description}</p>

                    {/* What you'll learn */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                      {course.outcomes.map(o => (
                        <div key={o} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />{o}
                        </div>
                      ))}
                    </div>

                    {/* Meta row */}
                    <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-5">
                      <span className="flex items-center gap-1"><Video className="w-3.5 h-3.5" />{course.lessons} lessons</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{course.duration}</span>
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{course.students} enrolled</span>
                      <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />{course.rating} ({course.reviews} reviews)</span>
                    </div>

                    {/* Price + CTA */}
                    <div className="flex flex-wrap items-center gap-4">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{course.price}</p>
                        <p className="text-xs text-gray-400">≈ {course.priceUSD} · Lifetime access</p>
                      </div>
                      <Link href={`/courses/${course.slug}`}
                        className={`flex items-center gap-2 bg-gradient-to-r ${c.btn} text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-md`}>
                        View Course <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-4 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <Zap className="w-10 h-10 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Get all 4 courses for one price</h2>
          <p className="text-orange-100 mb-2">The <strong className="text-white">KDP Mastery Bundle</strong> includes every course, all templates, community access, and monthly live Q&A sessions.</p>
          <p className="text-3xl font-bold mb-6">₦200,000 <span className="text-lg font-normal text-orange-100">/ Lifetime</span></p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-semibold px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors">
              Get the Bundle <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/success" className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
              See Student Results
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
