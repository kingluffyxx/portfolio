"use client"

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// SVG Flag Components
const FrFlag = () => (
  <svg width="20" height="15" viewBox="0 0 640 480" className="inline-block">
    <path fill="#fff" d="M0 0h640v480H0z"/>
    <path fill="#002654" d="M0 0h213.3v480H0z"/>
    <path fill="#ED2939" d="M426.7 0H640v480H426.7z"/>
  </svg>
)

const GbFlag = () => (
  <svg width="20" height="15" viewBox="0 0 640 480" className="inline-block">
    <path fill="#012169" d="M0 0h640v480H0z"/>
    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
    <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
  </svg>
)

export function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()
  const startTransition = useTransition()[1]

  const languages = [
    { code: "fr", label: "Français", flag: <FrFlag /> },
    { code: "en", label: "English", flag: <GbFlag /> },
  ]

  const currentLanguage = languages.find((lang) => lang.code === locale)

  const switchLanguage = (newLocale: string) => {
    startTransition(() => {
      // Set a cookie to store the locale preference
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
      // Refresh the page to apply the new locale
      router.refresh()
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative transition-all hover:scale-110 hover:bg-primary/10"
        >
          <Globe className="h-[1.2rem] w-[1.2rem] transition-transform group-hover:rotate-12" />
          <span className="absolute -top-1 -right-1 text-xs transition-transform hover:scale-125">
            {currentLanguage?.flag}
          </span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[160px] animate-in fade-in-0 zoom-in-95 space-y-1"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={`cursor-pointer transition-colors ${
              locale === lang.code
                ? "bg-primary/10 text-primary"
                : "hover:bg-primary/10 hover:text-primary"
            }`}
          >
            <span className="mr-2">{lang.flag}</span>
            <span className="flex-1">{lang.label}</span>
            {locale === lang.code && (
              <span className="ml-2 text-primary font-bold animate-in zoom-in-50">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
