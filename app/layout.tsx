import "@/styles/globals.css"
import TProvider from "@/components/Providers/ThemeSwitcher"
import { SiteHeader } from "@/components/site-header"

export const metadata = {
  title: "Next Template",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="font-Operator">
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50">
        <TProvider>
          <SiteHeader />
          {children}
        </TProvider>
      </body>
    </html>
  )
}
