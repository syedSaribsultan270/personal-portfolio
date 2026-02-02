"use client"

import { useEffect, useRef } from "react"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Dot grid settings
    const dotSpacing = 30
    const dotRadius = 1.5
    const glowRadius = 400
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw dots
      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          const dx = mousePos.current.x - x
          const dy = mousePos.current.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Calculate opacity based on distance from cursor with smooth feathering
          let opacity = 0.12
          if (distance < glowRadius) {
            // Easing function for smoother falloff (quadratic easing out)
            const normalizedDistance = distance / glowRadius
            const intensity = 1 - (normalizedDistance * normalizedDistance)
            opacity = 0.12 + intensity * 0.7
          }

          // Draw dot with cursor-based glow
          ctx.beginPath()
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2)
          
          if (distance < glowRadius) {
            // Glow effect near cursor - PostHog yellow
            const intensity = 1 - distance / glowRadius
            ctx.fillStyle = `rgba(249, 189, 43, ${opacity})`
          } else {
            // Regular dots - subtle gray
            ctx.fillStyle = `rgba(100, 100, 100, ${opacity})`
          }
          
          ctx.fill()
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.4 }}
      />
      
      {/* Static accent dots for non-JS fallback */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-[#F9BD2B] rounded-full opacity-40" />
      <div className="absolute bottom-40 left-40 w-3 h-3 bg-[#F9BD2B] rounded-full opacity-30" />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#F9BD2B] rounded-full opacity-20" />
    </div>
  )
}
