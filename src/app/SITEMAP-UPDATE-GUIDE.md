# Sitemap Update Guide

## Overview
Your site has a comprehensive sitemap system that helps search engines discover all your pages. The sitemaps are automatically generated with current dates whenever you run the generator script.

## Current Sitemap Structure

### Main Sitemap Index
- **Location**: `/public/sitemap.xml`
- **Purpose**: Points to all sub-sitemaps
- **URL**: https://thephotocourse.com/sitemap.xml

### Sub-Sitemaps
1. **sitemap-pages.xml** - Main navigation pages (Home, Courses, Resources, etc.)
2. **sitemap-courses.xml** - All course pages and weekly modules
3. **sitemap-resources.xml** - All resource/fact sheet pages
4. **sitemap-reviews.xml** - All product review pages and guides

## How to Update Sitemaps

### When to Update
Update your sitemaps whenever you:
- Add a new page or course week
- Add a new resource/fact sheet
- Add a new product review
- Make significant changes to existing pages

### Step 1: Edit the Generator Script
Open `/scripts/generate-sitemaps.js` and add your new pages to the appropriate section:

#### Adding a New Navigation Page
```javascript
const navigationPages = [
  // ... existing pages
  { path: '/your-new-page', priority: 0.6, changefreq: 'monthly' },
];
```

#### Adding a New Course Week
```javascript
const coursePages = [
  // ... existing pages
  { path: '/courses/introduction-to-photography/week-5', priority: 0.8, changefreq: 'monthly' },
];
```

#### Adding a New Resource
```javascript
const resourcePages = [
  // ... existing pages
  { path: '/resources/your-new-resource', priority: 0.7, changefreq: 'monthly' },
];
```

#### Adding a New Review Page
```javascript
const reviewPages = [
  // ... existing pages
  { path: '/reviews/your-new-review', priority: 0.7, changefreq: 'monthly' },
];
```

### Step 2: Run the Generator
In your terminal, run:
```bash
node scripts/generate-sitemaps.js
```

This will:
- Generate fresh sitemap files with today's date
- Update all `<lastmod>` timestamps automatically
- Save files to `/public/` directory

### Step 3: Verify the Output
Check that the files were created:
- `/public/sitemap.xml`
- `/public/sitemap-pages.xml`
- `/public/sitemap-courses.xml`
- `/public/sitemap-resources.xml`
- `/public/sitemap-reviews.xml`

### Step 4: Deploy
When you deploy your site, these files will be publicly accessible at:
- https://thephotocourse.com/sitemap.xml
- https://thephotocourse.com/sitemap-pages.xml
- etc.

### Step 5: Notify Search Engines
After updating, notify search engines:

**Google Search Console:**
1. Go to https://search.google.com/search-console
2. Navigate to Sitemaps
3. Submit: `https://thephotocourse.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to https://www.bing.com/webmasters
2. Navigate to Sitemaps
3. Submit: `https://thephotocourse.com/sitemap.xml`

## Priority Guidelines

Use these priority values as a guide:
- **1.0** - Homepage only
- **0.9** - Main course landing pages
- **0.8** - Individual course weeks, important guides
- **0.7** - Resources, fact sheets, reviews
- **0.6** - About, Contact pages
- **0.3** - Legal pages (Privacy, Terms)

## Change Frequency Guidelines

- **daily** - Homepage (frequently updated content)
- **weekly** - Main course pages, glossary
- **monthly** - Course weeks, resources, reviews
- **yearly** - Legal/policy pages

## Current Page Count

As of February 8, 2026:
- **Navigation Pages**: 9 pages
- **Course Pages**: 10 pages (2 courses + 8 weeks)
- **Resource Pages**: 14 pages
- **Review Pages**: 9 pages
- **Total**: 42 pages

## Automatic Updates

The sitemap generator automatically:
- Uses today's date for `<lastmod>` timestamps
- Formats URLs correctly
- Validates XML structure
- Creates the index sitemap

You just need to:
1. Add new pages to the arrays in the script
2. Run the generator
3. Deploy

## Troubleshooting

### Sitemaps not updating?
- Make sure you ran `node scripts/generate-sitemaps.js`
- Check that files in `/public/` were updated
- Redeploy your site

### Search engines not crawling new pages?
- Resubmit your sitemap in Search Console
- Check robots.txt isn't blocking pages
- Verify pages are linked from existing pages

### Need to add many pages at once?
You can use JavaScript to generate arrays programmatically in the script:

```javascript
// Generate weeks 1-10 automatically
const weeks = Array.from({length: 10}, (_, i) => ({
  path: `/courses/introduction-to-photography/week-${i + 1}`,
  priority: 0.8,
  changefreq: 'monthly'
}));

const coursePages = [
  { path: '/courses/introduction-to-photography', priority: 0.9, changefreq: 'weekly' },
  ...weeks,
];
```

## Best Practices

1. **Update regularly** - Run the generator after adding new content
2. **Keep priorities realistic** - Don't mark everything as high priority
3. **Use appropriate change frequencies** - Match actual update schedules
4. **Submit to search engines** - Notify them after major updates
5. **Monitor in Search Console** - Check for errors or warnings

## Questions?

For more information about sitemaps:
- Google's Sitemap Protocol: https://www.sitemaps.org/
- Google Search Console Help: https://support.google.com/webmasters
