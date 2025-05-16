
import React from 'react';
import TemplateGallery from '../components/TemplateGallery';
import { Helmet } from 'react-helmet-async';

const TemplatesPage = () => {
  return (
    <>
      <Helmet>
        <title>Browse All Templates - Davedigitals</title>
        <meta name="description" content="Browse our collection of 52 professionally designed website templates for every industry. Individual templates available for $39 each." />
        <meta name="keywords" content="website templates, web design templates, professional templates, industry templates" />
      </Helmet>
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Browse All Templates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of 52 professionally designed templates for every industry. 
            Each template is fully customizable and ready for immediate use.
          </p>
        </div>
      </div>
      
      <div className="py-12">
        <TemplateGallery />
      </div>
    </>
  );
};

export default TemplatesPage;
