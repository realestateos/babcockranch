import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import ServiceCategoryCard from "@/components/ServiceCategoryCard";
import EmailSignupForm from "@/components/EmailSignupForm";

export default function Home() {
  const featuredArticles = [
    {
      title: "The Ultimate New Homeowner Checklist for Babcock Ranch",
      excerpt: "Everything you need to do in your first 30, 60, and 90 days as a new homeowner in Babcock Ranch.",
      slug: "new-homeowner-checklist",
      category: "Moving In",
      readTime: "8 min read",
    },
    {
      title: "Essential Services New Construction Homeowners Need",
      excerpt: "Discover the key services that every new construction homeowner should set up right away.",
      slug: "services-new-construction-homeowners-need",
      category: "Home Services",
      readTime: "6 min read",
    },
    {
      title: "Florida Home Maintenance: A Seasonal Guide",
      excerpt: "Year-round maintenance tips specifically for Florida homeowners dealing with humidity, storms, and heat.",
      slug: "florida-home-maintenance",
      category: "Maintenance",
      readTime: "7 min read",
    },
  ];

  const serviceCategories = [
    {
      title: "Landscaping & Lawn Care",
      description: "Keep your Florida lawn lush and beautiful year-round with professional landscaping services.",
      href: "/vendors/landscaping",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    },
    {
      title: "Pool Services",
      description: "Professional pool maintenance, cleaning, and repair to keep your pool crystal clear.",
      href: "/vendors/pool",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    },
    {
      title: "HVAC & Air Conditioning",
      description: "Beat the Florida heat with reliable HVAC installation, maintenance, and repair services.",
      href: "/vendors/hvac",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>,
    },
    {
      title: "Pest Control",
      description: "Protect your home from Florida's pests with professional prevention and treatment services.",
      href: "/vendors/pest-control",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
    },
    {
      title: "Home Cleaning",
      description: "Professional cleaning services to keep your new home spotless and fresh.",
      href: "/vendors/cleaning",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    },
    {
      title: "Home Security",
      description: "Secure your home with modern security systems, cameras, and monitoring services.",
      href: "/vendors/security",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto container-padding py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-emerald-100">Building a Homeowner Resource for Babcock Ranch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Guide to Life at{" "}
              <span className="text-emerald-300">Babcock Ranch</span>
            </h1>
            
            <p className="text-lg md:text-xl text-emerald-100/90 mb-8 max-w-2xl leading-relaxed">
              Curating local service categories, homeowner tips, and community resources 
              to help you set up, upgrade, and maintain your home in America's first solar-powered town.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/homeowner-checklist" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
              >
                Get Free Homeowner Checklist
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/articles" 
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700/50 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors border border-emerald-600"
              >
                Explore Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-emerald-700 font-medium text-sm uppercase tracking-wider">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-2 mb-4">
              Home Services We're Curating
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              We're building a comprehensive directory of trusted local service providers 
              for Babcock Ranch homeowners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <ServiceCategoryCard key={index} {...category} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/vendors" 
              className="inline-flex items-center justify-center px-6 py-3 text-emerald-700 font-medium border-2 border-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              View All Categories
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-emerald-700 font-medium text-sm uppercase tracking-wider">Resources</span>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-2">
                Featured Articles
              </h2>
            </div>
            <Link 
              href="/articles" 
              className="mt-4 md:mt-0 inline-flex items-center text-emerald-700 font-medium hover:underline"
            >
              View all articles
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="section-padding bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Free Download</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                The Complete New Homeowner Checklist
              </h2>
              <p className="text-emerald-100/90 text-lg mb-6 leading-relaxed">
                Get our comprehensive 90-day checklist designed specifically for new Babcock Ranch homeowners. 
                Everything you need to know to settle in smoothly.
              </p>
              <ul className="space-y-3">
                {[
                  "30, 60, and 90-day action items",
                  "Essential services to set up",
                  "Florida-specific home maintenance tips",
                  "Local resource recommendations"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-emerald-100">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-stone-800">
              <EmailSignupForm 
                title="Get Instant Access"
                description="Enter your email and we'll send the checklist right away."
                buttonText="Download Free Checklist"
                showName={false}
                compact={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-stone-100">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto">
            We're actively building our vendor directory. Request a service and we'll help 
            connect you with the right local professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/request-a-service" 
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700 text-white font-semibold rounded-xl hover:bg-emerald-800 transition-colors shadow-lg"
            >
              Request a Service
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-700 font-semibold rounded-xl hover:bg-stone-50 transition-colors border border-stone-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
