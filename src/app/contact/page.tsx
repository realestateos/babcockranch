import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Babcock Ranch Homeowner Guide",
  description: "Have questions or need assistance? Contact the Babcock Ranch Homeowner Guide team. We're here to help homeowners find the resources they need.",
  openGraph: {
    title: "Contact Us | Babcock Ranch Homeowner Guide",
    description: "Have questions or need assistance? Contact the Babcock Ranch Homeowner Guide team. We're here to help homeowners find the resources they need.",
    url: "https://babcockranchhomeownerguide.com/contact",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Have questions, suggestions, or need help finding a service? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">How Can We Help?</h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Whether you're looking for a specific service recommendation, have feedback 
                on our resources, or want to suggest a vendor for our directory, we're here 
                to listen and assist.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "General Inquiries",
                    description: "Questions about our resources or the Babcock Ranch community",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Service Requests",
                    description: "Need help finding a specific service provider? Let us know.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Vendor Submissions",
                    description: "Are you a local business interested in being featured?",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    ),
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800">{item.title}</h3>
                      <p className="text-stone-600 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-emerald-50 rounded-xl border border-emerald-100">
                <h3 className="font-semibold text-emerald-900 mb-2">Response Time</h3>
                <p className="text-emerald-800/80 text-sm">
                  We typically respond to all inquiries within 24-48 hours during business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm 
              title="Send Us a Message"
              description="Fill out the form below and we'll get back to you as soon as possible."
              buttonText="Send Message"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Is this an official Babcock Ranch website?",
                answer: "No, this is an independent resource created to help Babcock Ranch homeowners. We are not affiliated with Babcock Ranch developer or management, but we are passionate about supporting this unique community."
              },
              {
                question: "How do I suggest a vendor for your directory?",
                answer: "We welcome vendor recommendations from homeowners who have had great experiences. Use the contact form above and select 'Vendor Submissions' as your inquiry type."
              },
              {
                question: "Are your vendor recommendations paid advertisements?",
                answer: "No, our vendor curation process is based on quality and reputation. We do not accept payment for inclusion in our directory. Vendors are selected based on their service quality and reputation in the community."
              },
              {
                question: "Do you cover all of Southwest Florida or just Babcock Ranch?",
                answer: "While our primary focus is serving Babcock Ranch homeowners, many of the service providers we feature also serve the greater Southwest Florida area, including Fort Myers, Punta Gorda, and surrounding communities."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-stone-50 rounded-xl p-6">
                <h3 className="font-semibold text-stone-800 mb-2">{faq.question}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
