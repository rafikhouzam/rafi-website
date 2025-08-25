import "../styles/globals.css";
import HashRedirector from "./HashRedirector";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SEOClient from "./SEOClient"; // client wrapper for next-seo (below)

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
        <SEOClient />
        <Nav />
        <main className="container py-10 md:py-14">{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
