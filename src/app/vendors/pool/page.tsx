import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Best Pool Services in Babcock Ranch | Pool Cleaning & Maintenance FL",
  description: "Find the best pool services in Babcock Ranch, FL. Curated pool cleaning and maintenance professionals serving America's first solar-powered town. Request service today.",
  openGraph: {
    title: "Best Pool Services in Babcock Ranch | Pool Cleaning & Maintenance FL",
    description: "Find the best pool services in Babcock Ranch, FL. Curated professionals serving the community.",
    url: "https://babcockranchhomeownerguide.com/vendors/pool",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/vendors/pool",
  },
};

export default function PoolPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Vendor Category</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Best Pool Services in Babcock Ranch | Get Free Quotes Today
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Connect with expert pool professionals who understand Florida's unique pool maintenance 
              needs, from intense sun exposure to year-round swimming seasons.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Lead Gen Bar */}
      <div className="sticky top-16 z-40 bg-emerald-700 text-white py-3 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm font-medium">Get free quotes from top pool services in Babcock Ranch</p>
          <a href="#quote-form" className="bg-white text-emerald-700 px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-emerald-50 transition-colors">
            Request Now
          </a>
        </div>
      </div>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-stone-600 leading-relaxed mb-4">
              Owning a pool in <strong>Babcock Ranch, Florida</strong> is one of the best investments 
              you can make for your family's enjoyment and your home's value. With Southwest Florida's 
              year-round warm weather, your pool isn't just a luxury—it's practically an extension of 
              your living space. However, keeping that crystal-clear water sparkling requires consistent, 
              professional care that accounts for Florida's unique climate challenges.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For new Babcock Ranch homeowners, establishing a relationship with a reliable local pool 
              service should be a priority from day one. Florida's intense UV rays, high humidity, and 
              frequent afternoon thunderstorms create a perfect storm for algae growth and chemical 
              imbalances. Without regular professional maintenance, your pool can quickly transform from 
              a backyard oasis into a green, uninviting mess. Local pool service professionals understand 
              these Florida-specific factors and can maintain your pool in pristine condition year-round.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Whether you need weekly cleaning, equipment repairs, or a complete pool renovation, our 
              curated directory connects you with the <strong>best local pool service professionals</strong> 
              who have experience maintaining pools in the Babcock Ranch community.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 bg-emerald-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-emerald-700">500+</p>
              <p className="text-sm text-stone-600">Homeowners Helped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-700">4.9★</p>
              <p className="text-sm text-stone-600">Avg. Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-700">24hr</p>
              <p className="text-sm text-stone-600">Response Time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-700">100%</p>
              <p className="text-sm text-stone-600">Free Quotes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Pool Services We Recommend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Weekly Pool Cleaning",
                description: "Regular skimming, vacuuming, brushing, and debris removal to keep your pool pristine.",
                icon: "🧹"
              },
              {
                title: "Chemical Balancing",
                description: "Professional water testing and precise chemical adjustments for safe, clear water.",
                icon: "⚗️"
              },
              {
                title: "Equipment Repair",
                description: "Expert diagnosis and repair of pumps, filters, heaters, and automation systems.",
                icon: "🔧"
              },
              {
                title: "Pool Equipment Installation",
                description: "Professional installation of pumps, filters, heaters, salt systems, and smart controls.",
                icon: "⚙️"
              },
              {
                title: "Green Pool Recovery",
                description: "Fast, effective algae treatment and restoration for neglected or storm-damaged pools.",
                icon: "🟢"
              },
              {
                title: "Pool Renovation",
                description: "Resurfacing, tile replacement, coping repair, and complete pool makeovers.",
                icon: "🏊"
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
                Why Choose a Babcock Ranch Pool Professional
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Florida Climate Expertise",
                    description: "Local pros understand intense UV exposure, frequent storms, and year-round swimming demands."
                  },
                  {
                    title: "Quick Emergency Response",
                    description: "When equipment fails or algae blooms, local professionals can respond within hours, not days."
                  },
                  {
                    title: "Water Chemistry Mastery",
                    description: "Southwest Florida's unique water conditions require specialized knowledge and testing."
                  },
                  {
                    title: "Equipment Relationships",
                    description: "Established relationships with suppliers ensure faster parts availability and repairs."
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
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Florida Pool Maintenance Tips</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Run your pump 8-10 hours daily during summer months</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Check and clean skimmer baskets twice weekly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Monitor cyanuric acid levels to prevent chlorine degradation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Shock your pool after heavy rainstorms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Test water chemistry at least twice weekly in summer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-8">What Babcock Ranch Homeowners Say</h2>
          <div className="bg-stone-50 rounded-xl p-8 border border-stone-200">
            <svg className="w-10 h-10 text-emerald-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="text-xl text-stone-700 italic mb-6">
              "Found an amazing pool service through this guide. They understood exactly what our new Babcock Ranch home needed. Highly recommend!"
            </p>
            <p className="font-semibold text-stone-800">— Sarah M., Babcock Ranch Resident</p>
            <div className="flex justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
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
                question: "How much does pool service cost in Babcock Ranch?",
                answer: "Weekly full-service pool maintenance typically ranges from $150-$250 per month depending on pool size, features, and service level. Basic chemical-only service may start around $80-$120 monthly. One-time cleanings and repairs are quoted based on specific needs."
              },
              {
                question: "How often should my pool be serviced in Florida?",
                answer: "In Florida's climate, weekly service is strongly recommended year-round. The combination of intense sun, heat, and frequent rainstorms creates rapid chemical fluctuations and debris accumulation. During hurricane season or after storms, additional service visits may be necessary."
              },
              {
                question: "What's included in a typical pool cleaning service?",
                answer: "Full-service pool cleaning includes skimming surface debris, vacuuming pool floor, brushing walls and tiles, emptying skimmer and pump baskets, checking and adjusting chemical levels, inspecting equipment operation, and a visual inspection for potential issues."
              },
              {
                question: "How long should I run my pool pump in Southwest Florida?",
                answer: "During Florida's hot summer months, run your pump 8-12 hours daily to ensure adequate filtration and circulation. In cooler winter months, 6-8 hours is typically sufficient. Variable speed pumps can optimize energy usage while maintaining proper circulation."
              },
              {
                question: "Why does my pool turn green so quickly in Florida?",
                answer: "Florida's combination of intense sunlight, warm temperatures, and afternoon thunderstorms creates ideal conditions for algae growth. UV rays break down chlorine quickly, while rain introduces phosphates and other nutrients. Consistent chemical maintenance and proper circulation are essential."
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
      <section id="quote-form" className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready for Crystal-Clear Water?</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Connect with expert pool service professionals serving Babcock Ranch. 
              Get quotes, compare services, and enjoy your pool worry-free.
            </p>
            <ContactForm 
              title="Request Pool Service"
              description="Tell us about your pool needs and we'll connect you with qualified local professionals."
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
            <Link href="/blog/pool-maintenance-florida" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Maintenance Guide</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Florida Pool Maintenance: Essential Tips for New Homeowners
                </h3>
              </div>
            </Link>
            <Link href="/blog/pool-equipment-guide" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Equipment</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Understanding Your Pool Equipment: A Homeowner's Guide
                </h3>
              </div>
            </Link>
            <Link href="/blog/salt-vs-chlorine-pools" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Comparison</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Salt Water vs. Chlorine Pools: Which is Right for Your Babcock Ranch Home?
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
