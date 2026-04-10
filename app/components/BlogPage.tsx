'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Clock,
  Tag,
  Search,
  ArrowRight,
  TrendingUp,
  PenTool,
  Megaphone,
  Star,
  ChevronRight,
} from 'lucide-react'
import Link from 'next/link'

/* ─── DATA ─── */
const featured = {
  id: 'how-to-publish-first-book-kdp',
  title: 'How to Publish Your First Book on Amazon KDP: A Complete 2025 Guide',
  excerpt:
    'Everything a first-time author needs to know about Amazon Kindle Direct Publishing — from account setup and manuscript formatting to pricing, categories, and making your first sale.',
  category: 'Getting Started',
  author: 'David Samuel',
  authorImage: 'https://i.pravatar.cc/60?img=12',
  date: 'March 28, 2025',
  readTime: '12 min read',
  image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
  tags: ['KDP Setup', 'Beginners', 'Publishing'],
}

const posts = [
  {
    id: 'amazon-kdp-keyword-research',
    title: '7 Amazon KDP Keyword Research Strategies That Actually Work in 2025',
    excerpt: 'Keyword research is the single highest-leverage activity in KDP publishing. Here are the exact strategies our top-earning students use to find profitable, low-competition keywords.',
    category: 'Marketing',
    author: 'Michael Chen',
    authorImage: 'https://i.pravatar.cc/60?img=13',
    date: 'April 2, 2025',
    readTime: '9 min read',
    tags: ['Keywords', 'Marketing', 'Amazon Ads'],
  },
  {
    id: 'book-cover-design-tips',
    title: 'Book Cover Design: 10 Mistakes That Are Killing Your Sales',
    excerpt: 'Your cover is your most important marketing asset. Most self-published authors unknowingly make these 10 design errors — and they\'re costing them sales every single day.',
    category: 'Formatting & Design',
    author: 'Sarah Johnson',
    authorImage: 'https://i.pravatar.cc/60?img=5',
    date: 'March 15, 2025',
    readTime: '7 min read',
    tags: ['Cover Design', 'Sales', 'Formatting'],
  },
  {
    id: 'kdp-pricing-strategy',
    title: 'KDP Pricing Strategy: How to Price Your eBook and Paperback for Maximum Royalties',
    excerpt: 'Pricing is both an art and a science. This guide walks you through the exact pricing framework used by KDP authors earning $2,000+ per month.',
    category: 'Getting Started',
    author: 'David Samuel',
    authorImage: 'https://i.pravatar.cc/60?img=12',
    date: 'February 28, 2025',
    readTime: '8 min read',
    tags: ['Pricing', 'Royalties', 'Strategy'],
  },
  {
    id: 'amazon-ads-beginners',
    title: 'Amazon Ads for KDP Beginners: Your First Campaign in 30 Minutes',
    excerpt: 'Amazon Sponsored Products can seem overwhelming — but with the right setup you can launch your first profitable ad campaign in under 30 minutes. Step-by-step walkthrough inside.',
    category: 'Marketing',
    author: 'Michael Chen',
    authorImage: 'https://i.pravatar.cc/60?img=13',
    date: 'February 10, 2025',
    readTime: '11 min read',
    tags: ['Amazon Ads', 'Beginners', 'PPC'],
  },
  {
    id: 'low-content-books-guide',
    title: 'Low-Content Books: The Fastest Path to Your First KDP Income',
    excerpt: 'Journals, planners, notebooks, and activity books require minimal writing but can generate significant passive income. Here\'s exactly how to create and publish them.',
    category: 'Getting Started',
    author: 'Sarah Johnson',
    authorImage: 'https://i.pravatar.cc/60?img=5',
    date: 'January 22, 2025',
    readTime: '10 min read',
    tags: ['Low Content', 'Passive Income', 'Beginners'],
  },
  {
    id: 'kdp-select-vs-wide',
    title: 'KDP Select vs. Wide Distribution: Which Is Right for Your Book?',
    excerpt: 'Should you enroll in Kindle Unlimited or distribute to all platforms? We break down the pros, cons, and data — so you can make the right decision for your book.',
    category: 'Strategy',
    author: 'David Samuel',
    authorImage: 'https://i.pravatar.cc/60?img=12',
    date: 'January 8, 2025',
    readTime: '6 min read',
    tags: ['KDP Select', 'Distribution', 'Strategy'],
  },
]

const categories = ['All', 'Getting Started', 'Marketing', 'Formatting & Design', 'Strategy']

const categoryIcons: Record<string, React.ElementType> = {
  'Getting Started': BookOpen,
  'Marketing': Megaphone,
  'Formatting & Design': PenTool,
  'Strategy': TrendingUp,
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchCat && matchSearch
  })

  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 pt-32 pb-20 px-4 text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="inline-block bg-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              The KDP Mastery Blog
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Practical Publishing Insights</h1>
            <p className="text-orange-100 text-lg max-w-xl mx-auto">
              Free guides, strategies, and tutorials from our team of published authors — no fluff, just actionable advice.
            </p>
          </motion.div>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-lg mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Featured post ── */}
      {!searchQuery && activeCategory === 'All' && (
        <section className="bg-white py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold text-orange-500 mb-5 flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-orange-400 text-orange-400" /> Featured Article
            </p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="h-56 md:h-full overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col justify-center bg-white">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full w-fit mb-3">
                  <BookOpen className="w-3.5 h-3.5" /> {featured.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-3 mb-5">
                  <img src={featured.authorImage} alt={featured.author} className="w-8 h-8 rounded-full object-cover" />
                  <div className="text-xs text-gray-500">
                    <span className="font-medium text-gray-700">{featured.author}</span>
                    {' · '}{featured.date}{' · '}{featured.readTime}
                  </div>
                </div>
                <Link
                  href={`/blog/${featured.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Category filter ── */}
      <section className="bg-gray-50 border-t border-b border-gray-100 px-4 py-4 sticky top-[68px] z-30">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 items-center">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat]
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-600'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {cat}
              </button>
            )
          })}
          <span className="ml-auto text-sm text-gray-400">{filtered.length} articles</span>
        </div>
      </section>

      {/* ── Post grid ── */}
      <section className="bg-gray-50 py-14 px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <Search className="w-10 h-10 mx-auto mb-3 text-gray-300" />
              <p className="font-medium">No articles found for "{searchQuery}"</p>
              <p className="text-sm mt-1">Try a different search term or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => {
                const CatIcon = categoryIcons[post.category] || BookOpen
                return (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                  >
                    {/* Colour band */}
                    <div className="h-1.5 bg-gradient-to-r from-orange-400 to-orange-500" />

                    <div className="p-6 flex flex-col flex-1">
                      {/* Category */}
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full w-fit mb-3">
                        <CatIcon className="w-3 h-3" /> {post.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-orange-600 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-600 leading-relaxed flex-1">{post.excerpt}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="inline-flex items-center gap-1 text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">
                            <Tag className="w-2.5 h-2.5" />{tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta + CTA */}
                      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src={post.authorImage} alt={post.author} className="w-7 h-7 rounded-full object-cover" />
                          <div className="text-xs text-gray-500">
                            <span className="font-medium text-gray-700 block">{post.author}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {post.readTime}
                            </span>
                          </div>
                        </div>
                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                        >
                          Read <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-4 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Get new articles in your inbox</h2>
          <p className="text-orange-100 text-sm mb-6">
            Join 10,000+ authors who receive our weekly publishing tips — free, forever.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
            />
            <button
              type="submit"
              className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors text-sm flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>

    </div>
  )
}
