import { Hero } from "@/components/marketing/Hero"
import { FeatureCard } from "@/components/marketing/FeatureCard"
import { Button } from "@/components/ui/Button"
import { siteConfig } from "./siteConfig"
import Link from "next/link"
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
  RiWhatsappLine,
  RiTruckLine,
  RiRobotLine,
} from "@remixicon/react"

const posModules = [
  {
    title: "Menu Management",
    description:
      "Create, update, and manage your restaurant menu with categories, modifiers, and pricing. Support for multiple languages and dietary information.",
    icon: <RiRestaurantLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
  {
    title: "Order Management",
    description:
      "Real-time order processing with status tracking, kitchen display integration, and order history. Handle dine-in, takeout, and delivery orders.",
    icon: <RiShoppingCartLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
  {
    title: "Inventory Management",
    description:
      "Track stock levels in real-time, set low-stock alerts, manage suppliers, and automate inventory updates based on sales.",
    icon: <RiDatabaseLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
  {
    title: "Payment Processing",
    description:
      "Accept multiple payment methods including cash, card, mobile money, and digital wallets. Integrated with major payment gateways.",
    icon: <RiMoneyDollarCircleLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
  {
    title: "Customer Management",
    description:
      "Build customer profiles, track order history, manage loyalty programs, and send personalized promotions.",
    icon: <RiUserLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
  {
    title: "Notifications",
    description:
      "Real-time notifications for orders, low stock, and system alerts. Integrate with SMS, email, and push notifications.",
    icon: <RiNotificationLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
  {
    title: "Reporting & Analytics",
    description:
      "Comprehensive business intelligence with sales reports, profit analysis, customer insights, and AI-powered recommendations.",
    icon: <RiBarChartBoxLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
  {
    title: "Expense Management",
    description:
      "Track operational expenses, manage budgets, categorize spending, and generate expense reports for financial planning.",
    icon: <RiCalculatorLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
  {
    title: "Shift Management",
    description:
      "Schedule staff shifts, track shift hours, manage break times, and automate shift assignments based on demand.",
    icon: <RiTimeLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
  {
    title: "Attendance",
    description:
      "Monitor staff attendance with clock-in/out functionality, track working hours, and generate attendance reports.",
    icon: <RiUserStarLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
]

const aiFeatures = [
  {
    title: "WhatsApp Ordering",
    description:
      "Customers can place orders via WhatsApp using natural language. Our AI understands order requests and processes them automatically.",
    icon: <RiWhatsappLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
  {
    title: "AI Delivery Coordination",
    description:
      "Intelligent delivery routing and rider assignment. AI optimizes routes in real-time for faster deliveries and better customer experience.",
    icon: <RiTruckLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
  {
    title: "AI Business Insights",
    description:
      "Get AI-powered recommendations for menu optimization, pricing strategies, and operational improvements based on your data.",
    icon: <RiRobotLine className="size-6 text-brand-primary dark:text-brand-primary" />,
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* POS Features Section */}
      <section id="features" className="bg-white py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-50">
              Complete POS Solution
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Everything you need to run your restaurant efficiently. 14 powerful
              modules designed for modern food service operations.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {posModules.map((module) => (
              <FeatureCard
                key={module.title}
                title={module.title}
                description={module.description}
                icon={module.icon}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/features/pos">
              <Button variant="secondary">View All POS Features</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="bg-gray-50 py-24 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-50">
              AI-Powered Ordering
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Accept orders through WhatsApp. Our AI understands
              natural language and processes orders with 90%+ accuracy.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {aiFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/features/ai">
              <Button variant="secondary">Explore AI Features</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Delivery System Section */}
      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-50">
              Smart Delivery System
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              AI-coordinated delivery with real-time GPS tracking, route
              optimization, and automated rider assignment.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            <FeatureCard
              title="Rider Management"
              description="Comprehensive rider management system to onboard, track, and manage delivery personnel efficiently."
              icon={<RiTruckLine className="size-6 text-brand-primary dark:text-brand-primary" />}
            />
            <FeatureCard
              title="Real-Time GPS Tracking"
              description="Track deliveries in real-time with live GPS updates. Customers can see rider location and estimated delivery time."
              icon={<RiTruckLine className="size-6 text-brand-primary dark:text-brand-primary" />}
            />
            <FeatureCard
              title="Route Optimization"
              description="Intelligent route optimization using AI algorithms to minimize delivery time and distance."
              icon={<RiTruckLine className="size-6 text-brand-primary dark:text-brand-primary" />}
            />
          </div>
          <div className="mt-12 text-center">
            <Link href="/features/delivery">
              <Button variant="secondary">Learn About Delivery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Launch Section */}
      <section className="bg-gray-50 py-24 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-50">
              Launching January 10th, 2025
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              We're currently in MVP stage, building the future of restaurant technology. 
              Join us for the full launch and be among the first restaurants to experience 
              AI-powered ordering and intelligent delivery coordination.
            </p>
            <div className="mt-8 rounded-lg bg-brand-primary/10 p-8 dark:bg-brand-primary/5">
              <p className="text-base text-gray-700 dark:text-gray-300">
                <strong>Early Access:</strong> Try our MVP at{" "}
                <a 
                  href="https://chainpos.live" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:underline font-semibold"
                >
                  chainpos.live
                </a>
                {" "}and help shape the future of Ordaro Cloud POS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-16 dark:bg-brand-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for Launch on January 10th?
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/90">
              Join the waitlist for early access. Try our MVP now at chainpos.live or 
              wait for the full launch with all features. No credit card required.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href={siteConfig.links.signup}>
                <Button variant="secondary" size="lg" className="px-8 py-3 text-base">
                  Try MVP Now
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="light"
                  size="lg"
                  className="px-8 py-3 text-base text-white hover:bg-brand-primary"
                >
                  Join Waitlist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

