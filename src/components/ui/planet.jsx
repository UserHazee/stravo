import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function PlanetHero() {
    return (
        <section 
            className="relative w-full pt-32 pb-0 overflow-visible"
            style={{
                background: "linear-gradient(to bottom, #ffffff 0%, transparent 100%)"
            }}
        >
            {/* Static Crimson Dome - no animation */}
            <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[150vh] small:h-[110vh] next:h-[160vh] max-w-[200%]"
            >
                {/* Main dome gradient */}
                <div 
                    className="absolute inset-0"
                    style={{
                        borderRadius: "50% 50% 0 0",
                        background: "radial-gradient(ellipse at center top, #8B0000 0%, #4A000F 40%, #2D0008 70%, #1A0005 100%)",
                        boxShadow: "0 50px 100px rgba(139, 0, 0, 0.3), inset 0 -100px 150px rgba(0, 0, 0, 0.4)"
                    }}
                />
                
                {/* Soft glow overlay */}
                <div 
                    className="absolute inset-0 opacity-100" 
                    style={{ 
                        borderRadius: "50% 50% 0 0",
                        background: "radial-gradient(ellipse at center top, rgba(226, 0, 26, 0.4) 0%, transparent 60%)",
                        filter: "blur(60px)"
                    }}
                />

                {/* Subtle shine effect */}
                <div 
                    className="absolute inset-0 opacity-20" 
                    style={{ 
                        borderRadius: "50% 50% 0 0",
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                    }}
                />

                {/* Decorative stars/particles - only these animate */}
                <motion.div
                    animate={{
                        opacity: [0.9, 0.6, 0.9],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[20%] left-[15%] w-2 h-2 bg-white/60 rounded-full blur-[1px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.9, 0.6, 0.9],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[40%] left-[15%] w-1 h-1 bg-white/30 rounded-full blur-[1px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.9, 0.7, 0.9],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-[30%] right-[20%] w-1.5 h-1.5 bg-white/50 rounded-full blur-[1px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.9, 0.5, 0.9],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute top-[15%] left-[70%] w-1 h-1 bg-white/40 rounded-full blur-[1px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.9, 0.5, 0.9],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute top-[45%] left-[76%] w-1 h-1 bg-white/40 rounded-full blur-[1px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.9, 0.5, 0.9],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute top-[40%] left-[87%] w-1 h-1 bg-white/40 rounded-full blur-[1px]"
                />
            </div>

            {/* Content - simple fade in on load */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-20 text-center text-white px-4 py-10 min-h-[55vh] small:min-h-[60vh] next:min-h-[65vh] flex flex-col justify-center"
            >
                <p className="mb-6 text-sm font-medium tracking-widest uppercase text-red-300/80">
                    [ Why Work With Us ]
                </p>
                <h1 className="mb-8 text-4xl font-light leading-tight tracking-tighter small:text-5xl next:text-6xl lg:text-7xl font-outfit">
                    "Smart cost-efficient scaling"
                </h1>
                <p className="max-w-2xl mx-auto mb-16 text-lg font-light leading-relaxed font-outfit text-gray-200/90">
                    We help businesses scale their development with ease and deliver faster, more affordable, and reliable software solutions.
                </p>
            </motion.div>

            {/* Testimonials */}
            <TestimonialSection />
        </section>
    );
}

const TESTIMONIALS = [
    {
        quote:
            "Using their services was a game-changer. We scaled our team in minutes and the real-time collaboration meant we delivered projects faster than ever. No more recruitment headaches!",
        name: "Sarah Johnson",
        role: "CTO, TechStart",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQDVGuhd8lIocz4mvXTzVeLTkiejls2GiuBHRvxU8jTN19dhC9yk84F7OCnLlI8r1ISVnqzrgXN9NtfVct6l6uQU3h2M2tkcmu5l8V7Y5sqjI1HhapmpTtbaASxn4Wq8Gk1jPEdmQBAcf6-PEYvg0Rwauh6crozM7y9nnsudMNNWtBXpnN99cKNX1lpcJY1pITi39R6YP42Yz0S6N59xCzQE8hFbiuYcrbPBjpSSXmBkPGLZrxAhwtHrD-AF6zUa_XwEgrBZPTAr3b",
    },
    {
        quote:
            "I was skeptical at first, but the quality is incredible. The developers integrated seamlessly with our team, and we've saved months of development time with their expertise.",
        name: "Michael Chen",
        role: "VP Engineering, InnovateCo",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKopFjoDiTMEkqIuhf2Dn8tydP9hnu2ZgKqSbCwWcoCOh9XuZDzn0RoQDi1-oa9zqRMm7nQAydCdMGu67bGeseI1zhQWhP2cQzkPWMStSAMm7tX0lmuR-0NbP84ajIGDbpvzcg4MDdT2pCDpg0niQdeOjbTr1wvc9a4ktB3ISWQe9kNhfACN6kZXJrC23d6p4Rbt6NkUFVbKEtOT7B6M0ImloD1tMDeqN7xBw8K00c-_-uRA2HIxakiZqI45jdIQX1aVDI22yPxbQ0",
    },
    {
        quote:
            "Finally, a partner that truly understands software development. The flexibility and quality they provide has transformed how we build products. Highly recommended!",
        name: "David Martinez",
        role: "Product Lead, ScaleUp",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMcX_p5Mrz3-GnIbh1arLvCdt082jlKLuAD3TmaPiNn30jaOZAlT5XhemEb_AVTqGiA1FZQfWbaYbUQLBFYc_Oak3odrntFBBtViBpZP1F1f2iBeN2kDcqxbhaL33IvQYJu7PkBiv66W6lNqbRo6zEusd77WRGMN_z47PJiQW5txl2H0Sn1LIn2NBy5ySGRM0iTRfxupgVV4RFTA-JNhHwlQS2IL8hK1Uc7I4rHsijHucDJBQTyoZr3nJpWWSqbp59oNj4MxJBLmnA",
    },
];

export function TestimonialSection() {
    const carouselRef = useRef(null);
    const intervalRef = useRef(null);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    const scrollByPage = (dir = 1) => {
        const el = carouselRef.current;
        if (!el) return;
        const step = el.clientWidth;
        const target = Math.max(
            0,
            Math.min(el.scrollLeft + dir * step, el.scrollWidth - el.clientWidth)
        );
        el.scrollTo({ left: target, behavior: "smooth" });
    };

    const startAutoPlay = () => {
        stopAutoPlay();
        intervalRef.current = setInterval(() => scrollByPage(1), 5000);
    };

    const stopAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoPlay();
        return stopAutoPlay;
    }, []);

    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;

        const update = () => {
            setCanPrev(el.scrollLeft > 0);
            setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
        };

        update();
        el.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);

        return () => {
            el.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <section id="testimonials" className="relative z-20 pb-0">
            <div className="container relative px-4 mx-auto">
                <div
                    className="relative max-w-5xl mx-auto overflow-hidden group"
                    onMouseEnter={stopAutoPlay}
                    onMouseLeave={startAutoPlay}
                >
                    {/* Carousel */}
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto testimonial-carousel scroll-smooth snap-x snap-mandatory"
                    >
                        {TESTIMONIALS.map((t, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center flex-shrink-0 w-full p-4 text-center small:p-8 next:p-12 testimonial-item snap-start"
                            >
                                <div 
                                    className="relative max-w-2xl mx-auto transition-transform duration-300 bg-gradient-to-br from-[#000000] to-[#090f24] p-8 small:p-10 next:p-12"
                                >
                                    {/* Quote icon */}
                                    <div className="mb-2 small:mb-6">
                                        <span className="text-4xl small:text-5xl material-symbols-outlined text-red-400/60">
                                            format_quote
                                        </span>
                                    </div>

                                    {/* Quote text */}
                                    <blockquote className="mb-8 text-sm italic font-light leading-relaxed small:text-xl text-white/90">
                                        "{t.quote}"
                                    </blockquote>

                                    {/* Author info */}
                                    <div className="flex items-center justify-center gap-4 pt-6 border-t border-white/10">
                                        <img
                                            alt={t.name}
                                            src={t.img}
                                            className="object-cover rounded-full w-14 h-14 ring-2 ring-white/20"
                                        />
                                        <div className="text-left">
                                            <p className="text-sm font-medium text-white small:text-lg">{t.name}</p>
                                            <p className="text-xs small:text-sm text-gray-300/70">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Prev Button */}
                    <div className="absolute z-10 transition-opacity duration-300 transform -translate-y-1/2 opacity-0 left-2 top-1/2 group-hover:opacity-100">
                        <button
                            onClick={() => scrollByPage(-1)}
                            disabled={!canPrev}
                            className={`p-3 text-white shadow-lg transition-all duration-300 ${
                                !canPrev ? "opacity-40 pointer-events-none" : "hover:scale-110"
                            }`}
                        >
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                    </div>

                    {/* Next Button */}
                    <div className="absolute z-10 transition-opacity duration-300 transform -translate-y-1/2 opacity-0 right-2 top-1/2 group-hover:opacity-100">
                        <button
                            onClick={() => scrollByPage(1)}
                            disabled={!canNext}
                            className={`p-3 text-white shadow-lg transition-all duration-300 ${
                                !canNext ? "opacity-40 pointer-events-none" : "hover:scale-110"
                            }`}
                        >
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}