import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button'

// --- Placeholder Images (replace with your actual assets) ---
import hostingImg1 from '../assets/Server.png';
import hostingImg2 from '../assets/maintenance.png';
import teamMember1 from '../assets/1000483230 (1).png';
import teamMember2 from '../assets/1000483218.png';
import teamMember3 from '../assets/Gemini_Mullet.png';
const myHandler = () => {
  console.log("Get Started clicked");
};

export default function WebHostingSection() {
  return (
    <section className="font-outfit mx-auto bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Why You Need Web Hosting Section */}
      <div className="grid items-center max-w-6xl grid-cols-1 gap-12 mx-auto mb-20 lg:grid-cols-2 lg:gap-16 md:mb-32">
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
          <p className="mb-2 text-sm font-semibold tracking-wider text-green-400 uppercase">
            Web Hosting
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Why You Need Reliable <br className="hidden md:inline" /> Web Hosting
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-lg text-gray-300 lg:max-w-none lg:mx-0">
            Your website’s performance depends on its hosting. A fast, secure, and
            scalable web hosting service ensures that your site runs smoothly,
            loads quickly, and stays online — no matter how much traffic you get.
            Our hosting solutions are optimized for speed, uptime, and reliability.
          </p>

          <div className="flex justify-center mb-8 space-x-8 lg:justify-start md:space-x-12">
            <div>
              <p className="text-4xl font-bold text-white">4K+</p>
              <p className="mt-1 text-sm text-gray-400">Hosted Websites</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">99.9%</p>
              <p className="mt-1 text-sm text-gray-400">Uptime Guarantee</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">24/7</p>
              <p className="mt-1 text-sm text-gray-400">Support Availability</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Our Expert Hosting Team Section */}
      <div className="grid items-center max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2 lg:gap-16">
        {/* Left: Team Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Meet Our Expert <br className="hidden md:inline" /> Hosting Team
          </h2>
          <p className="max-w-xl mx-auto mb-6 text-lg text-gray-300 lg:max-w-none lg:mx-0">
            Our team of web hosting professionals ensures your website stays
            lightning-fast and always available. From setup to scaling, we manage
            everything behind the scenes so you can focus on growing your business.
          </p>
          <p className="max-w-xl mx-auto mb-8 text-lg text-gray-300 lg:max-w-none lg:mx-0">
            Whether you’re launching a personal blog or running a high-traffic eCommerce
            site, our hosting engineers keep your data secure and your site performing
            at its best.
          </p>

          <motion.div 
            className=' max-w-30 rounded-xl'
            initial={{ y: 0 }}
            whileHover={{
              y: -4, // Translate Down
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            {/* The Button component is nested inside the animated div */}
            <Button
              className="hidden md:inline-flex bg-gradient-to-br from-[#000000] to-[#333333] cursor-pointer text-white px-6 rounded-lg"
              onClick={myHandler}
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Team Member Images */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative grid grid-cols-2 gap-4 place-items-center lg:place-items-end"
        >
          <div className="absolute z-0 hidden w-4/5 -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-full opacity-50 top-1/2 left-1/2 h-4/5 md:block"></div>

          <div className="relative col-span-2 md:col-span-1">
            <img
              src={teamMember1}
              alt="Hosting expert"
              className="z-10 object-cover w-48 h-48 mx-auto shadow-lg sm:w-64 sm:h-64 md:w-full md:h-auto rounded-xl md:rounded-full"
            />
          </div>
          <div className="relative col-span-1">
            <img
              src={teamMember2}
              alt="Support engineer"
              className="z-10 object-cover w-32 h-32 shadow-lg sm:w-48 sm:h-48 md:w-full md:h-auto rounded-xl md:rounded-full"
            />
          </div>
          <div className="relative col-span-1 md:left-50 lg:left-35">
            <img
              src={teamMember3}
              alt="Network administrator"
              className="z-10 object-cover w-32 h-32 shadow-lg sm:w-48 sm:h-48 md:w-full md:h-auto rounded-xl md:rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section >
  );
}
