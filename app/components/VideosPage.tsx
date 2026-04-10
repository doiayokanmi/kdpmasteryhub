'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Clock, Lock, Filter, Search, Star, BookOpen, Megaphone, PenTool, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const videos = [
  {
    id: 'kdp-account-walkthrough',
    title: 'KDP Account Setup: Complete Walkthrough',
    description: 'Watch as we set up a brand new KDP account from scratch — step by step, including tax information, payment settings, and author page.',
    category: 'Getting Started',
    duration: '18:42',
    level: 'Beginner',
    free: true,
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
    views: '12,400',
  },
  {
    id: 'paperback-formatting-word',
    title: 'Formatting a Paperback in Microsoft Word (Full Tutorial)',
    description: 'A complete screen-share tutorial showing how to format a 6×9 paperback manuscript in Word — margins, headers, ToC, and exporting a print-ready PDF.',
    category: 'Formatting',
    duration: '24:15',
    level: 'Beginner',
    free: true,
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
    views: '9,800',
  },
  {
    id: 'keyword-research-tutorial',
    title: 'KDP Keyword Research Using Publisher Rocket',
    description: 'Live keyword research session using Publisher Rocket — how to find profitable, low-competition keywords and where to place them in your listing.',
    category: 'Marketing',
    duration: '21:30',
    level: 'Beginner',
    free: true,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    views: '15,600',
  },
  {
    id: 'canva-cover-design',
    title: 'Designing a KDP Cover in Canva (Step by Step)',
    description: 'Design a professional eBook and paperback cover in Canva using KDP\'s exact dimensions — including spine width calculation and bleed setup.',
    category: 'Formatting',
    duration: '28:05',
    level: 'Beginner',
    free: false,
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    views: '8,200',
  },
  {
    id: 'amazon-ads-setup',
    title: 'Setting Up Your First Amazon Ads Campaign',
    description: 'A live walkthrough of creating a Sponsored Products campaign — auto vs manual targeting, bid strategy, and how to read your first week of data.',
    category: 'Marketing',
    duration: '32:18',
    level: 'Intermediate',
    free: false,
    thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    views: '7,100',
  },
  {
    id: 'low-content-book-creation',
    title: 'Create and Publish a Low-Content Book in One Day',
    description: 'Full end-to-end tutorial for creating a lined journal — interior design, cover, KDP upload, pricing, and going live — all in under an hour of real work.',
    category: 'Getting Started',
    duration: '45:00',
    level: 'Beginner',
    free: false,
    thumbnail: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600&q=80',
    views: '11,300',
  },
  {
    id: 'book-description-tutorial',
    title: 'Writing a High-Converting Book Description',
    description: 'Watch us write a complete book description live using the AIDA framework — with keyword placement, HTML formatting, and A/B testing tips.',
    category: 'Marketing',
    duration: '16:50',
    level: 'Beginner',
    free: false,
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
    views: '6,400',
  },
  {
    id: 'scaling-to-10k',
    title: 'Scaling Your KDP Business to $10K/Month',
    description: 'Advanced session covering series strategy, reinvestment frameworks, outsourcing formatting and covers, and the systems needed to scale without burning out.',
    category: 'Strategy',
    duration: '52:10',
    level: 'Advanced',
    free: false,
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    views: '5,900',
  },
]

const categories = ['All', 'Getting Started', 'Formatting', 'Marketing', 'Strategy']

const categoryIcons: Record<string, React.ElementType> = {
  'Getting Started': BookOpen,
  Formatting: PenTool,
  Marketing: Megaphone,
  Strategy: TrendingUp,
}

const levelColor: Record<string, string> = {
  Beginner:     'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced:     'bg-red-100 text-red-700',
}

function VideoCard({ video, index }: { video: typeof videos[0]; index: number }) {
  const CatIcon = categoryIcons[video.category] || BookOpen
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-44">
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          {video.free
            ? <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center"><Play className="w-7 h-7 text-orange-500 fill-orange-500 ml-1" /></div>
            : <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center"><Lock className="w-6 h-6 text-gray-500" /></div>}
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
          <Clock className="w-3 h-3" />{video.duration}
        </div>
        {video.free && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
            <CheckCircle className="w-3 h-3" /> Free
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-2">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full">
            <CatIcon className="w-3 h-3" />{video.category}
          </span>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${levelColor[video.level]}`}>{video.level}</span>
        </div>
        <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-orange-600 transition-colors">{video.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-1">{video.description}</p>
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-400">{video.views} views</span>
          {video.free
            ? <button className="flex items-center gap-1 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 px-3 py-1.5 rounded-xl transition-colors">
                <Play className="w-3.5 h-3.5 fill-white" /> Watch Free
              </button>
            : <Link href="/signup" className="flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors">
                Unlock <ArrowRight className="w-3.5 h-3.5" />
              </Link>}
        </div>
      </div>
    </motion.div>
  )
}

export default function VideosPage() {
  const [active, setActive] = useState('All')
  const [search, setSearch] = useState('')
  const [freeOnly, setFreeOnly] = useState(false)

  const filtered = videos.filter(v => {
    const cat = active === 'All' || v.category === active
    const q = !search || v.title.toLowerCase().includes(search.toLowerCase())
    const fr = !freeOnly || v.free
    return cat && q && fr
  })

  const freeCount = videos.filter(v => v.free).length

  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 pt-32 pb-20 px-4 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">Video Tutorials</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Learn by Watching</h1>
          <p className="text-orange-100 text-lg max-w-xl mx-auto">Screen-share walkthroughs and step-by-step tutorials from published KDP authors — {freeCount} videos are completely free.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-md mx-auto mt-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search tutorials…" value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none text-sm shadow-lg" />
        </motion.div>
      </section>

      {/* Filter bar */}
      <section className="bg-white border-b px-4 py-4 sticky top-[68px] z-30">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 items-center">
          <Filter className="w-4 h-4 text-gray-400 mr-1" />
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${active === cat ? 'bg-orange-500 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600'}`}>
              {cat}
            </button>
          ))}
          <button onClick={() => setFreeOnly(!freeOnly)}
            className={`ml-auto px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${freeOnly ? 'bg-green-500 text-white border-green-500' : 'border-gray-200 text-gray-600 hover:border-green-400'}`}>
            🆓 Free only
          </button>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-gray-50 py-14 px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0
            ? <div className="text-center py-16 text-gray-400"><Play className="w-10 h-10 mx-auto mb-3 opacity-30" /><p className="font-medium">No videos found</p></div>
            : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{filtered.map((v, i) => <VideoCard key={v.id} video={v} index={i} />)}</div>}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-4 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mx-auto">
          <Star className="w-8 h-8 mx-auto mb-3 opacity-90" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Unlock all {videos.length} tutorials</h2>
          <p className="text-orange-100 text-sm mb-6">Members get full access to every video, plus structured courses, templates, and live coaching sessions.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-7 py-4 rounded-xl hover:bg-orange-50 transition-colors">
            Join Free <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

    </div>
  )
}
