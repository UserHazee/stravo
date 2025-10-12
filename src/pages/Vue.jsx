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
    className="text-[#ddcbca]"
  />
);

// --- Features data ---
const features = [
  {
    icon: <Code2 className="w-6 h-6 text-[#42b883]" />,
    title: "Reactive Components",
    description:
      "Vue’s reactivity system ensures your app updates instantly when data changes — without unnecessary rendering.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#42b883]" />,
    title: "Lightweight & Fast",
    description:
      "Vue’s small footprint and virtual DOM make it one of the fastest frameworks for modern web apps.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#42b883]" />,
    title: "Strong Community",
    description:
      "Vue is supported by a passionate global community, continuously improving the ecosystem and plugins.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#42b883]" />,
    title: "Progressive Framework",
    description:
      "Vue can be adopted incrementally — use it to enhance parts of a site or power an entire SPA.",
  },
  {
    icon: <Target className="w-6 h-6 text-[#42b883]" />,
    title: "Versatile Integration",
    description:
      "Vue easily integrates with Laravel, Node.js, and REST APIs — making it flexible for all project types.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#42b883]" />,
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
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#35495e] to-[#42b883] text-white sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Vue.js Development Services
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Scalable. Efficient. Modern. Build seamless, dynamic interfaces
              and single-page applications powered by Vue.js.
            </p>
            <Button className="bg-white text-[#42b883] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg">
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

      {/* WHY WE USE VUE */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why we use Vue.js at{" "}
              <span className="text-[#42b883]">Stravo</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Vue.js is a progressive JavaScript framework known for its
              simplicity and flexibility. At Stravo, we use Vue to deliver
              interactive, maintainable, and performant web solutions your
              users will love.
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
          <h3 className="text-sm uppercase text-[#42b883] mb-3 tracking-wider">
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
                <h4 className="text-lg font-semibold mb-4 text-[#42b883]">
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
      <section className="px-6 py-20 text-center bg-gradient-to-br from-[#35495e] to-[#42b883] text-white">
        <h2 className="text-3xl font-bold mb-4">
          With 50+ Vue.js projects delivered, Stravo can help bring yours to
          life.
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          Let’s collaborate to build intuitive and high-performing Vue
          applications.
        </p>
        <Button className="bg-white text-[#42b883] hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg">
          Book a Tech Call
        </Button>
      </section>

      <Footer />
    </div>
  );
});

export default Vue;
