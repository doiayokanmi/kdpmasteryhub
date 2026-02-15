'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Target,
  Eye,
  Heart,
  Users,
  TrendingUp,
  Award,
  Sparkles,
  CheckCircle,
  Quote,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react'

/* ---------- TEAM MEMBERS ---------- */
const teamMembers = [
  {
    name: 'David Samuel',
    role: 'Founder & CEO',
    image: 'https://i.pravatar.cc/300?img=12',
    bio: 'Published author with 50+ books on Amazon KDP. Passionate about helping others achieve publishing success.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'david@kdpmasteryhub.com'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'Head of Content',
    image: 'https://i.pravatar.cc/300?img=5',
    bio: 'Former Amazon bestselling author. Specializes in book formatting and cover design strategies.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@kdpmasteryhub.com'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    image: 'https://i.pravatar.cc/300?img=13',
    bio: 'Expert in Amazon marketing algorithms. Helped 500+ students reach bestseller status.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'michael@kdpmasteryhub.com'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Student Success Manager',
    image: 'https://i.pravatar.cc/300?img=9',
    bio: 'Dedicated to ensuring every student achieves their publishing goals through personalized support.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'emily@kdpmasteryhub.com'
    }
  }
]

/* ---------- CORE VALUES ---------- */
const coreValues = [
  {
    icon: Heart,
    title: 'Student-Centered',
    description: 'Your success is our success. Every decision we make puts students first.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver high-quality content and support that exceeds expectations.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a supportive network where authors help each other grow.'
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Constantly evolving our methods to stay ahead of publishing trends.'
  }
]

/* ---------- STATS ---------- */
const stats = [
  { number: '700+', label: 'Students Enrolled' },
  { number: '1,000+', label: 'Books Published' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '100K+', label: 'Revenue Generated' }
]

/* ---------- ABOUT US PAGE ---------- */
export default function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 text-white py-20 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium">About KDP Mastery Hub</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Authors to{' '}
              <span className="block">Build Publishing Empires</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              We're on a mission to democratize Amazon KDP publishing by providing 
              world-class education, tools, and support to aspiring authors worldwide.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105 shadow-lg">
                Join Our Community
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </p>
                <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  KDP Mastery Hub was born from a simple realization: thousands of aspiring 
                  authors dream of publishing on Amazon KDP, but most don't know where to start.
                </p>
                <p>
                  In 2020, our founder David Samuel published his first book and made every 
                  mistake possible. After years of trial and error, he cracked the code to 
                  consistent KDP success and wanted to share this knowledge with the world.
                </p>
                <p>
                  What started as a small YouTube channel has grown into a thriving community 
                  of 700+ students who have collectively published over 1,000 books and 
                  generated six figures in revenue.
                </p>
                <p>
                  Today, we're proud to be the most trusted name in KDP education, with a 
                  4.9-star rating and countless success stories from students worldwide.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                <Quote className="w-12 h-12 mb-4 opacity-50" />
                <blockquote className="text-lg sm:text-xl font-medium mb-4">
                  "Success in KDP publishing isn't about luck—it's about having the right 
                  knowledge, tools, and support. That's exactly what we provide."
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt="David Samuel"
                    className="w-16 h-16 rounded-full border-4 border-white/20"
                  />
                  <div>
                    <p className="font-bold">David Samuel</p>
                    <p className="text-white/80 text-sm">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To empower aspiring authors with the knowledge, tools, and confidence they 
                need to build successful publishing businesses on Amazon KDP. We believe 
                everyone has valuable knowledge to share, and we're here to help them reach 
                the world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To become the world's leading platform for KDP education, creating a global 
                community of successful authors who support and inspire each other. We envision 
                a future where anyone, anywhere can build a thriving publishing business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at KDP Mastery Hub
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate experts dedicated to your publishing success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={member.social.linkedin}
                      className="bg-gray-100 p-2 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="bg-gray-100 p-2 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="bg-gray-100 p-2 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
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
                Ready to Start Your Publishing Journey?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join 700+ students who are already building successful publishing businesses 
                with our proven strategies and expert guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Started Today
                </button>
                <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                  View Courses
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
