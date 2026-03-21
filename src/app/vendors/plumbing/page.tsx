import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Best Plumbing in Babcock Ranch | Plumbing Repair & Installation Services FL",
  description: "Find the best plumbing services in Babcock Ranch, FL. Curated plumbers for repairs, installations, and water heaters. Request service today.",
  openGraph: {
    title: "Best Plumbing in Babcock Ranch | Plumbing Repair & Installation Services FL",
    description: "Find the best plumbing services in Babcock Ranch, FL. Curated professionals serving the community.",
    url: "https://babcockranchhomeownerguide.com/vendors/plumbing",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/vendors/plumbing",
  },
};

export default function PlumbingPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Vendor Category</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Best Plumbing Services in Babcock Ranch, FL
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Connect with licensed plumbing professionals who can handle everything from emergency 
              repairs to complete plumbing installations in your Babcock Ranch home.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-stone-600 leading-relaxed mb-6">
              Plumbing issues in your <strong>Babcock Ranch, Florida</strong> home demand immediate 
              attention from qualified professionals. Whether it's a dripping faucet, a clogged drain, 
              a malfunctioning water heater, or a more serious leak, plumbing problems can escalate 
              quickly—causing water damage, mold growth, and significant repair costs if not addressed 
              promptly by an experienced plumber.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For new homeowners in Babcock Ranch, having a trusted plumber's contact information 
              readily available is essential. New construction homes, while typically well-built, 
              can still experience plumbing issues as systems settle and materials adjust to regular use. 
              Additionally, many new homeowners choose to upgrade fixtures, install water softeners, 
              or add features like tankless water heaters that require professional installation.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Our curated directory connects you with the <strong>best local plumbing professionals</strong> 
              serving the Babcock Ranch community. These licensed, insured plumbers have the expertise 
              to handle Florida's specific plumbing challenges, from hard water issues to hurricane 
              season preparation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Plumbing Services We Recommend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Emergency Repairs",
                description: "24/7 emergency service for burst pipes, major leaks, sewage backups, and water heater failures.",
                icon: "🚨"
              },
              {
                title: "Water Heater Services",
                description: "Installation, repair, and maintenance of tank and tankless water heaters.",
                icon: "🚿"
              },
              {
                title: "Leak Detection",
                description: "Advanced electronic leak detection to find hidden leaks without destructive exploration.",
                icon: "🔍"
              },
              {
                title: "Drain Cleaning",
                description: "Professional drain snaking, hydro jetting, and clog removal for all drain types.",
                icon: "🚰"
              },
              {
                title: "Fixture Installation",
                description: "Professional installation of faucets, sinks, toilets, showers, and bathtubs.",
                icon: "🛁"
              },
              {
                title: "Repiping Services",
                description: "Whole-house repiping and pipe replacement for aging or damaged plumbing systems.",
                icon: "🔧"
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
                Why Choose a Babcock Ranch Plumbing Professional
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Licensed & Insured",
                    description: "Proper licensing protects your home and ensures work meets Florida building codes."
                  },
                  {
                    title: "Local Knowledge",
                    description: "Understanding of Florida water quality, local codes, and common regional plumbing issues."
                  },
                  {
                    title: "Emergency Response",
                    description: "Water damage waits for no one—local plumbers can respond quickly to emergencies."
                  },
                  {
                    title: "Warranty Protection",
                    description: "Professional installation and repairs come with warranties for peace of mind."
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
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Florida Plumbing Considerations</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Hard water can damage fixtures and appliances over time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Hurricane preparation includes securing outdoor spigots</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Water heater maintenance is crucial for longevity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Regular drain cleaning prevents Florida's common clogs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Annual inspections catch problems before they escalate</span>
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
                question: "How much do plumbing services cost in Babcock Ranch?",
                answer: "Service calls typically range from $75-$150. Common repairs like drain cleaning ($100-$300), toilet installation ($200-$500), and water heater repairs ($200-$600) vary by complexity. Emergency services outside business hours may include additional fees. Always request an estimate before work begins."
              },
              {
                question: "What should I do in a plumbing emergency?",
                answer: "First, shut off the main water valve to prevent further damage—usually located near the water meter or where the main line enters your home. Then call an emergency plumber immediately. If water is near electrical outlets, turn off electricity to that area. Document damage for insurance purposes."
              },
              {
                question: "How long should a water heater last in Florida?",
                answer: "Traditional tank water heaters typically last 8-12 years in Florida. Tankless water heaters can last 15-20 years with proper maintenance. Florida's hard water can accelerate wear, so annual flushing and maintenance is recommended to maximize lifespan."
              },
              {
                question: "Should I get a tankless water heater?",
                answer: "Tankless water heaters offer endless hot water, energy savings, and longer lifespan (15-20 years), but cost more upfront ($2,000-$4,500 installed). They're ideal for homes with high hot water demand or limited space. Your plumber can help determine if the investment makes sense for your household."
              },
              {
                question: "How can I prevent plumbing problems?",
                answer: "Regular maintenance is key: avoid chemical drain cleaners, don't flush wipes or grease, install drain screens, check for leaks monthly, schedule annual water heater maintenance, and address small issues before they become big problems. Consider a whole-house water softener if you have hard water."
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
            <h2 className="text-3xl font-bold mb-4">Get Your Plumbing Fixed Right</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Connect with licensed plumbing professionals serving Babcock Ranch. 
              Get quotes for repairs, installations, or emergency service.
            </p>
            <ContactForm 
              title="Request Plumbing Service"
              description="Tell us about your plumbing needs and we'll connect you with qualified local professionals."
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
            <Link href="/blog/water-heater-guide" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Equipment</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Water Heater Guide: Tank vs. Tankless for Florida Homes
                </h3>
              </div>
            </Link>
            <Link href="/blog/prevent-plumbing-problems" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Maintenance</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  How to Prevent Common Plumbing Problems
                </h3>
              </div>
            </Link>
            <Link href="/blog/florida-hard-water" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Water Quality</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Dealing with Hard Water in Your Florida Home
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
