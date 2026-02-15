'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  User,
  AlertCircle,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react'

/* ---------- CONTACT INFO ---------- */
const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'support@kdpmasteryhub.com',
    link: 'mailto:support@kdpmasteryhub.com',
    description: 'Send us an email anytime!'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+1 (234) 567-890',
    link: 'tel:+1234567890',
    description: 'Mon-Fri from 9am to 6pm'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: '123 Publishing Street, Lagos, Nigeria',
    link: '#',
    description: 'Come say hello at our office'
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: 'Mon - Fri: 9:00 AM - 6:00 PM',
    link: '#',
    description: 'We\'re here to help'
  }
]

/* ---------- SOCIAL LINKS ---------- */
const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-500' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
  { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' }
]

/* ---------- FAQ ITEMS ---------- */
const faqs = [
  {
    question: 'How quickly will I get a response?',
    answer: 'We typically respond to all inquiries within 24 hours during business days.'
  },
  {
    question: 'Do you offer phone support?',
    answer: 'Yes! Our phone lines are open Monday-Friday, 9am-6pm. Premium members get priority phone support.'
  },
  {
    question: 'Can I schedule a consultation?',
    answer: 'Absolutely! Use the contact form to request a consultation and we\'ll arrange a convenient time.'
  },
  {
    question: 'What information should I include in my message?',
    answer: 'Please include your name, email, and a detailed description of your question or issue so we can help you better.'
  }
]

/* ---------- CONTACT PAGE ---------- */
export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setStatus('idle')
    setErrorMessage('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error')
      setErrorMessage('Please fill in all fields')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              We'd Love to Hear From You
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Have questions about our courses? Need help with your publishing journey? 
              Our team is here to support you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 -mt-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <info.icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-orange-600 font-medium mb-1">{info.details}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      disabled={status === 'loading'}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      disabled={status === 'loading'}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50"
                    />
                  </div>
                </div>

                {/* Subject Select */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="courses">Course Information</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50 resize-none"
                  />
                </div>

                {/* Error Message */}
                {status === 'error' && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-sm text-red-800">{errorMessage}</p>
                  </motion.div>
                )}

                {/* Success Message */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-sm text-green-800">
                      Thank you! We've received your message and will get back to you soon.
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Right Side - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* FAQ Section */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Connect With Us
                </h3>
                <p className="text-gray-600 mb-6">
                  Follow us on social media for the latest updates, tips, and success stories.
                </p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gray-100 p-4 rounded-xl hover:bg-gray-200 transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
