import { useState, useEffect, useRef } from 'react';

/**
 * Optimized Image Component
 * 
 * Features:
 * - Custom alt text (required for accessibility and SEO)
 * - Optional title attribute
 * - Optional caption
 * - Responsive images with srcset
 * - Lazy loading for below-the-fold images
 * - WebP with fallback to JPEG/PNG
 * - Error handling with fallback
 * - Loading states
 * 
 * SEO & Accessibility:
 * - Required alt text
 * - Descriptive, natural alt text (not keyword-stuffed)
 * - Proper semantic markup for captions
 * - ARIA labels where appropriate
 */

interface OptimizedImageProps {
  // Required
  src: string;
  alt: string; // Required for accessibility and SEO
  
  // Optional SEO/Accessibility
  title?: string; // Optional title attribute for tooltips
  caption?: string; // Optional caption text
  
  // Responsive Images
  srcSet?: string; // Responsive image sources
  sizes?: string; // Image sizes for different viewports
  width?: number; // Intrinsic width
  height?: number; // Intrinsic height
  
  // Loading
  loading?: 'lazy' | 'eager'; // Lazy load below-the-fold images
  priority?: boolean; // Preload critical images
  
  // Styling
  className?: string;
  imageClassName?: string;
  captionClassName?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  
  // Callbacks
  onLoad?: () => void;
  onError?: () => void;
}

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4=';

export function OptimizedImage({
  src,
  alt,
  title,
  caption,
  srcSet,
  sizes,
  width,
  height,
  loading = 'lazy',
  priority = false,
  className,
  imageClassName = '',
  captionClassName = '',
  objectFit = 'cover',
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [didError, setDidError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setDidError(true);
    onError?.();
  };

  // Preload critical images
  useEffect(() => {
    if (priority && typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      if (srcSet) link.setAttribute('imagesrcset', srcSet);
      if (sizes) link.setAttribute('imagesizes', sizes);
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, src, srcSet, sizes]);

  // Generate WebP source if original is JPEG/PNG
  const getWebPSource = (imageSrc: string): string | undefined => {
    if (imageSrc.match(/\.(jpg|jpeg|png)$/i)) {
      return imageSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    return undefined;
  };

  const webpSrc = getWebPSource(src);

  // Error state
  if (didError) {
    return (
      <figure className={className}>
        <div className={`inline-block bg-gray-100 text-center ${imageClassName}`}>
          <div className="flex items-center justify-center w-full h-full">
            <img 
              src={ERROR_IMG_SRC} 
              alt={`Error loading: ${alt}`}
              className="opacity-50"
              data-original-url={src}
            />
          </div>
        </div>
        {caption && (
          <figcaption className={`mt-2 text-sm text-gray-600 italic ${captionClassName}`}>
            Failed to load image
          </figcaption>
        )}
      </figure>
    );
  }

  // Main image component
  const imageElement = (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      title={title}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      decoding="async"
      className={`${imageClassName} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      style={{ objectFit }}
      onLoad={handleLoad}
      onError={handleError}
    />
  );

  // With caption (use figure/figcaption for semantic HTML)
  if (caption) {
    return (
      <figure className={className}>
        {/* Use picture element for WebP with fallback */}
        {webpSrc ? (
          <picture>
            <source srcSet={webpSrc} type="image/webp" />
            {imageElement}
          </picture>
        ) : (
          imageElement
        )}
        <figcaption className={`mt-2 text-sm text-gray-600 ${captionClassName}`}>
          {caption}
        </figcaption>
      </figure>
    );
  }

  // Without caption
  if (webpSrc) {
    return (
      <picture className={className}>
        <source srcSet={webpSrc} type="image/webp" />
        {imageElement}
      </picture>
    );
  }

  return imageElement;
}

/**
 * Helper function to generate srcset for responsive images
 * 
 * Usage:
 * const srcSet = generateSrcSet('/images/photo.jpg', [400, 800, 1200, 1600]);
 * <OptimizedImage src="/images/photo.jpg" srcSet={srcSet} />
 */
export function generateSrcSet(basePath: string, widths: number[]): string {
  return widths
    .map(width => {
      const ext = basePath.split('.').pop();
      const path = basePath.replace(`.${ext}`, `@${width}w.${ext}`);
      return `${path} ${width}w`;
    })
    .join(', ');
}

/**
 * Helper function to generate sizes attribute
 * 
 * Usage:
 * const sizes = generateSizes([
 *   { breakpoint: 640, size: '100vw' },
 *   { breakpoint: 1024, size: '50vw' },
 *   { size: '33vw' }
 * ]);
 */
export function generateSizes(config: Array<{ breakpoint?: number; size: string }>): string {
  return config
    .map(({ breakpoint, size }) => {
      if (breakpoint) {
        return `(max-width: ${breakpoint}px) ${size}`;
      }
      return size;
    })
    .join(', ');
}

/**
 * Recommended alt text guidelines:
 * 
 * DO:
 * - Describe what's in the image accurately
 * - Be concise but descriptive
 * - Include context relevant to the content
 * - Use natural language
 * - Include keywords only if genuinely relevant
 * 
 * DON'T:
 * - Start with "Image of" or "Picture of"
 * - Keyword stuff
 * - Use generic text like "photo" or "image"
 * - Leave alt text empty (unless decorative)
 * - Make it too long (aim for <125 characters)
 * 
 * Examples:
 * ✅ Good: "Photographer adjusting aperture on a DSLR camera"
 * ✅ Good: "Golden hour sunset creating warm lighting on a portrait"
 * ❌ Bad: "Image of camera photography photo picture"
 * ❌ Bad: "Camera"
 * ❌ Bad: ""
 * 
 * For decorative images:
 * Use alt="" (empty string) to indicate the image is decorative
 */
