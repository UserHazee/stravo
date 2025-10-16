import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import {
  FileText,
  Target,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Search,
  Globe,
  BarChart3,
  Eye,
} from "lucide-react";

// Optimized hero images
import heroImageWebP from "../assets/photo_op.webp";
import heroImageAVIF from "../assets/photo_op.avif";

// ========== STATIC DATA ==========
const onPageItems = [
  "Content quality and keyword optimization",
  "Title tags and meta descriptions",
  "Header tags (H1, H2, H3)",
  "URL structure",
  "Internal linking",
  "Image optimization",
  "Page speed and mobile-friendliness",
  "Schema markup",
];

const offPageItems = [
  "Backlink building",
  "Social media marketing",
  "Guest posting",
  "Brand mentions",
  "Influencer outreach",
  "Local citations",
  "Online reputation management",
  "Content marketing distribution",
];

const importanceItems = [
  {
    icon: Search,
    title: "Helps Search Engines Understand",
    description:
      "Proper on-page optimization helps search engines understand your content’s topic and relevance, leading to better rankings.",
  },
  {
    icon: Eye,
    title: "Improves User Experience",
    description:
      "Well-optimized pages load faster, are easier to navigate, and provide better experience for visitors.",
  },
  {
    icon: TrendingUp,
    title: "Increases Organic Traffic",
    description:
      "Higher rankings from on-page SEO result in more visibility and clicks from potential clients.",
  },
  {
    icon: Target,
    title: "Better Targeting",
    description:
      "Optimize for specific keywords to attract the right audience searching for your services.",
  },
  {
    icon: Award,
    title: "Competitive Advantage",
    description:
      "Many competitors overlook on-page SEO. Proper optimization gives you an edge in search results.",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    description:
      "Track rankings, traffic, and conversions to see the direct impact of your optimization efforts.",
  },
];

// ========== MEMOIZED SUBCOMPONENTS ==========
const OptimizedHeroImage = memo(({ webpSrc, avifSrc, alt }) => (
  <picture>
    <source srcSet={webpSrc} type="image/webp" />
    <source srcSet={avifSrc} type="image/avif" />
    <img
      src={avifSrc}
      alt={alt}
      className="object-cover w-full h-auto shadow-2xl rounded-3xl ring-1 ring-slate-200"
      loading="eager"
      width="800"
      height="600"
      decoding="async"
    />
  </picture>
));

const CheckListItem = memo(({ item }) => (
  <li className="flex items-start gap-2">
    <CheckCircle2 className="w-5 h-5 text-[#E2001A] flex-shrink-0 mt-0.5" />
    <span className="text-slate-700">{item}</span>
  </li>
));

const ImportanceCard = memo(({ item }) => (
  <div className="p-6 transition-all duration-300 border bg-gradient-to-br from-slate-50 to-white border-slate-200 rounded-2xl hover:shadow-lg hover:border-[#E2001A]/40">
    <div className="flex items-center justify-center mb-4 shadow-lg w-14 h-14 bg-gradient-to-br from-[#4A000F] to-[#E2001A] rounded-xl">
      <item.icon className="text-white w-7 h-7" />
    </div>
    <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
    <p className="text-slate-600">{item.description}</p>
  </div>
));

const SEOCard = memo(({ title, description, icon: Icon, items }) => (
  <div className="p-8 bg-white border-2 border-[#E2001A]/20 shadow-lg rounded-2xl">
    <div className="flex items-center gap-3 mb-6">
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#4A000F] to-[#E2001A] rounded-xl">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
    </div>
    <p className="mb-6 text-slate-600">{description}</p>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <CheckListItem key={idx} item={item} />
      ))}
    </ul>
  </div>
));

const FloatingBadge = memo(() => (
  <div className="absolute px-6 py-3 bg-white border shadow-xl bottom-6 right-6 rounded-2xl border-slate-200">
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
        <TrendingUp className="w-5 h-5 text-green-600" />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900">
          Search Visibility
        </p>
        <p className="text-xs text-slate-600">+156% increase</p>
      </div>
    </div>
  </div>
));

