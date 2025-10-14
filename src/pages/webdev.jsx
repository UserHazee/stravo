// pages/webdev.jsx
import React, { useState, useCallback, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img1WebP from "../assets/photo_wd.webp";
import Img1Fallback from "../assets/photo_wd.avif"; // Keep original as fallback

import Img2WebP from "../assets/photo_wd_1.webp";
import Img2Fallback from "../assets/photo_wd_1.avif"; // Keep original as fallback

import Img3WebP from "../assets/photo_wd_2.webp";
import Img3Fallback from "../assets/photo_wd_2.avif"; // Keep original as fallback
import {
  Code2,
  Users,
  Zap,
  Target,
  Check,
  Plus,
  ArrowRight,
  Minus,
  MessageCircle,
  TrendingUp,
  UserCheck,
  Database,
  Server,
  Cloud as CloudIcon,
  Bug,
  Palette,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Helmet } from "react-helmet-async";

// ========== ALL MEMOIZED COMPONENTS MUST BE OUTSIDE ==========
// UPDATED OptimizedImage Component with Next.js Image
const OptimizedImage = memo(
  ({
    webpSrc,
    fallbackSrc,
    alt,
    className = "",
    width,
    height,
    loading = "lazy",
    priority = false,
  }) => (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <source
        srcSet={fallbackSrc}
        type={
          typeof fallbackSrc === "string" && fallbackSrc.includes(".avif")
            ? "image/avif"
            : typeof fallbackSrc === "string" && fallbackSrc.includes(".png")
            ? "image/png"
            : "image/jpeg"
        }
      />
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? "eager" : loading}
        decoding="async"
        crossOrigin="anonymous"
      />
    </picture>
  )
);

// Memoized Technology Item Component
const TechnologyItem = memo(({ tech }) => (
  <div className="flex flex-col items-center justify-center gap-3 p-6 transition-all bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg group will-change-transform">
    <div className="transition-transform group-hover:scale-110">
      {tech.icon}
    </div>
    <span className="text-sm font-medium text-center text-gray-700">
      {tech.name}
    </span>
  </div>
));

// Memoized Service Card Component
const ServiceCard = memo(({ service }) => (
  <div className="flex flex-col items-center p-10 text-center transition-all bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1 min-h-[400px]">
    <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200">
      <span className="text-xl font-bold text-gray-700">⚙️</span>
    </div>
    <h3 className="mb-4 text-xl font-semibold text-gray-900">
      {service.title}
    </h3>
    <p className="mb-6 text-gray-600 text-sm leading-relaxed max-w-xs">
      {service.description}
    </p>
    <ul className="text-sm text-gray-700 space-y-2 text-left">
      {service.features.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-[#E2001A] mt-[2px]">✔</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
));

// Memoized Help Category Component
const HelpCategory = memo(({ category }) => (
  <div className="p-6 text-center transition-all border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#E2001A] hover:shadow-md">
    <span className="font-semibold text-gray-900">{category}</span>
  </div>
));

// Memoized Testimonial Component
const Testimonial = memo(({ testimonial }) => (
  <div className="p-8 bg-white border border-gray-700 backdrop-blur-sm rounded-xl">
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <span key={i} className="text-[#E2001A] text-xl">
          ★
        </span>
      ))}
    </div>
    <p className="mb-6 text-lg italic text-black">"{testimonial.quote}"</p>
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#4A000F] to-[#E2001A] rounded-full"></div>
      <div>
        <p className="font-semibold text-white">{testimonial.author}</p>
        <p className="text-sm text-black">{testimonial.role}</p>
      </div>
    </div>
  </div>
));

// Memoized FAQ Item Component
const FAQItem = memo(({ faq, isOpen, onToggle }) => (
  <div className="overflow-hidden border border-gray-200 rounded-xl">
    <button
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
    {isOpen && <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>}
  </div>
));

