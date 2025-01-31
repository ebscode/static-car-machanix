import  { useState } from 'react';
import { Menu, X, Wrench, ChevronDown, Phone, Clock, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    'Engine Repair',
    'Oil Change',
    'Brake Service',
    'Transmission',
    'Diagnostics',
    'Tire Services'
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <nav className="w-full bg-white shadow-md">
      {/* Top Info Bar */}
      <div className="hidden md:flex justify-between items-center bg-gray-800 text-white px-6 py-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <span>555-0123</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>Mon-Sat: 8AM-6PM</span>
          </div>
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          <span>123 Auto Street, Cartown</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Wrench className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">AutoPro Workshop</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                onClick={toggleServices}
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {/* Services Dropdown Menu */}
              <div className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ${servicesOpen ? 'block' : 'hidden'}`}>
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={`/services/${service.toLowerCase().replace(' ', '-')}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
            
            <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Book Service
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-blue-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-4">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button 
                onClick={toggleServices}
                className="flex items-center text-gray-600 hover:text-blue-600 w-full"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              <div className={`pl-4 mt-2 space-y-2 ${servicesOpen ? 'block' : 'hidden'}`}>
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={`/services/${service.toLowerCase().replace(' ', '-')}`}
                    className="block text-gray-600 hover:text-blue-600"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
            
            <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 w-full">
              Book Service
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;