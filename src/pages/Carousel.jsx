import React, { useState, useCallback, memo } from "react";
import Logo from '../assets/Remove background project.png'
import { ArrowLeft, ArrowRight } from "lucide-react";

// Carousel images imports (WebP)
import slide1WebP from "../assets/photo_mr2.webp"; // You'll create these
import slide2WebP from "../assets/photo_mr3.webp";
import slide3WebP from "../assets/photo_mr4.webp";
import slide4WebP from "../assets/photo_mr5.webp";
import slide5WebP from "../assets/photo_mr6.webp";

// Carousel images imports (AVIF fallback)
import slide1AVIF from "../assets/photo_mr2.avif"; // Your downloaded files
import slide2AVIF from "../assets/photo_mr3.avif";
import slide3AVIF from "../assets/photo_mr4.avif";
import slide4AVIF from "../assets/photo_mr5.avif";
import slide5AVIF from "../assets/photo_mr6.avif";

// ========== STATIC DATA MOVED OUTSIDE COMPONENT ==========
const slides = [
  {
    title: "What Is Responsive Design?",
    category: "Overview",
    imageWebP: slide1WebP,
    imageAVIF: slide1AVIF,
    description: "Responsive design ensures websites look and function properly across devices. It adapts layouts to different screen sizes for a consistent user experience.",
  },
  {
    title: "Improved User Experience",
    category: "Benefit #1",
    imageWebP: slide2WebP,
    imageAVIF: slide2AVIF,
    description: "A responsive site enhances navigation and aesthetics on all devices. Better UX helps retain users and prevents them from leaving for competitors.",
  },
  {
    title: "Efficiency and Maintenance",
    category: "Benefit #2",
    imageWebP: slide3WebP,
    imageAVIF: slide3AVIF,
    description: "Responsive websites are easier to build, maintain, and update — saving time and effort since you only manage one site instead of multiple versions.",
  },
  {
    title: "Better SEO and Indexing",
    category: "Benefit #3",
    imageWebP: slide4WebP,
    imageAVIF: slide4AVIF,
    description: "Search engines like Google prioritize mobile-friendly, responsive sites. This boosts SEO rankings and ensures your site performs well on all devices.",
  },
  {
    title: "Scalability and Cost-Effectiveness",
    category: "Benefit #4",
    imageWebP: slide5WebP,
    imageAVIF: slide5AVIF,
    description: "Responsive design adapts easily as your business grows — saving long-term development costs and improving performance across all devices.",
  },
];

// ========== MEMOIZED COMPONENTS ==========
const OptimizedSlideImage = memo(({ webpSrc, avifSrc, alt, className = "" }) => (
  <picture>
    <source srcSet={webpSrc} type="image/webp" />
    <source srcSet={avifSrc} type="image/avif" />
    <img
      src={avifSrc}
      alt={alt}
      className={`object-cover w-full rounded-lg shadow-md h-72 ${className}`}
      loading="lazy"
      width="400"
      height="288"
      decoding="async"
    />
  </picture>
));

const SlideImage = memo(({ src, alt, className = "" }) => (
  <img
    src={src}
    alt={alt}
    className={`object-contain w-full rounded-lg shadow-md h-72 ${className}`}
    loading="lazy"
    width="400"
    height="288"
  />
));

const SlideContent = memo(({ slide }) => (
  <div className="p-8 bg-white rounded-lg shadow-md">
    <p className="mb-2 text-xs tracking-widest text-gray-500 uppercase">
      {slide.category}
    </p>
    <h3 className="mb-3 text-2xl font-bold text-gray-900">
      {slide.title}
    </h3>
    <p className="mb-4 text-sm leading-relaxed text-gray-600">
      {slide.description}
    </p>
    <a
      href="#"
      className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 hover:underline transition-colors"
    >
      Read More →
    </a>
  </div>
));

const NavigationButton = memo(({ onClick, children, ariaLabel }) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className="flex items-center justify-center w-10 h-10 transition-all border border-gray-300 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
  >
    {children}
  </button>
));

const ResponsiveDesignCarousel = memo(() => {
  const [index, setIndex] = useState(0);

  // Optimized navigation handlers
  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const currentSlide = slides[index];

  return (
    <section className="bg-[#f8f7f4] py-16 px-8 md:px-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Learn the <br /> principles
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <p className="mb-2 text-sm font-semibold tracking-widest text-gray-600 uppercase">
              ARTICLES
            </p>
            <p className="text-sm text-gray-600 max-w-[150px] sm:max-w-sm">
              Design that inspires exceptional quality and sets new standards.
            </p>
            <div className="flex gap-3 mt-4">
              <NavigationButton onClick={prevSlide} ariaLabel="Previous slide">
                <ArrowLeft size={18} />
              </NavigationButton>
              <NavigationButton onClick={nextSlide} ariaLabel="Next slide">
                <ArrowRight size={18} />
              </NavigationButton>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-6 md:grid-cols-3">
          {/* Slide Image */}
          <div className="col-span-1">
            <OptimizedSlideImage
              webpSrc={currentSlide.imageWebP}
              avifSrc={currentSlide.imageAVIF}
              alt={currentSlide.title}
            />
          </div>

          {/* Slide Content - No Animation */}
          <div className="col-span-1">
            <SlideContent slide={currentSlide} />
          </div>

          {/* Logo Image */}
          <div className="hidden col-span-1 md:block">
            <SlideImage 
              src={Logo} 
              alt="Side preview" 
              className="object-contain w-full rounded-lg shadow-md h-72"
            />
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => setIndex(slideIndex)}
              className={`w-3 h-3 rounded-full transition-colors ${
                slideIndex === index 
                  ? 'bg-[#E2001A]' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default ResponsiveDesignCarousel;