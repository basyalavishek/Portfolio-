"use client";

import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: <FaTwitter className="w-5 h-5" />,
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: <FaEnvelope className="w-5 h-5" />,
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container max-w-5xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Avishek&trade;
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack developer passionate about creating innovative
              solutions and building exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                Have a project in mind? Let's work together to bring your ideas
                to life.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
              >
                Start a conversation →
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center text-gray-400 text-sm">
              <span>© {currentYear} Avishek. Made with</span>
              <FaHeart className="w-4 h-4 text-red-500 mx-1" />
              <span>using Next.js & Tailwind CSS</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <FaArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Pattern (Optional) */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none opacity-50"></div>
    </footer>
  );
};

export default Footer;
