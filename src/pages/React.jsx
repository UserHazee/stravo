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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// --- Image placeholders (replace with your own later) ---
import chartPlaceholder from "../assets/photo_bp.webp";
import logo1 from "../assets/photo_wd.webp";
import logo2 from "../assets/photo_wd.webp";
import logo3 from "../assets/photo_wd.webp";
import logo4 from "../assets/photo_wd.webp";
import logo5 from "../assets/photo_wd.webp";

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
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white sm:px-6 lg:px-20">
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
            <Button className="bg-white text-[#E2001A] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Things you need to know about React
          </h2>
          <p className="text-gray-600 mb-10">
            Before you choose your React development partner, here’s a quick
            guide:
          </p>

          <div className="space-y-4 border-t border-gray-200">
            {[
              "What is React",
              "React benefits",
              "React use cases",
              "React app examples",
            ].map((item, idx) => (
              <details
                key={idx}
                className="border-b border-gray-200 py-4 group cursor-pointer"
              >
                <summary className="flex justify-between items-center text-gray-800 font-medium">
                  {item}
                  <span className="group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-600 mt-2">
                  Placeholder content — you can expand on this to explain each
                  topic in more depth for your visitors.
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
          With 50+ React projects under our belt, there’s a high chance we can
          help with yours.
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          Discuss your most pressing problem with our technical advisors today.
        </p>
        <Button className="bg-white text-[#E2001A] hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg">
          Book a Tech Call
        </Button>
      </section>

      <Footer />
    </div>
  );
});

export default ReactDevelopment;
