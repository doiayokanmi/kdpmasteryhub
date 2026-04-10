'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, ArrowRight, BookOpen, DollarSign, Users, Settings } from 'lucide-react'
import Link from 'next/link'

interface FAQ {
  q: string
  a: React.ReactNode
  category: string
}

const faqs: FAQ[] = [
  // Getting Started
  {
    category: 'Getting Started',
    q: 'What is Amazon KDP and who is it for?',
    a: 'Amazon Kindle Direct Publishing (KDP) is Amazon\'s self-publishing platform that lets anyone publish eBooks and paperback books and sell them directly on Amazon. It\'s for anyone who wants to publish — whether you\'re a fiction author, nonfiction expert, or someone creating low-content books like journals and planners. You don\'t need a literary agent or publisher.',
  },
  {
    category: 'Getting Started',
    q: 'Do I need writing experience to publish on KDP?',
    a: 'No. Many of our most successful students had zero writing background before joining. KDP Mastery Hub teaches you how to identify profitable niches, structure your content (or outsource writing legally), format your book, and market it effectively — regardless of your starting point.',
  },
  {
    category: 'Getting Started',
    q: 'How much does it cost to publish a book on KDP?',
    a: 'Publishing a book on KDP is completely free. Amazon takes a percentage of each sale as their fee (which is how they make money), but there are no upfront publishing fees. Your only costs are optional ones — like cover design software or advertising — which you can start without.',
  },
  {
    category: 'Getting Started',
    q: 'How long does it take to publish my first book?',
    a: 'Most students in our beginner programme publish their first book within 2–4 weeks of starting. After your manuscript and cover are ready, KDP typically approves and publishes your book within 24–72 hours.',
  },
  // Courses & Platform
  {
    category: 'Courses & Platform',
    q: 'What is included in KDP Mastery Hub membership?',
    a: (
      <div className="space-y-2">
        <p>A KDP Mastery Hub membership includes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Full access to all current and future courses</li>
          <li>Downloadable templates and workbooks</li>
          <li>Access to the private student community</li>
          <li>Weekly live Q&amp;A sessions with instructors</li>
          <li>Video tutorials library</li>
          <li>Email support from our student success team</li>
        </ul>
        <p>Coaching packages are available separately for one-on-one support.</p>
      </div>
    ),
  },
  {
    category: 'Courses & Platform',
    q: 'Are the courses self-paced or do they have a schedule?',
    a: 'All courses are fully self-paced — you can work through them at any time, on any device. There are no deadlines or expiry dates. Live Q&A sessions run weekly, but recordings are available if you can\'t attend live.',
  },
  {
    category: 'Courses & Platform',
    q: 'Can I access the courses on my phone or tablet?',
    a: 'Yes. KDP Mastery Hub is fully mobile-responsive. You can watch video tutorials, read guides, and download templates from any device with a web browser.',
  },
  {
    category: 'Courses & Platform',
    q: 'How often is the course content updated?',
    a: 'We review and update our courses every quarter to reflect changes to KDP\'s platform, Amazon\'s algorithm, and advertising options. Major updates (like new features on KDP) are usually covered within 2–4 weeks. All enrolled members receive updates automatically at no extra cost.',
  },
  // Earnings & Results
  {
    category: 'Earnings & Results',
    q: 'How much can I realistically earn from KDP?',
    a: 'Earnings vary widely depending on your niche, how many books you publish, and how much you invest in marketing. Our community average for students who publish consistently is $500–$3,000 per month within their first year. Some students earn significantly more. We always encourage realistic expectations — KDP is not a "get rich quick" scheme, but it is a legitimate and scalable income stream.',
  },
  {
    category: 'Earnings & Results',
    q: 'How does KDP pay, and how often?',
    a: 'KDP pays royalties monthly, approximately 60 days after the end of the month in which sales occurred. Payment is via direct bank deposit or cheque, depending on your country. Students in Nigeria, Ghana, and other countries where direct deposit isn\'t available can receive payment via Payoneer or a US bank account.',
  },
  {
    category: 'Earnings & Results',
    q: 'Can I publish books from Nigeria or other African countries?',
    a: 'Absolutely. KDP is available worldwide and many of our top-earning students are based in Nigeria, Ghana, Kenya, and other African countries. The platform works the same regardless of where you are — you will need a payment method to receive royalties (Payoneer is the most common option for African authors).',
  },
  // Refunds & Support
  {
    category: 'Refunds & Support',
    q: 'What is your refund policy?',
    a: (
      <p>
        We offer a <strong>7-day money-back guarantee</strong> on all course purchases, provided you have completed less than 30% of the course content. To request a refund, email{' '}
        <a href="mailto:support@kdpmasteryhub.com" className="text-orange-600 hover:underline font-medium">support@kdpmasteryhub.com</a>.
        {' '}Full details are available on our{' '}
        <Link href="/refund" className="text-orange-600 hover:underline font-medium">Refund Policy page</Link>.
      </p>
    ),
  },
  {
    category: 'Refunds & Support',
    q: 'How do I contact support?',
    a: (
      <p>
        You can reach our support team by emailing{' '}
        <a href="mailto:support@kdpmasteryhub.com" className="text-orange-600 hover:underline font-medium">support@kdpmasteryhub.com</a>
        {' '}or using the contact form on our{' '}
        <Link href="/contact" className="text-orange-600 hover:underline font-medium">Contact page</Link>.
        {' '}We respond within 1–2 business days (Monday to Friday, 9am–6pm WAT).
      </p>
    ),
  },
  {
    category: 'Refunds & Support',
    q: 'I already have a KDP account. Is KDP Mastery Hub still relevant for me?',
    a: 'Yes — in fact, many of our highest-earning students joined after already publishing several books. If you have an account but aren\'t seeing the sales you hoped for, our Marketing Strategies and Amazon Ads courses typically produce the fastest results for existing publishers.',
  },
]

