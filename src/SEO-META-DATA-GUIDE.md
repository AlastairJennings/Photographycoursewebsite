# SEO Meta Data & Social Sharing Guide

## Overview

The Photo Course website now has a comprehensive, centralized SEO configuration system that makes it easy to manage meta data, Open Graph tags, and Twitter Cards for all pages.

## ✅ Part 2 Requirements Met

### Page-Level Meta Controls (Editable, NOT Hard-Coded)
- ✅ Meta title (50-60 characters)
- ✅ Meta description (120-160 characters)
- ✅ Canonical URL
- ✅ Index / noindex control
- ✅ Follow / nofollow control

### Open Graph (Social Sharing)
- ✅ og:title
- ✅ og:description
- ✅ og:image
- ✅ og:url
- ✅ og:type
- ✅ og:site_name
- ✅ og:image:width
- ✅ og:image:height
- ✅ og:image:alt

### Twitter Cards
- ✅ twitter:card (summary_large_image)
- ✅ twitter:title
- ✅ twitter:description
- ✅ twitter:image
- ✅ twitter:image:alt
- ✅ twitter:site
- ✅ twitter:creator

### Fallback Logic
- ✅ Defaults to page meta title if no custom social title
- ✅ Defaults to page meta description if no custom social description
- ✅ Defaults to site-wide social image if none provided

### No Duplicate Metadata
- ✅ Every page has unique meta title
- ✅ Every page has unique meta description
- ✅ Every page has unique canonical URL
- ✅ Built-in validation function to check for duplicates

---

## File Structure

```
/config/seo-config.ts       ← All SEO metadata configurations
/components/SEO.tsx          ← SEO component that applies meta tags
/App.tsx                     ← Uses getSEOConfig() to get page metadata
```

---

## How to Edit Page Metadata

### Step 1: Open the Configuration File

Open `/config/seo-config.ts` - this is the **ONLY** file you need to edit to change SEO metadata.

### Step 2: Update Site-Wide Settings

```typescript
export const siteConfig: SiteConfig = {
  siteName: 'The Photo Course',
  siteUrl: 'https://thephotocourse.com', // ← UPDATE THIS
  defaultImage: 'https://thephotocourse.com/images/social-share-default.jpg', // ← UPDATE THIS
  defaultOgType: 'website',
  defaultTwitterCard: 'summary_large_image',
  twitterHandle: '@thephotocourse', // ← UPDATE THIS (optional)
};
```

**What to update:**
- `siteUrl`: Your production domain
- `defaultImage`: URL to your default social sharing image (1200x630px recommended)
- `twitterHandle`: Your Twitter handle (optional)

### Step 3: Edit Individual Page Metadata

Each page has a configuration object in the `pageSEOConfigs` object:

