import type { Metadata } from "next";
import EmailSignupForm from "@/components/EmailSignupForm";

export const metadata: Metadata = {
  title: "Free New Homeowner Checklist | Babcock Ranch Homeowner Guide",
  description: "Download our comprehensive New Homeowner Checklist for Babcock Ranch. Everything you need for your first 30, 60, and 90 days as a new homeowner.",
  openGraph: {
    title: "Free New Homeowner Checklist | Babcock Ranch Homeowner Guide",
    description: "Download our comprehensive New Homeowner Checklist for Babcock Ranch. Everything you need for your first 30, 60, and 90 days as a new homeowner.",
    url: "https://babcockranchhomeownerguide.com/homeowner-checklist",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/homeowner-checklist",
  },
};

export default function HomeownerChecklistPage() {
  const checklistItems = [
    {
      title: "First 30 Days",
      items: [
        "Change all exterior door locks",
        "Set up utilities (electric, water, internet)",
        "Locate and label electrical panel",
        "Find water main shut-off valve",
        "Test all smoke and CO detectors",
        "Set up mail forwarding",
        "Register with HOA if applicable",
        "Schedule HVAC inspection/maintenance",
        "Document home condition with photos",
        "Set up emergency contacts list",
      ],
    },
    {
      title: "Days 31-60",
      items: [
        "Set up lawn and landscaping services",
        "Schedule pest control inspection",
        "Deep clean entire home",
        "Organize important documents",
        "Research and set up home security",
        "Create home maintenance calendar",
        "Meet your neighbors",
        "Explore local amenities",
        "Set up pool maintenance schedule",
        "Review and understand home warranty",
      ],
    },
    {
      title: "Days 61-90",
      items: [
        "Schedule routine HVAC filter changes",
        "Plan first major home project",
        "Set up gutter cleaning schedule",
        "Research window treatments",
        "Create hurricane prep plan",
        "Set up outdoor living spaces",
        "Join local community groups",
        "Review and adjust budget",
        "Plan landscaping improvements",
        "Schedule annual inspections",
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="inline-block bg-emerald-600/50 backdrop-blur-sm text-emerald-100 px-4 py-1 rounded-full text-sm font-medium mb-6">
              Free Download
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Complete New Homeowner Checklist
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Your step-by-step guide to settling into your Babcock Ranch home. 
              Everything you need for a smooth transition in your first 90 days.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Preview */}
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">
                What's Inside the Checklist
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Moving into a new home—especially in a unique community like Babcock Ranch—can feel overwhelming. 
                Our comprehensive checklist breaks down everything you need to do into manageable chunks 
                over your first 90 days.
              </p>

              <div className="space-y-8">
                {checklistItems.map((section, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-stone-200">
                    <h3 className="text-xl font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-stone-600">
                          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-100">
                <h3 className="font-semibold text-emerald-900 mb-2">Plus Florida-Specific Tips</h3>
                <p className="text-emerald-800/80 text-sm">
                  Includes essential information about hurricane preparation, Florida lawn care, 
                  pest control considerations, and other region-specific advice for Southwest Florida homeowners.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-2">
                    Get Your Free Checklist
                  </h3>
                  <p className="text-stone-600">
                    Enter your email below and we'll send the complete checklist directly to your inbox.
                  </p>
                </div>

                <EmailSignupForm 
                  buttonText="Send Me the Checklist"
                  showName={true}
                  compact={true}
                />

                <div className="mt-6 pt-6 border-t border-stone-200">
                  <div className="flex items-center justify-center gap-4 text-sm text-stone-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Instant delivery
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      100% free
                    </span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-6 bg-stone-100 rounded-xl p-6">
                <blockquote className="text-stone-700 italic mb-4">
                  "This checklist was a lifesaver during our move! It helped us stay organized 
                  and ensured we didn't miss anything important in those first few months."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-800 font-semibold">
                    S
                  </div>
                  <div>
                    <p className="font-medium text-stone-800 text-sm">Sarah M.</p>
                    <p className="text-stone-500 text-xs">New Babcock Ranch Resident</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
