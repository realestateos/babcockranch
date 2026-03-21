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
    
    try {
      const response = await fetch("https://formspree.io/f/xpqynerr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          _subject: "New Babcock Ranch Lead",
          page: window.location.pathname,
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
    
    setIsSubmitting(false);
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
    <div className="bg-white rounded-xl border-2 border-emerald-200 p-6 md:p-8 shadow-lg">
      {/* Trust Badges */}
      <div className="flex items-center gap-4 mb-4 text-sm text-stone-600">
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Free Quotes</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Vetted Pros</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Local Experts</span>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-stone-800 mb-2">{title}</h3>
      <p className="text-stone-600 mb-4">{description}</p>
      
      {/* Urgency Element */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
        <p className="text-amber-800 text-sm flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Get matched within 24 hours — spots limited for new Babcock Ranch residents</span>
        </p>
      </div>
      
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
                className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white text-stone-800"
              >
                <option value="" className="text-stone-800">Select a service</option>
                <option value="landscaping" className="text-stone-800">Landscaping & Lawn Care</option>
                <option value="pool" className="text-stone-800">Pool Services</option>
                <option value="hvac" className="text-stone-800">HVAC & Air Conditioning</option>
                <option value="pest" className="text-stone-800">Pest Control</option>
                <option value="cleaning" className="text-stone-800">Home Cleaning</option>
                <option value="handyman" className="text-stone-800">Handyman Services</option>
                <option value="security" className="text-stone-800">Home Security</option>
                <option value="plumbing" className="text-stone-800">Plumbing</option>
                <option value="electrical" className="text-stone-800">Electrical</option>
                <option value="flooring" className="text-stone-800">Flooring</option>
                <option value="painting" className="text-stone-800">Painting</option>
                <option value="window-treatments" className="text-stone-800">Window Treatments</option>
                <option value="real-estate" className="text-stone-800">Real Estate Agent</option>
                <option value="other" className="text-stone-800">Other</option>
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
