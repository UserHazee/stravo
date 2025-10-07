// pages/webdev.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Code2,
  Users,
  Zap,
  Target,
  Check,
  Plus,
  Minus,
  MessageCircle,
  TrendingUp,
  UserCheck,
  Database,
  Server,
  Cloud as CloudIcon,
  Bug,
  Palette
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Button} from '../components/ui/button'


    const myHandler = () => {
        // Handle button click
        console.log("Get Started clicked");
    };

const WebDev = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const technologies = [
    { name: "React", icon: <FontAwesomeIcon icon={['fab', 'react']} size='2x' className='text-[#DD0031]' /> },
    { name: "Node.js", icon: <FontAwesomeIcon icon={['fab', 'node-js']} size='2x' className='text-[#DD0031]' /> },
    { name: "Angular", icon: <FontAwesomeIcon icon={['fab', 'angular']} size='2x' className='text-[#DD0031]' /> },
    { name: "Vue.js", icon: <FontAwesomeIcon icon={['fab', 'vuejs']} size='2x' className='text-[#DD0031]' /> },
    { name: "Php", icon: <FontAwesomeIcon icon={['fab', 'php']} size='2x' className='text-[#DD0031]' /> },
    { name: "Java", icon: <FontAwesomeIcon icon={['fab', 'java']} size='2x' className='text-[#DD0031]' /> },
    { name: "Python", icon: <FontAwesomeIcon icon={['fab', 'python']} size='2x' className='text-[#DD0031]' /> },
    { name: "Bootstrap", icon: <FontAwesomeIcon icon={['fab', 'bootstrap']} size='2x' className='text-[#DD0031]' /> },
    { name: "Css", icon: <FontAwesomeIcon icon={['fab', 'css']} size='2x' className='text-[#DD0031]' /> },
    { name: "Js", icon: <FontAwesomeIcon icon={['fab', 'js']} size='2x' className='text-[#DD0031]' /> },
    { name: "Npm", icon: <FontAwesomeIcon icon={['fab', 'npm']} size='2x' className='text-[#DD0031]' /> },
    { name: "Html5", icon: <FontAwesomeIcon icon={['fab', 'html5']} size='2x' className='text-[#DD0031]' /> },
  ];

  const services = [
    {
      title: "Product Development",
      items: [
        "Build end-to-end web applications",
        "Agile project delivery",
        "Cross-functional teams"
      ]
    },
    {
      title: "API Integration",
      items: [
        "Seamless third-party integrations",
        "REST and GraphQL APIs",
        "Custom API development"
      ]
    },
    {
      title: "Maintenance & Support",
      items: [
        "Ongoing monitoring",
        "Performance optimization",
        "Security updates"
      ]
    },
    {
      title: "Frontend Development",
      items: [
        "React, Angular, Vue",
        "Responsive design",
        "High performance UX"
      ]
    },
    {
      title: "Design & Prototyping",
      items: [
        "UX/UI design workshops",
        "Wireframing & prototyping",
        "User testing"
      ]
    },
    {
      title: "Quality Assurance & Testing",
      items: [
        "Automated testing",
        "Manual testing",
        "Test-driven development"
      ]
    },
    {
      title: "Security & Compliance",
      items: [
        "Data protection",
        "Best practices compliance",
        "Penetration testing"
      ]
    },
    {
      title: "Technology Migration",
      items: [
        "Legacy app modernization",
        "Cloud migration",
        "Refactoring"
      ]
    }
  ];

  const teamRoles = [
    { name: 'Frontend', icon: <Code2 className="w-10 h-10" />, color: 'from-[#4A000F] to-[#E2001A]' },
    { name: 'Backend', icon: <Server className="w-10 h-10" />, color: 'from-[#4A000F] to-[#E2001A]' },
    { name: 'DevOps', icon: <CloudIcon className="w-10 h-10" />, color: 'from-[#4A000F] to-[#E2001A]' },
    { name: 'QA', icon: <Bug className="w-10 h-10" />, color: 'from-[#4A000F] to-[#E2001A]' },
    { name: 'Design', icon: <Palette className="w-10 h-10" />, color: 'from-[#4A000F] to-[#E2001A]' }
  ];

  const pillars = [
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "Communication & Project Delivery",
      description: "Transparent communication, agile methodology, regular updates."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Business-oriented Implementation Decisions",
      description: "Focus on ROI, scalability, and alignment with business goals."
    },
    {
      icon: <UserCheck className="w-10 h-10" />,
      title: "Exceptional People Experience",
      description: "Dedicated teams with high ownership and technical excellence."
    }
  ];

  const helpCategories = [
    "Custom Web Apps",
    "Cross-platform Solutions",
    "SaaS Products",
    "Digital Strategy",
    "Data-driven Apps",
    "SEO Optimization",
    "Landing Pages",
    "Growth-focused Apps"
  ];

  const testimonials = [
    {
      author: "Sarah Johnson",
      role: "CEO, TechFlow SaaS",
      quote: "BrainHub helped us scale quickly with a reliable development team. Their expertise in React and Node.js was exactly what we needed to launch our platform ahead of schedule.",
      rating: 5
    },
    {
      author: "Michael Chen",
      role: "CTO, FinanceCore Startup",
      quote: "They delivered complex integrations faster than expected. The team's understanding of financial APIs and security requirements was impressive. Highly recommend for fintech projects.",
      rating: 5
    },
    {
      author: "Emily Rodriguez",
      role: "Product Owner, ShopSmart E-commerce",
      quote: "The UX improvements significantly boosted our conversion rates. BrainHub's design team created an intuitive shopping experience that our customers love. Sales increased by 40%.",
      rating: 5
    }
  ];

  const stats = [
    { label: "98% Client Satisfaction" },
    { label: "200+ Projects Delivered" },
    { label: "5+ Years Experience" },
    { label: "24/7 Support" }
  ];

  const faqs = [
    {
      question: "How long does web development take?",
      answer: "Depends on project complexity – from weeks to several months. A simple landing page might take 2-4 weeks, while a complex web application could take 3-6 months or more."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer comprehensive maintenance, monitoring, and scaling services. Our team ensures your application stays secure, performant, and up-to-date with the latest technologies."
    },
    {
      question: "Can you modernize my legacy app?",
      answer: "Absolutely, we specialize in migration and refactoring. We can help you move from outdated technologies to modern frameworks, improve performance, and add new features."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with a wide range of modern technologies including React, Vue, Angular, Node.js, Python, Django, and more. We choose the best tech stack based on your specific needs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FFF5F5] to-white sm:px-6 lg:px-20 font-outfit">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider text-white uppercase bg-[#E2001A] rounded-full">
                Software Delivery Services
              </span>

              <h1 className="text-5xl font-medium leading-tight tracking-tight text-gray-900 lg:text-6xl xl:text-7xl">
                Professional Web Development for Your Business Needs.
              </h1>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 lg:text-xl">
                  Get scalable, interactive web applications built with an end-to-end delivery approach from frontend and backend to infrastructure.
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button
                  className="hidden md:inline-flex bg-gradient-to-br from-[#000000] to-[#333333] hover:from-[#A0001E] hover:to-[#A0001E] text-white px-6 rounded-lg"
                  onClick={myHandler}
                >
                  Get a call
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Technology Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 lg:grid-cols-4"
            >
              {technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center justify-center gap-3 p-6 transition-all bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg group"
                >
                  <div className="transition-transform group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-center text-gray-700">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#E2001A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-gradient-to-tr from-gray-200/20 to-transparent blur-3xl" />
      </section>

      {/* Services Grid Section */}
      <section className="px-4 py-20  bg-gradient-to-br from-[#000000] to-[#090f24] sm:px-6 lg:px-20 font-outfit">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
              We'll bring your product to life from start to finish.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 transition-all bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="mb-6 text-xl font-bold text-gray-900">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 text-[#E2001A] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Full-stack teams tailored for your needs
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Our team includes frontend, backend, DevOps, and QA engineers working together to deliver complete solutions.
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
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Collaborative Approach</h3>
            <p className="max-w-4xl mx-auto text-lg text-gray-600">
              Each team member brings specialized expertise while working seamlessly together to ensure your project's success from conception to deployment.
            </p>
          </motion.div>
        </div>
      </section>

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
              The Three Pillars of Excellence
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

      {/* What We Can Help With Section */}
      <section className="px-4 py-20 bg-white sm:px-6 lg:px-20 font-outfit">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
              What we can help you with
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {helpCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 text-center transition-all border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#E2001A] hover:shadow-md"
              >
                <span className="font-semibold text-gray-900">{category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-[#000000] to-[#090f24] sm:px-6 lg:px-20 font-outfit">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
              What our Clients say about us
            </h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it. Here's what our clients have to say about working with BrainHub.
            </p>
          </motion.div>

          <div className="grid gap-8 mb-16 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white border border-gray-700 backdrop-blur-sm rounded-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#E2001A] text-xl">★</span>
                  ))}
                </div>
                <p className="mb-6 text-lg italic text-black">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#4A000F] to-[#E2001A] rounded-full"></div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-black">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 text-center bg-white border border-gray-700 backdrop-blur-sm rounded-2xl"
          >
            <h3 className="mb-6 text-3xl font-bold text-black">Join 200+ satisfied clients</h3>
            <p className="mb-8 text-lg text-black">
              From startups to enterprise companies, we've helped businesses of all sizes achieve their digital goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="px-6 py-3 bg-white border-2 border- bg-gradient-to-br from-[#4A000F] to-[#E2001A] rounded-full">
                  <span className="font-semibold text-white">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
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
              Looking to build a web app?
            </h2>
            <p className="mb-8 text-lg text-center text-gray-600">
              Let's talk about your project and how we can help bring your vision to life with our expert development team.
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
                placeholder="Tell us about your project..."
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:border-transparent"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#E2001A] hover:bg-[#A0001E] text-white text-lg font-semibold rounded-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                Get a Proposal →
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

export default WebDev;