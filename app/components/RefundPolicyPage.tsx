'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCcw, ChevronDown, ChevronUp, Mail, CheckCircle, XCircle, Clock } from 'lucide-react'

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
    title: '1. Our Refund Commitment',
    content: (
      <p>
        We stand behind the quality of every course and resource on KDP Mastery Hub. If you are not satisfied with a purchase, we offer a <strong>7-day money-back guarantee</strong> on all individual course purchases, subject to the eligibility criteria described below. Our goal is to make sure every student finds real value — if you don't, we'll make it right.
      </p>
    ),
  },
  {
    title: '2. Eligibility for a Refund',
    content: (
      <>
        <p>To be eligible for a refund, all of the following conditions must be met:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>The refund request is submitted <strong>within 7 days</strong> of the purchase date.</li>
          <li>You have completed <strong>no more than 30%</strong> of the course content.</li>
          <li>The request is made by the account holder who made the original purchase.</li>
          <li>You have not previously received a refund for the same course.</li>
        </ul>
        <p className="mt-2 text-orange-700 font-medium">
          Note: Courses purchased during promotional periods or at a discounted price of 50% or more off are non-refundable unless they are demonstrably defective.
        </p>
      </>
    ),
  },
  {
    title: '3. Non-Refundable Items',
    content: (
      <>
        <p>The following are not eligible for refunds:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Courses where more than 30% of the content has been accessed.</li>
          <li>Downloadable templates, guides, or other one-time-use digital resources once downloaded.</li>
          <li>One-on-one coaching sessions that have already been delivered.</li>
          <li>Subscription fees for any period already elapsed.</li>
          <li>Purchases made more than 7 days ago.</li>
          <li>Accounts that have been terminated for violations of our Terms of Service.</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. How to Request a Refund',
    content: (
      <>
        <p>To request a refund, please follow these steps:</p>
        <ol className="list-decimal pl-5 space-y-2 mt-2">
          <li>Email <a href="mailto:support@kdpmasteryhub.com" className="text-orange-600 hover:underline font-medium">support@kdpmasteryhub.com</a> with the subject line: <strong>"Refund Request — [Your Name]"</strong>.</li>
          <li>Include your registered email address, the course name, and the date of purchase.</li>
          <li>Briefly describe the reason for your refund request (this helps us improve).</li>
        </ol>
        <p className="mt-3">Our support team will review your request and respond within <strong>2 business days</strong>. Approved refunds are processed within <strong>5–10 business days</strong> depending on your payment method and bank.</p>
      </>
    ),
  },
  {
    title: '5. Subscription Cancellations',
    content: (
      <>
        <p>If you are on a subscription plan:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>You may cancel at any time from your account settings or by contacting support.</li>
          <li>Cancellation takes effect at the end of your current billing period — you will retain access until then.</li>
          <li>We do not provide partial refunds for unused days within a billing period.</li>
          <li>Annual subscriptions cancelled within the first 7 days of the initial purchase are eligible for a full refund.</li>
        </ul>
      </>
    ),
  },
  {
    title: '6. Chargebacks',
    content: (
      <p>
        We encourage you to contact us before initiating a chargeback with your bank. Unauthorised chargebacks may result in the immediate suspension of your account. If a chargeback is filed, we reserve the right to provide transaction evidence to your bank and dispute the claim.
      </p>
    ),
  },
  {
    title: '7. Changes to This Policy',
    content: (
      <p>
        We may update this Refund Policy from time to time. The revised policy will apply to purchases made after the updated date. Purchases made before any policy change will be governed by the policy that was in effect at the time of purchase.
      </p>
    ),
  },
]

export default function RefundPolicyPage() {
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
            <RefreshCcw className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">Refund Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed">
            We want you to be fully confident in every purchase. Here's exactly what you're entitled to if something doesn't work out.
          </p>
        </motion.div>

        {/* Quick summary cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
        >
          {[
            {
              icon: Clock,
              color: 'orange',
              title: '7-Day Window',
              desc: 'Request a refund within 7 days of purchase',
            },
            {
              icon: CheckCircle,
              color: 'green',
              title: 'Easy Process',
              desc: 'One email — we handle the rest within 2 business days',
            },
            {
              icon: XCircle,
              color: 'red',
              title: '30% Rule',
              desc: 'Eligible only if less than 30% of the course is completed',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl border shadow-sm p-5 flex flex-col items-center text-center gap-2"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  card.color === 'orange'
                    ? 'bg-orange-100'
                    : card.color === 'green'
                    ? 'bg-green-100'
                    : 'bg-red-100'
                }`}
              >
                <card.icon
                  className={`w-5 h-5 ${
                    card.color === 'orange'
                      ? 'text-orange-500'
                      : card.color === 'green'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                />
              </div>
              <p className="font-bold text-gray-900 text-sm">{card.title}</p>
              <p className="text-xs text-gray-500 leading-snug">{card.desc}</p>
            </div>
          ))}
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
          <h2 className="text-xl font-bold mb-2">Need to request a refund?</h2>
          <p className="text-orange-100 text-sm mb-4">Email us and we'll take care of it quickly.</p>
          <a
            href="mailto:support@kdpmasteryhub.com"
            className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors text-sm"
          >
            support@kdpmasteryhub.com
          </a>
        </motion.div>

      </div>
    </section>
  )
}
