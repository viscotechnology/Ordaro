import { Divider } from "@/components/ui/Divider"
import {
  RiWhatsappLine,
  RiBankCardLine,
  RiShoppingBagLine,
  RiBarChartBoxLine,
  RiCustomerServiceLine,
} from "@remixicon/react"

const integrations = [
  {
    title: "WhatsApp Business API",
    description:
      "Integrate with WhatsApp Business API to accept orders directly through WhatsApp. Our AI processes natural language orders with 90%+ accuracy.",
    icon: <RiWhatsappLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Official WhatsApp Business API integration",
      "Natural language order processing",
      "Automated order confirmation",
      "Payment link generation",
      "Order status updates",
      "Multi-language support",
    ],
    status: "Available",
  },
  {
    title: "Payment Gateways",
    description:
      "Accept payments through multiple payment gateways including mobile money, credit cards, and digital wallets. PCI DSS compliant processing.",
    icon: <RiBankCardLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "MTN Mobile Money",
      "Vodafone Cash",
      "AirtelTigo Money",
      "Credit/Debit cards (Visa, Mastercard)",
      "Digital wallets",
      "Cash payment support",
    ],
    status: "Available",
  },
  {
    title: "E-commerce Platforms",
    description:
      "Connect with popular e-commerce platforms to sync products, inventory, and orders. Manage online and offline sales from one system.",
    icon: <RiShoppingBagLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Shopify integration",
      "WooCommerce sync",
      "Inventory synchronization",
      "Order management",
      "Product catalog sync",
      "Multi-channel selling",
    ],
    status: "Coming Soon",
  },
  {
    title: "Analytics & BI Tools",
    description:
      "Export data to popular analytics platforms and business intelligence tools. Connect with data warehouses for advanced analysis.",
    icon: <RiBarChartBoxLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Google Analytics integration",
      "Data warehouse exports",
      "API access for custom integrations",
      "Webhook support",
      "Real-time data streaming",
      "Custom report builder",
    ],
    status: "Available",
  },
  {
    title: "Customer Support Tools",
    description:
      "Integrate with customer support platforms to provide seamless customer service. Sync tickets, conversations, and customer data.",
    icon: <RiCustomerServiceLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Help desk integration",
      "Live chat widgets",
      "Customer data sync",
      "Ticket management",
      "Support analytics",
      "Multi-channel support",
    ],
    status: "Coming Soon",
  },
]

export default function IntegrationsPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-50">
            Integrations & Connections
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Connect Ordaro with your favorite tools and platforms. Expand your
            restaurant's capabilities with seamless integrations. <strong>Full integrations launching January 10th, 2025.</strong>
          </p>
        </div>

        <Divider className="my-16" />

        <div className="space-y-16">
          {integrations.map((integration, index) => (
            <div key={integration.title}>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-lg bg-brand-primary/20 dark:bg-brand-primary/20">
                      {integration.icon}
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        integration.status === "Available"
                          ? "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-400"
                      }`}
                    >
                      {integration.status}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                    {integration.title}
                  </h2>
                  <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-400">
                    {integration.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                    Features:
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {integration.features.map((feature) => (
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
              {index < integrations.length - 1 && (
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
              Full integrations will be available at launch. Try our MVP at chainpos.live now 
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

