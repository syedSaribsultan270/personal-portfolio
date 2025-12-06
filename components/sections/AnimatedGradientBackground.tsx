"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface Blob {
  id: number
  x: number
  y: number
  color: string
  size: number
  baseX: number
  baseY: number
}

export function AnimatedGradientBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  const [blobs] = useState<Blob[]>([
    { id: 1, x: 0, y: 0, baseX: 20, baseY: 20, color: "bg-purple-300/30 dark:bg-purple-800/20", size: 384 },
    { id: 2, x: 0, y: 0, baseX: 70, baseY: 30, color: "bg-blue-300/30 dark:bg-blue-800/20", size: 400 },
    { id: 3, x: 0, y: 0, baseX: 40, baseY: 70, color: "bg-pink-300/30 dark:bg-pink-800/20", size: 368 },
    { id: 4, x: 0, y: 0, baseX: 80, baseY: 60, color: "bg-cyan-300/30 dark:bg-cyan-800/20", size: 352 },
  ])

  const [blobPositions, setBlobPositions] = useState(blobs.map(b => ({ x: 0, y: 0 })))

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    const unsubscribeX = smoothMouseX.on("change", (latestX) => {
      const latestY = smoothMouseY.get()
      
      setBlobPositions(blobs.map(blob => {
        const blobX = (blob.baseX / 100) * window.innerWidth
        const blobY = (blob.baseY / 100) * window.innerHeight
        
        const dx = latestX - blobX
        const dy = latestY - blobY
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        const repelRadius = 300
        const repelStrength = 80
        
        if (distance < repelRadius && distance > 0) {
          const force = (1 - distance / repelRadius) * repelStrength
          const angle = Math.atan2(dy, dx)
          return {
            x: -Math.cos(angle) * force,
            y: -Math.sin(angle) * force
          }
        }
        
        return { x: 0, y: 0 }
      }))
    })

    return () => unsubscribeX()
  }, [smoothMouseX, smoothMouseY, blobs])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {blobs.map((blob, index) => (
        <motion.div
          key={blob.id}
          className={`absolute rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl ${blob.color}`}
          style={{
            width: blob.size,
            height: blob.size,
            left: `${blob.baseX}%`,
            top: `${blob.baseY}%`,
            x: blobPositions[index]?.x || 0,
            y: blobPositions[index]?.y || 0,
          }}
          animate={{
            x: [
              blobPositions[index]?.x || 0,
              (blobPositions[index]?.x || 0) + Math.sin(Date.now() / 1000 + index) * 30,
              blobPositions[index]?.x || 0,
            ],
            y: [
              blobPositions[index]?.y || 0,
              (blobPositions[index]?.y || 0) + Math.cos(Date.now() / 1000 + index) * 30,
              blobPositions[index]?.y || 0,
            ],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
