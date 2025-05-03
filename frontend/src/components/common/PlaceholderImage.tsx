import React from 'react';

interface PlaceholderImageProps {
  width?: string;
  height?: string;
  text?: string;
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width = '100%',
  height = '100%',
  text = 'Placeholder Image',
  className = '',
}) => {
  return (
    <div
      className={`flex items-center justify-center bg-gray-200 ${className}`}
      style={{ width, height }}
    >
      <span className="text-gray-500 text-sm font-medium">{text}</span>
    </div>
  );
};

export default PlaceholderImage;
