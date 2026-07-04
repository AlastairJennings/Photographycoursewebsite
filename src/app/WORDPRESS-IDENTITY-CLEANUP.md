# WordPress Identity Cleanup Guide

## 🔍 THE PROBLEM

Google may have cached pages from an old WordPress installation that show:
- "Just another WordPress site" as the title
- Generic WordPress content
- Outdated branding

These signals confuse search engines and hurt your site identity.

---

## 🕵️ HOW TO FIND OLD WORDPRESS CONTENT

### Method 1: Google Site Search

```
Search Google for: site:thephotocourse.com
```

**Look for:**
- Pages with "Just another WordPress site" in title
- Old cached versions (click the "⋮" next to results → "Cached")
- URLs that don't match current structure

### Method 2: Google Search Console

1. Go to: **Google Search Console** → **Coverage**
2. Look for: "Indexed, not submitted in sitemap"
3. These might be old WordPress pages

### Method 3: Direct URL Check

Try accessing common WordPress URLs:
```
https://thephotocourse.com/wp-admin/
https://thephotocourse.com/wp-login.php
https://thephotocourse.com/wp-content/
https://thephotocourse.com/xmlrpc.php
```

If any load, old WordPress install is still present.

---

## 🧹 CLEANUP STEPS

### Step 1: Remove Old WordPress Installation (If Present)

**If you have server access:**

```bash
# Connect to your server
ssh user@thephotocourse.com

# Backup first (just in case)
tar -czf wordpress-backup-$(date +%Y%m%d).tar.gz /path/to/wordpress

# Remove WordPress files
rm -rf /path/to/wordpress/wp-admin
rm -rf /path/to/wordpress/wp-content
rm -rf /path/to/wordpress/wp-includes
rm /path/to/wordpress/wp-*.php
rm /path/to/wordpress/xmlrpc.php
```

**If using cPanel or hosting control panel:**
1. Log into hosting control panel
2. File Manager → navigate to WordPress directory
3. Delete WordPress folders: `wp-admin`, `wp-content`, `wp-includes`
4. Delete WordPress files: `wp-*.php`, `xmlrpc.php`, etc.

### Step 2: Setup Proper Redirects

**If old WordPress URLs are indexed, redirect them:**

Create or update `.htaccess` (Apache) or nginx config:

**Apache (.htaccess):**
```apache
# Redirect old WordPress URLs to new site
RedirectMatch 301 ^/wp-admin/.* https://thephotocourse.com/
RedirectMatch 301 ^/wp-content/.* https://thephotocourse.com/
RedirectMatch 301 ^/wp-includes/.* https://thephotocourse.com/

# Redirect old post URLs if they exist
# RedirectMatch 301 ^/\d{4}/\d{2}/\d{2}/(.*)$ https://thephotocourse.com/

# Specific old pages to new pages (customize as needed)
Redirect 301 /old-about-page https://thephotocourse.com/about
Redirect 301 /old-courses-page https://thephotocourse.com/courses
```

**Nginx (server block):**
```nginx
# Redirect old WordPress paths
location ~ ^/wp-(admin|content|includes)/ {
    return 301 https://thephotocourse.com/;
}

location ~ \.php$ {
    return 301 https://thephotocourse.com/;
}

# Specific redirects
location = /old-about-page {
    return 301 https://thephotocourse.com/about;
}
```

### Step 3: Request Removal from Google

**Google Search Console → Removals:**

1. Go to: **Removals** section
2. Click: **New Request**
3. Choose: **"Temporarily remove URL"** OR **"Clear cached URL"**

**For each old WordPress page:**
```
URL: https://thephotocourse.com/old-wordpress-page
Type: Remove all URLs with this prefix
```

**For WordPress admin paths:**
```
URL: https://thephotocourse.com/wp-admin/
Type: Remove all URLs with this prefix
```

```
URL: https://thephotocourse.com/wp-content/
Type: Remove all URLs with this prefix
```

**Note:** Temporary removals last 6 months. Make sure proper redirects are in place.

### Step 4: Force Cache Refresh

**Request updated indexing for all pages:**

