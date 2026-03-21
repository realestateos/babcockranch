import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Best Home Security in Babcock Ranch | Security Systems & Cameras FL",
  description: "Find the best home security in Babcock Ranch, FL. Curated security systems, cameras, and smart home professionals. Request service today.",
  openGraph: {
    title: "Best Home Security in Babcock Ranch | Security Systems & Cameras FL",
    description: "Find the best home security in Babcock Ranch, FL. Curated professionals serving the community.",
    url: "https://babcockranchhomeownerguide.com/vendors/security",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/vendors/security",
  },
};

export default function SecurityPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Vendor Category</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Best Home Security in Babcock Ranch | Get Free Quotes Today
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Connect with security professionals who can protect your Babcock Ranch home with 
              modern systems, smart home integration, and 24/7 monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Lead Gen Bar */}
      <div className="sticky top-16 z-40 bg-emerald-700 text-white py-3 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm font-medium">Get free quotes from top security systems in Babcock Ranch</p>
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
              Protecting your <strong>Babcock Ranch, Florida</strong> home and family is a top priority 
              for any homeowner. While Babcock Ranch is known as a safe, family-friendly community, 
              modern home security systems offer far more than just burglary protection—they provide 
              peace of mind, remote monitoring capabilities, smart home integration, and protection 
              against environmental hazards like fires and flooding.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For new homeowners in Babcock Ranch, investing in a comprehensive home security system 
              should be considered essential infrastructure. New construction homes are perfect 
              candidates for modern security installations, allowing for clean wiring, optimal camera 
              placement, and integration with other smart home features. Additionally, Florida's 
              unique risks—including hurricanes, power outages, and water intrusion—make environmental 
              monitoring a valuable component of any security strategy.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Our curated directory connects you with the <strong>best local security professionals</strong> 
              serving the Babcock Ranch community. These experts specialize in designing, installing, 
              and monitoring comprehensive security solutions tailored to modern Florida homes.
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
            Security Services We Recommend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Security System Installation",
                description: "Professional installation of alarm systems, door/window sensors, motion detectors, and control panels.",
                icon: "🚨"
              },
              {
                title: "Surveillance Cameras",
                description: "HD and 4K camera systems with night vision, cloud storage, and remote viewing capabilities.",
                icon: "📹"
              },
              {
                title: "24/7 Monitoring",
                description: "Professional monitoring services that dispatch emergency response when alarms trigger.",
                icon: "👁️"
              },
              {
                title: "Smart Home Integration",
                description: "Integrate security with smart locks, lights, thermostats, and voice assistants.",
                icon: "🏠"
              },
              {
                title: "Video Doorbells",
                description: "See and communicate with visitors from anywhere using smart video doorbell systems.",
                icon: "🔔"
              },
              {
                title: "Environmental Sensors",
                description: "Smoke, carbon monoxide, water leak, and temperature sensors for comprehensive protection.",
                icon: "⚠️"
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
                Why Choose a Babcock Ranch Security Professional
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Local Expertise",
                    description: "Understanding of Babcock Ranch's specific security considerations and community layout."
                  },
                  {
                    title: "Rapid Response",
                    description: "Local monitoring stations and service teams can respond faster in emergencies."
                  },
                  {
                    title: "Smart Home Specialists",
                    description: "Experience integrating security with modern solar-powered smart homes common in Babcock Ranch."
                  },
                  {
                    title: "Ongoing Support",
                    description: "Local providers offer personalized service, maintenance, and system upgrades."
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
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Florida Security Considerations</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Battery backup systems essential for hurricane outages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Water leak detection for Florida's rainy season</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>High-heat-rated equipment for garage installations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Cellular backup when internet goes down</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Environmental monitoring for vacant homes</span>
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
              "Found an amazing security system through this guide. They understood exactly what our new Babcock Ranch home needed. Highly recommend!"
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
                question: "How much does a home security system cost in Babcock Ranch?",
                answer: "Basic DIY systems start around $200-$500 with monthly monitoring at $15-$30. Professional installed systems range from $800-$2,500 depending on equipment and home size, with monitoring at $40-$60 monthly. Many providers offer equipment financing or $0 down with multi-year monitoring contracts."
              },
              {
                question: "Do I need professional monitoring or is self-monitoring enough?",
                answer: "Professional monitoring provides 24/7 response and emergency dispatch when you're unable to respond to alerts. This is especially valuable when you're sleeping, traveling, or during severe weather. Self-monitoring sends alerts to your phone but requires you to contact authorities. For comprehensive protection, professional monitoring is recommended."
              },
              {
                question: "Can I integrate security with my smart home devices?",
                answer: "Yes, most modern security systems integrate seamlessly with smart home ecosystems including Amazon Alexa, Google Home, smart locks, lights, thermostats, and garage door openers. This allows for automated actions like unlocking doors when you disarm the system or turning on lights when motion is detected."
              },
              {
                question: "What happens to my security system during a power outage?",
                answer: "Quality security systems include battery backup that maintains protection for 24-48 hours during power outages. Systems with cellular backup maintain monitoring even if internet service is disrupted. Consider generators or solar backup for extended outage protection during hurricane season."
              },
              {
                question: "Should I get cameras or just an alarm system?",
                answer: "For comprehensive security, cameras provide valuable visual verification and deterrence. Doorbell cameras are highly recommended for all homes. Exterior cameras protect perimeter access points, while interior cameras offer additional monitoring. Modern systems allow you to start with basics and add cameras over time."
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
            <h2 className="text-3xl font-bold mb-4">Protect What Matters Most</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Connect with security professionals serving Babcock Ranch. 
              Get quotes for security systems, cameras, and smart home integration.
            </p>
            <ContactForm 
              title="Request Security Consultation"
              description="Tell us about your security needs and we'll connect you with qualified local professionals."
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
            <Link href="/blog/smart-home-security-guide" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Smart Home</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Smart Home Security: A Complete Guide for New Homeowners
                </h3>
              </div>
            </Link>
            <Link href="/blog/hurricane-home-security" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Hurricane Prep</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Protecting Your Home During Hurricane Season
                </h3>
              </div>
            </Link>
            <Link href="/blog/security-camera-placement" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Installation</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Optimal Security Camera Placement for Florida Homes
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
