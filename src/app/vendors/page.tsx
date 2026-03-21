import type { Metadata } from "next";
import ServiceCategoryCard from "@/components/ServiceCategoryCard";

export const metadata: Metadata = {
  title: "Vendor Categories | Babcock Ranch Homeowner Guide",
  description: "Browse our curated vendor categories for Babcock Ranch homeowners. From landscaping to home security, we're building a directory of trusted local service providers.",
  openGraph: {
    title: "Vendor Categories | Babcock Ranch Homeowner Guide",
    description: "Browse our curated vendor categories for Babcock Ranch homeowners. From landscaping to home security, we're building a directory of trusted local service providers.",
    url: "https://babcockranchhomeownerguide.com/vendors",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/vendors",
  },
};

export default function VendorsPage() {
  const vendorCategories = [
    {
      title: "Landscaping & Lawn Care",
      description: "Lawn maintenance, landscape design, tree services, irrigation systems, and outdoor living spaces tailored for Florida's climate.",
      href: "/vendors/landscaping",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    },
    {
      title: "Pool Services",
      description: "Pool cleaning, maintenance, repairs, equipment installation, and pool renovation services to keep your pool in perfect condition.",
      href: "/vendors/pool",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    },
    {
      title: "HVAC & Air Conditioning",
      description: "AC installation, repair, maintenance, duct cleaning, and indoor air quality solutions for Florida's hot and humid climate.",
      href: "/vendors/hvac",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>,
    },
    {
      title: "Pest Control",
      description: "Termite protection, mosquito control, general pest management, and wildlife removal services for Florida homes.",
      href: "/vendors/pest-control",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
    },
    {
      title: "Home Cleaning",
      description: "Regular housekeeping, deep cleaning, move-in/out cleaning, and specialized cleaning services for busy homeowners.",
      href: "/vendors/cleaning",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    },
    {
      title: "Handyman Services",
      description: "General repairs, furniture assembly, fixture installation, minor plumbing, and small home improvement projects.",
      href: "/vendors/handyman",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    },
    {
      title: "Home Security",
      description: "Security systems, surveillance cameras, smart home integration, monitoring services, and home automation solutions.",
      href: "/vendors/security",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    },
    {
      title: "Plumbing",
      description: "Plumbing repairs, installations, water heater services, leak detection, and drain cleaning for your home.",
      href: "/vendors/plumbing",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    },
    {
      title: "Electrical",
      description: "Electrical repairs, installations, panel upgrades, lighting design, and home electrical safety inspections.",
      href: "/vendors/electrical",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    },
    {
      title: "Flooring",
      description: "Hardwood, tile, carpet, laminate, and luxury vinyl installation, refinishing, and repair services.",
      href: "/vendors/flooring",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    },
    {
      title: "Painting",
      description: "Interior and exterior painting, cabinet refinishing, wallpaper removal, and decorative finishes.",
      href: "/vendors/painting",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    },
    {
      title: "Window Treatments",
      description: "Blinds, shutters, shades, curtains, and custom window treatment design and installation.",
      href: "/vendors/window-treatments",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
    },
    {
      title: "Real Estate Agents",
      description: "Babcock Ranch real estate specialists who understand new construction, solar homes, and this unique community.",
      href: "/vendors/real-estate",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Vendors</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Curated Vendor Categories
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              We're building a comprehensive directory of trusted local service providers 
              for Babcock Ranch homeowners. Browse our categories below.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendorCategories.map((category, index) => (
              <ServiceCategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <div className="bg-amber-50 rounded-xl p-8 border border-amber-100">
            <svg className="w-12 h-12 text-amber-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-stone-800 mb-3">
              Vendor Directory Coming Soon
            </h2>
            <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
              We're actively curating and vetting local service providers to include in our directory. 
              Each vendor will be carefully selected based on their reputation, quality of work, 
              and commitment to serving Babcock Ranch homeowners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/request-a-service" 
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-700 text-white font-medium rounded-lg hover:bg-emerald-800 transition-colors"
              >
                Request a Service Now
              </a>
              <a 
                href="/homeowner-checklist" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-stone-700 font-medium rounded-lg border border-stone-300 hover:bg-stone-50 transition-colors"
              >
                Get Free Resources
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
