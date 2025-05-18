
import React, { useState } from 'react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';
import { Skeleton } from './ui/skeleton';

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
  const [mainImageLoaded, setMainImageLoaded] = useState(false);
  const [thumbsLoaded, setThumbsLoaded] = useState<{[key: string]: boolean}>({
    PI: false,
    PII: false,
    PIII: false,
    PIV: false
  });
  
  const imageArray = [
    { key: 'PI', url: images.PI },
    { key: 'PII', url: images.PII },
    { key: 'PIII', url: images.PIII },
    { key: 'PIV', url: images.PIV },
  ];

  const handleThumbLoad = (key: string) => {
    setThumbsLoaded(prev => ({
      ...prev,
      [key]: true
    }));
  };

  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <HoverCard>
          <HoverCardTrigger asChild>
            <div 
              className={`aspect-video w-full bg-gray-200 cursor-zoom-in ${!mainImageLoaded ? 'animate-pulse' : ''}`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              {!mainImageLoaded && <Skeleton className="h-full w-full" />}
              <img 
                src={selectedImage} 
                alt={`${alt} - preview`}
                loading="lazy"
                className={`w-full h-auto object-cover transition-opacity duration-300 ${mainImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setMainImageLoaded(true)}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                  setMainImageLoaded(true);
                }}
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-[80vw] max-w-[800px] h-auto p-0 overflow-hidden">
            <img 
              src={selectedImage} 
              alt={`${alt} - zoomed preview`}
              className="w-full h-auto object-contain max-h-[80vh]"
            />
          </HoverCardContent>
        </HoverCard>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {imageArray.map((image) => (
          <button
            key={image.key}
            onClick={() => {
              setSelectedImage(image.url);
              setMainImageLoaded(false);
            }}
            className={`overflow-hidden rounded border ${
              selectedImage === image.url 
                ? 'border-green-600 ring-2 ring-green-600/30' 
                : 'border-gray-200 hover:border-green-600/50'
            } transition-all duration-200`}
          >
            <div className={`h-16 bg-gray-200 ${!thumbsLoaded[image.key] ? 'animate-pulse' : ''}`}>
              {!thumbsLoaded[image.key] && <Skeleton className="h-full w-full" />}
              <img 
                src={image.url} 
                alt={`${alt} - ${image.key} thumbnail`} 
                loading="lazy"
                className={`w-full h-16 object-cover transition-opacity duration-300 ${thumbsLoaded[image.key] ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => handleThumbLoad(image.key)}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                  handleThumbLoad(image.key);
                }}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
