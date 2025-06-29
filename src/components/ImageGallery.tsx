
import React, { useState } from 'react';

interface ImageGalleryProps {
  images: {
    PI: string;
    P2: string;
    P3: string;
    P4: string;
  };
  alt: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [selectedImage, setSelectedImage] = useState('PI');

  // Function to add very aggressive compression parameters to Firebase Storage URLs
  const getOptimizedImageUrl = (originalUrl: string, quality: number = 30, width?: number) => {
    if (originalUrl.includes('firebasestorage.googleapis.com')) {
      const url = new URL(originalUrl);
      url.searchParams.set('quality', quality.toString());
      url.searchParams.set('format', 'webp');
      if (width) {
        url.searchParams.set('width', width.toString());
      }
      return url.toString();
    }
    return originalUrl;
  };

  // Get optimized URLs for main images (still compressed but higher quality for main view)
  const optimizedImages = {
    PI: getOptimizedImageUrl(images.PI, 40, 800),
    P2: getOptimizedImageUrl(images.P2, 40, 800),
    P3: getOptimizedImageUrl(images.P3, 40, 800),
    P4: getOptimizedImageUrl(images.P4, 40, 800),
  };

  // Get heavily compressed thumbnail versions (very low quality and small size)
  const thumbnailImages = {
    PI: getOptimizedImageUrl(images.PI, 15, 200),
    P2: getOptimizedImageUrl(images.P2, 15, 200),
    P3: getOptimizedImageUrl(images.P3, 15, 200),
    P4: getOptimizedImageUrl(images.P4, 15, 200),
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={optimizedImages[selectedImage as keyof typeof optimizedImages]}
          alt={`${alt} - Preview ${selectedImage}`}
          className="w-full h-full object-cover transition-opacity duration-300"
          loading="lazy"
          decoding="async"
          style={{ 
            imageRendering: 'auto',
            willChange: 'transform'
          }}
        />
      </div>
      
      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-4 gap-2">
        {Object.entries(thumbnailImages).map(([key, src]) => (
          <button
            key={key}
            onClick={() => setSelectedImage(key)}
            className={`aspect-video rounded overflow-hidden border-2 transition-all ${
              selectedImage === key 
                ? 'border-primary shadow-md' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <img
              src={src}
              alt={`${alt} - Thumbnail ${key}`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              style={{ 
                imageRendering: 'auto'
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
