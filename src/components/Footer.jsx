// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import Logo from "../assets/logo";

export default function Footer() {
  return (
    <footer
      id="contact"
      role="contentinfo"
      aria-label="Site footer"
      className="py-16 lg:py-20 px-4 sm:px-6 lg:px-20 bg-[#1A1A1A] text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo className="w-auto h-16 mb-4" aria-label="Stravo Logo" />
            <p className="text-[#CCCCCC] leading-relaxed mb-6">
              Leading software development company helping businesses build
              innovative digital products with top 1% IT talent.
            </p>
            <div className="flex gap-3">
              <a
                href="https://x.com/_zeekrivera25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="flex items-center justify-center w-10 h-10 bg-[#2A2A2A] hover:bg-[#E2001A] text-white rounded-lg cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/zeek-rivera-bb7027378/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="flex items-center justify-center w-10 h-10 bg-[#2A2A2A] hover:bg-[#E2001A] text-white rounded-lg cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61581050133835"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="flex items-center justify-center w-10 h-10 bg-[#2A2A2A] hover:bg-[#E2001A] text-white rounded-lg cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/begreatfor/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="flex items-center justify-center w-10 h-10 bg-[#2A2A2A] hover:bg-[#E2001A] text-white rounded-lg cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <div className="space-y-3 flex flex-col items-start">
              <Link
                to="/webdev"
                className="whitespace-nowrap text-[#CCCCCC] hover:text-[#E2001A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] rounded px-1"
              >
                Web Development
              </Link>
              <Link
                to="/hosting"
                className="whitespace-nowrap text-[#CCCCCC] hover:text-[#E2001A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] rounded px-1"
              >
                Website Hosting & Maintenance
              </Link>
              <Link
                to="/mobile"
                className="whitespace-nowrap text-[#CCCCCC] hover:text-[#E2001A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] rounded px-1"
              >
                Mobile Responsiveness
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <div className="space-y-3 flex flex-col items-start">
              <Link
                to="/about"
                className="whitespace-nowrap text-[#CCCCCC] hover:text-[#E2001A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] rounded px-1"
              >
                About Us
              </Link>
              <Link
                to="/casestudies"
                className="whitespace-nowrap text-[#CCCCCC] hover:text-[#E2001A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] rounded px-1"
              >
                Case Studies
              </Link>
              <Link
                to="/insights"
                className="whitespace-nowrap text-[#CCCCCC] hover:text-[#E2001A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] rounded px-1"
              >
                Insights
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Technologies</h3>
            <div className="space-y-3 flex flex-col items-start">
              <Link
                to="/react-js"
                className="whitespace-nowrap text-[#CCCCCC] hover:text-[#E2001A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] rounded px-1"
              >
                React JS
              </Link>
              <Link
                to="/node-js"
                className="whitespace-nowrap text-[#CCCCCC] hover:text-[#E2001A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] rounded px-1"
              >
                Node JS
              </Link>
              <Link
                to="/vue-js"
                className="whitespace-nowrap text-[#CCCCCC] hover:text-[#E2001A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] rounded px-1"
              >
                Vue JS
              </Link>
              <Link
                to="/php"
                className="whitespace-nowrap text-[#CCCCCC] hover:text-[#E2001A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] rounded px-1"
              >
                PHP
              </Link>
              <Link
                to="/laravel"
                className="whitespace-nowrap text-[#CCCCCC] hover:text-[#E2001A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] rounded px-1"
              >
                Laravel
              </Link>
              <Link
                to="/angular"
                className="whitespace-nowrap text-[#CCCCCC] hover:text-[#E2001A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E2001A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] rounded px-1"
              >
                Angular
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2A2A2A] text-center text-[#CCCCCC] text-sm">
          <p>
            &copy; 2025 Stravo. All rights reserved.{" "}
            <Link
              to="/privacy"
              className="hover:text-[#E2001A] focus:outline-none focus:ring-2 focus:ring-[#E2001A] rounded px-1"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              to="/terms"
              className="hover:text-[#E2001A] focus:outline-none focus:ring-2 focus:ring-[#E2001A] rounded px-1"
            >
              Terms of Service
            </Link>
          </p>
        </div>
        <p className="text-sm text-[#CCCCCC] mt-2 text-center">
          STRAVO — We build your machine behind your vision. Design, Code, and
          Deliver.
        </p>
      </div>
    </footer>
  );
}