
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    id: 1,
    name: "Marcus Thompson",
    title: "E-commerce Store Owner",
    content: "Launched my fitness equipment store in 48 hours using Davedigitals' e-commerce template. Sales hit $15K in the first month! The payment integration and responsive design saved me weeks of development time.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    initials: "MT"
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    title: "Digital Marketing Consultant",
    content: "I've built 12 client websites this year using these templates. Each project that used to take 3 weeks now takes 3 days. My clients love the professional look and my profit margins have tripled.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    initials: "ER"
  },
  {
    id: 3,
    name: "David Kim",
    title: "Tech Startup Founder",
    content: "Our AI consulting firm needed a website that screamed 'innovation.' The tech template was perfect - clean, modern, and loaded fast. We closed our first $50K deal within a week of launching.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    initials: "DK"
  },
  {
    id: 4,
    name: "Priya Sharma",
    title: "Restaurant Chain Owner",
    content: "Opened 3 new locations during COVID using the hospitality template for online ordering. The mobile-first design increased our delivery orders by 300%. Best investment I made for my business.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    initials: "PS"
  },
  {
    id: 5,
    name: "James Mitchell",
    title: "Real Estate Broker",
    content: "The real estate template helped me showcase properties beautifully. Lead generation increased by 250% and I'm closing deals faster. My competitors are asking how I got such a professional website so quickly.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    initials: "JM"
  },
  {
    id: 6,
    name: "Sarah Chen",
    title: "Creative Agency Director",
    content: "We've used 8 different templates for client projects this year. The code quality is exceptional and customization is straightforward. Our development time decreased by 60% while maintaining premium quality.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    initials: "SC"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-blue-500 text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.content}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
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
