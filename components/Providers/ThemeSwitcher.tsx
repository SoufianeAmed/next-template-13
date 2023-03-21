"use client"

import { ThemeProvider } from "next-themes"

import { Toaster } from "@/components/ui/toaster"

export default function TProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster />
        {children}
      </ThemeProvider>
    </>
  )
}
