"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Image from "next/image"

interface EnhancedPageTransitionProps {
  children: React.ReactNode
}

export default function EnhancedPageTransition({ children }: EnhancedPageTransitionProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prevPathname, setPrevPathname] = useState<string | null>(null)

  // Trigger transition on path change
  useEffect(() => {
    if (prevPathname !== pathname && prevPathname !== null) {
      setIsTransitioning(true)

      // Reset transition state after animation completes
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 1500) // Animation duration

      return () => clearTimeout(timer)
    }

    setPrevPathname(pathname)
  }, [pathname, prevPathname])

  // Generate random positions for floating elements
  const generateRandomElements = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 10 + Math.random() * 40,
      delay: Math.random() * 0.5,
      duration: 0.8 + Math.random() * 1.2,
    }))
  }

  const randomElements = generateRandomElements(20)

  // SVG paths for animated icons
  const dumbbellPath =
    "M17 5c-1.1 0-2 .9-2 2v.101A5.002 5.002 0 0 0 12 12a5.002 5.002 0 0 0 3 4.899V17c0 1.1.9 2 2 2s2-.9 2-2v-3h3v3c0 1.1.9 2 2 2s2-.9 2-2v-.101A5.002 5.002 0 0 0 29 12a5.002 5.002 0 0 0-3-4.899V7c0-1.1-.9-2-2-2s-2 .9-2 2v3h-3V7c0-1.1-.9-2-2-2zm0 2h5v3c0 1.1.9 2 2 2s2-.9 2-2a3 3 0 0 1 0 6c-1.1 0-2-.9-2-2s-.9-2-2-2h-5c-1.1 0-2 .9-2 2a3 3 0 0 1 0-6c1.1 0 2 .9 2 2z"

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="page-transition"
            className="fixed inset-0 z-50 overflow-hidden pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3, delay: 1.2 } }}
          >
            {/* Background gradient animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-black via-primary to-black"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                background: [
                  "linear-gradient(to right, #000000, #8DC63F, #000000)",
                  "linear-gradient(to right, #8DC63F, #000000, #8DC63F)",
                  "linear-gradient(to right, #000000, #8DC63F, #000000)",
                  "linear-gradient(to right, #8DC63F, #000000, #8DC63F)",
                ],
              }}
              transition={{
                duration: 1.5,
                times: [0, 0.3, 0.7, 1],
                ease: "easeInOut",
              }}
            />

            {/* Center logo explosion */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{
                  scale: [0, 1.5, 1],
                  rotate: [-20, 20, 0],
                  filter: ["blur(10px)", "blur(0px)", "blur(0px)"],
                }}
                transition={{
                  duration: 1,
                  times: [0, 0.6, 1],
                  ease: "easeOut",
                }}
                className="relative"
              >
                <Image
                  src="/images/sport-house-logo.png"
                  alt="Sport House"
                  width={300}
                  height={80}
                  className="h-auto w-64 drop-shadow-[0_0_25px_rgba(141,198,63,0.9)]"
                />
              </motion.div>
            </div>

            {/* Animated dumbbell icons */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`dumbbell-${i}`}
                  className="absolute text-primary"
                  initial={{
                    x: "50%",
                    y: "50%",
                    scale: 0,
                    opacity: 0,
                    rotate: Math.random() * 180 - 90,
                  }}
                  animate={{
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    scale: [0, 1.5, 1],
                    opacity: [0, 1, 0],
                    rotate: [Math.random() * 180 - 90, Math.random() * 360 - 180],
                  }}
                  transition={{
                    duration: 1.2 + Math.random() * 0.5,
                    delay: 0.2 + i * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <svg viewBox="0 0 40 24" className="w-16 h-16">
                    <motion.path
                      d={dumbbellPath}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                    />
                  </svg>
                </motion.div>
              ))}
            </div>

            {/* Random floating elements */}
            {randomElements.map((el) => (
              <motion.div
                key={`element-${el.id}`}
                className="absolute rounded-full bg-primary"
                style={{
                  left: `${el.x}%`,
                  top: `${el.y}%`,
                  width: `${el.size}px`,
                  height: `${el.size}px`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                }}
                transition={{
                  duration: el.duration,
                  delay: el.delay,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Text reveal */}
            <div className="absolute bottom-[20%] left-0 right-0 flex justify-center">
              <motion.div
                className="overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.div
                  className="text-white text-2xl font-bold whitespace-nowrap"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  UNLEASH YOUR POTENTIAL
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content */}
      <div className="w-full">{children}</div>
    </>
  )
}
