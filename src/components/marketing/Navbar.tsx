"use client"

import { Button } from "@/components/ui/Button"
import { siteConfig } from "@/app/siteConfig"
import {
  RiMenuLine,
  RiCloseLine,
  RiSunLine,
  RiMoonLine,
} from "@remixicon/react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    { name: "Features", href: "#features", submenu: [
      { name: "POS Features", href: "/features/pos" },
      { name: "AI Features", href: "/features/ai" },
      { name: "Delivery", href: "/features/delivery" },
    ]},
    { name: "Pricing", href: "/pricing" },
    { name: "Integrations", href: "/integrations" },
    { name: "Solutions", href: "/solutions" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/ordarologo.png"
              alt="Ordaro Logo"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-brand-primary dark:text-brand-primary">
              Ordaro
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-brand-primary dark:text-gray-300 dark:hover:text-brand-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <RiSunLine className="size-5" />
              ) : (
                <RiMoonLine className="size-5" />
              )}
            </button>
          )}
          <Link href={siteConfig.links.signin}>
            <Button variant="ghost" className="text-sm">
              Sign In
            </Button>
          </Link>
          <Link href={siteConfig.links.signup}>
            <Button variant="primary" className="text-sm">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 lg:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <RiSunLine className="size-5" />
              ) : (
                <RiMoonLine className="size-5" />
              )}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <RiCloseLine className="size-6" />
            ) : (
              <RiMenuLine className="size-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-950">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 space-y-2 border-t border-gray-200 pt-4 dark:border-gray-800">
              <Link
                href={siteConfig.links.signin}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href={siteConfig.links.signup}
                className="block rounded-md bg-brand-primary px-3 py-2 text-center text-base font-medium text-white hover:bg-brand-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

