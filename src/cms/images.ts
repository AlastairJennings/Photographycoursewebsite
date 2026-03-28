/**
 * Image Metadata Management
 * 
 * Centralized image metadata for SEO and accessibility.
 * Editors can manage alt text, captions, titles, and lazy loading.
 * 
 * Benefits:
 * - All image metadata in one place
 * - Easy bulk updates
 * - SEO-friendly alt text
 * - Accessibility compliance
 */

/**
 * Image Metadata Interface
 */
export interface ImageMetadata {
  id: string;
  src: string; // Image source URL
  alt: string; // Alt text (required for accessibility)
  title?: string; // Title attribute (shown on hover)
  caption?: string; // Caption shown below image
  credit?: string; // Photo credit
  lazyLoading?: boolean; // Enable lazy loading
  width?: number; // Image width (for aspect ratio)
  height?: number; // Image height (for aspect ratio)
  category?: string; // Category (e.g., 'hero', 'gallery', 'course')
  tags?: string[]; // Tags for organizing
  uploadDate?: string;
}

/**
 * Image Library
 * 
 * HOW TO ADD IMAGE METADATA:
 * 1. Upload your image to /public/images/ or use external URL
 * 2. Copy an existing image metadata object
 * 3. Update the fields (id, src, alt, etc.)
 * 4. Add to the imageLibrary array
 * 5. Save this file
 * 
 * ALT TEXT BEST PRACTICES:
 * - Describe what the image shows
 * - Be specific and concise
 * - Include context if needed
 * - Don't start with "Image of..." (screen readers already announce it)
 * - For decorative images, use empty alt: alt: ""
 */
export const imageLibrary: ImageMetadata[] = [
  // Hero Section Images
  {
    id: 'hero-portrait-lighting',
    src: 'https://images.unsplash.com/photo-1599588683983-dc7dd610d430',
    alt: 'Professional portrait photographer adjusting studio lighting equipment',
    title: 'Portrait Photography Lighting',
    caption: 'Master studio lighting techniques',
    category: 'hero',
    lazyLoading: false, // Don't lazy load hero images
    width: 800,
    height: 600,
    tags: ['portrait', 'lighting', 'studio'],
  },
  
  {
    id: 'hero-landscape',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    alt: 'Mountain landscape at golden hour with dramatic clouds',
    title: 'Landscape Photography',
    caption: 'Capture breathtaking landscapes',
    category: 'hero',
    lazyLoading: false,
    width: 800,
    height: 600,
    tags: ['landscape', 'nature', 'golden-hour'],
  },
  
  {
    id: 'hero-street-photography',
    src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
    alt: 'Street photographer capturing urban life with vintage camera',
    title: 'Street Photography',
    caption: 'Document authentic moments',
    category: 'hero',
    lazyLoading: false,
    width: 800,
    height: 600,
    tags: ['street', 'urban', 'documentary'],
  },
  
  // Course Images
  {
    id: 'course-intro-photography',
    src: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848',
    alt: 'DSLR camera with various lenses and photography equipment on wooden table',
    title: 'Introduction to Photography Course',
    caption: 'Everything you need to start your photography journey',
    category: 'course',
    lazyLoading: true,
    width: 1200,
    height: 800,
    tags: ['course', 'beginner', 'equipment'],
  },
  
  {
    id: 'course-film-darkroom',
    src: 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44',
    alt: 'Traditional film photography darkroom with red safelight and developing equipment',
    title: 'Film & Darkroom Course',
    caption: 'Master traditional film photography techniques',
    category: 'course',
    lazyLoading: true,
    width: 1200,
    height: 800,
    tags: ['course', 'film', 'darkroom', 'analog'],
  },
  
  // Fact Sheet Images
  {
    id: 'factsheet-aperture',
    src: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e',
    alt: 'Camera lens showing aperture blades at different f-stops',
    title: 'Understanding Aperture',
    caption: 'Learn how aperture affects depth of field',
    category: 'factsheet',
    lazyLoading: true,
    width: 600,
    height: 400,
    tags: ['aperture', 'technical', 'camera-settings'],
  },
  
  {
    id: 'factsheet-composition',
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    alt: 'Grid overlay showing rule of thirds composition on landscape photograph',
    title: 'Composition Techniques',
    caption: 'Master the rule of thirds and other composition rules',
    category: 'factsheet',
    lazyLoading: true,
    width: 600,
    height: 400,
    tags: ['composition', 'technique', 'framing'],
  },
  
  // Decorative Images (empty alt for screen readers)
  {
    id: 'decoration-gradient-1',
    src: '/images/gradient-bg-1.jpg',
    alt: '', // Decorative - no alt needed
    title: '',
    category: 'decoration',
    lazyLoading: true,
  },
  
  // Add your images below:
  // {
  //   id: 'unique-id',
  //   src: '/images/your-image.jpg',
  //   alt: 'Descriptive alt text here',
  //   title: 'Image title',
  //   caption: 'Optional caption',
  //   lazyLoading: true,
  //   width: 1200,
  //   height: 800,
  // },
];

/**
 * Get image metadata by ID
 */
export function getImageById(id: string): ImageMetadata | null {
  return imageLibrary.find(img => img.id === id) || null;
}

/**
 * Get images by category
 */
export function getImagesByCategory(category: string): ImageMetadata[] {
  return imageLibrary.filter(img => img.category === category);
}

/**
 * Get images by tag
 */
export function getImagesByTag(tag: string): ImageMetadata[] {
  return imageLibrary.filter(img => img.tags?.includes(tag));
}

