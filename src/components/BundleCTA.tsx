
import React from 'react';
import { Link } from 'react-router-dom';

const BundleCTA = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Get All 52 Templates and Save 94%</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Purchase the complete bundle for just $129 instead of $2,028 if bought separately.
        </p>
        <Link to="/bundle" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
          Get The Bundle
        </Link>
      </div>
    </section>
  );
};

export default BundleCTA;
