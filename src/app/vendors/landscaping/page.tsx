import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Best Landscaping in Babcock Ranch | Lawn Care & Landscape Services FL",
  description: "Find the best landscaping and lawn care in Babcock Ranch, FL. Curated landscape professionals serving America's first solar-powered town. Request service today.",
  openGraph: {
    title: "Best Landscaping in Babcock Ranch | Lawn Care & Landscape Services FL",
    description: "Find the best landscaping and lawn care in Babcock Ranch, FL. Curated professionals serving the community.",
    url: "https://babcockranchhomeownerguide.com/vendors/landscaping",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/vendors/landscaping",
  },
};

export default function LandscapingPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Vendor Category</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Best Landscaping in Babcock Ranch, FL
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Connect with top-rated landscaping professionals who understand the unique challenges 
              of maintaining beautiful outdoor spaces in Southwest Florida's tropical climate.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-stone-600 leading-relaxed mb-6">
              Finding quality <strong>landscaping in Babcock Ranch</strong> is essential for homeowners 
              who want to maintain the beauty and value of their property. As Florida's premier 
              solar-powered community, Babcock Ranch features modern homes with carefully planned 
              landscapes designed to thrive in the Sunshine State's unique environment.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For new homeowners moving into Babcock Ranch, establishing a relationship with a 
              reliable local landscaper should be a top priority. The subtropical climate of 
              Southwest Florida presents specific challenges—from intense summer heat and afternoon 
              thunderstorms to sandy soil conditions and hurricane season preparations. Local 
              landscaping professionals understand these Florida-specific factors and can help 
              you create and maintain an outdoor space that complements your home while standing 
              up to the elements.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Whether you're looking for routine lawn maintenance, a complete landscape redesign, 
              or specialized services like tree care and irrigation management, our curated directory 
              connects you with the <strong>best local landscaping professionals</strong> serving 
              the Babcock Ranch community.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Landscaping Services We Recommend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Lawn Care & Maintenance",
                description: "Regular mowing, edging, fertilization, and weed control tailored to Florida grass types.",
                icon: "🌱"
              },
              {
                title: "Landscape Design",
                description: "Custom landscape architecture that enhances curb appeal and complements your home's style.",
                icon: "🎨"
              },
              {
                title: "Tree Services",
                description: "Professional tree trimming, pruning, removal, and health assessments for Florida native species.",
                icon: "🌳"
              },
              {
                title: "Irrigation Systems",
                description: "Installation, repair, and maintenance of efficient sprinkler and drip irrigation systems.",
                icon: "💧"
              },
              {
                title: "Hardscaping",
                description: "Pavers, retaining walls, outdoor kitchens, fire pits, and custom stonework.",
                icon: "🧱"
              },
              {
                title: "Hurricane Preparation",
                description: "Pre-storm tree trimming, debris removal, and landscape protection services.",
                icon: "🌪️"
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
                Why Choose a Babcock Ranch Landscaping Professional
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Florida Climate Expertise",
                    description: "Local landscapers understand native plants, seasonal maintenance needs, and hurricane preparation requirements."
                  },
                  {
                    title: "Community Knowledge",
                    description: "Familiar with Babcock Ranch HOA guidelines, water restrictions, and community landscaping standards."
                  },
                  {
                    title: "Quick Response Times",
                    description: "Local professionals can respond quickly for emergency storm cleanup or urgent maintenance needs."
                  },
                  {
                    title: "Established Reputation",
                    description: "Local businesses rely on word-of-mouth in tight-knit communities like Babcock Ranch."
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
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Florida-Specific Considerations</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Sandy soil requires specialized fertilization approaches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Year-round growing season means more frequent maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Hurricane season requires proactive tree maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Water restrictions affect irrigation scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Native Florida plants require less water and maintenance</span>
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
                question: "How often should I have my lawn mowed in Babcock Ranch?",
                answer: "During Florida's growing season (March through November), weekly mowing is recommended. In winter months, bi-weekly service is typically sufficient. The subtropical climate promotes rapid grass growth, so regular maintenance is essential for a healthy, attractive lawn."
              },
              {
                question: "What are the best plants for Babcock Ranch landscapes?",
                answer: "Native Florida plants thrive best in Babcock Ranch, including Firebush, Coontie, Muhly Grass, and Saw Palmetto. These plants are adapted to the local sandy soil, require less water, and provide habitat for local wildlife. Your landscaper can recommend specific varieties that complement your home's design."
              },
              {
                question: "When should I schedule hurricane preparation for my landscape?",
                answer: "Ideally, schedule pre-hurricane tree trimming in early June before the season begins. This allows time for proper pruning without the rush before a storm. Remove dead branches, thin dense canopies, and ensure trees are properly balanced to withstand high winds."
              },
              {
                question: "How much does professional landscaping cost in Babcock Ranch?",
                answer: "Lawn maintenance typically ranges from $100-$200 per month depending on lot size and services included. Landscape design projects vary widely based on scope, from $2,000 for basic plantings to $25,000+ for complete outdoor living spaces. Request detailed quotes from multiple providers."
              },
              {
                question: "Do Babcock Ranch landscapers need to follow HOA guidelines?",
                answer: "Yes, all landscaping work must comply with Babcock Ranch HOA guidelines and community standards. Reputable local landscapers are familiar with these requirements and can ensure your project meets all community regulations before work begins."
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
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Connect with top-rated landscaping professionals serving Babcock Ranch. 
              Get quotes, compare services, and find the perfect match for your project.
            </p>
            <ContactForm 
              title="Request Landscaping Services"
              description="Tell us about your landscaping needs and we'll connect you with qualified local professionals."
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
            <Link href="/blog/babcock-ranch-hoa-guidelines" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Community Guide</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Understanding Babcock Ranch HOA Landscaping Guidelines
                </h3>
              </div>
            </Link>
            <Link href="/blog/hurricane-prep-homeowners" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Seasonal Tips</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Hurricane Season Preparation for Babcock Ranch Homeowners
                </h3>
              </div>
            </Link>
            <Link href="/blog/native-florida-plants" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Landscaping Tips</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Best Native Plants for Your Babcock Ranch Landscape
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
