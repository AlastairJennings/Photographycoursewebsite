export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Prism - inspired by Dark Side of the Moon */}
        <defs>
          <linearGradient id="prismGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e0e0e0" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#b0b0b0" />
          </linearGradient>
          
          {/* Rainbow spectrum gradient */}
          <linearGradient id="spectrum" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="20%" stopColor="#f97316" />
            <stop offset="40%" stopColor="#fbbf24" />
            <stop offset="60%" stopColor="#10b981" />
            <stop offset="80%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        
        {/* White light beam entering from left */}
        <line x1="2" y1="24" x2="15" y2="24" stroke="white" strokeWidth="2" opacity="0.8" />
        <circle cx="2" cy="24" r="2" fill="white" opacity="0.6" />
        
        {/* Prism - triangle in center */}
        <path 
          d="M 16 24 L 26 14 L 26 34 Z" 
          fill="url(#prismGradient)" 
          stroke="#94a3b8" 
          strokeWidth="0.5"
          opacity="0.9"
        />
        
        {/* Glass reflection on prism */}
        <path 
          d="M 19 24 L 25 18 L 25 22 Z" 
          fill="white" 
          opacity="0.3"
        />
        
        {/* Rainbow spectrum exiting - split into individual color beams */}
        {/* Red */}
        <line x1="26" y1="28" x2="46" y2="32" stroke="#ef4444" strokeWidth="1.5" opacity="0.9" />
        {/* Orange */}
        <line x1="26" y1="26" x2="46" y2="28" stroke="#f97316" strokeWidth="1.5" opacity="0.9" />
        {/* Yellow */}
        <line x1="26" y1="24" x2="46" y2="24" stroke="#fbbf24" strokeWidth="1.5" opacity="0.9" />
        {/* Green */}
        <line x1="26" y1="22" x2="46" y2="20" stroke="#10b981" strokeWidth="1.5" opacity="0.9" />
        {/* Blue */}
        <line x1="26" y1="20" x2="46" y2="16" stroke="#3b82f6" strokeWidth="1.5" opacity="0.9" />
        {/* Violet */}
        <line x1="26" y1="18" x2="46" y2="12" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.9" />
        
        {/* Subtle glow effects on spectrum */}
        <line x1="26" y1="28" x2="46" y2="32" stroke="#ef4444" strokeWidth="3" opacity="0.2" />
        <line x1="26" y1="24" x2="46" y2="24" stroke="#fbbf24" strokeWidth="3" opacity="0.2" />
        <line x1="26" y1="18" x2="46" y2="12" stroke="#8b5cf6" strokeWidth="3" opacity="0.2" />
      </svg>
    </div>
  );
}
