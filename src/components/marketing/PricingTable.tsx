import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { siteConfig } from "@/app/siteConfig"
import Link from "next/link"
import { cx } from "@/lib/utils"

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaText: string
}

interface PricingTableProps {
  tiers: PricingTier[]
}

export function PricingTable({ tiers }: PricingTableProps) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          className={cx(
            "relative",
            tier.highlighted &&
              "ring-2 ring-brand-primary dark:ring-brand-primary",
          )}
        >
          {tier.highlighted && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-white dark:bg-brand-primary">
                Most Popular
              </span>
            </div>
          )}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              {tier.name}
            </h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-900 dark:text-gray-50">
                {tier.price}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                /month
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {tier.description}
            </p>
          </div>
          <ul className="mt-8 space-y-4">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start text-sm">
                <span className="mr-2 flex-shrink-0 text-brand-primary dark:text-brand-primary">
                  ✓
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href={siteConfig.links.signup}>
              <Button
                variant={tier.highlighted ? "primary" : "secondary"}
                className="w-full"
              >
                {tier.ctaText}
              </Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  )
}

