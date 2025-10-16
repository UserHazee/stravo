import React from "react";

const Logo = ({ className }) => {
  const gradientId = `stravo-gradient-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <svg
      viewBox="50 80 650 230"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A000F" />
          <stop offset="100%" stopColor="#E2001A" />
        </linearGradient>
      </defs>

      {/* Background (optional, remove for transparency) */}
      {/* <rect width="800" height="300" fill="#FFFFFF" /> */}

      <g id="wordmark">
        {/* S */}
        <path
          d="M 100 180 Q 100 150 130 140 L 170 140 Q 190 140 190 160 Q 190 175 175 180 L 130 185 Q 100 190 100 220 Q 100 245 130 250 L 175 250 Q 200 250 200 230"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* T - Combined as single path */}
        <path
          d="M 220 145 L 290 145 M 255 145 L 255 250"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* R */}
        <path
          d="M 310 250 L 310 145 L 360 145 Q 385 145 385 170 Q 385 190 365 195 L 390 250"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* A */}
        <path
          d="M 410 250 L 445 145 L 480 250 M 425 210 L 465 210"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* V */}
        <path
          d="M 500 145 L 540 250 L 580 145"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* O */}
        <circle
          cx="630"
          cy="197.5"
          r="52.5"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="12"
        />
      </g>

      <text
        x="100"
        y="290"
        fontFamily="'Outfit', 'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontSize="28"
        fill={`url(#${gradientId})`}
        letterSpacing="3"
        fontWeight="500"
      >
        STRATEGY × VELOCITY
      </text>
    </svg>
  );
};

export default Logo;