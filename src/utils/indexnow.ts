/**
 * IndexNow Integration for Bing/Microsoft
 * 
 * IndexNow is a protocol that allows websites to instantly notify search engines
 * when content is created, updated, or deleted.
 * 
 * Supported by: Bing, Yandex, Seznam.cz, Naver
 */

const INDEXNOW_KEY = 'e8f7a9b2c4d1e6f3a7b9c8d2e5f1a4b7';
const SITE_URL = 'https://thephotocourse.com';

// IndexNow endpoints
const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow',  // Primary endpoint
  'https://www.bing.com/indexnow',      // Bing endpoint
];

/**
 * Submit a single URL to IndexNow
 */
export async function submitUrlToIndexNow(url: string): Promise<boolean> {
  try {
    const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`;
    
    const payload = {
      host: 'thephotocourse.com',
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/indexnow-key.txt`,
      urlList: [fullUrl],
    };

    // Submit to primary endpoint
    const response = await fetch(INDEXNOW_ENDPOINTS[0], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 202) {
      console.log(`✓ IndexNow: Successfully submitted ${fullUrl}`);
      return true;
    } else {
      console.warn(`⚠ IndexNow: Failed to submit ${fullUrl}`, response.status);
      return false;
    }
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return false;
  }
}

/**
 * Submit multiple URLs to IndexNow (batch)
 */
export async function submitUrlsToIndexNow(urls: string[]): Promise<boolean> {
  try {
    const fullUrls = urls.map(url => 
      url.startsWith('http') ? url : `${SITE_URL}${url}`
    );

    const payload = {
      host: 'thephotocourse.com',
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/indexnow-key.txt`,
      urlList: fullUrls,
    };

    const response = await fetch(INDEXNOW_ENDPOINTS[0], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 202) {
      console.log(`✓ IndexNow: Successfully submitted ${fullUrls.length} URLs`);
      return true;
    } else {
      console.warn(`⚠ IndexNow: Failed to submit batch`, response.status);
      return false;
    }
  } catch (error) {
    console.error('IndexNow batch submission error:', error);
    return false;
  }
}

/**
 * Submit all important site URLs to IndexNow
 */
export async function submitAllSiteUrls(): Promise<void> {
  const importantUrls = [
    '/',
    '/courses',
    '/courses/introduction-to-photography',
    '/courses/film-darkroom',
    '/resources',
    '/resources/zone-system',
    '/resources/exposure-triangle',
    '/resources/composition-guide',
    '/resources/lighting-techniques',
    '/resources/white-balance',
    '/resources/histogram-guide',
    '/glossary',
    '/about',
  ];

  await submitUrlsToIndexNow(importantUrls);
}

/**
 * Get IndexNow submission button (for manual testing)
 */
export function createIndexNowButton(): HTMLButtonElement {
  const button = document.createElement('button');
  button.textContent = 'Submit to IndexNow';
  button.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 20px;
    background: #0078d4;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    z-index: 9999;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  `;
  
  button.addEventListener('click', async () => {
    button.textContent = 'Submitting...';
    button.disabled = true;
    
    const success = await submitUrlToIndexNow(window.location.pathname);
    
    if (success) {
      button.textContent = '✓ Submitted!';
      button.style.background = '#107c10';
    } else {
      button.textContent = '✗ Failed';
      button.style.background = '#d13438';
    }
    
    setTimeout(() => {
      button.textContent = 'Submit to IndexNow';
      button.style.background = '#0078d4';
      button.disabled = false;
    }, 2000);
  });
  
  return button;
}
