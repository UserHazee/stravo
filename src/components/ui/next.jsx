// Static data moved outside component to prevent re-creation on each render
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
const steps = [
  {
    day: "Day 1",
    title: "Discovery Call & Notes",
    desc: "Quick call to understand project goals, scope, and budget. We sign NDA if you require one.",
  },
  {
    day: "Day 3",
    title: "Draft Proposal",
    desc: "As a startup consultant, I provide a clear MVP path. Detailed architecture will evolve as we build.",
  },
  {
    day: "Day 4",
    title: "Finalize Agreement",
    desc: "Send refined proposal with pricing, timeline, and deliverables.",
  },
];

export function ProcessSection() {
  return (
    <section
      className="px-6 py-16 text-white md:py-20 lg:py-24 md:px-12 "
      style={{
        background:
          "radial-gradient(ellipse at center top, #8B0000 0%, #4A000F 40%, #2D0008 70%, #1A0005 100%)",
        boxShadow:
          "0 30px 60px rgba(139, 0, 0, 0.3), inset 0 -50px 100px rgba(0, 0, 0, 0.4)",
      }}
    >
      <div className="relative grid max-w-6xl gap-12 mx-auto next:grid-cols-2">
        {/* Left Side */}
        <div>
          <h3 className="text-sm uppercase text-[#E2001A] tracking-wide">
            What are the next steps
          </h3>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Expect the first pull request in 10 days from today.
          </h2>
          <p className="mt-4 text-gray-300">
            The goal is to get you the best team of engineers in the shortest
            time and start delivering real business value.
          </p>
          <Link to="/contact">
            <Button className="mt-4 cursor-pointer bg-[#A0001E] hover:bg-[#E2001A] border-2 hover:border-[#E2001A] border-[#A0001E] text-white px-8 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Get a Proposal →
            </Button>
          </Link>
        </div>

        {/* Right Side Timeline */}
        <div className="relative pl-8 ms-8 next:ms-0">
          {/* Gradient Line */}
          <div className="absolute top-25 left-0 h-[50px] w-[2px] bg-gradient-to-b from-[#000000] to-[#F8F9FA]"></div>

          <div className="absolute top-70 left-0 h-[50px] w-[2px] bg-gradient-to-b from-[#000000] to-[#F8F9FA]"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative mb-20">
              {/* Step Label */}
              <span className="absolute px-4 py-5 text-sm font-normal text-white bg-gray-800 -left-16 font-outfit">
                {step.day}
              </span>
              <h3 className="text-lg font-medium tracking-normal ps-7 font-outfit ">
                {step.title}
              </h3>
              <p className="text-gray-400 mt-2 text-sm ps-7 h-[70px] font-outfit tracking-tight ">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonials - with proper z-index */}
      <div style={{ zIndex: 10, position: "relative" }}>
        <TestimonialSection />
      </div>
    </section>
  );
}
const TESTIMONIALS = [
  {
    quote:
      "Using their services was a game-changer. We scaled our team in minutes and the real-time collaboration meant we delivered projects faster than ever. No more recruitment headaches!",
    name: "Sarah Johnson",
    role: "CTO, TechStart",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQDVGuhd8lIocz4mvXTzVeLTkiejls2GiuBHRvxU8jTN19dhC9yk84F7OCnLlI8r1ISVnqzrgXN9NtfVct6l6uQU3h2M2tkcmu5l8V7Y5sqjI1HhapmpTtbaASxn4Wq8Gk1jPEdmQBAcf6-PEYvg0Rwauh6crozM7y9nnsudMNNWtBXpnN99cKNX1lpcJY1pITi39R6YP42Yz0S6N59xCzQE8hFbiuYcrbPBjpSSXmBkPGLZrxAhwtHrD-AF6zUa_XwEgrBZPTAr3b",
  },
  {
    quote:
      "I was skeptical at first, but the quality is incredible. The developers integrated seamlessly with our team, and we've saved months of development time with their expertise.",
    name: "Michael Chen",
    role: "VP Engineering, InnovateCo",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKopFjoDiTMEkqIuhf2Dn8tydP9hnu2ZgKqSbCwWcoCOh9XuZDzn0RoQDi1-oa9zqRMm7nQAydCdMGu67bGeseI1zhQWhP2cQzkPWMStSAMm7tX0lmuR-0NbP84ajIGDbpvzcg4MDdT2pCDpg0niQdeOjbTr1wvc9a4ktB3ISWQe9kNhfACN6kZXJrC23d6p4Rbt6NkUFVbKEtOT7B6M0ImloD1tMDeqN7xBw8K00c-_-uRA2HIxakiZqI45jdIQX1aVDI22yPxbQ0",
  },
  {
    quote:
      "Finally, a partner that truly understands software development. The flexibility and quality they provide has transformed how we build products. Highly recommended!",
    name: "David Martinez",
    role: "Product Lead, ScaleUp",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMcX_p5Mrz3-GnIbh1arLvCdt082jlKLuAD3TmaPiNn30jaOZAlT5XhemEb_AVTqGiA1FZQfWbaYbUQLBFYc_Oak3odrntFBBtViBpZP1F1f2iBeN2kDcqxbhaL33IvQYJu7PkBiv66W6lNqbRo6zEusd77WRGMN_z47PJiQW5txl2H0Sn1LIn2NBy5ySGRM0iTRfxupgVV4RFTA-JNhHwlQS2IL8hK1Uc7I4rHsijHucDJBQTyoZr3nJpWWSqbp59oNj4MxJBLmnA",
  },
];

