import { Divider } from "@/components/ui/Divider"
import {
  RiTruckLine,
  RiMapPinLine,
  RiRouteLine,
  RiRobotLine,
  RiNotificationLine,
  RiBarChartBoxLine,
} from "@remixicon/react"

const deliveryFeatures = [
  {
    title: "Rider Management",
    description:
      "Comprehensive rider management system to onboard, track, and manage delivery personnel. Monitor rider performance, availability, and earnings.",
    icon: <RiTruckLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Rider onboarding and verification",
      "Real-time availability tracking",
      "Performance metrics",
      "Earnings management",
      "Rating and review system",
      "Multi-restaurant support",
    ],
  },
  {
    title: "Real-Time GPS Tracking",
    description:
      "Track deliveries in real-time with live GPS updates. Customers and restaurants can see rider location and estimated delivery time.",
    icon: <RiMapPinLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Live GPS tracking",
      "Route visualization",
      "Estimated delivery time",
      "Customer notifications",
      "Location history",
      "Geofencing support",
    ],
  },
  {
    title: "AI Route Optimization",
    description:
      "Intelligent route optimization using AI algorithms to minimize delivery time and distance. Optimizes for multiple deliveries and traffic conditions.",
    icon: <RiRouteLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Multi-delivery route optimization",
      "Traffic-aware routing",
      "Distance minimization",
      "Time-based optimization",
      "Dynamic route adjustment",
      "Cost optimization",
    ],
  },
  {
    title: "AI Delivery Coordination",
    description:
      "AI-powered system automatically assigns orders to riders based on proximity, availability, and performance metrics. Optimizes for speed and efficiency.",
    icon: <RiRobotLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Automatic rider assignment",
      "Proximity-based matching",
      "Load balancing",
      "Performance-based routing",
      "Priority order handling",
      "Fault tolerance and rerouting",
    ],
  },
  {
    title: "Delivery Notifications",
    description:
      "Automated notification system keeps customers informed throughout the delivery process. SMS, email, and push notifications for status updates.",
    icon: <RiNotificationLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Order confirmation",
      "Rider assignment notification",
      "Rider en route updates",
      "Delivery arrival alerts",
      "Delivery completion confirmation",
      "Multi-channel notifications",
    ],
  },
  {
    title: "Delivery Analytics",
    description:
      "Comprehensive analytics for delivery performance, rider efficiency, customer satisfaction, and operational insights. Identify optimization opportunities.",
    icon: <RiBarChartBoxLine className="size-6 text-brand-primary dark:text-brand-primary" />,
    features: [
      "Average delivery time tracking",
      "Rider performance metrics",
      "Customer satisfaction scores",
      "Route efficiency analysis",
      "Cost per delivery",
      "Predictive analytics",
    ],
  },
]

export default function DeliveryFeaturesPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-50">
            Intelligent Delivery System
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            AI-coordinated delivery with real-time GPS tracking, route
            optimization, and automated rider assignment. Deliver faster with
            smarter logistics. <strong>Full delivery system launching January 10th, 2025.</strong>
          </p>
        </div>

        <Divider className="my-16" />

        <div className="space-y-24">
          {deliveryFeatures.map((feature, index) => (
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
              {index < deliveryFeatures.length - 1 && (
                <Divider className="mt-16" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-lg bg-brand-primary/10 p-8 dark:bg-brand-primary/5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
              Delivery System Launching January 10th
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Full delivery coordination features will be available at launch. Try our MVP at chainpos.live now.
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

