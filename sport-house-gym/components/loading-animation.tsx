"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (you can remove this in production and use real loading state)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  // Simplified animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  const logoVariants = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  const progressVariants = {
    initial: { width: "0%" },
    animate: {
      width: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          key="loading-screen"
        >
          <div className="flex flex-col items-center z-10">
            {/* Logo animation */}
            <motion.div variants={logoVariants} className="mb-8">
              <Image
                src="/images/sport-house-logo.png"
                alt="Sport House"
                width={300}
                height={80}
                className="h-auto w-64 drop-shadow-[0_0_15px_rgba(141,198,63,0.8)]"
              />
            </motion.div>

            {/* Progress bar */}
            <div className="relative w-64 h-2 bg-gray-800 rounded-full overflow-hidden mt-12">
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary rounded-full shadow-[0_0_10px_rgba(141,198,63,0.8)]"
                variants={progressVariants}
              />
            </div>

            {/* Text */}
            <motion.p
              className="mt-6 text-gray-400 font-medium tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              LOADING YOUR FITNESS JOURNEY...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
