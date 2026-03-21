import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Best Pest Control in Babcock Ranch | Termite & Mosquito Services FL",
  description: "Find the best pest control in Babcock Ranch, FL. Curated termite, mosquito, and general pest professionals serving America's first solar-powered town. Request service today.",
  openGraph: {
    title: "Best Pest Control in Babcock Ranch | Termite & Mosquito Services FL",
    description: "Find the best pest control in Babcock Ranch, FL. Curated professionals serving the community.",
    url: "https://babcockranchhomeownerguide.com/vendors/pest-control",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/vendors/pest-control",
  },
};

export default function PestControlPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Vendor Category</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Best Pest Control in Babcock Ranch, FL
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Connect with licensed pest control professionals who understand Florida's unique pest 
              challenges and can protect your home year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-stone-600 leading-relaxed mb-6">
              Living in <strong>Babcock Ranch, Florida</strong> means enjoying beautiful weather, 
              stunning natural surroundings, and an outdoor lifestyle—but it also means dealing with 
              Florida's abundant and diverse pest population. From destructive termites that threaten 
              your home's structure to disease-carrying mosquitoes that can ruin outdoor enjoyment, 
              effective pest control is essential for comfortable, healthy living in Southwest Florida.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For new homeowners in Babcock Ranch, establishing a comprehensive pest control plan 
              should be a priority from day one. Florida's subtropical climate creates ideal breeding 
              conditions for pests year-round, and new construction can actually attract certain pests 
              as the surrounding ecosystem adjusts. Additionally, many Babcock Ranch homes are built 
              near wetlands and natural preserves, increasing exposure to wildlife and insects.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Whether you're dealing with an active infestation or seeking preventive protection, our 
              curated directory connects you with the <strong>best local pest control professionals</strong> 
              who have experience serving the Babcock Ranch community and understand Florida's unique 
              pest challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Pest Control Services We Recommend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Termite Protection",
                description: "Comprehensive termite inspections, treatment systems, and ongoing monitoring to protect your investment.",
                icon: "🐜"
              },
              {
                title: "Mosquito Control",
                description: "Monthly barrier sprays, larvicide treatments, and misting systems for bite-free outdoor living.",
                icon: "🦟"
              },
              {
                title: "General Pest Control",
                description: "Treatment for ants, roaches, spiders, silverfish, and other common Florida household pests.",
                icon: "🐛"
              },
              {
                title: "Rodent Control",
                description: "Inspection, exclusion, trapping, and ongoing monitoring for rats and mice.",
                icon: "🐀"
              },
              {
                title: "Wildlife Removal",
                description: "Humane removal of raccoons, squirrels, snakes, and other nuisance wildlife.",
                icon: "🦝"
              },
              {
                title: "Lawn Pest Treatment",
                description: "Grub, chinch bug, and sod webworm control to protect your Florida lawn.",
                icon: "🌿"
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
                Why Choose a Babcock Ranch Pest Control Professional
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Local Pest Expertise",
                    description: "Knowledge of Florida-specific pests, seasonal patterns, and effective treatment methods."
                  },
                  {
                    title: "Eco-Friendly Options",
                    description: "Many local providers offer green solutions that protect your family, pets, and Babcock Ranch's natural environment."
                  },
                  {
                    title: "Rapid Response",
                    description: "Local professionals can respond quickly to urgent pest situations and emergencies."
                  },
                  {
                    title: "Warranty & Guarantee",
                    description: "Reputable local companies stand behind their work with service guarantees."
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
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Common Florida Pests</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Termites:</strong> Subterranean and drywood termites are active year-round</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Mosquitoes:</strong> Peak season April through October</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Ghost Ants:</strong> Common in new construction areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Palmetto Bugs:</strong> Florida's large outdoor roaches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Snakes:</strong> Several venomous species native to the area</span>
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
                question: "How much does pest control cost in Babcock Ranch?",
                answer: "General pest control typically ranges from $75-$125 per month for ongoing service. Termite protection plans range from $400-$1,200 annually depending on treatment type and home size. Mosquito control services average $75-$100 per month during peak season. Initial treatments and one-time services are priced based on specific needs."
              },
              {
                question: "How often should I have pest control service?",
                answer: "In Florida's climate, monthly or bi-monthly general pest control is recommended for optimal protection. Mosquito treatments are typically monthly during peak season (April-October). Termite monitoring should be quarterly. The frequency can be adjusted based on your specific property, surrounding environment, and pest pressure."
              },
              {
                question: "Are pest control treatments safe for pets and children?",
                answer: "Reputable pest control companies use EPA-approved products that are safe when applied correctly. Most treatments require keeping pets and children away from treated areas for 2-4 hours until dry. Many providers now offer organic or reduced-chemical options for families with concerns about traditional pesticides."
              },
              {
                question: "What are signs of termites in my home?",
                answer: "Warning signs include mud tubes on foundation walls, discarded wings near windows or doors, hollow-sounding wood, blistered paint, and small piles of frass (termite droppings). Florida's warm climate means termites are active year-round, so regular inspections are crucial."
              },
              {
                question: "Do new homes need pest control?",
                answer: "Absolutely. New construction often disturbs existing pest habitats, driving pests to seek new shelter—potentially your home. Additionally, construction materials may contain pests, and the cleared land around new homes provides ideal breeding conditions. Starting preventive treatment early is highly recommended."
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
            <h2 className="text-3xl font-bold mb-4">Protect Your Home from Pests</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Connect with licensed pest control professionals serving Babcock Ranch. 
              Get quotes for termite protection, mosquito control, and general pest services.
            </p>
            <ContactForm 
              title="Request Pest Control Service"
              description="Tell us about your pest control needs and we'll connect you with qualified local professionals."
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
            <Link href="/blog/termite-protection-florida" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Home Protection</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Termite Protection: Essential for Florida Homeowners
                </h3>
              </div>
            </Link>
            <Link href="/blog/mosquito-control-tips" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Outdoor Living</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Mosquito Control Tips for Your Babcock Ranch Backyard
                </h3>
              </div>
            </Link>
            <Link href="/blog/new-home-pest-prevention" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Prevention</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Pest Prevention for New Construction Homes
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
