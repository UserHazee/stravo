import React, { memo } from "react";
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
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// --- Image placeholders (replace with your own images later) ---
import chartPlaceholder from "../assets/photo_bp.webp";
import logo1 from "../assets/photo_wd.webp";
import logo2 from "../assets/photo_wd.webp";
import logo3 from "../assets/photo_wd.webp";
import logo4 from "../assets/photo_wd.webp";
import logo5 from "../assets/photo_wd.webp";

// --- HERO ICON (Node.js) ---
const heroIcon = (
  <FontAwesomeIcon
    icon={["fab", "node-js"]}
    size="10x"
    className="text-[#ffffff]"
  />
);

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
          content="Build scalable, real-time backend systems with Stravo’s expert Node.js developers. Fast, reliable, and designed for modern web applications."
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

      {/* KNOW NODE.JS */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Things you need to know about Node.js
          </h2>
          <p className="text-gray-600 mb-10">
            Before choosing your backend technology, here’s why Node.js remains
            a top pick for modern developers:
          </p>
          <div className="space-y-4 border-t border-gray-200">
            {[
              "What is Node.js",
              "Why use Node.js for backend",
              "Node.js scalability benefits",
              "Popular Node.js apps",
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
                  Placeholder — you can expand this later with in-depth details
                  for SEO and client education.
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
            Backend Delivery Excellence Framework
          </h3>
          <h2 className="text-3xl font-bold mb-10">
            The Three Pillars of Node.js Excellence
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
          With 60+ Node.js backends delivered, we know what performance means.
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          Let’s build your next scalable, event-driven application together.
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

export default NodejsDevelopment;
