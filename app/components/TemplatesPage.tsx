'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Download,
  FileText,
  BookOpen,
  BarChart2,
  PenTool,
  Star,
  Filter,
  CheckCircle,
  ArrowRight,
  Lock,
} from 'lucide-react'
import Link from 'next/link'

/* ─── DATA ─── */
const templates = [
  {
    id: 1,
    title: 'KDP Book Planning Worksheet',
    description: 'A comprehensive worksheet to plan your book from idea to launch — including niche research, competitor analysis, keyword slots, and a 30-day publishing checklist.',
    category: 'Planning',
    icon: BookOpen,
    format: 'PDF + XLSX',
    downloads: '3,200+',
    free: true,
    tags: ['Planning', 'Beginners', 'Checklist'],
  },
  {
    id: 2,
    title: 'eBook Manuscript Template (6×9)',
    description: 'A pre-formatted Microsoft Word template for a standard 6×9 KDP paperback. Includes styled headings, body text, front matter, back matter, and ToC placeholder.',
    category: 'Formatting',
    icon: FileText,
    format: 'DOCX',
    downloads: '5,800+',
    free: true,
    tags: ['Formatting', 'Word', 'Paperback'],
  },
  {
    id: 3,
    title: 'Book Launch Tracker Spreadsheet',
    description: 'Track every aspect of your book launch: pre-launch tasks, ad spend, daily sales, ranking history, review count, and ROI — all in one colour-coded spreadsheet.',
    category: 'Marketing',
    icon: BarChart2,
    format: 'XLSX',
    downloads: '2,100+',
    free: true,
    tags: ['Launch', 'Tracking', 'Marketing'],
  },
  {
    id: 4,
    title: 'KDP Keyword Research Workbook',
    description: 'A structured workbook for researching and organising your Amazon keywords. Includes a scoring matrix, competition tracker, and long-tail keyword generator framework.',
    category: 'Marketing',
    icon: BarChart2,
    format: 'XLSX',
    downloads: '4,400+',
    free: true,
    tags: ['Keywords', 'Research', 'SEO'],
  },
  {
    id: 5,
    title: 'Low-Content Book Interior Templates (5-Pack)',
    description: 'Five professionally designed interior templates for journals, planners, notebooks, and activity books — ready to upload directly to KDP.',
    category: 'Formatting',
    icon: PenTool,
    format: 'PDF',
    downloads: '6,700+',
    free: true,
    tags: ['Low Content', 'Journals', 'Planners'],
  },
  {
    id: 6,
    title: 'Amazon Ads Campaign Planner',
    description: 'Plan, track, and optimise your Sponsored Products campaigns. Includes bid calculation formulas, ACOS targets, budget allocation, and a weekly review template.',
    category: 'Marketing',
    icon: BarChart2,
    format: 'XLSX',
    downloads: '1,900+',
    free: false,
    tags: ['Amazon Ads', 'PPC', 'Advanced'],
  },
  {
    id: 7,
    title: 'Book Description Copywriting Templates',
    description: 'Proven book description frameworks for fiction and nonfiction — with fill-in-the-blank templates, power word lists, and before/after examples.',
    category: 'Marketing',
    icon: PenTool,
    format: 'PDF',
    downloads: '3,500+',
    free: false,
    tags: ['Copywriting', 'Descriptions', 'Sales'],
  },
  {
    id: 8,
    title: 'Series Bible Template',
    description: 'Keep your fiction or nonfiction series consistent with this comprehensive series bible — covering world-building, character profiles, timeline, and style guide.',
    category: 'Planning',
    icon: BookOpen,
    format: 'DOCX',
    downloads: '1,200+',
    free: false,
    tags: ['Series', 'Fiction', 'Organisation'],
  },
]

const categories = ['All', 'Planning', 'Formatting', 'Marketing']

const categoryColors: Record<string, string> = {
  Planning:   'bg-blue-100 text-blue-700',
  Formatting: 'bg-purple-100 text-purple-700',
  Marketing:  'bg-green-100 text-green-700',
}

export default function TemplatesPage() {
  const [active, setActive] = useState('All')
  const [filter, setFilter] = useState<'all' | 'free'>('all')

  const filtered = templates.filter((t) => {
    const catMatch = active === 'All' || t.category === active
    const freeMatch = filter === 'all' || t.free
    return catMatch && freeMatch
  })

  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 pt-32 pb-20 px-4 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">Free Resources</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Templates & Downloads</h1>
          <p className="text-orange-100 text-lg max-w-xl mx-auto">
            Ready-to-use templates built by our team of published KDP authors — so you spend less time setting up and more time publishing.
          </p>
          <div className="mt-8 flex justify-center gap-6 text-center">
            {[{ value: '8+', label: 'Templates' }, { value: '29K+', label: 'Downloads' }, { value: '100%', label: 'Free to start' }].map(s => (
              <div key={s.label}>
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="text-orange-100 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
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
          <div className="flex gap-2 ml-auto">
            {(['all', 'free'] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${filter === f ? 'bg-orange-500 text-white border-orange-500' : 'border-gray-200 text-gray-600 hover:border-orange-300'}`}>
                {f === 'all' ? 'All' : '🆓 Free only'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-gray-50 py-14 px-4 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t, i) => (
            <motion.div key={t.id} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center">
                  <t.icon className="w-5 h-5 text-orange-500" />
                </div>
                {t.free
                  ? <span className="text-xs font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-full flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Free</span>
                  : <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full flex items-center gap-1"><Lock className="w-3 h-3" /> Members</span>}
              </div>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full w-fit mb-2 ${categoryColors[t.category]}`}>{t.category}</span>
              <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{t.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {t.tags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-50 text-gray-400 px-2 py-0.5 rounded-md">{tag}</span>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 flex items-center gap-1"><Download className="w-3.5 h-3.5" /> {t.downloads} downloads · {t.format}</span>
                {t.free
                  ? <button className="flex items-center gap-1 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 px-3 py-1.5 rounded-lg transition-colors"><Download className="w-3.5 h-3.5" /> Download</button>
                  : <Link href="/signup" className="flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors">Unlock <ArrowRight className="w-3 h-3" /></Link>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-4 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mx-auto">
          <Star className="w-8 h-8 mx-auto mb-3 opacity-90" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Unlock all member templates</h2>
          <p className="text-orange-100 text-sm mb-6">Members get access to every template, plus courses, coaching, and community.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-7 py-4 rounded-xl hover:bg-orange-50 transition-colors">
            Join KDP Mastery Hub <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

    </div>
  )
}
