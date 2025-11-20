import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ImageWithFallback({ src, alt, className, style }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  if (error) {
    return (
      <div 
        className={`${className} bg-gray-200 flex items-center justify-center`}
        style={style}
      >
        <div className="text-gray-400 text-center p-4">
          <svg 
            className="w-12 h-12 mx-auto mb-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          <span className="text-sm">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div 
          className={`${className} bg-gray-200 animate-pulse`}
          style={style}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loading ? 'hidden' : ''}`}
        style={style}
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  );
}
