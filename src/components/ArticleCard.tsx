import Link from "next/link";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  readTime?: string;
}

export default function ArticleCard({ title, excerpt, slug, category, readTime = "5 min read" }: ArticleCardProps) {
  return (
    <Link href={`/articles/${slug}`} className="group block">
      <article className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        {/* Placeholder Image */}
        <div className="aspect-video bg-gradient-to-br from-emerald-100 to-stone-200 flex items-center justify-center">
          <svg className="w-12 h-12 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
          </svg>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
              {category}
            </span>
            <span className="text-xs text-stone-500">{readTime}</span>
          </div>
          
          <h3 className="text-lg font-semibold text-stone-800 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="text-stone-600 text-sm leading-relaxed line-clamp-3 flex-1">
            {excerpt}
          </p>
          
          <div className="mt-4 flex items-center text-emerald-700 font-medium text-sm group-hover:gap-2 transition-all">
            <span>Read more</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
