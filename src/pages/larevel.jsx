import React, { useState, useCallback, memo } from "react";
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
  Minus,
  Plus,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// // --- Image placeholders (replace with your own) ---
// import chartPlaceholder from "../assets/photo_bp.webp";
// import logo1 from "../assets/photo_wd.webp";
// import logo2 from "../assets/photo_wd.webp";
// import logo3 from "../assets/photo_wd.webp";
// import logo4 from "../assets/photo_wd.webp";
// import logo5 from "../assets/photo_wd.webp";

const chartPlaceholder = new URL("../assets/photo_bp.webp", import.meta.url)
  .href;
const logo1 = new URL("../assets/rebderry.svg", import.meta.url).href;
const logo2 = new URL("../assets/mallow.webp", import.meta.url).href;
const logo3 = new URL("../assets/fingnet.webp", import.meta.url).href;
const logo4 = new URL("../assets/bluelight.webp", import.meta.url).href;
const logo5 = new URL("../assets/99xlogo.svg", import.meta.url).href;

// --- HERO ICON (Laravel) ---
const heroIcon = (
  <FontAwesomeIcon
    icon={["fab", "laravel"]}
    size="10x"
    className="text-[#ffffff]"
  />
);

// --- Laravel FAQ Data ---
const laravelFaqs = [
  {
    question: "What is Laravel and why is it the most popular PHP framework?",
    answer: "Laravel is an open-source PHP web framework designed for building modern, maintainable web applications. It's the most popular PHP framework because of its elegant syntax, comprehensive feature set, strong security practices, and vibrant ecosystem. Laravel makes common tasks like routing, authentication, caching, and sessions effortless."
  },
  {
    question: "Why choose Laravel over other PHP frameworks like Symfony or CodeIgniter?",
    answer: "Laravel offers a perfect balance of power and developer experience. Compared to Symfony, it has a gentler learning curve and more built-in features. Versus CodeIgniter, Laravel provides better security, more modern tooling, and a more active ecosystem. Laravel's Eloquent ORM, Blade templating, and Artisan CLI make development faster and more enjoyable."
  },
  {
    question: "Is Laravel suitable for large-scale enterprise applications?",
    answer: "Absolutely! Laravel is enterprise-ready and powers applications for companies like BBC, Pfizer, and TourRadar. With features like queue management, event broadcasting, robust testing tools, and microservices support, Laravel scales beautifully for high-traffic applications. Its modular structure and package ecosystem make it ideal for complex business requirements."
  },
  {
    question: "How does Laravel handle security and performance?",
    answer: "Laravel includes built-in security features like CSRF protection, SQL injection prevention, encrypted storage, and secure authentication. For performance, it offers route caching, view caching, database optimization with Eloquent, and queue workers for background processing. Laravel's architecture is designed for both security and speed from the ground up."
  },
  {
    question: "What's the difference between Laravel and Laravel Livewire?",
    answer: "Laravel is the core PHP framework for backend development, while Laravel Livewire is a full-stack framework that allows you to build dynamic UI components without writing JavaScript. Livewire runs on the server but provides a reactive frontend experience. It's perfect for developers who want interactive interfaces without the complexity of JavaScript frameworks."
  },
  {
    question: "Do you provide Laravel maintenance and upgrade services?",
    answer: "Yes, we offer comprehensive Laravel maintenance including version upgrades, security patches, performance optimization, bug fixes, and feature enhancements. We ensure your Laravel application stays current with the latest releases, follows best practices, and maintains optimal performance and security standards."
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

const faqSchema = getFaqSchema(laravelFaqs);

// --- FEATURES DATA ---
const features = [
  {
    icon: <Code2 className="w-6 h-6 text-[#E2001A]" />,
    title: "Elegant Syntax",
    description:
      "Laravel's clean and expressive syntax accelerates development while keeping your code organized and readable.",
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
      "Effortlessly control your app's flow and secure endpoints with Laravel's robust routing and middleware system.",
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
        name: "Laravel Development",
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
        <link rel="prefetch" href={logo2} as="image" type="image/webp" />
        <link rel="prefetch" href={logo3} as="image" type="image/webp" />
        <link rel="prefetch" href={logo4} as="image" type="image/webp" />
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
            {/* TRUSTED BY */}
            <section className="">
              <div className="max-w-6xl mx-auto ">
                <h3 className="text-white text-sm font-light mb-6 ">
                  Companies that use Laravel:
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

      {/* KNOW LARAVEL - Enhanced with FAQ Structure */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Everything You Need to Know About Laravel Development
          </h2>
          <p className="text-gray-600 mb-10">
            Before you choose your PHP framework partner, here's a comprehensive guide to Laravel and why it's the top choice for modern web applications.
          </p>

          <div className="space-y-4">
            {laravelFaqs.map((faq, index) => (
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
            The Three Pillars of Laravel Excellence
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
          Let's bring your web app ideas to life with Laravel.
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
            aria-label="Contact us to discuss your Laravel project"
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

export default LaravelDevelopment;