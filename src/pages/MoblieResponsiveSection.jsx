import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Globe, Search, Users, Zap, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import ResponsiveDesignCarousel from './Carousel'

const ResponsiveDesign = () => {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FFF5F5] to-white  sm:px-6 lg:px-20 font-outfit">
        <div className="grid items-center gap-10 mx-auto max-w-7xl lg:grid-cols-2">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider text-white uppercase bg-[#E2001A] rounded-full">
              Why It Matters
            </span>

            <h1 className="text-5xl font-medium leading-tight tracking-tight text-gray-900 xl:text-7xl lg:text-6xl">
              Mobile Responsiveness: <br />
              <span className="text-[#E2001A]">Your Website’s First Impression</span>
            </h1>

            <p className="max-w-xl text-lg text-gray-600">
              Over 70% of online visitors browse through mobile devices. If your website isn’t mobile-friendly,
              you’re losing potential clients before they even explore your brand.
            </p>

            <Button className="bg-[#E2001A] hover:bg-[#A0001E] text-white px-6 py-3 rounded-lg text-lg">
              Learn How It Works <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1600105574066-603ee0fbd1a8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Responsive design mockup"
              className="object-cover w-full h-auto shadow-xl rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Soft Background Decoration */}
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
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Design collaboration"
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
              About Responsive Design
            </span>

            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Why every website must be <span className="text-[#E2001A]">mobile-friendly</span>.
            </h2>

            <p className="mb-6 text-gray-600">
              Responsive design ensures your website adjusts seamlessly to any screen size — desktop, tablet, or
              smartphone. It’s not just a design choice, it’s a business necessity.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Smartphone className="w-6 h-6 text-[#E2001A] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Better User Experience</h4>
                  <p className="text-sm text-gray-600">
                    Visitors stay longer and explore more when your site is comfortable to use on any device.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Search className="w-6 h-6 text-[#E2001A] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Improved SEO Ranking</h4>
                  <p className="text-sm text-gray-600">
                    Google prioritizes mobile-friendly sites, helping you rank higher in search results.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-[#E2001A] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Higher Conversions</h4>
                  <p className="text-sm text-gray-600">
                    Easy navigation and readability directly improve your sales, inquiries, and brand trust.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ResponsiveDesignCarousel />

      {/* Statistic Section */}
      <section className="px-6 py-20 bg-gray-50 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-bold text-gray-900"
          >
            The impact of mobile responsiveness
          </motion.h2>
          <p className="max-w-3xl mx-auto mb-12 text-gray-600">
            Businesses that adopt mobile-friendly designs see improved engagement and lower bounce rates.
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: "Users browse via mobile", value: "70%" },
              { label: "Higher retention rate", value: "60%" },
              { label: "Faster load performance", value: "2x" },
              { label: "SEO improvement", value: "35%" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-white shadow-md rounded-2xl"
              >
                <h3 className="text-3xl font-bold text-[#E2001A]">{stat.value}</h3>
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
          Ready to make your website mobile-ready?
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90">
          Let’s help you create a seamless, responsive design that looks stunning on any device.
        </p>
        <Button className="bg-white text-[#E2001A] hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg">
          Get a Free Site Audit
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default ResponsiveDesign;