// Static data moved outside component to prevent re-creation on each render
const technologies = [
  {
    name: "React",
    icon: (
      <FontAwesomeIcon
        icon={["fab", "react"]}
        size="2x"
        className="text-[#DD0031]"
      />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <FontAwesomeIcon
        icon={["fab", "node-js"]}
        size="2x"
        className="text-[#DD0031]"
      />
    ),
  },
  {
    name: "Angular",
    icon: (
      <FontAwesomeIcon
        icon={["fab", "angular"]}
        size="2x"
        className="text-[#DD0031]"
      />
    ),
  },
  {
    name: "Vue.js",
    icon: (
      <FontAwesomeIcon
        icon={["fab", "vuejs"]}
        size="2x"
        className="text-[#DD0031]"
      />
    ),
  },
  {
    name: "Php",
    icon: (
      <FontAwesomeIcon
        icon={["fab", "php"]}
        size="2x"
        className="text-[#DD0031]"
      />
    ),
  },
  {
    name: "Java",
    icon: (
      <FontAwesomeIcon
        icon={["fab", "java"]}
        size="2x"
        className="text-[#DD0031]"
      />
    ),
  },
  {
    name: "Python",
    icon: (
      <FontAwesomeIcon
        icon={["fab", "python"]}
        size="2x"
        className="text-[#DD0031]"
      />
    ),
  },
  {
    name: "Bootstrap",
    icon: (
      <FontAwesomeIcon
        icon={["fab", "bootstrap"]}
        size="2x"
        className="text-[#DD0031]"
      />
    ),
  },
  {
    name: "Css",
    icon: (
      <FontAwesomeIcon
        icon={["fab", "css"]}
        size="2x"
        className="text-[#DD0031]"
      />
    ),
  },
  {
    name: "Js",
    icon: (
      <FontAwesomeIcon
        icon={["fab", "js"]}
        size="2x"
        className="text-[#DD0031]"
      />
    ),
  },
  {
    name: "Npm",
    icon: (
      <FontAwesomeIcon
        icon={["fab", "npm"]}
        size="2x"
        className="text-[#DD0031]"
      />
    ),
  },
  {
    name: "Html5",
    icon: (
      <FontAwesomeIcon
        icon={["fab", "html5"]}
        size="2x"
        className="text-[#DD0031]"
      />
    ),
  },
];

const services = [
  {
    title: "Web Development",
    description:
      "Build responsive, high-performance websites tailored to your goals.",
    features: [
      "Custom Frontend Design",
      "Full-Stack Integration",
      "Fast & Secure Build",
    ],
  },
  {
    title: "Web Hosting & Maintenance",
    description:
      "Keep your website live and optimized 24/7 with reliable hosting.",
    features: [
      "Daily Backups",
      "Server Security Monitoring",
      "Performance Optimization",
    ],
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your visibility and get found by your target customers.",
    features: ["Keyword Research", "Content Strategy", "Analytics Tracking"],
  },
];

const teamRoles = [
  {
    name: "Frontend",
    icon: <Code2 className="w-10 h-10" />,
    color: "from-[#4A000F] to-[#E2001A]",
  },
  {
    name: "Backend",
    icon: <Server className="w-10 h-10" />,
    color: "from-[#4A000F] to-[#E2001A]",
  },
  {
    name: "DevOps",
    icon: <CloudIcon className="w-10 h-10" />,
    color: "from-[#4A000F] to-[#E2001A]",
  },
  {
    name: "QA",
    icon: <Bug className="w-10 h-10" />,
    color: "from-[#4A000F] to-[#E2001A]",
  },
  {
    name: "Design",
    icon: <Palette className="w-10 h-10" />,
    color: "from-[#4A000F] to-[#E2001A]",
  },
];

const pillars = [
  {
    icon: <MessageCircle className="w-10 h-10" />,
    title: "Communication & Project Delivery",
    description:
      "Transparent communication, agile methodology, regular updates.",
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Business-oriented Implementation Decisions",
    description:
      "Focus on ROI, scalability, and alignment with business goals.",
  },
  {
    icon: <UserCheck className="w-10 h-10" />,
    title: "Exceptional People Experience",
    description:
      "Dedicated teams with high ownership and technical excellence.",
  },
];

const helpCategories = [
  "Custom Web Apps",
  "Cross-platform Solutions",
  "SaaS Products",
  "Digital Strategy",
  "Data-driven Apps",
  "SEO Optimization",
  "Landing Pages",
  "Growth-focused Apps",
];

