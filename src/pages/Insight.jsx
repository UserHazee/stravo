import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { ArrowRight ,ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet-async"; // ✅ SEO support

// ✅ Local assets
import insight1 from "../assets/photo_wd.webp";
import insight2 from "../assets/photo_bp.webp";
import insight3 from "../assets/photo_wd.webp";

// ✅ Data (can be replaced later with backend)
const insights = [
  {
    id: "ai-in-webdev",
    title: "How AI is Revolutionizing Modern Web Development",
    subtitle:
      "Discover how artificial intelligence is transforming workflows, enhancing UX, and reshaping frontend engineering.",
    image: insight1,
    imageAlt: "AI transforming modern web development with STRAVO",
    tag: "Artificial Intelligence",
    date: "October 2025",
  },
  {
    id: "scaling-startups",
    title: "Scaling a Startup with React, Node, and AWS",
    subtitle:
      "Explore how tech stack decisions can define scalability, performance, and investor confidence.",
    image: insight2,
    imageAlt: "Scalable web app architecture for startups using React and AWS",
    tag: "Startup Growth",
    date: "September 2025",
  },
  {
    id: "design-systems",
    title: "Why Every Product Needs a Design System",
    subtitle:
      "Learn how unified design systems drive consistency, speed, and scalability across teams.",
    image: insight3,
    imageAlt: "Design system process for UX/UI development by STRAVO",
    tag: "UX/UI Design",
    date: "August 2025",
  },
];

const Insights = memo(() => {
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
        name: "Case Studies ",
        item: "https://stravoph.netlify.app/insights",
      },
    ],
  };
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-outfit">
      {/* ✅ SEO Meta */}
      <Helmet>
        <title>
          Stravo Insights | We Build Your Machine Behind Your Vision
        </title>
        <meta
          name="description"
          content="Explore Stravo Insights — expert articles and deep dives into web development, AI, and digital transformation. We build your machine behind your vision."
        />
        <meta name="author" content="STRAVO" />
        <meta
          name="keywords"
          content="Stravo, Web Development, React, AI, Design Systems, Startup Tech, Digital Transformation"
        />
        <meta
          property="og:title"
          content="Stravo Insights | Design, Code, and Deliver"
        />
        <meta
          property="og:description"
          content="Stay ahead with Stravo's insights on modern development, AI innovation, and scalable digital design."
        />
        <meta property="og:image" content={insight1} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="STRAVO" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Stravo Insights | Design, Code, and Deliver"
        />
        <meta
          name="twitter:description"
          content="Stay ahead with Stravo's insights on web development, AI, and innovation."
        />
        <meta name="twitter:image" content={insight1} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Stravo Insights",
            description:
              "Expert insights and trends in web development, AI, and digital design by STRAVO.",
            url: "https://stravoph.netlify.app/insights",
            publisher: {
              "@type": "Organization",
              name: "STRAVO",
              logo: {
                "@type": "ImageObject",
                url: "https://stravoph.netlify.app/react.webp",
              },
            },
            inLanguage: "en",
            blogPost: insights.map((article) => ({
              "@type": "BlogPosting",
              headline: article.title,
              description: article.subtitle,
              image: article.image,
              author: {
                "@type": "Organization",
                name: "STRAVO",
              },
              datePublished: article.date,
              url: `https://stravoph.netlify.app/insights/${article.id}`,
            })),
          })}
        </script>
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
              to="/"
              className="flex items-center hover:text-[#A0001E] transition-colors"
            >
              <Home className="w-4 h-4 mr-1" aria-hidden="true" />
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </li>
          <li className="text-[#A0001E] font-medium">Insights</li>
        </ol>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-[#0C0C0C] text-white pt-4 pb-28 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-left space-y-6 relative z-10">
          <h4 className="text-[#E2001A] uppercase font-semibold text-sm tracking-widest">
            Stravo Insights
          </h4>
          <h1 className="text-5xl font-bold leading-tight">
            Stay Ahead with Stravo Insights
          </h1>
          <p className="max-w-3xl text-white/80 text-lg">
            Explore our latest thoughts, trends, and strategies in technology,
            design, and innovation — crafted by the STRAVO team to inspire
            growth and transformation.
          </p>
          <Button
            className="bg-white text-[#E2001A] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold"
            onClick={() => navigate(`/insights/${insights[0].id}`)}
          >
            View Latest Insight <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* INSIGHT GRID */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Featured Insights
          </h2>
          <p className="text-gray-600 mb-10">
            Deep dives, expert opinions, and actionable advice from our tech and
            design teams.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {insights.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer group"
                onClick={() => navigate(`/insights/${article.id}`)}
              >
                <figure>
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <figcaption className="sr-only">{article.title}</figcaption>
                </figure>
                <div className="p-6">
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                    <span className="uppercase tracking-wide text-[#E2001A] font-semibold">
                      {article.tag}
                    </span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E2001A]">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {article.subtitle}
                  </p>
                  <Button
                    variant="link"
                    className="text-[#E2001A] p-0 text-sm font-semibold"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/insights/${article.id}`);
                    }}
                  >
                    Read More →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
});

export default Insights;
