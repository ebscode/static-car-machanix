import React, { useState } from 'react';
import { 
  Calendar,
  Clock,
  Car,
  Wrench,
  MessageSquare,
  ChevronDown,
  CheckCircle
} from 'lucide-react';

const BookingSection = () => {
  const [formStep, setFormStep] = useState(1);

  const availableServices = [
    "General Maintenance",
    "Oil Change",
    "Brake Service",
    "Engine Repair",
    "Transmission",
    "Electrical Systems",
    "Body Work",
    "Tire Service"
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM"
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Book Your Service</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Schedule your appointment in just a few clicks. Our team will confirm your booking within 2 hours.
        </p>
      </div>

      {/* Booking Container */}
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="flex justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
          <div className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 transition-all duration-300"
            style={{ width: `${((formStep - 1) / 2) * 100}%` }}
          />
          {[1, 2, 3].map((step) => (
            <div key={step} className="relative z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step <= formStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {step < formStep ? <CheckCircle className="w-6 h-6" /> : step}
              </div>
              <div className="text-sm mt-2 text-gray-600">
                {step === 1 ? 'Service Details' : step === 2 ? 'Date & Time' : 'Contact Info'}
              </div>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-md p-8">
          {formStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Vehicle Information</label>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Make"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Model"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Year"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Select Service</label>
                <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Choose a service...</option>
                  {availableServices.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  rows={4}
                  placeholder="Describe any specific issues or requests..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {formStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Available Time Slots</label>
                <div className="grid grid-cols-3 gap-4">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      className="px-4 py-2 border rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {formStep === 3 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="notifications" className="mr-2" />
                <label htmlFor="notifications" className="text-gray-600">
                  Send me appointment reminders via SMS
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {formStep > 1 && (
              <button
                onClick={() => setFormStep(formStep - 1)}
                className="px-6 py-2 text-gray-600 hover:text-gray-800"
              >
                Back
              </button>
            )}
            <button
              onClick={() => formStep < 3 ? setFormStep(formStep + 1) : null}
              className="ml-auto bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              {formStep === 3 ? 'Confirm Booking' : 'Continue'}
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Quick Service</h3>
              <p className="text-sm text-gray-600">Most services completed same-day</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Flexible Scheduling</h3>
              <p className="text-sm text-gray-600">Book up to 2 weeks in advance</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <MessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Instant Confirmation</h3>
              <p className="text-sm text-gray-600">Receive booking details via email</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;