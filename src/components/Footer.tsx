import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white/80 dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-primary "
            >
              Avishek&trade;
            </Link>
          </div>
          <div className="mb-2 md:mb-0">
            <p className="text-md md:text-lg text-secondary">
              © {new Date().getFullYear()} Avishek. All rights reserved
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/basyalavishek"
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/avishek-basyal-566763260/"
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.instagram.com/avishekbasyal14"
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-pink-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
