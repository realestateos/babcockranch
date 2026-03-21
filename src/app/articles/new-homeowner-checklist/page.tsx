import type { Metadata } from "next";
import Link from "next/link";
import EmailSignupForm from "@/components/EmailSignupForm";

export const metadata: Metadata = {
  title: "The Ultimate New Homeowner Checklist for Babcock Ranch | Babcock Ranch Homeowner Guide",
  description: "A comprehensive 90-day checklist for new Babcock Ranch homeowners. Everything you need to do when moving into your new home, from changing locks to setting up essential services.",
  openGraph: {
    title: "The Ultimate New Homeowner Checklist for Babcock Ranch | Babcock Ranch Homeowner Guide",
    description: "A comprehensive 90-day checklist for new Babcock Ranch homeowners. Everything you need to do when moving into your new home, from changing locks to setting up essential services.",
    url: "https://babcockranchhomeownerguide.com/articles/new-homeowner-checklist",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/articles/new-homeowner-checklist",
  },
};

export default function NewHomeownerChecklistArticle() {
  return (
    <div>
      {/* Article Header */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-emerald-600/50 backdrop-blur-sm text-emerald-100 px-3 py-1 rounded-full text-sm font-medium">
              Moving In
            </span>
            <span className="text-emerald-200/80 text-sm">8 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The Ultimate New Homeowner Checklist for Babcock Ranch
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/90 leading-relaxed">
            Your complete guide to settling into your new home. Everything you need to tackle 
            in your first 30, 60, and 90 days as a Babcock Ranch homeowner.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none prose-headings:text-stone-800 prose-p:text-stone-600 prose-a:text-emerald-700">
            <p className="lead text-xl text-stone-700">
              Congratulations on your new home in Babcock Ranch! As America's first solar-powered town, 
              you're now part of an innovative community that values sustainability, technology, and 
              quality living. But before you kick back and enjoy the Florida sunshine, there are some 
              essential tasks to tackle.
            </p>

            <h2>First 30 Days: The Essentials</h2>
            <p>
              Your first month is all about securing your home, setting up essential services, and 
              establishing your foundation as a homeowner.
            </p>

            <h3>Security & Safety First</h3>
            <ul>
              <li><strong>Change all exterior door locks</strong> – You never know who has copies of the old keys</li>
              <li><strong>Locate and label your electrical panel</strong> – Know which breakers control which areas</li>
              <li><strong>Find the water main shut-off valve</strong> – Critical for emergencies</li>
              <li><strong>Test all smoke and carbon monoxide detectors</strong> – Replace batteries if needed</li>
              <li><strong>Check and replace HVAC filters</strong> – Start with a clean system</li>
            </ul>

            <h3>Utilities & Services Setup</h3>
            <ul>
              <li>Transfer or set up electric service (Babcock Ranch is solar-powered, but you'll still need an account)</li>
              <li>Activate water and sewer services</li>
              <li>Schedule internet/cable installation</li>
              <li>Set up trash and recycling pickup</li>
              <li>Update your address with USPS</li>
            </ul>

            <h3>Documentation & Organization</h3>
            <ul>
              <li>Document your home's condition with photos and video</li>
              <li>File all warranty information and manuals in one place</li>
              <li>Create a home maintenance calendar</li>
              <li>Get familiar with your HOA rules and contact information</li>
            </ul>

            <h2>Days 31-60: Getting Comfortable</h2>
            <p>
              Now that the basics are handled, it's time to set up ongoing services and start making 
              your house feel like home.
            </p>

            <h3>Essential Services</h3>
            <ul>
              <li>Schedule lawn and landscaping service (Florida grass grows fast year-round)</li>
              <li>Arrange for pest control inspection and ongoing service</li>
              <li>Set up pool maintenance if you have a pool</li>
              <li>Schedule HVAC maintenance check</li>
              <li>Research and set up home security system</li>
            </ul>

            <h3>Community Connection</h3>
            <ul>
              <li>Introduce yourself to neighbors</li>
              <li>Explore local amenities – parks, trails, downtown</li>
              <li>Join community Facebook groups or forums</li>
              <li>Attend a community event if available</li>
              <li>Find your favorite local spots</li>
            </ul>

            <h2>Days 61-90: Long-term Planning</h2>
            <p>
              With your home running smoothly, it's time to think about improvements, maintenance 
              schedules, and making the most of Florida living.
            </p>

            <h3>Maintenance Planning</h3>
            <ul>
              <li>Set up calendar reminders for HVAC filter changes (monthly in Florida)</li>
              <li>Schedule annual pest inspection</li>
              <li>Plan for seasonal maintenance tasks</li>
              <li>Create a hurricane preparedness kit and plan</li>
              <li>Research gutter cleaning schedule (quarterly recommended)</li>
            </ul>

            <h3>Home Improvements</h3>
            <ul>
              <li>Prioritize your first major home project</li>
              <li>Research window treatments (important for Florida sun and storms)</li>
              <li>Plan outdoor living space improvements</li>
              <li>Consider energy efficiency upgrades</li>
              <li>Explore smart home technology options</li>
            </ul>

            <h2>Babcock Ranch Specific Tips</h2>
            <p>
              Living in Babcock Ranch comes with some unique considerations:
            </p>

            <ul>
              <li><strong>Solar Power:</strong> Understand how the community solar system works and how it affects your energy bills</li>
              <li><strong>Trail System:</strong> Take advantage of the 50+ miles of trails for walking, biking, and exploring</li>
              <li><strong>Fiber Internet:</strong> Babcock Ranch has high-speed fiber – make sure you're getting the most from it</li>
              <li><strong>Downtown:</strong> Explore the sustainable downtown area for dining, shopping, and events</li>
              <li><strong>Storm Resilience:</strong> The community is designed to be storm-resilient, but personal preparation is still important</li>
            </ul>

            <h2>Download the Complete Checklist</h2>
            <p>
              Want a printable version of this checklist with even more detail? Get our comprehensive 
              New Homeowner Checklist delivered straight to your inbox.
            </p>
          </div>

          {/* Email Signup Box */}
          <div className="mt-12 bg-stone-50 rounded-xl p-8 border border-stone-200">
            <EmailSignupForm 
              title="Get the Full Checklist"
              description="Enter your email to receive the complete printable checklist with bonus tips."
              buttonText="Send Me the Checklist"
              showName={false}
            />
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-stone-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/articles" 
                className="inline-flex items-center text-emerald-700 font-medium hover:underline"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Articles
              </Link>
              <Link 
                href="/articles/services-new-construction-homeowners-need" 
                className="inline-flex items-center text-emerald-700 font-medium hover:underline"
              >
                Next Article
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
