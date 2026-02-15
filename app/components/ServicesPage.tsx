'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen,
  PenTool,
  TrendingUp,
  FileText,
  Image,
  Megaphone,
  Zap,
  Target,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  DollarSign,
  Star
} from 'lucide-react'

/* ---------- SERVICES DATA ---------- */
const services = [
  {
    icon: BookOpen,
    title: 'KDP Account Setup',
    description: 'Get your Amazon KDP account professionally configured with optimal settings for maximum visibility and sales potential.',
    features: [
      'Complete account registration',
      'Tax information setup',
      'Payment method configuration',
      'Author profile optimization',
      'Category selection guidance'
    ],
    popular: false
  },
  {
    icon: PenTool,
    title: 'Book Formatting',
    description: 'Professional formatting for both eBook and paperback that meets Amazon\'s specifications and looks amazing on all devices.',
    features: [
      'eBook & paperback formatting',
      'Table of contents creation',
      'Image optimization',
      'Chapter styling',
      'Print-ready files'
    ],
    popular: true
  },
  {
    icon: Image,
    title: 'Cover Design',
    description: 'Eye-catching, professional book covers that stand out in Amazon search results and convert browsers into buyers.',
    features: [
      '3 unique design concepts',
      'Unlimited revisions',
      '3D mockups',
      'Source files included',
      'Print & eBook versions'
    ],
    popular: true
  },
  {
    icon: Megaphone,
    title: 'Marketing & Launch',
    description: 'Strategic marketing campaigns to boost your book\'s visibility, generate reviews, and achieve bestseller status.',
    features: [
      'Launch strategy planning',
      'AMS ads setup & optimization',
      'Review generation tactics',
      'Social media promotion',
      'Email marketing templates'
    ],
    popular: false
  },
  {
    icon: FileText,
    title: 'Content Writing',
    description: 'High-quality ghostwriting services for your KDP books, from outlines to complete manuscripts.',
    features: [
      'Professional ghostwriters',
      'Detailed outlines',
      'Research included',
      'SEO optimization',
      'Unlimited edits'
    ],
    popular: false
  },
  {
    icon: TrendingUp,
    title: 'Full Publishing Package',
    description: 'Complete end-to-end publishing service. We handle everything from writing to marketing while you focus on your next book.',
    features: [
      'All services included',
      'Dedicated project manager',
      'Priority support',
      'Monthly performance reports',
      'Ongoing optimization'
    ],
    popular: true
  }
]

/* ---------- PROCESS STEPS ---------- */
const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We discuss your goals, target audience, and book concept to create a tailored strategy.',
    icon: Users
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Our team develops a comprehensive plan covering writing, design, and marketing.',
    icon: Target
  },
  {
    step: '03',
    title: 'Execution',
    description: 'We bring your book to life with professional writing, formatting, and design.',
    icon: Zap
  },
  {
    step: '04',
    title: 'Launch & Optimize',
    description: 'Strategic launch followed by ongoing optimization to maximize your success.',
    icon: TrendingUp
  }
]

/* ---------- WHY CHOOSE US ---------- */
const benefits = [
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Published authors and marketing professionals with proven KDP success'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Quick delivery without compromising quality - most projects done in 2-3 weeks'
  },
  {
    icon: DollarSign,
    title: 'Best Value',
    description: 'Competitive pricing with no hidden fees - you get exactly what you pay for'
  },
  {
    icon: Star,
    title: '100% Satisfaction',
    description: 'Unlimited revisions until you\'re completely happy with the results'
  }
]

/* ---------- SERVICES PAGE ---------- */
export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

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
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Professional KDP Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              From Idea to Bestseller
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Professional publishing services designed to take your book from concept to 
              Amazon bestseller. We handle the technical details while you focus on your vision.
            </p>

            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of publishing services tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer
                  ${selectedService === index ? 'ring-2 ring-orange-500 scale-105' : 'hover:scale-105'}
                  ${service.popular ? 'border-2 border-orange-500' : 'border-2 border-transparent'}
                `}
                onClick={() => setSelectedService(selectedService === index ? null : index)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 right-6 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                
                {/* Title & Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-orange-600" />
                </div>

                  <h3 className="text-xl flex justify-center  items-center font-bold text-gray-900">{service.title}</h3>
                  
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven 4-step process ensures your book's success from concept to launch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-orange-200 -z-10" />
                )}

                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Step Number */}
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-orange-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to your publishing success with unmatched quality and support
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Publish Your Book?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let our expert team handle the technical details while you focus on your next bestseller. 
                Get started today with a free consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105 shadow-lg">
                  Schedule Free Consultation
                </button>
                <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
