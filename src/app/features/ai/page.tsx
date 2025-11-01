import { Divider } from "@/components/ui/Divider"
import {
  RiWhatsappLine,
  RiRobotLine,
  RiSearchLine,
  RiShieldCheckLine,
  RiBarChartBoxLine,
} from "@remixicon/react"

const aiFeatures = [
  {
    title: "WhatsApp Business Integration",
    description:
      "Customers can place orders directly through WhatsApp using natural language. Our AI understands order requests, clarifies preferences, and processes orders automatically with 90%+ accuracy.",
    icon: <RiWhatsappLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Natural language order processing",
      "Multi-language support",
      "Automated order confirmation",
      "Payment link generation",
      "Order status updates via WhatsApp",
      "Customer support chatbot",
    ],
  },
  {
    title: "AI Agent Orchestrator",
    description:
      "Intelligent routing and processing of customer messages across platforms. The AI agent understands context, manages conversations, and coordinates with backend systems.",
    icon: <RiRobotLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Multi-platform message routing",
      "Conversation context management",
      "Intent recognition and classification",
      "Automated responses",
      "Human handoff when needed",
      "Learning from interactions",
    ],
  },
  {
    title: "Customer Verification System",
    description:
      "Secure customer verification using phone numbers, email, or social accounts. Cross-company search to identify existing customers and maintain order history.",
    icon: <RiShieldCheckLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Multi-channel verification",
      "Phone number verification",
      "Email verification",
      "Social account linking",
      "Cross-company customer search",
      "Identity management",
    ],
  },
  {
    title: "Cross-Company Search Engine",
    description:
      "Powerful search engine that finds customers across all restaurants on the platform. Enables seamless customer experience and data insights.",
    icon: <RiSearchLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Fast customer lookup",
      "Privacy-compliant search",
      "Order history aggregation",
      "Preference learning",
      "Recommendation engine",
      "Network effect benefits",
    ],
  },
  {
    title: "AI Business Insights",
    description:
      "Get AI-powered recommendations for menu optimization, pricing strategies, and operational improvements based on your sales data and industry trends.",
    icon: <RiBarChartBoxLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Menu performance analysis",
      "Pricing optimization suggestions",
      "Demand forecasting",
      "Customer behavior insights",
      "Revenue optimization",
      "Operational efficiency recommendations",
    ],
  },
]

export default function AIFeaturesPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-50">
            AI-Powered Ordering Platform
          </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Transform how customers interact with your restaurant. Accept
              orders through WhatsApp with natural language
              processing and intelligent order management. <strong>Full AI features launching January 10th, 2025.</strong>
            </p>
        </div>

        <Divider className="my-16" />

        <div className="space-y-24">
          {aiFeatures.map((feature, index) => (
            <div key={feature.title}>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="mb-4 flex size-14 items-center justify-center rounded-lg bg-brand-primary/20 dark:bg-brand-primary/20">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                    Key Features:
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {feature.features.map((item) => (
                      <li
                        key={item}
                        className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="mr-2 flex-shrink-0 text-brand-primary dark:text-brand-primary">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < aiFeatures.length - 1 && <Divider className="mt-16" />}
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-lg bg-brand-primary/10 p-8 dark:bg-brand-primary/5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
              AI Features Launching January 10th
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Full AI-powered ordering will be available at launch. Try our MVP at chainpos.live now 
              or join the waitlist.
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

