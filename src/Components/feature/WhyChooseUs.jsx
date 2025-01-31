import React, { useState } from 'react';
import { 
  Trophy,
  Users,
  Clock,
  ThumbsUp,
  Star,
  Shield,
  CheckCircle
} from 'lucide-react';

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "10K+", label: "Cars Repaired" },
    { number: "50+", label: "Expert Mechanics" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  const features = [
    {
      icon: <Trophy />,
      title: "Certified Mechanics",
      description: "Our team consists of certified professionals with years of hands-on experience"
    },
    {
      icon: <Shield />,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive service guarantees"
    },
    {
      icon: <Clock />,
      title: "Fast Service",
      description: "Quick turnaround without compromising on quality of service"
    }
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "Regular Customer",
      comment: "Best auto service I've ever experienced. Professional, timely, and transparent.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "First-time Customer",
      comment: "Exceptional service and very knowledgeable staff. Will definitely return.",
      rating: 5
    },
    {
      name: "Mike Brown",
      role: "Business Owner",
      comment: "They maintain our entire fleet. Reliable, professional, and fairly priced.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      {/* Main Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          With over 15 years of experience, we provide top-notch auto repair services
          with a commitment to quality and customer satisfaction
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-blue-600 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.comment}</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-gray-500 text-sm">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto text-center mt-16">
        <div className="bg-blue-600 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience Our Service?</h3>
          <p className="mb-6">Book an appointment today and see why customers choose us</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors inline-flex items-center">
            Book Appointment
            <CheckCircle className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;