
import React, { useState } from 'react';
import TemplateCard from './TemplateCard';
import CategoryFilter from './CategoryFilter';
import { templates } from '../data/templates';
import { Template } from '../types';

const TemplateGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = templates.filter((template) => {
    const categoryMatch = activeCategory === 'all' || template.category === activeCategory;
    const searchMatch = 
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <h2 className="text-2xl font-bold">Browse Templates</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search templates..."
              className="pl-10 pr-4 py-2 border rounded-md w-full md:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
        </div>
        
        <CategoryFilter 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map((template: Template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No templates found matching your criteria.</p>
          <button 
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 btn-secondary"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default TemplateGallery;
