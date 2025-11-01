"use client"

import { Button } from "@/components/ui/Button"
import { siteConfig } from "@/app/siteConfig"
import { GlobalNetwork } from "@/components/marketing/GlobalNetwork"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-50">
            AI-Powered POS for Modern Restaurants
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Transform your restaurant operations with Ordaro Cloud POS. Accept
            orders via WhatsApp, manage inventory in real-time, and
            optimize delivery with AI-powered coordination. <strong>Currently in MVP stage - Full launch January 10th, 2026.</strong> Built for scale with
            sub-200ms response times and 99.9% uptime.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href={siteConfig.links.signup}>
              <Button variant="primary" size="lg" className="px-8 py-3 text-base">
                Try MVP Now
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="secondary" size="lg" className="px-8 py-3 text-base">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <GlobalNetwork />
      </div>
    </section>
  )
}

