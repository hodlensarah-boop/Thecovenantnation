import { useState } from 'react';
import { TCN_IMAGES } from '../data/tcnImages';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#EFEAE0] text-[#5C564E] p-6 text-center ${className}`}
      >
        <img
          src={TCN_IMAGES.logo.src}
          alt=""
          aria-hidden="true"
          className="w-12 h-12 object-contain opacity-65 mb-2"
        />
        <span className="text-xs font-medium tracking-wide max-w-[22ch]">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