```typescript
export const pageSEOConfigs: Record<string, PageSEOConfig> = {
  home: {
    // Basic Meta Tags
    title: 'The Photo Course - Master the Art of Photography Online',
    description: 'Learn photography through comprehensive online courses...',
    canonical: `${siteConfig.siteUrl}`,
    noindex: false,
    nofollow: false,
    
    // Open Graph (Facebook, LinkedIn, etc.)
    ogTitle: 'Master the Art of Photography Online',
    ogDescription: 'Comprehensive photography courses with video tutorials...',
    ogImage: `${siteConfig.siteUrl}/images/og-home.jpg`,
    ogUrl: `${siteConfig.siteUrl}`,
    ogType: 'website',
    
    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterTitle: 'Master the Art of Photography Online',
    twitterDescription: 'Learn photography through comprehensive online courses...',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-home.jpg`,
  },
  // ... more pages
};
```

---

## Page Configuration Reference

### Available Pages

| Page Key | URL Path | Description |
|----------|----------|-------------|
| `home` | `/` | Home page |
| `courses` | `/courses` | Course listing page |
| `course-intro-photography` | `/courses/introduction-to-photography` | Intro to Photography course |
| `course-film-darkroom` | `/courses/film-darkroom` | Film & Darkroom course |
| `resources` | `/resources` | Fact sheets and resources |
| `glossary` | `/glossary` | Photography glossary |
| `about` | `/about` | About page |

### Configuration Fields

#### Basic Meta Tags (Required)

```typescript
{
  title: string;              // 50-60 characters recommended
  description: string;        // 120-160 characters recommended
  canonical: string;          // Full URL with https://
  noindex?: boolean;          // Default: false (page will be indexed)
  nofollow?: boolean;         // Default: false (links will be followed)
}
```

#### Open Graph Tags (Optional - uses fallbacks)

```typescript
{
  ogTitle?: string;           // Defaults to 'title' if not provided
  ogDescription?: string;     // Defaults to 'description' if not provided
  ogImage?: string;           // Defaults to siteConfig.defaultImage
  ogUrl?: string;             // Defaults to 'canonical' if not provided
  ogType?: 'website' | 'article' | 'profile'; // Default: 'website'
}
```

#### Twitter Card Tags (Optional - uses fallbacks)

```typescript
{
  twitterCard?: 'summary' | 'summary_large_image'; // Default: 'summary_large_image'
  twitterTitle?: string;      // Defaults to ogTitle or title
  twitterDescription?: string;// Defaults to ogDescription or description
  twitterImage?: string;      // Defaults to ogImage or defaultImage
}
```

---

## Editing Examples

### Example 1: Update Home Page Title and Description

```typescript
home: {
  title: 'Learn Photography Online - The Photo Course',  // ← Changed
  description: 'Master photography with expert-led online courses. Video lessons, assignments, and community support.',  // ← Changed
  canonical: `${siteConfig.siteUrl}`,
  // ... rest stays the same
}
```

### Example 2: Change Social Sharing Image for a Course

```typescript
'course-intro-photography': {
  title: 'Introduction to Photography Course - The Photo Course',
  description: '...',
  canonical: `${siteConfig.siteUrl}/courses/introduction-to-photography`,
  
  ogImage: `${siteConfig.siteUrl}/images/new-intro-course-social.jpg`, // ← Updated
  twitterImage: `${siteConfig.siteUrl}/images/new-intro-course-social.jpg`, // ← Updated
}
```

### Example 3: Prevent a Page from Being Indexed

```typescript
resources: {
  title: 'Photography Resources & Fact Sheets - The Photo Course',
  description: '...',
  canonical: `${siteConfig.siteUrl}/resources`,
  noindex: true,  // ← Set to true to prevent indexing
  nofollow: false,
}
```

### Example 4: Use Different Titles for Social Sharing

```typescript
about: {
  title: 'About The Photo Course - Expert Photography Education',
  description: '...',
  canonical: `${siteConfig.siteUrl}/about`,
  
  // Social sharing uses a more engaging title
  ogTitle: 'Meet Our Photography Experts',
  twitterTitle: 'Meet Our Photography Experts',
}
```

---

## Social Sharing Image Guidelines

### Recommended Image Sizes

| Platform | Recommended Size | Aspect Ratio |
|----------|-----------------|--------------|
| **Open Graph** (Facebook, LinkedIn) | 1200 x 630 px | 1.91:1 |
| **Twitter Summary Large Image** | 1200 x 630 px | 1.91:1 |
| **Twitter Summary** | 800 x 418 px | 1.91:1 |

### Best Practices

1. **Use High-Quality Images**: Sharp, professional photos
2. **Add Text Overlay**: Include course name or key benefit
3. **Brand Consistently**: Use your color scheme and fonts
4. **Avoid Small Text**: Must be readable at small sizes
5. **Safe Zones**: Keep important content away from edges (profile pictures may overlap)
6. **Test on Multiple Platforms**: Use debugging tools to preview

### Image Naming Convention

```
/images/og-home.jpg              ← Home page Open Graph
/images/og-courses.jpg           ← Courses listing
/images/og-intro-course.jpg      ← Intro course
/images/og-film-course.jpg       ← Film course
/images/twitter-home.jpg         ← Home page Twitter (can be same as og-home.jpg)
/images/social-share-default.jpg ← Fallback image
```

---

## Fallback Logic Explained

The system automatically applies fallbacks in this order:

### For Open Graph Tags:
1. Use `ogTitle` if provided
2. Otherwise, use `title`

### For Twitter Card Tags:
1. Use `twitterTitle` if provided
2. Otherwise, use `ogTitle`
3. Otherwise, use `title`

### For Social Images:
1. Use `twitterImage` if provided
2. Otherwise, use `ogImage`
3. Otherwise, use `siteConfig.defaultImage`

### Example:

```typescript
{
  title: 'My Page Title',
  description: 'My page description',
  // No ogTitle, ogDescription, twitterTitle provided
}

