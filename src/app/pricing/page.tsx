import { PricingTable } from "@/components/marketing/PricingTable"
import { Divider } from "@/components/ui/Divider"
import { Card } from "@/components/ui/Card"

const pricingTiers = [
  {
    name: "Starter",
    price: "GHS 290",
    description: "Perfect for small restaurants getting started",
    features: [
      "Up to 2 branches",
      "Basic POS features",
      "Menu management",
      "Order management",
      "Basic reporting",
      "Email support",
      "Up to 10 users",
    ],
    ctaText: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "GHS 790",
    description: "For growing restaurants with multiple locations",
    features: [
      "Up to 10 branches",
      "All POS features",
      "AI ordering (WhatsApp)",
      "Inventory management",
      "Advanced analytics",
      "Priority support",
      "Up to 50 users",
      "Custom integrations",
    ],
    highlighted: true,
    ctaText: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large chains and franchise operations",
    features: [
      "Unlimited branches",
      "All features included",
      "AI ordering (WhatsApp)",
      "Advanced delivery system",
      "Dedicated account manager",
      "24/7 support",
      "Unlimited users",
      "White-label options",
      "Custom development",
    ],
    ctaText: "Contact Sales",
  },
]

const addOns = [
  {
    name: "WhatsApp Business API",
    price: "GHS 100/month",
    description:
      "Enable AI-powered ordering through WhatsApp. Includes natural language processing and automated order management.",
  },
  {
    name: "Advanced Delivery System",
    price: "GHS 200/month",
    description:
      "AI-coordinated delivery with GPS tracking, route optimization, and rider management for up to 20 riders.",
  },
  {
    name: "Additional Branch",
    price: "GHS 150/month",
    description:
      "Add more branches to your account. Includes all POS features for the additional location.",
  },
]

export default function PricingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-50">
            Pricing Coming January 10th
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            We're finalizing our pricing plans. Full pricing details will be available at launch. 
            Try our MVP for free now at chainpos.live.
          </p>
        </div>

        <div className="mt-16 rounded-lg bg-brand-primary/10 p-12 dark:bg-brand-primary/5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
              Launch Date: January 10th, 2025
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Full pricing and features will be announced at launch. 
              Preview pricing structure below (subject to change).
            </p>
          </div>
          <div className="mt-12">
            <PricingTable tiers={pricingTiers} />
          </div>
        </div>

        <Divider className="my-16" />

        <div>
          <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-50">
            Add-Ons & Integrations
          </h2>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
            Enhance your plan with additional features and integrations
          </p>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
            {addOns.map((addon) => (
              <Card key={addon.name}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                      {addon.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {addon.description}
                    </p>
                  </div>
                  <div className="ml-4 text-right">
                    <div className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                      {addon.price}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Divider className="my-16" />

        <div className="rounded-lg bg-gray-50 p-8 dark:bg-gray-800">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
              Enterprise Pricing
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Need a custom solution? Contact our sales team for enterprise
              pricing and custom integrations.
            </p>
            <div className="mt-6">
              <a
                href="mailto:sales@ordaro.com"
                className="inline-flex items-center rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary dark:bg-brand-primary dark:hover:bg-brand-primary"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>

        <Divider className="my-16" />

        <div>
          <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-50">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                Can I change plans later?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Yes, you can upgrade or downgrade your plan at any time.
                Changes take effect immediately, and we'll prorate any
                difference.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                What payment methods do you accept?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                We accept all major credit cards, mobile money (MTN, Vodafone,
                AirtelTigo), and bank transfers. Enterprise customers can
                arrange invoicing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                Is there a setup fee?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                No setup fees for Starter and Professional plans. Enterprise
                plans may include setup fees depending on customization
                requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                Do you offer discounts for annual plans?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Yes, annual plans receive a 15% discount. Contact sales for
                multi-year agreements and custom pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

