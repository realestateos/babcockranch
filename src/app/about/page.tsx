import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Babcock Ranch Homeowner Guide",
  description: "Learn about the Babcock Ranch Homeowner Guide and our mission to help homeowners discover trusted local services and resources.",
  openGraph: {
    title: "About Us | Babcock Ranch Homeowner Guide",
    description: "Learn about the Babcock Ranch Homeowner Guide and our mission to help homeowners discover trusted local services and resources.",
    url: "https://babcockranchhomeownerguide.com/about",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/home-exterior.jpg" 
            alt="Babcock Ranch home"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/70" />
        
        <div className="relative max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Building a Resource for Babcock Ranch Homeowners
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              We're creating a comprehensive guide to help homeowners in America's first 
              solar-powered town navigate homeownership with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Our Mission</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              The Babcock Ranch Homeowner Guide was created with a simple mission: to make life easier 
              for homeowners in Babcock Ranch, Florida. As one of America's most innovative communities, 
              Babcock Ranch attracts residents who value sustainability, technology, and quality living. 
              We believe those same residents deserve access to quality local services and reliable 
              homeowner information.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Whether you're a new homeowner settling into your first home, a longtime resident looking 
              to upgrade your property, or someone planning a move to this unique community, we're 
              building resources to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">What We're Building</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              We're curating local service categories and developing resources specifically 
              tailored to the needs of Babcock Ranch homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Curated Vendor Directory",
                description: "A carefully selected collection of trusted local service providers, from landscaping and pool maintenance to HVAC and home security.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: "Homeowner Resources",
                description: "Helpful articles, checklists, and guides covering everything from new homeowner essentials to Florida-specific home maintenance.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                title: "Community Connection",
                description: "Information about local events, community features, and ways to connect with fellow Babcock Ranch residents.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-stone-200">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Babcock Ranch */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center">Why Babcock Ranch?</h2>
          <div className="prose prose-lg max-w-none text-stone-600">
            <p className="leading-relaxed mb-6">
              Babcock Ranch isn't just another Florida community—it's a vision of sustainable 
              living come to life. As America's first solar-powered town, it represents a new 
              way of thinking about community development, environmental responsibility, and 
              quality of life.
            </p>
            <p className="leading-relaxed mb-6">
              With its focus on green technology, walkable neighborhoods, preserved natural 
              spaces, and forward-thinking amenities, Babcock Ranch attracts residents who 
              value innovation and sustainability. We believe these homeowners deserve services 
              and resources that match the quality and thoughtfulness of their community.
            </p>
            <p className="leading-relaxed">
              Whether you're drawn to the solar-powered infrastructure, the extensive trail 
              systems, the top-rated schools, or the strong sense of community, we're here to 
              help you make the most of your Babcock Ranch home.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us on This Journey</h2>
          <p className="text-emerald-100/90 text-lg mb-8 max-w-2xl mx-auto">
            We're actively building our resources and curating our vendor directory. 
            Sign up to stay updated on new additions and exclusive homeowner content.
          </p>
          <a 
            href="/homeowner-checklist" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Get the Free Checklist
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
