import Link from "next/link"
import { siteConfig } from "@/app/siteConfig"

export function Footer() {
  const footerLinks = {
    product: [
      { name: "POS Features", href: "/features/pos" },
      { name: "AI Features", href: "/features/ai" },
      { name: "Delivery", href: "/features/delivery" },
      { name: "Pricing", href: "/pricing" },
    ],
    solutions: [
      { name: "Restaurants", href: "/solutions#restaurants" },
      { name: "Campus Deployment", href: "/solutions#campus" },
      { name: "Enterprise", href: "/solutions#enterprise" },
    ],
    integrations: [
      { name: "WhatsApp", href: "/integrations#whatsapp" },
      { name: "Payment Gateways", href: "/integrations#payments" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Documentation", href: "https://docs.ordaro.com" },
    ],
  }

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Product
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-brand-primary dark:text-gray-400 dark:hover:text-brand-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-brand-primary dark:text-gray-400 dark:hover:text-brand-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Integrations
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.integrations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-brand-primary dark:text-gray-400 dark:hover:text-brand-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-brand-primary dark:text-gray-400 dark:hover:text-brand-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 transition-colors hover:text-brand-primary dark:text-gray-400 dark:hover:text-brand-primary"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 transition-colors hover:text-brand-primary dark:text-gray-400 dark:hover:text-brand-primary"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

