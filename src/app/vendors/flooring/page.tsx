import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Best Flooring in Babcock Ranch | Hardwood, Tile & Carpet Installation FL",
  description: "Find the best flooring in Babcock Ranch, FL. Curated hardwood, tile, carpet, and vinyl flooring professionals. Request service today.",
  openGraph: {
    title: "Best Flooring in Babcock Ranch | Hardwood, Tile & Carpet Installation FL",
    description: "Find the best flooring in Babcock Ranch, FL. Curated professionals serving the community.",
    url: "https://babcockranchhomeownerguide.com/vendors/flooring",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/vendors/flooring",
  },
};

export default function FlooringPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Vendor Category</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Best Flooring in Babcock Ranch, FL
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Connect with expert flooring professionals who can transform your home with quality 
              hardwood, tile, carpet, and luxury vinyl installations.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-stone-600 leading-relaxed mb-6">
              Quality flooring is the foundation of your <strong>Babcock Ranch, Florida</strong> home's 
              aesthetic and functionality. The right flooring not only enhances your home's beauty but 
              also stands up to Florida's unique climate challenges—from high humidity and sandy soil 
              to the wear and tear of an active indoor-outdoor lifestyle. Whether you're building new, 
              renovating, or simply ready for an upgrade, choosing the right flooring and installation 
              professional is crucial.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For new homeowners in Babcock Ranch, flooring decisions often begin with upgrading 
              builder-grade materials or replacing flooring damaged during construction. Florida's 
              climate demands careful material selection—hardwoods must be properly acclimated, 
              moisture-resistant options like tile and luxury vinyl are popular choices, and carpet 
              selections must account for humidity and potential mold concerns.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Our curated directory connects you with the <strong>best local flooring professionals</strong> 
              serving the Babcock Ranch community. These experienced installers understand Florida's 
              specific flooring challenges and can guide you toward beautiful, durable solutions 
              perfect for your home and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Flooring Services We Recommend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hardwood Flooring",
                description: "Engineered and solid hardwood installation, including site-finished and pre-finished options.",
                icon: "🪵"
              },
              {
                title: "Tile Installation",
                description: "Ceramic, porcelain, and natural stone tile for floors, backsplashes, and bathrooms.",
                icon: "🔲"
              },
              {
                title: "Luxury Vinyl Plank",
                description: "Waterproof LVP and LVT installation—perfect for Florida's humidity and active families.",
                icon: "📐"
              },
              {
                title: "Carpet Installation",
                description: "Broadloom carpet and carpet tile installation with moisture-resistant padding options.",
                icon: "🧶"
              },
              {
                title: "Floor Refinishing",
                description: "Sanding, staining, and refinishing of existing hardwood floors to restore their beauty.",
                icon: "✨"
              },
              {
                title: "Custom Designs",
                description: "Inlays, borders, herringbone patterns, and custom flooring designs for unique spaces.",
                icon: "🎨"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-stone-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{service.title}</h3>
                <p className="text-stone-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">
                Why Choose a Babcock Ranch Flooring Professional
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Florida Climate Expertise",
                    description: "Understanding of humidity acclimation, moisture barriers, and Florida-appropriate materials."
                  },
                  {
                    title: "Quality Installation",
                    description: "Professional installation ensures warranties remain valid and floors last for decades."
                  },
                  {
                    title: "Local Showroom Access",
                    description: "View samples and get expert advice on materials that work best in Florida homes."
                  },
                  {
                    title: "Reliable Service",
                    description: "Local installers depend on community reputation and provide responsive follow-up service."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800">{benefit.title}</h3>
                      <p className="text-stone-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Best Flooring for Florida Homes</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Luxury Vinyl Plank:</strong> Waterproof, durable, and perfect for Florida humidity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Tile:</strong> Cool underfoot, extremely durable, ideal for wet areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Engineered Hardwood:</strong> More stable than solid wood in humid climates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Porcelain Wood-Look Tile:</strong> Combines beauty of wood with tile durability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Moisture-Resistant Carpet:</strong> For bedrooms with proper padding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-stone-50" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "How much does flooring installation cost in Babcock Ranch?",
                answer: "Costs vary by material: Luxury vinyl plank ($4-$8/sq ft installed), ceramic tile ($8-$15/sq ft), engineered hardwood ($8-$14/sq ft), carpet ($3-$7/sq ft), and solid hardwood ($10-$18/sq ft). Additional costs may include subfloor prep, removal of existing flooring, and furniture moving."
              },
              {
                question: "What's the best flooring for Florida's humidity?",
                answer: "Luxury vinyl plank (LVP) and tile are top choices for Florida homes. LVP is 100% waterproof and handles humidity beautifully. Tile stays cool underfoot and is extremely durable. Engineered hardwood is suitable if properly acclimated, while solid hardwood requires careful climate control."
              },
              {
                question: "How long does flooring installation take?",
                answer: "Most residential flooring projects take 2-5 days depending on square footage, material type, and preparation needs. Tile installation takes longer than vinyl or carpet. Your installer will provide a detailed timeline based on your specific project."
              },
              {
                question: "Should I install flooring before or after painting?",
                answer: "Generally, install flooring before painting. This allows painters to properly cover and protect your new floors, and touch up any minor scuffs that occur during installation. Some prefer painting first for new construction, but either order works with proper protection."
              },
              {
                question: "Do I need to acclimate flooring before installation in Florida?",
                answer: "Yes, acclimation is crucial in Florida's climate. Hardwood and engineered wood should acclimate 3-7 days. LVP requires less time (24-48 hours). Proper acclimation prevents expansion, contraction, and moisture-related issues after installation."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-stone-200" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="font-semibold text-stone-800 mb-3" itemProp="name">{faq.question}</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-stone-600" itemProp="text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Transform Your Home with Beautiful Flooring</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Connect with expert flooring professionals serving Babcock Ranch. 
              Get quotes for installation, refinishing, or complete flooring makeovers.
            </p>
            <ContactForm 
              title="Request Flooring Service"
              description="Tell us about your flooring project and we'll connect you with qualified local professionals."
              showServiceType={true}
              buttonText="Get Free Quotes"
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-2xl font-bold text-stone-800 mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog/flooring-florida-humidity" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Climate Guide</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Choosing Flooring for Florida's Humid Climate
                </h3>
              </div>
            </Link>
            <Link href="/blog/lvp-vs-hardwood" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Comparison</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Luxury Vinyl Plank vs. Hardwood: Which is Right for You?
                </h3>
              </div>
            </Link>
            <Link href="/blog/flooring-installation-timeline" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Planning</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  What to Expect During Flooring Installation
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
