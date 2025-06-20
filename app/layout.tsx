import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Quicksand } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Analytics } from "@vercel/analytics/react"

// Apercu font with all variants
const apercu = localFont({
  src: [
    {
      path: '../public/apercu/Apercu Pro Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/apercu/Apercu Pro Light Italic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/apercu/Apercu Pro Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/apercu/Apercu Pro Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/apercu/Apercu Pro Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/apercu/Apercu Pro Medium Italic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/apercu/Apercu Pro Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/apercu/Apercu Pro Bold Italic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-apercu',
})

// Apercu Mono for code blocks
const apercuMono = localFont({
  src: '../public/apercu/Apercu Pro Mono.otf',
  display: 'swap',
  variable: '--font-apercu-mono',
})

// Quicksand font for logo
const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: '--font-quicksand',
})

export const metadata: Metadata = {
  title: "Harmony: AI Therapist (IFS) & Mental Health Platform",
  description: "Harmony is an AI therapist trained in modalities such as Internal Family Systems (IFS), and a mental health educational platform.",
  icons: {
    icon: "/favicon.ico", 
    apple: "/favicon.ico", 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${apercu.className} ${apercu.variable} ${apercuMono.variable} ${quicksand.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
