// components/ContactSection.jsx
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo";

const reviews = [
  {
    rating: 5,
    text: "Their attention to detail and technical expertise exceeded our expectations. Stravo truly delivers.",
    author: "CTO, FinTech Startup",
  },
  {
    rating: 4.8,
    text: "Reliable, fast, and transparent. They understood our product vision instantly.",
    author: "Co-Founder, SaaS Company",
  },
  {
    rating: 5,
    text: "The Stravo team feels like an extension of our own — innovative and trustworthy.",
    author: "Operations Director, E-commerce Brand",
  },
];

const ContactSection = () => {
  // --- Form states ---
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' | 'error'
  
const ACCESS_KEY = import.meta.env.VITE_WEB3FORM_ACCESS_KEY;


  // --- Handle input and checkbox changes ---
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      if (name === "services") {
        const services = prev.services || [];
        return {
          ...prev,
          services: checked
            ? [...services, value]
            : services.filter((s) => s !== value),
        };
      }
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  };

  // --- Handle form submit with Web3Forms ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setMessageType("");

    const data = { ...formData, access_key: ACCESS_KEY };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Thank you! Your message has been sent successfully.");
        setMessageType("success");
        setFormData({});
      } else {
        console.error("Web3Forms Error:", result.message);
        setMessage("There was an error sending your message. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setMessage("An unexpected error occurred. Please try again later.");
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Auto-hide success message after 5s ---
  useEffect(() => {
    if (messageType === "success") {
      const timer = setTimeout(() => setMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [messageType]);

  return (
    <section
      id="contact"
      className="bg-[#F8F9FA] text-[#1A1A1A] font-outfit py-20 px-6 lg:px-20"
    >
      {/* Header with logo and back link */}
      <header className="mb-6 w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-20 py-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <Logo className="w-auto h-12 transition-transform duration-200 group-hover:scale-105" />
          </Link>
          <Link to="/">
            <span className="text-sm md:text-base hover:text-[#A0001E] text-[#000000] font-medium tracking-wide transition-colors">
              <span className="hidden sm:inline-block mr-1">←</span>
              Back to Home
            </span>
          </Link>
        </div>
      </header>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 pt-12">
        {/* LEFT — FORM */}
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
            Tell us about your project  we’ll make it real.
          </h2>

          {/* Message feedback */}
          {message && (
            <div
              className={`p-4 rounded-lg mb-4 text-white ${
                messageType === "success" ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME FIELDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First name*
                </label>
                <input
                  type="text"
                  name="first_name"
                  required
                  onChange={handleChange}
                  value={formData.first_name || ""}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#A0001E] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last name*
                </label>
                <input
                  type="text"
                  name="last_name"
                  required
                  onChange={handleChange}
                  value={formData.last_name || ""}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#A0001E] outline-none"
                />
              </div>
            </div>

            {/* COMPANY FIELDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Company Email*
                </label>
                <input
                  type="email"
                  name="company_email"
                  required
                  onChange={handleChange}
                  value={formData.company_email || ""}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#A0001E] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Company Name*
                </label>
                <input
                  type="text"
                  name="company_name"
                  required
                  onChange={handleChange}
                  value={formData.company_name || ""}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#A0001E] outline-none"
                />
              </div>
            </div>

            {/* PHONE & BUDGET */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone || ""}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#A0001E] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Select your budget*
                </label>
                <select
                  name="budget"
                  required
                  onChange={handleChange}
                  value={formData.budget || ""}
                  className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#A0001E] outline-none"
                >
                  <option value="">Select budget</option>
                  <option value="below_2k">Below $2,000</option>
                  <option value="2k_10k">$2,000 - $10,000</option>
                  <option value="10k_25k">$10,000 - $25,000</option>
                  <option value="25k_plus">$25,000+</option>
                </select>
              </div>
            </div>

            {/* SERVICES CHECKBOXES */}
            <div>
              <label className="block text-sm font-medium mb-3">
                What kind of services do you need?*
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Scale my development team",
                  "Build a digital product from scratch",
                  "Modernize existing application",
                  "Integrate a new feature into existing application",
                  "Other",
                ].map((service, i) => (
                  <label key={i} className="flex items-center space-x-3 text-sm">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services?.includes(service) || false}
                      onChange={handleChange}
                      className="h-4 w-4 accent-[#A0001E]"
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Describe your needs (optional)
              </label>
              <textarea
                name="project_overview"
                onChange={handleChange}
                value={formData.project_overview || ""}
                placeholder="Project overview"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#A0001E] outline-none min-h-[120px]"
              />
            </div>

            {/* NDA */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="nda_consent"
                checked={formData.nda_consent || false}
                onChange={handleChange}
                className="h-4 w-4 mt-1 accent-[#A0001E]"
              />
              <label className="text-sm text-[#6B6B6B]">
                I acknowledge that the details shared are confidential and will
                remain protected under Stravo’s mutual privacy commitment.
              </label>
            </div>

            {/* PRIVACY */}
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              The controller of your data is Stravo. By submitting this form,
              you consent to the processing of your data for the purpose of
              responding to your inquiry. Learn more in our{" "}
              <a
                href="/privacy-policy"
                className="underline text-[#A0001E] hover:text-[#E2001A]"
              >
                Privacy Policy
              </a>
              .
            </p>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-[#A0001E] hover:bg-[#E2001A] cursor-pointer text-white font-medium px-10 py-4 rounded-lg shadow-lg transition-all hover:-translate-y-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        {/* RIGHT — REVIEWS */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4">What our clients say</h3>
          {reviews.map((review, i) => (
            <div
              key={i}
              className="border border-gray-200 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={`w-4 h-4 ${
                      starIndex < Math.round(review.rating)
                        ? "text-[#A0001E] fill-[#A0001E]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-[#6B6B6B]">
                  {review.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-sm text-[#1A1A1A] mb-3 italic leading-relaxed">
                “{review.text}”
              </p>
              <p className="text-xs text-[#6B6B6B] font-medium">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
