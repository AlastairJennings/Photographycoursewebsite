# Sitemap Setup Guide

## ✅ Sitemap System Installed

Your site now has a complete XML sitemap system ready for search engines.

---

## 📁 Files Created

### 1. **Sitemap Generator** (`/utils/sitemap-generator.ts`)
- Automatic sitemap generation
- Includes all pages, courses, resources, and reviews
- Proper XML formatting
- Priority and change frequency settings

### 2. **Build Script** (`/scripts/generate-sitemaps.js`)
- Node.js script to generate static sitemap files
- Creates 5 sitemap files in `/public` directory

### 3. **Robots.txt** (`/public/robots.txt`)
- Instructs search engines how to crawl your site
- References the sitemap location
- Allows crawling of all public pages

---

## 🚀 How to Generate Sitemaps

### Option 1: Run the Build Script (Recommended)

```bash
node scripts/generate-sitemaps.js
```

This will create the following files in `/public`:
- `sitemap.xml` - Main sitemap index
- `sitemap-pages.xml` - Navigation pages
- `sitemap-courses.xml` - Course pages
- `sitemap-resources.xml` - Resource/fact sheets
- `sitemap-reviews.xml` - Camera reviews and guides

### Option 2: Generate Manually in Browser

The sitemap generator utility (`/utils/sitemap-generator.ts`) can be used directly:

```typescript
import { generateAllSitemaps } from './utils/sitemap-generator';

const baseUrl = 'https://thephotocourse.com';
const sitemaps = generateAllSitemaps(baseUrl);

// Access individual sitemaps
console.log(sitemaps['sitemap.xml']);
console.log(sitemaps['sitemap-pages.xml']);
// etc.
```

---

## 📋 Current Sitemap Contents

### Pages Sitemap (`sitemap-pages.xml`)
- Home
- Courses
- Resources
- Glossary
- About
- Contact
- Privacy Policy
- Terms
- Cookie Settings

### Courses Sitemap (`sitemap-courses.xml`)
- Introduction to Photography
- Film & Darkroom Course

### Resources Sitemap (`sitemap-resources.xml`)
- Zone System
- Exposure Triangle
- Composition Guide
- Lighting Techniques

### Reviews Sitemap (`sitemap-reviews.xml`)
- Top Mirrorless Cameras 2025

---

## 🌐 Deployment

### For Static Site Hosting

1. **Run the build script:**
   ```bash
   node scripts/generate-sitemaps.js
   ```

2. **Copy the generated files** from `/public` to your hosting provider's public directory

3. **Verify accessibility:**
   - Visit `https://thephotocourse.com/sitemap.xml`
   - Visit `https://thephotocourse.com/robots.txt`

### For Dynamic Hosting

If you're using server-side rendering or a Node.js server, you can serve sitemaps dynamically using the `SitemapRoute` component or by setting up API routes.

---

## 📊 Submit to Search Engines

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property (thephotocourse.com)
3. Navigate to **Sitemaps** in the left sidebar
4. Enter: `https://thephotocourse.com/sitemap.xml`
5. Click **Submit**

### Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Select your site
3. Navigate to **Sitemaps**
4. Enter: `https://thephotocourse.com/sitemap.xml`
5. Click **Submit**

---

## 🔄 Updating the Sitemap

### When to Update

Update your sitemaps when you:
- Add new pages
- Add new courses or modules
- Add new resources or fact sheets
- Add new reviews or guides
- Make significant content changes

### How to Update

1. **Edit the sitemap generator** (`/utils/sitemap-generator.ts`)
   - Add new pages to the appropriate array (`resourcePages`, `reviewPages`, etc.)
   - Update `lastmod` dates
   - Adjust priority if needed

2. **Regenerate the sitemaps:**
   ```bash
   node scripts/generate-sitemaps.js
   ```

3. **Deploy the updated files** to your server

4. **Ping search engines** (optional - they'll discover changes automatically, but you can speed it up):
   - Google: They'll automatically detect changes when they recrawl
   - Or manually resubmit in Search Console

---

## 📝 Adding New Pages

To add a new page to the sitemap:

### 1. Edit `/utils/sitemap-generator.ts`

Add your new page to the appropriate section:

```typescript
const resourcePages = [
  // ... existing pages
  {
    path: '/resources/your-new-page',
    lastmod: '2026-02-02',
    changefreq: 'monthly' as const,
    priority: 0.7,
  },
];
```

### 2. Regenerate Sitemaps

```bash
node scripts/generate-sitemaps.js
```

### 3. Deploy

Copy the updated files from `/public` to your hosting provider.

---

## ⚙️ Configuration

### Priority Guidelines

- **1.0**: Homepage only
- **0.9**: Main courses
- **0.8**: Important content (guides, reviews, main resources)
- **0.7**: Individual resources, fact sheets
- **0.6**: About, contact pages
- **0.5**: Legal pages (privacy, terms)

### Change Frequency Guidelines

- **daily**: Homepage, frequently updated content
- **weekly**: Course pages, main resource hubs
- **monthly**: Individual resources, reviews, fact sheets
- **yearly**: Legal pages, rarely updated content

---

## ✅ SEO Best Practices

1. ✅ **Multiple Sitemaps**: We use a sitemap index with separate sitemaps for different content types
2. ✅ **Priority Scores**: Pages are prioritized appropriately
3. ✅ **Change Frequency**: Realistic update frequencies set
4. ✅ **Last Modified Dates**: Included for all pages
5. ✅ **Robots.txt**: References sitemap location
6. ✅ **Clean URLs**: All URLs follow SEO-friendly patterns
7. ✅ **Exclusions**: Noindex pages are automatically excluded

---

## 🔍 Verification

### Test Your Sitemaps

1. **XML Validation:**
   - Visit your sitemap URL in a browser
   - Check that XML is properly formatted
   - Use online XML validators if needed

2. **URL Check:**
   - Verify all URLs are accessible
   - Test a few URLs from each sitemap
   - Ensure no 404 errors

3. **Search Console:**
   - Check for errors after submission
   - Monitor indexing status
   - Review coverage reports

---

## 📞 Support

If you need to add more pages or make changes to the sitemap configuration, edit:
- `/utils/sitemap-generator.ts` - Main configuration
- `/scripts/generate-sitemaps.js` - Build script

Then regenerate and redeploy.

---

## 🎯 Next Steps

1. **Run the generator**: `node scripts/generate-sitemaps.js`
2. **Deploy files** from `/public` to your web server
3. **Verify accessibility** at `https://thephotocourse.com/sitemap.xml`
4. **Submit to Google Search Console**
5. **Submit to Bing Webmaster Tools**
6. **Monitor indexing** in search console over the next few weeks

---

**Your sitemap system is ready to go! 🚀**
