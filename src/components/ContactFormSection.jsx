import { useState } from 'react';
import { theme } from "../../constants/theme";

export default function LawyerContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full py-12 -mt-100 relative z-20">
      {/* Heading - Outside and above the form */}
      <b>
      <h1 
        className="text-3xl md:text-4xl lg:text-5xl text-white text-center mb-8 md:mb-12 lg:mb-16 px-4"
        style={{ fontFamily: theme.fonts.heading }}
      >
        Need an Advice from <span style={{ color: theme.colors.secondary }}>Expert <br/>Lawyers?</span>
      </h1>
</b>
      {/* Form Container with black background */}
      <div className="w-full sm:w-[95%] md:w-[95%] lg:w-[1000px] xl:w-[1100px] h-auto flex items-center mx-auto justify-center px-4 sm:px-6 md:px-8 py-8 md:py-10 lg:py-12" style={{ backgroundColor: theme.colors.primary }}>
        <div className="w-full max-w-5xl">
          {/* Form Container - Side by Side */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-start">
            {/* Left Side - Form Fields */}
            <div className="flex-1 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-md bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-zinc-600"
                style={{ 
                  fontFamily: theme.fonts.body,
                  '::placeholder': { color: '#1A1A1A' }
                }}
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-md bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-zinc-600"
                style={{ fontFamily: theme.fonts.body }}
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-md bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-zinc-600"
                style={{ fontFamily: theme.fonts.body }}
              />
              
              <select
                name="caseType"
                value={formData.caseType}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-400 focus:outline-none focus:border-zinc-600"
                style={{ fontFamily: theme.fonts.body }}
              >
                <option value="">Please select a Case Type</option>
                <option value="criminal">Criminal Law</option>
                <option value="civil">Civil Law</option>
                <option value="family">Family Law</option>
                <option value="corporate">Corporate Law</option>
                <option value="property">Property Law</option>
                    <option value="company">Company Law</option>
                <option value="banking">Banking Law</option>
              </select>
              
              <textarea
                name="description"
                placeholder="Briefly Describe your case"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full px-5 py-4 rounded-md bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-zinc-600 resize-none"
                style={{ fontFamily: theme.fonts.body }}
              ></textarea>
            </div>
            
            {/* Right Side - CTA */}
            <div className="flex-1 text-white align-center">
              <h2 
                className="text-5xl font-bold mb-6"
                style={{ fontFamily: theme.fonts.heading }}
              >
                Get a Free Consultation
              </h2>
              <p 
                className="text-gray-400 mb-8 leading-relaxed"
                style={{ fontFamily: theme.fonts.body }}
              >
                Take the first step toward protecting your rights. Schedule a free consultation with our expert legal team and receive clear, confidential guidance tailored to your case.
              </p>
              <button
                onClick={handleSubmit}
                className="px-8 py-4 rounded-md text-white font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity cursor-pointer"
                style={{ 
                  backgroundColor: theme.colors.secondary,
                  fontFamily: theme.fonts.body
                }}
              >
                Submit Evaluation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}