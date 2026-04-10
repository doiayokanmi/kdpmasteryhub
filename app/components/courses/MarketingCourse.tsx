import CourseDetailPage, { CourseData } from '../CourseDetailPage'

const course: CourseData = {
  slug: 'marketing',
  title: 'Amazon Marketing Strategies',
  subtitle: 'Rank higher, sell more, earn consistently',
  description: 'Proven marketing tactics to increase your book\'s visibility on Amazon — covering keyword optimisation, Amazon Ads, book launch strategy, review generation, and scaling to multiple titles.',
  longDescription: `Publishing a great book is only half the battle. Without a marketing strategy, even the best book will sit invisible on Amazon — and that is exactly where most self-published authors get stuck.

Amazon Marketing Strategies is the most advanced course in the KDP Mastery Hub curriculum. It is designed for authors who have at least one book live and want to dramatically increase their visibility, sales velocity, and monthly royalties.

The course covers Amazon's A9 ranking algorithm in plain language, shows you how to build and optimise a full Sponsored Products ad campaign from scratch, teaches the exact 5-day launch sequence our top students use, and gives you a proven system for generating legitimate reviews.

The final module covers portfolio scaling — how to systematically publish more titles, reinvest your earnings, and build a publishing business that earns consistently without requiring constant manual work.`,
  price: '₦65,000',
  priceUSD: '$43',
  level: 'Intermediate',
  duration: '9h 45m',
  lessons: 28,
  students: '520+',
  rating: 4.9,
  reviews: 267,
  color: 'green',
  outcomes: [
    'Understand Amazon\'s A9 ranking algorithm and how to use it',
    'Optimise your book listing for maximum organic discoverability',
    'Set up and run profitable Sponsored Products ad campaigns',
    'Execute a 5-day book launch sequence that drives early momentum',
    'Generate legitimate reviews without violating Amazon\'s terms',
    'Track key metrics: ACOS, BSR, click-through rate, and conversion',
    'Scale to a multi-title portfolio using a repeatable system',
    'Reinvest royalties intelligently to accelerate growth',
  ],
  requirements: [
    'At least one book published on KDP (this is an intermediate course)',
    'Completion of KDP Mastery Fundamentals is strongly recommended',
    'A budget of at least $10–$20 to practise with Amazon Ads (small campaigns)',
    'A basic understanding of your book\'s target audience',
  ],
  forWhom: [
    'Authors with live books who are not generating consistent sales',
    'Publishers who have tried Amazon Ads but lost money and want to fix it',
    'Students who completed KDP Mastery Fundamentals and are ready to scale',
    'Anyone earning under $1,000/month who wants to break through that ceiling',
    'Multi-title publishers who want to build a systematic marketing operation',
  ],
  modules: [
    {
      title: 'How Amazon\'s Algorithm Works',
      lessons: [
        { title: 'The A9 algorithm: what actually drives rankings', duration: '12:30', free: true },
        { title: 'Sales velocity, relevance, and conversion rate explained', duration: '9:45', free: true },
        { title: 'Why your book isn\'t being discovered (and how to fix it)', duration: '11:20' },
      ],
    },
    {
      title: 'Listing Optimisation',
      lessons: [
        { title: 'Keyword research for maximum listing relevance', duration: '18:45' },
        { title: 'Title and subtitle optimisation', duration: '10:30' },
        { title: 'Writing a high-converting book description', duration: '14:20' },
        { title: 'Category selection strategy: finding your bestseller categories', duration: '12:00' },
        { title: 'A+ Content for KDP (where available)', duration: '8:45' },
      ],
    },
    {
      title: 'Amazon Ads (Sponsored Products)',
      lessons: [
        { title: 'Amazon Ads overview: auto vs manual campaigns', duration: '10:15' },
        { title: 'Setting up your first auto campaign', duration: '16:30' },
        { title: 'Building a manual exact and phrase campaign', duration: '19:45' },
        { title: 'Bid strategy and budget management', duration: '13:20' },
        { title: 'Reading your campaign data: ACOS, clicks, and spend', duration: '11:00' },
        { title: 'Optimising campaigns week by week', duration: '14:45' },
        { title: 'Scaling winning campaigns profitably', duration: '10:30' },
      ],
    },
    {
      title: 'Book Launch Strategy',
      lessons: [
        { title: 'The 5-day launch sequence step by step', duration: '20:15' },
        { title: 'Building a launch list before you publish', duration: '12:30' },
        { title: 'Using KDP Select free days strategically', duration: '9:20' },
        { title: 'Generating your first 10 legitimate reviews', duration: '11:45' },
      ],
    },
    {
      title: 'Scaling & Portfolio Building',
      lessons: [
        { title: 'The repeatable publishing system', duration: '14:00' },
        { title: 'Reinvestment framework: from $500 to $5,000/month', duration: '16:20' },
        { title: 'Outsourcing content, covers, and formatting', duration: '12:45' },
        { title: 'Tracking your portfolio: the KDP dashboard and beyond', duration: '8:30' },
      ],
    },
  ],
  instructor: {
    name: 'Michael Chen',
    role: 'Marketing Director, KDP Mastery Hub',
    image: 'https://i.pravatar.cc/150?img=13',
    bio: 'Michael Chen is an expert in Amazon\'s marketing and advertising systems with a background in data science. He has helped over 500 KDP students reach bestseller status using the exact frameworks taught in this course. His ad optimisation techniques consistently reduce ACOS by 30–50% within the first month.',
    books: 25,
    students: '520+',
  },
  faqs: [
    { q: 'Do I need a large budget for Amazon Ads?', a: 'No. You can start with as little as $5–$10. The course teaches you how to start small, gather data, and only scale spending once you can see which campaigns are profitable.' },
    { q: 'What is ACOS and what should mine be?', a: 'ACOS (Advertising Cost of Sales) is the percentage of sales revenue spent on ads. For KDP, a profitable target is typically 30–50% depending on your royalty rate. The course covers this in detail.' },
    { q: 'Does this course cover KDP Select and Kindle Unlimited?', a: 'Yes. There is a dedicated lesson on using KDP Select strategically — including free day promotions, Kindle Countdown Deals, and when it makes sense to go wide instead.' },
    { q: 'My book already has ads running. Can this course still help me?', a: 'Absolutely. The campaign optimisation modules are specifically designed for authors who have active ads but are losing money or seeing stagnant results. Most students see significant improvement within two weeks of applying the bid strategy framework.' },
    { q: 'Is this course updated for 2025 Amazon Ads changes?', a: 'Yes. We review and update the advertising content every quarter to reflect any changes Amazon makes to its Ads platform, bidding system, and targeting options.' },
  ],
}

export default function MarketingCourse() {
  return <CourseDetailPage course={course} />
}
