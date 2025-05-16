
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Get 52 Professionally Designed Website Templates — Ready to Launch.
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-slide-up">
            Edit in VS Code, deploy in minutes. Buy once, use forever.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
            <Link
              to="/bundle"
              className="btn-primary text-base py-3 px-8"
            >
              Get All Templates – $129
            </Link>
            <Link
              to="/templates"
              className="btn-secondary text-base py-3 px-8"
            >
              Browse Templates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
