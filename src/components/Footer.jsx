// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from "../assets/logo";

export default function Footer() {
    return (
        <footer id="contact" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-20 bg-[#1A1A1A] text-white">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <Logo className="mb-4" />
                        <p className="text-[#B0B0B0] leading-relaxed mb-6">
                            Leading software development company helping businesses build innovative digital products with top 1% IT talent.
                        </p>
                        <div className="flex gap-3">
                            <Button variant="ghost" size="icon" className="bg-[#2A2A2A] hover:bg-[#E2001A] text-white rounded-lg">
                                <Twitter className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="bg-[#2A2A2A] hover:bg-[#E2001A] text-white rounded-lg">
                                <Linkedin className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="bg-[#2A2A2A] hover:bg-[#E2001A] text-white rounded-lg">
                                <Facebook className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="bg-[#2A2A2A] hover:bg-[#E2001A] text-white rounded-lg">
                                <Instagram className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Services</h4>
                        <div className="space-y-3">
                            <Link to="/webdev" className="block text-[#B0B0B0] hover:text-[#E2001A] transition-colors">
                                Web Development
                            </Link>
                            <Link to="/hosting" className="block text-[#B0B0B0] hover:text-[#E2001A] transition-colors">
                                Website Hosting & Maintenance
                            </Link>
                            <Link to="/mobile" className="block text-[#B0B0B0] hover:text-[#E2001A] transition-colors">
                                Mobile Responsiveness
                            </Link>
                         
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Company</h4>
                        <div className="space-y-3">
                            <Link to="/about" className="block text-[#B0B0B0] hover:text-[#E2001A] transition-colors">
                                About Us
                            </Link>
                            <Link to="/blog" className="block text-[#B0B0B0] hover:text-[#E2001A] transition-colors">
                                Blog
                            </Link>
                            <Link to="/contact" className="block text-[#B0B0B0] hover:text-[#E2001A] transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Resources</h4>
                        <div className="space-y-3">
                            <Link to="/case-studies" className="block text-[#B0B0B0] hover:text-[#E2001A] transition-colors">
                                Case Studies
                            </Link>
                            <Link to="#" className="block text-[#B0B0B0] hover:text-[#E2001A] transition-colors">
                                White Papers
                            </Link>
                            <Link to="#" className="block text-[#B0B0B0] hover:text-[#E2001A] transition-colors">
                                Documentation
                            </Link>
                            <Link to="#" className="block text-[#B0B0B0] hover:text-[#E2001A] transition-colors">
                                Support
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-[#2A2A2A] text-center text-[#B0B0B0] text-sm">
                    <p>&copy; 2025 Stravo. All rights reserved. | Privacy Policy | Terms of Service</p>
                </div>
            </div>
        </footer>
    );
}