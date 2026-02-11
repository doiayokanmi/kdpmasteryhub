import { motion } from 'motion/react'
import React from 'react'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
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
        viewport={{ once: false, amount: 0.3 }}
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
