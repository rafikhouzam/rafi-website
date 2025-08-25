import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next"
import HashRedirector from "./HashRedirector";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rafi Khouzam — Data Engineer & Builder",
  description: "Data Engineer building fast, traceable data tools and analytics.",
  metadataBase: new URL("https://rafikhouzam.com"),
  openGraph: {
    title: "Rafi Khouzam — Data Engineer & Builder",
    description: "Portfolio, blog, and resume.",
    type: "website",
    url: "https://rafikhouzam.com",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[url('/terrazo_background.svg')] bg-no-repeat bg-cover bg-fixed">
        <div className="min-h-screen bg-white/85 dark:bg-slate-950/80">
        <HashRedirector />
        <Nav />
        <main className="container py-10 md:py-14">{children}</main>
        <Footer />
        <Analytics />
        </div>
      </body>
    </html>
  );
}
