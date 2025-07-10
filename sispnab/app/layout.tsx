import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SYSTEM_CONFIG } from "@/lib/config"

export const metadata: Metadata = {
  title: SYSTEM_CONFIG.fullName,
  description: SYSTEM_CONFIG.longDescription,
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
