import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

// ======== IMAGE IMPORTS (Use .webp for optimization) ========
import case1 from "../assets/photo_wd.webp";
import case2 from "../assets/photo_wd.webp";
import case3 from "../assets/photo_wd.webp";
import case4 from "../assets/photo_wd.webp";
import case5 from "../assets/photo_bp.webp";

// ======== FILTER DATA ========
const filters = {
  Industry: ["Fintech", "eCommerce", "Education", "Healthtech", "Gaming", "Travel"],
  Services: ["Web Development", "Product Strategy", "Design", "Team Augmentation", "MVP Development"],
  Technology: ["React.js", "Node.js", "Vue.js", "Angular", "PHP", "AWS", "Docker"],
};

// ======== FEATURED STORIES ========
const featured = [
  {
    id: "big-four",
    title: "How we developed 3 dedicated digital products for one of the Big Four Companies",
    subtitle: "TACTICAL STRATEGY & FULL-STACK DEVELOPMENT",
    image: case1,
    tag: "Big Four",
  },
  {
    id: "stralo-performance",
    title: "How team augmentation and ambitious frontend drove the future of e-learning",
    subtitle: "PARTNER WITH A GLOBAL TECH LEADER",
    image: case2,
    tag: "E-Learning",
  },
  {
    id: "national-geographic",
    title: "How National Geographic improved their marketing time-to-market by 450%",
    subtitle: "STRATEGIC UX DESIGN IMPROVEMENT",
    image: case3,
    tag: "National Geographic",
  },
  {
    id: "hello-learning",
    title: "How our partnership with Hello helped redefine personalized learning experiences",
    subtitle: "PARTNERSHIP STORY",
    image: case4,
    tag: "Hello",
  },
];

// ======== MORE STORIES ========
const moreStories = [
  {
    id: "no-code-app",
    title: "How we turned a no-code networking app into a scalable custom solution",
    tag: "No-Code",
    image: case5,
  },
  {
    id: "bsi-automation",
    title: "How BSI revolutionized business processes with workflow automation",
    tag: "Automation",
    image: case1,
  },
  {
    id: "react-performance",
    title: "How Stralo improved their React app performance by 50%",
    tag: "Performance",
    image: case2,
  },
  {
    id: "cuploot-ux",
    title: "How we designed intuitive UX for B2B marketplaces with Cuploot",
    tag: "UX Design",
    image: case3,
  },
  {
    id: "natgeo-enterprise",
    title: "How National Geographic accelerated content delivery across continents",
    tag: "Enterprise",
    image: case4,
  },
  {
    id: "beam-global",
    title: "How Beam scaled globally and became the biggest player in Asia",
    tag: "Mobile App",
    image: case5,
  },
];

const CaseStudies = memo(() => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <>
      {/* ================= SEO & META ================= */}
      <Helmet>
        <title>Case Studies | STRAVO</title>
        <meta
          name="description"
          content="Explore STRAVO's client success stories and see how we design, code, and deliver digital solutions that drive growth and innovation."
        />
        <meta
          name="keywords"
          content="STRAVO, case studies, client success, web development, UX design, full stack development, product strategy, eLearning, automation, React"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Case Studies | STRAVO" />
        <meta
          property="og:description"
          content="Discover how STRAVO builds high-performing digital solutions for clients across industries."
        />
        <meta property="og:image" content="/assets/og-casestudies.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="STRAVO" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="STRAVO - Case Studies" />
        <meta
          name="twitter:description"
          content="STRAVO showcases how design and technology create success. Read our client case studies."
        />
        <meta name="twitter:image" content="/assets/og-casestudies.jpg" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Case Studies | STRAVO",
          "description": "Client stories highlighting STRAVO’s work in web development, UX, and digital innovation.",
          "publisher": {
            "@type": "Organization",
            "name": "STRAVO",
            "logo": {
              "@type": "ImageObject",
              "url": "/assets/logo.png"
            }
          }
        }
        `}</script>
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <div className="min-h-screen bg-white font-outfit">
        <Navbar />

        {/* HERO SECTION */}
        <section className="bg-[#0C0C0C] text-white py-28 px-6 sm:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto text-left space-y-6">
            <h4 className="text-[#E2001A] uppercase font-semibold text-sm tracking-widest">
              Client Stories
            </h4>
            <h1 className="text-5xl font-bold leading-tight">
              See how our clients are changing the future of tech
            </h1>
            <p className="max-w-3xl text-white/80 text-lg">
              Real-world success stories showcasing how STRAVO helps businesses
              innovate, scale, and build impactful digital products.
            </p>
            <Button variant="primary" size="top">
              Explore Stories <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>

        {/* FEATURED CASE STUDIES */}
        <section className="bg-[#0C0C0C] text-white py-20 px-6 sm:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            {featured.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform cursor-pointer"
                onClick={() => navigate(`/casestudies/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-[#E2001A] mb-2">
                    {item.subtitle}
                  </p>
                  <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                  <Button
                    variant="link"
                    className="text-white text-sm hover:text-[#E2001A]"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/casestudies/${item.id}`);
                    }}
                  >
                    Read Case Study →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DISCOVER MORE SECTION */}
        <section className="bg-white py-20 px-6 sm:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Discover More Success Stories
            </h2>
            <p className="text-gray-600 mb-10">
              Explore by industry, service, or technology:
            </p>

            {/* FILTER TAGS */}
            <div className="flex flex-wrap gap-4 mb-12">
              {Object.entries(filters).map(([category, tags]) => (
                <div key={category}>
                  <h4 className="font-semibold text-gray-800 mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() =>
                          setSelectedFilter(selectedFilter === tag ? null : tag)
                        }
                        className={`px-3 py-1 rounded-full text-sm border transition ${
                          selectedFilter === tag
                            ? "bg-[#E2001A] text-white border-[#E2001A]"
                            : "border-gray-300 text-gray-700 hover:border-[#E2001A]"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* GRID OF CASES */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {moreStories
                .filter(
                  (story) =>
                    !selectedFilter ||
                    story.tag.includes(selectedFilter) ||
                    story.title.includes(selectedFilter)
                )
                .map((story, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow hover:shadow-md transition overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/casestudies/${story.id}`)}
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-52 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="p-5">
                      <span className="text-xs uppercase text-[#E2001A] font-semibold mb-2 block">
                        {story.tag}
                      </span>
                      <h4 className="font-semibold text-gray-900 text-md mb-2">
                        {story.title}
                      </h4>
                      <Button
                        variant="link"
                        className="text-[#E2001A] p-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/casestudies/${story.id}`);
                        }}
                      >
                        Read More →
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
});

export default CaseStudies;
