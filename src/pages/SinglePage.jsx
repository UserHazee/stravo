import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  MousePointer,
  Zap,
  BarChart,
  ArrowRight,
  Layers,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const SinglePageWebsite = () => {
  const myHandler = () => {
    console.log("Get Started clicked");
  };

  return (
    <div className="min-h-screen bg-white font-outfit">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FFF5F5] to-white sm:px-6 lg:px-20 font-outfit">
        <div className="grid items-center gap-10 mx-auto max-w-7xl lg:grid-cols-2">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
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

            <Button
              className="hidden md:inline-flex bg-gradient-to-br from-[#000000] to-[#333333] hover:from-[#A0001E] hover:to-[#A0001E] text-white px-6 rounded-lg"
              onClick={myHandler}
            >
              Start Now <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
              alt="Single page website design"
              className="object-cover w-full h-auto shadow-xl rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Subtle gradient background effect */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#E2001A]/10 to-transparent rounded-full blur-3xl" />
      </section>

      {/* About Section */}
      <section className="px-6 py-20 bg-white sm:px-10 lg:px-20">
        <div className="grid items-center gap-12 mx-auto max-w-7xl lg:grid-cols-2">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-0"
          >
            <img
              src="https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=869&auto=format&fit=crop"
              alt="Single page design layout"
              className="object-cover w-full h-auto shadow-xl rounded-2xl"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
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
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-[#E2001A] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Fast Loading</h4>
                  <p className="text-sm text-gray-600">
                    Optimized to load quickly, providing a smoother user
                    experience and lower bounce rates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MousePointer className="w-6 h-6 text-[#E2001A] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Simple Navigation
                  </h4>
                  <p className="text-sm text-gray-600">
                    Scrolling replaces clicks — making it effortless for users
                    to explore your message.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <BarChart className="w-6 h-6 text-[#E2001A] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Better Conversion Focus
                  </h4>
                  <p className="text-sm text-gray-600">
                    With one clear call-to-action, single-page websites drive
                    visitors toward one goal — inquiry, signup, or purchase.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-6 py-20 bg-gray-50 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-bold text-gray-900"
          >
            Why brands choose single page websites
          </motion.h2>
          <p className="max-w-3xl mx-auto mb-12 text-gray-600">
            Minimalism, clarity, and speed — three pillars that make single-page
            sites more effective than ever.
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: "Faster navigation", value: "3x" },
              { label: "Higher conversions", value: "45%" },
              { label: "Less bounce rate", value: "-35%" },
              { label: "Quicker load time", value: "1.5s" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-white shadow-md rounded-2xl"
              >
                <h3 className="text-3xl font-bold text-[#E2001A]">
                  {stat.value}
                </h3>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-[#E2001A] text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-4xl font-bold"
        >
          Ready to build your single page website?
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90">
          Let’s craft a sleek, modern single-page site that tells your story in
          seconds — not clicks.
        </p>
        <Button className="bg-white text-[#E2001A] hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg">
          Request a Free Concept
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default SinglePageWebsite;
