interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={className}>
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Leaf Icon */}
        <path
          d="M30 10C30 10 20 15 15 25C10 35 12 45 20 50C28 55 35 52 38 45C41 38 40 30 35 25C30 20 25 15 30 10Z"
          fill="#16a34a"
        />
        <path
          d="M30 10C30 10 40 15 45 25C50 35 48 45 40 50C32 55 25 52 22 45C19 38 20 30 25 25C30 20 35 15 30 10Z"
          fill="#22c55e"
        />
        
        {/* Text */}
        <text x="60" y="28" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#16a34a">
          EcoGreen
        </text>
        <text x="60" y="48" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="600" fill="#059669">
          Pro
        </text>
      </svg>
    </div>
  );
}
