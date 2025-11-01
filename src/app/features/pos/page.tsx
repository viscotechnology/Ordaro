import { Divider } from "@/components/ui/Divider"
import {
  RiRestaurantLine,
  RiShoppingCartLine,
  RiDatabaseLine,
  RiMoneyDollarCircleLine,
  RiUserLine,
  RiNotificationLine,
  RiBarChartBoxLine,
  RiCalculatorLine,
  RiTimeLine,
  RiUserStarLine,
  RiShieldUserLine,
  RiBuilding2Line,
  RiGitBranchLine,
  RiTeamLine,
} from "@remixicon/react"

const posModules = [
  {
    title: "Menu Management",
    description:
      "Create and manage comprehensive menus with categories, modifiers, and pricing tiers. Support for multiple languages, dietary information, and allergen warnings. Easy menu updates with version control and scheduled changes.",
    icon: <RiRestaurantLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Category management with nested subcategories",
      "Item modifiers and customizations",
      "Dynamic pricing and promotional pricing",
      "Multi-language support",
      "Dietary tags and allergen information",
      "Menu versioning and scheduling",
    ],
  },
  {
    title: "Order Management",
    description:
      "Real-time order processing with full lifecycle tracking. Integrate with kitchen display systems, manage order queues, and handle multiple order types seamlessly.",
    icon: <RiShoppingCartLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Real-time order status tracking",
      "Kitchen display system integration",
      "Order queue management",
      "Dine-in, takeout, and delivery support",
      "Order history and analytics",
      "Split bills and table management",
    ],
  },
  {
    title: "Inventory Management",
    description:
      "Track stock levels in real-time with automated updates. Set low-stock alerts, manage suppliers, track costs, and generate inventory reports.",
    icon: <RiDatabaseLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Real-time stock level tracking",
      "Automated inventory updates from sales",
      "Low-stock alerts and notifications",
      "Supplier management",
      "Cost tracking and profit margins",
      "Inventory valuation reports",
    ],
  },
  {
    title: "Payment Processing",
    description:
      "Accept multiple payment methods securely. Integrated with major payment gateways, support for cash, cards, mobile money, and digital wallets.",
    icon: <RiMoneyDollarCircleLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Multiple payment gateway integrations",
      "Cash, card, and mobile money support",
      "Digital wallet integration",
      "Refund and void transaction handling",
      "Payment reconciliation",
      "PCI DSS compliant",
    ],
  },
  {
    title: "Customer Management",
    description:
      "Build comprehensive customer profiles with order history, preferences, and loyalty tracking. Manage customer communication and personalized promotions.",
    icon: <RiUserLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Customer profile management",
      "Order history tracking",
      "Loyalty program support",
      "Customer preferences and notes",
      "Personalized promotions",
      "Customer communication tools",
    ],
  },
  {
    title: "Company Management",
    description:
      "Multi-tenant architecture allowing restaurants to manage their organization settings, branding, and configurations at the company level.",
    icon: <RiBuilding2Line className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Organization-wide settings",
      "Branding and customization",
      "Multi-location support",
      "Centralized billing",
      "Company-level reporting",
      "Admin user management",
    ],
  },
  {
    title: "Branch Management",
    description:
      "Manage multiple restaurant locations from a single platform. Configure branch-specific settings, menus, and operational parameters.",
    icon: <RiGitBranchLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Multiple branch support",
      "Branch-specific menus and pricing",
      "Location-based settings",
      "Cross-branch reporting",
      "Branch performance comparison",
      "Centralized management",
    ],
  },
  {
    title: "User Management",
    description:
      "Comprehensive user management with role-based access control. Assign permissions, manage teams, and track user activity.",
    icon: <RiTeamLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Role-based access control (RBAC)",
      "User permission management",
      "Team and department organization",
      "Activity logging and audit trails",
      "Multi-factor authentication",
      "User onboarding workflows",
    ],
  },
  {
    title: "Notifications",
    description:
      "Real-time notification system for orders, inventory alerts, system notifications, and customer communications across multiple channels.",
    icon: <RiNotificationLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Real-time order notifications",
      "Low stock alerts",
      "SMS and email integration",
      "Push notifications",
      "WhatsApp notifications",
      "Customizable notification rules",
    ],
  },
  {
    title: "Reporting & Analytics",
    description:
      "Comprehensive business intelligence with sales reports, profit analysis, customer insights, and AI-powered recommendations for optimization.",
    icon: <RiBarChartBoxLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Sales and revenue reports",
      "Profit and loss analysis",
      "Customer behavior insights",
      "Product performance analytics",
      "AI-powered recommendations",
      "Custom report builder",
    ],
  },
  {
    title: "Expense Management",
    description:
      "Track operational expenses, manage budgets, categorize spending, and generate expense reports for better financial planning and control.",
    icon: <RiCalculatorLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Expense tracking and categorization",
      "Budget management",
      "Receipt capture and storage",
      "Expense approval workflows",
      "Financial reporting",
      "Cost analysis by category",
    ],
  },
  {
    title: "Shift Management",
    description:
      "Schedule staff shifts efficiently, track shift hours, manage break times, and automate shift assignments based on demand forecasts.",
    icon: <RiTimeLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Shift scheduling and planning",
      "Shift swap and coverage management",
      "Break time tracking",
      "Demand-based scheduling",
      "Labor cost optimization",
      "Shift performance metrics",
    ],
  },
  {
    title: "Attendance",
    description:
      "Monitor staff attendance with clock-in/out functionality, track working hours, manage time-off requests, and generate attendance reports.",
    icon: <RiUserStarLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Clock in/out tracking",
      "Working hours calculation",
      "Time-off request management",
      "Attendance reports",
      "Late arrival and absence tracking",
      "Payroll integration",
    ],
  },
  {
    title: "Authentication & Security",
    description:
      "Enterprise-grade authentication and security features. Multi-factor authentication, single sign-on, and comprehensive audit logging.",
    icon: <RiShieldUserLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Multi-factor authentication (MFA)",
      "Single sign-on (SSO)",
      "Role-based permissions",
      "Audit logging",
      "Data encryption at rest and in transit",
      "GDPR and compliance ready",
    ],
  },
]

export default function POSFeaturesPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-50">
            Complete POS Solution
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Everything you need to run your restaurant efficiently. 14 powerful
            modules designed for modern food service operations. <strong>Full feature set launching January 10th, 2025.</strong> 
            Try our MVP at chainpos.live now.
          </p>
        </div>

        <Divider className="my-16" />

        <div className="space-y-24">
          {posModules.map((module, index) => (
            <div key={module.title}>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="mb-4 flex size-14 items-center justify-center rounded-lg bg-brand-primary/20 dark:bg-brand-primary/20">
                    {module.icon}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                    {module.title}
                  </h2>
                  <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-400">
                    {module.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                    Key Features:
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {module.features.map((feature) => (
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
                </div>
              </div>
              {index < posModules.length - 1 && (
                <Divider className="mt-16" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-lg bg-brand-primary/10 p-8 dark:bg-brand-primary/5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
              Launching January 10th, 2025
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Try our MVP at chainpos.live now, or join the waitlist for the full launch 
              with all 14 POS modules.
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

