import React, { memo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Globe,
  TrendingUp,
  ArrowRight,
  Home,
  ChevronRight,
} from "lucide-react";

// Hero image imports
import heroImageWebP from "../assets/photo_bp.webp";
import heroImageAVIF from "../assets/photo_bp.avif";

// About section image imports
import aboutImageWebP from "../assets/photo_bp1.webp";
import aboutImageAVIF from "../assets/photo_bp1.avif";

// ================== STATIC DATA ==================
const stats = [
  { label: "Projects Completed", value: "120+" },
  { label: "Industries Served", value: "15+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Years of Experience", value: "10+" },
];

const portfolioHighlights = [
  {
    title: "Modern Corporate Websites",
    desc: "We build professional websites that showcase your brand’s identity and vision with precision and creativity.",
    icon: <Briefcase className="w-6 h-6 text-[#E2001A]" />,
  },
  {
    title: "Global Reach",
    desc: "Your online presence will be optimized for both local and international audiences, helping you scale globally.",
    icon: <Globe className="w-6 h-6 text-[#E2001A]" />,
  },
  {
    title: "High Performance",
    desc: "Fast, responsive, SEO-optimized — we craft digital experiences designed to impress and convert visitors into clients.",
    icon: <TrendingUp className="w-6 h-6 text-[#E2001A]" />,
  },
];

// ================== MEMOIZED COMPONENTS ==================
const StatCard = memo(({ stat }) => (
  <div className="p-6 bg-white shadow-md rounded-2xl">
    <h3 className="text-3xl font-bold text-[#E2001A]">{stat.value}</h3>
    <p className="mt-2 text-gray-600">{stat.label}</p>
  </div>
));

const HighlightItem = memo(({ highlight }) => (
  <div className="flex items-start gap-4">
    {highlight.icon}
    <div>
      <h4 className="font-semibold text-gray-900">{highlight.title}</h4>
      <p className="text-sm text-gray-600">{highlight.desc}</p>
    </div>
  </div>
));

const OptimizedImage = memo(
  ({ webpSrc, avifSrc, alt, className = "", priority = false }) => (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <source srcSet={avifSrc} type="image/avif" />
      <img
        src={avifSrc}
        alt={alt}
        className={`object-cover w-full h-auto shadow-xl rounded-2xl ${className}`}
        loading={priority ? "eager" : "lazy"}
        width="800"
        height="600"
        decoding="async"
      />
    </picture>
  )
);

// ================== MAIN COMPONENT ==================
const BusinessPortfolio = memo(() => {
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
        name: "Business Portfolio Website",
        item: "https://stravoph.netlify.app/businessportfolio",
      },
    ],
  };
  return (
    <>
      <Helmet>
        {/* SEO Meta */}
        <title>Business Portfolio | STRAVO</title>
        <meta
          name="description"
          content="STRAVO builds professional business portfolios that elevate your brand. Design, code, and deliver a stunning digital presence that converts."
        />
        <meta
          name="keywords"
          content="STRAVO, business portfolio, web design, portfolio development, corporate website, brand showcase, responsive design, SEO optimization"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Business Portfolio | STRAVO" />
        <meta
          property="og:description"
          content="We build your machine behind your vision — design, code, and deliver business portfolios that impress and convert."
        />
        <meta property="og:image" content="/assets/og-business-portfolio.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="STRAVO" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="STRAVO - Business Portfolio" />
        <meta
          name="twitter:description"
          content="Professional portfolio design and development by STRAVO. Build trust, attract clients, and grow your business online."
        />
        <meta
          name="twitter:image"
          content="/assets/og-business-portfolio.jpg"
        />

        {/* Schema Markup */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Business Portfolio | STRAVO",
          "description": "STRAVO builds responsive, high-performing business portfolios to help brands showcase their expertise and grow online.",
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
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white font-outfit">
        <header role="banner">
          <Navbar />
        </header>
        <nav
          aria-label="Breadcrumb"
          className="px-6 pt-4 text-sm text-gray-600 bg-gradient-to-tr from-[#FFF5F5] to-white mt-20"
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
            <li className="text-[#A0001E] font-medium">Business Portfolios</li>
          </ol>
        </nav>
        {/* HERO SECTION */}
        <section className="relative px-6 pt-3 pb-20 overflow-hidden bg-gradient-to-br from-[#FFF5F5] to-white sm:px-6 lg:px-20">
          <div className="grid items-center gap-10 mx-auto max-w-7xl lg:grid-cols-2">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider text-white uppercase bg-[#E2001A] rounded-full">
                Business Portfolio
              </span>

              <h1 className="text-5xl font-medium leading-tight tracking-tight text-gray-900 xl:text-7xl lg:text-6xl">
                Business Portfolio:{" "}
                <span className="text-[#E2001A]">Show. Impress. Convert.</span>
              </h1>

              <p className="max-w-xl text-lg text-gray-600">
                A well-crafted business portfolio isn't just a website — it's
                your digital identity that builds trust, showcases expertise,
                and drives real growth.
              </p>
            </div>

            <div>
              <OptimizedImage
                webpSrc={heroImageWebP}
                avifSrc={heroImageAVIF}
                alt="STRAVO business portfolio showcase example"
                priority
              />
            </div>
          </div>

          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#E2001A]/10 to-transparent rounded-full blur-3xl" />
        </section>

        {/* ABOUT SECTION */}
        <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
          <div className="grid items-center gap-12 mx-auto max-w-7xl lg:grid-cols-2">
            <div className="order-1 md:order-0">
              <OptimizedImage
                webpSrc={aboutImageWebP}
                avifSrc={aboutImageAVIF}
                alt="Team designing a business portfolio website"
              />
            </div>

            <div>
              <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold uppercase tracking-wider bg-gray-100 text-[#E2001A] rounded-full">
                About Business Portfolios
              </span>

              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                A digital showcase that{" "}
                <span className="text-[#E2001A]">builds client trust</span>
              </h2>

              <p className="mb-6 text-gray-600">
                Your portfolio is the foundation of your digital reputation.
                Whether you're a startup or enterprise, our team ensures your
                brand story, design, and performance align with your goals.
              </p>

              <div className="space-y-4">
                {portfolioHighlights.map((highlight, idx) => (
                  <HighlightItem key={idx} highlight={highlight} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATISTICS SECTION */}
        <section className="px-6 py-20 bg-gray-50 sm:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              The Results of a Powerful Portfolio
            </h2>
            <p className="max-w-3xl mx-auto mb-12 text-gray-600">
              A strong business portfolio not only highlights what you do but
              demonstrates the results you achieve — inspiring confidence and
              driving growth.
            </p>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, idx) => (
                <StatCard key={idx} stat={stat} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="px-6 py-20 bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Showcase Your Business Online?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90">
            Build a portfolio that represents your vision. STRAVO designs and
            delivers platforms that make your brand unforgettable.
          </p>
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
        </section>

        <Footer />
      </div>
    </>
  );
});

export default BusinessPortfolio;
