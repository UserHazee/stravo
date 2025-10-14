import React, { memo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

import { Helmet } from "react-helmet-async"; // ✅ For SEO metadata

import insight1 from "../assets/photo_wd.webp";
import insight2 from "../assets/photo_bp.webp";
import insight3 from "../assets/photo_wd.webp";

// === MOCK INSIGHT DATA (replace later with backend/API) ===
const insights = [
  {
    id: "ai-in-webdev",
    title: "How AI is Revolutionizing Modern Web Development",
    subtitle: "The future of web development is powered by intelligence.",
    date: "October 2025",
    author: "Angelito Rivera",
    image: insight1,
    content: [
      "Artificial Intelligence (AI) is no longer a futuristic concept — it's transforming the web development landscape right now. From smart design assistants to predictive analytics, AI enhances how developers code, test, and deploy software.",
      "Developers today use AI-driven tools to automate testing, improve SEO performance, and personalize user experiences. Frameworks like React, Vue, and Node.js integrate seamlessly with AI APIs, allowing businesses to build smarter, adaptive interfaces.",
      "At Stravo, we believe the next generation of digital products will be co-created with AI — optimizing everything from layout responsiveness to conversion funnels.",
    ],
    highlights: [
      "Faster development cycles using AI-assisted coding",
      "Automated testing and performance optimization",
      "Smarter UX through data-driven personalization",
    ],
    tags: ["AI", "React.js", "Web Development", "Innovation"],
  },
  {
    id: "scaling-startups",
    title: "Scaling a Startup with React, Node, and AWS",
    subtitle: "How modern stacks empower scalability and growth.",
    date: "September 2025",
    author: "Stravo Engineering Team",
    image: insight2,
    content: [
      "Scalability is the foundation of every successful startup. Without the right technology stack, rapid growth can lead to technical debt and instability.",
      "Our engineering approach at Stravo focuses on modular architecture using React for the frontend, Node.js for backend services, and AWS for cloud scalability. Together, these ensure reliability, maintainability, and high performance.",
      "This trio of technologies has empowered many of our clients to transition from MVP to full-scale production with minimal friction.",
    ],
    highlights: [
      "React enables reusable and efficient UI components",
      "Node.js provides scalable event-driven architecture",
      "AWS ensures security and flexible scaling on demand",
    ],
    tags: ["Node.js", "AWS", "Scalability", "Startups"],
  },
  {
    id: "design-systems",
    title: "Why Every Product Needs a Design System",
    subtitle: "The secret to consistent UX and faster collaboration.",
    date: "August 2025",
    author: "Stravo Design Team",
    image: insight3,
    content: [
      "Design systems help teams move faster by creating visual consistency and reducing design debt. They are the single source of truth for components, styles, and patterns.",
      "At Stravo, our design systems are tailored for each client, ensuring that UI decisions align with brand goals and scalability needs.",
      "Whether your product uses Figma, Tailwind CSS, or React components — design systems keep teams aligned and development agile.",
    ],
    highlights: [
      "Consistent branding across all touchpoints",
      "Reduced design-to-development friction",
      "Better collaboration between teams",
    ],
    tags: ["UX/UI", "Design Systems", "Figma", "Frontend"],
  },
];

const InsightDetails = memo(() => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = insights.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-800">
        <h2 className="text-3xl font-bold mb-4">Insight Not Found</h2>
        <Button onClick={() => navigate("/insights")}>Back to Insights</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-outfit">
      <Helmet>
        <title>{`${article.title} | STRAVO`}</title>
        <meta name="description" content={article.subtitle} />
        <meta name="author" content={article.author} />
        <meta name="keywords" content={article.tags.join(", ")} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.subtitle} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="STRAVO" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.subtitle} />
        <meta name="twitter:image" content={article.image} />
      </Helmet>
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-[#0C0C0C] text-white py-28 px-6 sm:px-10 lg:px-20 relative">
        <div className="max-w-5xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/insights")}
            className="absolute top-6 left-6 text-white/70 hover:text-white"
          >
            <ArrowLeft className="mr-2 w-5 h-5" /> Back
          </Button>

          <p className="text-[#E2001A] uppercase text-sm tracking-widest mb-4">
            {article.date}
          </p>
          <h1 className="text-5xl font-bold leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-white/80 mb-4">{article.subtitle}</p>
          <p className="text-sm text-white/70">By {article.author}</p>
        </div>

        <img
          src={article.image}
          alt={article.title}
          className="w-full max-h-[500px] object-cover mt-10 rounded-2xl shadow-xl"
        />
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          {article.content.map((para, i) => (
            <p key={i} className="mb-6 text-gray-700 leading-relaxed text-lg">
              {para}
            </p>
          ))}

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-[#E2001A]">
              Key Highlights
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {article.highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-[#4A000F]/10 text-[#4A000F] rounded-full border border-[#E2001A]/30 text-sm font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT INSIGHT CTA */}
      <section className="bg-[#E2001A] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Want more stories like this?
          </h2>
          <Button
            onClick={() => navigate("/insights")}
            className="bg-white text-[#E2001A] hover:bg-gray-100"
          >
            Explore More Insights <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
});

export default InsightDetails;
