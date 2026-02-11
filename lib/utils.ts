import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import {
  UserCog,
  BookOpenCheck,
  Palette,
  TrendingUp,
  GraduationCap,
} from 'lucide-react'

export const serviceLIst = [
  {
    title: 'KDP Account Setup',
    description: 'Assistance with creating and optimizing',
    icon: UserCog,
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Book Formatting',
    description: 'Professional formatting services',
    icon: BookOpenCheck,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Cover Design',
    description: 'Custom cover design services',
    icon: Palette,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Marketing Strategies',
    description: 'Tailored marketing plans',
    icon: TrendingUp,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    title: 'Author Coaching',
    description: 'One-on-one coaching sessions',
    icon: GraduationCap,
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600',
  },
]

export const slides = [
  {
    title: 'Master Amazon KDP Publishing',
    lines: [
      'Step-by-step video tutorials',
      'Publish, market, and grow books',
      'With confidence and clarity',
    ],
    cta: 'Get Started Today',
    image: '/slides/slide1.jpg',
  },
  {
    title: 'Built for Every Author',
    lines: [
      'Perfect for beginners',
      'Powerful for experienced authors',
      'Scale your publishing journey',
    ],
    image: '/slides/slide2.jpg',
  },
  {
    title: 'Everything You Need in One Place',
    lines: [
      'KDP account setup',
      'Formatting & cover design',
      'Marketing strategies that work',
    ],
    image: '/slides/slide3.jpg',
  },
  {
    title: 'Turn Knowledge Into Success',
    lines: [
      'Avoid costly mistakes',
      'Follow proven strategies',
      'Build long-term results',
    ],
    cta: 'Explore Tutorials',
    image: '/slides/slide4.jpg',
  },
  {
    title: 'Learn With Clarity',
    lines: [
      'No guesswork',
      'No confusion',
      'Just practical guidance',
    ],
    cta: 'Join KDP Mastery Hub',
    image: '/slides/slide5.jpg',
  },
]


export const highList = [
  { number: '95%',
    text: 'of our students successfully publish their first book within 3 months.',
  },
  {
    number: '85%',
    text: 'report increased book sales after implementing our marketing strategies.',
  },
  {
    number: '90%',
    text: 'of authors who used our formatting services received positive reader feedback.',
  },
  {
    number: '80%',
    text: 'of our coaching clients achieve their publishing goals within 6 months.',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Published Author',
    image: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: 'DSAM completely transformed my KDP journey. I went from zero to publishing 15 books in just 6 months. The step-by-step tutorials are incredible!',
    booksPublished: 15,
    monthlyEarnings: '$2,500',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'KDP Entrepreneur',
    image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: 'The best investment I\'ve made in my publishing career. The strategies taught here are practical and actually work. Highly recommended!',
    booksPublished: 22,
    monthlyEarnings: '$4,200',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Full-Time Author',
    image: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    text: 'I was skeptical at first, but DSAM delivered beyond my expectations. The community support and detailed guidance helped me quit my 9-5 job!',
    booksPublished: 31,
    monthlyEarnings: '$6,800',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Beginner Success Story',
    image: 'https://i.pravatar.cc/150?img=13',
    rating: 5,
    text: 'As a complete beginner, I was overwhelmed. DSAM broke everything down into simple steps. Published my first book in 2 weeks!',
    booksPublished: 8,
    monthlyEarnings: '$1,200',
  },
  {
    id: 5,
    name: 'Lisa Patel',
    role: 'Design Expert',
    image: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    text: 'The formatting and cover design tutorials are worth the price alone. My books now look professional and sales have tripled!',
    booksPublished: 18,
    monthlyEarnings: '$3,500',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Marketing Specialist',
    image: 'https://i.pravatar.cc/150?img=14',
    rating: 5,
    text: 'The marketing strategies taught here are gold. I went from 0 sales to consistent daily income in just 3 months. Best decision ever!',
    booksPublished: 12,
    monthlyEarnings: '$2,100',
  },
]



/* ---------- FOOTER DATA ---------- */
export const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/story' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Success Stories', href: '/success' },
    { name: 'Blog', href: '/blog' },
  ],
  courses: [
    { name: 'KDP Mastery', href: '/courses/kdp-mastery' },
    { name: 'Book Formatting', href: '/courses/formatting' },
    { name: 'Cover Design', href: '/courses/design' },
    { name: 'Marketing Strategies', href: '/courses/marketing' },
    { name: 'All Courses', href: '/courses' },
  ],
  resources: [
    { name: 'Free Templates', href: '/resources/templates' },
    { name: 'Publishing Guides', href: '/resources/guides' },
    { name: 'Video Tutorials', href: '/resources/videos' },
    { name: 'Tools & Software', href: '/resources/tools' },
    { name: 'FAQ', href: '/faq' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Contact Us', href: '/contact' },
  ],
}

// export const socialLinks = [
//   { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:bg-blue-600' },
//   { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:bg-sky-500' },
//   { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-pink-600' },
//   { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:bg-blue-700' },
//   { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:bg-red-600' },
// ]
