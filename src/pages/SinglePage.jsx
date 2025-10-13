import React, { memo, useCallback } from "react";
import {
  Globe,
  MousePointer,
  Zap,
  BarChart,
  ArrowRight,
  Layers,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

// Hero image imports
import heroImageWebP from "../assets/photo_sp.webp"; // You'll create this
import heroImageAVIF from "../assets/photo_sp.avif"; // Your downloaded file

// About section image imports
import aboutImageWebP from "../assets/photo_sp1.webp"; // You'll create this
import aboutImageAVIF from "../assets/photo_sp1.avif"; // Your downloaded file

// ========== STATIC DATA MOVED OUTSIDE COMPONENT ==========
const stats = [
  { label: "Faster navigation", value: "3x" },
  { label: "Higher conversions", value: "45%" },
  { label: "Less bounce rate", value: "-35%" },
  { label: "Quicker load time", value: "1.5s" },
];

const features = [
  {
    icon: <Zap className="w-6 h-6 text-[#E2001A] flex-shrink-0 mt-1" />,
    title: "Fast Loading",
    description:
      "Optimized to load quickly, providing a smoother user experience and lower bounce rates.",
  },
  {
    icon: (
      <MousePointer className="w-6 h-6 text-[#E2001A] flex-shrink-0 mt-1" />
    ),
    title: "Simple Navigation",
    description:
      "Scrolling replaces clicks — making it effortless for users to explore your message.",
  },
  {
    icon: <BarChart className="w-6 h-6 text-[#E2001A] flex-shrink-0 mt-1" />,
    title: "Better Conversion Focus",
    description:
      "With one clear call-to-action, single-page websites drive visitors toward one goal — inquiry, signup, or purchase.",
  },
];

// ========== MEMOIZED COMPONENTS ==========
const StatCard = memo(({ stat }) => (
  <div className="p-6 bg-white shadow-md rounded-2xl">
    <h3 className="text-3xl font-bold text-[#E2001A]">{stat.value}</h3>
    <p className="mt-2 text-gray-600">{stat.label}</p>
  </div>
));

const FeatureItem = memo(({ feature }) => (
  <div className="flex items-start gap-4">
    {feature.icon}
    <div>
      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
      <p className="text-sm text-gray-600">{feature.description}</p>
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

const SinglePageWebsite = memo(() => {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Helmet>
        <title>Single Page Website Design | Stravo</title>
        <meta
          name="description"
          content="Build a high-converting single page website with Stravo. Fast-loading, mobile-optimized, and designed to engage visitors with a clear, focused message."
        />
        <meta
          name="keywords"
          content="single page website, landing page design, one page website, responsive web design, Stravo web development"
        />
        <meta
          property="og:title"
          content="Single Page Website Design | Stravo"
        />
        <meta
          property="og:description"
          content="Stravo creates stunning single page websites that are smooth, fast, and focused — perfect for startups, portfolios, and campaigns."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://stravo.com/singlepagewebsite"
        />
        <meta
          property="og:image"
          content="https://stravo.com/og/singlepage.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Single Page Website Design | Stravo"
        />
        <meta
          name="twitter:description"
          content="Build a sleek, conversion-focused single page website with Stravo."
        />
        <meta
          name="twitter:image"
          content="https://stravo.com/og/singlepage.webp"
        />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FFF5F5] to-white sm:px-6 lg:px-20 ">
        <div className="grid items-center gap-10 mx-auto max-w-7xl lg:grid-cols-2">
          {/* Left Text */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider text-white uppercase bg-[#E2001A] rounded-full">
              Landing Page Websites
            </span>

            <h1 className="text-5xl font-medium leading-tight tracking-tight text-gray-900 xl:text-7xl lg:text-6xl">
              Single Page Website: <br />
              <span className="text-[#E2001A]">Smooth. Fast. Focused.</span>
            </h1>

            <p className="max-w-xl text-lg text-gray-600">
              Capture attention and keep users engaged with a single,
              streamlined web page — fast loading, easy to navigate, and perfect
              for showcasing your brand or product.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <OptimizedImage
              webpSrc={heroImageWebP}
              avifSrc={heroImageAVIF}
              alt="Single page website design"
              priority={true}
            />
          </div>
        </div>

        {/* Subtle gradient background effect */}
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
              alt="Single page design layout"
            />
          </div>

          {/* Right Text */}
          <div>
            <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold uppercase tracking-wider bg-gray-100 text-[#E2001A] rounded-full">
              About Single Page Websites
            </span>

            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              One Page. One Goal.{" "}
              <span className="text-[#E2001A]">Endless Impact.</span>
            </h2>

            <p className="mb-6 text-gray-600">
              A single-page website consolidates your content into one scrolling
              page — no page loading, no distractions. Ideal for small
              businesses, portfolios, events, or product showcases.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-6 py-20 bg-gray-50 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900">
            Why brands choose single page websites
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-gray-600">
            Minimalism, clarity, and speed — three pillars that make single-page
            sites more effective than ever.
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
          Ready to build your single page website?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90">
          Let's craft a sleek, modern single-page site that tells your story in
          seconds — not clicks.
        </p>
        <Button variant="primary" size="top">
          Book Tech Call <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </section>

      <Footer />
    </div>
  );
});

export default SinglePageWebsite;
