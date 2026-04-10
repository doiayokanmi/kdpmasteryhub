'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Clock, ChevronRight, Search, Tag, Star, ArrowRight, Filter } from 'lucide-react'
import Link from 'next/link'

const guides = [
  {
    id: 'complete-kdp-setup-guide',
    title: 'The Complete KDP Account Setup Guide (2025)',
    excerpt: 'A step-by-step walkthrough of creating and optimising your Amazon KDP account — from registration and tax forms to author page setup and payment configuration.',
    category: 'Getting Started',
    level: 'Beginner',
    readTime: '15 min',
    author: 'David Samuel',
    authorImg: 'https://i.pravatar.cc/60?img=12',
    featured: true,
    tags: ['KDP Account', 'Setup', 'Beginners'],
  },
  {
    id: 'manuscript-formatting-guide',
    title: 'How to Format a Manuscript for KDP Paperback and eBook',
    excerpt: 'Everything you need to produce a perfectly formatted book — margins, fonts, bleed settings, ToC, front matter, and how to avoid the most common rejection reasons.',
    category: 'Formatting',
    level: 'Beginner',
    readTime: '18 min',
    author: 'Sarah Johnson',
    authorImg: 'https://i.pravatar.cc/60?img=5',
    featured: true,
    tags: ['Formatting', 'Paperback', 'eBook'],
  },
  {
    id: 'kdp-keyword-research-guide',
    title: 'KDP Keyword Research: The Definitive Guide',
    excerpt: 'Learn how to find profitable keywords using Publisher Rocket, Amazon autocomplete, and competitor analysis. Includes a step-by-step framework you can apply in one afternoon.',
    category: 'Marketing',
    level: 'Intermediate',
    readTime: '22 min',
    author: 'Michael Chen',
    authorImg: 'https://i.pravatar.cc/60?img=13',
    featured: false,
    tags: ['Keywords', 'Research', 'Marketing'],
  },
  {
    id: 'book-description-guide',
    title: 'How to Write a Book Description That Converts',
    excerpt: 'Your book description is a sales letter. This guide breaks down the proven AIDA framework, keyword placement, HTML formatting, and examples from bestselling KDP books.',
    category: 'Marketing',
    level: 'Beginner',
    readTime: '12 min',
    author: 'Sarah Johnson',
    authorImg: 'https://i.pravatar.cc/60?img=5',
    featured: false,
    tags: ['Descriptions', 'Copywriting', 'Sales'],
  },
  {
    id: 'kdp-categories-guide',
    title: 'Choosing the Right KDP Categories to Rank and Get Discovered',
    excerpt: 'Most authors pick categories randomly. This guide shows you how to find low-competition categories where you can rank as a bestseller quickly — including the hidden category request trick.',
    category: 'Marketing',
    level: 'Intermediate',
    readTime: '10 min',
    author: 'David Samuel',
    authorImg: 'https://i.pravatar.cc/60?img=12',
    featured: false,
    tags: ['Categories', 'Ranking', 'Visibility'],
  },
  {
    id: 'amazon-ads-guide',
    title: "Amazon Ads for KDP: A Beginner's Complete Guide",
    excerpt: 'From setting up your first Sponsored Products campaign to understanding ACOS, bids, and match types — this guide removes the confusion and gives you a simple, profitable starting framework.',
    category: 'Advertising',
    level: 'Beginner',
    readTime: '20 min',
    author: 'Michael Chen',
    authorImg: 'https://i.pravatar.cc/60?img=13',
    featured: false,
    tags: ['Amazon Ads', 'PPC', 'Advertising'],
  },
  {
    id: 'cover-design-guide',
    title: 'KDP Cover Design: What Makes a Bestselling Cover',
    excerpt: 'Analyse what top-selling covers in your niche have in common, what tools to use for DIY design, when to hire a designer, and how to brief them effectively.',
    category: 'Formatting',
    level: 'Beginner',
    readTime: '14 min',
    author: 'Sarah Johnson',
    authorImg: 'https://i.pravatar.cc/60?img=5',
    featured: false,
    tags: ['Cover Design', 'Canva', 'Design'],
  },
  {
    id: 'royalty-pricing-guide',
    title: 'KDP Royalties Explained: Pricing Your Book for Maximum Earnings',
    excerpt: 'Understand the 35% vs 70% royalty thresholds, paperback pricing minimums, and how to price your book to maximise income in different markets including the UK, US, and Nigeria.',
    category: 'Getting Started',
    level: 'Beginner',
    readTime: '11 min',
    author: 'David Samuel',
    authorImg: 'https://i.pravatar.cc/60?img=12',
    featured: false,
    tags: ['Royalties', 'Pricing', 'Earnings'],
  },
]

