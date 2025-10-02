import { motion } from "framer-motion";
const steps = [
  {
    day: "Day 1",
    title: "Discovery Call & Notes",
    desc: "Quick call to understand project goals, scope, and budget. We sign NDA if you require one."
  },
  {
    day: "Day 3",
    title: "Draft Proposal",
    desc: "As a startup consultant, I provide a clear MVP path. Detailed architecture will evolve as we build."
  },
  {
    day: "Day 4",
    title: "Finalize Agreement",
    desc: "Send refined proposal with pricing, timeline, and deliverables."
  }
];


export function ProcessSection() {
  return (
    <section className="bg-black text-white py-20 planet:mt-0 mt-10 px-6 md:px-12 z-96">
      <div className="max-w-6xl mx-auto grid next:grid-cols-2 gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm uppercase text-[#E2001A] tracking-wide">
            What are the next steps
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Expect the first pull request in 10 days from today.
          </h2>
          <p className="mt-4 text-gray-300">
            The goal is to get you the best team of engineers in the shortest
            time and start delivering real business value.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#E2001A] text-white font-medium rounded-md hover:bg-teal-300 transition">
            Get a Proposal →
          </button>
        </motion.div>

        {/* Right Side Timeline */}
        <div className="relative pl-8 ms-8 next:ms-0">
          {/* Gradient Line */}
          <div className="absolute top-25 left-0 h-[50px] w-[2px] bg-gradient-to-b from-[#000000] to-[#F8F9FA]"></div>
          
          <div className="absolute top-70 left-0 h-[50px] w-[2px] bg-gradient-to-b from-[#000000] to-[#F8F9FA]"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-20 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Step Label */}
              <span className="absolute -left-16 bg-gray-800 text-white px-4 py-5 text-sm font-normal font-outfit">
                {step.day}
              </span>
              <h3 className="text-lg font-medium ps-7  font-outfit tracking-normal ">{step.title}</h3>
              <p className="text-gray-400 mt-2 text-sm ps-7 h-[70px] font-outfit tracking-tight ">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
