import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from '../assets/Remove background project.png'
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "What Is Responsive Design?",
    category: "Overview",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    description:
      "Responsive design ensures websites look and function properly across devices. It adapts layouts to different screen sizes for a consistent user experience.",
  },
  {
    title: "Improved User Experience",
    category: "Benefit #1",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80",
    description:
      "A responsive site enhances navigation and aesthetics on all devices. Better UX helps retain users and prevents them from leaving for competitors.",
  },
  {
    title: "Efficiency and Maintenance",
    category: "Benefit #2",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    description:
      "Responsive websites are easier to build, maintain, and update — saving time and effort since you only manage one site instead of multiple versions.",
  },
  {
    title: "Better SEO and Indexing",
    category: "Benefit #3",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Search engines like Google prioritize mobile-friendly, responsive sites. This boosts SEO rankings and ensures your site performs well on all devices.",
  },
  {
    title: "Scalability and Cost-Effectiveness",
    category: "Benefit #4",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    description:
      "Responsive design adapts easily as your business grows — saving long-term development costs and improving performance across all devices.",
  },
];

export default function ResponsiveDesignCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-[#f8f7f4] py-16 px-8 md:px-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-start justify-between mb-8 ">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Learn the <br /> principles
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <p className="mb-2 text-sm font-semibold tracking-widest text-gray-600 uppercase">
              ARTICLES
            </p>
            <p className="text-sm text-gray-600 max-w-[150px] sm:max-w-sm  ">
              Design that inspires exceptional quality and sets new standards.
            </p>
            <div className="flex gap-3 mt-4">
              <button
                onClick={prevSlide}
                className="flex items-center justify-center w-10 h-10 transition border border-gray-300 rounded-full hover:bg-gray-900 hover:text-white"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="flex items-center justify-center w-10 h-10 transition border border-gray-300 rounded-full hover:bg-gray-900 hover:text-white"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-6 md:grid-cols-3">
          <div className="col-span-1">
            <img
              src={slides[index].image}
              alt={slides[index].title}
              className="object-cover w-full rounded-lg shadow-md h-72"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="col-span-1 p-8 bg-white rounded-lg shadow-md"
            >
              <p className="mb-2 text-xs tracking-widest text-gray-500 uppercase">
                {slides[index].category}
              </p>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {slides[index].title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                {slides[index].description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 hover:underline"
              >
                Read More →
              </a>
            </motion.div>
          </AnimatePresence>

          <div className="hidden col-span-1 md:block">
            <img
              src={Logo}
              alt="side preview"
              className="object-contain w-full rounded-lg shadow-md h-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
