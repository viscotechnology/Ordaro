import { FeatureCard } from "@/components/marketing/FeatureCard"
import { Divider } from "@/components/ui/Divider"
import {
  RiRestaurantLine,
  RiSchoolLine,
  RiBuilding2Line,
  RiGitMergeLine,
  RiTeamLine,
  RiDatabaseLine,
} from "@remixicon/react"

const solutions = [
  {
    id: "restaurants",
    title: "Restaurants & Food Service",
    description:
      "Perfect for independent restaurants, cafes, food trucks, and quick-service establishments. Manage everything from orders to inventory in one platform.",
    icon: <RiRestaurantLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Complete POS system",
      "Menu and order management",
      "Inventory tracking",
      "Customer relationship management",
      "Real-time reporting",
      "Multi-payment support",
    ],
    useCases: [
      "Independent restaurants",
      "Cafes and coffee shops",
      "Food trucks and pop-ups",
      "Quick-service restaurants",
      "Bars and nightclubs",
    ],
  },
  {
    id: "campus",
    title: "Campus Deployment",
    description:
      "Ideal for university campuses, corporate cafeterias, and institutional food service. Network effects create better experiences for both students and vendors.",
    icon: <RiSchoolLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Multi-vendor marketplace",
      "Campus-wide ordering",
      "Student meal plan integration",
      "Centralized billing",
      "Network effect benefits",
      "Scalable infrastructure",
    ],
    useCases: [
      "University campuses",
      "Corporate cafeterias",
      "Hospital food service",
      "School districts",
      "Institutional dining",
    ],
    stats: [
      { value: "65,000+", label: "Students", description: "KNUST Campus" },
      { value: "8,000+", label: "Staff", description: "Faculty & Employees" },
      { value: "25+", label: "Restaurants", description: "Partner Vendors" },
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise & Multi-Location",
    description:
      "Built for restaurant chains, franchises, and large food service operations. Multi-tenant architecture supports unlimited branches with centralized management.",
    icon: <RiBuilding2Line className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Multi-location support",
      "Centralized management",
      "Cross-location reporting",
      "Franchise management",
      "White-label options",
      "Dedicated support",
    ],
    useCases: [
      "Restaurant chains",
      "Franchise operations",
      "Food service groups",
      "Hotel restaurants",
      "Multi-concept brands",
    ],
  },
]

const architectureFeatures = [
  {
    title: "Multi-Tenant Architecture",
    description:
      "Each restaurant operates independently while sharing infrastructure. Complete data isolation with shared resources for optimal performance.",
    icon: <RiDatabaseLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
  {
    title: "Branch Management",
    description:
      "Manage multiple locations from a single dashboard. Configure branch-specific settings while maintaining centralized control.",
    icon: <RiGitMergeLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
  {
    title: "Network Effects",
    description:
      "More restaurants on the platform mean better customer experiences. Cross-restaurant insights and unified customer profiles create competitive advantages.",
    icon: <RiTeamLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
]

export default function SolutionsPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-50">
            Solutions for Every Restaurant
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Whether you're a single location or a multi-location chain, Ordaro
            scales with your business. Built for modern food service operations. 
            <strong> Full launch January 10th, 2025.</strong> Currently in MVP stage - try it at chainpos.live.
          </p>
        </div>

        <Divider className="my-16" />

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <div key={solution.id} id={solution.id}>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="mb-4 flex size-14 items-center justify-center rounded-lg bg-brand-primary/20 dark:bg-brand-primary/20">
                    {solution.icon}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                    {solution.title}
                  </h2>
                  <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-400">
                    {solution.description}
                  </p>
                  {solution.stats && (
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {solution.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-2xl font-bold text-brand-primary dark:text-brand-primary">
                            {stat.value}
                          </div>
                          <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                            {stat.label}
                          </div>
                          {stat.description && (
                            <div className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                              {stat.description}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                    Key Features:
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="mr-2 flex-shrink-0 text-brand-primary dark:text-brand-primary">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <h3 className="mt-6 text-sm font-semibold text-gray-900 dark:text-gray-50">
                    Ideal For:
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {solution.useCases.map((useCase) => (
                      <li
                        key={useCase}
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        • {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < solutions.length - 1 && (
                <Divider className="mt-16" />
              )}
            </div>
          ))}
        </div>

        <Divider className="my-24" />

        <div>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-50">
              Scalable Architecture
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Built for scale with enterprise-grade infrastructure and
              multi-tenant architecture.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {architectureFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-lg bg-brand-primary/10 p-8 dark:bg-brand-primary/5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
              Launching January 10th, 2025
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Try our MVP at chainpos.live now or join the waitlist for the full launch 
              with all enterprise features.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="https://chainpos.live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-secondary dark:bg-brand-primary dark:hover:bg-brand-secondary"
              >
                Try MVP Now
              </a>
              <a
                href="/"
                className="inline-flex items-center rounded-md border border-brand-primary bg-white px-6 py-3 text-sm font-semibold text-brand-primary shadow-sm hover:bg-brand-primary/10 dark:border-brand-primary dark:bg-gray-900 dark:text-brand-primary"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

