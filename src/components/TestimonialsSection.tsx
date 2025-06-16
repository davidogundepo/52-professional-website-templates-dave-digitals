
import React from 'react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    id: 1,
    name: "Marcus Thompson",
    title: "E-commerce Store Owner",
    location: "Austin, Texas, USA",
    content: "Launched my fitness equipment store in 48 hours using Davedigitals' e-commerce template. Sales hit $15K in the first month! The payment integration and responsive design saved me weeks of development time.",
    initials: "MT",
    verified: true
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    title: "Digital Marketing Consultant",
    location: "Barcelona, Spain",
    content: "I've built 12 client websites this year using these templates. Each project that used to take 3 weeks now takes 3 days. My clients love the professional look and my profit margins have tripled.",
    initials: "ER",
    verified: true
  },
  {
    id: 3,
    name: "David Kim",
    title: "Tech Startup Founder",
    location: "Seoul, South Korea",
    content: "Our AI consulting firm needed a website that screamed 'innovation.' The tech template was perfect - clean, modern, and loaded fast. We closed our first $50K deal within a week of launching.",
    initials: "DK",
    verified: true
  },
  {
    id: 4,
    name: "Priya Sharma",
    title: "Restaurant Chain Owner",
    location: "Mumbai, India",
    content: "Opened 3 new locations during COVID using the hospitality template for online ordering. The mobile-first design increased our delivery orders by 300%. Best investment I made for my business.",
    initials: "PS",
    verified: true
  },
  {
    id: 5,
    name: "James Mitchell",
    title: "Real Estate Broker",
    location: "London, UK",
    content: "The real estate template helped me showcase properties beautifully. Lead generation increased by 250% and I'm closing deals faster. My competitors are asking how I got such a professional website so quickly.",
    initials: "JM",
    verified: true
  },
  {
    id: 6,
    name: "Sarah Chen",
    title: "Creative Agency Director",
    location: "Toronto, Canada",
    content: "We've used 8 different templates for client projects this year. The code quality is exceptional and customization is straightforward. Our development time decreased by 60% while maintaining premium quality.",
    initials: "SC",
    verified: true
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              ✅ 750+ Happy Customers
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              ⭐ 4.9/5 Average Rating
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-all duration-300 relative">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <span className="text-blue-500 text-sm">
                        <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">Verified Purchase</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
