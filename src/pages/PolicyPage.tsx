
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy & Terms - Davedigitals</title>
        <meta name="description" content="Privacy policy, terms of service, and refund policy for Davedigitals website templates." />
      </Helmet>
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy & Terms</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy and satisfaction are our priorities. Please review our policies below.
          </p>
        </div>
      </div>
      
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Refund Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-600">30-Day Money-Back Guarantee</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                We stand behind the quality of our templates with a <strong>30-day no-questions-asked refund policy</strong>.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Full refund within 30 days of purchase</li>
                <li>• No questions asked - we trust our customers</li>
                <li>• Refunds processed within 5-7 business days</li>
                <li>• Contact us at david.oludepo@gmail.com for refunds</li>
              </ul>
            </div>
          </section>

          {/* Terms of Service */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Terms of Service</h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold mb-3">License & Usage</h3>
              <p className="text-gray-700 mb-4">
                When you purchase our templates, you receive:
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Unlimited personal and commercial use rights</li>
                <li>• Ability to modify templates for your needs</li>
                <li>• Use templates for client projects</li>
                <li>• No attribution required (though appreciated)</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Restrictions</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Cannot resell or redistribute templates as-is</li>
                <li>• Cannot claim templates as your original work</li>
                <li>• Cannot share template files with others</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Digital Delivery</h3>
              <p className="text-gray-700 mb-4">
                All templates are delivered digitally as ZIP files immediately after purchase. 
                Download links are provided on the thank-you page and via email.
              </p>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Privacy Policy</h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold mb-3">Information We Collect</h3>
              <p className="text-gray-700 mb-4">
                We collect minimal information necessary to process your orders:
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Email address for order confirmation and delivery</li>
                <li>• Payment information (processed securely by Stripe)</li>
                <li>• Website analytics (via Google Analytics)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">How We Use Your Information</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Process and fulfill your orders</li>
                <li>• Send order confirmations and download links</li>
                <li>• Improve our website and services</li>
                <li>• Occasional updates about new templates (opt-out anytime)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Data Security</h3>
              <p className="text-gray-700 mb-4">
                Your payment information is processed securely by Stripe and never stored on our servers. 
                We use industry-standard security measures to protect your personal information.
              </p>

              <h3 className="text-xl font-semibold mb-3">Third-Party Services</h3>
              <p className="text-gray-700 mb-4">
                We use trusted third-party services:
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Stripe for payment processing</li>
                <li>• Google Analytics for website analytics</li>
                <li>• Google Tag Manager for tracking</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our policies, please don't hesitate to contact us:
            </p>
            <div className="text-gray-700">
              <p><strong>Email:</strong> david.oludepo@gmail.com</p>
              <p><strong>Response time:</strong> Within 24 hours</p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default PolicyPage;
