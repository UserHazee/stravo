import React from 'react';
import { motion } from 'framer-motion';

// --- Placeholder Images (replace with your actual assets) ---
import hostingImg1 from '../assets/hostp.png';
import hostingImg2 from '../assets/storage.png';
import teamMember1 from '../assets/1000483230 (1).png';
import teamMember2 from '../assets/1000483218.png';
import teamMember3 from '../assets/Gemini_Mullet.png';

export default function WebHostingSection() {
  return (
    <section className="font-outfit mx-auto bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Why You Need Web Hosting Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-32">
        {/* Left: Hosting Images */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="absolute top-0 left-0 w-24 h-24 bg-green-400 rounded-full mix-blend-screen opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600 rounded-full mix-blend-screen opacity-10"></div>

          <div className="relative grid grid-cols-2 gap-4">
            <img
              src={hostingImg1}
              alt="Server management and setup"
              className="rounded-lg shadow-lg w-full h-auto object-cover  bg-gradient-to-tl from-[#4A000F] to-[#E2001A] aspect-square"
            />
            <img
              src={hostingImg2}
              alt="Team discussing web hosting solutions"
              className="rounded-lg shadow-lg mt-8 w-full h-auto bg-gradient-to-tl from-[#4A000F] to-[#E2001A] object-cover aspect-square"
            />
          </div>
        </motion.div>

        {/* Right: Web Hosting Text and Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <p className="text-green-400 uppercase text-sm font-semibold tracking-wider mb-2">
            Web Hosting
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Why You Need Reliable <br className="hidden md:inline" /> Web Hosting
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
            Your website’s performance depends on its hosting. A fast, secure, and
            scalable web hosting service ensures that your site runs smoothly,
            loads quickly, and stays online — no matter how much traffic you get.
            Our hosting solutions are optimized for speed, uptime, and reliability.
          </p>

          <div className="flex justify-center lg:justify-start space-x-8 md:space-x-12 mb-8">
            <div>
              <p className="text-4xl font-bold text-white">4K+</p>
              <p className="text-gray-400 text-sm mt-1">Hosted Websites</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">99.9%</p>
              <p className="text-gray-400 text-sm mt-1">Uptime Guarantee</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">24/7</p>
              <p className="text-gray-400 text-sm mt-1">Support Availability</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Our Expert Hosting Team Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Team Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Meet Our Expert <br className="hidden md:inline" /> Hosting Team
          </h2>
          <p className="text-gray-300 text-lg mb-6 max-w-xl lg:max-w-none mx-auto lg:mx-0">
            Our team of web hosting professionals ensures your website stays
            lightning-fast and always available. From setup to scaling, we manage
            everything behind the scenes so you can focus on growing your business.
          </p>
          <p className="text-gray-300 text-lg mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
            Whether you’re launching a personal blog or running a high-traffic eCommerce
            site, our hosting engineers keep your data secure and your site performing
            at its best.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-full transition duration-300">
            Get Started
          </button>
        </motion.div>

        {/* Right: Team Member Images */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative grid grid-cols-2 gap-4 place-items-center lg:place-items-end"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gray-800 rounded-full opacity-50 z-0 hidden md:block"></div>

          <div className="relative col-span-2 md:col-span-1">
            <img
              src={teamMember1}
              alt="Hosting expert"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-full md:h-auto object-cover rounded-xl md:rounded-full shadow-lg z-10 mx-auto"
            />
          </div>
          <div className="relative col-span-1">
            <img
              src={teamMember2}
              alt="Support engineer"
              className="w-32 h-32 sm:w-48 sm:h-48 md:w-full md:h-auto object-cover rounded-xl md:rounded-full shadow-lg z-10"
            />
          </div>
          <div className="relative col-span-1 md:left-50 lg:left-35">
            <img
              src={teamMember3}
              alt="Network administrator"
              className="w-32 h-32 sm:w-48 sm:h-48 md:w-full md:h-auto object-cover rounded-xl md:rounded-full  shadow-lg z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
