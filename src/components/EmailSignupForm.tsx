"use client";

import { useState } from "react";

interface EmailSignupFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  showName?: boolean;
  compact?: boolean;
}

export default function EmailSignupForm({ 
  title = "Get the Free Checklist", 
  description = "Enter your email to receive our comprehensive New Homeowner Checklist.",
  buttonText = "Get Free Access",
  showName = false,
  compact = false
}: EmailSignupFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
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
          _subject: "New Checklist Download Request",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className={compact ? "" : "bg-emerald-50 rounded-xl p-8 text-center"}>
        <div className={`${compact ? "w-12 h-12" : "w-16 h-16"} bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3`}>
          <svg className={`${compact ? "w-6 h-6" : "w-8 h-8"} text-emerald-700`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`font-semibold text-stone-800 mb-1 ${compact ? "text-lg" : "text-xl"}`}>You're on the list!</h3>
        <p className={`text-stone-600 ${compact ? "text-sm" : ""}`}>
          Check your inbox for the checklist.
        </p>
      </div>
    );
  }

  return (
    <div className={compact ? "" : "bg-white rounded-xl border border-stone-200 p-6 md:p-8"}>
      {!compact && <h3 className="text-xl font-semibold text-stone-800 mb-2">{title}</h3>}
      {!compact && <p className="text-stone-600 mb-6">{description}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {showName && (
          <div>
            <label htmlFor="signup-name" className="block text-sm font-medium text-stone-700 mb-1.5">
              First Name
            </label>
            <input
              type="text"
              id="signup-name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              placeholder="John"
            />
          </div>
        )}
        
        <div>
          <label htmlFor="signup-email" className="block text-sm font-medium text-stone-700 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            id="signup-email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            placeholder="john@example.com"
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
              Processing...
            </>
          ) : (
            buttonText
          )}
        </button>

        <p className="text-xs text-stone-500 text-center">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
