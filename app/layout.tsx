import type React from "react"
import type { Metadata } from "next"
import { Lora, Quicksand } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Analytics } from "@vercel/analytics/react"

// Using Lora font
const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: '--font-lora',
})

// Quicksand font
const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: '--font-quicksand',
})

export const metadata: Metadata = {
  title: "Harmony - AI-Powered Therapy-Coaching Platform",
  description: "Harmony is an AI-powered IFS therapy platform combining emotional intelligence with therapeutic expertise to enhance well-being through supporting your mental health and facilitating personal growth.",
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
      <body className={`${quicksand.className} ${lora.variable} ${quicksand.variable} antialiased`}>
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
