import { ReactNode } from 'react';

/**
 * Responsive Container Component
 * 
 * Features:
 * - Mobile-first responsive padding
 * - Maximum width constraints
 * - Centered content
 * - Customizable spacing
 */

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  as?: 'div' | 'section' | 'article' | 'main';
}

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};

const paddingClasses = {
  none: '',
  sm: 'px-4 sm:px-6',
  md: 'px-4 sm:px-6 lg:px-8',
  lg: 'px-4 sm:px-8 lg:px-16',
};

export function ResponsiveContainer({
  children,
  className = '',
  maxWidth = 'xl',
  padding = 'md',
  as: Component = 'div',
}: ResponsiveContainerProps) {
  return (
    <Component 
      className={`${maxWidthClasses[maxWidth]} ${paddingClasses[padding]} mx-auto ${className}`}
    >
      {children}
    </Component>
  );
}

/**
 * Responsive Grid Component
 * 
 * Mobile-first grid that adapts to screen size
 */
interface ResponsiveGridProps {
  children: ReactNode;
  className?: string;
  cols?: {
    default: number; // Mobile (< 640px)
    sm?: number;     // Small screens (640px+)
    md?: number;     // Medium screens (768px+)
    lg?: number;     // Large screens (1024px+)
    xl?: number;     // Extra large (1280px+)
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

const gapClasses = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
};

export function ResponsiveGrid({
  children,
  className = '',
  cols = { default: 1, sm: 2, lg: 3 },
  gap = 'md',
}: ResponsiveGridProps) {
  const colsClass = `
    grid-cols-${cols.default}
    ${cols.sm ? `sm:grid-cols-${cols.sm}` : ''}
    ${cols.md ? `md:grid-cols-${cols.md}` : ''}
    ${cols.lg ? `lg:grid-cols-${cols.lg}` : ''}
    ${cols.xl ? `xl:grid-cols-${cols.xl}` : ''}
  `.trim();

  return (
    <div className={`grid ${colsClass} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}

/**
 * Responsive Stack Component
 * 
 * Vertical stack on mobile, horizontal on desktop
 */
interface ResponsiveStackProps {
  children: ReactNode;
  className?: string;
  direction?: 'vertical' | 'horizontal';
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
}

const spacingClasses = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
};

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
};

export function ResponsiveStack({
  children,
  className = '',
  direction = 'vertical',
  breakpoint = 'lg',
  spacing = 'md',
  align = 'stretch',
  justify = 'start',
}: ResponsiveStackProps) {
  const directionClass = direction === 'vertical'
    ? `flex-col ${breakpoint}:flex-row`
    : `flex-row ${breakpoint}:flex-col`;

  return (
    <div 
      className={`flex ${directionClass} ${spacingClasses[spacing]} ${alignClasses[align]} ${justifyClasses[justify]} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Responsive Show/Hide Component
 * 
 * Conditionally show/hide content at different breakpoints
 */
interface ResponsiveVisibilityProps {
  children: ReactNode;
  show?: {
    mobile?: boolean;    // < 640px
    sm?: boolean;        // 640px+
    md?: boolean;        // 768px+
    lg?: boolean;        // 1024px+
    xl?: boolean;        // 1280px+
  };
  className?: string;
}

export function ResponsiveVisibility({
  children,
  show = {},
  className = '',
}: ResponsiveVisibilityProps) {
  const visibilityClasses = [
    show.mobile === false ? 'hidden' : 'block',
    show.sm === true ? 'sm:block' : show.sm === false ? 'sm:hidden' : '',
    show.md === true ? 'md:block' : show.md === false ? 'md:hidden' : '',
    show.lg === true ? 'lg:block' : show.lg === false ? 'lg:hidden' : '',
    show.xl === true ? 'xl:block' : show.xl === false ? 'xl:hidden' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={`${visibilityClasses} ${className}`}>
      {children}
    </div>
  );
}

/**
 * Responsive Section Component
 * 
 * Section with responsive spacing
 */
interface ResponsiveSectionProps {
  children: ReactNode;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'gradient';
}

const sectionSpacingClasses = {
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16 lg:py-20',
  lg: 'py-16 md:py-24 lg:py-32',
  xl: 'py-20 md:py-32 lg:py-40',
};

const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  gradient: 'bg-gradient-to-b from-white to-gray-50',
};

export function ResponsiveSection({
  children,
  className = '',
  spacing = 'md',
  background = 'white',
}: ResponsiveSectionProps) {
  return (
    <section className={`${sectionSpacingClasses[spacing]} ${backgroundClasses[background]} ${className}`}>
      {children}
    </section>
  );
}

/**
 * Touch-Friendly Button Component
 * 
 * Ensures minimum 44x44px touch target
 */
interface TouchButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const buttonVariants = {
  primary: 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-700 hover:to-fuchsia-700 active:from-violet-800 active:to-fuchsia-800',
  secondary: 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm min-h-[44px]',
  md: 'px-6 py-3 text-base min-h-[44px]',
  lg: 'px-8 py-4 text-lg min-h-[48px]',
};

export function TouchButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
}: TouchButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${buttonVariants[variant]}
        ${buttonSizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        flex items-center justify-center
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2
        ${className}
      `.trim()}
    >
      {children}
    </button>
  );
}

/**
 * Responsive Image Wrapper
 * 
 * Ensures images scale properly on all devices
 */
interface ResponsiveImageWrapperProps {
  children: ReactNode;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2' | 'auto';
  className?: string;
}

const aspectRatioClasses = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-4/3',
  '1/1': 'aspect-square',
  '3/2': 'aspect-3/2',
  'auto': '',
};

export function ResponsiveImageWrapper({
  children,
  aspectRatio = 'auto',
  className = '',
}: ResponsiveImageWrapperProps) {
  return (
    <div className={`relative overflow-hidden ${aspectRatioClasses[aspectRatio]} ${className}`}>
      {children}
    </div>
  );
}
