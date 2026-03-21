import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Best Electrical Services in Babcock Ranch | Electrician & Panel Upgrades FL",
  description: "Find the best electrical services in Babcock Ranch, FL. Curated electricians for repairs, panel upgrades, and lighting. Request service today.",
  openGraph: {
    title: "Best Electrical Services in Babcock Ranch | Electrician & Panel Upgrades FL",
    description: "Find the best electrical services in Babcock Ranch, FL. Curated professionals serving the community.",
    url: "https://babcockranchhomeownerguide.com/vendors/electrical",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/vendors/electrical",
  },
};

export default function ElectricalPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Vendor Category</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Best Electrical Services in Babcock Ranch | Get Free Quotes Today
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Connect with licensed electricians who can handle everything from simple repairs to 
              complex installations and panel upgrades for your Babcock Ranch home.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Lead Gen Bar */}
      <div className="sticky top-16 z-40 bg-emerald-700 text-white py-3 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm font-medium">Get free quotes from top electrical services in Babcock Ranch</p>
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
              Electrical work in your <strong>Babcock Ranch, Florida</strong> home is not a DIY 
              project—it requires licensed professionals who understand the complexities of modern 
              electrical systems and Florida's specific building codes. Whether you need a simple 
              outlet repair, a panel upgrade to accommodate your solar-powered home, or a complete 
              lighting redesign, professional electrical services ensure safety, code compliance, 
              and reliable performance.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For new homeowners in Babcock Ranch, electrical considerations extend beyond basic 
              functionality. As America's first solar-powered town, many homes feature advanced 
              electrical systems that may require specialized knowledge for modifications or upgrades. 
              Additionally, Florida's intense lightning activity and power outage risks make proper 
              grounding, surge protection, and backup power considerations essential for protecting 
              your investment.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Our curated directory connects you with the <strong>best local electrical professionals</strong> 
              serving the Babcock Ranch community. These licensed electricians have the expertise 
              to safely handle your electrical needs while ensuring all work meets or exceeds 
              Florida's stringent electrical codes.
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
            Electrical Services We Recommend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Panel Upgrades",
                description: "Upgrade to 200-amp or higher service to accommodate modern electrical demands and solar integration.",
                icon: "⚡"
              },
              {
                title: "Lighting Design & Installation",
                description: "Indoor and outdoor lighting solutions including LED retrofits, landscape lighting, and smart controls.",
                icon: "💡"
              },
              {
                title: "Outlet & Switch Installation",
                description: "Add outlets, upgrade to GFCI protection, install USB outlets, and replace switches.",
                icon: "🔌"
              },
              {
                title: "Ceiling Fan Installation",
                description: "Professional installation of ceiling fans, including new wiring and remote controls.",
                icon: "🌀"
              },
              {
                title: "Generator Installation",
                description: "Whole-house and portable generator connections for hurricane season backup power.",
                icon: "🔋"
              },
              {
                title: "Electrical Inspections",
                description: "Safety inspections, code compliance checks, and pre-purchase home electrical assessments.",
                icon: "📋"
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
                Why Choose a Babcock Ranch Electrical Professional
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Licensed & Insured",
                    description: "Florida-licensed electricians carry proper insurance and pull required permits for all work."
                  },
                  {
                    title: "Solar Integration Knowledge",
                    description: "Understanding of Babcock Ranch's unique solar infrastructure and grid-tie systems."
                  },
                  {
                    title: "Code Compliance",
                    description: "All work meets Florida's strict electrical codes, including hurricane-resistant requirements."
                  },
                  {
                    title: "Safety First",
                    description: "Professional workmanship protects your family and property from electrical hazards."
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
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Florida Electrical Considerations</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Surge protection essential for Florida's lightning storms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Generator connections for hurricane season power outages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>GFCI protection required for all outdoor and wet area outlets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>High AC demand may require electrical panel upgrades</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Pool equipment requires dedicated circuits and bonding</span>
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
              "Found an amazing electrical service through this guide. They understood exactly what our new Babcock Ranch home needed. Highly recommend!"
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
                question: "How much do electrical services cost in Babcock Ranch?",
                answer: "Service calls typically range from $100-$200. Common projects: outlet installation ($150-$300), ceiling fan installation ($200-$400), panel upgrades ($1,500-$3,500), and lighting installation varies by complexity. Always request a detailed estimate before work begins."
              },
              {
                question: "When should I upgrade my electrical panel?",
                answer: "Consider upgrading if your home has a 100-amp panel, you experience frequent breaker trips, you're adding major appliances, planning a home addition, or your panel is over 25 years old. Modern homes with electric vehicles, pools, and high-power appliances often need 200-amp service."
              },
              {
                question: "Do I need a permit for electrical work in Florida?",
                answer: "Yes, most electrical work requires permits and inspections in Florida. Licensed electricians handle this process for you, ensuring work is legal, safe, and up to code. Unpermitted work can create insurance issues and safety hazards."
              },
              {
                question: "What is GFCI protection and why is it important?",
                answer: "GFCI (Ground Fault Circuit Interrupter) outlets protect against electrical shock by cutting power when they detect ground faults. Required by code for bathrooms, kitchens, garages, laundry rooms, and all outdoor outlets in Florida. They save lives and should be tested monthly."
              },
              {
                question: "Should I install a whole-house surge protector?",
                answer: "Absolutely, especially in Florida. Lightning strikes and power surges can destroy electronics and appliances. A whole-house surge protector installed at your electrical panel provides comprehensive protection for your entire home and is a smart investment."
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
            <h2 className="text-3xl font-bold mb-4">Power Your Home Safely</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Connect with licensed electrical professionals serving Babcock Ranch. 
              Get quotes for repairs, installations, and upgrades.
            </p>
            <ContactForm 
              title="Request Electrical Service"
              description="Tell us about your electrical needs and we'll connect you with qualified local professionals."
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
            <Link href="/blog/electrical-safety-home" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Safety</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Electrical Safety Tips for Florida Homeowners
                </h3>
              </div>
            </Link>
            <Link href="/blog/generator-preparation" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Hurricane Prep</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Generator Installation and Preparation Guide
                </h3>
              </div>
            </Link>
            <Link href="/blog/led-lighting-upgrade" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Energy Savings</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  LED Lighting Upgrades for Your Florida Home
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