const testimonials = [
  {
    author: "Sarah Johnson",
    role: "CEO, TechFlow SaaS",
    quote:
      "BrainHub helped us scale quickly with a reliable development team. Their expertise in React and Node.js was exactly what we needed to launch our platform ahead of schedule.",
    rating: 5,
  },
  {
    author: "Michael Chen",
    role: "CTO, FinanceCore Startup",
    quote:
      "They delivered complex integrations faster than expected. The team's understanding of financial APIs and security requirements was impressive. Highly recommend for fintech projects.",
    rating: 5,
  },
  {
    author: "Emily Rodriguez",
    role: "Product Owner, ShopSmart E-commerce",
    quote:
      "The UX improvements significantly boosted our conversion rates. BrainHub's design team created an intuitive shopping experience that our customers love. Sales increased by 40%.",
    rating: 5,
  },
];

const stats = [
  { label: "98% Client Satisfaction" },
  { label: "200+ Projects Delivered" },
  { label: "5+ Years Experience" },
  { label: "24/7 Support" },
];

const faqs = [
  {
    question: "How long does web development take?",
    answer:
      "Depends on project complexity – from weeks to several months. A simple landing page might take 2-4 weeks, while a complex web application could take 3-6 months or more.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer comprehensive maintenance, monitoring, and scaling services. Our team ensures your application stays secure, performant, and up-to-date with the latest technologies.",
  },
  {
    question: "Can you modernize my legacy app?",
    answer:
      "Absolutely, we specialize in migration and refactoring. We can help you move from outdated technologies to modern frameworks, improve performance, and add new features.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with a wide range of modern technologies including React, Vue, Angular, Node.js, Python, Django, and more. We choose the best tech stack based on your specific needs.",
  },
];

