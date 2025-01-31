import React from 'react';
import { 
  Settings, 
  Battery, 
  Car, 
  Gauge,
  Wrench,
  Shield,
  ArrowRight
} from 'lucide-react';

const ServicesShowcase = () => {
  const services = [
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Engine Repair",
      description: "Complete diagnostics and repair services for all engine types",
      features: ["Engine Diagnostics", "Repair & Replacement", "Performance Tuning"]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Oil Service",
      description: "Regular maintenance and oil changes to keep your engine running smoothly",
      features: ["Oil Change", "Filter Replacement", "Fluid Check"]
    },
    {
      icon: <Battery className="w-12 h-12" />,
      title: "Electrical Systems",
      description: "Comprehensive electrical system diagnosis and repair",
      features: ["Battery Service", "Alternator Repair", "Electrical Diagnostics"]
    },
    {
      icon: <Gauge className="w-12 h-12" />,
      title: "Diagnostics",
      description: "Advanced computer diagnostics for all vehicle makes",
      features: ["Computer Scanning", "Error Code Reading", "Performance Testing"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "General Repair",
      description: "Complete vehicle repair and maintenance services",
      features: ["Brake Service", "Suspension", "Transmission"]
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Body Work",
      description: "Professional auto body repair and painting services",
      features: ["Dent Repair", "Paint Service", "Collision Repair"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Professional Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive auto repair services with certified mechanics and state-of-the-art equipment
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
          >
            {/* Icon */}
            <div className="text-blue-600 mb-4">
              {service.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {service.description}
            </p>

            {/* Features List */}
            <ul className="space-y-2 mb-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <button className="mt-2 text-blue-600 font-semibold flex items-center group-hover:text-blue-700">
              Learn More 
              <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center">
          View All Services
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </section>
  );
};

export default ServicesShowcase;