import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Best Handyman in Babcock Ranch | Home Repair & Installation Services FL",
  description: "Find the best handyman services in Babcock Ranch, FL. Curated home repair, installation, and small project professionals. Request service today.",
  openGraph: {
    title: "Best Handyman in Babcock Ranch | Home Repair & Installation Services FL",
    description: "Find the best handyman services in Babcock Ranch, FL. Curated professionals serving the community.",
    url: "https://babcockranchhomeownerguide.com/vendors/handyman",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/vendors/handyman",
  },
};

export default function HandymanPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Vendor Category</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Best Handyman Services in Babcock Ranch, FL
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Connect with skilled, reliable handymen who can tackle your home repairs, installations, 
              and small projects with professional quality and fair pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-stone-600 leading-relaxed mb-6">
              Every homeowner in <strong>Babcock Ranch, Florida</strong> needs a reliable handyman in 
              their contacts list. From hanging artwork and assembling furniture to repairing drywall 
              and fixing leaky faucets, the small jobs that keep your home functioning and beautiful 
              add up quickly. Having a skilled professional you can trust to handle these tasks saves 
              you time, ensures quality results, and protects your home's value.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For new homeowners in Babcock Ranch, the need for handyman services often starts immediately. 
              New construction homes typically require TV mounting, window treatment installation, 
              shelving, closet organization systems, and various finishing touches that make a house 
              feel like home. Additionally, Florida's climate can accelerate wear on certain home 
              components, making regular minor repairs a necessity rather than a luxury.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Our curated directory connects you with the <strong>best local handyman professionals</strong> 
              serving the Babcock Ranch community. These skilled tradespeople offer a wide range of 
              services, fair pricing, and the reliability that comes from building a reputation in 
              our tight-knit community.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Handyman Services We Recommend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "TV Mounting",
                description: "Professional wall mounting for flat-screen TVs with proper bracket selection and cable concealment.",
                icon: "📺"
              },
              {
                title: "Furniture Assembly",
                description: "Expert assembly of IKEA furniture, outdoor furniture, exercise equipment, and complex pieces.",
                icon: "🪑"
              },
              {
                title: "Drywall Repair",
                description: "Patch holes, repair cracks, and restore damaged drywall to like-new condition.",
                icon: "🔨"
              },
              {
                title: "Fixture Installation",
                description: "Install ceiling fans, light fixtures, faucets, door hardware, and window treatments.",
                icon: "💡"
              },
              {
                title: "Minor Plumbing",
                description: "Fix leaky faucets, replace toilets, repair running toilets, and unclog drains.",
                icon: "🚿"
              },
              {
                title: "Shelving & Storage",
                description: "Install closet systems, garage shelving, floating shelves, and custom storage solutions.",
                icon: "📚"
              },
              {
                title: "Exterior Repairs",
                description: "Screen repair, pressure washing, gutter cleaning, and minor exterior maintenance.",
                icon: "🏡"
              },
              {
                title: "Door & Window Work",
                description: "Install pet doors, repair screens, adjust sticky doors, and weatherstripping.",
                icon: "🚪"
              },
              {
                title: "General Maintenance",
                description: "Caulking, grout repair, touch-up painting, and routine home maintenance tasks.",
                icon: "🛠️"
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
                Why Choose a Babcock Ranch Handyman Professional
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Versatile Expertise",
                    description: "One trusted professional handles multiple projects, saving you from coordinating multiple contractors."
                  },
                  {
                    title: "Local Reliability",
                    description: "Local handymen depend on their reputation in the community and prioritize customer satisfaction."
                  },
                  {
                    title: "Fair Pricing",
                    description: "No inflated prices—local handymen offer competitive rates for quality work."
                  },
                  {
                    title: "Quick Response",
                    description: "Need something fixed fast? Local professionals can often accommodate same-day or next-day service."
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
              <h3 className="text-xl font-semibold text-stone-800 mb-4">When to Call a Handyman</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Jobs too small for specialized contractors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Projects requiring multiple skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Tasks you don't have time or tools for</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Assembly and installation projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Minor repairs and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✗</span>
                  <span>Major electrical or plumbing (call licensed specialists)</span>
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
                question: "How much does a handyman charge in Babcock Ranch?",
                answer: "Handyman rates typically range from $75-$150 per hour depending on experience and job complexity. Some offer flat-rate pricing for common tasks like TV mounting ($100-$200), furniture assembly ($75-$150), or drywall repair ($150-$400). Always request an estimate before work begins."
              },
              {
                question: "What's the difference between a handyman and a contractor?",
                answer: "Handymen handle smaller jobs and general repairs that don't require specialized licenses. Contractors are licensed for specific trades (electrical, plumbing, HVAC) and typically handle larger projects requiring permits. For jobs under $1,000 that don't need permits, a handyman is usually the more economical choice."
              },
              {
                question: "Should I hire a handyman for my new Babcock Ranch home?",
                answer: "Absolutely! New homeowners often need TVs mounted, window treatments installed, closet systems assembled, shelving put up, and various finishing touches completed. A handyman can efficiently knock out your entire to-do list in a day or two, letting you focus on settling into your new community."
              },
              {
                question: "What should I have ready before the handyman arrives?",
                answer: "Have a clear list of all tasks you want completed. Ensure the work areas are accessible and clear of personal items. If you're providing materials (light fixtures, shelving, etc.), have them on-site. For mounting projects, know exactly where you want items placed. Good preparation saves time and money."
              },
              {
                question: "Is a handyman insured?",
                answer: "Reputable handymen carry general liability insurance to protect against accidental damage to your home. Always ask for proof of insurance before hiring. Our vetted professionals are fully insured for your peace of mind."
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
            <h2 className="text-3xl font-bold mb-4">Ready to Tackle Your To-Do List?</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Connect with skilled handyman professionals serving Babcock Ranch. 
              Get quotes for your home repairs, installations, and projects.
            </p>
            <ContactForm 
              title="Request Handyman Service"
              description="Tell us about your project needs and we'll connect you with qualified local handymen."
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
            <Link href="/blog/new-home-to-do-list" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">New Homeowners</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Essential Tasks for Your First Month in Babcock Ranch
                </h3>
              </div>
            </Link>
            <Link href="/blog/diy-vs-handyman" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Home Maintenance</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  DIY vs. Handyman: Knowing When to Call a Pro
                </h3>
              </div>
            </Link>
            <Link href="/blog/home-safety-checklist" className="group">
              <div className="bg-white rounded-xl p-6 border border-stone-200 group-hover:shadow-md transition-shadow h-full">
                <span className="text-emerald-600 text-sm font-medium">Safety</span>
                <h3 className="font-semibold text-stone-800 mt-2 group-hover:text-emerald-700 transition-colors">
                  Home Safety Checklist for New Florida Homeowners
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
