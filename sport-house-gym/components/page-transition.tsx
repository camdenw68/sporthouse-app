"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  // Simplified variants to avoid DOM conflicts
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.div initial="hidden" animate="show" exit="exit" variants={containerVariants} className="w-full">
      {/* Content with 3D perspective effect */}
      <motion.div
        className="w-full"
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
            scale: 0.98,
          },
          show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            },
          },
          exit: {
            opacity: 0,
            y: -20,
            scale: 0.98,
            transition: {
              duration: 0.4,
              ease: "easeIn",
            },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
