import React, { useState, useCallback, memo } from "react";
import {
  ArrowRight,
  Code2,
  Users,
  Zap,
  Home,
  ChevronRight,
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
const logo1 = new URL("../assets/thinkbits.webp", import.meta.url).href;
const logo2 = new URL("../assets/hireplicity.webp", import.meta.url).href;
const logo3 = new URL("../assets/global.svg", import.meta.url).href;
const logo4 = new URL("../assets/chromemedia.webp", import.meta.url).href;
const logo5 = new URL("../assets/codedev.svg", import.meta.url).href;

// --- HERO ICON (PHP) ---
const heroIcon = (
  <FontAwesomeIcon
    icon={["fab", "php"]}
    size="10x"
    className="text-[#ffffff]"
  />
);

// --- PHP FAQ Data ---
const phpFaqs = [
  {
    question: "What is PHP and why is it still relevant in modern web development?",
    answer: "PHP is a server-side scripting language specifically designed for web development. It's still highly relevant because it powers over 75% of all websites, including major platforms like WordPress, Facebook, and Wikipedia. PHP continues to evolve with modern features, frameworks, and performance improvements, making it a reliable choice for web applications of all sizes."
  },
  {
    question: "Why choose PHP over newer languages like Node.js or Python?",
    answer: "PHP offers several advantages: massive ecosystem with mature frameworks like Laravel and Symfony, excellent documentation, wide hosting support, and lower hosting costs. It's specifically designed for the web, with built-in features for sessions, cookies, and form handling. PHP's long history means extensive community support and proven stability for production applications."
  },
  {
    question: "What types of projects are best suited for PHP development?",
    answer: "PHP excels at content management systems (WordPress, Drupal, Joomla), e-commerce platforms (Magento, WooCommerce), custom web applications, API development, and enterprise systems. It's particularly strong for database-driven websites, membership sites, and applications requiring complex server-side logic with reliable performance."
  },
  {
    question: "How does modern PHP compare to older versions in terms of performance and security?",
    answer: "Modern PHP (versions 7.x and 8.x) has seen massive performance improvements - up to 3x faster than PHP 5.x. Security has been significantly enhanced with better password hashing, type declarations, and improved error handling. The introduction of Just-In-Time compilation in PHP 8 provides additional performance boosts for certain applications."
  },
  {
    question: "What PHP frameworks do you work with and when should I use them?",
    answer: "We work with Laravel (for complex applications), Symfony (for enterprise projects), CodeIgniter (for lightweight applications), and WordPress (for content-focused sites). Laravel is our go-to for most projects due to its elegant syntax and comprehensive features. The framework choice depends on project complexity, team expertise, and specific requirements."
  },
  {
    question: "Do you provide PHP maintenance and migration services?",
    answer: "Yes, we offer complete PHP maintenance including version upgrades, security patches, performance optimization, and code refactoring. We specialize in migrating legacy PHP applications to modern frameworks, improving security, performance, and maintainability while preserving existing functionality."
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

const faqSchema = getFaqSchema(phpFaqs);

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
        name: "PHP Development",
        item: "https://stravoph.netlify.app/php",
      },
    ],
  };

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
        <meta property="og:url" content="https://stravoph.netlify.app/php" />
        <meta
          property="og:image"
          content="https://stravoph.netlify.app/og/php.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PHP Web Development Company | Stravo"
        />
        <meta
          name="twitter:description"
          content="Secure and efficient PHP development solutions by Stravo."
        />
        <meta
          name="twitter:image"
          content="https://stravoph.netlify.app/og/php.webp"
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
        <link rel="prefetch" href={logo1} as="image" type="image/webp" />
        <link rel="prefetch" href={logo2} as="image" type="image/webp" />
        <link rel="prefetch" href={logo3} as="image" type="image/svg" />
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
          <li className="text-[#E2001A] font-medium">PHP Development</li>
        </ol>
      </nav>
      {/* HERO SECTION */}
      <section className="relative px-6 pt-4 pb-20 overflow-hidden bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-4">
              PHP Development Services
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Build dynamic, secure, and scalable web applications using PHP —
              the foundation of modern web development.
            </p>
            {/* TRUSTED BY */}
            <section className="">
              <div className="max-w-6xl mx-auto ">
                <h3 className="text-white text-sm font-light mb-6 ">
                  Companies that use PHP:
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
      {/* WHY WE USE PHP */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why we use PHP at <span className="text-[#E2001A]">Stravo</span>
            </h2>
            <p className="text-gray-600 mb-6">
              PHP powers over 75% of websites worldwide — from WordPress to
              Facebook. At Stravo, we leverage PHP's flexibility and power to
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

      {/* KNOW PHP - Enhanced with FAQ Structure */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Everything You Need to Know About PHP Development
          </h2>
          <p className="text-gray-600 mb-10">
            Before you choose your web development technology, here's a comprehensive guide to PHP and why it remains the backbone of the modern web.
          </p>

          <div className="space-y-4">
            {phpFaqs.map((faq, index) => (
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
            The Three Pillars of PHP Excellence
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
          Let's build your next-generation web app with PHP.
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          From small business websites to enterprise-grade platforms, Stravo
          delivers fast, secure, and scalable PHP solutions.
        </p>
        <Link to="/contact">
          <Button
            className="cursor-pointer"
            variant="primary"
            size="top"
            aria-label="Contact us to discuss your PHP project"
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

export default PHPDevelopment;