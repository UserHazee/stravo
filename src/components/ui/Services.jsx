import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Server, 
  Smartphone, 
  Layout, 
  Briefcase, 
  Search,
  Star
} from 'lucide-react';

const ServiceItem = ({ icon: Icon, text, link = "#" }) => (
  <div className="py-1.5">
    <Link 
      to={link}
      className="group inline-flex items-center gap-3 transition-all duration-300 hover:translate-x-2"
    >
      <Icon className="w-5 h-5 text-gray-600 group-hover:text-[#E2001A] transition-colors flex-shrink-0" />
      <span className="text-gray-700 text-sm md:text-base group-hover:text-[#E2001A] transition-colors font-normal">
        {text}
      </span>
    </Link>
  </div>
);




const ServiceCategory = ({ title, description, children, featured = false }) => (
  <div className="relative border-l-2 border-gray-200 pl-8 pb-1 last:pb-0">
    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-gray-300"></div>
    
    <div className="mb-5">
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h2>
        {featured && (
          <Star className="w-5 h-5 text-[#E2001A] fill-[#E2001A]" />
        )}
      </div>
      {description && (
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>

    <div className="space-y-1">
      {children}
    </div>
  </div>
);

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            OUR <span className="text-[#E2001A]">SERVICES</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
          <div className="space-y-0">
            <ServiceCategory 
              title="Software Development & Delivery" 
              description="Custom-built web solutions, reliable hosting, and seamless mobile experiences to help your business establish a strong digital presence and grow online"
              featured={true}
            >
              <ServiceItem 
                icon={Code} 
                text="Web Development" 
                link="/webdev"
              />
              <ServiceItem 
                icon={Server} 
                text="Web Hosting & Maintenance" 
                link="/hosting"
              />
              <ServiceItem 
                icon={Smartphone} 
                text="Mobile Responsiveness" 
                link="/mobile"
              />
            </ServiceCategory>

            <ServiceCategory 
              title="SEO Optimization" 
              description="Strategic optimization techniques to improve your website's visibility, rankings, and organic traffic on search engines"
              featured={true}
            >
              <ServiceItem 
                icon={Search} 
                text="On-Page SEO" 
                link="/onpageseo"
              />
            </ServiceCategory>
          </div>

          <div className="space-y-0">
            <ServiceCategory 
              title="Landing Page Websites" 
              description="High-converting landing pages and professional portfolios designed to capture attention, showcase your brand, and drive meaningful results"
              featured={true}
            >
              <ServiceItem 
                icon={Layout} 
                text="Single Page Website" 
                link="/singlepagewebsite"
              />
              <ServiceItem 
                icon={Briefcase} 
                text="Business Portfolios" 
                link="/businessportfolio"
              />
            </ServiceCategory>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Link 
            to="/contact"
            className="bg-[#E2001A] hover:bg-[#C8001A] text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-block"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
