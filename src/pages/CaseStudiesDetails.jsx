import React, { memo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; // ✅ Added Link
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronRight, ArrowRight, BookOpenCheck } from "lucide-react";
import { Button } from "../components/ui/button";
import { Helmet } from "react-helmet-async"; // ✅ For SEO metadata
import case1 from "../assets/photo_wd.webp";
import case2 from "../assets/photo_bp.webp";

// ✅ Mock dataset (replace later with API/backend)
const caseStudies = [
  {
    id: "big-four",
    title:
      "How we developed 3 dedicated digital products for one of the Big Four Companies",
    subtitle: "TACTICAL STRATEGY & FULL-STACK DEVELOPMENT",
    overview:
      "Stravo partnered with a global Big Four company to modernize their digital tools for compliance, analytics, and reporting — driving scalability and cross-department efficiency.",
    results: [
      "Reduced development time by 40%",
      "Enabled 100+ concurrent data users",
      "Launched 3 major applications in 6 months",
    ],
    image: case1,
    imageAlt: "Enterprise digital product development case study by STRAVO",
    challenges: [
      "Legacy systems with outdated technology stack",
      "Security and compliance requirements",
      "Scalable design for multi-country deployment",
    ],
    solutions: [
      "Migrated old monolith to modular microservices using Node.js & PHP",
      "Built modern frontend in React.js with optimized UX",
      "Integrated automated testing and CI/CD pipelines",
    ],
    technologies: ["React.js", "Node.js", "PHP", "Docker", "AWS", "Figma"],
  },
  {
    id: "stralo-performance",
    title: "How Stralo improved their React app performance by 50%",
    subtitle: "FRONTEND PERFORMANCE ENGINEERING",
    overview:
      "Our engineering team at STRAVO collaborated with Stralo to optimize their React-based analytics dashboard, improving rendering time and reducing bundle size significantly.",
    results: [
      "50% faster page loads",
      "Reduced JS bundle size by 70%",
      "Improved Lighthouse scores from 65 → 95",
    ],
    image: case2,
    imageAlt: "React app performance optimization by STRAVO engineers",
    challenges: [
      "Slow loading and rendering time",
      "Inefficient component structure",
      "Complex state management with Redux",
    ],
    solutions: [
      "Implemented React.memo and lazy-loading components",
      "Switched to Zustand for lightweight state management",
      "Optimized build pipeline using Vite and code splitting",
    ],
    technologies: ["React.js", "Vite", "Zustand", "Lighthouse", "Webpack"],
  },
];

const CaseStudyDetails = memo(() => {
  // NOTE: breadcrumbSchema static URLs are fine for this mock setup,
  // but in a real-world app, you'd calculate the canonical URL dynamically.
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
        name: "Case Studies Details",
        item: "https://stravoph.netlify.app/big-four",
      },
    ],
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const caseData = caseStudies.find((item) => item.id === id);

  if (!caseData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-800 font-outfit">
        <h2 className="text-3xl font-bold mb-4">Case Study Not Found</h2>
        <Button onClick={() => navigate("/casestudies")}>
          Back to Case Studies
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen font-outfit">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>{`${caseData.title} | STRAVO Case Study`}</title>
        <meta
          name="description"
          content={`${caseData.overview} | STRAVO — We build your machine behind your vision.`}
        />
        <meta name="author" content="STRAVO" />
        <meta
          name="keywords"
          content={`${caseData.technologies.join(
            ", "
          )}, STRAVO, Web Development, Software Solutions`}
        />
        <meta property="og:title" content={`${caseData.title} | STRAVO`} />
        <meta property="og:description" content={caseData.overview} />
        <meta property="og:image" content={caseData.image} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="STRAVO" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <header role="banner">
        <Navbar />
      </header>
      <nav
        aria-label="Breadcrumb"
        className="px-6 pt-4 pb-4 text-sm text-gray-600 bg-[#0C0C0C] mt-20"
      >
        <ol className="flex items-center space-x-2">
          <li className="flex items-center">
            <Link 
              to="/casestudies"
              className="flex items-center hover:text-[#A0001E] transition-colors"
            >
              <BookOpenCheck className="w-4 h-4 mr-1" aria-hidden="true" />
              Case Studies
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </li>
          <li className="text-[#A0001E] font-medium">Case Study Highlight</li>
        </ol>
      </nav>
      {/* HERO */}
      <section className="bg-[#0C0C0C] text-white pt-4 pb-28 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-[#E2001A] uppercase text-sm tracking-widest mb-4">
            {caseData.subtitle}
          </p>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            {caseData.title}
          </h1>
          <p className="text-white/80 max-w-3xl">{caseData.overview}</p>
        </div>

        <img
          src={caseData.image}
          alt={caseData.imageAlt}
          loading="lazy"
          decoding="async"
          className="w-full max-h-[500px] object-cover mt-10 rounded-2xl shadow-xl"
        />
      </section>

      {/* CHALLENGES + SOLUTIONS */}
      <section className="py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#E2001A]">
              Challenges
            </h2>
            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              {caseData.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#E2001A]">
              Our Solutions
            </h2>
            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              {caseData.solutions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-[#0C0C0C] text-white py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#E2001A]">
            Measurable Results
          </h2>
          <div className="grid sm:grid-cols-3 gap-10 mt-10">
            {caseData.results.map((r, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-[#E2001A]/20 transition"
              >
                <p className="font-semibold text-lg">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 text-[#E2001A]">
            Technologies Used
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {caseData.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-[#4A000F]/10 text-[#4A000F] font-semibold rounded-full border border-[#E2001A]/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E2001A] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Want to see another transformation story?
          </h2>
          <Button
            onClick={() => navigate("/casestudies")}
            className="bg-white text-[#E2001A] hover:bg-gray-100"
          >
            Explore More <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
});

export default CaseStudyDetails;