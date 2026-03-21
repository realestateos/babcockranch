# Babcock Ranch Homeowner Guide

A clean, fast local homeowner guide website for Babcock Ranch, Florida.

## Overview

**Live URL:** https://babcockranchhomeownerguide.com (after deployment)

**Primary Goal:** Launch a production-ready website so the domain begins aging and can be indexed by Google before December. This is Version 1 focused on domain aging, indexing, and local topical authority.

**Brand Position:** Trusted homeowner guide for Babcock Ranch — helping residents set up, upgrade, maintain, and enjoy their homes.

## Tech Stack

- **Framework:** Next.js 14 with static export
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build Output:** Static HTML files in `/dist`

## Pages Included

1. **Homepage (/)** - Hero, featured categories, articles, CTAs
2. **About (/about)** - Mission, local focus, vendor info
3. **Contact (/contact)** - Contact form and service/vendor CTAs
4. **Request a Service (/request-a-service)** - Service request form
5. **Homeowner Checklist (/homeowner-checklist)** - Lead magnet page
6. **Vendors (/vendors)** - Vendor directory placeholder
7. **Articles Hub (/articles)** - Article index
8. **6 Articles** with real content:
   - New Homeowner Checklist for Babcock Ranch
   - Best Types of Services New Construction Homeowners Usually Need First
   - How to Prioritize Outdoor Upgrades After Buying a New Build
   - What Homeowners Should Know Before Hiring a Local Service Company
   - How to Keep a New Florida Home Maintained Year-Round
   - Top Home Projects That Often Matter Most in the First Year
9. **Privacy Policy (/privacy-policy)**
10. **Terms of Service (/terms)**

## Technical Features

- ✅ robots.txt (allow all, include sitemap)
- ✅ sitemap.xml (15 pages)
- ✅ Favicon and touch icons
- ✅ Canonical tags
- ✅ Open Graph meta tags
- ✅ Twitter/X meta tags
- ✅ Schema.org markup (WebSite, Organization)
- ✅ Page titles and meta descriptions
- ✅ Clean URL structure with trailing slashes
- ✅ Mobile responsive design
- ✅ Google Analytics ready (add GA_MEASUREMENT_ID)
- ✅ HTTPS-ready

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Generate sitemap only
npm run sitemap
```

## Deployment

### Option 1: Cloudflare Pages (Recommended)

1. Push code to GitHub
2. Connect repository to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

### Option 2: Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings will be auto-detected
4. Deploy!

### Option 3: Vercel

1. Push code to GitHub
2. Import project to Vercel
3. Deploy!

### Option 4: Static Hosting (Any Web Server)

1. Run `npm run build`
2. Upload contents of `dist/` folder to your web server
3. Configure domain and SSL

## Post-Launch Checklist

- [ ] Connect domain (BabcockRanchHomeownerGuide.com)
- [ ] Verify SSL certificate is active
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for homepage and top pages
- [ ] Set up Google Analytics (replace GA_MEASUREMENT_ID in layout.tsx)
- [ ] Create Google Search Console property
- [ ] Test all forms (contact, service request, email signup)
- [ ] Verify mobile responsiveness on real devices
- [ ] Check all internal links work correctly
- [ ] Test page load speeds

## Monthly Tasks

- [ ] Add 2-4 new articles
- [ ] Update existing content as needed
- [ ] Review and respond to service requests
- [ ] Monitor Google Search Console for issues
- [ ] Track keyword rankings and traffic

## Future Enhancements

- Add vendor landing pages
- Implement email newsletter system
- Add user reviews for service providers
- Create community forum or Q&A section
- Add video content
- Implement advanced SEO features

## Contact

For questions or issues, contact: hello@babcockranchhomeownerguide.com
