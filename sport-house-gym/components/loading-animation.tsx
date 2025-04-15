"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Dumbbell, Activity, Clock, Zap, Trophy } from "lucide-react"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check if this is the first visit
    const visited = localStorage.getItem("hasVisitedSportHouse")

    if (!visited) {
      // First visit - show animation and set flag
      setIsLoading(true)

      // Set the flag immediately to prevent future showings
      localStorage.setItem("hasVisitedSportHouse", "true")

      // Hide animation after a short time
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 3000)

      // Safety timeout - force hide after 5 seconds no matter what
      const safetyTimer = setTimeout(() => {
        setIsLoading(false)
      }, 5000)

      return () => {
        clearTimeout(timer)
        clearTimeout(safetyTimer)
      }
    }
  }, [])

  // Generate particles for the background
  const generateParticles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 3 + Math.random() * 8,
      delay: Math.random() * 2,
      duration: 1 + Math.random() * 3,
    }))
  }

  const particles = generateParticles(30)

  // Fitness icons for the animation
  const fitnessIcons = [
    { icon: Dumbbell, delay: 0 },
    { icon: Activity, delay: 0.2 },
    { icon: Clock, delay: 0.4 },
    { icon: Zap, delay: 0.6 },
    { icon: Trophy, delay: 0.8 },
  ]

  // Words that will be animated
  const fitnessWords = ["STRENGTH", "POWER", "ENDURANCE", "FOCUS", "RESULTS"]

  // If not loading, don't render anything
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        animate={{
          background: [
            "linear-gradient(to bottom right, #000000, #111111, #000000)",
            "linear-gradient(to bottom right, #111111, #000000, #111111)",
            "linear-gradient(to bottom right, #000000, #111111, #000000)",
          ],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />

      {/* Animated particles in background */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
      ))}

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Animated logo text */}
        <motion.div
          className="text-5xl md:text-7xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-primary">SPORT</span> HOUSE
        </motion.div>

        {/* Animated fitness icons */}
        <div className="flex justify-center gap-4 md:gap-8 mb-12">
          {fitnessIcons.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={`icon-${index}`}
                initial={{ scale: 0, rotate: -30 }}
                animate={{
                  scale: [0, 1.2, 1],
                  rotate: [-30, 30, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: item.delay,
                  ease: "easeOut",
                }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full blur-xl opacity-30"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <Icon className="w-10 h-10 md:w-16 md:h-16 text-primary relative z-10" />
              </motion.div>
            )
          })}
        </div>

        {/* Animated fitness words */}
        <div className="h-8 md:h-12 mb-12 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -240, -240, 0],
            }}
            transition={{
              duration: 4,
              times: [0, 0.4, 0.9, 1],
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            {fitnessWords.map((word, index) => (
              <motion.div
                key={`word-${index}`}
                className="h-8 md:h-12 flex items-center justify-center text-xl md:text-3xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {word}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Animated progress bar */}
        <div className="w-64 md:w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        </div>

        {/* Pulsing text */}
        <motion.p
          className="mt-6 text-gray-400 text-sm md:text-base font-medium tracking-wider"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          UNLEASH YOUR POTENTIAL
        </motion.p>
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute left-0 right-0 h-px bg-primary"
            style={{ top: `${i * 10}vh` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: 1,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 3,
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`v-line-${i}`}
            className="absolute top-0 bottom-0 w-px bg-primary"
            style={{ left: `${i * 10}vw` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{
              scaleY: 1,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 3,
            }}
          />
        ))}
      </div>

      {/* Final flash effect */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0] }}
        transition={{
          duration: 0.8,
          delay: 1.7,
          ease: "easeInOut",
        }}
      />

      {/* Emergency exit button */}
      <button
        onClick={() => setIsLoading(false)}
        className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-md z-50"
      >
        Skip Animation
      </button>
    </div>
  )
}
