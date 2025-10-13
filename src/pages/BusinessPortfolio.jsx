import React, { memo, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Helmet } from "react-helmet-async";
import {
  Briefcase,
  Globe,
  Star,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

// Hero image imports
import heroImageWebP from "../assets/photo_bp.webp"; // You'll create this
import heroImageAVIF from "../assets/photo_bp.avif"; // Your downloaded file

// About section image imports
import aboutImageWebP from "../assets/photo_bp1.webp"; // You'll create this
import aboutImageAVIF from "../assets/photo_bp1.avif"; // Your downloaded file

// ========== STATIC DATA MOVED OUTSIDE COMPONENT ==========
const stats = [
  { label: "Projects Completed", value: "120+" },
  { label: "Industries Served", value: "15+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Years of Experience", value: "10+" },
];

const portfolioHighlights = [
  {
    title: "Modern Corporate Websites",
    desc: "We build professional websites that showcase your brand's identity and vision.",
    icon: <Briefcase className="w-6 h-6 text-[#E2001A]" />,
  },
  {
    title: "Global Reach",
    desc: "Your online presence will be optimized for international audiences.",
    icon: <Globe className="w-6 h-6 text-[#E2001A]" />,
  },
  {
    title: "High Performance",
    desc: "Fast, responsive, and SEO-friendly — designed to convert visitors into clients.",
    icon: <TrendingUp className="w-6 h-6 text-[#E2001A]" />,
  },
];

// ========== MEMOIZED COMPONENTS ==========
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
  ({
    webpSrc,
    avifSrc,
    alt,
    className = "",
    loading = "lazy",
    priority = false,
  }) => (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <source srcSet={avifSrc} type="image/avif" />
      <img
        src={avifSrc}
        alt={alt}
        className={`object-cover w-full h-auto shadow-xl rounded-2xl ${className}`}
        loading={priority ? "eager" : loading}
        width="800"
        height="600"
        decoding="async"
      />
    </picture>
  )
);

const BusinessPortfolio = memo(() => {
  return (
    <>
      <Helmet>
        <title>Business Portfolio | Stravo</title>
        <meta
          name="description"
          content="Showcase your brand and attract clients."
        />
      </Helmet>
      <div className="min-h-screen bg-white font-outfit">
        <Navbar />

        {/* Hero Section */}
        <section className="relative px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FFF5F5] to-white sm:px-6 lg:px-20 ">
          <div className="grid items-center gap-10 mx-auto max-w-7xl lg:grid-cols-2">
            {/* Left - Text */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider text-white uppercase bg-[#E2001A] rounded-full">
                Business Portfolio
              </span>

              <h1 className="text-5xl font-medium leading-tight tracking-tight text-gray-900 xl:text-7xl lg:text-6xl">
                Business Portfolio: <br />
                <span className="text-[#E2001A]">Show. Impress. Convert.</span>
              </h1>

              <p className="max-w-xl text-lg text-gray-600">
                A well-crafted business portfolio isn't just a website — it's
                your online identity that builds credibility, showcases your
                work, and turns visitors into clients.
              </p>
            </div>

            {/* Right - Image */}
            <div>
              <OptimizedImage
                webpSrc={heroImageWebP}
                avifSrc={heroImageAVIF}
                alt="Business portfolio showcase"
                priority={true}
              />
            </div>
          </div>

          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#E2001A]/10 to-transparent rounded-full blur-3xl" />
        </section>

        {/* About Section */}
        <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
          <div className="grid items-center gap-12 mx-auto max-w-7xl lg:grid-cols-2">
            {/* Left Image */}
            <div className="order-1 md:order-0">
              <OptimizedImage
                webpSrc={aboutImageWebP}
                avifSrc={aboutImageAVIF}
                alt="Team collaboration"
              />
            </div>

            {/* Right Text */}
            <div>
              <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold uppercase tracking-wider bg-gray-100 text-[#E2001A] rounded-full">
                About Business Portfolios
              </span>

              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                A digital showcase that{" "}
                <span className="text-[#E2001A]">builds client trust</span>
              </h2>

              <p className="mb-6 text-gray-600">
                Your business portfolio reflects your journey, skills, and
                credibility. Whether you're a startup or an established brand, a
                well-structured portfolio helps attract clients, investors, and
                opportunities.
              </p>

              <div className="space-y-4">
                {portfolioHighlights.map((highlight, idx) => (
                  <HighlightItem key={idx} highlight={highlight} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="px-6 py-20 bg-gray-50 sm:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              The results of a powerful portfolio
            </h2>
            <p className="max-w-3xl mx-auto mb-12 text-gray-600">
              A clear, well-presented portfolio helps boost visibility,
              establish trust, and open doors to long-term partnerships.
            </p>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, idx) => (
                <StatCard key={idx} stat={stat} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to showcase your business online?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90">
            Build a portfolio that speaks for your brand and attracts your ideal
            clients. Let's create your professional online presence today.
          </p>
          <Button variant="primary" size="top">
            Book Tech Call <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </section>

        <Footer />
      </div>
    </>
  );
});

export default BusinessPortfolio;
