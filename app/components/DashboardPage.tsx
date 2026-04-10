'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen,
  TrendingUp,
  User,
  Award,
  Clock,
  CheckCircle,
  PlayCircle,
  Lock,
  Star,
  Camera,
  Mail,
  Phone,
  Save,
  Bell,
  LogOut,
  ChevronRight,
  BarChart2,
  Target,
  Zap,
} from 'lucide-react'
import Link from 'next/link'

/* ─────────── MOCK DATA ─────────── */
const user = {
  name: 'Damilola Ayokanmi',
  email: 'damilola@kdpmasteryhub.com',
  phone: '+234 805 000 0000',
  avatar: 'https://i.pravatar.cc/150?img=1',
  joinedDate: 'January 2025',
  booksPublished: 7,
  coursesCompleted: 2,
  hoursLearned: 34,
}

const courses = [
  {
    id: 1,
    title: 'KDP Mastery Fundamentals',
    description: 'Everything you need to set up and launch your first book on Amazon KDP.',
    progress: 100,
    lessons: 12,
    completedLessons: 12,
    duration: '8h 30m',
    status: 'completed',
    thumbnail: '📚',
    badge: 'Certified Publisher',
  },
  {
    id: 2,
    title: 'Book Formatting Mastery',
    description: 'Professional eBook and paperback formatting from scratch.',
    progress: 65,
    lessons: 10,
    completedLessons: 6,
    duration: '6h 15m',
    status: 'in-progress',
    thumbnail: '📝',
    badge: null,
  },
  {
    id: 3,
    title: 'Cover Design Secrets',
    description: 'Create bestseller-worthy covers without a design background.',
    progress: 0,
    lessons: 8,
    completedLessons: 0,
    duration: '5h 00m',
    status: 'locked',
    thumbnail: '🎨',
    badge: null,
  },
  {
    id: 4,
    title: 'Amazon Marketing Strategies',
    description: 'Proven marketing tactics to rank higher and sell more books.',
    progress: 0,
    lessons: 14,
    completedLessons: 0,
    duration: '9h 45m',
    status: 'locked',
    thumbnail: '📈',
    badge: null,
  },
]

const milestones = [
  { label: 'First Course Completed', done: true },
  { label: 'First Book Published', done: true },
  { label: 'Formatting Expert', done: false },
  { label: 'Cover Design Master', done: false },
  { label: 'Marketing Pro', done: false },
  { label: 'KDP Grand Master', done: false },
]

const weeklyActivity = [
  { day: 'Mon', minutes: 45 },
  { day: 'Tue', minutes: 90 },
  { day: 'Wed', minutes: 30 },
  { day: 'Thu', minutes: 75 },
  { day: 'Fri', minutes: 60 },
  { day: 'Sat', minutes: 20 },
  { day: 'Sun', minutes: 0 },
]

/* ─────────── TYPES ─────────── */
type Tab = 'courses' | 'progress' | 'profile'

/* ─────────── STATUS BADGE ─────────── */
function StatusBadge({ status }: { status: string }) {
  if (status === 'completed')
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
        <CheckCircle className="w-3 h-3" /> Completed
      </span>
    )
  if (status === 'in-progress')
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-700 bg-orange-100 px-2.5 py-1 rounded-full">
        <PlayCircle className="w-3 h-3" /> In Progress
      </span>
    )
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
      <Lock className="w-3 h-3" /> Locked
    </span>
  )
}

