import CourseDetailPage, { CourseData } from '../CourseDetailPage'

const course: CourseData = {
  slug: 'formatting',
  title: 'Book Formatting Mastery',
  subtitle: 'Professional formatting for eBook & paperback',
  description: 'Learn to format any book to Amazon\'s exact specifications using Microsoft Word and Vellum. Covers eBooks, paperbacks, low-content interiors, images, ToC, and export settings.',
  longDescription: `Poorly formatted books get rejected by KDP, receive bad reviews, and lose sales. Book Formatting Mastery eliminates every formatting mistake before it costs you.

This course covers the full formatting workflow for both eBooks and paperbacks — starting with a clean Word template, working through headings, styles, images, and table of contents, all the way to exporting the correct print-ready PDF and EPUB files.

You'll also learn how to design low-content interiors for journals and planners (without Photoshop), how to calculate the correct spine width for paperbacks, and how to pass KDP's automated review the first time, every time.

By the end of this course you will be able to format any book type for KDP — faster, more professionally, and without hiring a formatter.`,
  price: '₦55,000',
  priceUSD: '$37',
  level: 'Beginner',
  duration: '6h 15m',
  lessons: 18,
  students: '450+',
  rating: 4.8,
  reviews: 204,
  color: 'purple',
  outcomes: [
    'Format a paperback manuscript in Word using styles and templates',
    'Create a professional eBook with a fully working linked ToC',
    'Design low-content interiors for journals and planners',
    'Optimise and place images correctly for both print and digital',
    'Export KDP-compliant PDF and EPUB files with correct settings',
    'Calculate the correct spine width for any paperback',
    'Pass KDP\'s automated review the first time',
    'Fix the 10 most common formatting rejection reasons',
  ],
  requirements: [
    'Microsoft Word (2016 or later recommended) or a free trial of Vellum (Mac)',
    'A manuscript or draft to practice with — even an old document is fine',
    'No prior design or formatting experience needed',
  ],
  forWhom: [
    'Authors who have been rejected by KDP for formatting errors',
    'Writers who want to format their own books rather than pay a formatter',
    'Students who completed KDP Mastery Fundamentals and are ready for the next step',
    'Low-content publishers looking to create professional journal interiors',
    'Anyone whose books look unprofessional and are losing sales as a result',
  ],
  modules: [
    {
      title: 'Formatting Foundations',
      lessons: [
        { title: 'KDP formatting requirements explained', duration: '9:20', free: true },
        { title: 'Word vs Vellum: which should you use?', duration: '7:10', free: true },
        { title: 'Setting up your formatting workspace', duration: '5:45' },
      ],
    },
    {
      title: 'Paperback Formatting in Word',
      lessons: [
        { title: 'Page size, margins, and bleed settings', duration: '11:30' },
        { title: 'Paragraph styles: the right way to format text', duration: '14:20' },
        { title: 'Headers, footers, and page numbers', duration: '10:45' },
        { title: 'Creating a linked Table of Contents', duration: '12:00' },
        { title: 'Front matter and back matter setup', duration: '8:30' },
        { title: 'Exporting a print-ready PDF', duration: '7:15' },
      ],
    },
    {
      title: 'eBook Formatting',
      lessons: [
        { title: 'eBook structure and what Kindle renders', duration: '8:45' },
        { title: 'Formatting for eBook in Word', duration: '13:20' },
        { title: 'Exporting EPUB from Word and Vellum', duration: '9:40' },
        { title: 'Testing your eBook on Kindle Preview', duration: '6:30' },
      ],
    },
    {
      title: 'Images, Covers & Low-Content',
      lessons: [
        { title: 'Optimising images for print and digital', duration: '10:15' },
        { title: 'Calculating spine width for paperbacks', duration: '7:20' },
        { title: 'Designing low-content interiors (no Photoshop)', duration: '22:45' },
      ],
    },
    {
      title: 'Upload & Quality Check',
      lessons: [
        { title: 'Uploading your formatted files to KDP', duration: '8:10' },
        { title: 'Reading and fixing KDP error reports', duration: '10:30' },
        { title: 'Ordering and reviewing a physical proof copy', duration: '6:00' },
      ],
    },
  ],
  instructor: {
    name: 'Sarah Johnson',
    role: 'Head of Content, KDP Mastery Hub',
    image: 'https://i.pravatar.cc/150?img=5',
    bio: 'Sarah Johnson is a former Amazon bestselling author and professional book formatter who has formatted over 200 books for KDP authors. She joined KDP Mastery Hub to teach authors how to produce professional results without hiring expensive freelancers.',
    books: 30,
    students: '450+',
  },
  faqs: [
    { q: 'Do I need Vellum to take this course?', a: 'No. The course is primarily built around Microsoft Word, which is sufficient for all book types. Vellum is covered as an optional tool for Mac users who want the most polished output.' },
    { q: 'Can I format low-content books like journals?', a: 'Yes — there is a dedicated module on designing professional low-content interiors without Photoshop, using free tools that work directly in your browser.' },
    { q: 'What if my book keeps getting rejected by KDP?', a: 'The course includes a specific lesson on reading KDP error reports and fixing every common rejection reason. Most formatting rejections are solved within an hour using the techniques taught.' },
    { q: 'Does this cover both eBook and paperback?', a: 'Yes. Both formats are covered in detail — including the important differences in how they need to be formatted, exported, and uploaded.' },
  ],
}

export default function FormattingCourse() {
  return <CourseDetailPage course={course} />
}
