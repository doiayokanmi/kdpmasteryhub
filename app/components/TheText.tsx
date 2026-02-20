'use client'

import { motion } from 'framer-motion'
import React from 'react'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth motion
    }
  },
}

function TheText() {
  return (
    <section className="
      bg-gray-100
      text-gray-500
      nanum-gothic
      px-4
      py-16
      sm:px-8
      md:px-12
    ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
        className="
          mx-auto
          max-w-4xl
          space-y-6
          text-center
        "
      >
        <motion.h1
          variants={itemVariants}
          className="
            capitalize
            text-black
            font-bold
            tracking-wide
            text-2xl
            sm:text-3xl
            md:text-4xl
            leading-snug
            will-change-transform
          "
        >
          Whether you're a{' '}
          <span className="text-[#F97A0B]">beginner</span> or an{' '}
          <span className="text-[#F97A0B]">experienced</span> author
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="
            text-base
            sm:text-lg
            leading-relaxed
            max-w-2xl
            mx-auto
            will-change-transform
          "
        >
          We provide the tools and resources you need to succeed in the world
          of self-publishing.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="
            text-base
            sm:text-lg
            leading-relaxed
            max-w-2xl
            mx-auto
            will-change-transform
          "
        >
          Explore our services, learn from our expert guides, and take your
          publishing journey to the next level with KDP Mastery Hub.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default TheText