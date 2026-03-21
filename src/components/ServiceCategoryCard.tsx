import Link from "next/link";

interface ServiceCategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  vendorCount?: number;
}

export default function ServiceCategoryCard({ title, description, href, icon, vendorCount }: ServiceCategoryCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 h-full">
        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
          <div className="text-emerald-700">
            {icon}
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-stone-800 mb-2 group-hover:text-emerald-700 transition-colors">
          {title}
        </h3>
        
        <p className="text-stone-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          {vendorCount !== undefined ? (
            <span className="text-xs text-stone-500">
              {vendorCount} vendors
            </span>
          ) : (
            <span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded-full">
              Coming soon
            </span>
          )}
          
          <svg className="w-5 h-5 text-stone-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
