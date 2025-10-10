import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Button } from "../components/ui/button";

import {
  FileText,
  Target,
  TrendingUp,
  Award,
  Code,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Search,
  Globe,
  Zap,
  BarChart3,
  Link2,
  Image as ImageIcon,
  Settings,
  FileCode,
  Eye,
} from "lucide-react";

const myHandler = () => {
  // Handle button click
  console.log("Get Started clicked");
};

const OnPageSEO = () => {
  return (
    <div className="min-h-screen font-outfit bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FFF5F5] to-white  sm:px-6 lg:px-20 font-outfit">
        <div className="grid items-center gap-12 mx-auto max-w-7xl lg:grid-cols-2">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 justify-center w-46  px-4 py-2 text-sm font-semibold tracking-wider text-white uppercase bg-[#E2001A] rounded-full"
            >
              <Sparkles className="w-4 h-4" />
              SEO Excellence
            </motion.span>

            <h1 className="text-5xl font-medium leading-tight tracking-tight text-gray-900 xl:text-7xl lg:text-6xl">
              On-Page SEO: <br />
              <span className="text-[#E2001A]   ">
                Rank Higher, Convert Better
              </span>
            </h1>

            <p className="max-w-xl text-xl leading-relaxed text-slate-600">
              On-page SEO is the foundation of digital visibility. Optimize your
              content, structure, and user experience to dominate search results
              and attract your ideal audience.
            </p>

            <div className="">
              <Button
                className="hidden md:inline-flex bg-gradient-to-br from-[#000000] to-[#333333] hover:from-[#A0001E] hover:to-[#A0001E] text-white px-6 rounded-lg"
                onClick={myHandler}
              >
                Get a call <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </motion.div>

          {/* Right - Image with overlay effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
              alt="SEO Analytics Dashboard"
              className="relative object-cover w-full h-auto shadow-2xl rounded-3xl ring-1 ring-slate-200"
            />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute px-6 py-3 bg-white border shadow-xl bottom-6 right-6 rounded-2xl border-slate-200"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Search Visibility
                  </p>
                  <p className="text-xs text-slate-600">+156% increase</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400/10 to-transparent blur-3xl animate-pulse" />
        <div
          className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-purple-400/10 to-transparent blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </section>

      {/* What is On-Page SEO */}
      <section className="px-6 py-24 bg-white sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              What Is On-Page SEO?
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              On-page SEO (also known as on-site SEO) is the practice of
              optimizing individual web pages to rank higher and earn more
              relevant traffic in search engines. It involves optimizing both
              the content and HTML source code of a page, including title tags,
              headers, meta descriptions, images, and internal links.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Unlike off-page SEO, which focuses on external signals like
              backlinks, on-page SEO is entirely within your control. It's about
              making your content discoverable, relevant, and valuable to both
              search engines and users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* On-Page vs Off-Page Comparison */}
      <section className="px-6 py-24 bg-gradient-to-b from-slate-50 to-white sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-slate-900 lg:text-5xl">
              On-Page SEO vs. Off-Page SEO
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-600">
              Understanding the difference helps you build a comprehensive SEO
              strategy
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* On-Page SEO Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white border-2 border-indigo-200 shadow-lg rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#4A000F] to-[#E2001A] rounded-xl">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  On-Page SEO
                </h3>
              </div>
              <p className="mb-6 text-slate-600">
                Optimizations made directly on your website
              </p>
              <ul className="space-y-3">
                {[
                  "Content quality and keyword optimization",
                  "Title tags and meta descriptions",
                  "Header tags (H1, H2, H3)",
                  "URL structure",
                  "Internal linking",
                  "Image optimization",
                  "Page speed and mobile-friendliness",
                  "Schema markup",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E2001A] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Off-Page SEO Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white border-2 border-purple-200 shadow-lg rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#4A000F] to-[#E2001A] rounded-xl">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Off-Page SEO
                </h3>
              </div>
              <p className="mb-6 text-slate-600">
                External factors that impact your rankings
              </p>
              <ul className="space-y-3">
                {[
                  "Backlink building",
                  "Social media marketing",
                  "Guest posting",
                  "Brand mentions",
                  "Influencer outreach",
                  "Local citations",
                  "Online reputation management",
                  "Content marketing distribution",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E2001A] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why On-Page SEO is Important */}
      <section className="px-6 py-24 bg-white sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-slate-900 lg:text-5xl">
              Why Is On-Page SEO Important?
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-600">
              On-page SEO is the foundation of your entire search strategy
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Search,
                title: "Helps Search Engines Understand",
                description:
                  "Proper on-page optimization helps search engines understand your content's topic, relevance, and value, leading to better rankings.",
              },
              {
                icon: Eye,
                title: "Improves User Experience",
                description:
                  "Well-optimized pages load faster, are easier to navigate, and provide better overall experience for your visitors.",
              },
              {
                icon: TrendingUp,
                title: "Increases Organic Traffic",
                description:
                  "Higher rankings from on-page SEO result in more visibility and clicks from users searching for your topics.",
              },
              {
                icon: Target,
                title: "Better Targeting",
                description:
                  "Optimize for specific keywords to attract the right audience who are actively searching for your products or services.",
              },
              {
                icon: Award,
                title: "Competitive Advantage",
                description:
                  "Many competitors overlook on-page SEO. Proper optimization gives you an edge in search results.",
              },
              {
                icon: BarChart3,
                title: "Measurable Results",
                description:
                  "Track rankings, traffic, and conversions to see the direct impact of your on-page optimization efforts.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 transition-all duration-300 border bg-gradient-to-br from-slate-50 to-white border-slate-200 rounded-2xl hover:shadow-lg hover:border-indigo-200"
              >
                <div className="flex items-center justify-center mb-4 shadow-lg w-14 h-14 bg-gradient-to-br from-[#4A000F] to-[#E2001A] rounded-xl">
                  <item.icon className="text-white w-7 h-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-24 overflow-hidden text-center text-white bg-gradient-to-br from-[#4A000F] to-[#E2001A]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Ready to Optimize?</span>
          </div>

          <h2 className="mb-6 text-5xl font-bold lg:text-6xl">
            Let's optimize your website for search success
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-xl leading-relaxed text-white/90">
            Get a comprehensive on-page SEO audit and personalized optimization
            roadmap. Transform your website into a search engine magnet and
            watch your rankings soar.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="hidden md:inline-flex bg-gradient-to-br from-[#000000] to-[#333333] hover:from-[#A0001E] hover:to-[#A0001E] text-white px-6 rounded-lg"
              onClick={myHandler}
            >
              Get a call <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button
              className="hidden md:inline-flex bg-gradient-to-br from-[#000000] to-[#333333] hover:from-[#A0001E] hover:to-[#A0001E] text-white px-6 rounded-lg"
              onClick={myHandler}
            >
              View Our Case Studies <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute w-64 h-64 rounded-full top-10 left-10 bg-white/10 blur-3xl" />
        <div className="absolute rounded-full bottom-10 right-10 w-96 h-96 bg-white/10 blur-3xl" />
      </section>
      <Footer />
    </div>
  );
};

export default OnPageSEO;
