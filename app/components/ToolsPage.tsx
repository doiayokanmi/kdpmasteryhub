'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Star, Filter, CheckCircle, DollarSign, BookOpen, PenTool, Megaphone, BarChart2, Globe } from 'lucide-react'

const tools = [
  {
    id: 1,
    name: 'Publisher Rocket',
    tagline: 'The #1 KDP keyword and category research tool',
    description: 'Find profitable keywords, spy on competitors, discover low-competition categories, and research Amazon Ads keywords — all in one desktop app used by our top-earning students.',
    category: 'Research',
    price: 'One-time $97',
    rating: 5,
    recommended: true,
    affiliateNote: true,
    link: 'https://publisherrocket.com',
    pros: ['Best keyword data available', 'Category research built in', 'One-time payment (no subscription)', 'Regular updates included'],
    icon: '🚀',
  },
  {
    id: 2,
    name: 'Canva Pro',
    tagline: 'Drag-and-drop cover design for non-designers',
    description: 'The easiest way to design professional book covers. Includes KDP-compatible templates, exact dimension presets, and a huge library of fonts and stock images.',
    category: 'Design',
    price: 'Free / $13/mo',
    rating: 5,
    recommended: true,
    affiliateNote: false,
    link: 'https://canva.com',
    pros: ['Free tier available', 'KDP size templates built in', 'Excellent font library', 'Works in your browser — no install needed'],
    icon: '🎨',
  },
  {
    id: 3,
    name: 'Microsoft Word',
    tagline: 'The standard for KDP manuscript formatting',
    description: 'Word remains the most reliable tool for formatting KDP paperbacks and eBooks. KDP accepts Word files directly, and our formatting templates are built for Word.',
    category: 'Formatting',
    price: '$6.99/mo (365)',
    rating: 4,
    recommended: true,
    affiliateNote: false,
    link: 'https://microsoft.com/word',
    pros: ['Directly accepted by KDP', 'Works with our free templates', 'Styles system for consistent formatting', 'Widely available and familiar'],
    icon: '📄',
  },
  {
    id: 4,
    name: 'Vellum',
    tagline: 'Beautiful book formatting for Mac users',
    description: 'If you\'re on a Mac and want professionally formatted eBooks and print books with minimal effort, Vellum is the gold standard. Stunning output with a simple drag-and-drop interface.',
    category: 'Formatting',
    price: '$199 one-time',
    rating: 5,
    recommended: false,
    affiliateNote: false,
    link: 'https://vellum.pub',
    pros: ['Most beautiful output of any formatter', 'Handles eBook and print simultaneously', 'One-time purchase', 'Very easy to learn'],
    icon: '✨',
  },
  {
    id: 5,
    name: 'BookBolt',
    tagline: 'Low-content book creation and keyword tool',
    description: 'The all-in-one platform for low-content publishers. Design interiors, research keywords, spy on competitors, and find profitable niches — all in one place.',
    category: 'Research',
    price: '$9.99/mo',
    rating: 4,
    recommended: false,
    affiliateNote: false,
    link: 'https://bookbolt.io',
    pros: ['Interior designer included', 'Niche research built in', 'Great for journals and planners', 'Affordable subscription'],
    icon: '⚡',
  },
  {
    id: 6,
    name: 'K10K (KDP Mastery Tracker)',
    tagline: 'Track your KDP income and book portfolio',
    description: 'A simple spreadsheet-based tracker (included in your KDP Mastery Hub membership) for monitoring daily sales, royalties, ad spend, and overall portfolio performance.',
    category: 'Analytics',
    price: 'Free (member)',
    rating: 5,
    recommended: true,
    affiliateNote: false,
    link: '/resources/templates',
    pros: ['Built specifically for KDP authors', 'Free for all members', 'Daily sales and earnings tracking', 'Ad ACOS and ROI built in'],
    icon: '📊',
  },
  {
    id: 7,
    name: 'Hemingway Editor',
    tagline: 'Write clearer, more readable nonfiction',
    description: 'Paste your manuscript into Hemingway and it instantly highlights complex sentences, passive voice, adverbs, and readability issues. Especially useful for nonfiction KDP authors.',
    category: 'Writing',
    price: 'Free (web)',
    rating: 4,
    recommended: false,
    affiliateNote: false,
    link: 'https://hemingwayapp.com',
    pros: ['Free to use in browser', 'Readability score built in', 'Highlights passive voice and complexity', 'Simple and fast'],
    icon: '✍️',
  },
  {
    id: 8,
    name: 'ChatGPT / Claude',
    tagline: 'AI assistance for outlines, descriptions, and research',
    description: 'AI writing assistants have become a valuable part of the KDP author\'s toolkit. Use them for brainstorming book ideas, drafting book descriptions, outlining chapters, and generating keyword ideas.',
    category: 'Writing',
    price: 'Free / $20/mo',
    rating: 4,
    recommended: false,
    affiliateNote: false,
    link: 'https://chat.openai.com',
    pros: ['Excellent for book descriptions', 'Fast outline generation', 'Keyword brainstorming', 'Free tiers available for both'],
    icon: '🤖',
  },
]

