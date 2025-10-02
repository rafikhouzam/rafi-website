'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'


const links = [
{ href: '/', label: 'Home' },
{ href: '/blog', label: 'Blog' },
{ href: '/experience', label: 'Experience' },
{ href: '/portfolio', label: 'Portfolio' },
{ href: '/work', label: 'Work With Me' }
]

export default function Nav() {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
    <div className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="container mx-auto px-4 flex items-center justify-between py-3">
        <Link href="/" className="font-monaco font-semibold tracking-tight">
          Rafi Khouzam
        </Link>
        <ul className="flex items-center gap-4 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`nav-link ${pathname === l.href ? "nav-link-active" : "nav-link-default"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}