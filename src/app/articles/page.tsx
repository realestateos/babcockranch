import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Homeowner Articles & Resources | Babcock Ranch Homeowner Guide",
  description: "Browse our collection of articles, guides, and resources for Babcock Ranch homeowners. Tips for new construction, maintenance, and Florida living.",
  openGraph: {
    title: "Homeowner Articles & Resources | Babcock Ranch Homeowner Guide",
    description: "Browse our collection of articles, guides, and resources for Babcock Ranch homeowners. Tips for new construction, maintenance, and Florida living.",
    url: "https://babcockranchhomeownerguide.com/articles",
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/articles",
  },
};

export default function ArticlesPage() {
  const articles = [
    {
      title: "The Ultimate New Homeowner Checklist for Babcock Ranch",
      excerpt: "Everything you need to do in your first 30, 60, and 90 days as a new homeowner in Babcock Ranch. From changing locks to setting up services, we've got you covered.",
      slug: "new-homeowner-checklist",
      category: "Moving In",
      readTime: "8 min read",
    },
    {
      title: "Essential Services New Construction Homeowners Need",
      excerpt: "Discover the key services that every new construction homeowner should set up right away. Don't wait until you need them to find reliable providers.",
      slug: "services-new-construction-homeowners-need",
      category: "Home Services",
      readTime: "6 min read",
    },
    {
      title: "How to Prioritize Your Outdoor Upgrades in Babcock Ranch",
      excerpt: "Make the most of Florida's outdoor living weather. Learn which outdoor projects to tackle first and how to create your perfect backyard oasis.",
      slug: "prioritize-outdoor-upgrades",
      category: "Home Improvement",
      readTime: "7 min read",
    },
    {
      title: "What to Look for When Hiring a Local Service Company",
      excerpt: "Important factors to consider when choosing service providers in the Babcock Ranch area. Protect yourself and ensure quality work.",
      slug: "hiring-local-service-company",
      category: "Home Services",
      readTime: "5 min read",
    },
    {
      title: "Florida Home Maintenance: A Seasonal Guide",
      excerpt: "Year-round maintenance tips specifically for Florida homeowners. Deal with humidity, storms, heat, and everything else the Sunshine State throws at you.",
      slug: "florida-home-maintenance",
      category: "Maintenance",
      readTime: "7 min read",
    },
    {
      title: "Smart Home Projects for Your First Year",
      excerpt: "The best home improvement projects to tackle in your first year of ownership. Build equity and create the home of your dreams.",
      slug: "first-year-home-projects",
      category: "Home Improvement",
      readTime: "6 min read",
    },
  ];

  const categories = [
    { name: "All", count: 6 },
    { name: "Moving In", count: 1 },
    { name: "Home Services", count: 2 },
    { name: "Home Improvement", count: 2 },
    { name: "Maintenance", count: 1 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Homeowner Articles & Guides
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              Practical advice, tips, and insights to help you make the most of your 
              Babcock Ranch home. From move-in day to ongoing maintenance, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-emerald-700 text-white"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">
            Want More Homeowner Tips?
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Join our newsletter to get the latest articles, resources, and updates 
            delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-700 text-white font-medium rounded-lg hover:bg-emerald-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
