import Link from "next/link"
import { personalInfo } from "@/lib/data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-zinc-900 dark:border-zinc-700 bg-[#EBE6DC] dark:bg-[#252525]">
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
            <h4 className="font-mono text-xs font-bold mb-3 text-zinc-900 dark:text-zinc-100">
              📁 Navigation
            </h4>
            <ul className="space-y-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
              <li><Link href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">about.mdx</Link></li>
              <li><Link href="/work" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">work.mdx</Link></li>
              <li><Link href="/services" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">services.mdx</Link></li>
              <li><Link href="/contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">contact.mdx</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold mb-3 text-zinc-900 dark:text-zinc-100">
              🔗 /dev/social
            </h4>
            <ul className="space-y-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
              <li><a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">LinkedIn ↗</a></li>
              <li><a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">GitHub ↗</a></li>
              <li><a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">X (Twitter) ↗</a></li>
              <li><a href={personalInfo.social.behance} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Behance ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="text-center text-sm text-zinc-600 dark:text-zinc-400 space-y-3">
            <p className="font-mono text-xs">© {currentYear} {personalInfo.name}. All rights reserved.</p>
            <p className="text-xs italic text-zinc-500 dark:text-zinc-500">
              Built with Next.js, Tailwind, Framer Motion, and an unhealthy amount of coffee ☕<br/>
              <span className="font-mono text-[10px]">*This portfolio is eco-friendly and cannot be installed via CD-ROM</span>
            </p>
            <div className="flex items-center justify-center gap-2 text-xs">
              <span className="text-zinc-400 dark:text-zinc-600">Thanks for being visitor number</span>
              <span className="font-mono bg-[#F9BD2B] text-zinc-900 px-3 py-1 rounded font-bold border-2 border-zinc-900 text-sm">42,069</span>
            </div>
            <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 pt-2">
              💾 Last compiled: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
