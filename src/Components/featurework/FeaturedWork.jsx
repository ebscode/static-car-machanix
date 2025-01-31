import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Camera,
  Star,
  ArrowRight
} from 'lucide-react';

const FeaturedWork = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'repair', label: 'Repairs' },
    { id: 'restoration', label: 'Restorations' },
    { id: 'maintenance', label: 'Maintenance' }
  ];

  const projects = [
    {
      id: 1,
      title: "Classic Car Restoration",
      category: "restoration",
      description: "Complete restoration of 1969 Mustang including engine rebuild",
      rating: 5,
      review: "Incredible attention to detail. They brought my classic back to life!",
      reviewer: "James Wilson",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      stats: {
        duration: "3 months",
        completion: "2024",
        type: "Full Restoration"
      }
    },
    {
      id: 2,
      title: "Engine Overhaul",
      category: "repair",
      description: "Complete engine reconstruction and performance upgrade",
      rating: 5,
      review: "Professional service and amazing results. Engine runs like new!",
      reviewer: "Emily Rodriguez",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      stats: {
        duration: "2 weeks",
        completion: "2024",
        type: "Major Repair"
      }
    },
    {
      id: 3,
      title: "Preventive Maintenance",
      category: "maintenance",
      description: "Comprehensive service package for luxury vehicle",
      rating: 5,
      review: "Regular maintenance keeps my car in perfect condition",
      reviewer: "Michael Chang",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      stats: {
        duration: "1 day",
        completion: "2024",
        type: "Maintenance"
      }
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Featured Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse through our portfolio of successful projects and transformations
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto flex justify-center mb-12">
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            {/* Before/After Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-1">
                <div className="relative">
                  <img 
                    src={project.beforeImage} 
                    alt={`${project.title} before`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={project.afterImage} 
                    alt={`${project.title} after`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded">
                    After
                  </div>
                </div>
              </div>
              <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md">
                <Camera className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                <div>
                  <div className="text-gray-500">Duration</div>
                  <div className="font-semibold">{project.stats.duration}</div>
                </div>
                <div>
                  <div className="text-gray-500">Completed</div>
                  <div className="font-semibold">{project.stats.completion}</div>
                </div>
                <div>
                  <div className="text-gray-500">Type</div>
                  <div className="font-semibold">{project.stats.type}</div>
                </div>
              </div>

              {/* Review */}
              <div className="border-t pt-4">
                <div className="flex mb-2">
                  {[...Array(project.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic mb-2">"{project.review}"</p>
                <p className="text-sm font-semibold">- {project.reviewer}</p>
              </div>

              {/* Action Button */}
              <button className="mt-4 text-blue-600 font-semibold flex items-center hover:text-blue-700">
                View Details 
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto text-center mt-12">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center">
          View All Projects
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedWork;