import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Best House Cleaning in Babcock Ranch | Home Cleaning Services FL",
  description: "Find the best house cleaning in Babcock Ranch, FL. Curated home cleaning, deep cleaning, and move-in/out professionals. Request service today.",
  openGraph: {
    title: "Best House Cleaning in Babcock Ranch | Home Cleaning Services FL",
    description: "Find the best house cleaning in Babcock Ranch, FL. Curated professionals serving the community.",
    url: "https://babcockranchhomeownerguide.com/vendors/cleaning",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/vendors/cleaning",
  },
};

export default function CleaningPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Vendor Category</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Best House Cleaning in Babcock Ranch, FL
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Connect with reliable, thorough cleaning professionals who can keep your Babcock Ranch 
              home spotless and give you back your valuable time.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-stone-600 leading-relaxed mb-6">
              Maintaining a clean home in <strong>Babcock Ranch, Florida</strong> presents unique 
              challenges that many homeowners underestimate. Between Florida's sandy soil that 
              tracks indoors, high humidity that promotes mold and mildew, and the active outdoor 
              lifestyle that brings in dirt and debris, keeping your home pristine requires more 
              than just occasional tidying—it demands consistent, thorough cleaning.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For new homeowners in Babcock Ranch, professional cleaning services offer invaluable 
              support during the transition period and beyond. Whether you're moving into a new 
              construction home that needs post-construction cleaning, settling in and want to 
              establish a cleaning routine, or simply seeking to reclaim your weekends from household 
              chores, our curated cleaning professionals understand the specific needs of Florida homes.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Professional house cleaning isn't a luxury—it's an investment in your home's longevity, 
              your family's health, and your personal wellbeing. Our directory connects you with 
              the <strong>best local cleaning professionals</strong> serving the Babcock Ranch community, 
              each thoroughly vetted for reliability, thoroughness, and trustworthiness.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Cleaning Services We Recommend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Regular House Cleaning",
                description: "Weekly, bi-weekly, or monthly cleaning services including dusting, vacuuming, mopping, and bathroom sanitization.",
                icon: "🏠"
              },
              {
                title: "Deep Cleaning",
                description: "Thorough top-to-bottom cleaning including baseboards, ceiling fans, inside appliances, and detailed attention.",
                icon: "✨"
              },
              {
                title: "Move-In/Move-Out Cleaning",
                description: "Comprehensive cleaning for new home purchases, move-outs, or preparing your home for sale.",
                icon: "📦"
              },
              {
                title: "Post-Construction Cleaning",
                description: "Specialized cleaning to remove construction dust, debris, and residue from new builds or renovations.",
                icon: "🔨"
              },
              {
                title: "Green Cleaning",
                description: "Eco-friendly cleaning using non-toxic, environmentally safe products ideal for families with children and pets.",
                icon: "🌿"
              },
              {
                title: "Specialized Services",
                description: "Carpet cleaning, window washing, organization services, and seasonal deep cleans.",
                icon: "🧹"
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
                Why Choose a Babcock Ranch Cleaning Professional
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Local Reliability",
                    description: "Local cleaners can accommodate schedule changes and respond quickly to last-minute requests."
                  },
                  {
                    title: "Florida Home Expertise",
                    description: "Understanding of humidity-related issues, sand management, and Florida-specific cleaning challenges."
                  },
                  {
                    title: "Trusted & Vetted",
                    description: "Local cleaning services rely on reputation in tight-knit communities and undergo thorough background checks."
                  },
                  {
                    title: "Consistent Service",
                    description: "Build a relationship with the same cleaning team who learns your preferences and home's specific needs."
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
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Florida Cleaning Considerations</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Sandy soil requires more frequent floor cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>High humidity promotes mold—regular bathroom cleaning is essential</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Outdoor living means more frequent patio/door track cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Pollen season requires more frequent dusting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Hurricane season preparation includes thorough pre-storm cleaning</span>
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
                question: "How much does house cleaning cost in Babcock Ranch?",
                answer: "Regular house cleaning typically ranges from $120-$200 per visit for a standard 2,000-2,500 square foot home. Deep cleaning services range from $250-$500 depending on home size and condition. Move-in/move-out cleaning averages $300-$600. Most providers offer discounts for recurring weekly or bi-weekly service."
              },
              {
                question: "What's included in a standard house cleaning?",
                answer: "Standard cleaning typically includes dusting all surfaces, vacuuming carpets, mopping hard floors, cleaning and sanitizing bathrooms, wiping kitchen counters and appliance exteriors, emptying trash, and general tidying. Deep cleaning adds services like baseboards, ceiling fans, inside appliances, window sills, and detailed attention to often-missed areas."
              },
              {
                question: "Should I clean my home before moving in to Babcock Ranch?",
                answer: "Absolutely, even in new construction. Post-construction cleaning removes drywall dust, sawdust, paint splatter, and construction debris that can affect air quality and damage surfaces if not properly removed. Even previously occupied homes benefit from a thorough deep clean before you move your belongings in."
              },
              {
                question: "How often should I schedule house cleaning?",
                answer: "Most Babcock Ranch families benefit from bi-weekly service to maintain a clean, healthy home. Larger families or homes with pets may prefer weekly service. Smaller households or those who do daily maintenance may be satisfied with monthly deep cleaning supplemented by personal tidying."
              },
              {
                question: "Are cleaning supplies provided by the service?",
                answer: "Most professional cleaning services bring their own supplies and equipment. However, if you have preferences for specific products (such as eco-friendly or fragrance-free cleaners), most providers will accommodate using your supplies. Discuss product preferences when booking your service."
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
            <h2 className="text-3xl font-bold mb-4">Reclaim Your Time</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Connect with trusted cleaning professionals serving Babcock Ranch. 
              Get quotes for regular cleaning, deep cleaning, or move-in/move-out services.
            </p>
            <ContactForm 
              title="Request Cleaning Service"
              description="Tell us about your cleaning needs and we'll connect you with qualified local professionals."
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
            <Link href="/blog/move-in-cleaning-checklist" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Moving Guide</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Essential Move-In Cleaning Checklist for New Homeowners
                </h3>
              </div>
            </Link>
            <Link href="/blog/post-construction-cleaning" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">New Construction</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Why Post-Construction Cleaning is Essential
                </h3>
              </div>
            </Link>
            <Link href="/blog/green-cleaning-florida" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Eco-Friendly</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Green Cleaning Tips for Florida Homes
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
