
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

  useEffect(() => {
    // This allows browser to cache the image across page navigations
    const img = new Image();
    img.src = template.previews.PI;
    
    // Check if we already have this cached in sessionStorage
    const cachedImage = sessionStorage.getItem(`template-image-${template.id}`);
    
    if (cachedImage) {
      setImageSrc(cachedImage);
      setImageLoaded(true);
    } else {
      img.onload = () => {
        setImageSrc(template.previews.PI);
        setImageLoaded(true);
        // Store in sessionStorage to avoid reloading between page navigations
        sessionStorage.setItem(`template-image-${template.id}`, template.previews.PI);
      };
      
      img.onerror = () => {
        setImageSrc('/placeholder.svg');
        setImageLoaded(true);
      };
    }

    return () => {
      img.onload = null;
      img.onerror = null;
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
