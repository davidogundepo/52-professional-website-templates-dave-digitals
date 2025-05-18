
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
      
      <div className="bg-gradient-to-r from-green-50 via-green-50 to-green-50 py-16">
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
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4 text-2xl font-bold">1</div>
                  <h3 className="text-xl font-semibold mb-2">Download & Extract</h3>
                  <p className="text-gray-600">
                    After purchasing, download the template ZIP file and extract it to your preferred location.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2F__Misc%2FScreenshot%202025-05-18%20at%2012.28.16.png?alt=media&token=99144b13-2b13-4a0f-9fa5-1d339b0de4ff" 
                      alt="Download and extract template" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
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
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4 text-2xl font-bold">2</div>
                  <h3 className="text-xl font-semibold mb-2">Open in VS Code</h3>
                  <p className="text-gray-600">
                    Open Visual Studio Code or your preferred code editor and open the template folder.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2F__Misc%2FScreenshot%202025-05-18%20at%2012.31.56.png?alt=media&token=cbbad060-86c1-40cb-89a2-c39dc20ac249" 
                      alt="Open in VS Code" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
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
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4 text-2xl font-bold">3</div>
                  <h3 className="text-xl font-semibold mb-2">Customize Content</h3>
                  <p className="text-gray-600">
                    Replace placeholder text, images, and contact information with your own content in the TSX files.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2F__Misc%2FScreenshot%202025-05-18%20at%2012.33.43.png?alt=media&token=4e01d240-43ac-4dd6-8125-cbb47c28a32e" 
                      alt="Customize content" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Pro Tip:</strong> Use the search function (Ctrl+F or Cmd+F) to quickly find placeholder text in components and pages.
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4 text-2xl font-bold">4</div>
                  <h3 className="text-xl font-semibold mb-2">Modify Styles</h3>
                  <p className="text-gray-600">
                    Update Tailwind classes and styles to match your brand identity.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2F__Misc%2FScreenshot%202025-05-18%20at%2012.35.50.png?alt=media&token=46e05b8b-adc8-4824-9548-64c0927ca4fc" 
                      alt="Modify styles" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Pro Tip:</strong> Look for Tailwind classes in the component files for easy color and styling changes.
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4 text-2xl font-bold">5</div>
                  <h3 className="text-xl font-semibold mb-2">Preview Changes</h3>
                  <p className="text-gray-600">
                    Test your changes locally by running npm run dev on your terminal and viewing the pages in your browser.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FRenewable%20Energy%2FPiii.png?alt=media&token=20b502ca-9632-4a58-9312-68d88d868277" 
                      alt="Preview changes" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Pro Tip:</strong> Check your site on different devices using the browser developer tools.
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4 text-2xl font-bold">6</div>
                  <h3 className="text-xl font-semibold mb-2">Deploy Your Website</h3>
                  <p className="text-gray-600">
                    Upload your files to a web hosting service or deploy using platforms like Vercel or Netlify.
                  </p>
                </div>
                <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FBiotechnology%2FPii.png?alt=media&token=ed11ef20-d14e-454a-bb61-186ef0978c9d" 
                      alt="Deploy your website" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
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
              
              <div className="text-center mt-8">
                <p className="text-gray-700 font-medium">Please watch this YouTube video tutorial for better grasping:</p>
                <a 
                  href="https://youtu.be/4zdBk6wisxc?si=nAC7Xr0F_hU8XfU6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 font-medium inline-flex items-center mt-2"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                  Watch Video Tutorial
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Need Help?</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <p className="mb-4">
                If you encounter any issues while editing your templates, contact us for assistance at david.oludepo@gmail.com
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:david.oludepo@gmail.com" 
                  className="btn-primary text-center"
                >
                  Contact Support
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
