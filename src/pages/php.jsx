import React, { memo } from "react";
import {
  ArrowRight,
  Code2,
  Users,
  Zap,
  Target,
  Globe,
  Cpu,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// --- Image placeholders (replace with your own) ---
import chartPlaceholder from "../assets/photo_bp.webp";
import logo1 from "../assets/photo_wd.webp";
import logo2 from "../assets/photo_wd.webp";
import logo3 from "../assets/photo_wd.webp";
import logo4 from "../assets/photo_wd.webp";
import logo5 from "../assets/photo_wd.webp";

// --- HERO ICON (PHP) ---
const heroIcon = (
  <FontAwesomeIcon
    icon={["fab", "php"]}
    size="10x"
    className="text-[#ffffff]"
  />
);

// --- FEATURES DATA ---
const features = [
  {
    icon: <Code2 className="w-6 h-6 text-[#E2001A]" />,
    title: "Open-Source & Flexible",
    description:
      "PHP is free, open-source, and compatible with all major platforms — perfect for cost-efficient web solutions.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#E2001A]" />,
    title: "Fast Execution",
    description:
      "PHP runs efficiently on almost any server, ensuring fast load times and optimal performance for your websites.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#E2001A]" />,
    title: "Massive Community",
    description:
      "A long-standing developer community ensures PHP continues to evolve, offering strong support and reliable frameworks.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#E2001A]" />,
    title: "Wide Hosting Compatibility",
    description:
      "PHP runs seamlessly on nearly all web hosting environments, making deployment smooth and affordable.",
  },
  {
    icon: <Target className="w-6 h-6 text-[#E2001A]" />,
    title: "Secure & Stable",
    description:
      "With mature security libraries and regular updates, PHP provides a stable and secure backend environment.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#E2001A]" />,
    title: "Scalable Architecture",
    description:
      "From small dynamic websites to enterprise portals — PHP easily scales with your project needs.",
  },
];

// --- PILLARS DATA ---
const pillars = [
  {
    title: "Secure Development Practices",
    items: [
      "Input sanitization and validation for user data.",
      "Protection from SQL injection and XSS attacks.",
      "Secure session management and encryption.",
    ],
  },
  {
    title: "Optimized Performance",
    items: [
      "Efficient caching and database query optimization.",
      "Reusable components for modular app development.",
      "Integration with APIs and cloud-based services.",
    ],
  },
  {
    title: "Enterprise-Ready Solutions",
    items: [
      "Custom CMS and eCommerce development.",
      "Integration with MySQL, PostgreSQL, and APIs.",
      "Support for frameworks like Laravel and CodeIgniter.",
    ],
  },
];

const PHPDevelopment = memo(() => {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Helmet>
        <title>PHP Web Development Company | Stravo</title>
        <meta
          name="description"
          content="From dynamic websites to enterprise-grade applications — Stravo delivers secure and efficient PHP development using the latest frameworks."
        />
        <meta
          name="keywords"
          content="PHP development, PHP web apps, backend development, Laravel, CodeIgniter, Stravo"
        />
        <meta
          property="og:title"
          content="PHP Web Development Company | Stravo"
        />
        <meta
          property="og:description"
          content="Stravo builds secure, high-performance PHP applications for businesses of all sizes."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stravo.com/php" />
        <meta property="og:image" content="https://stravo.com/og/php.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PHP Web Development Company | Stravo"
        />
        <meta
          name="twitter:description"
          content="Secure and efficient PHP development solutions by Stravo."
        />
        <meta name="twitter:image" content="https://stravo.com/og/php.webp" />
      </Helmet>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-4">
              PHP Development Services
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Build dynamic, secure, and scalable web applications using PHP —
              the foundation of modern web development.
            </p>
            <Button variant="primary" size="top">
              Let’s Talk <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="bg-white/10 rounded-full w-[300px] h-[300px] flex items-center justify-center">
              {heroIcon}
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 items-center opacity-70">
          {[logo1, logo2, logo3, logo4, logo5].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`client-logo-${i}`}
              className="h-10 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>

      {/* WHY WE USE PHP */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why we use PHP at <span className="text-[#E2001A]">Stravo</span>
            </h2>
            <p className="text-gray-600 mb-6">
              PHP powers over 75% of websites worldwide — from WordPress to
              Facebook. At Stravo, we leverage PHP’s flexibility and power to
              deliver high-performing web solutions tailored to your business
              goals.
            </p>
          </div>
          <div>
            <img
              src={chartPlaceholder}
              alt="PHP growth chart"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="px-6 py-20 bg-gray-50 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Build reliable and scalable solutions with PHP
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="mb-3">{feature.icon}</div>
                <h4 className="font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KNOW PHP */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Things you need to know about PHP
          </h2>
          <p className="text-gray-600 mb-10">
            PHP is a server-side scripting language that enables dynamic web
            pages, database interaction, and API integration — forming the
            backbone of many powerful websites.
          </p>

          <div className="space-y-4 border-t border-gray-200">
            {[
              "What is PHP",
              "PHP’s Key Benefits",
              "PHP Use Cases",
              "Popular Websites Built with PHP",
            ].map((item, idx) => (
              <details
                key={idx}
                className="border-b border-gray-200 py-4 group cursor-pointer"
                onToggle={(e) =>
                  e.currentTarget.setAttribute(
                    "aria-expanded",
                    e.currentTarget.open
                  )
                }
              >
                <summary className="flex justify-between items-center text-gray-800 font-medium">
                  {item}
                  <span className="group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-600 mt-2">
                  Placeholder — expand this content with examples and case
                  studies later.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="px-6 py-20 bg-[#111111] text-white sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm uppercase text-[#E2001A] mb-3 tracking-wider">
            Backend Development Framework
          </h3>
          <h2 className="text-3xl font-bold mb-10">
            The Three Pillars of PHP Excellence
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white/5 p-6 rounded-2xl backdrop-blur"
              >
                <h4 className="text-lg font-semibold mb-4 text-[#E2001A]">
                  {pillar.title}
                </h4>
                <ul className="space-y-3 text-sm text-gray-300 list-disc list-inside">
                  {pillar.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 text-center bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white">
        <h2 className="text-3xl font-bold mb-4">
          Let’s build your next-generation web app with PHP.
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          From small business websites to enterprise-grade platforms, Stravo
          delivers fast, secure, and scalable PHP solutions.
        </p>
        <Button variant="primary" size="top">
          Book Tech Call <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </section>

      <Footer />
    </div>
  );
});

export default PHPDevelopment;
