
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Template } from '../types';

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link to={`/template/${template.slug}`} className="template-card hover-scale">
      <div className="relative">
        <div className={`aspect-video w-full bg-gray-200 ${!imageLoaded ? 'animate-pulse' : ''}`}>
          <img 
            src={template.previews.PI} 
            alt={template.name} 
            className={`template-card-image ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
              setImageLoaded(true);
            }}
          />
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
