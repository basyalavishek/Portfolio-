import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const sociallinks = () => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
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
  );
};

export default sociallinks;