/**
 * Search images
 */
export function searchImages(query: string): ImageMetadata[] {
  const lowerQuery = query.toLowerCase();
  return imageLibrary.filter(img => 
    img.alt.toLowerCase().includes(lowerQuery) ||
    img.title?.toLowerCase().includes(lowerQuery) ||
    img.caption?.toLowerCase().includes(lowerQuery) ||
    img.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Add image metadata
 */
export function addImage(image: Omit<ImageMetadata, 'id'>): ImageMetadata {
  const newImage: ImageMetadata = {
    ...image,
    id: `img-${Date.now()}`,
    uploadDate: new Date().toISOString(),
  };
  
  imageLibrary.push(newImage);
  return newImage;
}

/**
 * Update image metadata
 */
export function updateImage(id: string, updates: Partial<ImageMetadata>): ImageMetadata | null {
  const index = imageLibrary.findIndex(img => img.id === id);
  if (index === -1) return null;
  
  imageLibrary[index] = {
    ...imageLibrary[index],
    ...updates,
  };
  
  return imageLibrary[index];
}

/**
 * Delete image metadata
 */
export function deleteImage(id: string): boolean {
  const index = imageLibrary.findIndex(img => img.id === id);
  if (index === -1) return false;
  
  imageLibrary.splice(index, 1);
  return true;
}

/**
 * Validate image metadata
 */
export function validateImage(image: Partial<ImageMetadata>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!image.src) {
    errors.push('Image source (src) is required');
  }
  
  // Alt text is required unless it's decorative
  if (image.alt === undefined && image.category !== 'decoration') {
    errors.push('Alt text is required for accessibility (use empty string for decorative images)');
  }
  
  // Check if alt text is too long
  if (image.alt && image.alt.length > 125) {
    errors.push('Alt text should be under 125 characters');
  }
  
  // Check if alt text starts with redundant phrases
  if (image.alt) {
    const redundantPhrases = ['image of', 'picture of', 'photo of', 'graphic of'];
    const lowerAlt = image.alt.toLowerCase();
    if (redundantPhrases.some(phrase => lowerAlt.startsWith(phrase))) {
      errors.push('Alt text should not start with "image of", "picture of", etc. - screen readers already announce it\'s an image');
    }
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Bulk import images from CSV
 * 
 * CSV Format:
 * id,src,alt,title,caption,category,lazyLoading
 * img-1,/images/photo.jpg,Alt text here,Title,Caption,hero,false
 */
export function importImagesFromCSV(csv: string): ImageMetadata[] {
  const lines = csv.trim().split('\n');
  const imported: ImageMetadata[] = [];
  
  // Skip header row
  for (let i = 1; i < lines.length; i++) {
    const [id, src, alt, title, caption, category, lazyLoading] = lines[i].split(',').map(s => s.trim());
    
    if (!id || !src || alt === undefined) continue;
    
    const image: ImageMetadata = {
      id,
      src,
      alt,
      title: title || undefined,
      caption: caption || undefined,
      category: category || undefined,
      lazyLoading: lazyLoading === 'true',
      uploadDate: new Date().toISOString(),
    };
    
    imageLibrary.push(image);
    imported.push(image);
  }
  
  return imported;
}

/**
 * Export images to CSV
 */
export function exportImagesToCSV(): string {
  const header = 'id,src,alt,title,caption,category,lazyLoading';
  const rows = imageLibrary.map(img => 
    `${img.id},${img.src},${img.alt},${img.title || ''},${img.caption || ''},${img.category || ''},${img.lazyLoading}`
  );
  
  return [header, ...rows].join('\n');
}

/**
 * Alt text templates for common image types
 */
export const ALT_TEXT_TEMPLATES = {
  portrait: (subject: string, setting?: string) => 
    `${subject} portrait${setting ? ` in ${setting}` : ''}`,
  
  landscape: (location: string, time?: string) => 
    `${location} landscape${time ? ` at ${time}` : ''}`,
  
  product: (product: string, angle?: string) => 
    `${product}${angle ? ` ${angle} view` : ''}`,
  
  event: (event: string, action: string) => 
    `${action} at ${event}`,
  
  equipment: (item: string, context?: string) => 
    `${item}${context ? ` ${context}` : ''}`,
} as const;

/**
 * Check for missing alt text
 */
export function findImagesWithMissingAlt(): ImageMetadata[] {
  return imageLibrary.filter(img => 
    img.category !== 'decoration' && (!img.alt || img.alt.trim() === '')
  );
}

/**
 * Image optimization recommendations
 */
export function getOptimizationRecommendations(image: ImageMetadata): string[] {
  const recommendations: string[] = [];
  
  // Check for missing dimensions
  if (!image.width || !image.height) {
    recommendations.push('Add width and height attributes to prevent layout shift');
  }
  
  // Check lazy loading
  if (image.category === 'hero' && image.lazyLoading) {
    recommendations.push('Hero images should not use lazy loading (disable for above-the-fold images)');
  }
  
  if (image.category !== 'hero' && !image.lazyLoading) {
    recommendations.push('Enable lazy loading for below-the-fold images to improve performance');
  }
  
  // Check alt text length
  if (image.alt && image.alt.length > 100) {
    recommendations.push('Consider shortening alt text (currently ' + image.alt.length + ' characters)');
  }
  
  // Check for missing title
  if (!image.title && image.category === 'course') {
    recommendations.push('Add a title attribute for better UX');
  }
  
  return recommendations;
}
