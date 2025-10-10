// pages/webhosting.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Server,
  Shield,
  Zap,
  Check,
  Plus,
  Minus,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  UserCheck,
  Database,
  Cloud as CloudIcon,
  Bug,
  BarChart3,
  Lock,
  RefreshCw
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GreenHero from './GreenHero';
import WebHostingSection from './NewSection';
import {Button} from '../components/ui/button'

const myHandler = () => {
  console.log("Get Started clicked");
};

const WebHosting = () => {
  const [openFaq, setOpenFaq] = useState(null);

  // Hosting technologies
 

  // Hosting services
  const services = [
    {
      title: "Website Audits",
      items: [
        "Performance analysis and optimization",
        "Security vulnerability assessment",
        "UX/UI design and usability review"
      ]
    },
    {
      title: "Compliance Updates",
      items: [
        "ADA and 508 compliance standards",
        "Privacy regulations implementation",
        "Regular compliance monitoring"
      ]
    },
    {
      title: "Website Security",
      items: [
        "Multi-layered security protocols",
        "24/7 threat monitoring",
        "Automated backup systems"
      ]
    },
    {
      title: "Cloud Hosting",
      items: [
        "Scalable cloud infrastructure",
        "Load balancing & auto-scaling",
        "99.9% uptime guarantee"
      ]
    },
    {
      title: "Server Management",
      items: [
        "24/7 server monitoring",
        "Performance optimization",
        "Security patching & updates"
      ]
    },
    {
      title: "Database Management",
      items: [
        "Database optimization",
        "Regular backups",
        "Performance tuning"
      ]
    },
    {
      title: "SSL Certificates",
      items: [
        "Free SSL installation",
        "Certificate renewal",
        "Security compliance"
      ]
    },
    {
      title: "Emergency Support",
      items: [
        "24/7 technical support",
        "Emergency fixes",
        "Rapid response team"
      ]
    }
  ];

  // Hosting team roles
  const teamRoles = [
    { name: 'Sys Admin', icon: <Server className="w-10 h-10" />, color: 'from-[#4A000F] to-[#E2001A]' },
    { name: 'Security', icon: <Shield className="w-10 h-10" />, color: 'from-[#4A000F] to-[#E2001A]' },
    { name: 'DevOps', icon: <CloudIcon className="w-10 h-10" />, color: 'from-[#4A000F] to-[#E2001A]' },
    { name: 'DBA', icon: <Database className="w-10 h-10" />, color: 'from-[#4A000F] to-[#E2001A]' },
    { name: 'Support', icon: <UserCheck className="w-10 h-10" />, color: 'from-[#4A000F] to-[#E2001A]' }
  ];

  // Hosting pillars
  const pillars = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Performance & Reliability",
      description: "High-speed servers, 99.9% uptime guarantee, and optimized performance for your applications."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Security First Approach",
      description: "Proactive security measures, regular updates, and comprehensive backup solutions."
    },
    {
      icon: <RefreshCw className="w-10 h-10" />,
      title: "24/7 Expert Support",
      description: "Round-the-clock monitoring and immediate response from our hosting specialists."
    }
  ];

  // Hosting help categories
  const helpCategories = [
    "Website Migration",
    "Performance Optimization",
    "Security Hardening",
    "Backup Solutions",
    "SSL Certificates",
    "Domain Management",
    "Email Hosting",
    "Server Monitoring"
  ];

  // Hosting testimonials
  const testimonials = [
    {
      author: "James Wilson",
      role: "CTO, E-commerce Platform",
      quote: "Since migrating to BrainHub hosting, our site speed improved by 60% and we've had zero downtime. Their 24/7 support team is incredibly responsive.",
      rating: 5
    },
    {
      author: "Maria Gonzalez",
      role: "Marketing Director, Media Company",
      quote: "The security features and regular backups give us peace of mind. When we had a plugin conflict, their team resolved it in under an hour.",
      rating: 5
    },
    {
      author: "David Kim",
      role: "Founder, SaaS Startup",
      quote: "Scalable hosting that grows with our business. The performance optimization has significantly reduced our bounce rates and improved conversions.",
      rating: 5
    }
  ];

  // Hosting stats
  const stats = [
    { label: "99.9% Uptime Guarantee" },
    { label: "24/7 Support Response" },
    { label: "500+ Websites Hosted" },
    { label: "15min Average Response Time" }
  ];

  // Hosting FAQs
  const faqs = [
    {
      question: "Do you offer website migration services?",
      answer: "Yes, we provide free website migration for all our hosting plans. Our experts will handle the entire migration process with minimal downtime."
    },
    {
      question: "What is your uptime guarantee?",
      answer: "We offer a 99.9% uptime guarantee. If we fall below this, we provide service credits as outlined in our SLA."
    },
    {
      question: "How often do you perform backups?",
      answer: "We perform daily automated backups for all plans, with real-time backups available on our Enterprise plan. All backups are stored securely off-site."
    },
    {
      question: "What security measures do you have in place?",
      answer: "Our security includes DDoS protection, malware scanning, firewall protection, regular security patches, and SSL certificates for all hosted sites."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FFF5F5] to-white  sm:px-6 lg:px-20 font-outfit">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider text-white uppercase bg-[#E2001A] rounded-full">
                Premium Hosting Solutions
              </span>

              <h1 className="text-5xl font-medium leading-tight tracking-tight text-gray-900 lg:text-6xl xl:text-7xl">
                Reliable Web <br/>
                <span className="text-[#E2001A]   ">Hosting & Maintenance Services.</span>
              </h1>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 lg:text-xl">
                  Keep your website fast, secure, and always online with our comprehensive hosting solutions and proactive maintenance services.
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button
                  className="hidden md:inline-flex bg-gradient-to-br from-[#000000] to-[#333333] hover:from-[#A0001E] hover:to-[#A0001E] text-white px-6 rounded-lg"
                  onClick={myHandler}
                >
                  Get a call <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Technology Grid */}
            <motion.div
              className=""
            >
                <picture 
                className='w-full mx-auto md:min-w-lg sm:min-w-md min-w-xs'>
                    <img src="../src/assets/Vps.png" alt="" className='object-contain w-full h-auto'/>
                </picture>
                
            </motion.div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#E2001A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-gradient-to-tr from-gray-200/20 to-transparent blur-3xl" />
      </section>
      <GreenHero />

      {/* Team Structure Section */}
      <section className="px-4 py-20 bg-white sm:px-6 lg:px-20 font-outfit">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Expert hosting team at your service
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Our specialized team ensures your hosting infrastructure is secure, optimized, and always available.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 mb-16 md:grid-cols-5"
          >
            {teamRoles.map((role, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center"
              >
                <div className={`w-24 h-24 mb-4 bg-gradient-to-br ${role.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                  {role.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{role.name}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 text-center bg-gray-50 rounded-2xl"
          >
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Proactive Monitoring & Support</h3>
            <p className="max-w-4xl mx-auto text-lg text-gray-600">
              Our team continuously monitors your infrastructure, performs regular maintenance, and is available 24/7 to resolve any issues before they impact your business.
            </p>
          </motion.div>
        </div>
      </section>
      
        <WebHostingSection />

      {/* Three Pillars Section */}
      <section className="px-4 py-20 bg-gray-50 sm:px-6 lg:px-20 font-outfit">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
              Our Hosting Excellence Pillars
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="p-10 text-center bg-white shadow-lg rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-full text-[#E2001A]">
                  {pillar.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 py-20 bg-gray-50 sm:px-6 lg:px-20 font-outfit">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-white shadow-xl rounded-2xl"
          >
            <h2 className="mb-4 text-3xl font-bold text-center text-gray-900 lg:text-4xl">
              Need hosting for your website?
            </h2>
            <p className="mb-8 text-lg text-center text-gray-600">
              Let's discuss your hosting requirements and find the perfect solution for your business.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:border-transparent"
              />
              <textarea
                placeholder="Tell us about your hosting needs..."
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:border-transparent"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#E2001A] hover:bg-[#A0001E] text-white text-lg font-semibold rounded-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                Get Hosting Quote →
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-20 bg-white sm:px-6 lg:px-20 font-outfit">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="overflow-hidden border border-gray-200 rounded-xl"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex items-center justify-between w-full p-6 text-left transition-colors hover:bg-gray-50"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === idx ? (
                    <Minus className="flex-shrink-0 w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="flex-shrink-0 w-5 h-5 text-gray-500" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebHosting;