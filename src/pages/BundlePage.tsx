import React from 'react';
import BuyButton from '../components/BuyButton';
import { templates } from '../data/templates';
import { Helmet } from 'react-helmet-async';

const BundlePage = () => {
  const totalValue = templates.length * 39;
  const bundlePrice = 899;
  const discount = ((totalValue - bundlePrice) / totalValue * 100).toFixed(0);

  return (
    <>
      <Helmet>
        <title>Full Template Bundle - Davedigitals | 52 Templates for $899</title>
        <meta name="description" content="Get all 52 professional website templates for just $899. Save 56% compared to individual purchases. 30-day money-back guarantee." />
        <meta name="keywords" content="website templates bundle, template pack, web design bundle, professional templates, website template collection" />
        <meta property="og:title" content="52 Website Templates Bundle - $899" />
        <meta property="og:description" content="Complete collection of 52 professional website templates. Save hundreds compared to individual purchases." />
      </Helmet>
      
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20 relative overflow-hidden">
        <div className="absolute top-4 right-4">
          <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
            🔥 LIMITED TIME OFFER
          </div>
        </div>
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
              ⚡ 750+ CUSTOMERS CAN'T BE WRONG
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Get All 52 Templates</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Save big by purchasing our complete bundle. All 52 professional website templates for just $899.
          </p>
          <div className="text-center">
            <span className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold text-lg">
              💰 30-day no-questions-asked refund
            </span>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">Complete Template Bundle</h2>
                    <p className="text-gray-600">All 52 premium website templates</p>
                    <div className="mt-2">
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                        🔥 Hot Deal - Save $1,129!
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="text-3xl font-bold text-green-600">${bundlePrice}</div>
                    <div className="text-gray-500 line-through">${totalValue}</div>
                    <div className="text-green-600 font-medium">Save {discount}%</div>
                  </div>
                </div>
                
                <div className="border-t border-b py-6 my-6">
                  <h3 className="font-semibold text-lg mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>All 52 professional website templates</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comprehensive documentation for each template</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Lifetime access</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Premium email support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Commercial usage license</span>
                    </li>
                  </ul>
                </div>
                
                <BuyButton 
                  templateName="Complete Template Bundle" 
                  price={bundlePrice}
                  templateSlug="full-template-bundle"
                  bundle={true}
                />
                
                <div className="text-sm text-gray-500 text-center mt-4">
                  Secure payment processing with Stripe. Instant delivery via email.
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Bundle Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Massive Savings</h3>
                  <p className="text-gray-600">
                    Save over $1,129 compared to buying each template individually. That's a {discount}% discount!
                  </p>
                </div>
                
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Lifetime Access</h3>
                  <p className="text-gray-600">
                    Get immediate access to all current templates in the bundle, with no recurring fees.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Commercial License</h3>
                  <p className="text-gray-600">
                    Use any template for personal or client projects without restrictions or attribution requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">How is the bundle delivered?</h3>
                  <p className="text-gray-600">
                    The bundle is delivered by downloading the zip to your device which you can later edit in VS Code. Please check the tutorial video through the How to Edit page for more details.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Can I use these templates for client projects?</h3>
                  <p className="text-gray-600">
                    Absolutely! Your purchase includes a commercial license that allows you to use any template for an unlimited number of projects, including client websites.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Can I request a refund if I'm not satisfied?</h3>
                  <p className="text-gray-600">
                    We offer a 30-day no-questions-asked money-back guarantee. If you're not satisfied with your purchase, contact us within 30 days for a full refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BundlePage;