const WebDev = () => {
  const [openFaq, setOpenFaq] = useState(null);

  // Optimized FAQ toggle handler with useCallback
  const toggleFaq = useCallback(
    (index) => {
      setOpenFaq(openFaq === index ? null : index);
    },
    [openFaq]
  );

  // Optimized button handler
  const handleGetStarted = useCallback(() => {
    console.log("Get Started clicked");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Web Development Services | Stravo</title>
        <meta
          name="description"
          content="Professional web development services by Stravo. We design, build, and maintain modern, scalable websites tailored for your business success."
        />
        <meta
          name="keywords"
          content="web development, web design, full stack development, React, Node.js, custom websites, Stravo"
        />
        <meta property="og:title" content="Web Development Services | Stravo" />
        <meta
          property="og:description"
          content="Stravo builds responsive, fast, and scalable web solutions — from concept to launch. Design, Code, and Deliver."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stravo.com/webdevelopment" />
        <meta property="og:image" content="https://stravo.com/og/webdev.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Development Services | Stravo"
        />
        <meta
          name="twitter:description"
          content="Build your business online with Stravo’s expert web development team. We design, code, and deliver."
        />
        <meta
          name="twitter:image"
          content="https://stravo.com/og/webdev.webp"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Stravo Web Development",
              "url": "https://stravo.com",
              "description": "Stravo provides professional web development and design services.",
              "publisher": {
                "@type": "Organization",
                "name": "Stravo",
                "logo": "https://stravo.com/logo.png"
              }
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FFF5F5] to-white sm:px-6 lg:px-20 font-outfit">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider text-white uppercase bg-[#E2001A] rounded-full">
                Software Delivery Services
              </span>

              <h1 className="text-5xl font-medium leading-tight tracking-tight text-gray-900 lg:text-6xl xl:text-7xl">
                Professional Web Development for{" "}
                <span className="text-[#E2001A]">Your Business Needs.</span>
              </h1>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 lg:text-xl">
                  Get scalable, interactive web applications built with an
                  end-to-end delivery approach from frontend and backend to
                  infrastructure.
                </p>
              </div>
            </div>

            {/* Right Column - Technology Grid */}
            <div className="grid grid-cols-3 gap-4 lg:grid-cols-4">
              {technologies.map((tech, idx) => (
                <TechnologyItem key={idx} tech={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#E2001A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-gradient-to-tr from-gray-200/20 to-transparent blur-3xl" />
      </section>
      {/* Services Grid Section */}
      <section className="px-6 py-20 bg-white font-outfit">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
              We'll bring your product to life from start to finish.
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              From web development and hosting to SEO optimization — discover
              how we can help you build, launch, and grow your digital presence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure Section - New Layout */}
      <section className="px-4 py-20 bg-white sm:px-6 lg:px-20 font-outfit">
        <div className="mx-auto max-w-7xl space-y-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Full-stack teams tailored for your needs
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Our team includes frontend, backend, DevOps, and QA engineers
              working together to deliver complete solutions — seamlessly from
              concept to launch.
            </p>
          </div>

          {/* Row 1 */}
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-md aspect-[3/2]">
              <OptimizedImage
                webpSrc={Img1WebP}
                fallbackSrc={Img1Fallback}
                alt="Developers at work"
                className="object-cover w-full h-full"
                width={1154}
                height={768}
                loading="eager"
                priority={true}
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Collaborative Approach
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-[#E2001A] flex-shrink-0" />
                  <span>
                    Each member contributes specialized expertise while
                    maintaining project unity.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-[#E2001A] flex-shrink-0" />
                  <span>
                    Transparent communication and agile methods ensure on-time
                    project delivery.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Text */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Dedicated QA and Testing
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-[#E2001A] flex-shrink-0" />
                  <span>
                    Rigorous manual and automated testing to guarantee stability
                    and quality.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-[#E2001A] flex-shrink-0" />
                  <span>
                    Continuous monitoring and bug tracking for quick issue
                    resolution.
                  </span>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-2xl shadow-md aspect-[3/2]">
              <OptimizedImage
                webpSrc={Img2WebP}
                fallbackSrc={Img2Fallback}
                alt="QA Testing"
                className="object-cover w-full h-full"
                width={1170}
                height={780}
                loading="lazy"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-md aspect-[3/2]">
              <OptimizedImage
                webpSrc={Img3WebP}
                fallbackSrc={Img3Fallback}
                alt="Team collaboration"
                className="object-cover w-full h-full"
                width={1147}
                height={763}
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Collaborative Development
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-[#E2001A] flex-shrink-0" />
                  <span>
                    Frontend and backend developers work closely to ensure
                    seamless integration.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-[#E2001A] flex-shrink-0" />
                  <span>
                    DevOps engineers maintain scalable deployment pipelines for
                    continuous delivery.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="px-4 py-20 bg-gray-50 sm:px-6 lg:px-20 font-outfit">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
              The Three Pillars of Excellence
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-10 text-center bg-white shadow-lg rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-full text-[#E2001A]">
                  {pillar.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {pillar.title}
                </h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Can Help With Section */}
      <section className="px-4 py-20 bg-white sm:px-6 lg:px-20 font-outfit">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
              What we can help you with
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {helpCategories.map((category, idx) => (
              <HelpCategory key={idx} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-[#4A000F] to-[#E2001A] sm:px-6 lg:px-20 font-outfit">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
              What our Clients say about us
            </h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it. Here's what our clients have to
              say about working with BrainHub.
            </p>
          </div>

          <div className="grid gap-8 mb-16 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <Testimonial key={idx} testimonial={testimonial} />
            ))}
          </div>

          <div className="p-10 text-center bg-white border border-gray-700 backdrop-blur-sm rounded-2xl">
            <h3 className="mb-6 text-3xl font-bold text-black">
              Join 200+ satisfied clients
            </h3>
            <p className="mb-8 text-lg text-black">
              From startups to enterprise companies, we've helped businesses of
              all sizes achieve their digital goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3 bg-white border-2 border-gray-700 bg-gradient-to-br from-[#4A000F] to-[#E2001A] rounded-full"
                >
                  <span className="font-semibold text-white">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 py-20 bg-gray-50 sm:px-6 lg:px-20 font-outfit">
        <div className="max-w-3xl mx-auto">
          <div className="p-10 bg-white shadow-xl rounded-2xl">
            <h2 className="mb-4 text-3xl font-bold text-center text-gray-900 lg:text-4xl">
              Looking to build a web app?
            </h2>
            <p className="mb-8 text-lg text-center text-gray-600">
              Let's talk about your project and how we can help bring your
              vision to life with our expert development team.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:border-transparent"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:border-transparent"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#E2001A] hover:bg-[#A0001E] text-white text-lg font-semibold rounded-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                Get a Proposal →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-20 bg-white sm:px-6 lg:px-20 font-outfit">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                faq={faq}
                isOpen={openFaq === idx}
                onToggle={() => toggleFaq(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDev;
