
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { templates } from '../data/templates';
import { Template } from '../types';
import { Helmet } from 'react-helmet-async';

const ThankYouPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [template, setTemplate] = useState<Template | null>(null);
  const [downloadStarted, setDownloadStarted] = useState(false);

  useEffect(() => {
    const foundTemplate = templates.find(t => t.slug === slug);
    setTemplate(foundTemplate || null);
    
    // Auto-download after 3 seconds
    const timer = setTimeout(() => {
      if (foundTemplate) {
        initiateDownload();
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [slug]);

  const getDownloadLink = (templateSlug: string) => {
    // In a production environment, you'd have a mapping of template slugs to their download URLs
    // For testing purposes, we're using the provided sample link
    return "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/Project%20Substandard%20Websites%2FUnited%20Kingdom%2F20%2Fwebsite-51-mocktail-bartending.zip?alt=media&token=15841897-d97b-4628-b302-83a51607a2ac";
  };

  const initiateDownload = () => {
    if (template) {
      const downloadLink = getDownloadLink(template.slug);
      const link = document.createElement('a');
      link.href = downloadLink;
      link.setAttribute('download', `${template.slug}.zip`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadStarted(true);
    }
  };

  if (!template) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Purchase</h1>
        <p className="mb-8">We couldn't find specific template information, but your download should begin shortly.</p>
        <Link to="/templates" className="btn-primary">Browse All Templates</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Thank You for Your Purchase - {template.name}</title>
      </Helmet>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 text-green-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Your Purchase!</h1>
          <p className="text-xl text-gray-600">
            Your purchase of <span className="font-semibold">{template.name}</span> is complete.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
            <div className="aspect-video w-full md:w-1/3 bg-gray-100 rounded overflow-hidden">
              <img 
                src={template.previews.PI} 
                alt={template.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="font-bold text-xl mb-2">{template.name}</h3>
              <p className="text-gray-600 mb-4">{template.shortDescription}</p>
              <div className="text-lg font-bold text-green-600">${template.price}</div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-bold text-lg mb-4">Download Your Template</h3>
            <p className="mb-4">
              {downloadStarted 
                ? "Your download has been initiated. If it doesn't start automatically, click the button below:"
                : "Your download should start automatically in a few seconds. If it doesn't, click the button below:"}
            </p>
            <button
              onClick={initiateDownload}
              className="btn-primary px-8 py-3 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Template
            </button>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-4">What's Next?</h3>
          <ol className="list-decimal pl-5 space-y-3">
            <li>Extract the downloaded ZIP file to a location of your choice.</li>
            <li>Open the files using a code editor like VS Code.</li>
            <li>Follow the included README.md file for detailed instructions.</li>
            <li>Replace the placeholder content with your own text and images.</li>
          </ol>
          <div className="mt-6">
            <Link to="/how-to-edit" className="text-green-600 hover:underline font-medium">
              View our detailed tutorial on how to customize your template →
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/templates" className="btn-secondary mr-4">Browse More Templates</Link>
          <Link to="/contact" className="btn-outline">Need Help?</Link>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
