'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Video, Clock, Users, FileText } from 'lucide-react'

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
}

const item = {
    hidden: { 
        opacity: 0, 
        y: 20 
    },
    show: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94] as const
        },
    },
}

const statVariants = {
    hidden: { 
        opacity: 0, 
        scale: 0.95 
    },
    show: { 
        opacity: 1, 
        scale: 1,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94] as const
        }
    },
}

export default function CourseHighlight() {
    return (
        <section className="bg-white px-4 py-16 sm:px-8 md:px-12">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15, margin: "0px 0px -100px 0px" }}
                className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2"
            >
                {/* LEFT: IMAGE */}
                <motion.div 
                    variants={item} 
                    className="relative will-change-transform"
                >
                    <div className="overflow-hidden rounded-2xl shadow-xl">
                        <Image
                            src="/course-preview.jpg"
                            alt="Amazon KDP Course"
                            width={800}
                            height={500}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>

                    <p className='mt-12 text-gray-600'>
                        This course is designed to guide you from a complete beginner to a published author on Amazon KDP.
                    </p>
                </motion.div>

                {/* RIGHT: CONTENT */}
                <motion.div 
                    variants={container} 
                    className="space-y-4"
                >
                    <motion.p 
                        variants={item} 
                        className="text-sm font-medium text-blue-600 will-change-transform"
                    >
                        COURSE HIGHLIGHT
                    </motion.p>

                    <motion.h2
                        variants={item}
                        className="text-3xl md:text-4xl font-bold text-gray-900 will-change-transform"
                    >
                        From Zero to Published Author
                    </motion.h2>

                    <motion.p
                        variants={item}
                        className="text-gray-600 leading-relaxed will-change-transform"
                    >
                        Join over 700 students who have transformed their lives
                        through our comprehensive Amazon KDP course.
                    </motion.p>

                    {/* STATS */}
                    <motion.div
                        variants={container}
                        className="grid grid-cols-2 gap-4 pt-4"
                    >
                        <Stat icon={Video} value="27" label="Video Lessons" colorIconBg="bg-blue-100 text-blue-600" />
                        <Stat icon={Clock} value="11+ hrs" label="Course Duration" colorIconBg="bg-green-100 text-green-600" />
                        <Stat icon={Users} value="700+" label="Students Enrolled" colorIconBg="bg-purple-100 text-purple-600" />
                        <Stat icon={FileText} value="10+" label="Resources & Tools" colorIconBg="bg-yellow-100 text-yellow-600" />
                    </motion.div>

                    {/* PRICE + CTA */}
                    <motion.div
                        variants={item}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 pt-6 will-change-transform"
                    >
                        <h1 className="text-3xl md:text-3xl font-bold text-gray-900">
                            ₦75,000  <span className='text-sm font-light'>/ Lifetime Access</span>
                        </h1>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="bg-[#F97A0B] basis-1/2 hover:bg-orange-600 transition-colors text-white px-8 py-3 rounded-xl font-medium will-change-transform cursor-pointer"
                        >
                            Purchase Course
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

/* STAT CARD */
function Stat({ icon: Icon, value, label, colorIconBg }: any) {
    return (
        <motion.div
            variants={statVariants}
            className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 will-change-transform"
        >
            <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${colorIconBg}`}>
                <Icon size={20} />
            </div>
            <div>
                <p className="text-xl font-semibold text-gray-900">{value}</p>
                <p className="text-sm text-gray-500">{label}</p>
            </div>
        </motion.div>
    )
}