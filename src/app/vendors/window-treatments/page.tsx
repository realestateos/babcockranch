import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Best Window Treatments in Babcock Ranch | Blinds, Shutters & Shades FL",
  description: "Find the best window treatments in Babcock Ranch, FL. Curated blinds, shutters, shades, and curtain professionals. Request service today.",
  openGraph: {
    title: "Best Window Treatments in Babcock Ranch | Blinds, Shutters & Shades FL",
    description: "Find the best window treatments in Babcock Ranch, FL. Curated professionals serving the community.",
    url: "https://babcockranchhomeownerguide.com/vendors/window-treatments",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/vendors/window-treatments",
  },
};

export default function WindowTreatmentsPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Vendor Category</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Best Window Treatments in Babcock Ranch | Get Free Quotes Today
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Connect with window treatment professionals who can enhance your home's beauty, 
              privacy, and energy efficiency with custom blinds, shutters, and shades.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Lead Gen Bar */}
      <div className="sticky top-16 z-40 bg-emerald-700 text-white py-3 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm font-medium">Get free quotes from top window treatment in Babcock Ranch</p>
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
              The right window treatments do far more than simply cover your windows—they transform 
              the character of your <strong>Babcock Ranch, Florida</strong> home while providing 
              essential benefits like UV protection, energy efficiency, privacy, and light control. 
              In Florida's intense sunshine, quality window treatments are an investment that protects 
              your furnishings, reduces cooling costs, and enhances your daily comfort.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For new homeowners in Babcock Ranch, window treatments are often among the first 
              finishing touches needed. New construction homes typically don't include window 
              coverings, leaving your home exposed and unfinished. Additionally, Florida's unique 
              climate demands—intense UV exposure, heat gain, and the desire for indoor-outdoor 
              living—require thoughtful window treatment selection that balances aesthetics with 
              practical performance.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Our curated directory connects you with the <strong>best local window treatment 
              professionals</strong> serving the Babcock Ranch community. These experts offer 
              everything from custom plantation shutters to motorized shades, helping you find 
              the perfect solutions for every room in your home.
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
            Window Treatment Services We Recommend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Plantation Shutters",
                description: "Custom hardwood or composite shutters that add value and timeless elegance to any home.",
                icon: "🪟"
              },
              {
                title: "Custom Blinds",
                description: "Wood, faux wood, aluminum, and vertical blinds with motorization options.",
                icon: "↕️"
              },
              {
                title: "Cellular Shades",
                description: "Energy-efficient honeycomb shades that trap air and reduce cooling costs.",
                icon: "🐝"
              },
              {
                title: "Roller & Solar Shades",
                description: "Sleek, modern shades with UV protection to preserve views while blocking heat.",
                icon: "☀️"
              },
              {
                title: "Motorized Options",
                description: "Smart home integrated window treatments with remote and voice control.",
                icon: "📱"
              },
              {
                title: "Custom Drapery",
                description: "Designer curtains, valances, and soft treatments for elegant finishing touches.",
                icon: "🎭"
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
                Why Choose a Babcock Ranch Window Treatment Professional
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "In-Home Consultation",
                    description: "See samples in your actual lighting conditions and receive expert guidance on the best options for each room."
                  },
                  {
                    title: "Precise Measurement",
                    description: "Professional measuring ensures perfect fit, especially crucial for inside-mount installations."
                  },
                  {
                    title: "Expert Installation",
                    description: "Proper installation maximizes function, appearance, and warranty coverage."
                  },
                  {
                    title: "Florida Climate Solutions",
                    description: "Recommendations for UV protection, heat reduction, and humidity-resistant materials."
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
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Best Choices for Florida</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Solar Shades:</strong> Block UV rays while preserving views</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Cellular Shades:</strong> Insulate against Florida heat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Composite Shutters:</strong> Humidity-resistant and durable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Motorized Options:</strong> Schedule automatic closing during peak sun</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Faux Wood Blinds:</strong> Look of wood without warping concerns</span>
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
              "Found an amazing window treatment service through this guide. They understood exactly what our new Babcock Ranch home needed. Highly recommend!"
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
                question: "How much do window treatments cost in Babcock Ranch?",
                answer: "Prices vary widely by product: Basic blinds ($100-$300 per window), cellular shades ($200-$500 per window), plantation shutters ($300-$800 per window), and motorized options ($500-$1,500+ per window). Many providers offer whole-home discounts and financing options."
              },
              {
                question: "What's the best window treatment for Florida's sun?",
                answer: "Solar shades are excellent for preserving views while blocking UV rays and heat. Cellular shades provide insulation that reduces cooling costs. Plantation shutters offer durability and classic style while controlling light precisely. Many homeowners layer treatments for maximum flexibility."
              },
              {
                question: "How long does window treatment installation take?",
                answer: "Most installations are completed in 2-4 hours for an average home. Custom products typically require 4-8 weeks for manufacturing after measurement. Some providers offer quick-ship options for standard sizes that can be installed within days."
              },
              {
                question: "Should I get motorized window treatments?",
                answer: "Motorization is worth considering for hard-to-reach windows, multiple windows you want to operate together, or for the convenience of scheduled operation. In Florida, automated scheduling can close shades during peak sun hours to reduce cooling costs. Motorization adds $200-$500 per window."
              },
              {
                question: "Do window treatments really save on energy costs?",
                answer: "Yes, quality window treatments can significantly reduce cooling costs in Florida. Cellular shades can reduce heat loss/gain by up to 40%. Solar shades block up to 99% of UV rays while maintaining views. The investment often pays for itself over time through energy savings."
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
            <h2 className="text-3xl font-bold mb-4">Complete Your Home's Look</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Connect with window treatment professionals serving Babcock Ranch. 
              Get in-home consultations and quotes for custom blinds, shutters, and shades.
            </p>
            <ContactForm 
              title="Request Window Treatment Consultation"
              description="Tell us about your window treatment needs and we'll connect you with qualified local professionals."
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
            <Link href="/blog/window-treatment-energy-savings" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Energy Efficiency</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  How Window Treatments Reduce Cooling Costs in Florida
                </h3>
              </div>
            </Link>
            <Link href="/blog/shutters-vs-blinds" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Comparison</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Plantation Shutters vs. Blinds: Making the Right Choice
                </h3>
              </div>
            </Link>
            <Link href="/blog/motorized-window-treatments" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Smart Home</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Motorized Window Treatments: Convenience and Energy Savings
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
