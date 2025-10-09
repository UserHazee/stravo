// App.jsx - This is now your HOME PAGE
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import './index.css';
import { ProcessSection } from './components/ui/next';
import { motion } from 'framer-motion';
import {
    Code2,
    Smartphone,
    Cloud,
    BriefcaseBusiness,
    Menu,
    Workflow,
    X,
    Frame,
    Twitter,
    Linkedin,
    Facebook,
    Instagram
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnimatePresence } from "framer-motion";
import { PlanetHero } from '@/components/ui/planet';
import pic1 from "./assets/1000483199.png";
import pic2 from "./assets/1000483218.png";
import pic3 from "./assets/1000483230 (1).png";
import pic4 from "./assets/1752798249832.jpg";
import pic5 from "./assets/Gemini_Mullet.png";
import Logo from "./assets/logo";
import Navbar from './components/Navbar'; // We'll create this
import Footer from './components/Footer'

export default function App() {
    const services = [
        {
            icon: <Code2 className="w-7 h-7" />,
            title: "Web Development",
            description: "Build modern, responsive, and user-friendly websites tailored to your business needs using the latest web technologies like ReactJS and Node.js."
        },
        {
            icon: <Frame className="w-7 h-7" />,
            title: "Custom Web Applications",
            description: "Develop tailored web based solutions to meet your unique business requirements, whether it's managing data, enhancing workflows, or improving customer interaction."
        },
        {
            icon: <Smartphone className="w-7 h-7" />,
            title: "Responsive Web Design",
            description: "Ensure your website looks and works perfectly across all devices, including desktops, tablets, and smartphones."
        },
        {
            icon: <Cloud className="w-7 h-7" />,
            title: "Website Hosting & Maintenance",
            description: "Worry-free hosting and regular maintenance to ensure your website is secure, fast, and always up-to-date."
        },
        {
            icon: <BriefcaseBusiness className="w-7 h-7" />,
            title: "Business Websites",
            description: "Launch a professional and sleek online presence with affordable, fast-loading websites that showcase your services and attract more customers."
        },
        {
            icon: <Workflow className="w-7 h-7" />,
            title: "Integration & Automation",
            description: "Connect your website with third-party tools like email platforms, Google Calendar, or payment systems to automate your workflow and save time."
        }
    ];

    const team = [
        { name: "Zeek Rivera", role: "CEO & Founder", initials: "ZR", img: pic1 },
        { name: "Zeek Rivera", role: "CTO", initials: "ZR", img: pic2 },
        { name: "Zeek Rivera", role: "VP Engineering", initials: "ZR", img: pic3 },
        { name: "Zeek Rivera", role: "Head of Design", initials: "ZR", img: pic4 },
        { name: "Zeek Rivera", role: "Chief Architect", initials: "ZR", img: pic5 }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 }
        }
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-white">
            {/* Navbar */}
            <Navbar />
            {/* Hero Section */}
            <section className="px-4 pt-32 pb-12 lg:pt-22 sm:px-6 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <motion.div
                            className="space-y-6"
                        >
                            <h1 className="text-4xl  sm:text-5xl lg:text-6xl font-outfit font-medium leading-tight tracking-normal text-[#1A1A1A]">
                                Top <span className="text-[#A0001E]">1% IT Talent</span> For Your Software Development Needs
                            </h1>
                            <p className="font-outfit text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
                                We help startups and Fortune 500 companies build digital products through staff augmentation and software outsourcing services.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row font-outfit">
                                <Button className="bg-[#A0001E] hover:bg-[#E2001A] text-white px-8 py-6.5 text-base rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                    Email me
                                </Button>
                                <Button variant="outline" className="border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-8 py-6 text-base rounded-lg transition-all hover:-translate-y-1">
                                    Our Services
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative h-[400px] lg:h-[500px]"
                        >
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute top-10 right-0 w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-[#4A000F] to-[#E2001A] rounded-3xl"
                            />
                            <motion.div
                                animate={{
                                    y: [0, 20, 0],
                                    rotate: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 2
                                }}
                                className="absolute bottom-6 left-0 w-48 h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-[#000000] to-[#090f24] rounded-3xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <PlanetHero />
            <ProcessSection />

            {/* Clients Section */}
            <section className="px-4 py-12 bg-white sm:px-6 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 text-center"
                    >
                        <p className="text-sm uppercase tracking-wider text-[#6B6B6B] font-semibold">Trusted by Leading Companies</p>
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid items-center grid-cols-3 gap-8 md:grid-cols-6 justify-items-center"
                    >
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="flex items-center justify-center w-20 h-20 text-4xl transition-all cursor-not-allowed grayscale"
                            >
                                {['🔜', '🔜', '🔜', '🔜', '🔜', '🔜'][i]}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-20 bg-[#F8F9FA]">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        className="mb-16 text-center"
                    >
                        <h2 className="text-3xl lg:text-5xl font-semibold text-[#1A1A1A] mb-4">Our Services</h2>
                        <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
                            Comprehensive technology solutions tailored to your business needs
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {services.map((service, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-[#000000] to-[#090f24]">
                                    <CardContent className="p-8">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#4A000F] to-[#E2001A]  flex items-center justify-center text-white mb-6">
                                            {service.icon}
                                        </div>
                                        <h3 className="mb-3 text-xl font-medium text-white font-outfit">{service.title}</h3>
                                        <p className="text-sm font-light leading-relaxed text-white font-outfit">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="px-4 py-16 bg-white lg:py-24 sm:px-6 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        className="mb-16 text-center"
                    >
                        <h2 className="text-3xl lg:text-5xl font-semibold text-[#1A1A1A] mb-4">Meet Our Leadership</h2>
                        <p className="text-lg text-[#6B6B6B]">
                            Experienced professionals driving innovation and excellence
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-8"
                    >
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="text-center"
                            >
                                <Avatar className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4 bg-gradient-to-br from-[#E5E5E5] to-[#F8F9FA] text-[#6B6B6B] text-2xl font-semibold">
                                    <AvatarImage src={member.img} />
                                    <AvatarFallback>{member.initials}</AvatarFallback>
                                </Avatar>
                                <h4 className="text-base lg:text-lg font-semibold text-[#1A1A1A] mb-1">{member.name}</h4>
                                <p className="text-sm text-[#6B6B6B]">{member.role}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <Footer/>
        </div>
    );
}