import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { templates } from '../data/templates';
import ImageGallery from '../components/ImageGallery';
import BuyButton from '../components/BuyButton';
import { Template } from '../types';
import { Helmet } from 'react-helmet-async';

const TemplatePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [template, setTemplate] = useState<Template | null>(null);

  useEffect(() => {
    const foundTemplate = templates.find(t => t.slug === slug);
    setTemplate(foundTemplate || null);
  }, [slug]);

  if (!template) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Template Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the template you're looking for.</p>
        <Link to="/templates" className="btn-primary">Browse All Templates</Link>
      </div>
    );
  }

  // Convert the preview property names to match ImageGallery expectations
  const galleryImages = {
    PI: template.previews.PI,
    P2: template.previews.PII,
    P3: template.previews.PIII,
    P4: template.previews.PIV,
  };

  return (
    <>
      <Helmet>
        <title>{template.name} - Davedigitals</title>
        <meta name="description" content={template.description} />
        <meta name="keywords" content={`${template.name}, website template, ${template.category} template, professional design`} />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/templates" className="text-primary hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Templates
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ImageGallery images={galleryImages} alt={template.name} />
          </div>
          
          <div>
            <div className="mb-8">
              <span className="category-badge mb-2">{template.category}</span>
              <h1 className="text-3xl font-bold mb-3">{template.name}</h1>
              <p className="text-gray-600 mb-6">{template.description}</p>
              
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-primary">${template.price}</span>
                <span className="ml-2 text-gray-500">One-time payment</span>
              </div>
              
              <BuyButton 
                templateName={template.name} 
                price={template.price} 
                templateSlug={template.slug} 
              />
              
              {template.demoUrl && (
                <a 
                  href={template.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center border border-gray-300 rounded-md py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  View Live Demo
                </a>
              )}
            </div>
            
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">What's Included</h2>
              <ul className="space-y-3">
                {template.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t pt-12">
          <h2 className="text-2xl font-bold mb-6">How to Use This Template</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Download</h3>
              <p className="text-gray-600">After purchase, download the ZIP file containing all template assets and documentation.</p>
            </div>
            
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Open in VS Code</h3>
              <p className="text-gray-600">Extract the ZIP file and open the folder in Visual Studio Code or your preferred code editor.</p>
            </div>
            
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Customize</h3>
              <p className="text-gray-600">Replace placeholder text, images, and colors with your own content and branding.</p>
            </div>
            
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Deploy</h3>
              <p className="text-gray-600">Upload the files to your web hosting provider or deploy using services like Netlify or Vercel.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/how-to-edit" className="btn-secondary">
              View Detailed Tutorial
            </Link>
          </div>
        </div>
        
        <div className="mt-16 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Can I use this template for multiple websites?</h3>
              <p className="text-gray-600">Yes, once purchased, you can use this template for an unlimited number of projects, including client websites.</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Do I need to credit Davedigitals on my website?</h3>
              <p className="text-gray-600">No, you do not need to include any attribution or credits. Feel free to use the template as if it were your own creation.</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">What if I need help with customization?</h3>
              <p className="text-gray-600">Each template includes detailed documentation. For additional support, contact our team via email for assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplatePage;
