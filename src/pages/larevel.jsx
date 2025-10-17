import React, { memo } from "react";
import {
  ArrowRight,
  Code2,
  Users,
  Home,
  ChevronRight,
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
import { Link } from "react-router-dom";

// --- Image placeholders (replace with your own) ---
import chartPlaceholder from "../assets/photo_bp.webp";
import logo1 from "../assets/photo_wd.webp";
import logo2 from "../assets/photo_wd.webp";
import logo3 from "../assets/photo_wd.webp";
import logo4 from "../assets/photo_wd.webp";
import logo5 from "../assets/photo_wd.webp";

// --- HERO ICON (Laravel) ---
const heroIcon = (
  <FontAwesomeIcon
    icon={["fab", "laravel"]}
    size="10x"
    className="text-[#ffffff]"
  />
);

// --- FEATURES DATA ---
const features = [
  {
    icon: <Code2 className="w-6 h-6 text-[#E2001A]" />,
    title: "Elegant Syntax",
    description:
      "Laravel’s clean and expressive syntax accelerates development while keeping your code organized and readable.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#E2001A]" />,
    title: "Rapid Development",
    description:
      "With built-in tools like Artisan CLI and Eloquent ORM, Laravel allows for fast, reliable, and secure web app creation.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#E2001A]" />,
    title: "Strong Community Support",
    description:
      "A massive global community ensures constant updates, plugins, and learning resources for Laravel developers.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#E2001A]" />,
    title: "Powerful Routing & Middleware",
    description:
      "Effortlessly control your app’s flow and secure endpoints with Laravel’s robust routing and middleware system.",
  },
  {
    icon: <Target className="w-6 h-6 text-[#E2001A]" />,
    title: "Integrated Security",
    description:
      "Laravel includes CSRF protection, encryption, and secure authentication out-of-the-box to safeguard your data.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#E2001A]" />,
    title: "Scalable & Reliable",
    description:
      "Laravel supports modular architecture, caching, and microservices for scalable enterprise-grade applications.",
  },
];

// --- PILLARS DATA ---
const pillars = [
  {
    title: "Secure Application Architecture",
    items: [
      "In-built authentication and authorization system.",
      "Protection from SQL injection, XSS, and CSRF attacks.",
      "Role-based access control for multi-user environments.",
    ],
  },
  {
    title: "Efficient Development Lifecycle",
    items: [
      "Artisan CLI for automation of repetitive tasks.",
      "Eloquent ORM for database management and relationships.",
      "Built-in testing tools for continuous integration.",
    ],
  },
  {
    title: "Enterprise-Grade Performance",
    items: [
      "Caching and queue management for faster response times.",
      "Scalable API development with Laravel Sanctum and Passport.",
      "Optimized for cloud deployment and microservice architecture.",
    ],
  },
];

const LaravelDevelopment = memo(() => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://stravoph.netlify.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Vue Development",
        item: "https://stravoph.netlify.app/laravel",
      },
    ],
  };
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Helmet>
        <title>Laravel Development Services | Stravo</title>
        <meta
          name="description"
          content="Power your business with Laravel — the most elegant PHP framework. Stravo delivers scalable, secure, and feature-rich Laravel applications."
        />
        <meta
          name="keywords"
          content="Laravel development, PHP framework, web application development, Laravel developers, Stravo"
        />
        <meta
          property="og:title"
          content="Laravel Development Services | Stravo"
        />
        <meta
          property="og:description"
          content="Stravo builds robust and secure Laravel applications tailored to your business needs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://stravoph.netlify.app/laravel"
        />
        <meta
          property="og:image"
          content="https://stravoph.netlify.app/og/laravel.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Laravel Development Services | Stravo"
        />
        <meta
          name="twitter:description"
          content="Elegant and powerful Laravel web development by Stravo."
        />
        <meta
          name="twitter:image"
          content="https://stravoph.netlify.app/og/laravel.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <header role="banner">
        <Navbar />
      </header>

      <nav
        aria-label="Breadcrumb"
        className="px-6 pt-4 pb-4 text-sm text-white bg-gradient-to-r from-[#4A000F] to-[#A0001E] mt-20 "
      >
        <ol className="flex items-center space-x-2">
          <li className="flex items-center">
            <Link
              to="/"
              className="flex items-center hover:text-[#E2001A] transition-colors"
            >
              <Home className="w-4 h-4 mr-1" aria-hidden="true" />
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </li>
          <li className="text-[#E2001A] font-medium">Laravel Development</li>
        </ol>
      </nav>
      {/* HERO SECTION */}
      <section className="relative px-6 pt-4 pb-20 overflow-hidden bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Laravel Development Services
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Build high-performance, secure, and scalable web applications with
              Laravel — the framework built for modern development.
            </p>
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

      {/* WHY WE USE LARAVEL */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why we use Laravel at{" "}
              <span className="text-[#E2001A]">Stravo</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Laravel offers an expressive and elegant syntax that simplifies
              development without sacrificing functionality. At Stravo, we use
              Laravel to build robust APIs, enterprise solutions, and scalable
              SaaS platforms.
            </p>
          </div>
          <div>
            <img
              src={chartPlaceholder}
              alt="Laravel growth chart"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="px-6 py-20 bg-gray-50 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Build fast, secure, and scalable apps with Laravel
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

      {/* KNOW LARAVEL */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Things you need to know about Laravel
          </h2>
          <p className="text-gray-600 mb-10">
            Laravel simplifies the most common tasks in web development —
            routing, authentication, caching, and more — making it the go-to
            framework for PHP developers.
          </p>

          <div className="space-y-4 border-t border-gray-200">
            {[
              "What is Laravel",
              "Laravel’s Key Benefits",
              "Laravel Use Cases",
              "Popular Laravel Applications",
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
                  Placeholder — expand this content with insights and examples
                  for your visitors.
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
            The Three Pillars of Laravel Excellence
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
          Let’s bring your web app ideas to life with Laravel.
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          From startups to enterprises, Stravo builds robust and secure Laravel
          applications that scale as your business grows.
        </p>
        <Link to="/contact">
          <Button
            className="cursor-pointer"
            variant="primary"
            size="top"
            aria-label="Contact us to discuss your React project"
          >
            Book Tech Call <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
});

export default LaravelDevelopment;
