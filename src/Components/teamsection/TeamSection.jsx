import React from 'react';
import { 
  Linkedin, 
  Mail, 
  Phone,
  Award,
  Star,
  Users,
  ArrowRight
} from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Robert Wilson",
      role: "Master Mechanic",
      specialty: "Engine Specialist",
      experience: "15+ years",
      certifications: ["ASE Master Technician", "BMW Certified"],
      image: "/api/placeholder/300/300",
      description: "Specializes in high-performance engine tuning and rebuilds"
    },
    {
      name: "Sarah Martinez",
      role: "Diagnostic Expert",
      specialty: "Electrical Systems",
      experience: "12+ years",
      certifications: ["ASE Certified", "Electrical Systems Specialist"],
      image: "/api/placeholder/300/300",
      description: "Expert in modern vehicle diagnostics and electrical repairs"
    },
    {
      name: "Michael Chen",
      role: "Service Manager",
      specialty: "Customer Relations",
      experience: "10+ years",
      certifications: ["Service Management", "Customer Experience"],
      image: "/api/placeholder/300/300",
      description: "Ensures top-quality service and customer satisfaction"
    },
    {
      name: "David Thompson",
      role: "Body Work Specialist",
      specialty: "Paint & Restoration",
      experience: "8+ years",
      certifications: ["Paint Specialist", "Body Work Expert"],
      image: "/api/placeholder/300/300",
      description: "Master of automotive painting and body restoration"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Expert Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our certified professionals bring years of experience and expertise to every job
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="group">
            {/* Profile Card */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              {/* Image */}
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-200">{member.role}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                {/* Specialty */}
                <div className="mb-4">
                  <div className="text-gray-500 text-sm">Specialty</div>
                  <div className="font-semibold">{member.specialty}</div>
                </div>

                {/* Experience */}
                <div className="mb-4">
                  <div className="text-gray-500 text-sm">Experience</div>
                  <div className="font-semibold">{member.experience}</div>
                </div>

                {/* Certifications */}
                <div className="mb-4">
                  <div className="text-gray-500 text-sm mb-2">Certifications</div>
                  <div className="flex flex-wrap gap-2">
                    {member.certifications.map((cert, idx) => (
                      <span 
                        key={idx}
                        className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{member.description}</p>

                {/* Contact Buttons */}
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto mt-16 bg-blue-600 rounded-lg p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <Award className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">45+</div>
            <div>Certifications</div>
          </div>
          <div>
            <Users className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">20+</div>
            <div>Team Members</div>
          </div>
          <div>
            <Star className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">15+</div>
            <div>Years Experience</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center">
          Book an Appointment
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </section>
  );
};

export default TeamSection;