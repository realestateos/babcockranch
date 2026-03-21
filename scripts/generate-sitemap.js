const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://babcockranchhomeownerguide.com';
const DIST_DIR = path.join(__dirname, '..', 'dist');

// Static pages
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/request-a-service', priority: '0.9', changefreq: 'monthly' },
  { url: '/homeowner-checklist', priority: '0.9', changefreq: 'monthly' },
  { url: '/vendors', priority: '0.8', changefreq: 'weekly' },
  { url: '/articles', priority: '0.9', changefreq: 'weekly' },
  { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
];

// Article pages - scan the articles directory
function getArticlePages() {
  const articlesDir = path.join(__dirname, '..', 'src', 'app', 'articles');
  const articles = [];
  
  if (fs.existsSync(articlesDir)) {
    const entries = fs.readdirSync(articlesDir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory() && entry.name !== 'page.tsx') {
        const pagePath = path.join(articlesDir, entry.name, 'page.tsx');
        if (fs.existsSync(pagePath)) {
          articles.push({
            url: `/articles/${entry.name}`,
            priority: '0.8',
            changefreq: 'monthly'
          });
        }
      }
    }
  }
  
  return articles;
}

function generateSitemap() {
  const articles = getArticlePages();
  const allPages = [...staticPages, ...articles];
  
  const today = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  for (const page of allPages) {
    sitemap += `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  }

  sitemap += '</urlset>';
  
  // Write to public folder (source)
  const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, sitemap);
  
  // Write to dist folder (if it exists for deployment)
  if (fs.existsSync(DIST_DIR)) {
    const distPath = path.join(DIST_DIR, 'sitemap.xml');
    fs.writeFileSync(distPath, sitemap);
  }
  
  console.log(`✅ Sitemap generated with ${allPages.length} URLs`);
  console.log(`📄 Articles found: ${articles.length}`);
  console.log(`🔗 Public: ${publicPath}`);
  if (fs.existsSync(DIST_DIR)) {
    console.log(`🔗 Dist: ${path.join(DIST_DIR, 'sitemap.xml')}`);
  }
}

generateSitemap();