export function TestimonialSection() {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const scrollByPage = (dir = 1) => {
    const el = carouselRef.current;
    if (!el) return;
    const step = el.clientWidth;
    const target = Math.max(
      0,
      Math.min(el.scrollLeft + dir * step, el.scrollWidth - el.clientWidth)
    );
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => scrollByPage(1), 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const update = () => {
      setCanPrev(el.scrollLeft > 0);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id="testimonials" className="relative pb-8 sm:pb-12">
      <div className="container relative px-4 mx-auto">
        <div
          className="relative max-w-4xl mx-auto overflow-hidden group"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="flex flex-col items-center flex-shrink-0 w-full text-center p-2 sm:p-0 snap-start snap-always"
              >
                <div className="relative max-w-2xl mx-auto w-full transition-transform duration-300 bg-gradient-to-br from-[#000000] to-[#090f24] p-6 sm:p-8 md:p-10 rounded-lg sm:rounded-xl">
                  {/* Quote icon */}
                  <div className="mb-3 sm:mb-6">
                    <span className="text-2xl sm:text-3xl md:text-4xl text-red-400/60">
                      "
                    </span>
                  </div>

                  {/* Quote text */}
                  <blockquote className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-xl italic font-light leading-relaxed text-white/90">
                    "{t.quote}"
                  </blockquote>

                  {/* Author info */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10">
                    <img
                      alt={t.name}
                      src={t.img}
                      className="object-cover rounded-full w-12 h-12 sm:w-14 sm:h-14 ring-2 ring-white/20 flex-shrink-0"
                    />
                    <div className="text-left">
                      <p className="text-sm sm:text-base md:text-lg font-medium text-white">
                        {t.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-300/70">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons - desktop only */}
          <div className="hidden sm:block absolute z-10 transition-opacity duration-300 transform -translate-y-1/2 opacity-0 left-2 top-1/2 group-hover:opacity-100">
            <button
              onClick={() => scrollByPage(-1)}
              disabled={!canPrev}
              className={`p-3 text-white shadow-lg transition-all duration-300 bg-black/50 rounded-full ${
                !canPrev
                  ? "opacity-40 pointer-events-none"
                  : "hover:scale-110 hover:bg-black/70"
              }`}
            >
              ‹
            </button>
          </div>

          <div className="hidden sm:block absolute z-10 transition-opacity duration-300 transform -translate-y-1/2 opacity-0 right-2 top-1/2 group-hover:opacity-100">
            <button
              onClick={() => scrollByPage(1)}
              disabled={!canNext}
              className={`p-3 text-white shadow-lg transition-all duration-300 bg-black/50 rounded-full ${
                !canNext
                  ? "opacity-40 pointer-events-none"
                  : "hover:scale-110 hover:bg-black/70"
              }`}
            >
              ›
            </button>
          </div>
        </div>

        {/* Mobile indicators */}
        <div className="flex justify-center gap-2 mt-6 sm:hidden">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = carouselRef.current;
                if (el)
                  el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
              }}
              className="w-2 h-2 rounded-full bg-white/30 transition-all"
            />
          ))}
        </div>
      </div>

      <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
    </section>
  );
}
