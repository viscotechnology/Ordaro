import { Card } from "@/components/ui/Card"

interface StatCardProps {
  value: string
  label: string
  description?: string
}

export function StatCard({ value, label, description }: StatCardProps) {
  return (
    <Card className="text-center">
      <div className="text-4xl font-bold text-brand-primary dark:text-brand-primary">
        {value}
      </div>
      <div className="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-50">
        {label}
      </div>
      {description && (
        <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
          {description}
        </div>
      )}
    </Card>
  )
}

