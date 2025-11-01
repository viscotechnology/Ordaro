import { Card } from "@/components/ui/Card"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <Card>
      <p className="text-base leading-7 text-gray-900 dark:text-gray-50">
        &quot;{quote}&quot;
      </p>
      <div className="mt-4">
        <div className="font-semibold text-gray-900 dark:text-gray-50">
          {author}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {role}
          {company && ` at ${company}`}
        </div>
      </div>
    </Card>
  )
}

