# ✅ How to Access Your Sitemaps

## 🎯 **Direct Access (Recommended for Figma Hosting)**

Visit this URL directly in your browser:

### **https://thephotocourse.com/sitemap-generator.html**

This is a standalone HTML page that works independently of React routing, perfect for Figma Make hosting.

---

## 📥 **Download All Sitemaps**

Once you open `/sitemap-generator.html`, you'll see:

1. **sitemap.xml** - Main sitemap index
2. **sitemap-pages.xml** - Navigation pages
3. **sitemap-courses.xml** - Course pages
4. **sitemap-resources.xml** - Resource/fact sheets
5. **sitemap-reviews.xml** - Camera reviews

Click each button to download the XML file to your computer.

---

## 🚀 **Deployment Steps**

### Step 1: Download Sitemaps
1. Open: `https://thephotocourse.com/sitemap-generator.html`
2. Click all 5 buttons to download each sitemap file
3. Save them to a folder on your computer

### Step 2: Upload to Your Web Host

Upload all 5 XML files to your web server's **root directory**:

```
your-website-root/
├── sitemap.xml ← Upload here
├── sitemap-pages.xml ← Upload here
├── sitemap-courses.xml ← Upload here
├── sitemap-resources.xml ← Upload here
└── sitemap-reviews.xml ← Upload here
```

**Important:** These must be in the root so they're accessible at:
- `https://thephotocourse.com/sitemap.xml`
- `https://thephotocourse.com/sitemap-pages.xml`
- etc.

### Step 3: Verify They Work

After uploading, test in your browser:
1. Visit `https://thephotocourse.com/sitemap.xml`
2. You should see XML content (not a 404)
3. The XML should show proper sitemap structure

### Step 4: Submit to Search Engines

#### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: `thephotocourse.com`
3. Verify ownership
4. Click **Sitemaps** in left sidebar
5. Enter: `https://thephotocourse.com/sitemap.xml`
6. Click **Submit**

#### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add your site
3. Navigate to **Sitemaps**
4. Enter: `https://thephotocourse.com/sitemap.xml`
5. Click **Submit**

---

## 📋 **What's Included in Your Sitemaps**

### Pages (8 URLs)
- Home page (priority: 1.0)
- Courses listing
- Resources listing
- Glossary
- About
- Contact
- Privacy Policy
- Terms & Conditions

### Courses (2 URLs)
- Introduction to Photography
- Film & Darkroom Course

### Resources (4 URLs)
- Zone System
- Exposure Triangle
- Composition Guide
- Lighting Techniques

### Reviews (1 URL)
- Top Mirrorless Cameras 2025

**Total: 15 pages indexed**

---

## 🔄 **Updating Sitemaps**

When you add new pages:

1. **Re-visit** `/sitemap-generator.html`
2. **Download** fresh copies of all 5 files
3. **Re-upload** to your web server
4. **Resubmit** to search engines (or wait for auto-discovery)

---

## 📂 **Alternative: Use Files from /public Folder**

The sitemap files are also pre-generated in your `/public` folder:

```
/public/
├── sitemap.xml ✅
├── sitemap-pages.xml ✅
├── sitemap-courses.xml ✅
├── sitemap-resources.xml ✅
└── sitemap-reviews.xml ✅
```

You can copy these files directly to your web server.

---

## 🆘 **Troubleshooting**

### Can't access /sitemap-generator.html
- Make sure you're accessing the full URL with `.html` extension
- Clear your browser cache
- Try in an incognito/private window

### Sitemap shows 404 after uploading
- Verify files are in the **root** directory, not in a subdirectory
- Check file permissions (should be readable by web server)
- Make sure filename is exactly `sitemap.xml` (lowercase, no spaces)

### Need to update the sitemaps
- Edit `/utils/sitemap-generator.ts` to add new URLs
- Re-visit `/sitemap-generator.html` to download fresh copies
- Or run: `node scripts/generate-sitemaps.js` if you have Node.js

---

## ✅ **Quick Checklist**

- [ ] Open `https://thephotocourse.com/sitemap-generator.html`
- [ ] Download all 5 sitemap files
- [ ] Upload to web server root directory
- [ ] Test `https://thephotocourse.com/sitemap.xml` in browser
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Wait 2-3 days and check indexing status

---

## 🎉 **You're All Set!**

Your sitemaps are ready to download at:
**https://thephotocourse.com/sitemap-generator.html**

After uploading to your web host and submitting to search engines, your site will be discoverable and indexed properly.

---

**Last Updated:** February 2, 2026
