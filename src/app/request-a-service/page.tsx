import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request a Service | Babcock Ranch Homeowner Guide",
  description: "Looking for a specific home service in Babcock Ranch? Submit a service request and we'll help connect you with trusted local professionals.",
  openGraph: {
    title: "Request a Service | Babcock Ranch Homeowner Guide",
    description: "Looking for a specific home service in Babcock Ranch? Submit a service request and we'll help connect you with trusted local professionals.",
    url: "https://babcockranchhomeownerguide.com/request-a-service",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/request-a-service",
  },
};

export default function RequestServicePage() {
  const serviceTypes = [
    { name: "Landscaping & Lawn Care", description: "Lawn maintenance, garden design, tree services" },
    { name: "Pool Services", description: "Pool cleaning, maintenance, repairs, and installations" },
    { name: "HVAC & Air Conditioning", description: "AC installation, repair, and maintenance" },
    { name: "Pest Control", description: "Termite, mosquito, and general pest prevention" },
    { name: "Home Cleaning", description: "Regular cleaning, deep cleaning, move-in/out cleaning" },
    { name: "Handyman Services", description: "General repairs, installations, small projects" },
    { name: "Home Security", description: "Security systems, cameras, smart home integration" },
    { name: "Plumbing", description: "Plumbing repairs, installations, and maintenance" },
    { name: "Electrical", description: "Electrical work, lighting, panel upgrades" },
    { name: "Flooring", description: "Hardwood, tile, carpet installation and refinishing" },
    { name: "Painting", description: "Interior and exterior painting services" },
    { name: "Window Treatments", description: "Blinds, shutters, curtains, and installation" },
    { name: "Appliance Repair", description: "Repair and maintenance for home appliances" },
    { name: "Garage Door Services", description: "Installation, repair, and maintenance" },
    { name: "Other", description: "Describe your specific need in the message" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Service Request</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Request a Service
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Need help finding a trusted local service provider? Tell us what you're 
              looking for and we'll help connect you with quality professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Service Request Section */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Column */}
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">How It Works</h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                We're actively building our curated vendor directory. While we're populating 
                our recommendations, we can still help connect you with quality service 
                providers in the Babcock Ranch area.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  {
                    step: "1",
                    title: "Submit Your Request",
                    description: "Fill out the form with details about the service you need.",
                  },
                  {
                    step: "2",
                    title: "We Review & Research",
                    description: "Our team identifies qualified local providers for your specific need.",
                  },
                  {
                    step: "3",
                    title: "Get Connected",
                    description: "We send you recommendations and can facilitate introductions if desired.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-700 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800">{item.title}</h3>
                      <p className="text-stone-600 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 border border-stone-200">
                <h3 className="font-semibold text-stone-800 mb-4">Service Categories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceTypes.slice(0, 8).map((service, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-stone-600">
                      <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {service.name}
                    </div>
                  ))}
                  <div className="text-sm text-emerald-700 font-medium">
                    + more categories
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <ContactForm 
              title="Submit Your Request"
              description="Provide details about the service you need and your contact information."
              showServiceType={true}
              buttonText="Submit Request"
            />
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <div className="bg-amber-50 rounded-xl p-8 border border-amber-100">
            <svg className="w-12 h-12 text-amber-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Important Note</h3>
            <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
              This is a free service to help homeowners find quality local providers. 
              We do not charge for referrals, and you are under no obligation to use 
              any provider we recommend. Always do your own due diligence when hiring 
              service professionals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
