'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, ChevronDown, ChevronUp, Mail } from 'lucide-react'

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
    title: '1. Acceptance of Terms',
    content: (
      <p>
        By accessing or using the KDP Mastery Hub website and platform (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, do not use the Service. These Terms apply to all visitors, users, and others who access or use the Service.
      </p>
    ),
  },
  {
    title: '2. Description of Service',
    content: (
      <p>
        KDP Mastery Hub provides online educational courses, video tutorials, guides, coaching, and related resources focused on Amazon Kindle Direct Publishing (KDP). Access to premium content requires account registration and payment of applicable fees. We reserve the right to modify, suspend, or discontinue any part of the Service at any time with reasonable notice.
      </p>
    ),
  },
  {
    title: '3. Account Registration',
    content: (
      <>
        <p>To access paid content you must create an account. You agree to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Provide accurate, complete, and current registration information.</li>
          <li>Maintain the security of your password and notify us immediately of any unauthorised use.</li>
          <li>Accept responsibility for all activity that occurs under your account.</li>
          <li>Not share your account credentials or allow others to access your account.</li>
        </ul>
        <p className="mt-2">We reserve the right to suspend or terminate accounts that violate these Terms or are used fraudulently.</p>
      </>
    ),
  },
  {
    title: '4. Payments & Pricing',
    content: (
      <>
        <p>
          All prices are displayed in US Dollars (USD) unless otherwise stated. By purchasing a course or subscription you authorise us to charge the applicable fees to your chosen payment method.
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Prices are subject to change; existing purchases will not be retroactively affected.</li>
          <li>All sales are subject to our <a href="/refund" className="text-orange-600 hover:underline">Refund Policy</a>.</li>
          <li>You are responsible for any applicable taxes in your jurisdiction.</li>
        </ul>
      </>
    ),
  },
  {
    title: '5. Intellectual Property',
    content: (
      <>
        <p>
          All content on KDP Mastery Hub — including but not limited to course videos, written materials, graphics, logos, and software — is the exclusive property of KDP Mastery Hub or its licensors and is protected by copyright, trademark, and other intellectual property laws.
        </p>
        <p className="mt-2">
          You are granted a <strong>limited, non-exclusive, non-transferable licence</strong> to access and view purchased content for your own personal, non-commercial use. You may <strong>not</strong>:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Copy, reproduce, distribute, or publicly display any course content.</li>
          <li>Create derivative works based on our content.</li>
          <li>Use our content for commercial purposes without our express written consent.</li>
          <li>Share login credentials to allow others to access paid content.</li>
        </ul>
      </>
    ),
  },
  {
    title: '6. User Conduct',
    content: (
      <>
        <p>You agree not to use the Service to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Violate any applicable law or regulation.</li>
          <li>Engage in any fraudulent, deceptive, or misleading activity.</li>
          <li>Upload or transmit viruses, malware, or any other harmful code.</li>
          <li>Attempt to gain unauthorised access to any part of the platform.</li>
          <li>Harass, abuse, or harm other users or staff.</li>
          <li>Scrape, crawl, or use automated tools to extract data from the platform.</li>
        </ul>
      </>
    ),
  },
  {
    title: '7. Disclaimer of Warranties',
    content: (
      <p>
        The Service is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. KDP Mastery Hub does not warrant that the Service will be uninterrupted, error-free, or free of viruses. Results described in testimonials are not typical and individual outcomes will vary.
      </p>
    ),
  },
  {
    title: '8. Limitation of Liability',
    content: (
      <p>
        To the fullest extent permitted by law, KDP Mastery Hub and its owners, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including lost profits, data loss, or business interruption — arising from your use of (or inability to use) the Service, even if we have been advised of the possibility of such damages. Our total liability to you for any claim shall not exceed the amount you paid to us in the 12 months preceding the claim.
      </p>
    ),
  },
  {
    title: '9. Indemnification',
    content: (
      <p>
        You agree to indemnify and hold harmless KDP Mastery Hub and its affiliates from any claims, damages, losses, costs, or expenses (including reasonable legal fees) arising out of your use of the Service, your violation of these Terms, or your infringement of any third-party rights.
      </p>
    ),
  },
  {
    title: '10. Termination',
    content: (
      <p>
        We may suspend or terminate your access to the Service at any time, with or without notice, for conduct that we reasonably believe violates these Terms or is harmful to other users, us, or third parties. Upon termination, your right to use the Service ceases immediately. Provisions that by their nature should survive termination (including intellectual property, disclaimer of warranties, and limitation of liability) will survive.
      </p>
    ),
  },
  {
    title: '11. Governing Law',
    content: (
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict-of-law provisions. Any dispute arising under these Terms shall be submitted to the exclusive jurisdiction of the courts located in Oyo State, Nigeria.
      </p>
    ),
  },
  {
    title: '12. Changes to These Terms',
    content: (
      <p>
        We reserve the right to update these Terms at any time. We will notify you of significant changes by updating the "Last Updated" date and, where appropriate, by sending an email. Your continued use of the Service after any changes constitutes your acceptance of the revised Terms.
      </p>
    ),
  },
]

export default function TermsOfServicePage() {
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
            <FileText className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">Terms of Service</h1>
          <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed">
            Please read these Terms carefully before using KDP Mastery Hub. By using our platform you agree to be bound by them.
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
          <h2 className="text-xl font-bold mb-2">Have a question about our Terms?</h2>
          <p className="text-orange-100 text-sm mb-4">We're happy to clarify anything before you commit.</p>
          <a
            href="mailto:legal@kdpmasteryhub.com"
            className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors text-sm"
          >
            legal@kdpmasteryhub.com
          </a>
        </motion.div>

      </div>
    </section>
  )
}
