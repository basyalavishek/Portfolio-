import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const sociallinks = () => {
  return (
    <motion.div
      {...fadeInUp}
      transition={{ delay: 0.5 }}
      className="flex justify-center space-x-4 mb-8"
    >
      <motion.a
        href="https://github.com/basyalavishek"
        className="text-2xl text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaGithub />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/avishek-basyal-566763260/"
        className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaLinkedin />
      </motion.a>
      <motion.a
        href="https://www.instagram.com/avishekbasyal14"
        className="text-2xl text-gray-600 dark:text-gray-300 hover:text-pink-500 transition"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaInstagram />
      </motion.a>
    </motion.div>
  );
};

export default sociallinks;
