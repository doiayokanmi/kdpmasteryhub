'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check, AlertCircle, Sparkles, Gift, BookOpen, TrendingUp } from 'lucide-react'

/* ---------- BENEFITS DATA ---------- */
const benefits = [
  {
    icon: BookOpen,
    text: 'Exclusive KDP tips & strategies',
  },
  {
    icon: Gift,
    text: 'Free book templates & resources',
  },
  {
    icon: TrendingUp,
    text: 'Weekly publishing insights',
  },
  {
    icon: Sparkles,
    text: 'Early access to new courses',
  },
]

/* ---------- EMAIL SUBSCRIPTION COMPONENT ---------- */
export default function EmailSubscription() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset error
    setErrorMessage('')

    // Validate email
    if (!email) {
      setStatus('error')
      setErrorMessage('Please enter your email address')
      return
    }

    if (!validateEmail(email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address')
      return
    }

    // Set loading state
    setStatus('loading')

    // Simulate API call (replace with your actual API endpoint)
    try {
      // Example: await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
      
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulated delay
      
      setStatus('success')
      setEmail('')
      
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
    <div className="p-24">
      <section className="relative rounded-3xl p-6 overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Join 5,000+ Students</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Free KDP Resources
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Subscribe to receive exclusive tips, templates, and strategies to 
              boost your Amazon KDP publishing success.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <span className="text-white/90">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-10"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Start Your Free Journey
              </h3>
              <p className="text-gray-600">
                No spam, unsubscribe anytime. We respect your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setStatus('idle')
                      setErrorMessage('')
                    }}
                    placeholder="Enter your email address"
                    disabled={status === 'loading' || status === 'success'}
                    className={`
                      w-full
                      pl-12
                      pr-4
                      py-4
                      border-2
                      rounded-xl
                      text-gray-900
                      placeholder-gray-400
                      focus:outline-none
                      focus:ring-2
                      focus:ring-orange-500
                      focus:border-transparent
                      transition-all
                      duration-300
                      disabled:bg-gray-50
                      disabled:cursor-not-allowed
                      ${
                        status === 'error'
                          ? 'border-red-500'
                          : 'border-gray-200'
                      }
                    `}
                  />
                </div>
                
                {/* Error Message */}
                {status === 'error' && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mt-2 text-red-600 text-sm"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`
                  w-full
                  py-4
                  rounded-xl
                  font-semibold
                  text-lg
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-2
                  ${
                    status === 'success'
                      ? 'bg-green-500 text-white'
                      : status === 'loading'
                      ? 'bg-orange-400 text-white cursor-wait'
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:scale-[1.02]'
                  }
                  disabled:cursor-not-allowed
                `}
              >
                {status === 'loading' && (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Subscribing...</span>
                  </>
                )}
                
                {status === 'success' && (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Successfully Subscribed!</span>
                  </>
                )}
                
                {status !== 'loading' && status !== 'success' && (
                  <>
                    <span>Get Free Resources</span>
                    <Mail className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Success Message */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-4"
                >
                  <p className="text-green-800 text-center">
                    🎉 Welcome aboard! Check your email for your free resources.
                  </p>
                </motion.div>
              )}

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 text-center">
                By subscribing, you agree to receive marketing emails from DSAM.
                You can unsubscribe at any time.
              </p>
            </form>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>No spam</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Unsubscribe anytime</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>100% Free</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      
    </section>
    </div>
  )
}
