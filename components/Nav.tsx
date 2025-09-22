'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const links = [
{ href: '/', label: 'Home' },
{ href: '/blog', label: 'Blog' },
{ href: '/resume', label: 'Resume' },
{ href: '/portfolio', label: 'Portfolio' },
{ href: '/work', label: 'Work With Me' }
]

export default function Nav() {
const pathname = usePathname()
return (
<header className="border-b border-slate-200/70 dark:border-slate-800">
<nav className="container h-14 flex items-center justify-between">
<Link href="/" className="font-semibold">Rafi Khouzam</Link>
<ul className="flex items-center gap-4 text-sm">
{links.map((l) => (
<li key={l.href}>
<Link href={l.href} className={`hover:underline ${pathname === l.href ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>{l.label}</Link>
</li>
))}
</ul>
</nav>
</header>
)
}