/* ─────────── MY COURSES TAB ─────────── */
function CoursesTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
      <div className="grid gap-5">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className={`bg-white rounded-2xl shadow-sm border p-6 transition-all duration-300 ${
              course.status === 'locked' ? 'opacity-60' : 'hover:shadow-md'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              {/* Thumbnail */}
              <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-3xl flex-shrink-0">
                {course.thumbnail}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">{course.title}</h3>
                  <StatusBadge status={course.status} />
                  {course.badge && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-yellow-700 bg-yellow-100 px-2.5 py-1 rounded-full">
                      <Award className="w-3 h-3" /> {course.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-3">{course.description}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    {course.completedLessons}/{course.lessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                  </span>
                </div>

                {/* Progress bar */}
                {course.status !== 'locked' && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Progress</span>
                      <span className="font-semibold text-orange-600">{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className={`h-full rounded-full ${
                          course.progress === 100
                            ? 'bg-gradient-to-r from-green-400 to-green-500'
                            : 'bg-gradient-to-r from-orange-400 to-orange-500'
                        }`}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="flex-shrink-0">
                {course.status === 'locked' ? (
                  <button
                    disabled
                    className="flex items-center gap-1 text-sm font-medium text-gray-400 bg-gray-100 px-4 py-2 rounded-xl cursor-not-allowed"
                  >
                    <Lock className="w-4 h-4" /> Locked
                  </button>
                ) : (
                  <Link
                    href={`/courses/course-${course.id}`}
                    className="flex items-center gap-1 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-4 py-2 rounded-xl transition-all duration-300 hover:shadow-md"
                  >
                    {course.status === 'completed' ? 'Review' : 'Continue'}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Browse more */}
      <div className="text-center pt-2">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors"
        >
          Browse All Courses <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

/* ─────────── PROGRESS TRACKER TAB ─────────── */
function ProgressTab() {
  const maxMinutes = Math.max(...weeklyActivity.map((d) => d.minutes), 1)

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold text-gray-900">Progress Tracker</h2>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { icon: BookOpen, label: 'Books Published', value: user.booksPublished, color: 'orange' },
          { icon: CheckCircle, label: 'Courses Done', value: user.coursesCompleted, color: 'green' },
          { icon: Clock, label: 'Hours Learned', value: user.hoursLearned, color: 'blue' },
          { icon: Star, label: 'Avg. Rating', value: '4.9', color: 'yellow' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white rounded-2xl shadow-sm border p-5 flex flex-col items-center text-center gap-2"
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                stat.color === 'orange'
                  ? 'bg-orange-100'
                  : stat.color === 'green'
                  ? 'bg-green-100'
                  : stat.color === 'blue'
                  ? 'bg-blue-100'
                  : 'bg-yellow-100'
              }`}
            >
              <stat.icon
                className={`w-5 h-5 ${
                  stat.color === 'orange'
                    ? 'text-orange-600'
                    : stat.color === 'green'
                    ? 'text-green-600'
                    : stat.color === 'blue'
                    ? 'text-blue-600'
                    : 'text-yellow-600'
                }`}
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500 leading-tight">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Weekly activity chart */}
      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <div className="flex items-center gap-2 mb-6">
          <BarChart2 className="w-5 h-5 text-orange-500" />
          <h3 className="font-bold text-gray-900">Weekly Learning Activity</h3>
        </div>
        <div className="flex items-end justify-between gap-2 h-32">
          {weeklyActivity.map((day, i) => (
            <div key={day.day} className="flex-1 flex flex-col items-center gap-1">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(day.minutes / maxMinutes) * 100}%` }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className={`w-full rounded-t-lg min-h-[4px] ${
                  day.minutes > 0
                    ? 'bg-gradient-to-t from-orange-500 to-orange-400'
                    : 'bg-gray-100'
                }`}
                style={{ minHeight: 4 }}
              />
              <span className="text-xs text-gray-400 font-medium">{day.day}</span>
              {day.minutes > 0 && (
                <span className="text-[10px] text-gray-400">{day.minutes}m</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <div className="flex items-center gap-2 mb-6">
          <Target className="w-5 h-5 text-orange-500" />
          <h3 className="font-bold text-gray-900">Milestones</h3>
        </div>
        <div className="space-y-3">
          {milestones.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-3"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                  m.done ? 'bg-green-500' : 'bg-gray-200'
                }`}
              >
                {m.done ? (
                  <CheckCircle className="w-4 h-4 text-white" />
                ) : (
                  <Zap className="w-3.5 h-3.5 text-gray-400" />
                )}
              </div>
              <span
                className={`text-sm font-medium ${
                  m.done ? 'text-gray-900 line-through decoration-gray-300' : 'text-gray-500'
                }`}
              >
                {m.label}
              </span>
              {m.done && (
                <span className="ml-auto text-xs text-green-600 font-semibold">✓ Achieved</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────── PROFILE SETTINGS TAB ─────────── */
function ProfileTab() {
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [saved, setSaved] = useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const inputCls =
    'w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300'

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold text-gray-900">Profile Settings</h2>

      {/* Avatar */}
      <div className="bg-white rounded-2xl shadow-sm border p-6 flex flex-col sm:flex-row items-center gap-6">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover ring-4 ring-orange-100"
          />
          <button
            type="button"
            className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors shadow-md"
            title="Change photo"
          >
            <Camera className="w-4 h-4" />
          </button>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
          <p className="text-sm text-gray-500">Member since {user.joinedDate}</p>
          <div className="flex gap-2 mt-3">
            <span className="text-xs font-semibold text-orange-700 bg-orange-100 px-3 py-1 rounded-full flex items-center gap-1">
              <Award className="w-3 h-3" /> KDP Publisher
            </span>
          </div>
        </div>
      </div>

      {/* Edit form */}
      <form onSubmit={handleSave} className="bg-white rounded-2xl shadow-sm border p-6 space-y-5">
        <h3 className="font-bold text-gray-900 mb-1">Personal Information</h3>

        {/* Full name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputCls}
              placeholder="Your full name"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputCls}
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Phone className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputCls}
              placeholder="+234 000 000 0000"
            />
          </div>
        </div>

        {/* Save */}
        <div className="flex items-center gap-4 pt-2">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-md"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
          {saved && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-1.5 text-sm text-green-600 font-medium"
            >
              <CheckCircle className="w-4 h-4" /> Saved successfully!
            </motion.span>
          )}
        </div>
      </form>

      {/* Notifications */}
      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <div className="flex items-center gap-2 mb-5">
          <Bell className="w-5 h-5 text-orange-500" />
          <h3 className="font-bold text-gray-900">Notifications</h3>
        </div>
        <div className="space-y-4">
          {[
            'Email me about new courses',
            'Email me about promotions and discounts',
            'Send weekly progress report',
          ].map((label) => (
            <label key={label} className="flex items-center justify-between cursor-pointer group">
              <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                {label}
              </span>
              <div className="relative">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-orange-500 transition-colors" />
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5" />
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Danger zone */}
      <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6">
        <h3 className="font-bold text-red-600 mb-4">Account Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Link>
          <button className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-600 rounded-xl text-sm font-medium hover:bg-red-50 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}

/* ─────────── MAIN DASHBOARD ─────────── */
export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>('courses')

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
    { id: 'profile', label: 'Profile', icon: User },
  ]

  const overallProgress = Math.round(
    courses.reduce((sum, c) => sum + c.progress, 0) / courses.length
  )

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Welcome banner */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-8 mb-8 text-white flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full ring-4 ring-white/30 object-cover flex-shrink-0"
          />
          <div className="flex-1">
            <p className="text-orange-100 text-sm font-medium">Welcome back 👋</p>
            <h1 className="text-2xl sm:text-3xl font-bold">{user.name}</h1>
            <p className="text-orange-100 text-sm mt-1">
              {user.booksPublished} books published · {user.hoursLearned}h learned · {user.coursesCompleted} courses completed
            </p>
          </div>
          <div className="flex flex-col items-center bg-white/10 backdrop-blur rounded-xl px-6 py-4 text-center min-w-[110px]">
            <p className="text-3xl font-bold">{overallProgress}%</p>
            <p className="text-xs text-orange-100 mt-1">Overall Progress</p>
          </div>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex gap-1 bg-white rounded-xl shadow-sm border p-1.5 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'courses' && <CoursesTab />}
          {activeTab === 'progress' && <ProgressTab />}
          {activeTab === 'profile' && <ProfileTab />}
        </motion.div>
      </div>
    </div>
  )
}
