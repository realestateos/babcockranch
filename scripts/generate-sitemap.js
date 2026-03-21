const fs = require('fs');
const path = require('path');

const baseUrl = 'https://babcockranchhomeownerguide.com';

const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about/', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact/', priority: '0.8', changefreq: 'monthly' },
  { url: '/request-a-service/', priority: '0.9', changefreq: 'monthly' },
  { url: '/homeowner-checklist/', priority: '0.9', changefreq: 'monthly' },
  { url: '/vendors/', priority: '0.8', changefreq: 'weekly' },
  { url: '/articles/', priority: '0.9', changefreq: 'weekly' },
  { url: '/articles/new-homeowner-checklist/', priority: '0.8', changefreq: 'monthly' },
  { url: '/articles/services-new-construction-homeowners-need/', priority: '0.8', changefreq: 'monthly' },
  { url: '/articles/prioritize-outdoor-upgrades/', priority: '0.8', changefreq: 'monthly' },
  { url: '/articles/hiring-local-service-company/', priority: '0.8', changefreq: 'monthly' },
  { url: '/articles/florida-home-maintenance/', priority: '0.8', changefreq: 'monthly' },
  { url: '/articles/first-year-home-projects/', priority: '0.8', changefreq: 'monthly' },
  { url: '/privacy-policy/', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms/', priority: '0.5', changefreq: 'yearly' },
];

const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully!');
console.log(`📄 ${pages.length} pages included`);
