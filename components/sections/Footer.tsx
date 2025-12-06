import Link from "next/link"
import { personalInfo } from "@/lib/data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-3 text-zinc-900 dark:text-zinc-100">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
              {personalInfo.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</Link></li>
              <li><Link href="/work" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Work</Link></li>
              <li><Link href="/services" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">LinkedIn</a></li>
              <li><a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">GitHub</a></li>
              <li><a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Twitter</a></li>
              <li><a href={personalInfo.social.behance} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
