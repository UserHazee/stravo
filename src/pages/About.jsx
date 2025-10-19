import React, { memo, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import ImagePreloader from "../components/Preloader/ImagePreload";

import aboutImg from "../assets/photo_wd.webp";
import team1 from "../assets/1000483218.webp";
import team2 from "../assets/1000483218.webp";
import team3 from "../assets/1000483218.webp";
import team4 from "../assets/1000483218.webp";
import team5 from "../assets/1000483218.webp";
import team6 from "../assets/1000483218.webp";

const teamMembers = [
  { name: "Angel Rivera", role: "Founder & Lead Developer", img: team1 },
  { name: "Mae Orbigoso", role: "UI/UX Designer", img: team2 },
  { name: "John Cruz", role: "Frontend Engineer", img: team3 },
  { name: "Alexa Vance", role: "Project Manager", img: team4 },
  { name: "Jacob Rivera", role: "Backend Engineer", img: team5 },
  { name: "Leah Torres", role: "Marketing Specialist", img: team6 },
];

const About = memo(() => {
  
const aboutRef = useRef(null);
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
        item: "https://stravoph.netlify.app/about",
      },
    ],
  };
  return (
    <div  ref={aboutRef} className="min-h-screen bg-white text-gray-900 font-outfit">
      <Helmet>
        <title>
          About Us | STRAVO - We Build Your Machine Behind Your Vision
        </title>
        <meta
          name="description"
          content="STRAVO is a full-stack technology company that builds scalable digital products through design, code, and innovation. Meet our passionate team driving impactful solutions."
        />
        <meta
          name="keywords"
          content="Stravo, Web Development, Full Stack, UI/UX, Software Engineering, Startup, Tech Agency, Philippines"
        />
        <meta property="og:title" content="About STRAVO" />
        <meta
          property="og:description"
          content="We build your machine behind your vision — Design, Code, and Deliver."
        />
        <meta property="og:image" content={aboutImg} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="STRAVO" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
       <ImagePreloader
        images={[aboutImg, team1, team2, team3, team4, team5, team6]}
        mode="auto"          // switches preload → prefetch automatically
        priority="high"      // first visit = LCP optimized
        delay={250}          // small delay before preload starts
        rootRef={aboutRef}   // 👁 triggers when section visible
      />
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
          <li className="text-[#E2001A] font-medium">About</li>
        </ol>
      </nav>

      {/* HERO SECTION */}
      <header className="bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white pt-4 pb-28 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            A Company That Solves Complex <br /> Technical Problems
          </h1>
          <p className="max-w-3xl text-white/80 text-lg">
            Stravo is a passionate team of developers, designers, and innovators
            helping businesses turn ambitious ideas into successful digital
            products.
          </p>
        </div>
      </header>

      {/* MISSION SECTION */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#E2001A] mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our mission is to deliver reliable and scalable technology
              solutions that empower brands to succeed in a fast-changing
              digital world. We believe that every idea deserves precise
              execution — built with clarity, strategy, and quality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From startups to enterprises, we aim to provide technology that’s
              impactful, accessible, and built to last. Our team values honesty,
              innovation, and shared success.
            </p>
          </div>
          <div>
            <img
              src={aboutImg}
              alt="Stravo team working together"
              loading="lazy"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-[#E2001A]">
            Our Approach is Based on 3 Pillars
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <article>
              <h4 className="text-xl font-semibold mb-3">
                Technical Excellence
              </h4>
              <p className="text-gray-700">
                We combine clean code, scalable architecture, and cutting-edge
                frameworks to deliver fast, secure, and maintainable products.
              </p>
            </article>
            <article>
              <h4 className="text-xl font-semibold mb-3">
                Partnership Culture
              </h4>
              <p className="text-gray-700">
                We work hand-in-hand with clients, treating every project as a
                shared journey to success.
              </p>
            </article>
            <article>
              <h4 className="text-xl font-semibold mb-3">
                Transparent Process
              </h4>
              <p className="text-gray-700">
                From planning to delivery, our agile process keeps communication
                clear and progress measurable.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PRINCIPLES SECTION */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#E2001A] mb-10">
            Stravo’s Principles for Project Success
          </h2>
          <ul className="space-y-6 text-gray-700">
            <li>
              <strong className="text-[#E2001A]"> Collaboration:</strong>{" "}
              Every idea is better when built together. We align design,
              development, and strategy teams for unified results.
            </li>
            <li>
              <strong className="text-[#E2001A]">
                 Quality Engineering:
              </strong>{" "}
              Every line of code meets performance, security, and scalability
              standards.
            </li>
            <li>
              <strong className="text-[#E2001A]">
                 Continuous Innovation:
              </strong>{" "}
              We adopt emerging tools and techniques to help your product stay
              ahead of the curve.
            </li>
          </ul>
        </div>
      </section>

      {/* PARTNERSHIP SECTION */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#E2001A] mb-4">
              Stravo + Clients: Building the Future Together
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our partnerships go beyond project delivery — we help our clients
              grow strategically through innovation, data, and technology.
              Together, we aim to create products that not only work but make an
              impact.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-[#4A000F]/10 rounded-full w-64 h-64 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#4A000F] to-[#E2001A] rounded-full shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#E2001A]">
            Meet the People of Stravo
          </h2>
          <p className="text-gray-600 mb-10">
            Our team is a blend of engineers, designers, and creators — working
            together to deliver the best technology experiences.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl shadow hover:shadow-md transition overflow-hidden p-6"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-60 object-cover rounded-xl mb-4"
                />
                <h4 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

export default About;
