"use client";

import { useState } from "react";

interface ContactFormProps {
  title?: string;
  description?: string;
  showServiceType?: boolean;
  buttonText?: string;
}

export default function ContactForm({ 
  title = "Get in Touch", 
  description = "Have a question or need assistance? We're here to help.",
  showServiceType = false,
  buttonText = "Send Message"
}: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-stone-800 mb-2">Message Sent!</h3>
        <p className="text-stone-600">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-stone-200 p-6 md:p-8">
      <h3 className="text-xl font-semibold text-stone-800 mb-2">{title}</h3>
      <p className="text-stone-600 mb-6">{description}</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              placeholder="John Smith"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              placeholder="(239) 555-0123"
            />
          </div>
          
          {showServiceType && (
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-stone-700 mb-1.5">
                Service Type *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                value={formState.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white"
              >
                <option value="">Select a service</option>
                <option value="landscaping">Landscaping & Lawn Care</option>
                <option value="pool">Pool Services</option>
                <option value="hvac">HVAC & Air Conditioning</option>
                <option value="pest">Pest Control</option>
                <option value="cleaning">Home Cleaning</option>
                <option value="handyman">Handyman Services</option>
                <option value="security">Home Security</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1.5">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formState.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
            placeholder="Tell us about your project or question..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg hover:bg-emerald-800 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </>
          ) : (
            buttonText
          )}
        </button>

        <p className="text-xs text-stone-500 text-center">
          By submitting this form, you agree to our{" "}
          <a href="/privacy-policy" className="text-emerald-700 hover:underline">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
}
