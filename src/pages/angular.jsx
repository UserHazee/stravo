import React, { useState, useCallback, memo } from "react";
import {
  ArrowRight,
  Code2,
  Users,
  Zap,
  Minus,
  Plus,
  Home,
  ChevronRight,
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

// // --- Image placeholders (replace later) ---
// import chartPlaceholder from "../assets/photo_bp.webp";
// import logo1 from "../assets/photo_wd.webp";
// import logo2 from "../assets/photo_wd.webp";
// import logo3 from "../assets/photo_wd.webp";
// import logo4 from "../assets/photo_wd.webp";
// import logo5 from "../assets/photo_wd.webp";

const chartPlaceholder = new URL("../assets/photo_bp.webp", import.meta.url)
  .href;
const logo1 = new URL("../assets/xfive.svg", import.meta.url).href;
const logo2 = new URL("../assets/vetion.svg", import.meta.url).href;
const logo3 = new URL("../assets/rare.svg", import.meta.url).href;
const logo4 = new URL("../assets/atta.svg", import.meta.url).href;
const logo5 = new URL("../assets/apriorit.svg", import.meta.url).href;

// HERO ICON (Angular)
const heroIcon = (
  <FontAwesomeIcon
    icon={["fab", "angular"]}
    size="10x"
    className="text-[#ffffff]"
  />
);

// --- Angular FAQ Data ---
const angularFaqs = [
  {
    question: "What's the difference between Angular and AngularJS?",
    answer: "Angular (2+) is a complete rewrite of AngularJS with significant improvements. Angular uses TypeScript, component-based architecture, better performance, mobile support, and more advanced features. AngularJS is the older version that uses JavaScript and has different architecture patterns."
  },
  {
    question: "Why choose Angular over other frameworks like React or Vue?",
    answer: "Angular is ideal for large-scale enterprise applications because it provides a complete framework with built-in solutions for routing, state management, form handling, and testing. It offers strong typing with TypeScript, better tooling, and a more structured approach that ensures maintainability for complex, long-term projects."
  },
  {
    question: "How long does it typically take to build an Angular application?",
    answer: "Development time varies based on complexity. A simple SPA might take 4-8 weeks, while enterprise applications can take 3-6 months or more. We follow agile methodology and provide detailed project timelines after understanding your specific requirements and feature set."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer comprehensive maintenance packages including Angular version updates, security patches, performance optimization, bug fixes, and feature enhancements. We ensure your application stays current with the latest Angular releases and best practices."
  },
  {
    question: "Can you migrate our existing AngularJS application to modern Angular?",
    answer: "Absolutely! We specialize in AngularJS to Angular migration projects. We use proven strategies including incremental migration, component-by-component rewriting, or complete rebuilds based on your business needs, ensuring minimal disruption and maintaining data integrity throughout the process."
  },
  {
    question: "What about mobile compatibility with Angular?",
    answer: "Angular applications are inherently responsive and work well on mobile devices. For native-like mobile experiences, we can integrate Angular with Ionic Framework or use Angular with Progressive Web App (PWA) capabilities to create installable mobile applications that work across all devices."
  }
];

// FAQ Item Component
const FAQItem = memo(({ faq, isOpen, onToggle, index }) => (
  <div className="overflow-hidden border border-gray-200 rounded-xl">
    <div>
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
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  </div>
));

// FAQ Schema for SEO
const getFaqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

const faqSchema = getFaqSchema(angularFaqs);

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
      "Build for web, mobile, and desktop seamlessly using Angular's unified framework.",
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
    title: "Angular Architecture & Modularity",
    items: [
      "Mandating Standalone Components for enhanced modularity and smaller bundle sizes.",
      "Implementing Feature Modules or dedicated folders for clear separation of domain logic.",
      "Adhering to the principle of Single Responsibility for Components, Services, and Pipes.",
      "Using Typed Forms and Validators for robust and type-safe user input handling.",
    ],
  },
  {
    title: "Performance & Reactivity Management",
    items: [
      "Optimizing rendering with OnPush Change Detection and trackBy functions.",
      "Employing modern asynchronous patterns using RxJS Observables and the async pipe.",
      "Utilizing Lazy Loading and Code Splitting at the route level to reduce initial load time.",
      "Applying Server-Side Rendering (SSR) with Angular Universal for better SEO and initial performance.",
    ],
  },
  {
    title: "Enterprise Quality & Tooling",
    items: [
      "Enforcing code standards with ESLint and Prettier through the Angular CLI.",
      "Writing comprehensive tests using Jasmine and Karma for Unit Testing, and Cypress/Playwright for E2E.",
      "Leveraging the integrated Angular CLI for scaffolding, optimizing builds, and seamless upgrades.",
      "Applying advanced debugging and profiling using the Angular DevTools browser extension.",
    ],
  },
];

