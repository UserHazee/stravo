// components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from '@/components/ui/button';
import Logo from "../assets/logo";

const navItems = [
    {
        label: "Services",
        href: "#",
        children: [
            {
                title: "Software Development & Delivery",
                items: [
                    { label: "Web Development", href: "/webdev" },
                    { label: "Web Hosting & Maintenance", href: "/hosting" },
                    { label: "Mobile Responsiveness", href: "/mobile" },
                ],
            },
            {
                title: "Landing Page Websites",
                items: [
                    { label: "Single Page Website", href: "/" },
                    { label: "Business Portfolios", href: "/portfolios" },
                ],
            },
            {
                title: "SEO Optimization",
                items: [
                    { label: "On-Page SEO", href: "/onpageseo" }
                ],
            },
        ],
    },
    {
        label: "Technologies",
        href: "#",
        children: [
            {
                title: "Frontend",
                items: [
                    { label: "React.js", href: "/tech/react" },
                    { label: "Next.js", href: "/tech/nextjs" },
                    { label: "Vue.js", href: "/tech/vue" },
                ],
            },
            {
                title: "Backend",
                items: [
                    { label: "Node.js", href: "/tech/node" },
                    { label: "Laravel", href: "/tech/laravel" },
                    { label: "Spring Boot", href: "/tech/spring" },
                ],
            },
        ],
    },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileAccordion, setMobileAccordion] = useState(null);

    const myHandler = () => {
        console.log("Get Started clicked");
    };

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md"
            >
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-20">
                    <div className="flex items-center justify-between h-20 lg:h-20">
                        <Link to="/">
                            <Logo className="w-auto h-16" />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="items-center hidden gap-8 md:flex">
                            {navItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="relative group"
                                    onMouseEnter={() => setOpenDropdown(idx)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                > 
                                    {item.children ? (
                                        <button className="flex items-center cursor-pointer py-6  gap-1 text-[#1f1f1f] hover:text-[#E2001A] transition-colors font-outfit text-lg">
                                            {item.label}
                                            <ChevronDown className="w-4 h-4 text-gray-500 transition-transform group-hover:rotate-180" />
                                        </button>
                                    ) : (
                                        <Link
                                            to={item.href}
                                            className="flex items-center gap-1 text-[#1f1f1f] hover:text-[#E2001A] transition-colors font-outfit text-lg"
                                        >
                                            {item.label}
                                        </Link>
                                    )}

                                    {/* Mega Dropdown */}
                                    <AnimatePresence>
                                        {item.children && openDropdown === idx && (
                                            <motion.div
                                                initial={{ opacity: 0}}
                                                animate={{ opacity: 1}}
                                                exit={{ opacity: 0}}
                                                transition={{ duration: 0.05, ease: "easeInOut" }}
                                                className="absolute left-1/2 -translate-x-1/2  cursor-pointer w-[850px] bg-white border border-gray-100  shadow-2xl p-10 grid grid-cols-2 gap-x-12 gap-y-8"
                                            >
                                                {item.children.map((section, sIdx) => (
                                                    <div key={sIdx} className="space-y-1">
                                                        <h4 className="flex items-center justify-between pb-3 text-base font-semibold text-gray-900 border-b border-gray-200">
                                                            {section.title}
                                                            <span className="text-[#E2001A]">★</span>
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            {section.items.map((link, lIdx) => (
                                                                <li key={lIdx} className="group/item">
                                                                    <Link
                                                                        to={link.href}
                                                                        className="relative flex items-center justify-between w-full pt-1 text-black font-light text-sm font-outfit transition-colors hover:text-[#E2001A]"
                                                                        onClick={() => setOpenDropdown(null)}
                                                                    >
                                                                        <span className="relative">
                                                                            {link.label}
                                                                            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#E2001A] transition-all duration-300 ease-out group-hover/item:w-full"></span>
                                                                        </span>
                                                                        <span className="text-xl text-black transition-all duration-300 ease-out -translate-x-2 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0">
                                                                            →
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </nav>

                        {/* Right Side */}
                        <div className="flex items-center gap-4">
                            <Button
                                className="hidden md:inline-flex bg-gradient-to-br from-[#000000] to-[#333333] hover:from-[#A0001E] hover:to-[#A0001E] text-white px-6 rounded-lg"
                                onClick={myHandler}
                            >
                                Get Started
                            </Button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 md:hidden"
                                aria-label="Toggle mobile menu"
                            >
                                {mobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/50 z-[55] md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu Sidebar */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-0 right-0 bottom-0 w-80 bg-[#1A1A1A] text-white shadow-2xl overflow-y-auto z-[60] md:hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-700">
                            <Logo className="h-8" />
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 transition-colors rounded-lg hover:bg-gray-800"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="py-4">
                            {navItems.map((item, idx) => (
                                <div key={idx} className="border-b border-gray-800">
                                    {item.children ? (
                                        <>
                                            <button
                                                onClick={() => setMobileAccordion(mobileAccordion === idx ? null : idx)}
                                                className="flex items-center justify-between w-full px-6 py-4 text-sm font-semibold tracking-wider text-left uppercase transition-colors hover:bg-gray-800"
                                            >
                                                {item.label}
                                                <ChevronDown 
                                                    className={`w-4 h-4 transition-transform ${mobileAccordion === idx ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {mobileAccordion === idx && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden bg-gray-900/50"
                                                    >
                                                        <div className="px-6 py-2 space-y-1">
                                                            {item.children.map((section, sIdx) => (
                                                                <div key={sIdx}>
                                                                    {section.items.map((child, cIdx) => (
                                                                        <Link
                                                                            key={cIdx}
                                                                            to={child.href}
                                                                            className="block py-2 text-sm text-gray-300 transition-colors hover:text-white"
                                                                            onClick={() => {
                                                                                setMobileMenuOpen(false);
                                                                                setMobileAccordion(null);
                                                                            }}
                                                                        >
                                                                            {child.label}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            to={item.href}
                                            className="block px-6 py-4 text-sm font-semibold tracking-wider uppercase transition-colors hover:bg-gray-800"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}