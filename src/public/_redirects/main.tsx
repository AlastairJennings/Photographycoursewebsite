# Serve static XML files directly (don't route through React)
/sitemap.xml  /sitemap.xml  200
/sitemap-pages.xml  /sitemap-pages.xml  200
/sitemap-courses.xml  /sitemap-courses.xml  200
/sitemap-resources.xml  /sitemap-resources.xml  200
/sitemap-reviews.xml  /sitemap-reviews.xml  200

# Serve robots.txt and other static files
/robots.txt  /robots.txt  200
/indexnow-key.txt  /indexnow-key.txt  200

# All other routes go to React app
/*  /index.html  200