const categories = ['All', 'Getting Started', 'Formatting', 'Marketing', 'Advertising']
const levels = ['All Levels', 'Beginner', 'Intermediate']

const levelColor: Record<string, string> = {
  Beginner:     'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced:     'bg-red-100 text-red-700',
}
const categoryColor: Record<string, string> = {
  'Getting Started': 'bg-blue-100 text-blue-700',
  Formatting:        'bg-purple-100 text-purple-700',
  Marketing:         'bg-green-100 text-green-700',
  Advertising:       'bg-orange-100 text-orange-700',
}

export default function GuidesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeLevel, setActiveLevel] = useState('All Levels')
  const [search, setSearch] = useState('')

  const featured = guides.filter((g) => g.featured)
  const filtered = guides.filter((g) => {
    const cat = activeCategory === 'All' || g.category === activeCategory
    const lvl = activeLevel === 'All Levels' || g.level === activeLevel
    const q = !search || g.title.toLowerCase().includes(search.toLowerCase()) || g.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
    return cat && lvl && q && !g.featured
  })

  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 pt-32 pb-20 px-4 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">Publishing Guides</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Learn to Publish Like a Pro</h1>
          <p className="text-orange-100 text-lg max-w-xl mx-auto">In-depth, free guides written by published KDP authors — practical, jargon-free, and updated for 2025.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-md mx-auto mt-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search guides…" value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none text-sm shadow-lg" />
        </motion.div>
      </section>

      {/* Featured guides */}
      {!search && activeCategory === 'All' && activeLevel === 'All Levels' && (
        <section className="bg-white py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold text-orange-500 mb-5 flex items-center gap-1.5"><Star className="w-4 h-4 fill-orange-400 text-orange-400" /> Start Here</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featured.map((g, i) => (
                <motion.div key={g.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                  className="group bg-orange-50 border-2 border-orange-100 rounded-2xl p-6 hover:border-orange-300 hover:shadow-md transition-all">
                  <div className="flex gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColor[g.category]}`}>{g.category}</span>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${levelColor[g.level]}`}>{g.level}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-600 transition-colors">{g.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{g.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={g.authorImg} alt={g.author} className="w-7 h-7 rounded-full" />
                      <span className="text-xs text-gray-500">{g.author} · <Clock className="w-3 h-3 inline" /> {g.readTime}</span>
                    </div>
                    <Link href={`/resources/guides/${g.id}`} className="flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700">
                      Read <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="bg-gray-50 border-y border-gray-100 px-4 py-4 sticky top-[68px] z-30">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 items-center">
          <Filter className="w-4 h-4 text-gray-400 mr-1" />
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${activeCategory === cat ? 'bg-orange-500 text-white shadow-sm' : 'bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-600'}`}>
              {cat}
            </button>
          ))}
          <div className="w-px h-5 bg-gray-200 mx-1 hidden sm:block" />
          {levels.map(lvl => (
            <button key={lvl} onClick={() => setActiveLevel(lvl)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${activeLevel === lvl ? 'bg-gray-700 text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-400'}`}>
              {lvl}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-400">{filtered.length + (search || activeCategory !== 'All' || activeLevel !== 'All Levels' ? 0 : featured.length)} guides</span>
        </div>
      </section>

      {/* Guide list */}
      <section className="bg-gray-50 py-12 px-4 pb-20">
        <div className="max-w-5xl mx-auto space-y-4">
          {filtered.map((g, i) => (
            <motion.div key={g.id} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-orange-500" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-1.5 mb-1.5">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColor[g.category]}`}>{g.category}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColor[g.level]}`}>{g.level}</span>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{g.title}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{g.excerpt}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {g.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1 text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md"><Tag className="w-2.5 h-2.5" />{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="text-right hidden sm:block">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 justify-end">
                    <img src={g.authorImg} alt={g.author} className="w-5 h-5 rounded-full" />
                    {g.author}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1 justify-end"><Clock className="w-3 h-3" />{g.readTime}</p>
                </div>
                <Link href={`/resources/guides/${g.id}`}
                  className="flex items-center gap-1 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-xl transition-colors flex-shrink-0">
                  Read <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-4 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Want to go deeper?</h2>
          <p className="text-orange-100 text-sm mb-6">Our courses turn these guides into structured, step-by-step learning paths with videos, templates, and personal coaching.</p>
          <Link href="/courses" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-7 py-4 rounded-xl hover:bg-orange-50 transition-colors">
            Explore Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

    </div>
  )
}
