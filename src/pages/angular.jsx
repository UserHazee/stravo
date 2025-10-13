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

// --- Image placeholders (replace later) ---
import chartPlaceholder from "../assets/photo_bp.webp";
import logo1 from "../assets/photo_wd.webp";
import logo2 from "../assets/photo_wd.webp";
import logo3 from "../assets/photo_wd.webp";
import logo4 from "../assets/photo_wd.webp";
import logo5 from "../assets/photo_wd.webp";

// HERO ICON (Angular)
const heroIcon = (
  <FontAwesomeIcon
    icon={["fab", "angular"]}
    size="10x"
    className="text-[#ffffff]"
  />
);

// --- FEATURES ---
const features = [
  {
    icon: <Code2 className="w-6 h-6 text-[#E2001A]" />,
    title: "Modular Architecture",
    description:
      "Angular promotes clean and maintainable code through its modular component-based structure.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#E2001A]" />,
    title: "High Performance",
    description:
      "With Ahead-of-Time (AOT) compilation and efficient change detection, Angular apps load and run faster.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#E2001A]" />,
    title: "Enterprise-Ready",
    description:
      "Angular is a top choice for large-scale enterprise applications with strong typing and robust tooling.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#E2001A]" />,
    title: "Cross-Platform",
    description:
      "Build for web, mobile, and desktop seamlessly using Angular’s unified framework.",
  },
  {
    icon: <Target className="w-6 h-6 text-[#E2001A]" />,
    title: "Powerful CLI",
    description:
      "Angular CLI speeds up development with commands for scaffolding, testing, and deployment.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#E2001A]" />,
    title: "Two-Way Data Binding",
    description:
      "Simplify UI updates with automatic synchronization between models and views.",
  },
];

// --- PILLARS ---
const pillars = [
  {
    title: "Scalable Application Structure",
    items: [
      "Code modularization for sustainable large-scale projects.",
      "Reusable components for faster iteration and upgrades.",
      "Seamless integration with TypeScript and RxJS.",
    ],
  },
  {
    title: "Reliable Enterprise Performance",
    items: [
      "Optimized rendering and lazy loading for high-speed applications.",
      "Comprehensive testing support with Jasmine and Karma.",
      "Stable versioning and long-term support for enterprise reliability.",
    ],
  },
  {
    title: "Streamlined Development Process",
    items: [
      "Integrated CLI tools for faster builds and deployments.",
      "Effective debugging and profiling tools via Angular DevTools.",
      "Full-stack compatibility with Node.js and RESTful APIs.",
    ],
  },
];

const AngularDevelopment = memo(() => {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Helmet>
        <title>Angular Development Experts | Stravo</title>
        <meta
          name="description"
          content="Develop enterprise-grade, dynamic web applications using Angular. Stravo’s team delivers scalable and secure solutions for businesses worldwide."
        />
        <meta
          name="keywords"
          content="Angular development, Angular apps, enterprise web apps, front-end framework, Stravo"
        />
        <meta
          property="og:title"
          content="Angular Development Experts | Stravo"
        />
        <meta
          property="og:description"
          content="Stravo builds high-performing Angular applications for enterprises and startups."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stravo.com/angular-js" />
        <meta
          property="og:image"
          content="https://stravo.com/og/angular.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Angular Development Experts | Stravo"
        />
        <meta
          name="twitter:description"
          content="Enterprise-grade Angular development solutions by Stravo."
        />
        <meta
          name="twitter:image"
          content="https://stravo.com/og/angular.webp"
        />
      </Helmet>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Angular Development Services
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Structured. Scalable. Fast. Build powerful and dynamic web
              applications with Angular — a framework designed for enterprise
              excellence and long-term performance.
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

      {/* WHY WE USE ANGULAR */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why we use Angular at{" "}
              <span className="text-[#E2001A]">Stravo</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Angular, backed by Google, is a robust open-source framework built
              for developing dynamic and feature-rich web applications. At
              Stravo, we use Angular to build scalable, high-performance
              enterprise apps that deliver a seamless user experience.
            </p>
          </div>
          <div>
            <img
              src={chartPlaceholder}
              alt="Angular growth chart"
              className="rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="px-6 py-20 bg-gray-50 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Build robust and scalable applications with Angular
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

      {/* KNOW ANGULAR */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Things you need to know about Angular
          </h2>
          <p className="text-gray-600 mb-10">
            Here’s a quick overview of why Angular remains a top choice for
            modern web development:
          </p>
          <div className="space-y-4 border-t border-gray-200">
            {[
              "What is Angular",
              "Angular advantages",
              "Angular use cases",
              "Popular Angular apps",
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
                  Placeholder content — you can expand on this section later to
                  explain each topic for your users.
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
            Software Delivery Excellence Framework
          </h3>
          <h2 className="text-3xl font-bold mb-10">
            The Three Pillars of Angular Excellence
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
          With 40+ Angular projects completed, we’re ready to power your next
          web solution.
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          Consult our Angular experts today and take your enterprise platform to
          the next level.
        </p>
        <Button variant="primary" size="top">
          Book Tech Call <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </section>

      <Footer />
    </div>
  );
});

export default AngularDevelopment;
