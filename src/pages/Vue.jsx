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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// --- Image placeholders (replace with your own later) ---
import chartPlaceholder from "../assets/photo_wd.webp"; // your Vue chart image
import logo1 from "../assets/photo_wd.webp";
import logo2 from "../assets/photo_wd.webp";
import logo3 from "../assets/photo_wd.webp";
import logo4 from "../assets/photo_wd.webp";
import logo5 from "../assets/photo_wd.webp";

// HERO ICON
const heroIcon = (
  <FontAwesomeIcon
    icon={["fab", "vuejs"]}
    size="10x"
    className="text-[#ffffff]"
  />
);

// --- Features data ---
const features = [
  {
    icon: <Code2 className="w-6 h-6 text-[#E2001A]" />,
    title: "Reactive Components",
    description:
      "Vue’s reactivity system ensures your app updates instantly when data changes — without unnecessary rendering.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#E2001A]" />,
    title: "Lightweight & Fast",
    description:
      "Vue’s small footprint and virtual DOM make it one of the fastest frameworks for modern web apps.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#E2001A]" />,
    title: "Strong Community",
    description:
      "Vue is supported by a passionate global community, continuously improving the ecosystem and plugins.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#E2001A]" />,
    title: "Progressive Framework",
    description:
      "Vue can be adopted incrementally — use it to enhance parts of a site or power an entire SPA.",
  },
  {
    icon: <Target className="w-6 h-6 text-[#E2001A]" />,
    title: "Versatile Integration",
    description:
      "Vue easily integrates with Laravel, Node.js, and REST APIs — making it flexible for all project types.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#E2001A]" />,
    title: "Developer-Friendly",
    description:
      "Vue’s simple syntax and dev tools reduce complexity, improving productivity and project scalability.",
  },
];

// --- Pillars Data ---
const pillars = [
  {
    title: "Continuous Project Delivery",
    items: [
      "Automated deployment and testing pipelines for smooth delivery.",
      "Monitoring issues early to maintain stability.",
      "Flexible modular architecture enabling rapid scalability.",
    ],
  },
  {
    title: "Business-oriented Implementation",
    items: [
      "Technical decisions always aligned with your business goals.",
      "Regular discovery sessions ensure project accuracy.",
      "Compliance with best coding and data protection standards.",
    ],
  },
  {
    title: "Disciplined Project Governance",
    items: [
      "Clear timelines and transparent progress tracking.",
      "Continuous risk assessment and quality assurance.",
      "Strong client communication at every milestone.",
    ],
  },
];

// --- Component ---
const Vue = memo(() => {
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
        item: "https://stravoph.netlify.app/vue-js",
      },
    ],
  };
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Helmet>
        <title>Vue.js Development Company | Stravo</title>
        <meta
          name="description"
          content="Empower your business with fast, flexible, and reactive Vue.js web applications. Stravo builds scalable and maintainable Vue solutions for modern businesses."
        />
        <meta
          name="keywords"
          content="Vue development, Vue.js company, front-end development, SPA, Vue apps, Stravo"
        />
        <meta
          property="og:title"
          content="Vue.js Development Company | Stravo"
        />
        <meta
          property="og:description"
          content="Stravo creates dynamic and efficient Vue.js applications tailored to your business goals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stravoph.netlify.app/vue-js" />
        <meta
          property="og:image"
          content="https://stravoph.netlify.app/og/vue.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vue.js Development Company | Stravo"
        />
        <meta
          name="twitter:description"
          content="Fast and flexible Vue.js web development by Stravo."
        />
        <meta
          name="twitter:image"
          content="https://stravoph.netlify.app/og/vue.webp"
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
          <li className="text-[#E2001A] font-medium">Vue Development</li>
        </ol>
      </nav>
      {/* HERO SECTION */}
      <section className="relative px-6 pt-4 pb-20 overflow-hidden bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Vue.js Development Services
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Scalable. Efficient. Modern. Build seamless, dynamic interfaces
              and single-page applications powered by Vue.js.
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

      {/* WHY WE USE VUE */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why we use Vue.js at{" "}
              <span className="text-[#E2001A]">Stravo</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Vue.js is a progressive JavaScript framework known for its
              simplicity and flexibility. At Stravo, we use Vue to deliver
              interactive, maintainable, and performant web solutions your users
              will love.
            </p>
          </div>
          <div>
            <img
              src={chartPlaceholder}
              alt="Vue growth chart"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="px-6 py-20 bg-gray-50 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Build fast and maintainable apps with Vue.js
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

      {/* KNOW VUE */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Things you need to know about Vue.js
          </h2>
          <p className="text-gray-600 mb-10">
            Before you choose Vue for your next project, here are some key
            aspects to consider:
          </p>

          <div className="space-y-4 border-t border-gray-200">
            {[
              "What is Vue.js",
              "Vue.js benefits",
              "Vue.js use cases",
              "Vue.js app examples",
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
                  Placeholder content — expand this section to describe your
                  Vue.js expertise and case studies.
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
            The Three Pillars of Excellence
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
          With 50+ Vue.js projects delivered, Stravo can help bring yours to
          life.
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          Let’s collaborate to build intuitive and high-performing Vue
          applications.
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

export default Vue;
