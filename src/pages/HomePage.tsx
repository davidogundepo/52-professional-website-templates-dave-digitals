
import React from 'react';
import Hero from '../components/Hero';
import TemplateGallery from '../components/TemplateGallery';
import TemplateFeaturesSection from '../components/TemplateFeaturesSection';
import BundleCTA from '../components/BundleCTA';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Davedigitals - Professional Website Templates</title>
        <meta name="description" content="Get 52 professionally designed website templates, ready to launch. Edit in VS Code, deploy in minutes. Buy once, use forever." />
        <meta name="keywords" content="website templates, professional templates, web design, responsive templates" />
      </Helmet>

      <Hero />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Templates</h2>
          <TemplateGallery />
        </div>
      </section>
      
      <TemplateFeaturesSection />
      
      <BundleCTA />
      
      <TestimonialsSection />
      
      <FAQSection />
    </>
  );
};

export default HomePage;
