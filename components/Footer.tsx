export default function Footer() {
return (
<footer className="mt-16 border-t border-slate-200/70 dark:border-slate-800">
<div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
<div>© {new Date().getFullYear()} Rafi Khouzam</div>
<div className="flex items-center gap-4 opacity-80">
<a href="https://github.com/rafikhouzam" target="_blank" rel="noreferrer">GitHub</a>
<a href="https://www.linkedin.com/in/rafi-khouzam-413b73174/" target="_blank" rel="noreferrer">LinkedIn</a>
<a href="mailto:khouzamrafi@gmail.com">Email</a>
</div>
</div>
</footer>
)
}