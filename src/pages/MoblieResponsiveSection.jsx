import React, { memo, useCallback } from "react";
import {
  Smartphone,
  Search,
  Users,
  ArrowRight,
  Home,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import ResponsiveDesignCarousel from "./Carousel";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// Hero image imports
import heroImageWebP from "../assets/photo_mr.webp"; // You'll create this
import heroImageAVIF from "../assets/photo_mr.avif"; // Your downloaded file

// About section image imports
import aboutImageWebP from "../assets/photo_mr1.webp"; // You'll create this
import aboutImageAVIF from "../assets/photo_mr1.avif"; // Your downloaded file

// ========== STATIC DATA MOVED OUTSIDE COMPONENT ==========
const stats = [
  { label: "Users browse via mobile", value: "70%" },
  { label: "Higher retention rate", value: "60%" },
  { label: "Faster load performance", value: "2x" },
  { label: "SEO improvement", value: "35%" },
];

const features = [
  {
    icon: <Smartphone className="w-6 h-6 text-[#E2001A] flex-shrink-0 mt-1" />,
    title: "Better User Experience",
    description:
      "Visitors stay longer and explore more when your site is comfortable to use on any device.",
  },
  {
    icon: <Search className="w-6 h-6 text-[#E2001A] flex-shrink-0 mt-1" />,
    title: "Improved SEO Ranking",
    description:
      "Google prioritizes mobile-friendly sites, helping you rank higher in search results.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#E2001A] flex-shrink-0 mt-1" />,
    title: "Higher Conversions",
    description:
      "Easy navigation and readability directly improve your sales, inquiries, and brand trust.",
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
        role="img"
        className={`object-cover w-full h-auto shadow-xl rounded-2xl ${className}`}
        loading={priority ? "eager" : loading}
        width="800"
        height="600"
        decoding="async"
      />
    </picture>
  )
);

const ResponsiveDesign = memo(() => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://stravo.tech/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Web Hosting",
        item: "https://stravo.tech/webhosting",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white font-outfit">
      <Helmet>
        <title>Mobile Responsiveness | STRAVO</title>
        <meta
          name="description"
          content="STRAVO builds mobile-responsive websites that impress clients on every device. We design, code, and deliver digital experiences that perform beautifully."
        />
        <meta
          name="keywords"
          content="STRAVO, responsive web design, mobile-friendly website, web development, SEO optimization, fast loading, user experience"
        />
        <meta property="og:title" content="Mobile Responsiveness | STRAVO" />
        <meta
          property="og:description"
          content="We build your machine behind your vision — STRAVO designs mobile-responsive websites for performance and growth."
        />
        <meta
          property="og:image"
          content="/assets/og-mobile-responsiveness.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="STRAVO" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="STRAVO - Mobile Responsiveness" />
        <meta
          name="twitter:description"
          content="Design, Code, and Deliver responsive web experiences with STRAVO."
        />
        <meta
          name="twitter:image"
          content="/assets/og-mobile-responsiveness.jpg"
        />
        <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Mobile Responsiveness | STRAVO",
              "description": "We build your machine behind your vision — STRAVO designs and develops responsive, mobile-first websites.",
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
          <li className="text-[#A0001E] font-medium">Mobile Responsiveness</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-3 pb-20 overflow-hidden bg-gradient-to-br from-[#FFF5F5] to-white sm:px-6 lg:px-20">
        <div className="grid items-center gap-10 mx-auto max-w-7xl lg:grid-cols-2">
          {/* Left - Text */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider text-white uppercase bg-[#E2001A] rounded-full">
              Why It Matters
            </span>

            <h1 className="text-5xl font-medium leading-tight tracking-tight text-gray-900 xl:text-7xl lg:text-6xl">
              Mobile Responsiveness: <br />
              <span className="text-[#E2001A]">
                Your Website's First Impression
              </span>
            </h1>

            <p className="max-w-xl text-lg text-gray-600">
              Over 70% of online visitors browse through mobile devices. If your
              website isn't mobile-friendly, you're losing potential clients
              before they even explore your brand.
            </p>
          </div>

          {/* Right - Image */}
          <div>
            <OptimizedImage
              webpSrc={heroImageWebP}
              avifSrc={heroImageAVIF}
              alt="Responsive design mockup"
              priority
            />
          </div>
        </div>

        {/* Soft Background Decoration */}
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
              alt="Design collaboration"
            />
          </div>

          {/* Right Text */}
          <div>
            <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold uppercase tracking-wider bg-gray-100 text-[#E2001A] rounded-full">
              About Responsive Design
            </span>

            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Why every website must be{" "}
              <span className="text-[#E2001A]">mobile-friendly</span>.
            </h2>

            <p className="mb-6 text-gray-600">
              Responsive design ensures your website adjusts seamlessly to any
              screen size — desktop, tablet, or smartphone. It's not just a
              design choice, it's a business necessity.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <ResponsiveDesignCarousel />
      </section>

      {/* Statistic Section */}
      <section className="px-6 py-20 bg-gray-50 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900">
            The impact of mobile responsiveness
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-gray-600">
            Businesses that adopt mobile-friendly designs see improved
            engagement and lower bounce rates.
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
          Ready to make your website mobile-ready?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90">
          Let's help you create a seamless, responsive design that looks
          stunning on any device.
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
  );
});

export default ResponsiveDesign;
