"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "📁 home.mdx", path: "/", icon: "📁" },
  { name: "📁 about.mdx", path: "/about", icon: "📁" },
  { name: "📁 work.mdx", path: "/work", icon: "📁" },
  { name: "📁 services.mdx", path: "/services", icon: "📁" },
  { name: "📬 contact.mdx", path: "/contact", icon: "📬" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1E8]/95 backdrop-blur-sm border-b-2 border-zinc-900 dark:bg-[#1a1a1a]/95 dark:border-zinc-700"
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100 hover:text-[#F9BD2B] transition-colors">
            💻 sarib.dev
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "font-mono text-xs transition-all hover:scale-105",
                  pathname === item.path
                    ? "text-zinc-900 dark:text-zinc-100 font-bold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link 
            href="/contact"
            className="hidden md:block px-4 py-2 bg-[#F9BD2B] hover:bg-[#f5b01a] text-zinc-900 font-mono text-xs font-bold rounded-md transition-all hover:scale-105 shadow-sm border-2 border-zinc-900"
          >
            Hire me → 
          </Link>

          <div className="md:hidden">
            <button className="text-zinc-600 dark:text-zinc-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
