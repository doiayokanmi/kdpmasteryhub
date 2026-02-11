'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Video, Clock, Users, FileText } from 'lucide-react'

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' as const },
    },
}

export default function CourseHighlight() {
    return (
        <section className="bg-white px-4 py-16 sm:px-8 md:px-12">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2"
            >
                {/* LEFT: IMAGE */}
                <motion.div variants={item} className="relative">
                    <div className="overflow-hidden rounded-2xl shadow-xl">
                        <Image
                            src="/course-preview.jpg"
                            alt="Amazon KDP Course"
                            width={800}
                            height={500}
                            className="object-cover w-full h-full"
                        />
                    </div>

                <p className='mt-12 text-gray-600'>
                    This course is designed to guide you from a complete beginner to a published author on Amazon KDP.
                </p>


                </motion.div>

                {/* RIGHT: CONTENT */}
                <motion.div variants={container} className="space-y-4">
                    <motion.p variants={item} className="text-sm font-medium text-blue-600">
                        COURSE HIGHLIGHT
                    </motion.p>

                    <motion.h2
                        variants={item}
                        className="text-3xl md:text-4xl font-bold text-gray-900"
                    >
                        From Zero to Published Author
                    </motion.h2>

                    <motion.p
                        variants={item}
                        className="text-gray-600 leading-relaxed"
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
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 pt-6"
                    >
                        <h1 className="text-3xl md:text-3xl font-bold text-gray-900">
                            ₦75,000  <span className='text-sm font-light'>/ Lifetime Access</span>
                        </h1>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#F97A0B] basis-1/2 hover:bg-orange-600 transition text-white px-8 py-3 rounded-xl font-medium"
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
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
            }}
            className="flex items-center gap-3 bg-gray-50 rounded-xl p-4"
        >
            <div className={`w-15 h-15 flex items-center justify-center rounded-lg ${colorIconBg}`}>
                <Icon size={20} />
            </div>
            <div>
                <p className="text-xl font-semibold text-gray-900">{value}</p>
                <p className="text-sm text-gray-500">{label}</p>
            </div>
        </motion.div>
    )
}
