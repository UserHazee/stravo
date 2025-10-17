// App.jsx — STRAVO Home Page (Fully Optimized for SEO + Accessibility)
import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlanetHero } from "@/components/ui/planet";
import { ProcessSection } from "./components/ui/next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HashLink } from "react-router-hash-link";
import {
  Code2,
  Smartphone,
  Cloud,
  BriefcaseBusiness,
  Workflow,
  Frame,
} from "lucide-react";

import pic1 from "./assets/1000483199.webp";
import pic2 from "./assets/1000483218.webp";
import pic3 from "./assets/1000483230 (1).webp";
import pic4 from "./assets/1752798249832.jpg";
import pic5 from "./assets/Gemini_Mullet.webp";
import aboutImg from "./assets/photo_wd.webp";
import { Link } from "react-router-dom";

// === Data ===
const services = [
  {
    icon: <Code2 className="w-7 h-7" aria-hidden="true" />,
    title: "Web Development",
    description:
      "Build modern, responsive, and user-friendly websites tailored to your business needs using the latest web technologies like ReactJS and Node.js.",
  },
  {
    icon: <Frame className="w-7 h-7" aria-hidden="true" />,
    title: "Custom Web Applications",
    description:
      "Develop tailored web-based solutions to meet your unique business requirements — from workflow automation to customer experience enhancement.",
  },
  {
    icon: <Smartphone className="w-7 h-7" aria-hidden="true" />,
    title: "Responsive Web Design",
    description:
      "Ensure your website looks and performs beautifully across all devices — desktop, tablet, and mobile.",
  },
  {
    icon: <Cloud className="w-7 h-7" aria-hidden="true" />,
    title: "Website Hosting & Maintenance",
    description:
      "Worry-free hosting and regular maintenance to keep your website secure, fast, and always up-to-date.",
  },
  {
    icon: <BriefcaseBusiness className="w-7 h-7" aria-hidden="true" />,
    title: "Business Websites",
    description:
      "Launch a professional, fast-loading website that elevates your brand and attracts customers.",
  },
  {
    icon: <Workflow className="w-7 h-7" aria-hidden="true" />,
    title: "Integration & Automation",
    description:
      "Connect your website with third-party tools like Google Calendar, Mailchimp, or payment gateways for seamless automation.",
  },
];

const team = [
  { name: "Zeek Rivera", role: "CEO & Founder", initials: "ZR", img: pic1 },
  { name: "Zeek Rivera", role: "CTO", initials: "ZR", img: pic2 },
  { name: "Zeek Rivera", role: "VP Engineering", initials: "ZR", img: pic3 },
  { name: "Zeek Rivera", role: "Head of Design", initials: "ZR", img: pic4 },
  { name: "Zeek Rivera", role: "Chief Architect", initials: "ZR", img: pic5 },
];

const clientLogos = ["🔜", "🔜", "🔜", "🔜", "🔜", "🔜"];