const categories = ['All', 'Getting Started', 'Courses & Platform', 'Earnings & Results', 'Refunds & Support']

const categoryIcons: Record<string, React.ElementType> = {
  'Getting Started':    BookOpen,
  'Courses & Platform': Settings,
  'Earnings & Results': DollarSign,
  'Refunds & Support':  Users,
}

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="border border-gray-100 rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between px-6 py-5 text-left hover:bg-orange-50 transition-colors gap-3"
      >
        <span className="font-semibold text-gray-900 leading-snug">{faq.q}</span>
        {open
          ? <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
          : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
        >
          {faq.a}
        </motion.div>
      )}
    </motion.div>
  )
}

export default function FAQPage() {
  const [active, setActive] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = faqs.filter(f => {
    const cat = active === 'All' || f.category === active
    const q = !search || f.q.toLowerCase().includes(search.toLowerCase())
    return cat && q
  })

  const grouped = categories.slice(1).map(cat => ({
    name: cat,
    items: filtered.filter(f => f.category === cat),
  })).filter(g => g.items.length > 0)

  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 pt-32 pb-20 px-4 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-5">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-orange-100 text-lg max-w-xl mx-auto">Answers to the questions we hear most from aspiring KDP authors — honest, practical, and no marketing fluff.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-md mx-auto mt-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search questions…" value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none text-sm shadow-lg" />
        </motion.div>
      </section>

      {/* Category tabs */}
      <section className="bg-white border-b px-4 py-4 sticky top-[68px] z-30">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2 items-center">
          {categories.map(cat => {
            const Icon = categoryIcons[cat]
            return (
              <button key={cat} onClick={() => setActive(cat)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${active === cat ? 'bg-orange-500 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600'}`}>
                {Icon && <Icon className="w-3.5 h-3.5" />}{cat}
              </button>
            )
          })}
          <span className="ml-auto text-sm text-gray-400">{filtered.length} questions</span>
        </div>
      </section>

      {/* FAQ content */}
      <section className="bg-gray-50 py-14 px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {filtered.length === 0
            ? <div className="text-center py-16 text-gray-400"><HelpCircle className="w-10 h-10 mx-auto mb-3 opacity-30" /><p className="font-medium">No questions match your search</p></div>
            : active !== 'All'
              ? <div className="space-y-3">{filtered.map((f, i) => <FAQItem key={f.q} faq={f} index={i} />)}</div>
              : grouped.map(group => {
                  const Icon = categoryIcons[group.name] || HelpCircle
                  return (
                    <div key={group.name}>
                      <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-5">
                        <Icon className="w-5 h-5 text-orange-500" />{group.name}
                      </h2>
                      <div className="space-y-3">
                        {group.items.map((f, i) => <FAQItem key={f.q} faq={f} index={i} />)}
                      </div>
                    </div>
                  )
                })}
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-white py-16 px-4">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-xl mx-auto bg-orange-50 border-2 border-orange-100 rounded-3xl p-8 text-center">
          <MessageSquare className="w-10 h-10 text-orange-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Still have a question?</h2>
          <p className="text-gray-600 text-sm mb-6">Our support team typically responds within 1 business day. We'd love to help.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/signup" className="inline-flex items-center justify-center gap-2 border-2 border-orange-400 text-orange-600 font-semibold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">
              Join & Ask the Community
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