const AngularDevelopment = memo(() => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const handleToggle = useCallback((index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

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
        name: "Angular Development",
        item: "https://stravoph.netlify.app/angular-js",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white font-outfit">
      <Helmet>
        <title>Angular Development Experts | Stravo</title>
        <meta
          name="description"
          content="Develop enterprise-grade, dynamic web applications using Angular. Stravo's team delivers scalable and secure solutions for businesses worldwide."
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
        <meta
          property="og:url"
          content="https://stravoph.netlify.app/angular-js"
        />
        <meta
          property="og:image"
          content="https://stravoph.netlify.app/og/angular.webp"
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
          content="https://stravoph.netlify.app/og/angular.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <link
          rel="prefetch"
          href={chartPlaceholder}
          as="image"
          type="image/webp"
        />
        <link rel="prefetch" href={logo1} as="image" type="image/svg" />
        <link rel="prefetch" href={logo2} as="image" type="image/svg" />
        <link rel="prefetch" href={logo3} as="image" type="image/svg" />
        <link rel="prefetch" href={logo4} as="image" type="image/svg" />
        <link rel="prefetch" href={logo5} as="image" type="image/svg" />
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
            <ChevronRight
              className="w-4 h-4 text-gray-400"
              aria-hidden="true"
            />
          </li>
          <li className="text-[#E2001A] font-medium">Angular Development</li>
        </ol>
      </nav>
      {/* HERO SECTION */}
      <section className="relative px-6 pt-4 pb-20 overflow-hidden bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10">
          <div className="mt-5">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Angular Development Services
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Structured. Scalable. Fast. Build powerful and dynamic web
              applications with Angular — a framework designed for enterprise
              excellence and long-term performance.
            </p>
            {/* TRUSTED BY */}
            <section className="">
              <div className="max-w-6xl mx-auto ">
                <h3 className="text-white text-sm font-light mb-6 ">
                  Companies that use Angular:
                </h3>
                <div className="flex flex-wrap gap-6 items-center opacity-100">
                  {[logo1, logo2, logo3, logo4, logo5].map((logo, i) => (
                    <img
                      key={i}
                      src={logo}
                      alt={`client-logo-${i}`}
                      className="h-5 object-contain "
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
          <div className="flex justify-center">
            <div className="bg-white/10 rounded-full w-[300px] h-[300px] flex items-center justify-center">
              {heroIcon}
            </div>
          </div>
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

      {/* KNOW ANGULAR - Enhanced with FAQ Structure */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Everything You Need to Know About Angular Development
          </h2>
          <p className="text-gray-600 mb-10">
            Before you choose your Angular development partner, here's a quick guide to the enterprise-grade framework that powers large-scale web applications.
          </p>

          <div className="space-y-4">
            {angularFaqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
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
                className="relative bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl backdrop-blur border border-[#E2001A]/20 hover:border-[#E2001A]/50 transition-all shadow-xl hover:shadow-2xl hover:shadow-[#E2001A]/10"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#E2001A]/20 to-transparent rounded-bl-full" />

                {/* Number indicator */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#E2001A] to-[#A0001E] rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {idx + 1}
                </div>

                <h4 className="text-xl font-bold mb-6 text-[#E2001A] mt-4">
                  {pillar.title}
                </h4>
                <ul className="space-y-4 text-sm text-gray-300">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 bg-[#E2001A] rounded-full mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
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
          With 40+ Angular projects completed, we're ready to power your next
          web solution.
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          Consult our Angular experts today and take your enterprise platform to
          the next level.
        </p>
        <Link to="/contact">
          <Button
            className="cursor-pointer"
            variant="primary"
            size="top"
            aria-label="Contact us to discuss your Angular project"
          >
            Book Tech Call{" "}
            <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
});

export default AngularDevelopment;