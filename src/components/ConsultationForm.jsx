import React, { useState } from 'react';
import { theme } from '../../constants/theme';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    immigration: '',
    legalType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative px-6 lg:px-12">
      {/* Mobile: Center + Normal flow, Desktop: Right side + Negative margin */}
      <div className="max-w-[1920px] mx-auto mt-0 lg:-mt-[450px] xl:-mt-[500px]">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 lg:p-12 max-w-full md:max-w-lg lg:max-w-xl mx-auto lg:ml-auto lg:mr-0">
          {/* Form Heading - Premium Design */}
          <div className="mb-8 pb-6 border-b-2" style={{ borderColor: theme.colors.secondary }}>
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
              style={{ 
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary 
              }}
            >
              Get a Free <span style={{ color: theme.colors.secondary }}>Consultation</span>
            </h2>
            <p 
              className="text-sm mt-2 text-gray-600"
              style={{ fontFamily: theme.fonts.body }}
            >
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-all bg-gray-50 focus:bg-white"
                style={{ fontFamily: theme.fonts.body }}
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-all bg-gray-50 focus:bg-white"
                style={{ fontFamily: theme.fonts.body }}
              />
            </div>

            {/* Phone Input */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-all bg-gray-50 focus:bg-white"
                style={{ fontFamily: theme.fonts.body }}
              />
            </div>

            {/* Immigration Status Dropdown */}
            <div>
              <select
                name="immigration"
                value={formData.immigration}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-all text-gray-700 bg-gray-50 focus:bg-white"
                style={{ fontFamily: theme.fonts.body }}
              >
                <option value="">Immigration status</option>
                <option value="citizen">Citizen</option>
                <option value="permanent">Permanent Resident</option>
                <option value="visa">Visa Holder</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Legal Type Dropdown */}
            <div>
              <select
                name="legalType"
                value={formData.legalType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-all text-gray-700 bg-gray-50 focus:bg-white"
                style={{ fontFamily: theme.fonts.body }}
              >
                <option value="">Immigration case type</option>
                <option value="family">Family Immigration</option>
                <option value="business">Business Immigration</option>
                <option value="student">Student Visa</option>
                <option value="work">Work Permit</option>
                <option value="asylum">Asylum</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                name="message"
                placeholder="Briefly describe your case"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-all resize-none bg-gray-50 focus:bg-white"
                style={{ fontFamily: theme.fonts.body }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg font-bold text-white transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5 text-base tracking-wide"
              style={{
                backgroundColor: theme.colors.secondary,
                fontFamily: theme.fonts.body
              }}
            >
              SUBMIT FORM TODAY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;