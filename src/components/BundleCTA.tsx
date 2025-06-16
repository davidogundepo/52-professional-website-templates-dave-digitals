
import React from 'react';
import { Link } from 'react-router-dom';

const BundleCTA = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2 animate-pulse">
            🔥 LIMITED TIME: Save $539!
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-4">Get All 52 Templates and Save 62%</h2>
        <p className="text-xl max-w-2xl mx-auto mb-6">
          Purchase the complete bundle for just $1,499 instead of $2,028 if bought separately.
        </p>
        <div className="mb-6">
          <span className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold text-lg">
            💰 30-day no-questions-asked refund
          </span>
        </div>
        <Link to="/bundle" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
          Get The Bundle - $1,499
        </Link>
      </div>
    </section>
  );
};

export default BundleCTA;
