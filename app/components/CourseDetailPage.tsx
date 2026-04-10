'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle, Clock, Users, Star, Video, Award, ChevronDown, ChevronUp,
  BookOpen, ArrowRight, Play, Lock, MessageSquare, Shield,
} from 'lucide-react'
import Link from 'next/link'

/* ─── SHARED TYPES ─── */
export interface CourseModule {
  title: string
  lessons: { title: string; duration: string; free?: boolean }[]
}

export interface CourseData {
  slug: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  price: string
  priceUSD: string
  level: string
  duration: string
  lessons: number
  students: string
  rating: number
  reviews: number
  color: string
  outcomes: string[]
  requirements: string[]
  forWhom: string[]
  modules: CourseModule[]
  instructor: {
    name: string
    role: string
    image: string
    bio: string
    books: number
    students: string
  }
  faqs: { q: string; a: string }[]
}

/* ─── COLOR MAP ─── */
const colorMap: Record<string, { hero: string; badge: string; btn: string; tag: string }> = {
  orange: { hero: 'from-orange-500 to-orange-600', badge: 'bg-orange-500', btn: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700', tag: 'text-orange-600 bg-orange-50' },
  purple: { hero: 'from-purple-500 to-purple-700', badge: 'bg-purple-600', btn: 'from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800', tag: 'text-purple-600 bg-purple-50' },
  pink:   { hero: 'from-pink-500 to-pink-700',   badge: 'bg-pink-600',   btn: 'from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800',     tag: 'text-pink-600 bg-pink-50'     },
  green:  { hero: 'from-green-600 to-green-700', badge: 'bg-green-600', btn: 'from-green-500 to-green-700 hover:from-green-600 hover:to-green-800', tag: 'text-green-700 bg-green-50'  },
}

const levelColor: Record<string, string> = {
  Beginner:     'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced:     'bg-red-100 text-red-700',
}

/* ─── MODULE ACCORDION ─── */
function ModuleRow({ mod, index }: { mod: CourseModule; index: number }) {
  const [open, setOpen] = useState(index === 0)
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors text-left gap-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center flex-shrink-0">{index + 1}</span>
          <span className="font-semibold text-gray-900">{mod.title}</span>
          <span className="text-xs text-gray-400 hidden sm:inline">{mod.lessons.length} lessons</span>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
      </button>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-t border-gray-100 divide-y divide-gray-50">
          {mod.lessons.map((lesson) => (
            <div key={lesson.title} className="flex items-center justify-between px-5 py-3 bg-white">
              <div className="flex items-center gap-3">
                {lesson.free
                  ? <Play className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  : <Lock className="w-4 h-4 text-gray-300 flex-shrink-0" />}
                <span className="text-sm text-gray-700">{lesson.title}</span>
                {lesson.free && <span className="text-xs text-orange-500 font-semibold">Preview</span>}
              </div>
              <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{lesson.duration}</span>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

/* ─── FAQ ITEM ─── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors text-left gap-3">
        <span className="font-semibold text-gray-900">{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />}
      </button>
      {open && (
        <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="px-5 pb-4 bg-white text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
          {a}
        </motion.div>
      )}
    </div>
  )
}

/* ─── STICKY ENROL CARD ─── */
function EnrolCard({ course, c }: { course: CourseData; c: ReturnType<typeof colorMap['orange']['btn']> & any }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sticky top-28">
      <div className="text-3xl font-bold text-gray-900 mb-0.5">{course.price}</div>
      <p className="text-sm text-gray-400 mb-5">≈ {course.priceUSD} · One-time · Lifetime access</p>
      <Link href="/signup"
        className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${c.btn} text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg mb-3`}>
        Enrol Now <ArrowRight className="w-4 h-4" />
      </Link>
      <p className="text-center text-xs text-gray-400 mb-5 flex items-center justify-center gap-1">
        <Shield className="w-3.5 h-3.5" /> 7-day money-back guarantee
      </p>
      <ul className="space-y-2.5">
        {[
          `${course.lessons} video lessons`,
          `${course.duration} of content`,
          'Lifetime access on all devices',
          'Downloadable templates included',
          'Private community access',
          'Certificate of completion',
        ].map(item => (
          <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />{item}
          </li>
        ))}
      </ul>
      <div className="mt-5 pt-5 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-400">Share this course:</p>
        <div className="flex justify-center gap-3 mt-2">
          {['Twitter', 'Facebook', 'WhatsApp'].map(s => (
            <button key={s} className="text-xs text-gray-400 hover:text-orange-500 transition-colors font-medium">{s}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── MAIN COMPONENT ─── */
export default function CourseDetailPage({ course }: { course: CourseData }) {
  const c = colorMap[course.color]
  const totalLessons = course.modules.reduce((s, m) => s + m.lessons.length, 0)

  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className={`bg-gradient-to-br ${c.hero} pt-32 pb-20 px-4 text-white`}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2 mb-4">
              <Link href="/courses" className="text-white/70 hover:text-white text-sm transition-colors">All Courses</Link>
              <span className="text-white/40">›</span>
              <span className="text-white/90 text-sm">{course.title}</span>
            </div>
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/20 mb-4`}>{course.level}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight">{course.title}</h1>
            <p className="text-white/80 text-lg mb-4">{course.subtitle}</p>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xl">{course.description}</p>
            <div className="flex flex-wrap gap-5 text-sm mb-6">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-yellow-300 fill-yellow-300" /><strong>{course.rating}</strong> ({course.reviews} reviews)</span>
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4 opacity-70" />{course.students} students</span>
              <span className="flex items-center gap-1.5"><Video className="w-4 h-4 opacity-70" />{course.lessons} lessons</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 opacity-70" />{course.duration}</span>
            </div>
            <div className="flex items-center gap-3">
              <img src={course.instructor.image} alt={course.instructor.name} className="w-9 h-9 rounded-full ring-2 ring-white/30" />
              <span className="text-sm text-white/80">Created by <strong className="text-white">{course.instructor.name}</strong></span>
            </div>
          </div>
          {/* Desktop enrol card */}
          <div className="hidden lg:block">
            <EnrolCard course={course} c={c} />
          </div>
        </div>
      </section>

      {/* Mobile enrol bar */}
      <div className="lg:hidden bg-white border-b px-4 py-4 sticky top-[68px] z-30 shadow-sm">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div>
            <p className="text-xl font-bold text-gray-900">{course.price}</p>
            <p className="text-xs text-gray-400">Lifetime access</p>
          </div>
          <Link href="/signup" className={`flex items-center gap-1.5 bg-gradient-to-r ${c.btn} text-white font-semibold px-5 py-2.5 rounded-xl text-sm`}>
            Enrol Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Body */}
      <section className="bg-gray-50 py-14 px-4 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-10">

            {/* What you'll learn */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-5">What You'll Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.outcomes.map(o => (
                  <div key={o} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{o}
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About This Course</h2>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{course.longDescription}</p>
            </div>

            {/* Curriculum */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <div className="flex items-start justify-between mb-5">
                <h2 className="text-xl font-bold text-gray-900">Course Curriculum</h2>
                <span className="text-sm text-gray-500">{totalLessons} lessons · {course.duration}</span>
              </div>
              <div className="space-y-3">
                {course.modules.map((mod, i) => <ModuleRow key={mod.title} mod={mod} index={i} />)}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-2">
                {course.requirements.map(r => (
                  <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />{r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Who this is for */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Who This Course Is For</h2>
              <ul className="space-y-2">
                {course.forWhom.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructor */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Your Instructor</h2>
              <div className="flex gap-4">
                <img src={course.instructor.image} alt={course.instructor.name} className="w-16 h-16 rounded-2xl object-cover flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">{course.instructor.name}</h3>
                  <p className="text-sm text-orange-600 font-medium mb-2">{course.instructor.role}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" />{course.instructor.books}+ books published</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{course.instructor.students} students taught</span>
                    <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />4.9 instructor rating</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{course.instructor.bio}</p>
                </div>
              </div>
            </div>

            {/* Reviews summary */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-orange-500" /> Student Reviews
              </h2>
              <div className="flex items-center gap-6 mb-6">
                <div className="text-center">
                  <p className="text-5xl font-bold text-orange-500">{course.rating}</p>
                  <div className="flex gap-0.5 justify-center my-1">
                    {Array.from({length:5}).map((_,i)=><Star key={i} className={`w-4 h-4 ${i < Math.round(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`}/>)}
                  </div>
                  <p className="text-xs text-gray-400">Course Rating</p>
                </div>
                <div className="flex-1 space-y-1.5">
                  {[5,4,3,2,1].map(n => {
                    const pct = n === 5 ? 78 : n === 4 ? 16 : n === 3 ? 4 : n === 2 ? 1 : 1
                    return (
                      <div key={n} className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-400 rounded-full" style={{width:`${pct}%`}} />
                        </div>
                        <span className="text-xs text-gray-400 w-6 text-right">{n}★</span>
                        <span className="text-xs text-gray-400 w-8">{pct}%</span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <Link href="/testimonials" className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors flex items-center gap-1">
                Read all student reviews <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {course.faqs.map(f => <FaqItem key={f.q} {...f} />)}
              </div>
            </div>

          </div>

          {/* Desktop sidebar */}
          <div className="hidden lg:block">
            <EnrolCard course={course} c={c} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={`bg-gradient-to-r ${c.hero} py-16 px-4 text-white text-center`}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mx-auto">
          <Award className="w-10 h-10 mx-auto mb-3 opacity-90" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to get started?</h2>
          <p className="text-white/80 text-sm mb-6">Join {course.students} students already learning {course.title}.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors">
            Enrol for {course.price} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

    </div>
  )
}