1. **Google Search Console** → **URL Inspection**
2. Enter: `https://thephotocourse.com/`
3. Click: **Request Indexing**
4. Repeat for all key pages:
   - `/courses`
   - `/courses/introduction-to-photography`
   - `/courses/film-darkroom`
   - `/resources`
   - `/about`

---

## ✅ VERIFICATION CHECKLIST

### Confirm Old WordPress is Gone

```bash
# Try accessing WordPress admin (should fail or redirect)
curl -I https://thephotocourse.com/wp-admin/
# Expected: 301 Redirect OR 404 Not Found

# Try accessing wp-login (should fail or redirect)
curl -I https://thephotocourse.com/wp-login.php
# Expected: 301 Redirect OR 404 Not Found
```

### Confirm New Identity in Google

1. Search: `site:thephotocourse.com`
2. Check top result title: Should say **"The Photo Course - Professional Online Photography Training"**
3. Check description: Should show new meta description
4. Click "Cached" → Should show new content

**Note:** May take 1-2 weeks to fully refresh in Google

---

## 🚀 ACCELERATE THE REFRESH

### Force Googlebot to Recrawl

**Method 1: Submit URLs**
```
Google Search Console → URL Inspection → Request Indexing
```

**Method 2: Update Content**
- Make minor edits to key pages
- Update "lastmod" dates in sitemap
- Google will recrawl sooner

**Method 3: Build Backlinks**
- Share new pages on social media
- Submit to directories
- When Google follows those links, it sees fresh content

---

## 📊 MONITORING

### Track Progress Weekly

**Google Search Console:**
- **Performance** → Check if brand searches show new title
- **Coverage** → Watch for old URLs dropping off
- **URL Inspection** → Test key pages for new metadata

**Google Search:**
```
site:thephotocourse.com intitle:"Just another WordPress site"
```
- Should return: **0 results** (once cleanup complete)

---

## ⚠️ COMMON ISSUES

### "Old Cached Version Still Shows"

**Cause:** Google caches can persist for weeks  
**Solution:** 
1. Request cache clearing in Search Console
2. Wait 1-2 weeks
3. Force refresh by sharing page on social media

### "Title Still Shows WordPress"

**Cause:** Google's index hasn't updated yet  
**Solution:**
1. Confirm new title is in HTML (`<title>` tag) ✅ (already done)
2. Request indexing again
3. Update content slightly to trigger recrawl
4. Wait for next Google update cycle

### "Old URLs Still Indexed"

**Cause:** Redirects not in place OR removal request pending  
**Solution:**
1. Verify redirects work (test with curl)
2. Resubmit removal requests if needed
3. Wait for Google to process (can take days)

---

## 🎯 SUCCESS CRITERIA

### You're done when:

✅ Old WordPress URLs return 301 redirects or 404s  
✅ No WordPress files accessible on server  
✅ Google search shows new site title  
✅ "Cached" version shows new content  
✅ Search Console shows new meta descriptions  
✅ No "Just another WordPress site" in any results  

---

## 📞 IF YOU'RE STUCK

### Can't access server to remove WordPress?

**Contact your hosting provider:**
- Tell them: "Please remove old WordPress installation"
- Specify: The root directory or subdirectory location
- Request: 301 redirects be setup for old URLs

### Don't know if WordPress is still there?

**Try these URLs in browser:**
```
https://thephotocourse.com/wp-login.php
https://thephotocourse.com/wp-admin/
```

If they load → WordPress is still present  
If they 404 → WordPress is gone ✅

---

## 📅 TIMELINE

### Immediate (Day 1)
- Remove WordPress files
- Setup redirects
- Submit removal requests

### Short-term (Week 1)
- Monitor Search Console
- Request indexing for key pages
- Check if old URLs are gone

### Medium-term (Week 2-4)
- Google cache updates
- New titles appear in search
- Old WordPress identity gone

### Long-term (Month 2-3)
- Full refresh complete
- Brand identity established
- Ranking improves

---

**Last Updated:** February 1, 2026  
**Status:** Ready for Implementation  
**Priority:** HIGH (if old WP content found)
