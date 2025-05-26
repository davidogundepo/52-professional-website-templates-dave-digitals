
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Template } from '../types';
import { Skeleton } from './ui/skeleton';

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  // Function to add compression parameters to Firebase Storage URLs
  const getOptimizedImageUrl = (originalUrl: string, quality: number = 30) => {
    if (originalUrl.includes('firebasestorage.googleapis.com')) {
      // Add compression parameters to Firebase Storage URLs
      const url = new URL(originalUrl);
      url.searchParams.set('quality', quality.toString());
      url.searchParams.set('format', 'webp');
      return url.toString();
    }
    return originalUrl;
  };

  useEffect(() => {
    // Get optimized image URL for thumbnails
    const optimizedUrl = getOptimizedImageUrl(template.previews.PI, 40);
    
    // Check if we already have this cached in sessionStorage
    const cachedImage = sessionStorage.getItem(`template-image-${template.id}`);
    
    if (cachedImage === optimizedUrl) {
      setImageSrc(cachedImage);
      setImageLoaded(true);
    } else {
      const img = new Image();
      img.src = optimizedUrl;
      
      img.onload = () => {
        setImageSrc(optimizedUrl);
        setImageLoaded(true);
        // Store in sessionStorage to avoid reloading between page navigations
        sessionStorage.setItem(`template-image-${template.id}`, optimizedUrl);
      };
      
      img.onerror = () => {
        // Fallback to original URL if optimization fails
        const fallbackImg = new Image();
        fallbackImg.src = template.previews.PI;
        fallbackImg.onload = () => {
          setImageSrc(template.previews.PI);
          setImageLoaded(true);
          sessionStorage.setItem(`template-image-${template.id}`, template.previews.PI);
        };
        fallbackImg.onerror = () => {
          setImageSrc('/placeholder.svg');
          setImageLoaded(true);
        };
      };
    }

    return () => {
      // Cleanup is handled automatically
    };
  }, [template.id, template.previews.PI]);

  return (
    <Link to={`/template/${template.slug}`} className="template-card hover-scale">
      <div className="relative">
        <div className="aspect-video w-full bg-gray-200">
          {!imageLoaded && <Skeleton className="h-full w-full" />}
          {imageSrc && (
            <img 
              src={imageSrc} 
              alt={template.name} 
              className={`template-card-image ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
        <div className="absolute top-2 right-2">
          <span className="category-badge">{template.category}</span>
        </div>
      </div>
      <div className="template-card-content">
        <h3 className="font-medium text-lg mb-1 text-gray-900">{template.name}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{template.shortDescription}</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-green-600">${template.price}</span>
          <button className="btn-secondary text-xs">Preview & Buy</button>
        </div>
      </div>
    </Link>
  );
};

export default TemplateCard;
