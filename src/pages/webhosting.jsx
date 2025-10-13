// pages/webhosting.jsx
import React, { useState, useCallback, memo } from "react";
import {
  Server,
  Shield,
  Zap,
  Plus,
  Minus,
  UserCheck,
  Database,
  Cloud as CloudIcon,
  RefreshCw,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GreenHero from "./GreenHero";
import WebHostingSection from "./NewSection";
import vpsImage from "../assets/Vps.png";

// ========== STATIC DATA MOVED OUTSIDE COMPONENT ==========

// Hosting team roles
const teamRoles = [
  {
    name: "Sys Admin",
    icon: <Server className="w-10 h-10" />,
    color: "from-[#4A000F] to-[#E2001A]",
  },
  {
    name: "Security",
    icon: <Shield className="w-10 h-10" />,
    color: "from-[#4A000F] to-[#E2001A]",
  },
  {
    name: "DevOps",
    icon: <CloudIcon className="w-10 h-10" />,
    color: "from-[#4A000F] to-[#E2001A]",
  },
  {
    name: "DBA",
    icon: <Database className="w-10 h-10" />,
    color: "from-[#4A000F] to-[#E2001A]",
  },
  {
    name: "Support",
    icon: <UserCheck className="w-10 h-10" />,
    color: "from-[#4A000F] to-[#E2001A]",
  },
];

// Hosting pillars
const pillars = [
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Performance & Reliability",
    description:
      "High-speed servers, 99.9% uptime guarantee, and optimized performance for your applications.",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Security First Approach",
    description:
      "Proactive security measures, regular updates, and comprehensive backup solutions.",
  },
  {
    icon: <RefreshCw className="w-10 h-10" />,
    title: "24/7 Expert Support",
    description:
      "Round-the-clock monitoring and immediate response from our hosting specialists.",
  },
];

// Hosting FAQs
const faqs = [
  {
    question: "Do you offer website migration services?",
    answer:
      "Yes, we provide free website migration for all our hosting plans. Our experts will handle the entire migration process with minimal downtime.",
  },
  {
    question: "What is your uptime guarantee?",
    answer:
      "We offer a 99.9% uptime guarantee. If we fall below this, we provide service credits as outlined in our SLA.",
  },
  {
    question: "How often do you perform backups?",
    answer:
      "We perform daily automated backups for all plans, with real-time backups available on our Enterprise plan. All backups are stored securely off-site.",
  },
  {
    question: "What security measures do you have in place?",
    answer:
      "Our security includes DDoS protection, malware scanning, firewall protection, regular security patches, and SSL certificates for all hosted sites.",
  },
];

// ========== MEMOIZED COMPONENTS ==========

// Memoized Team Role Component
const TeamRole = memo(({ role }) => (
  <div className="flex flex-col items-center">
    <div
      className={`w-24 h-24 mb-4 bg-gradient-to-br ${role.color} rounded-full flex items-center justify-center text-white shadow-lg`}
    >
      {role.icon}
    </div>
    <h3 className="text-lg font-bold text-gray-900">{role.name}</h3>
  </div>
));

