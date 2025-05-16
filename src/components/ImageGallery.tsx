
import React, { useState } from 'react';

interface ImageGalleryProps {
  images: {
    PI: string;
    PII: string;
    PIII: string;
    PIV: string;
  };
  alt: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [selectedImage, setSelectedImage] = useState<string>(images.PI);
  
  const imageArray = [
    { key: 'PI', url: images.PI },
    { key: 'PII', url: images.PII },
    { key: 'PIII', url: images.PIII },
    { key: 'PIV', url: images.PIV },
  ];

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <img 
          src={selectedImage} 
          alt={`${alt} - preview`}
          className="w-full h-auto object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {imageArray.map((image) => (
          <button
            key={image.key}
            onClick={() => setSelectedImage(image.url)}
            className={`overflow-hidden rounded border ${
              selectedImage === image.url 
                ? 'border-primary ring-2 ring-primary/30' 
                : 'border-gray-200 hover:border-primary/50'
            } transition-all duration-200`}
          >
            <img 
              src={image.url} 
              alt={`${alt} - ${image.key} thumbnail`} 
              className="w-full h-16 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
