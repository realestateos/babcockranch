import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Best HVAC in Babcock Ranch | Air Conditioning & Heating Services FL",
  description: "Find the best HVAC services in Babcock Ranch, FL. Curated air conditioning and heating professionals serving America's first solar-powered town. Request service today.",
  openGraph: {
    title: "Best HVAC in Babcock Ranch | Air Conditioning & Heating Services FL",
    description: "Find the best HVAC services in Babcock Ranch, FL. Curated professionals serving the community.",
    url: "https://babcockranchhomeownerguide.com/vendors/hvac",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/vendors/hvac",
  },
};

export default function HvacPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Vendor Category</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Best HVAC in Babcock Ranch | Get Free Quotes Today
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Connect with certified HVAC professionals who understand Florida's demanding cooling 
              requirements and can keep your home comfortable year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Lead Gen Bar */}
      <div className="sticky top-16 z-40 bg-emerald-700 text-white py-3 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm font-medium">Get free quotes from top HVAC services in Babcock Ranch</p>
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
              In <strong>Babcock Ranch, Florida</strong>, your air conditioning system isn't just a 
              convenience—it's absolutely essential for comfortable living. With Southwest Florida's 
              subtropical climate bringing average summer temperatures in the 90s and humidity levels 
              that regularly exceed 70%, a reliable HVAC system is critical for your family's comfort, 
              health, and even your home's protection from moisture damage.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For new homeowners in Babcock Ranch, finding a trusted HVAC contractor should be at the 
              top of your priority list. Modern homes in this solar-powered community often feature 
              advanced energy-efficient systems that require specialized knowledge for proper installation 
              and maintenance. Additionally, Florida's year-round cooling demands mean your system works 
              harder here than in most other parts of the country, making regular professional maintenance 
              essential for longevity and efficiency.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Whether you need emergency AC repair, routine maintenance, a complete system replacement, 
              or indoor air quality solutions, our curated directory connects you with the <strong>best 
              local HVAC professionals</strong> who have experience serving the Babcock Ranch community.
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
            HVAC Services We Recommend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AC Installation & Replacement",
                description: "Expert installation of energy-efficient air conditioning systems sized perfectly for your home.",
                icon: "❄️"
              },
              {
                title: "Emergency AC Repair",
                description: "24/7 emergency service to restore cooling when you need it most in Florida's heat.",
                icon: "🔥"
              },
              {
                title: "Preventive Maintenance",
                description: "Seasonal tune-ups to maximize efficiency, prevent breakdowns, and extend system life.",
                icon: "🔧"
              },
              {
                title: "Duct Cleaning & Sealing",
                description: "Professional duct cleaning and sealing to improve air quality and system efficiency.",
                icon: "🌬️"
              },
              {
                title: "Indoor Air Quality",
                description: "Air purifiers, UV lights, dehumidifiers, and filtration systems for healthier indoor air.",
                icon: "💨"
              },
              {
                title: "Heat Pump Services",
                description: "Installation, repair, and maintenance of energy-efficient heat pump systems.",
                icon: "♨️"
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
                Why Choose a Babcock Ranch HVAC Professional
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Florida Climate Specialists",
                    description: "Local technicians understand the extreme demands Florida's climate places on cooling systems."
                  },
                  {
                    title: "24/7 Emergency Response",
                    description: "When AC fails in Florida heat, local professionals can respond quickly, often within hours."
                  },
                  {
                    title: "Humidity Control Expertise",
                    description: "Proper humidity management is crucial in Florida—local pros know how to optimize your system."
                  },
                  {
                    title: "Code & Permit Knowledge",
                    description: "Familiar with local building codes, permit requirements, and utility rebate programs."
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
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Florida HVAC Tips</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Change air filters monthly during peak cooling season</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Set thermostat to 78°F when home for optimal efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Keep outdoor unit clear of debris and vegetation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Schedule maintenance twice yearly (spring and fall)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Consider a programmable or smart thermostat for savings</span>
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
              "Found an amazing HVAC service through this guide. They understood exactly what our new Babcock Ranch home needed. Highly recommend!"
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
                question: "How often should I service my AC in Florida?",
                answer: "In Florida's demanding climate, professional maintenance is recommended twice yearly—once in spring before the intense summer heat and once in fall. This ensures your system is prepared for the heavy workload ahead and helps catch potential issues before they become expensive breakdowns."
              },
              {
                question: "What size AC unit do I need for my Babcock Ranch home?",
                answer: "AC sizing depends on square footage, ceiling height, insulation, window exposure, and more. A typical 2,000 square foot Florida home often requires a 3.5 to 4-ton system, but proper Manual J load calculations are essential for accurate sizing. Oversized or undersized units waste energy and fail prematurely."
              },
              {
                question: "How long should an AC unit last in Florida?",
                answer: "With proper maintenance, Florida AC units typically last 10-15 years. However, the intense year-round workload in our climate means systems here often have shorter lifespans than in cooler regions. Regular maintenance, proper sizing, and quality installation significantly impact longevity."
              },
              {
                question: "Why is my AC freezing up?",
                answer: "Common causes include restricted airflow from dirty filters or blocked vents, low refrigerant levels due to leaks, dirty evaporator coils, or malfunctioning blower motors. Turn off your system and contact a professional—running a frozen AC can damage the compressor."
              },
              {
                question: "Should I repair or replace my old AC unit?",
                answer: "Consider replacement if your unit is over 10 years old, requires frequent repairs, uses R-22 refrigerant (being phased out), or repair costs exceed 50% of a new system's price. New high-efficiency systems can significantly reduce energy bills, often paying for themselves over time."
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
            <h2 className="text-3xl font-bold mb-4">Stay Cool and Comfortable</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Connect with certified HVAC professionals serving Babcock Ranch. 
              Get quotes for installation, repair, or maintenance services.
            </p>
            <ContactForm 
              title="Request HVAC Service"
              description="Tell us about your heating and cooling needs and we'll connect you with qualified local professionals."
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
            <Link href="/blog/ac-maintenance-florida" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Maintenance Guide</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Florida AC Maintenance: Essential Tips for Homeowners
                </h3>
              </div>
            </Link>
            <Link href="/blog/energy-efficient-cooling" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Energy Savings</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Maximizing Energy Efficiency in Your Babcock Ranch Home
                </h3>
              </div>
            </Link>
            <Link href="/blog/indoor-air-quality" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Health & Comfort</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Improving Indoor Air Quality in Your Florida Home
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
