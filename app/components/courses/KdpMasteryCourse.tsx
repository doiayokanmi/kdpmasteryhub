import CourseDetailPage, { CourseData } from '../CourseDetailPage'

const course: CourseData = {
  slug: 'kdp-mastery',
  title: 'KDP Mastery Fundamentals',
  subtitle: 'The complete beginner-to-publisher course',
  description: 'Everything you need to set up your KDP account, source or write your first book, format it correctly, choose the right keywords and categories, and make your first sale on Amazon.',
  longDescription: `KDP Mastery Fundamentals is the most comprehensive beginner course on Amazon KDP publishing available — and it's built entirely around results.

Over 27 video lessons, you'll follow a step-by-step system that has helped 700+ students go from "I've never published anything" to having live, selling books on Amazon.

The course begins with a complete KDP account setup walkthrough, covers niche and keyword research in depth, teaches you how to source or write content efficiently, walks you through formatting for both eBook and paperback, and finishes with your first book launch.

By the end of this course you will have published your first book — not just learned how to. Every lesson builds toward that single outcome.`,
  price: '₦75,000',
  priceUSD: '$50',
  level: 'Beginner',
  duration: '11+ hrs',
  lessons: 27,
  students: '700+',
  rating: 4.9,
  reviews: 312,
  color: 'orange',
  outcomes: [
    'Set up and fully optimise a KDP account from scratch',
    'Research profitable niches using proven frameworks',
    'Find low-competition keywords using Publisher Rocket',
    'Format both eBook and paperback to Amazon specifications',
    'Write or source your first book content efficiently',
    'Price your book for maximum royalties',
    'Choose the best categories to rank quickly',
    'Launch your first book and generate your first sales',
  ],
  requirements: [
    'A computer with internet access (Windows or Mac)',
    'No prior publishing or writing experience needed',
    'A willingness to take consistent action — this course rewards doers',
  ],
  forWhom: [
    'Complete beginners who have never published anything',
    'People who want to create a side income stream from home',
    'Professionals who want to monetise their knowledge as a book',
    'Anyone who has tried KDP before but failed to make sales',
    'Nigerians and Africans looking for a legitimate online income',
  ],
  modules: [
    {
      title: 'Welcome & Course Overview',
      lessons: [
        { title: 'How to get the most out of this course', duration: '5:12', free: true },
        { title: 'The KDP opportunity in 2025', duration: '8:45', free: true },
        { title: 'Your 30-day publishing roadmap', duration: '6:30', free: true },
      ],
    },
    {
      title: 'Amazon KDP Account Setup',
      lessons: [
        { title: 'Creating your KDP account step by step', duration: '12:20' },
        { title: 'Tax and payment information setup', duration: '9:15' },
        { title: 'Setting up your Author Central page', duration: '7:40' },
        { title: 'Understanding the KDP dashboard', duration: '6:55' },
      ],
    },
    {
      title: 'Niche & Keyword Research',
      lessons: [
        { title: 'What makes a profitable KDP niche?', duration: '10:30' },
        { title: 'Using Amazon autocomplete for keyword ideas', duration: '8:20' },
        { title: 'Publisher Rocket walkthrough', duration: '18:45' },
        { title: 'Competitor analysis framework', duration: '14:10' },
        { title: 'Choosing your first niche', duration: '9:00' },
      ],
    },
    {
      title: 'Creating Your Book',
      lessons: [
        { title: 'Writing vs. sourcing content: what\'s right for you?', duration: '7:30' },
        { title: 'Structuring a nonfiction book that sells', duration: '12:15' },
        { title: 'Low-content books: journals, planners and notebooks', duration: '15:45' },
        { title: 'Outsourcing content ethically and affordably', duration: '11:20' },
      ],
    },
    {
      title: 'Formatting & Cover',
      lessons: [
        { title: 'Formatting your manuscript in Word', duration: '22:10' },
        { title: 'Designing your cover in Canva', duration: '24:30' },
        { title: 'KDP cover requirements and file export', duration: '8:45' },
      ],
    },
    {
      title: 'Publishing & Launch',
      lessons: [
        { title: 'Uploading your book to KDP', duration: '11:00' },
        { title: 'Writing your book description (with HTML)', duration: '14:20' },
        { title: 'Choosing the right categories and keywords', duration: '10:45' },
        { title: 'Pricing strategy for maximum royalties', duration: '8:30' },
        { title: 'Your launch checklist and first 7 days', duration: '12:00' },
      ],
    },
  ],
  instructor: {
    name: 'David Samuel',
    role: 'Founder & CEO, KDP Mastery Hub',
    image: 'https://i.pravatar.cc/150?img=12',
    bio: 'David Samuel is a published author with 50+ books live on Amazon KDP. After spending two years learning KDP through expensive trial and error, he built KDP Mastery Hub to give other authors the shortcut he never had. His students have collectively earned over $500,000 in royalties.',
    books: 50,
    students: '700+',
  },
  faqs: [
    { q: 'How long do I have access to the course?', a: 'Lifetime. Once you enrol, you own the course forever — including all future updates, which are included at no extra charge.' },
    { q: 'Do I need a credit card to sell on KDP?', a: 'No. You can publish on KDP for free. You only need a payment method to receive your royalty payments, which can be a bank account or Payoneer for students in Nigeria and other African countries.' },
    { q: 'Can I take this course on my phone?', a: 'Yes. All course videos and resources are accessible on any device with a browser.' },
    { q: 'I am based in Nigeria — will KDP work for me?', a: 'Absolutely. Many of our top students are Nigeria-based. The course includes specific guidance for Nigerian authors on account setup, tax forms, and payment via Payoneer.' },
    { q: 'What if I am not satisfied with the course?', a: 'We offer a 7-day money-back guarantee. If you have completed less than 30% of the course and are not satisfied, email us for a full refund — no questions asked.' },
  ],
}

export default function KdpMasteryCourse() {
  return <CourseDetailPage course={course} />
}
