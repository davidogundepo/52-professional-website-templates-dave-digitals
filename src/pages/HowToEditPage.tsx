
import React from 'react';
import { Helmet } from 'react-helmet-async';

const HowToEditPage = () => {
  return (
    <>
      <Helmet>
        <title>How to Edit Templates - Davedigitals</title>
        <meta name="description" content="Learn how to customize and edit your website templates with our step-by-step guide." />
        <meta name="keywords" content="edit website templates, customize templates, web development tutorial" />
      </Helmet>
      
      <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">How to Edit Your Templates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our simple guide to customize and deploy your website templates in minutes.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Step-by-Step Guide</h2>
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 text-2xl font-bold">1</div>
                  <h3 className="text-xl font-semibold mb-2">Download & Extract</h3>
                  <p className="text-gray-600">
                    After purchasing, download the template ZIP file and extract it to your preferred location.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FMining%20and%20Minerals%2FPiv.png?alt=media&token=593b3f66-de1a-4516-b291-b613d4b616f1" 
                      alt="Download and extract template" 
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Pro Tip:</strong> Keep your template files organized in a dedicated folder for easy access.
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 text-2xl font-bold">2</div>
                  <h3 className="text-xl font-semibold mb-2">Open in VS Code</h3>
                  <p className="text-gray-600">
                    Open Visual Studio Code or your preferred code editor and open the template folder.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FInformation%20Technology%2FPiv.png?alt=media&token=a575d531-1e66-42c8-bd29-787db8fc51d1" 
                      alt="Open in VS Code" 
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Pro Tip:</strong> Use VS Code's "Open Folder" feature to access all template files in the sidebar.
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 text-2xl font-bold">3</div>
                  <h3 className="text-xl font-semibold mb-2">Customize Content</h3>
                  <p className="text-gray-600">
                    Replace placeholder text, images, and contact information with your own content.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FFine%20Art%20and%20Auction%20Houses%2FPiii.png?alt=media&token=6cb9f4de-7d9d-4683-b911-eb3f1d1c3e7e" 
                      alt="Customize content" 
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Pro Tip:</strong> Use the search function (Ctrl+F or Cmd+F) to quickly find placeholder text.
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 text-2xl font-bold">4</div>
                  <h3 className="text-xl font-semibold mb-2">Modify Styles</h3>
                  <p className="text-gray-600">
                    Update colors, fonts, and other visual elements to match your brand identity.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FFashion%20and%20Apparel%2FPiii.png?alt=media&token=f0e6021c-8129-4263-bdb8-5d4447a0a675" 
                      alt="Modify styles" 
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Pro Tip:</strong> Look for CSS variables at the top of stylesheets for easy color and font changes.
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 text-2xl font-bold">5</div>
                  <h3 className="text-xl font-semibold mb-2">Preview Changes</h3>
                  <p className="text-gray-600">
                    Test your changes locally by opening the HTML files in your browser.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FRenewable%20Energy%2FPiii.png?alt=media&token=20b502ca-9632-4a58-9312-68d88d868277" 
                      alt="Preview changes" 
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Pro Tip:</strong> Use the "Live Server" extension in VS Code for real-time previews as you edit.
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 text-2xl font-bold">6</div>
                  <h3 className="text-xl font-semibold mb-2">Deploy Your Website</h3>
                  <p className="text-gray-600">
                    Upload your files to a web hosting service or deploy using platforms like Netlify or Vercel.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FBiotechnology%2FPii.png?alt=media&token=ed11ef20-d14e-454a-bb61-186ef0978c9d" 
                      alt="Deploy your website" 
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Pro Tip:</strong> Connect your repository to Netlify or Vercel for automatic deployments when you make changes.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Video Tutorial</h2>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">Video tutorial demonstrating template customization</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Need Help?</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <p className="mb-4">
                If you encounter any issues while editing your templates, our support team is here to help. Contact us via email or check our documentation for additional guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:support@davedigitals.com" 
                  className="btn-primary text-center"
                >
                  Contact Support
                </a>
                <a 
                  href="/docs" 
                  className="btn-secondary text-center"
                >
                  View Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToEditPage;
