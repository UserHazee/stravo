import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import { FileText, Target, TrendingUp, Award, Code, ArrowRight, CheckCircle2, Sparkles, Search, Globe, Zap, BarChart3, Link2, Image as ImageIcon, Settings, FileCode, Eye } from "lucide-react";

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
                            On-page SEO is the foundation of digital visibility. Optimize your content, structure, and user experience to dominate search results and attract your ideal audience.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5">
                                Start Optimizing <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold transition-all bg-white border-2 hover:bg-slate-50 text-slate-700 rounded-xl border-slate-200 hover:border-slate-300">
                                View Checklist
                            </button>
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
                                    <p className="text-sm font-semibold text-slate-900">Search Visibility</p>
                                    <p className="text-xs text-slate-600">+156% increase</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Animated background elements */}
                <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400/10 to-transparent blur-3xl animate-pulse" />
                <div className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-purple-400/10 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
                            On-page SEO (also known as on-site SEO) is the practice of optimizing individual web pages to rank higher and earn more relevant traffic in search engines. It involves optimizing both the content and HTML source code of a page, including title tags, headers, meta descriptions, images, and internal links.
                        </p>
                        <p className="text-lg leading-relaxed text-slate-600">
                            Unlike off-page SEO, which focuses on external signals like backlinks, on-page SEO is entirely within your control. It's about making your content discoverable, relevant, and valuable to both search engines and users.
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
                            Understanding the difference helps you build a comprehensive SEO strategy
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
                                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">On-Page SEO</h3>
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
                                    "Schema markup"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
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
                                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                                    <Globe className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Off-Page SEO</h3>
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
                                    "Content marketing distribution"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
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
                                description: "Proper on-page optimization helps search engines understand your content's topic, relevance, and value, leading to better rankings."
                            },
                            {
                                icon: Eye,
                                title: "Improves User Experience",
                                description: "Well-optimized pages load faster, are easier to navigate, and provide better overall experience for your visitors."
                            },
                            {
                                icon: TrendingUp,
                                title: "Increases Organic Traffic",
                                description: "Higher rankings from on-page SEO result in more visibility and clicks from users searching for your topics."
                            },
                            {
                                icon: Target,
                                title: "Better Targeting",
                                description: "Optimize for specific keywords to attract the right audience who are actively searching for your products or services."
                            },
                            {
                                icon: Award,
                                title: "Competitive Advantage",
                                description: "Many competitors overlook on-page SEO. Proper optimization gives you an edge in search results."
                            },
                            {
                                icon: BarChart3,
                                title: "Measurable Results",
                                description: "Track rankings, traffic, and conversions to see the direct impact of your on-page optimization efforts."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 transition-all duration-300 border bg-gradient-to-br from-slate-50 to-white border-slate-200 rounded-2xl hover:shadow-lg hover:border-indigo-200"
                            >
                                <div className="flex items-center justify-center mb-4 shadow-lg w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
                                    <item.icon className="text-white w-7 h-7" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                                <p className="text-slate-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9 On-Page SEO Techniques */}
            <section className="px-6 py-24 bg-gradient-to-b from-slate-50 to-white sm:px-10 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <span className="inline-block px-4 py-2 mb-4 text-sm font-bold tracking-wider text-indigo-700 uppercase border border-indigo-100 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50">
                            Actionable Strategies
                        </span>
                        <h2 className="mb-4 text-4xl font-bold text-slate-900 lg:text-5xl">
                            9 On-Page SEO Techniques for Your Website
                        </h2>
                        <p className="max-w-3xl mx-auto text-lg text-slate-600">
                            Master these essential techniques to optimize every page on your website
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                number: "01",
                                icon: FileText,
                                title: "Write Helpful, High-Quality Content",
                                description: "Create comprehensive, well-researched content that answers user questions and provides genuine value. Focus on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). Use clear language, break up text with subheadings, and include examples or case studies.",
                                tips: ["Aim for 1,500+ words for competitive topics", "Include original research or unique insights", "Update content regularly to keep it fresh"]
                            },
                            {
                                number: "02",
                                icon: Search,
                                title: "Place Target Keywords Strategically",
                                description: "Research and identify primary and secondary keywords, then place them naturally throughout your content. Include keywords in your title, first 100 words, headers, and throughout the body. Avoid keyword stuffing—focus on natural, readable content.",
                                tips: ["Use keyword research tools to find opportunities", "Include LSI (Latent Semantic Indexing) keywords", "Prioritize user intent over keyword density"]
                            },
                            {
                                number: "03",
                                icon: Code,
                                title: "Write Keyword-Rich Title Tags",
                                description: "Create compelling title tags (50-60 characters) that include your target keyword near the beginning. Make them click-worthy while accurately describing your page content. Each page should have a unique title tag.",
                                tips: ["Include your brand name at the end", "Use power words to increase click-through rate", "Match search intent with your title"]
                            },
                            {
                                number: "04",
                                icon: FileCode,
                                title: "Write Click-Worthy Meta Descriptions",
                                description: "Craft persuasive meta descriptions (150-160 characters) that summarize your page and encourage clicks. Include your target keyword and a clear call-to-action. While not a direct ranking factor, they impact click-through rates.",
                                tips: ["Include a benefit or value proposition", "Use active voice and action words", "Make each meta description unique"]
                            },
                            {
                                number: "05",
                                icon: Settings,
                                title: "Use Headings to Structure Your Page",
                                description: "Organize content with a clear hierarchy using H1, H2, H3, etc. Use only one H1 per page (usually your title), then use H2s for main sections and H3s for subsections. Include keywords naturally in your headings.",
                                tips: ["Make headings descriptive and scannable", "Use heading tags in sequential order", "Don't skip heading levels (H1 → H3)"]
                            },
                            {
                                number: "06",
                                icon: ImageIcon,
                                title: "Optimize Images for SEO",
                                description: "Compress images to reduce file size without sacrificing quality. Use descriptive file names (my-seo-infographic.jpg instead of IMG001.jpg). Add alt text that describes the image and includes keywords when relevant. Use modern formats like WebP.",
                                tips: ["Compress images before uploading", "Use descriptive alt text for accessibility", "Include captions when it adds value"]
                            },
                            {
                                number: "07",
                                title: "Add Internal Links to Relevant Pages",
                                description: "Link to other relevant pages on your website using descriptive anchor text. This helps search engines understand your site structure and spreads authority throughout your site. Internal linking also helps users discover more content.",
                                tips: ["Use descriptive anchor text, not 'click here'", "Link to 2-5 relevant internal pages per article", "Ensure links add value for the reader"]
                            },
                            {
                                number: "08",
                                title: "Improve Your URL Structure",
                                description: "Create short, descriptive URLs that include your target keyword. Use hyphens to separate words, avoid special characters, and keep URLs lowercase. A clean URL structure helps both users and search engines understand your page.",
                                tips: ["Keep URLs under 60 characters when possible", "Remove stop words (a, the, and, etc.)", "Use static URLs, avoid parameters when possible"]
                            },
                            {
                                number: "09",
                                icon: Zap,
                                title: "Ensure Your Pages Load Quickly",
                                description: "Optimize page speed by compressing images, minifying CSS/JavaScript, enabling browser caching, and using a CDN. Google considers page speed a ranking factor, and faster pages provide better user experience.",
                                tips: ["Aim for load times under 3 seconds", "Use lazy loading for images", "Test with Google PageSpeed Insights"]
                            }
                        ].map((technique, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="relative p-8 transition-all duration-300 bg-white border-2 shadow-sm border-slate-200 rounded-2xl hover:shadow-lg hover:border-indigo-200"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 shadow-lg bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
                                        {technique.icon ? (
                                            <technique.icon className="w-8 h-8 text-white" />
                                        ) : (
                                            <span className="text-2xl font-bold text-white">{technique.number}</span>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-sm font-bold text-indigo-600">{technique.number}</span>
                                            <h3 className="text-2xl font-bold text-slate-900">{technique.title}</h3>
                                        </div>
                                        <p className="mb-4 leading-relaxed text-slate-600">{technique.description}</p>
                                        {technique.tips && (
                                            <div className="p-4 border border-indigo-100 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                                                <p className="mb-2 text-sm font-semibold text-indigo-900">Pro Tips:</p>
                                                <ul className="space-y-1">
                                                    {technique.tips.map((tip, tipIdx) => (
                                                        <li key={tipIdx} className="flex items-start gap-2 text-sm text-slate-700">
                                                            <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                                                            <span>{tip}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="px-6 py-24 bg-white sm:px-10 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-slate-900 lg:text-5xl">
                            The power of proper optimization
                        </h2>
                        <p className="max-w-3xl mx-auto text-xl text-slate-600">
                            Websites with strong on-page SEO consistently outperform competitors in visibility, traffic, and revenue.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                        {[
                            { label: "Organic traffic increase", value: "93%", icon: TrendingUp, gradient: "from-blue-500 to-cyan-500" },
                            { label: "Better click-through rate", value: "45%", icon: Target, gradient: "from-indigo-500 to-purple-500" },
                            { label: "Improved page rankings", value: "3.8x", icon: Award, gradient: "from-purple-500 to-pink-500" },
                            { label: "Conversion rate boost", value: "67%", icon: CheckCircle2, gradient: "from-pink-500 to-rose-500" },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                                <div className="relative p-8 transition-all duration-300 bg-white border shadow-lg rounded-2xl border-slate-200 group-hover:border-transparent group-hover:shadow-2xl">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br ${stat.gradient} rounded-xl shadow-lg`}>
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className={`text-4xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                                        {stat.value}
                                    </h3>
                                    <p className="font-medium text-slate-600">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative px-6 py-24 overflow-hidden text-center text-white bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
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
                        Get a comprehensive on-page SEO audit and personalized optimization roadmap. Transform your website into a search engine magnet and watch your rankings soar.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="inline-flex items-center gap-2 px-10 py-5 text-lg font-bold text-indigo-600 transition-all bg-white shadow-2xl hover:bg-slate-50 rounded-xl hover:shadow-white/20 hover:scale-105">
                            Get Free SEO Audit <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="inline-flex items-center gap-2 px-10 py-5 text-lg font-bold text-white transition-all border-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl border-white/30 hover:border-white/50">
                            View Our Case Studies
                        </button>
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