const App = memo(() => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-outfit text-[#1A1A1A]">
      {/* SEO */}
      <Helmet>
        <html lang="en-PH" /> {/* Accessibility: language context */}
        <title>STRAVO | We Build Your Machine Behind Your Vision</title>
        <meta
          name="description"
          content="STRAVO builds scalable web and software solutions that align design, code, and delivery. Empowering startups and enterprises through innovation and technology."
        />
        <meta
          name="keywords"
          content="Stravo, Web Development, Software Engineering, ReactJS, NodeJS, Startup Solutions, Philippines Tech Agency"
        />
        <meta property="og:title" content="STRAVO | Design, Code, and Deliver" />
        <meta
          property="og:description"
          content="We build your machine behind your vision — design, code, and deliver."
        />
        <meta property="og:image" content={aboutImg} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="STRAVO" />
      </Helmet>

      {/* 🧭 Skip Link for keyboard/screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:p-2 focus:rounded focus:ring-2 focus:ring-[#A0001E]"
      >
        Skip to main content
      </a>

      {/* Navbar */}
      <Navbar role="navigation" aria-label="Main Navigation" />

      {/* MAIN */}
      <main id="main-content">
        {/* HERO */}
        <header
          className="px-4 pt-32 pb-12 sm:px-6 lg:px-20 bg-white"
          role="banner"
        >
          <div className="mx-auto max-w-7xl grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-normal">
                Top <span className="text-[#A0001E]">1% IT Talent</span> For
                Your Software Development Needs
              </h1>
              <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
                We help startups and Fortune 500 companies build digital
                products through staff augmentation and software outsourcing
                services.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Link to="/contact" aria-label="Email STRAVO">
                  <Button
                    variant="default"
                    className="w-full sm:w-auto bg-[#A0001E] hover:bg-[#E2001A] border-2 border-[#A0001E] hover:border-[#E2001A] text-white px-6 sm:px-8 py-6 text-sm sm:text-base rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    Email Us
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-6 sm:px-8 py-6 text-sm sm:text-base rounded-lg transition-all hover:-translate-y-1"
                >
                  <HashLink to="#services" smooth aria-label="Jump to our services section">
                    Our Services
                  </HashLink>
                </Button>
              </div>
            </div>

            <figure className="relative h-[400px] lg:h-[500px]" aria-label="STRAVO brand graphic background">
              <div className="absolute top-10 right-0 w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-[#4A000F] to-[#E2001A] rounded-3xl" />
              <div className="absolute bottom-6 left-0 w-48 h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-[#000000] to-[#090f24] rounded-3xl" />
            </figure>
          </div>
        </header>

        <PlanetHero role="region" aria-label="Planet-themed hero visual" />
        <ProcessSection role="region" aria-label="Our process section" />

        {/* CLIENTS */}
        <section
          className="px-4 py-12 sm:px-6 lg:px-20 bg-white"
          aria-labelledby="clients-heading"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2
              id="clients-heading"
              className="text-sm uppercase tracking-wider text-[#6B6B6B] font-semibold mb-8"
            >
              Trusted by Leading Companies
            </h2>
            <ul className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-items-center" role="list">
              {clientLogos.map((logo, i) => (
                <li
                  key={i}
                  className="flex items-center justify-center w-20 h-20 text-4xl transition-all grayscale"
                  aria-label="Client logo placeholder"
                >
                  {logo}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="py-16 lg:py-24 px-4 sm:px-6 lg:px-20 bg-[#F8F9FA]"
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto">
            <header className="mb-16 text-center">
              <h2 id="services-heading" className="text-3xl lg:text-5xl font-semibold mb-4">
                Our Services
              </h2>
              <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
                Comprehensive technology solutions tailored to your business
                needs.
              </p>
            </header>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={index}
                  role="article"
                  aria-labelledby={`service-${index}`}
                  className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-[#000000] to-[#090f24]"
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#4A000F] to-[#E2001A] flex items-center justify-center text-white mb-6 rounded-full">
                      {service.icon}
                    </div>
                    <h3 id={`service-${index}`} className="mb-3 text-xl font-medium text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-white">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section
          id="team"
          className="px-4 py-16 sm:px-6 lg:px-20 lg:py-24 bg-white"
          aria-labelledby="team-heading"
        >
          <div className="max-w-7xl mx-auto text-center">
            <header className="mb-16">
              <h2 id="team-heading" className="text-3xl lg:text-5xl font-semibold mb-4">
                Meet Our Leadership
              </h2>
              <p className="text-lg text-[#6B6B6B]">
                Experienced professionals driving innovation and excellence.
              </p>
            </header>

            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8" role="list">
              {team.map((member, index) => (
                <li key={index} className="text-center transition-transform hover:-translate-y-2">
                  <figure>
                    <Avatar className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4 bg-gradient-to-br from-[#E5E5E5] to-[#F8F9FA] text-[#6B6B6B] text-2xl font-semibold">
                      <AvatarImage
                        src={member.img}
                        alt={`${member.name}, ${member.role}`}
                        loading="lazy"
                      />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <figcaption>
                      <h4 className="text-base lg:text-lg font-semibold mb-1">
                        {member.name}
                      </h4>
                      <p className="text-sm text-[#6B6B6B]">{member.role}</p>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer role="contentinfo" />
    </div>
  );
});

export default App;
