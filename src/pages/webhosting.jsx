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
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GreenHero from "./GreenHero";
import WebHostingSection from "./NewSection";
import vpsImage from "../assets/Vps.webp";

// ========== STATIC DATA ==========

// Team roles
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

// Pillars
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

// FAQs
const faqs = [
  {
    question: "Do you offer website migration services?",
    answer:
      "Yes, we provide free website migration for all our hosting plans. Our experts handle the process with minimal downtime.",
  },
  {
    question: "What is your uptime guarantee?",
    answer:
      "We offer a 99.9% uptime guarantee and provide service credits if uptime falls below this threshold.",
  },
  {
    question: "How often do you perform backups?",
    answer:
      "We perform daily automated backups for all plans, with real-time backups on Enterprise plans.",
  },
  {
    question: "What security measures do you have in place?",
    answer:
      "We include DDoS protection, malware scanning, firewalls, SSL certificates, and frequent security patches.",
  },
];

// ========== MEMOIZED COMPONENTS ==========

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

const Pillar = memo(({ pillar }) => (
  <div className="p-10 text-center bg-white shadow-lg rounded-2xl">
    <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-full text-[#E2001A]">
      {pillar.icon}
    </div>
    <h3 className="mb-4 text-xl font-bold text-gray-900">{pillar.title}</h3>
    <p className="text-gray-600">{pillar.description}</p>
  </div>
));

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
    {isOpen && (
      <div id={`faq-${index}`} className="px-6 pb-6 text-gray-600">
        {faq.answer}
      </div>
    )}
  </div>
));

// ========== MAIN COMPONENT ==========

const WebHosting = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = useCallback(
    (index) => setOpenFaq(openFaq === index ? null : index),
    [openFaq]
  );

  const handleGetStarted = useCallback(() => {
    console.log("Get Started clicked");
  }, []);

  return (
    <div className="min-h-screen bg-white font-outfit">
      <Helmet>
        <title>Web Hosting & Maintenance | Stravo</title>
        <meta
          name="description"
          content="Keep your website online, fast, and secure with Stravo’s professional web hosting and maintenance services. We monitor, optimize, and protect your digital presence."
        />
        <meta
          name="keywords"
          content="web hosting, website maintenance, VPS, managed hosting, Stravo hosting, website uptime"
        />
        <meta property="og:title" content="Web Hosting & Maintenance | Stravo" />
        <meta
          property="og:description"
          content="Stravo provides reliable, secure, and high-performance hosting solutions with 24/7 monitoring and expert support."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://stravoph.netlify.app/services/webhosting"
        />
        <meta
          property="og:image"
          content="https://stravoph.netlify.app/og/hosting-preview.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Stravo Web Hosting & Maintenance"
        />
        <meta
          name="twitter:description"
          content="Design, Code, and Deliver — Stravo keeps your website fast, secure, and online 24/7."
        />
        <meta
          name="twitter:image"
          content="https://stravoph.netlify.app/og/hosting-preview.webp"
        />
        <link
          rel="canonical"
          href="https://stravoph.netlify.app/services/webhosting"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Web Hosting & Maintenance",
              "provider": {
                "@type": "Organization",
                "name": "Stravo",
                "url": "https://stravoph.netlify.app"
              },
              "description": "Professional web hosting and maintenance services by Stravo. We design, code, and deliver reliable hosting solutions.",
              "areaServed": "Worldwide"
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FFF5F5] to-white sm:px-6 lg:px-20">
        <div className="grid items-start gap-10 mx-auto max-w-7xl lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider text-white uppercase bg-[#E2001A] rounded-full">
              Premium Hosting Solutions
            </span>

            <h1 className="text-5xl font-medium leading-tight tracking-tight text-gray-900 lg:text-6xl xl:text-7xl">
              Reliable Web{" "}
              <span className="text-[#E2001A]">Hosting & Maintenance</span>
            </h1>

            <p className="text-lg text-gray-600 lg:text-xl">
              Keep your website fast, secure, and always online with our
              comprehensive hosting and proactive maintenance solutions.
            </p>

          </div>

          <picture className="w-full mx-auto md:min-w-lg">
            <img
              src={vpsImage}
              alt="Stravo VPS Hosting Server Illustration"
              className="object-contain w-full h-auto"
              loading="lazy"
              width="600"
              height="400"
              decoding="async"
            />
          </picture>
        </div>
      </section>

      <GreenHero />

      {/* Team Structure */}
      <section className="px-4 py-20 bg-white sm:px-6 lg:px-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Expert Hosting Team at Your Service
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-16">
            Our specialized team ensures your hosting infrastructure is secure,
            optimized, and always available.
          </p>

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
              regular maintenance, and is available 24/7 to resolve issues before
              they impact your business.
            </p>
          </div>
        </div>
      </section>

      <WebHostingSection />

      {/* Pillars */}
      <section className="px-4 py-20 bg-gray-50 sm:px-6 lg:px-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-16 text-4xl font-bold text-gray-900 lg:text-5xl">
            Our Hosting Excellence Pillars
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, idx) => (
              <Pillar key={idx} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 bg-white sm:px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-900 lg:text-5xl">
            Frequently Asked Questions
          </h2>
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
