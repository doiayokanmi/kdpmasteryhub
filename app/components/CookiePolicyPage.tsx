'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Cookie, ChevronDown, ChevronUp, Mail, ToggleLeft, ToggleRight } from 'lucide-react'

const LAST_UPDATED = 'April 10, 2026'

interface Section {
  title: string
  content: React.ReactNode
}

function Accordion({ title, content }: Section) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-orange-50 transition-colors text-left"
      >
        <span className="font-semibold text-gray-900">{title}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="px-6 pb-6 bg-white text-gray-600 text-sm leading-relaxed space-y-3"
        >
          {content}
        </motion.div>
      )}
    </div>
  )
}

const cookieTypes = [
  {
    name: 'Strictly Necessary',
    required: true,
    description:
      'Essential for the platform to function. These enable core features like account login, session management, and security. They cannot be disabled.',
    examples: ['Session token', 'CSRF protection', 'Authentication cookies'],
    color: 'green',
  },
  {
    name: 'Analytics & Performance',
    required: false,
    description:
      'Help us understand how visitors interact with the platform — which pages are visited most, how long sessions last, and where users drop off — so we can improve the experience.',
    examples: ['Google Analytics', 'Page view tracking', 'Error logging'],
    color: 'blue',
  },
  {
    name: 'Functional / Preference',
    required: false,
    description:
      'Remember your preferences and settings, such as language choice, video playback quality, and notification preferences, to personalise your experience.',
    examples: ['Language preference', 'Video quality', 'Dark mode setting'],
    color: 'purple',
  },
  {
    name: 'Marketing & Advertising',
    required: false,
    description:
      'Used to deliver relevant advertisements and track the effectiveness of marketing campaigns. These may be set by trusted third-party advertising partners.',
    examples: ['Facebook Pixel', 'Google Ads remarketing', 'Conversion tracking'],
    color: 'orange',
  },
]

