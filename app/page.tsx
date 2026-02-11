'use client'

import { serviceLIst } from '@/lib/utils'
import EmblaCarousel from './components/EmblaCarousel'
import Header from './components/Header'
import TheText from './components/TheText'
import Services from './components/Services'
import CourseHighlight from './components/CourseHighlight'
import CountUp from './components/CountUp'
import TestimonialCarousel from './components/TestimonialCarousel'
import EmailSubscription from './components/EmailSubscription'
import Footer from './components/Footer'



export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      {/* HEADER */}
      <Header />

      {/* HERO CAROUSEL */}
      <EmblaCarousel />

      {/* ANIMATED SECTION */}
      <TheText />

      {/* ADDITIONAL SECTIONS CAN BE ADDED HERE */}


      <Services />

      <CourseHighlight />

      <CountUp />

      <TestimonialCarousel />

      <EmailSubscription />

      <Footer />
    </main>
  )
}
