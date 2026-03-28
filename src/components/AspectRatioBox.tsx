import React from 'react';

/**
 * Aspect Ratio Box Component
 * 
 * Prevents CLS by reserving space for images before they load
 * Uses the padding-bottom trick for consistent aspect ratios
 */

interface AspectRatioBoxProps {
  ratio: number; // e.g., 16/9, 4/3, 1/1
  children: React.ReactNode;
  className?: string;
}

export function AspectRatioBox({ ratio, children, className = '' }: AspectRatioBoxProps) {
  const paddingBottom = `${(1 / ratio) * 100}%`;
  
  return (
    <div 
      className={`relative w-full ${className}`}
      style={{ 
        paddingBottom,
        // Prevent layout shifts with strict containment
        contain: 'layout size style',
        overflow: 'hidden'
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          // Prevent any layout shifts from children
          contain: 'strict',
          overflow: 'hidden'
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * Common aspect ratios as constants
 */
export const ASPECT_RATIOS = {
  SQUARE: 1 / 1,
  PORTRAIT: 3 / 4,
  LANDSCAPE: 4 / 3,
  WIDESCREEN: 16 / 9,
  ULTRAWIDE: 21 / 9,
  GOLDEN: 1.618 / 1,
} as const;