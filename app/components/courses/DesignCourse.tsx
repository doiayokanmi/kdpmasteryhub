import CourseDetailPage, { CourseData } from '../CourseDetailPage'

const course: CourseData = {
  slug: 'design',
  title: 'Cover Design Secrets',
  subtitle: 'Create bestseller-worthy covers without a designer',
  description: 'Learn to design professional eBook and paperback covers in Canva. Covers typography, colour psychology, niche research, competitor analysis, and spine width calculation.',
  longDescription: `Your book cover is the single most powerful marketing asset you have. Studies show that cover quality is the number one factor in whether a browser on Amazon becomes a buyer — and most self-published authors get it wrong.

Cover Design Secrets teaches you the exact principles that separate bestselling covers from forgettable ones — and then shows you how to apply those principles yourself in Canva, completely for free.

The course begins with cover research: how to analyse what is working in your niche and why. You'll then learn the fundamentals of typography and colour psychology as they apply to book covers, before moving into hands-on Canva tutorials where you'll design a complete eBook cover and a full paperback wrap from scratch.

No design background required. If you can use a computer, you can produce a professional cover after this course.`,
  price: '₦50,000',
  priceUSD: '$33',
  level: 'Beginner',
  duration: '5h 00m',
  lessons: 15,
  students: '380+',
  rating: 4.9,
  reviews: 178,
  color: 'pink',
  outcomes: [
    'Analyse bestselling covers in any niche and understand why they work',
    'Apply colour psychology to attract your target reader',
    'Choose and combine fonts that convey the right genre signals',
    'Design a complete eBook front cover in Canva from scratch',
    'Build a full paperback wrap with correct spine width',
    'Export covers that meet every KDP specification',
    'Brief a professional designer effectively (if you outsource)',
    'A/B test covers to maximise conversions',
  ],
  requirements: [
    'A free Canva account (canva.com — no paid plan needed for most lessons)',
    'No design experience required — if you can use PowerPoint, you can use Canva',
    'A book idea or existing manuscript to design a cover for',
  ],
  forWhom: [
    'Authors who suspect their cover is costing them sales',
    'New publishers who want to avoid paying ₦20,000–₦50,000 for every cover',
    'Low-content publishers who need to produce covers at scale',
    'Anyone whose cover has received negative feedback from readers',
    'Authors who want to understand design well enough to brief a designer',
  ],
  modules: [
    {
      title: 'Cover Research & Strategy',
      lessons: [
        { title: 'Why covers make or break your book', duration: '8:15', free: true },
        { title: 'Analysing bestselling covers in your niche', duration: '14:30', free: true },
        { title: 'The 5 elements every great cover must have', duration: '10:20' },
      ],
    },
    {
      title: 'Design Fundamentals',
      lessons: [
        { title: 'Typography for book covers: font pairing basics', duration: '16:45' },
        { title: 'Colour psychology: choosing colours that sell', duration: '12:00' },
        { title: 'Layout and visual hierarchy', duration: '11:30' },
        { title: 'Using stock images effectively (and legally)', duration: '9:20' },
      ],
    },
    {
      title: 'Designing in Canva',
      lessons: [
        { title: 'Setting up the correct KDP dimensions in Canva', duration: '7:45' },
        { title: 'eBook front cover: full design walkthrough', duration: '28:20' },
        { title: 'Adding text, effects and finishing touches', duration: '14:10' },
        { title: 'Exporting your eBook cover for KDP', duration: '5:30' },
      ],
    },
    {
      title: 'Paperback Wrap',
      lessons: [
        { title: 'Calculating your spine width', duration: '8:00' },
        { title: 'Building the full paperback wrap in Canva', duration: '24:15' },
        { title: 'Exporting a print-ready PDF cover', duration: '6:45' },
      ],
    },
    {
      title: 'Testing & Outsourcing',
      lessons: [
        { title: 'How to A/B test your cover on Amazon', duration: '9:30' },
        { title: 'Briefing a designer: what to include and what to avoid', duration: '11:00' },
      ],
    },
  ],
  instructor: {
    name: 'Sarah Johnson',
    role: 'Head of Content, KDP Mastery Hub',
    image: 'https://i.pravatar.cc/150?img=5',
    bio: 'Sarah Johnson is a former Amazon bestselling author whose books are consistently recognised for their professional cover design. She has designed covers for 100+ KDP titles and teaches the exact same process in this course — adapted for complete beginners.',
    books: 30,
    students: '380+',
  },
  faqs: [
    { q: 'Do I need to pay for Canva Pro?', a: 'No. The majority of the course uses Canva\'s free plan. Some advanced features are shown using Canva Pro, but free alternatives are always demonstrated alongside them.' },
    { q: 'Can I use these skills for low-content books?', a: 'Absolutely. The course covers how to design covers for journals, planners, and activity books — which often need a faster, more systematic approach than standard books.' },
    { q: 'What if I want to hire a designer anyway?', a: 'The course includes a dedicated lesson on how to brief a designer effectively — covering what reference covers to provide, what to ask for, and how to evaluate the result.' },
    { q: 'Will this work for fiction covers too?', a: 'Yes. The research and typography fundamentals apply to all genres. The Canva walkthroughs use nonfiction examples but the principles transfer directly.' },
  ],
}

export default function DesignCourse() {
  return <CourseDetailPage course={course} />
}