// ========== MAIN COMPONENT ==========
const OnPageSEO = memo(() => {
  return (
    <div className="min-h-screen font-outfit bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>On-Page SEO | STRAVO</title>
        <meta
          name="description"
          content="STRAVO’s On-Page SEO helps your website rank higher and convert better. Optimize your content, structure, and user experience for digital success."
        />
        <meta
          name="keywords"
          content="STRAVO, on-page SEO, SEO optimization, responsive web design, web development, content optimization, keyword strategy, search engine visibility"
        />
        <meta property="og:title" content="On-Page SEO | STRAVO" />
        <meta
          property="og:description"
          content="We build your machine behind your vision — STRAVO helps your site rank higher and perform better through powerful On-Page SEO."
        />
        <meta property="og:image" content="/assets/og-onpage.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="STRAVO" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="STRAVO - On-Page SEO" />
        <meta
          name="twitter:description"
          content="Design, Code, and Deliver optimized web experiences with STRAVO."
        />
        <meta name="twitter:image" content="/assets/og-onpage.jpg" />
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "On-Page SEO | STRAVO",
          "description": "STRAVO provides expert On-Page SEO services to help businesses rank higher and grow online visibility.",
          "publisher": {
            "@type": "Organization",
            "name": "STRAVO",
            "logo": {
              "@type": "ImageObject",
              "url": "/assets/logo.png"
            }
          }
        }
        `}</script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FFF5F5] to-white sm:px-6 lg:px-20">
        <div className="grid items-center gap-12 mx-auto max-w-7xl lg:grid-cols-2">
          <div className="space-y-6">
            <span className="flex items-center gap-2 w-46 px-4 py-2 text-sm font-semibold tracking-wider text-white uppercase bg-[#E2001A] rounded-full">
              <Sparkles className="w-4 h-4" />
              SEO Excellence
            </span>

            <h1 className="text-5xl font-medium leading-tight tracking-tight text-gray-900 xl:text-7xl lg:text-6xl">
              On-Page SEO:{" "}
              <span className="text-[#E2001A]">
                Rank Higher, Convert Better
              </span>
            </h1>

            <p className="max-w-xl text-xl leading-relaxed text-slate-600">
              On-page SEO is the foundation of digital visibility. Optimize your
              content, structure, and experience to dominate search results.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E2001A]/10 to-[#4A000F]/10 rounded-3xl blur-2xl" />
            <OptimizedHeroImage
              webpSrc={heroImageWebP}
              avifSrc={heroImageAVIF}
              alt="SEO analytics dashboard with website performance graph"
            />
            <FloatingBadge />
          </div>
        </div>
      </section>

      {/* What is On-Page SEO */}
      <section className="px-6 py-24 bg-white sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            What Is On-Page SEO?
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            On-page SEO (also known as on-site SEO) is optimizing individual
            pages to rank higher and earn relevant traffic. It involves both
            content and HTML structure improvements.
          </p>
          <p className="text-lg leading-relaxed text-slate-600">
            Unlike off-page SEO, which relies on external links, on-page SEO is
            entirely within your control. It's about making your content
            discoverable and valuable.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-slate-50 to-white sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            On-Page SEO vs. Off-Page SEO
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-12">
            Understand the difference to build a complete SEO strategy.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <SEOCard
              title="On-Page SEO"
              description="Optimizations made directly on your website"
              icon={FileText}
              items={onPageItems}
            />
            <SEOCard
              title="Off-Page SEO"
              description="External factors that impact your rankings"
              icon={Globe}
              items={offPageItems}
            />
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="px-6 py-24 bg-white sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Why Is On-Page SEO Important?
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-16">
            On-page SEO is the backbone of your online visibility.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {importanceItems.map((item, idx) => (
              <ImportanceCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24 overflow-hidden text-center text-white bg-gradient-to-br from-[#4A000F] to-[#E2001A]">
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Ready to Optimize?</span>
          </div>

          <h2 className="mb-6 text-5xl font-bold lg:text-6xl">
            Let's optimize your website for search success
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-xl leading-relaxed text-white/90">
            Get a full SEO audit and personalized roadmap. Turn your website
            into a search engine magnet and grow your traffic fast.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
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
            <Link to="/casestudies">
              <Button variant="primary" size="top" className="cursor-pointer">
                View Case Studies <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

export default OnPageSEO;
