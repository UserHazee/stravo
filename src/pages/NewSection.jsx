import React, { memo, useCallback } from "react";
import { Button } from "../components/ui/button";
import {ArrowRight} from "lucide-react";

// --- Images ---
// Hosting images (no fallback needed)
import hostingImg1 from "../assets/HOsitng.png";
import hostingImg2 from "../assets/H&M.png";

// Team member WebP images (optimized)
import teamMember1WebP from "../assets/1000483230 (1).webp";
import teamMember2WebP from "../assets/1000483218.webp";
import teamMember3WebP from "../assets/Gemini_Mullet.webp";

// Team member fallback images (JPG or PNG)
// You need to create these by converting your WebP files
// Use online tools like: https://cloudconvert.com/ or https://squoosh.app/
import teamMember1Fallback from "../assets/1000483230 (1).jpg"; // or .png
import teamMember2Fallback from "../assets/1000483218.jpg"; // or .png
import teamMember3Fallback from "../assets/Gemini_Mullet.jpg"; // or .png

// ========== STATIC DATA MOVED OUTSIDE COMPONENT ==========
const stats = [
  { number: "4K+", label: "Hosted Websites" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Availability" },
];

// ========== OPTIMIZED IMAGE COMPONENT ==========
const OptimizedImage = memo(
  ({
    webpSrc,
    fallbackSrc,
    alt,
    className = "",
    width,
    height,
    loading = "lazy",
  }) => (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <source
        srcSet={fallbackSrc}
        type={fallbackSrc.includes(".jpg") ? "image/jpeg" : "image/png"}
      />
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
      />
    </picture>
  )
);

// ========== MEMOIZED COMPONENTS ==========
const StatItem = memo(({ stat }) => (
  <div>
    <p className="text-4xl font-bold text-white">{stat.number}</p>
    <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
  </div>
));

const WebHostingSection = memo(() => {
  const myHandler = useCallback(() => {
    console.log("Get Started clicked");
  }, []);

  return (
    <section className="font-outfit mx-auto bg-gradient-to-br from-[#000000] to-[#090f24] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Why You Need Web Hosting Section */}
      <div className="grid items-center max-w-6xl grid-cols-1 gap-12 mx-auto mb-20 lg:grid-cols-2 lg:gap-16 md:mb-32">
        {/* Left: Hosting Images */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="absolute top-0 left-0 w-24 h-24 bg-green-400 rounded-full mix-blend-screen opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600 rounded-full mix-blend-screen opacity-10"></div>

          <div className="relative grid grid-cols-2 gap-4">
            <img
              src={hostingImg1}
              alt="Server management and setup"
              className="shadow-lg w-full h-auto object-cover aspect-square"
              loading="lazy"
              width="300"
              height="300"
            />
            <img
              src={hostingImg2}
              alt="Team discussing web hosting solutions"
              className="shadow-lg w-full h-auto object-cover aspect-square mt-8"
              loading="lazy"
              width="300"
              height="300"
            />
          </div>
        </div>

        {/* Right: Web Hosting Text and Stats */}
        <div className="text-center lg:text-left">
          <p className="mb-2 text-sm font-semibold tracking-wider text-[#A0001E] uppercase">
            [Web Hosting]
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Why You Need Reliable <br className="hidden md:inline" /> Web
            Hosting
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-lg text-gray-300 lg:max-w-none lg:mx-0">
            Your website's performance depends on its hosting. A fast, secure,
            and scalable web hosting service ensures that your site runs
            smoothly, loads quickly, and stays online — no matter how much
            traffic you get. Our hosting solutions are optimized for speed,
            uptime, and reliability.
          </p>

          <div className="flex justify-center mb-8 space-x-8 lg:justify-start md:space-x-12">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Our Expert Hosting Team Section */}
      <div className="grid items-center max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2 lg:gap-16">
        {/* Left: Team Text */}
        <div className="text-center lg:text-left">
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Meet Our Expert <br className="hidden md:inline" /> Hosting Team
          </h2>
          <p className="max-w-xl mx-auto mb-6 text-lg text-gray-300 lg:max-w-none lg:mx-0">
            Our team of web hosting professionals ensures your website stays
            lightning-fast and always available. From setup to scaling, we
            manage everything behind the scenes so you can focus on growing your
            business.
          </p>
          <p className="max-w-xl mx-auto mb-8 text-lg text-gray-300 lg:max-w-none lg:mx-0">
            Whether you're launching a personal blog or running a high-traffic
            eCommerce site, our hosting engineers keep your data secure and your
            site performing at its best.
          </p>
        </div>

        {/* Right: Team Member Images */}
        <div className="relative grid grid-cols-2 gap-4 place-items-center lg:place-items-end">
          <div className="absolute z-0 hidden w-4/5 -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-full opacity-50 top-1/2 left-1/2 h-4/5 md:block"></div>

          <div className="relative col-span-2 md:col-span-1">
            <OptimizedImage
              webpSrc={teamMember1WebP}
              fallbackSrc={teamMember1Fallback}
              alt="Hosting expert"
              className="z-10 object-cover shadow-lg rounded-xl md:rounded-full w-48 h-48 mx-auto sm:w-64 sm:h-64 md:w-full md:h-auto"
              width="256"
              height="256"
            />
          </div>
          <div className="relative col-span-1">
            <OptimizedImage
              webpSrc={teamMember2WebP}
              fallbackSrc={teamMember2Fallback}
              alt="Support engineer"
              className="z-10 object-cover shadow-lg rounded-xl md:rounded-full w-32 h-32 sm:w-48 sm:h-48 md:w-full md:h-auto"
              width="256"
              height="256"
            />
          </div>
          <div className="relative col-span-1 md:left-50 lg:left-35">
            <OptimizedImage
              webpSrc={teamMember3WebP}
              fallbackSrc={teamMember3Fallback}
              alt="Network administrator"
              className="z-10 object-cover shadow-lg rounded-xl md:rounded-full w-32 h-32 sm:w-48 sm:h-48 md:w-full md:h-auto"
              width="256"
              height="256"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default WebHostingSection;
