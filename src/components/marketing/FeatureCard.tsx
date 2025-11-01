import { Card } from "@/components/ui/Card"
import { ReactNode } from "react"
import { cx } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  icon?: ReactNode
  className?: string
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) {
  return (
    <Card className={cx("h-full transition-shadow hover:shadow-lg", className)}>
      {icon && (
        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-brand-primary/20 dark:bg-brand-primary/20">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </Card>
  )
}

