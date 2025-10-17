import React, { useState, memo, useCallback } from "react";
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
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// --- Image placeholders (replace with your own later) ---
import chartPlaceholder from "../assets/photo_bp.webp";
import logo1 from "../assets/photo_wd.webp";
import logo2 from "../assets/photo_wd.webp";
import logo3 from "../assets/photo_wd.webp";
import logo4 from "../assets/photo_wd.webp";
import logo5 from "../assets/photo_wd.webp";
// Function to generate the JSON-LD structure

// Generate the final JSON-LD object

// --- SEO-Optimized FAQ Data (from previous response) ---
const reactFaqs = [
  {
    question: "What is React (React.js) and why is it so popular?",
    answer:
      "React (often called React.js or ReactJS) is a powerful, open-source **JavaScript library** used for building fast, scalable, and complex **user interfaces (UIs)**, especially for single-page applications. Why it's popular: It works by letting developers break down the UI into reusable, isolated pieces called **Components**. This modular approach makes code easier to manage, debug, and scale. For today's consumer, React is the engine behind the smooth, instant-loading experience you expect from modern websites and apps.",
  },
  {
    question:
      "What are the main benefits of choosing React for a modern web application?",
    answer:
      "Choosing React offers significant advantages that directly impact development cost, speed, and user experience (UX): 1. **Performance (Virtual DOM):** React uses a **Virtual DOM** (Document Object Model) to only update the necessary parts of the page, leading to **lightning-fast loading** and seamless user interactions. 2. **Reusability:** Components can be reused across different parts of an application, which drastically **speeds up development** and reduces long-term maintenance costs. 3. **Strong Community:** Backed by Facebook (Meta) and a massive developer community, ensuring constant improvements and easy access to solutions. 4. **SEO-Friendliness:** React supports **Server-Side Rendering (SSR)** with frameworks like Next.js, ensuring your dynamic content is easily crawled and indexed by Google.",
  },
  {
    question: "What are the primary use cases for a React-based web solution?",
    answer:
      "React excels in scenarios where a highly **dynamic, data-driven, and interactive user experience** is required. Its primary use cases include: 1. **Single-Page Applications (SPAs):** Websites that load once and dynamically update content without full page reloads (e.g., Gmail, social media feeds). 2. **Interactive Dashboards and Data Visualization:** Building complex charts, tables, and analytical interfaces that update in real-time. 3. **Cross-Platform Mobile Apps:** Using **React Native** to leverage the same principles and code for native iOS and Android applications. 4. **E-commerce Front-Ends:** Creating fast product pages, complex filtering systems, and smooth checkout flows.",
  },
  {
    question:
      "Can you provide examples of well-known applications built with React?",
    answer:
      "Yes, React is the foundation for some of the world's largest and most performance-intensive digital products, proving its scalability and robustness: **Facebook, Instagram, Netflix, Airbnb, and The New York Times.** These examples demonstrate that React is the **industry standard** for high-traffic, modern web experiences that prioritize speed and excellent UX.",
  },
];

/**
 * Safely converts '**text**' (markdown) to <strong> elements in React.
 * @param {string} text - The FAQ answer string.
 * @returns {Array<React.ReactNode>} - An array of React elements (strings and <strong> tags).
 */
const renderAnswerContent = (text) => {
  // Regex to split the string by content surrounded by double asterisks
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, i) => {
    // Check if the part starts and ends with '**'
    if (part.startsWith("**") && part.endsWith("**")) {
      // Extract the content and wrap it in a <strong> tag
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    // Return the plain text part
    return part;
  });
};

// 1. The Memoized Child Component
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
        {/* Replace with your actual icon components (Minus/Plus) */}
        {isOpen ? (
          <Minus className="flex-shrink-0 w-5 h-5 text-gray-500" />
        ) : (
          <Plus className="flex-shrink-0 w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div id={`faq-${index}`} className="px-6 pb-6 text-gray-600">
          <p>{renderAnswerContent(faq.answer)}</p>
        </div>
      )}
    </div>
  </div>
));

const getFaqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      // Important: Remove HTML bolding tags from the schema text
      text: faq.answer.replace(/\*\*/g, ""),
    },
  })),
});
const faqSchema = getFaqSchema(reactFaqs);
// HERO ICON
const heroIcon = (
  <FontAwesomeIcon
    icon={["fab", "react"]}
    size="10x"
    className="text-[#ffffff]"
  />
);
// --- Features data ---
const features = [
  {
    icon: <Code2 className="w-6 h-6 text-[#E2001A]" />,
    title: "Reusability",
    description:
      "React components and much of your codebase can be reused for future projects or even mobile apps.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#E2001A]" />,
    title: "Simplicity & Scalability",
    description:
      "React apps are fast, scalable, and easy to maintain. Automatic updates keep your app efficient and stable.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#E2001A]" />,
    title: "Widely Adopted",
    description:
      "React.js is trusted by major companies and a massive global developer community, ensuring reliability.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#E2001A]" />,
    title: "Virtual DOM",
    description:
      "React efficiently updates only the necessary parts of the DOM, improving app performance and speed.",
  },
  {
    icon: <Target className="w-6 h-6 text-[#E2001A]" />,
    title: "Thriving Community",
    description:
      "An active open-source community supports constant improvements, learning resources, and innovation.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#E2001A]" />,
    title: "Faster Development",
    description:
      "Reusable components and advanced browser tools make development and debugging faster and easier.",
  },
];

// --- Pillars Data ---
const pillars = [
  {
    title: "Continuous Project Delivery",
    items: [
      "Collaboration of tests, deployment, and security controls.",
      "Monitoring issues early to preserve stability and minimize downtime.",
      "Loosely coupled architecture for faster scalability and adaptability.",
    ],
  },
  {
    title: "Business-oriented Implementation",
    items: [
      "Decisions documented for long-term clarity.",
      "Requirements based on continuous discovery.",
      "Legal and industry standards enforced at all times.",
    ],
  },
  {
    title: "Disciplined Project Governance",
    items: [
      "Delivery governance ensures budget and scope stay on track.",
      "Risks continuously assessed and managed.",
      "Transparent communication with cadence and discipline.",
    ],
  },
];

// --- Component ---
const ReactDevelopment = memo(() => {
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
        name: "React Development",
        item: "https://stravoph.netlify.app/react-js",
      },
    ],
  };
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = useCallback((index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Helmet>
        <title>React.js Development Services | Stravo</title>
        <meta
          name="description"
          content="Build lightning-fast, interactive web applications with Stravo’s expert React.js development team. Modern, scalable, and high-performing front-end solutions."
        />
        <meta
          name="keywords"
          content="React development, React.js web apps, front-end development, SPA development, React developers, Stravo"
        />
        <meta
          property="og:title"
          content="React.js Development Services | Stravo"
        />
        <meta
          property="og:description"
          content="Stravo delivers fast, responsive React.js applications built for performance, scalability, and user engagement."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://stravoph.netlifly.app/react-js"
        />
        <meta
          property="og:image"
          content="https://stravoph.netlifly.app/og/react.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="React.js Development Services | Stravo"
        />
        <meta
          name="twitter:description"
          content="Modern, scalable, and interactive React.js development by Stravo."
        />
        <meta
          name="twitter:image"
          content="https://stravoph.netlifly.app/og/react.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
          <li className="text-[#E2001A] font-medium">React Development</li>
        </ol>
      </nav>
      {/* HERO SECTION */}
      <section className="relative px-6  pb-20 overflow-hidden bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-4">
              React.js Development Services
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Efficient. Scalable. Trusted. We build complex applications that
              handle large data fast, helping your business grow with modern
              React.js technology.
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

      {/* WHY WE USE REACT */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why we use React.js at{" "}
              <span className="text-[#E2001A]">Stravo</span>
            </h2>
            <p className="text-gray-600 mb-6">
              React.js is one of the top open-source libraries built by Meta for
              creating fast and dynamic user interfaces. Our developers at
              Stravo leverage it to deliver high-performance, scalable, and
              future-ready web apps.
            </p>
          </div>
          <div>
            <img
              src={chartPlaceholder}
              alt="React growth chart"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="px-6 py-20 bg-gray-50 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Build responsive and engaging user interfaces with React
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

      {/* KNOW REACT */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold text-gray-900 mb-6"
            id="react-faq-guide"
          >
            Everything You Need to Know About React Development
          </h2>
          <p className="text-gray-600 mb-10">
            Before you choose your **React development** partner, here’s a quick
            guide to the technology that powers the modern web.
          </p>

          <div className="space-y-4">
            {reactFaqs.map((faq, index) => (
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
          With 50+ React projects under our belt, there’s a high chance we can
          help with yours.
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          Discuss your most pressing problem with our technical advisors today.
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

export default ReactDevelopment;