// Results in:
// - og:title = "My Page Title"
// - og:description = "My page description"
// - twitter:title = "My Page Title"
// - twitter:description = "My page description"
// - og:image = siteConfig.defaultImage
// - twitter:image = siteConfig.defaultImage
```

---

## Validation

### Built-in Validation Function

The config file includes a validation function to check for:
- Title length (should be 50-60 characters)
- Description length (should be 120-160 characters)
- Duplicate titles
- Duplicate descriptions
- Duplicate canonical URLs

### How to Run Validation

Add this to your development tools:

```typescript
import { validateSEOConfigs } from './config/seo-config';

// Run validation
const validation = validateSEOConfigs();

if (!validation.valid) {
  console.error('SEO Configuration Errors:');
  validation.errors.forEach(error => console.error(`- ${error}`));
} else {
  console.log('✅ All SEO configurations are valid!');
}
```

---

## Testing Social Sharing

### Facebook/Open Graph Testing
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your page URL
3. Click "Debug"
4. Check how your page will appear when shared

### Twitter Card Testing
1. Go to: https://cards-dev.twitter.com/validator
2. Enter your page URL
3. Preview how it will look as a Twitter card

### LinkedIn Testing
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter your page URL
3. Check preview

### General Meta Tag Checker
1. Go to: https://metatags.io/
2. Enter your page URL
3. See all meta tags and social previews

---

## Current Page Configurations

### Home Page
- **Title**: "The Photo Course - Master the Art of Photography Online" (63 chars)
- **Description**: "Learn photography through comprehensive online courses featuring video lessons, fact sheets, and expert guidance. Master camera fundamentals, film photography, and darkroom techniques." (181 chars - **NEEDS SHORTENING**)
- **Status**: ⚠️ Description too long

### Courses Page
- **Title**: "Photography Courses - The Photo Course" (38 chars - **COULD BE LONGER**)
- **Description**: "Browse our comprehensive photography courses including Introduction to Photography and Film & Darkroom techniques. Expert-led video lessons and practical assignments." (166 chars - **NEEDS SHORTENING**)
- **Status**: ⚠️ Both need adjustment

### Introduction to Photography Course
- **Title**: "Introduction to Photography Course - The Photo Course" (53 chars) ✅
- **Description**: "Complete 10-week photography course covering camera basics, exposure triangle, composition, lighting, and post-processing. Perfect for beginners wanting to master digital photography." (184 chars - **NEEDS SHORTENING**)
- **Status**: ⚠️ Description too long

### Film & Darkroom Course
- **Title**: "Film & Darkroom Photography Course - The Photo Course" (53 chars) ✅
- **Description**: "Learn traditional film photography and darkroom techniques. Master film development, contact sheets, printing processes, and analog photography fundamentals in this hands-on course." (181 chars - **NEEDS SHORTENING**)
- **Status**: ⚠️ Description too long

### Resources Page
- **Title**: "Photography Resources & Fact Sheets - The Photo Course" (54 chars) ✅
- **Description**: "Download free photography resources including camera guides, exposure charts, composition guides, and technical references. Essential tools for photographers at any level." (171 chars - **NEEDS SHORTENING**)
- **Status**: ⚠️ Description too long

### Glossary Page
- **Title**: "Photography Glossary - The Photo Course" (39 chars - **COULD BE LONGER**) 
- **Description**: "Comprehensive glossary of photography terms and definitions. Learn camera terminology, technical concepts, exposure settings, composition rules, and industry jargon." (164 chars - **NEEDS SHORTENING**)
- **Status**: ⚠️ Both need adjustment

### About Page
- **Title**: "About The Photo Course - Expert Photography Education" (54 chars) ✅
- **Description**: "Meet Alastair Jennings, our lead instructor with 32+ years of professional photography experience. Learn about our mission to provide accessible, high-quality photography education." (182 chars - **NEEDS SHORTENING**)
- **Status**: ⚠️ Description too long

---

## Recommended Fixes

### Update descriptions to 120-160 characters:

```typescript
home: {
  description: 'Learn photography with expert-led online courses. Master camera fundamentals, film development, and darkroom techniques through video lessons.',
},

