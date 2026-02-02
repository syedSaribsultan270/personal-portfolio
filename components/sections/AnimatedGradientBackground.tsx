"use client"

export function AnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Subtle noise texture for depth */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" /%3E%3C/svg%3E")' }} />
      
      {/* Simple accent dots - PostHog style */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-[#F9BD2B] rounded-full opacity-40" />
      <div className="absolute bottom-40 left-40 w-3 h-3 bg-[#F9BD2B] rounded-full opacity-30" />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#F9BD2B] rounded-full opacity-20" />
    </div>
  )
}
