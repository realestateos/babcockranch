import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Best Real Estate Agents in Babcock Ranch | Buy & Sell Solar Homes FL",
  description: "Find the best real estate agents in Babcock Ranch, FL. Curated agents specializing in new construction, solar homes, and the unique Babcock Ranch community. Request service today.",
  openGraph: {
    title: "Best Real Estate Agents in Babcock Ranch | Buy & Sell Solar Homes FL",
    description: "Find the best real estate agents in Babcock Ranch, FL. Curated agents specializing in new construction, solar homes, and the unique community.",
    url: "https://babcockranchhomeownerguide.com/vendors/real-estate",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/vendors/real-estate",
  },
};

export default function RealEstatePage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Vendor Category</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Best Real Estate Agents in Babcock Ranch | Get Free Quotes Today
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Connect with expert real estate agents who specialize in Babcock Ranch's unique 
              solar-powered community, new construction homes, and sustainable living.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Lead Gen Bar */}
      <div className="sticky top-16 z-40 bg-emerald-700 text-white py-3 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm font-medium">Get free quotes from top real estate agents in Babcock Ranch</p>
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
              Navigating the <strong>Babcock Ranch, Florida</strong> real estate market requires more 
              than just a standard real estate agent—it demands a specialist who truly understands 
              this groundbreaking community. As America's first solar-powered town, Babcock Ranch 
              represents a unique real estate landscape where traditional home buying and selling 
              advice often doesn't apply. From understanding solar lease agreements and energy 
              efficiency ratings to navigating new construction timelines and builder contracts, 
              you need an agent who knows this community inside and out.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Whether you're buying your dream home in this sustainable community, selling a 
              property to upgrade or relocate, or investing in Florida's most innovative development, 
              the right real estate agent makes all the difference. A Babcock Ranch specialist 
              understands the community's multiple villages, each with distinct characteristics, 
              HOA structures, and amenities. They know which builders are active, what incentives 
              are available, and how to negotiate effectively in this competitive market.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Our curated directory connects you with the <strong>best local real estate agents</strong> 
              who have demonstrated expertise in the Babcock Ranch market. These professionals have 
              helped dozens of families successfully navigate buying and selling in this unique 
              community, and they understand what makes this solar-powered town such a special place 
              to call home.
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
            Real Estate Services We Recommend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Buyer Representation",
                description: "Expert guidance through the home buying process, from new construction to resale properties.",
                icon: "🏠"
              },
              {
                title: "New Construction Specialists",
                description: "Navigate builder contracts, upgrades, inspections, and the new build process with confidence.",
                icon: "🏗️"
              },
              {
                title: "Solar Home Experts",
                description: "Understand solar lease agreements, energy savings, and the unique aspects of solar-powered living.",
                icon: "☀️"
              },
              {
                title: "Seller Representation",
                description: "Strategic marketing, pricing analysis, and negotiation to maximize your home's sale price.",
                icon: "📊"
              },
              {
                title: "Relocation Services",
                description: "Comprehensive support for families moving to Babcock Ranch from out of area or out of state.",
                icon: "🚚"
              },
              {
                title: "Investment Property",
                description: "Identify opportunities and navigate the unique aspects of investing in Babcock Ranch real estate.",
                icon: "📈"
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
                Why Choose a Babcock Ranch Real Estate Specialist
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Community Expertise",
                    description: "Deep knowledge of Babcock Ranch's villages, builders, amenities, and unique community features."
                  },
                  {
                    title: "New Construction Navigation",
                    description: "Experience with builder contracts, upgrade pricing, inspection processes, and construction timelines."
                  },
                  {
                    title: "Solar Power Knowledge",
                    description: "Understanding of solar agreements, net metering, and how to value solar features in transactions."
                  },
                  {
                    title: "Local Market Insights",
                    description: "Real-time knowledge of inventory, pricing trends, and market conditions specific to Babcock Ranch."
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
              <h3 className="text-xl font-semibold text-stone-800 mb-4">What Makes Babcock Ranch Unique</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Solar-Powered:</strong> America's first solar-powered town with 75 MW solar array</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Sustainable Design:</strong> LEED-certified buildings and eco-friendly infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Multiple Villages:</strong> Distinct neighborhoods with unique characteristics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Amenities:</strong> Downtown district, schools, trails, and community events</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Growing Community:</strong> Ongoing development means new opportunities</span>
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
              "Found an amazing real estate agent through this guide. They understood exactly what our new Babcock Ranch home needed. Highly recommend!"
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
                question: "Why do I need a Babcock Ranch specialist instead of any local agent?",
                answer: "Babcock Ranch is unlike any other community in Florida. A specialist understands the solar power infrastructure, multiple villages with different HOAs and builders, new construction processes, and the unique value proposition that attracts buyers to this sustainable community. This specialized knowledge can save you thousands and prevent costly mistakes."
              },
              {
                question: "What's the difference between buying new construction vs. resale in Babcock Ranch?",
                answer: "New construction offers customization, builder warranties, and modern energy efficiency, but requires understanding builder contracts and navigating the construction timeline. Resale homes may offer better value, established landscaping, and quicker move-in, but require traditional inspections and negotiations. A specialist agent guides you through either process."
              },
              {
                question: "How do solar power agreements work in Babcock Ranch?",
                answer: "Most Babcock Ranch homes include solar panels through a lease or power purchase agreement. These agreements transfer to new owners and can provide significant energy savings. Your agent should review the specific terms, monthly costs, and savings history to ensure you understand this unique aspect of your purchase."
              },
              {
                question: "What should I know about HOA fees in Babcock Ranch?",
                answer: "HOA fees vary by village and typically range from $150-$400+ monthly, covering different amenities and services. Some villages include lawn care, internet, or other benefits. A Babcock Ranch specialist can explain the differences between villages and help you understand what your fees include."
              },
              {
                question: "Is Babcock Ranch a good investment for real estate?",
                answer: "Babcock Ranch has shown strong appreciation and continues to grow as the community expands. The unique solar-powered aspect, quality of life, and sustainable design attract environmentally conscious buyers. However, like any real estate investment, market conditions vary. A local specialist can provide current market analysis for your specific situation."
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
            <h2 className="text-3xl font-bold mb-4">Ready to Buy or Sell in Babcock Ranch?</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Connect with expert real estate agents who specialize in Babcock Ranch. 
              Get personalized guidance for buying, selling, or investing in this unique community.
            </p>
            <ContactForm 
              title="Connect with a Babcock Ranch Agent"
              description="Tell us about your real estate needs and we'll connect you with qualified local agents who specialize in this community."
              showServiceType={true}
              buttonText="Get Connected"
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-2xl font-bold text-stone-800 mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog/buying-new-construction" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Buyer's Guide</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Guide to Buying New Construction in Babcock Ranch
                </h3>
              </div>
            </Link>
            <Link href="/blog/solar-home-buying" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Solar Living</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  What to Know When Buying a Solar-Powered Home
                </h3>
              </div>
            </Link>
            <Link href="/blog/babcock-ranch-villages" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Community Guide</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Understanding Babcock Ranch's Different Villages
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