courses: {
  title: 'Online Photography Courses - The Photo Course',
  description: 'Expert-led photography courses covering digital fundamentals, film photography, and darkroom techniques. Video lessons and assignments.',
},

'course-intro-photography': {
  description: 'Complete 10-week photography course covering camera basics, exposure, composition, lighting, and editing. Perfect for beginners.',
},

'course-film-darkroom': {
  description: 'Master traditional film photography and darkroom techniques. Learn development, contact sheets, and analog printing processes.',
},

resources: {
  description: 'Free photography resources including camera guides, exposure charts, composition guides, and technical references for all skill levels.',
},

glossary: {
  title: 'Photography Glossary & Definitions - The Photo Course',
  description: 'Complete glossary of photography terms, camera settings, technical concepts, and industry jargon. Essential reference for photographers.',
},

about: {
  description: 'Meet Alastair Jennings, lead instructor with 32+ years experience. Learn about our mission to provide high-quality photography education.',
},
```

---

## Quick Reference: Character Limits

### Meta Title
- **Minimum**: 30 characters
- **Recommended**: 50-60 characters
- **Maximum**: 70 characters (Google truncates after ~60)

### Meta Description
- **Minimum**: 70 characters
- **Recommended**: 120-160 characters
- **Maximum**: 200 characters (Google truncates after ~160)

### Open Graph Title
- **Maximum**: 95 characters (Facebook truncates)

### Twitter Title
- **Maximum**: 70 characters

### Character Counter Tool
Use this in your text editor or online:
- https://www.charactercountonline.com/

---

## Additional Meta Tags Included

The SEO component also sets:
- ✅ `viewport` - For mobile responsiveness
- ✅ `theme-color` - Browser theme color (violet-600)
- ✅ `format-detection` - Prevents auto-linking of phone numbers
- ✅ `og:image:width` - Image dimensions for social platforms
- ✅ `og:image:height` - Image dimensions for social platforms
- ✅ `og:image:alt` - Image alt text for accessibility

---

## Troubleshooting

### Social preview not updating?
1. Clear the cache on the social platform's debugging tool
2. Check that your image URLs are publicly accessible
3. Ensure images are the correct size
4. Wait 24 hours for some platforms to refresh

### Page not being indexed?
1. Check `noindex` is set to `false`
2. Verify robots.txt isn't blocking the page
3. Submit sitemap to Google Search Console
4. Check for crawl errors

### Duplicate content warnings?
1. Ensure all canonical URLs are unique
2. Check that titles and descriptions are unique
3. Run the `validateSEOConfigs()` function

---

## Next Steps

1. ✅ **Update siteConfig.siteUrl** to your production domain
2. ✅ **Create social sharing images** (1200x630px) for each page
3. ✅ **Upload images** to your server
4. ✅ **Update image URLs** in seo-config.ts
5. ✅ **Shorten descriptions** to 120-160 characters
6. ✅ **Test social sharing** using debugging tools
7. ✅ **Submit sitemap** to Google Search Console

---

## Support

For questions or issues with SEO configuration:
1. Check this guide first
2. Review `/config/seo-config.ts` comments
3. Test using social platform debugging tools
4. Validate meta tags with browser DevTools