// Memoized Pillar Component
const Pillar = memo(({ pillar }) => (
  <div className="p-10 text-center bg-white shadow-lg rounded-2xl">
    <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-full text-[#E2001A]">
      {pillar.icon}
    </div>
    <h3 className="mb-4 text-xl font-bold text-gray-900">{pillar.title}</h3>
    <p className="text-gray-600">{pillar.description}</p>
  </div>
));

// Memoized FAQ Item Component
const FAQItem = memo(({ faq, isOpen, onToggle, index }) => (
  <div className="overflow-hidden border border-gray-200 rounded-xl">
    <button
      aria-expanded={isOpen}
      aria-controls={`faq-${index}`}
      onClick={onToggle}
      className="flex items-center justify-between w-full p-6 text-left transition-colors hover:bg-gray-50"
    >
      <span className="text-lg font-semibold text-gray-900">
        {faq.question}
      </span>
      {isOpen ? (
        <Minus className="flex-shrink-0 w-5 h-5 text-gray-500" />
      ) : (
        <Plus className="flex-shrink-0 w-5 h-5 text-gray-500" />
      )}
    </button>
    {isOpen && <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>}
  </div>
));

const WebHosting = () => {
  const [openFaq, setOpenFaq] = useState(null);

  // Optimized FAQ toggle handler
  const toggleFaq = useCallback(
    (index) => {
      setOpenFaq(openFaq === index ? null : index);
    },
    [openFaq]
  );

  // Optimized button handler
  const handleGetStarted = useCallback(() => {
    console.log("Get Started clicked");
  }, []);

  return (
    <div className="min-h-screen bg-white font-outfit">
      <Navbar />
      {/* Hero Section - REMOVED MOTION */}
      <section className="relative px-4 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FFF5F5] to-white sm:px-6 lg:px-20 ">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-10 mx-auto max-w-7xl lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-2  text-sm font-semibold tracking-wider text-white uppercase bg-[#E2001A] rounded-full ">
                Premium Hosting Solutions
              </span>

              <h1 className="text-5xl font-medium leading-tight tracking-tight text-gray-900 lg:text-6xl xl:text-7xl">
                Reliable Web <br />
                <span className="text-[#E2001A]">
                  Hosting & Maintenance Services.
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 lg:text-xl">
                  Keep your website fast, secure, and always online with our
                  comprehensive hosting solutions and proactive maintenance
                  services.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div>
              <picture className="w-full mx-auto md:min-w-lg sm:min-w-md min-w-xs">
                {/* ADDED: loading="lazy" and dimensions for CLS optimization */}
                <img
                  src={vpsImage}
                  alt="VPS Hosting Illustration"
                  className="object-contain w-full h-auto"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#E2001A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-gradient-to-tr from-gray-200/20 to-transparent blur-3xl" />
      </section>

      <GreenHero />

      {/* Team Structure Section - REMOVED MOTION */}
      <section className="px-4 py-20 bg-white sm:px-6 lg:px-20 ">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Expert hosting team at your service
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Our specialized team ensures your hosting infrastructure is
              secure, optimized, and always available.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-16 md:grid-cols-5">
            {teamRoles.map((role, idx) => (
              <TeamRole key={idx} role={role} />
            ))}
          </div>

          <div className="p-10 text-center bg-gray-50 rounded-2xl">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Proactive Monitoring & Support
            </h3>
            <p className="max-w-4xl mx-auto text-lg text-gray-600">
              Our team continuously monitors your infrastructure, performs
              regular maintenance, and is available 24/7 to resolve any issues
              before they impact your business.
            </p>
          </div>
        </div>
      </section>

      <WebHostingSection />

      {/* Three Pillars Section - REMOVED MOTION */}
      <section className="px-4 py-20 bg-gray-50 sm:px-6 lg:px-20 ">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
              Our Hosting Excellence Pillars
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, idx) => (
              <Pillar key={idx} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - REMOVED MOTION */}
      <section className="px-4 py-20 bg-gray-50 sm:px-6 lg:px-20 ">
        <div className="max-w-3xl mx-auto">
          <div className="p-10 bg-white shadow-xl rounded-2xl">
            <h2 className="mb-4 text-3xl font-bold text-center text-gray-900 lg:text-4xl">
              Need hosting for your website?
            </h2>
            <p className="mb-8 text-lg text-center text-gray-600">
              Let's discuss your hosting requirements and find the perfect
              solution for your business.
            </p>

            <form className="space-y-4">
              <input
                required
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:border-transparent"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:border-transparent"
              />
              <textarea
                placeholder="Tell us about your hosting needs..."
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:border-transparent"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#E2001A] hover:bg-[#A0001E] text-white text-lg font-semibold rounded-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                Get Hosting Quote →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section - REMOVED MOTION & ANIMATEPRESENCE */}
      <section className="px-4 py-20 bg-white sm:px-6 lg:px-20 ">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                faq={faq}
                isOpen={openFaq === idx}
                onToggle={() => toggleFaq(idx)}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebHosting;
