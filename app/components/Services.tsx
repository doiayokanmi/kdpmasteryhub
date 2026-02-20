'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { serviceLIst } from '@/lib/utils'

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
}

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 20 
    },
    show: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94]
        },
    },
}

function Services() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
            className="flex flex-wrap bg-gray-100 p-8 justify-center text-center gap-6"
        >
            {serviceLIst.map((service, index) => (
                <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="
                        basis-full
                        sm:basis-[45%]
                        md:basis-[30%]
                        lg:basis-[18%]
                        flex
                        justify-center
                        items-center
                        flex-col
                        border
                        rounded-xl
                        p-6
                        shadow-lg
                        bg-white
                        will-change-transform
                        cursor-pointer
                    "
                >
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ 
                            duration: 0.6, 
                            ease: "easeInOut"
                        }}
                        className={`mb-4 flex items-center justify-center w-16 h-16 rounded-full ${service.bgColor} will-change-transform`}
                    >
                        <service.icon
                            size={32}
                            strokeWidth={1.5}
                            className={service.iconColor}
                        />
                    </motion.div>

                    <h2 className="text-xl font-bold mb-2 text-gray-800">
                        {service.title}
                    </h2>
                    <p className="text-gray-600 whitespace-normal break-words">
                        {service.description}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default Services