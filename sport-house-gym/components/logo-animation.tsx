"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function LogoAnimation() {
  const [isAnimating, setIsAnimating] = useState(false)
  const logoRef = useRef<HTMLDivElement>(null)

  // Function to handle logo click
  const handleLogoClick = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      // Reset animation after it completes
      setTimeout(() => {
        setIsAnimating(false)
      }, 3000)
    }
  }

  // Generate particles for explosion effect
  const generateParticles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      angle: (i / count) * 360,
      distance: 100 + Math.random() * 150,
      size: 5 + Math.random() * 15,
      delay: Math.random() * 0.2,
      duration: 0.8 + Math.random() * 1,
      color: i % 3 === 0 ? "#8DC63F" : i % 3 === 1 ? "#ffffff" : "#333333",
    }))
  }

  const particles = generateParticles(40)

  return (
    <div className="relative inline-block" ref={logoRef}>
      {/* Clickable logo */}
      <div className="cursor-pointer relative z-10" onClick={handleLogoClick}>
        <Image src="/images/sport-house-logo.png" alt="Sport House" width={180} height={50} className="h-10 w-auto" />
      </div>

      {/* Animation overlay */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="fixed inset-0 z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background flash */}
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                times: [0, 0.1, 1],
                ease: "easeOut",
              }}
            />

            {/* Center logo explosion */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{
                  scale: [0.5, 1.8, 1],
                  opacity: [0, 1, 1, 0],
                  rotateY: [0, 360],
                  rotateX: [0, 45, 0, -45, 0],
                }}
                transition={{
                  duration: 2.5,
                  times: [0, 0.3, 0.6, 1],
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <Image
                  src="/images/sport-house-logo.png"
                  alt="Sport House"
                  width={400}
                  height={120}
                  className="h-auto w-auto drop-shadow-[0_0_30px_rgba(141,198,63,1)]"
                />
              </motion.div>
            </div>

            {/* Particle explosion */}
            <div className="absolute inset-0 flex items-center justify-center">
              {particles.map((particle) => (
                <motion.div
                  key={`particle-${particle.id}`}
                  className="absolute rounded-full"
                  style={{
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: particle.color,
                  }}
                  initial={{
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    x: Math.cos(particle.angle * (Math.PI / 180)) * particle.distance,
                    y: Math.sin(particle.angle * (Math.PI / 180)) * particle.distance,
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                    rotate: Math.random() * 360,
                  }}
                  transition={{
                    duration: particle.duration,
                    delay: particle.delay,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>

            {/* Text elements flying in */}
            <div className="absolute inset-0 flex items-center justify-center">
              {["STRENGTH", "POWER", "ENDURANCE", "DISCIPLINE", "FOCUS"].map((text, i) => (
                <motion.div
                  key={`text-${i}`}
                  className="absolute text-primary font-bold text-2xl md:text-4xl"
                  initial={{
                    x: i % 2 === 0 ? -1000 : 1000,
                    opacity: 0,
                    rotate: i % 2 === 0 ? -30 : 30,
                  }}
                  animate={{
                    x: 0,
                    opacity: [0, 1, 0],
                    rotate: 0,
                    scale: [1, 1.2, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.3 + i * 0.15,
                    ease: "easeOut",
                  }}
                >
                  {text}
                </motion.div>
              ))}
            </div>

            {/* Circular rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`ring-${i}`}
                  className="absolute rounded-full border-4 border-primary"
                  initial={{
                    width: 0,
                    height: 0,
                    opacity: 0.8,
                  }}
                  animate={{
                    width: [0, (i + 1) * 300],
                    height: [0, (i + 1) * 300],
                    opacity: [0.8, 0],
                    borderWidth: [8, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2 * i,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>

            {/* Grid lines */}
            <div className="absolute inset-0">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={`h-line-${i}`}
                  className="absolute left-0 right-0 h-px bg-primary/50"
                  style={{ top: `${i * 10}vh` }}
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: [0, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.05 * i,
                    ease: "easeOut",
                  }}
                />
              ))}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={`v-line-${i}`}
                  className="absolute top-0 bottom-0 w-px bg-primary/50"
                  style={{ left: `${i * 10}vw` }}
                  initial={{ scaleY: 0 }}
                  animate={{
                    scaleY: [0, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.05 * i,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>

            {/* Final flash */}
            <motion.div
              className="absolute inset-0 bg-primary"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 0.8,
                delay: 2,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
