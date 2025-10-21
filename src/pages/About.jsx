import React, { memo, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ChevronRight,
  Home,
  Code2,
  ShieldCheck,
  Users2,
  Rocket,
  Award,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";

import aboutImg from "../assets/photo_wd.webp";
import team1 from "../assets/1000483218.webp";
import team2 from "../assets/1000483218.webp";
import team3 from "../assets/1000483218.webp";
import team4 from "../assets/1000483218.webp";
import team5 from "../assets/1000483218.webp";
import team6 from "../assets/1000483218.webp";

const teamMembers = [
  { name: "Zeek Rivera", role: "Founder & Lead Developer", img: team1 },
  { name: "Zeek Rivera", role: "UI/UX Designer", img: team2 },
  { name: "Zeek Rivera", role: "Frontend Engineer", img: team3 },
  { name: "Zeek Rivera", role: "Project Manager", img: team4 },
  { name: "Zeek Rivera", role: "Backend Engineer", img: team5 },
  { name: "Zeek Rivera", role: "Marketing Specialist", img: team6 },
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
    <div
      ref={aboutRef}
      className="min-h-screen bg-white text-gray-900 font-outfit"
    >
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

        <link rel="prefetch" href={aboutImg} as="image" type="image/webp" />
        <link rel="prefetch" href={team1} as="image" type="image/webp" />
        <link rel="prefetch" href={team2} as="image" type="image/webp" />
        <link rel="prefetch" href={team3} as="image" type="image/webp" />
        <link rel="prefetch" href={team4} as="image" type="image/webp" />
        <link rel="prefetch" href={team5} as="image" type="image/webp" />
        <link rel="prefetch" href={team6} as="image" type="image/webp" />
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
          <li className="text-[#E2001A] font-medium">About</li>
        </ol>
      </nav>

      {/* HERO SECTION - Enhanced with overlay design */}
      <header className="relative bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white pt-4 pb-28 px-6 sm:px-10 lg:px-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E2001A]/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto space-y-6">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-4">
            <span className="text-sm font-medium">About Stravo</span>
          </div>
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

      {/* MISSION SECTION - Card overlay design */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#E2001A]/10 rounded-3xl"></div>
              <img
                src={aboutImg}
                alt="Stravo team working together"
                loading="lazy"
                className="relative rounded-3xl shadow-2xl w-full object-cover border-4 border-white"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#E2001A] to-[#A0001E] rounded-3xl opacity-20"></div>
            </div>

            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm uppercase tracking-wider text-[#E2001A] font-semibold">
                  Our Mission
                </span>
                <div className="w-12 h-1 bg-[#E2001A] mt-2"></div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Empowering Brands Through Technology
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to deliver reliable and scalable technology
                solutions that empower brands to succeed in a fast-changing
                digital world. We believe that every idea deserves precise
                execution — built with clarity, strategy, and quality.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From startups to enterprises, we aim to provide technology
                that's impactful, accessible, and built to last. Our team values
                honesty, innovation, and shared success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH SECTION - Modern card design with numbers */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Approach is Based on{" "}
              <span className="text-[#E2001A]">3 Pillars</span>
            </h2>
            <p className="text-gray-600">
              Building excellence through proven methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-[#E2001A] to-[#A0001E] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                01
              </div>
              <h4 className="text-xl font-bold mb-4 mt-4 text-gray-900">
                Technical Excellence
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We combine clean code, scalable architecture, and cutting-edge
                frameworks to deliver fast, secure, and maintainable products.
              </p>
            </article>

            <article className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-[#E2001A] to-[#A0001E] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                02
              </div>
              <h4 className="text-xl font-bold mb-4 mt-4 text-gray-900">
                Partnership Culture
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We work hand-in-hand with clients, treating every project as a
                shared journey to success.
              </p>
            </article>

            <article className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-[#E2001A] to-[#A0001E] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                03
              </div>
              <h4 className="text-xl font-bold mb-4 mt-4 text-gray-900">
                Transparent Process
              </h4>
              <p className="text-gray-600 leading-relaxed">
                From planning to delivery, our agile process keeps communication
                clear and progress measurable.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PRINCIPLES SECTION - Accent bar design */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Stravo's Principles for{" "}
            <span className="text-[#E2001A]">Project Success</span>
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start group">
              <div className="w-1.5 h-full bg-gradient-to-b from-[#E2001A] to-[#A0001E] rounded-full group-hover:w-2 transition-all"></div>
              <div className="flex-1 bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#E2001A] mb-3">
                  Collaboration
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every idea is better when built together. We align design,
                  development, and strategy teams for unified results.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="w-1.5 h-full bg-gradient-to-b from-[#E2001A] to-[#A0001E] rounded-full group-hover:w-2 transition-all"></div>
              <div className="flex-1 bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#E2001A] mb-3">
                  Quality Engineering
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every line of code meets performance, security, and
                  scalability standards.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="w-1.5 h-full bg-gradient-to-b from-[#E2001A] to-[#A0001E] rounded-full group-hover:w-2 transition-all"></div>
              <div className="flex-1 bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#E2001A] mb-3">
                  Continuous Innovation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We adopt emerging tools and techniques to help your product
                  stay ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP SECTION - Split design with accent */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm uppercase tracking-wider text-[#E2001A] font-semibold">
                  Partnership
                </span>
                <div className="w-12 h-1 bg-[#E2001A] mt-2"></div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Stravo + Clients: <br />
                <span className="text-[#E2001A]">
                  Building the Future Together
                </span>
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our partnerships go beyond project delivery — we help our
                clients grow strategically through innovation, data, and
                technology. Together, we aim to create products that not only
                work but make an impact.
              </p>
            </div>

            <div className="flex justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E2001A]/10 to-transparent rounded-full blur-3xl"></div>
              <div className="relative bg-white rounded-full w-80 h-80 flex items-center justify-center shadow-2xl border-8 border-gray-50">
                <div className="w-48 h-48 bg-gradient-to-br from-[#4A000F] via-[#E2001A] to-[#A0001E] rounded-full shadow-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION - Modern grid with hover effects */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm uppercase tracking-wider text-[#E2001A] font-semibold">
                Our Team
              </span>
              <div className="w-12 h-1 bg-[#E2001A] mt-2 mx-auto"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Meet the People of <span className="text-[#E2001A]">Stravo</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our team is a blend of engineers, designers, and creators —
              working together to deliver the best technology experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E2001A]/10 rounded-bl-full"></div>
                <div className="p-6">
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={member.img}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4A000F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#E2001A] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* WHY CHOOSE STRAVO SECTION - After Mission Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white font-outfit">
        <div className="max-w-7xl mx-auto">
          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-6">
            {/* HEADER */}
            <div className="flex flex-col justify-center p-8 sm:col-span-2 lg:col-span-2 lg:row-start-1">
              <p className="text-sm text-gray-500 mb-2 tracking-wide uppercase">
                Our Core Strengths
              </p>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                WHY PARTNER WITH <br />
                <span className="text-[#E2001A]">STRAVO</span> FOR <br />
                YOUR NEXT PROJECT
              </h2>
            </div>

            {/* CARD 1 */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 text-white p-8 rounded-2xl shadow-md lg:col-start-1 lg:row-start-2">
              <Code2 className="w-10 h-10 mb-4 text-[#E2001A]" />
              <p className="text-lg leading-relaxed">
                <strong>Modern tech stack expertise</strong> — we build fast,
                scalable, and reliable solutions with React, Node.js, and
                beyond.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 text-white p-8 rounded-2xl shadow-md lg:col-start-2 lg:row-start-2">
              <ShieldCheck className="w-10 h-10 mb-4 text-[#E2001A]" />
              <p className="text-lg leading-relaxed">
                <strong>Quality you can trust</strong> — every product is built
                with secure code, detailed testing, and transparent delivery.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 text-white p-8 rounded-2xl shadow-md lg:col-start-3 lg:row-start-1">
              <Award className="w-10 h-10 mb-4 text-[#E2001A]" />
              <p className="text-lg leading-relaxed">
                <strong>Proven track record</strong> — our team has successfully
                launched digital products across industries and scales.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 text-white p-8 rounded-2xl shadow-md lg:col-start-1 lg:row-start-3">
              <Rocket className="w-10 h-10 mb-4 text-[#E2001A]" />
              <p className="text-lg leading-relaxed">
                <strong>From idea to launch</strong> — we guide startups and
                brands through the entire product journey, step by step.
              </p>
            </div>

            {/* CARD 5 */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 text-white p-8 rounded-2xl shadow-md lg:col-start-2 lg:row-start-3">
              <Users2 className="w-10 h-10 mb-4 text-[#E2001A]" />
              <p className="text-lg leading-relaxed">
                <strong>Collaborative approach</strong> — we work as an
                extension of your team, ensuring clear communication and smooth
                delivery.
              </p>
            </div>

            {/* RED FEATURE CARD */}
            <div className="bg-gradient-to-br from-[#E2001A] to-[#B00018] text-white p-8 rounded-2xl shadow-lg border border-white/20 lg:col-start-3 lg:row-start-2 lg:row-span-2 flex flex-col justify-center">
              <p className="text-xs uppercase mb-2 opacity-80 tracking-widest">
                We Stand For
              </p>
              <h3 className="font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] space-y-1">
                <span className="block">INNOVATION</span>
                <span className="block">INTEGRITY</span>
                <span className="block">TEAMWORK</span>
                <span className="block">PASSION</span>
                <span className="block">IMPACT</span>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
});

export default About;
