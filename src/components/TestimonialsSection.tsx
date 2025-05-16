
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Startup Founder",
    content: "I saved thousands on web design by using Davedigitals templates. The quality is excellent and customization is straightforward. Launched my business website in just two days!",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Marketing Director",
    content: "These templates are a game-changer for our agency. We can now deliver high-quality websites to clients faster than ever, while maintaining design excellence and performance.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 3,
    name: "Aisha Patel",
    title: "Freelance Developer",
    content: "As a freelancer, Davedigitals templates have revolutionized my workflow. I can now take on more clients with confidence, knowing I have professional designs ready to customize.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
