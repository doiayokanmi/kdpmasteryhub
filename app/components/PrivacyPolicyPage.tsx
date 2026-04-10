'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, ChevronDown, ChevronUp, Mail } from 'lucide-react'

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

const sections: Section[] = [
  {
    title: '1. Information We Collect',
    content: (
      <>
        <p>When you register or use KDP Mastery Hub, we may collect the following categories of personal information:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Account Information:</strong> your full name, email address, and password when you create an account.</li>
          <li><strong>Payment Information:</strong> billing details processed securely through our third-party payment processor. We do not store full card numbers on our servers.</li>
          <li><strong>Usage Data:</strong> pages visited, courses accessed, lesson completion, time spent, and interaction with platform features.</li>
          <li><strong>Device & Technical Data:</strong> IP address, browser type, operating system, and referral URLs collected automatically via cookies and server logs.</li>
          <li><strong>Communications:</strong> messages you send to our support team or through contact forms.</li>
        </ul>
      </>
    ),
  },
  {
    title: '2. How We Use Your Information',
    content: (
      <>
        <p>We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>To create and manage your account and deliver purchased courses.</li>
          <li>To process payments and send transaction confirmations.</li>
          <li>To track your learning progress and personalise your experience.</li>
          <li>To send important service updates, course announcements, and (where you have opted in) marketing emails.</li>
          <li>To improve our platform, diagnose technical issues, and analyse usage trends.</li>
          <li>To comply with applicable legal obligations and enforce our Terms of Service.</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Sharing Your Information',
    content: (
      <>
        <p>We do <strong>not</strong> sell your personal data. We may share it only in the following limited circumstances:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Service Providers:</strong> trusted third parties who help operate our platform (e.g., payment processors, email delivery services, analytics tools), bound by confidentiality agreements.</li>
          <li><strong>Legal Requirements:</strong> when required by law, court order, or to protect the rights, property, or safety of KDP Mastery Hub, our users, or the public.</li>
          <li><strong>Business Transfers:</strong> in the event of a merger, acquisition, or sale of assets, your data may be transferred. We will notify you in advance.</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Cookies & Tracking Technologies',
    content: (
      <p>
        We use cookies and similar tracking technologies to keep you logged in, remember your preferences, and understand how our platform is used. You can control cookie settings through your browser or our Cookie Settings banner. For full details, please read our{' '}
        <a href="/cookies" className="text-orange-600 hover:underline font-medium">Cookie Policy</a>.
      </p>
    ),
  },
  {
    title: '5. Data Retention',
    content: (
      <p>
        We retain your personal data for as long as your account is active or as needed to provide services. If you delete your account, we will delete or anonymise your personal data within <strong>30 days</strong>, except where we are required to retain it for legal or financial record-keeping obligations (typically up to 7 years for transaction records).
      </p>
    ),
  },
  {
    title: '6. Your Rights',
    content: (
      <>
        <p>Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Access:</strong> request a copy of the personal data we hold about you.</li>
          <li><strong>Correction:</strong> ask us to correct inaccurate or incomplete data.</li>
          <li><strong>Deletion:</strong> request that we delete your personal data ("right to be forgotten").</li>
          <li><strong>Portability:</strong> receive your data in a structured, machine-readable format.</li>
          <li><strong>Objection / Restriction:</strong> object to or restrict certain processing activities.</li>
          <li><strong>Withdraw Consent:</strong> unsubscribe from marketing emails at any time via the link in any email we send.</li>
        </ul>
        <p className="mt-3">To exercise any of these rights, email us at <a href="mailto:privacy@kdpmasteryhub.com" className="text-orange-600 hover:underline">privacy@kdpmasteryhub.com</a>.</p>
      </>
    ),
  },
  {
    title: '7. Security',
    content: (
      <p>
        We implement industry-standard security measures including HTTPS encryption, hashed passwords, and access controls to protect your personal data. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    title: '8. Third-Party Links',
    content: (
      <p>
        Our platform may contain links to third-party websites (e.g., Amazon KDP, social media). We are not responsible for the privacy practices of those sites and encourage you to review their policies independently.
      </p>
    ),
  },
  {
    title: '9. Children\'s Privacy',
    content: (
      <p>
        KDP Mastery Hub is not directed at children under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided us with their information, please contact us and we will promptly delete it.
      </p>
    ),
  },
  {
    title: '10. Changes to This Policy',
    content: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page and, where the changes are significant, notify you by email or a prominent notice on the platform. Your continued use of KDP Mastery Hub after any changes constitutes acceptance of the updated policy.
      </p>
    ),
  },
]

export default function PrivacyPolicyPage() {
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
            <Shield className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed">
            At KDP Mastery Hub, your privacy matters to us. This policy explains what personal data we collect, how we use it, and the choices you have.
          </p>
        </motion.div>

        {/* Accordion sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
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
          <h2 className="text-xl font-bold mb-2">Questions about your privacy?</h2>
          <p className="text-orange-100 text-sm mb-4">Our team is happy to help with any data-related questions.</p>
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
