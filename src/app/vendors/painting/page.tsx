import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Best Painting in Babcock Ranch | Interior & Exterior Painting Services FL",
  description: "Find the best painting in Babcock Ranch, FL. Curated interior, exterior, and cabinet painting professionals. Request service today.",
  openGraph: {
    title: "Best Painting in Babcock Ranch | Interior & Exterior Painting Services FL",
    description: "Find the best painting in Babcock Ranch, FL. Curated professionals serving the community.",
    url: "https://babcockranchhomeownerguide.com/vendors/painting",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/vendors/painting",
  },
};

export default function PaintingPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Vendor Category</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Best Painting Services in Babcock Ranch, FL
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Connect with professional painters who can transform your home with flawless interior, 
              exterior, and cabinet refinishing services.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-stone-600 leading-relaxed mb-6">
              A professional paint job is one of the most transformative improvements you can make 
              to your <strong>Babcock Ranch, Florida</strong> home. Whether you're personalizing a 
              new construction home with colors that reflect your style, refreshing worn exterior 
              surfaces, or modernizing kitchen cabinets, quality painting delivers remarkable visual 
              impact and protects your investment from Florida's demanding climate.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For new homeowners in Babcock Ranch, painting is often one of the first projects on 
              the to-do list. Builder-grade paint finishes and limited color palettes leave plenty 
              of room for personalization. Additionally, Florida's intense sun, high humidity, and 
              frequent afternoon thunderstorms can accelerate paint deterioration, making quality 
              exterior painting and proper surface preparation especially important for long-term 
              protection.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Our curated directory connects you with the <strong>best local painting professionals</strong> 
              serving the Babcock Ranch community. These skilled painters understand Florida's 
              specific climate challenges and use premium materials and techniques to deliver 
              beautiful, durable finishes that enhance your home for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Painting Services We Recommend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Interior Painting",
                description: "Complete interior painting including walls, ceilings, trim, and detailed finish work.",
                icon: "🎨"
              },
              {
                title: "Exterior Painting",
                description: "Weather-resistant exterior painting for siding, stucco, trim, and doors.",
                icon: "🏠"
              },
              {
                title: "Cabinet Refinishing",
                description: "Transform kitchens and bathrooms with professional cabinet painting or staining.",
                icon: "🗄️"
              },
              {
                title: "Popcorn Ceiling Removal",
                description: "Safe removal of textured ceilings and replacement with smooth, modern finishes.",
                icon: "✨"
              },
              {
                title: "Pressure Washing",
                description: "Pre-paint surface preparation and general exterior cleaning.",
                icon: "💦"
              },
              {
                title: "Deck & Fence Staining",
                description: "Protection and beautification of outdoor wood surfaces.",
                icon: "🌲"
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
                Why Choose a Babcock Ranch Painting Professional
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Florida Climate Knowledge",
                    description: "Understanding of humidity considerations, UV-resistant products, and Florida-specific prep requirements."
                  },
                  {
                    title: "Quality Preparation",
                    description: "Professional painters know that proper prep determines paint longevity—especially crucial in Florida's climate."
                  },
                  {
                    title: "Premium Products",
                    description: "Access to professional-grade paints with superior coverage, durability, and fade resistance."
                  },
                  {
                    title: "Efficient Completion",
                    description: "Experienced crews complete jobs quickly with minimal disruption to your daily life."
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
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Florida Painting Considerations</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Choose mildew-resistant paint for humid areas like bathrooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>UV-resistant exterior paint prevents fading from intense sun</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Schedule exterior painting during dry season (November-April)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Proper surface prep is critical for paint adhesion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Light colors reflect heat, helping with cooling costs</span>
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
                question: "How much does professional painting cost in Babcock Ranch?",
                answer: "Interior painting typically ranges from $2-$4 per square foot. Exterior painting averages $1.50-$4 per square foot depending on surface type and preparation needs. Cabinet refinishing ranges from $3,000-$8,000 for a full kitchen. Always get detailed written estimates for accurate pricing."
              },
              {
                question: "How long does a professional paint job take?",
                answer: "Interior room painting takes 1-2 days per room. A full home interior typically takes 3-7 days. Exterior painting requires 3-5 days depending on home size and weather conditions. Cabinet refinishing takes 3-5 days including proper curing time between coats."
              },
              {
                question: "What's the best time of year to paint in Florida?",
                answer: "Exterior painting is best done during Florida's dry season (November through April) when rain is less likely. Interior painting can be done year-round, though lower humidity in winter months helps paint cure properly. Avoid exterior painting during hurricane season if possible."
              },
              {
                question: "Should I paint my new construction home?",
                answer: "Many homeowners choose to repaint new construction homes to personalize colors and upgrade from builder-grade paint (typically one coat of flat paint). New construction painting often requires less prep work but may need primer for color changes. It's an affordable way to make your home uniquely yours."
              },
              {
                question: "How long should exterior paint last in Florida?",
                answer: "Quality exterior paint properly applied should last 5-10 years in Florida's climate. Factors affecting longevity include surface preparation, paint quality, sun exposure, and color choice (darker colors fade faster). Regular maintenance and touch-ups extend paint life."
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
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home?</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Connect with professional painters serving Babcock Ranch. 
              Get quotes for interior, exterior, or cabinet painting projects.
            </p>
            <ContactForm 
              title="Request Painting Service"
              description="Tell us about your painting project and we'll connect you with qualified local professionals."
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
            <Link href="/blog/florida-paint-colors" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Design</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Best Paint Colors for Florida Homes
                </h3>
              </div>
            </Link>
            <Link href="/blog/cabinet-refinishing-guide" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Renovation</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Cabinet Refinishing: Transform Your Kitchen for Less
                </h3>
              </div>
            </Link>
            <Link href="/blog/exterior-painting-tips" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Maintenance</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Exterior Painting Tips for Florida's Climate
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
