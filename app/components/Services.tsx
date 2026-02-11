import React from 'react'
import { motion } from 'motion/react'
import { serviceLIst } from '@/lib/utils'


const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
}

function Services() {
    return (

        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-wrap bg-gray-100 p-8 justify-center text-center gap-6"
        >
            {serviceLIst.map((service, index) => (
                <motion.div
                    key={index}
                    variants={cardVariants}
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
        hover:scale-105
        transition-transform
        duration-300
      "
                >
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`mb-4 flex items-center justify-center w-16 h-16 rounded-full ${service.bgColor}`}
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