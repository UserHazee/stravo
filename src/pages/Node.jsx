import React, { useState, useCallback, memo } from "react";
import {
  ArrowRight,
  Code2,
  Users,
  Zap,
  Target,
  Home,
  ChevronRight,
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

// // --- Image placeholders (replace with your own images later) ---
// import chartPlaceholder from "../assets/photo_bp.webp";
// import logo1 from "../assets/photo_wd.webp";
// import logo2 from "../assets/photo_wd.webp";
// import logo3 from "../assets/photo_wd.webp";
// import logo4 from "../assets/photo_wd.webp";
// import logo5 from "../assets/photo_wd.webp";

const chartPlaceholder = new URL("../assets/photo_bp.webp", import.meta.url)
  .href;
const logo1 = new URL("../assets/triare.svg", import.meta.url).href;
const logo2 = new URL("../assets/techmagic.svg", import.meta.url).href;
const logo3 = new URL("../assets/espark.svg", import.meta.url).href;
const logo4 = new URL("../assets/ae.webp", import.meta.url).href;
const logo5 = new URL("../assets/accedia.svg", import.meta.url).href;

// --- HERO ICON (Node.js) ---
const heroIcon = (
  <FontAwesomeIcon
    icon={["fab", "node-js"]}
    size="10x"
    className="text-[#ffffff]"
  />
);

// --- Node.js FAQ Data ---
const nodeFaqs = [
  {
    question: "What is Node.js and why is it used for backend development?",
    answer: "Node.js is a JavaScript runtime built on Chrome's V8 engine that enables developers to use JavaScript for server-side programming. It's used for backend development because of its non-blocking, event-driven architecture which makes it ideal for building fast, scalable network applications and real-time web apps."
  },
  {
    question: "Why choose Node.js over traditional backend technologies like Java or Python?",
    answer: "Node.js offers several advantages: faster execution through the V8 engine, unified JavaScript stack (frontend + backend), excellent performance for I/O-heavy applications, and a massive ecosystem via npm. It's particularly strong for real-time applications, APIs, and microservices where high concurrency is required."
  },
  {
    question: "What types of applications are best suited for Node.js?",
    answer: "Node.js excels at real-time applications (chat apps, gaming), data-intensive applications (streaming platforms), API servers, microservices architectures, single-page applications (SPAs), and IoT applications. Companies like Netflix, Uber, and LinkedIn use Node.js for its scalability and performance."
  },
  {
    question: "How does Node.js handle scalability and performance?",
    answer: "Node.js uses a single-threaded event loop model with non-blocking I/O operations, allowing it to handle thousands of concurrent connections efficiently. It scales horizontally well and can be clustered across multiple CPU cores. Its asynchronous nature prevents thread blocking, making it highly performant for I/O-bound tasks."
  },
  {
    question: "What's the difference between Node.js and Express.js?",
    answer: "Node.js is the runtime environment that executes JavaScript on the server, while Express.js is a web application framework that runs on top of Node.js. Express provides a robust set of features for building web applications and APIs, including routing, middleware, and template engine integration, making development faster and more structured."
  },
  {
    question: "Do you provide Node.js maintenance and optimization services?",
    answer: "Yes, we offer comprehensive Node.js maintenance including performance optimization, security updates, dependency management, code refactoring, and scaling solutions. We ensure your Node.js applications remain fast, secure, and up-to-date with the latest best practices and versions."
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

const faqSchema = getFaqSchema(nodeFaqs);

// --- FEATURES DATA ---
const features = [
  {
    icon: <Code2 className="w-6 h-6 text-[#E2001A]" />,
    title: "High Performance",
    description:
      "Node.js runs on the V8 engine, offering lightning-fast performance for real-time and data-intensive applications.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#E2001A]" />,
    title: "Scalability",
    description:
      "Built for horizontal scaling, Node.js handles millions of concurrent connections with ease.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#E2001A]" />,
    title: "Massive Ecosystem",
    description:
      "The NPM ecosystem gives access to over a million packages, accelerating development and integration.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#E2001A]" />,
    title: "Full-Stack Power",
    description:
      "Use Node.js with Express and MongoDB to build end-to-end JavaScript solutions from frontend to backend.",
  },
  {
    icon: <Target className="w-6 h-6 text-[#E2001A]" />,
    title: "Real-Time Capabilities",
    description:
      "Ideal for chat apps, gaming, and live data — Node.js enables fast, bi-directional real-time communication.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#E2001A]" />,
    title: "Lightweight & Efficient",
    description:
      "Non-blocking, event-driven architecture ensures your applications remain responsive and efficient.",
  },
];

// --- PILLARS DATA ---
const pillars = [
  {
    title: "Event-Driven Architecture",
    items: [
      "Non-blocking I/O allows maximum concurrency and speed.",
      "Perfect for microservices and real-time data processing.",
      "Efficient scaling without heavy server load.",
    ],
  },
  {
    title: "Seamless Integration",
    items: [
      "Connects effortlessly with databases like MongoDB, MySQL, or PostgreSQL.",
      "Works seamlessly with modern frontends like React, Vue, and Angular.",
      "Ideal for RESTful APIs, GraphQL, and real-time systems.",
    ],
  },
  {
    title: "Enterprise Reliability",
    items: [
      "Mature ecosystem with long-term support and security updates.",
      "Flexible architecture for both monolithic and microservice systems.",
      "Used by top companies like Netflix, Uber, and PayPal for backend performance.",
    ],
  },
];

const NodejsDevelopment = memo(() => {
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
        name: "Node.js Development",
        item: "https://stravoph.netlify.app/node-js",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white font-outfit">
      <Helmet>
        <title>Node.js Backend Development | Stravo</title>
        <meta
          name="description"
          content="Build scalable, real-time backend systems with Stravo's expert Node.js developers. Fast, reliable, and designed for modern web applications."
        />
        <meta
          name="keywords"
          content="Node.js development, backend development, API development, real-time apps, Express.js, Stravo"
        />
        <meta
          property="og:title"
          content="Node.js Backend Development | Stravo"
        />
        <meta
          property="og:description"
          content="Stravo creates high-performance Node.js backends for real-time, data-driven web applications."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://stravoph.netlify.app/node-js"
        />
        <meta
          property="og:image"
          content="https://stravoph.netlify.app/og/node.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Node.js Backend Development | Stravo"
        />
        <meta
          name="twitter:description"
          content="Fast and scalable Node.js backend development by Stravo."
        />
        <meta
          name="twitter:image"
          content="https://stravoph.netlify.app/og/node.webp"
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
          <li className="text-[#E2001A] font-medium">Node JS Development</li>
        </ol>
      </nav>
      {/* HERO SECTION */}
      <section className="relative px-6 pt-4 pb-20 overflow-hidden bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Node.js Development Services
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Fast. Reliable. Scalable. Build modern backend systems that power
              real-time, data-driven web applications using Node.js.
            </p>
            {/* TRUSTED BY */}
            <section className="">
              <div className="max-w-6xl mx-auto ">
                <h3 className="text-white text-sm font-light mb-6 ">
                  Companies that use Node.js:
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
      {/* WHY WE USE NODE.JS */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why we use Node.js at{" "}
              <span className="text-[#E2001A]">Stravo</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Node.js has revolutionized backend development by allowing
              JavaScript to run server-side. At Stravo, we leverage Node.js for
              its unmatched performance, scalability, and ability to handle
              real-time applications with ease.
            </p>
          </div>
          <div>
            <img
              src={chartPlaceholder}
              alt="Node.js performance chart"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="px-6 py-20 bg-gray-50 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Build fast and scalable backends with Node.js
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

      {/* KNOW NODE.JS - Enhanced with FAQ Structure */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Everything You Need to Know About Node.js Development
          </h2>
          <p className="text-gray-600 mb-10">
            Before you choose your backend technology partner, here's a comprehensive guide to Node.js and why it powers modern web applications.
          </p>

          <div className="space-y-4">
            {nodeFaqs.map((faq, index) => (
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
            The Three Pillars of Node JS Excellence
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
          With 60+ Node.js backends delivered, we know what performance means.
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          Let's build your next scalable, event-driven application together.
        </p>
        <Link to="/contact">
          <Button
            className="cursor-pointer"
            variant="primary"
            size="top"
            aria-label="Contact us to discuss your Node.js project"
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

export default NodejsDevelopment;