const categories = ['All', 'Research', 'Design', 'Formatting', 'Analytics', 'Writing']

const categoryColors: Record<string, string> = {
  Research:   'bg-blue-100 text-blue-700',
  Design:     'bg-pink-100 text-pink-700',
  Formatting: 'bg-purple-100 text-purple-700',
  Analytics:  'bg-green-100 text-green-700',
  Writing:    'bg-yellow-100 text-yellow-700',
}

const categoryIcons: Record<string, React.ElementType> = {
  Research:   BarChart2,
  Design:     PenTool,
  Formatting: BookOpen,
  Analytics:  BarChart2,
  Writing:    PenTool,
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-3.5 h-3.5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
      ))}
    </div>
  )
}

export default function ToolsPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? tools : tools.filter(t => t.category === active)
  const recommended = filtered.filter(t => t.recommended)
  const rest = filtered.filter(t => !t.recommended)

  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 pt-32 pb-20 px-4 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">Tools & Software</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">The KDP Author's Toolkit</h1>
          <p className="text-orange-100 text-lg max-w-xl mx-auto">Every tool our instructors and top students actually use — with honest reviews, pricing, and a verdict on who each one is right for.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-3xl mx-auto mt-10 bg-white/10 backdrop-blur rounded-2xl p-5 text-sm text-orange-100 leading-relaxed">
          <Globe className="w-4 h-4 inline mr-1.5 opacity-80" />
          <strong className="text-white">Transparency note:</strong> Some links on this page may be affiliate links. We only recommend tools we genuinely use and trust — and we always label affiliate links clearly.
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
        </div>
      </section>

      <section className="bg-gray-50 py-14 px-4 pb-20">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Recommended */}
          {recommended.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" /> Team Recommendations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {recommended.map((tool, i) => (
                  <motion.div key={tool.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                    className="bg-white rounded-2xl shadow-sm border-2 border-orange-200 p-6 flex flex-col hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{tool.icon}</span>
                        <div>
                          <h3 className="font-bold text-gray-900">{tool.name}</h3>
                          <StarRow rating={tool.rating} />
                        </div>
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[tool.category]}`}>{tool.category}</span>
                    </div>
                    <p className="text-sm text-orange-600 font-semibold mb-1">{tool.tagline}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3 flex-1">{tool.description}</p>
                    <ul className="space-y-1 mb-4">
                      {tool.pros.map(p => (
                        <li key={p} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />{p}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-sm font-bold text-gray-900">
                        <DollarSign className="w-4 h-4 text-green-500" />{tool.price}
                      </div>
                      <a href={tool.link} target={tool.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-xl transition-colors">
                        Visit {tool.link.startsWith('http') && <ExternalLink className="w-3.5 h-3.5" />}
                      </a>
                    </div>
                    {tool.affiliateNote && <p className="text-xs text-gray-400 mt-2">* Affiliate link</p>}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Other tools */}
          {rest.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-5">Also Worth Considering</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {rest.map((tool, i) => (
                  <motion.div key={tool.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{tool.icon}</span>
                        <div>
                          <h3 className="font-bold text-gray-900">{tool.name}</h3>
                          <StarRow rating={tool.rating} />
                        </div>
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[tool.category]}`}>{tool.category}</span>
                    </div>
                    <p className="text-sm text-gray-500 italic mb-1">{tool.tagline}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3 flex-1">{tool.description}</p>
                    <ul className="space-y-1 mb-4">
                      {tool.pros.slice(0, 3).map(p => (
                        <li key={p} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />{p}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-sm font-bold text-gray-900">
                        <DollarSign className="w-4 h-4 text-green-500" />{tool.price}
                      </div>
                      <a href={tool.link} target={tool.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-semibold text-orange-600 border border-orange-200 hover:bg-orange-50 px-4 py-2 rounded-xl transition-colors">
                        Visit {tool.link.startsWith('http') && <ExternalLink className="w-3.5 h-3.5" />}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-4 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mx-auto">
          <Megaphone className="w-8 h-8 mx-auto mb-3 opacity-90" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Learn how to use every one of these tools</h2>
          <p className="text-orange-100 text-sm mb-6">Our courses include dedicated tutorials for Publisher Rocket, Canva, Amazon Ads, and more — in context, not just theory.</p>
          <a href="/courses" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-7 py-4 rounded-xl hover:bg-orange-50 transition-colors">
            Explore Courses <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

    </div>
  )
}