const sections: Section[] = [
  {
    title: '1. What Are Cookies?',
    content: (
      <p>
        Cookies are small text files placed on your device (computer, tablet, or phone) when you visit a website. They are widely used to make websites work efficiently, remember your preferences, and provide analytical information to website owners. Cookies themselves cannot run programs or deliver viruses to your computer.
      </p>
    ),
  },
  {
    title: '2. How We Use Cookies',
    content: (
      <>
        <p>KDP Mastery Hub uses cookies to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Keep you signed in during a browsing session.</li>
          <li>Remember your preferences and personalise your dashboard.</li>
          <li>Track your learning progress across devices.</li>
          <li>Analyse platform performance and identify areas for improvement.</li>
          <li>Measure the effectiveness of our marketing campaigns.</li>
          <li>Protect the platform against fraud and abuse.</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Types of Cookies We Use',
    content: (
      <p>
        We use four categories of cookies, described in the summary table above: Strictly Necessary, Analytics & Performance, Functional/Preference, and Marketing & Advertising. Only Strictly Necessary cookies are set without your consent; all others require your opt-in.
      </p>
    ),
  },
  {
    title: '4. Third-Party Cookies',
    content: (
      <>
        <p>
          Some cookies on our platform are set by trusted third-party services we use to operate and improve the Service. These may include:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Google Analytics</strong> — anonymous usage statistics.</li>
          <li><strong>Stripe / Paystack</strong> — secure payment processing.</li>
          <li><strong>Intercom / Crisp</strong> — live chat and customer support.</li>
          <li><strong>Facebook / Meta Pixel</strong> — advertising and remarketing (optional, requires consent).</li>
          <li><strong>YouTube</strong> — embedded video content.</li>
        </ul>
        <p className="mt-2">
          We do not control how third-party services set or use their cookies. We encourage you to review their individual privacy and cookie policies.
        </p>
      </>
    ),
  },
  {
    title: '5. How Long Do Cookies Last?',
    content: (
      <>
        <p>Cookies can be either session-based or persistent:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Session cookies</strong> are temporary and deleted when you close your browser.</li>
          <li><strong>Persistent cookies</strong> remain on your device for a set duration — typically between 30 days and 2 years — or until you delete them manually.</li>
        </ul>
      </>
    ),
  },
  {
    title: '6. Managing Your Cookie Preferences',
    content: (
      <>
        <p>You have several options for managing cookies:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>
            <strong>Cookie banner:</strong> when you first visit KDP Mastery Hub, a banner allows you to accept, reject, or customise non-essential cookies.
          </li>
          <li>
            <strong>Browser settings:</strong> you can configure your browser to block or delete cookies. Note that disabling essential cookies will affect platform functionality (e.g., you may not be able to stay logged in).
          </li>
          <li>
            <strong>Opt-out tools:</strong> for analytics, you can install the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Google Analytics Opt-out Browser Add-on
            </a>.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '7. Changes to This Cookie Policy',
    content: (
      <p>
        We may update this Cookie Policy as we add new features or in response to changes in law. Any updates will be reflected in the "Last Updated" date above. We encourage you to review this page periodically. Continued use of the platform after any changes constitutes your acceptance of the updated policy.
      </p>
    ),
  },
]

export default function CookiePolicyPage() {
  const [preferences, setPreferences] = useState<Record<string, boolean>>({
    'Analytics & Performance': true,
    'Functional / Preference': true,
    'Marketing & Advertising': false,
  })

  const colorMap: Record<string, string> = {
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
    purple: 'bg-purple-100 text-purple-700',
    orange: 'bg-orange-100 text-orange-700',
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 mb-5">
            <Cookie className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">Cookie Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed">
            We use cookies to make KDP Mastery Hub work, improve your experience, and understand how our platform is used. Here's what you need to know.
          </p>
        </motion.div>

        {/* Cookie type summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-2xl shadow-sm border p-6 mb-8"
        >
          <h2 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
            <ToggleLeft className="w-5 h-5 text-orange-500" />
            Cookie Preferences
          </h2>
          <div className="space-y-5">
            {cookieTypes.map((ct) => (
              <div key={ct.name} className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${colorMap[ct.color]}`}>
                      {ct.name}
                    </span>
                    {ct.required && (
                      <span className="text-xs text-gray-400 font-medium">Always on</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{ct.description}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Examples: {ct.examples.join(', ')}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  {ct.required ? (
                    <ToggleRight className="w-8 h-8 text-green-500" />
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        setPreferences((p) => ({ ...p, [ct.name]: !p[ct.name] }))
                      }
                      className="transition-colors"
                      aria-label={`Toggle ${ct.name}`}
                    >
                      {preferences[ct.name] ? (
                        <ToggleRight className="w-8 h-8 text-orange-500" />
                      ) : (
                        <ToggleLeft className="w-8 h-8 text-gray-300" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap gap-3">
            <button className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all">
              Save Preferences
            </button>
            <button
              onClick={() =>
                setPreferences({
                  'Analytics & Performance': true,
                  'Functional / Preference': true,
                  'Marketing & Advertising': true,
                })
              }
              className="px-5 py-2.5 border border-gray-200 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={() =>
                setPreferences({
                  'Analytics & Performance': false,
                  'Functional / Preference': false,
                  'Marketing & Advertising': false,
                })
              }
              className="px-5 py-2.5 border border-gray-200 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              Reject Non-Essential
            </button>
          </div>
        </motion.div>

        {/* Accordion sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="space-y-3"
        >
          {sections.map((s) => (
            <Accordion key={s.title} {...s} />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-orange-500 rounded-2xl p-8 text-white text-center"
        >
          <Mail className="w-8 h-8 mx-auto mb-3 opacity-90" />
          <h2 className="text-xl font-bold mb-2">Questions about cookies?</h2>
          <p className="text-orange-100 text-sm mb-4">We're happy to explain how we use your data.</p>
          <a
            href="mailto:privacy@kdpmasteryhub.com"
            className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors text-sm"
          >
            privacy@kdpmasteryhub.com
          </a>
        </motion.div>

      </div>
    </section>
  )
}
