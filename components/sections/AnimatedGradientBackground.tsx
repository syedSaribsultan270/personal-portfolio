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
    const dotSpacing = 25
    const dotRadius = 2
    const glowRadius = 180
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw dots
      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          const dx = mousePos.current.x - x
          const dy = mousePos.current.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Calculate opacity based on distance from cursor
          let opacity = 0.35
          let radius = dotRadius
          
          if (distance < glowRadius) {
            const intensity = 1 - distance / glowRadius
            opacity = 0.4 + intensity * 0.6
            radius = dotRadius + intensity * 1.5
          }

          // Draw dot with cursor-based glow
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          
          if (distance < glowRadius) {
            // Glow effect near cursor - PostHog yellow with extra brightness
            const intensity = 1 - distance / glowRadius
            ctx.fillStyle = `rgba(249, 189, 43, ${opacity})`
            
            // Add glow halo for extra luminance
            if (intensity > 0.5) {
              ctx.shadowColor = 'rgba(249, 189, 43, 0.6)'
              ctx.shadowBlur = 8
            }
          } else {
            // Regular dots - darker for more contrast
            ctx.fillStyle = `rgba(60, 60, 60, ${opacity})`
            ctx.shadowBlur = 0
          }
          
          ctx.fill()
          ctx.shadowBlur = 0
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
        style={{ opacity: 0.7 }}
      />
    </div>
  )
}
