import { motion } from "framer-motion";

export function PlanetHero() {
    return (
        <section 
            className="relative w-full pt-20 sm:pt-32 pb-12 sm:pb-16 overflow-hidden"
            style={{
                background: "linear-gradient(to bottom, #ffffff 0%, transparent 100%)"
            }}
        >
            {/* Static Crimson Dome - Fixed width for full coverage */}
            <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] sm:w-[180vw] md:w-[150vw] lg:w-[130vw] xl:w-[110vw] h-[60vh] sm:h-[80vh] lg:h-[115vh] pointer-events-none"
                style={{ zIndex: 0 }}
            >
                {/* Main dome gradient */}
                <div 
                    className="absolute inset-0"
                    style={{
                        borderRadius: "50% 50% 0 0",
                        background: "radial-gradient(ellipse at center top, #8B0000 0%, #4A000F 40%, #2D0008 70%, #1A0005 100%)",
                        boxShadow: "0 30px 60px rgba(139, 0, 0, 0.3), inset 0 -50px 100px rgba(0, 0, 0, 0.4)"
                    }}
                />
                
                {/* Soft glow overlay */}
                <div 
                    className="absolute inset-0 opacity-100" 
                    style={{ 
                        borderRadius: "50% 50% 0 0",
                        background: "radial-gradient(ellipse at center top, rgba(226, 0, 26, 0.4) 0%, transparent 60%)",
                        filter: "blur(40px)"
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

                {/* Decorative stars/particles - responsive positioning */}
                <motion.div
                    animate={{ opacity: [0.9, 0.6, 0.9] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[15%] w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/60 rounded-full blur-[1px]"
                />
                <motion.div
                    animate={{ opacity: [0.9, 0.6, 0.9] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[40%] left-[15%] w-1 h-1 bg-white/30 rounded-full blur-[1px]"
                />
                <motion.div
                    animate={{ opacity: [0.9, 0.7, 0.9] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[30%] right-[20%] w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white/50 rounded-full blur-[1px]"
                />
                <motion.div
                    animate={{ opacity: [0.9, 0.5, 0.9] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[15%] left-[70%] w-1 h-1 bg-white/40 rounded-full blur-[1px]"
                />
            </div>

            {/* Content - with proper z-index */}
            <div 
                className="relative text-center text-white px-4 min-h-[25vh] sm:min-h-[30vh] flex flex-col justify-center items-center"
                style={{ zIndex: 10 }}
            >
                <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-red-300/80 mb-3 sm:mb-4">
                    [ Why Work With Us ]
                </p>
                <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tighter font-outfit max-w-4xl">
                    "Smart cost-efficient scaling"
                </h1>
                <p className="max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 text-xs sm:text-sm font-light leading-relaxed font-outfit text-gray-200/90 px-4">
                    We help businesses scale their development with ease and deliver faster, more affordable, and reliable software solutions.
                </p>
            </div>
        </section>
    );
}