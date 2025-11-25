"use client"

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useTransition } from 'react'
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const languages = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇬🇧" },
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
            <span className="mr-2 text-lg">{lang.flag}</span>
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
