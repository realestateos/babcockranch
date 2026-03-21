import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto container-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="font-semibold text-lg text-white">
                Babcock Ranch Guide
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Building a homeowner resource for Babcock Ranch residents. Curating local service categories, helpful tips, and community resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/articles" className="hover:text-emerald-400 transition-colors">
                  Homeowner Articles
                </Link>
              </li>
              <li>
                <Link href="/homeowner-checklist" className="hover:text-emerald-400 transition-colors">
                  New Homeowner Checklist
                </Link>
              </li>
              <li>
                <Link href="/vendors" className="hover:text-emerald-400 transition-colors">
                  Vendor Categories
                </Link>
              </li>
              <li>
                <Link href="/request-a-service" className="hover:text-emerald-400 transition-colors">
                  Request a Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-stone-400 text-sm mb-4">
              Join the guide for updates on new resources and curated vendor recommendations.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-stone-800 border border-stone-700 rounded-lg text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
            <p>
              © {currentYear} Babcock Ranch Homeowner Guide. All rights reserved.
            </p>
            <p className="text-center md:text-right">
              Launching soon: curated local vendor recommendations for Babcock Ranch homeowners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
