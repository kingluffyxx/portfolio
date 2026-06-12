"use client"

import { usePathname } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const MOCKUP_ROUTE = /^\/(?:en\/)?realisations\/[^/]+$/

interface Props {
  children: React.ReactNode
}

export function SiteShell({ children }: Props) {
  const pathname = usePathname() ?? ""
  const isMockup = MOCKUP_ROUTE.test(pathname)

  if (isMockup) {
    return <main className="relative flex-1">{children}</main>
  }

  return (
    <>
      <div
        className="z-0 fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%)",
        }}
      />
      <Navbar />
      <main className="z-1 relative flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
