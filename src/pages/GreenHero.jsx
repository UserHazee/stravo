// GreenHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Server, Shield, Zap, Cloud } from "lucide-react";

export default function GreenHero() {
  const services = [
    {
      icon: <Server className="w-6 h-6 text-black" />,
      title: "Cloud Hosting",
      desc: "Scalable cloud infrastructure with 99.9% uptime guarantee. Perfect for businesses of all sizes with automatic scaling and load balancing."
    },
    {
      icon: <Shield className="w-6 h-6 text-black" />,
      title: "Website Security",
      desc: "Comprehensive security solutions including DDoS protection, malware scanning, and regular security updates to keep your site protected."
    },
    {
      icon: <Zap className="w-6 h-6 text-black" />,
      title: "Performance Optimization",
      desc: "High-speed hosting with CDN integration, caching solutions, and server optimization for lightning-fast website performance."
    },
    {
      icon: <Cloud className="w-6 h-6 text-black" />,
      title: "Server Management",
      desc: "Full server management including 24/7 monitoring, regular backups, security patching, and performance tuning."
    }
  ];

  return (
    <>
      <section className="py-10 text-center bg-white sm:py-20 font-outfit">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="mb-12"
        >
          <h2 className="mb-3 text-4xl font-extrabold text-gray-900">
            Our Hosting Services
          </h2>
          <p className="max-w-xl mx-auto text-gray-500">
            We provide comprehensive web hosting solutions to ensure your website is fast, secure, and always available for your customers.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid max-w-6xl grid-cols-1 gap-6 px-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {/* Big Left Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:col-span-2 bg-gradient-to-br from-[#4A000F] to-[#E2001A] text-left text-white rounded-2xl p-8 flex items-center justify-center"
          >
            <h3 className="text-3xl font-medium leading-snug md:text-4xl">
              Reliable Hosting With 99.9% Uptime Guarantee For Your Business.
            </h3>
          </motion.div>

          {/* Cloud Hosting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-6 text-left transition shadow-sm bg-gray-50 rounded-2xl hover:shadow-md"
          >
            {services[0].icon}
            <h4 className="mt-3 mb-2 text-lg font-semibold text-gray-900">
              {services[0].title}
            </h4>
            <p className="text-sm leading-relaxed text-gray-500">
              {services[0].desc}
            </p>
          </motion.div>

          {/* Bottom 3 Small Cards */}
          {services.slice(1).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 * index }}
              className="p-6 text-left transition shadow-sm bg-gray-50 rounded-2xl hover:shadow-md"
            >
              {service.icon}
              <h4 className="mt-3 mb-2 text-lg font-semibold text-gray-900">
                {service.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-500">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

       
      </section>
    </>


  );
};