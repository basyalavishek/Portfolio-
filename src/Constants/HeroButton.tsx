import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import useGetActive from "@/components/useGetActive";

const HeroButton = () => {
  const { scrollToSection } = useGetActive();
  return (
    <motion.div
      {...fadeInUp}
      transition={{ delay: 0.6 }}
      className="flex flex-col md:flex-row justify-center gap-4 "
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <div
          onClick={() => scrollToSection("projects")}
          className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors text-md md:text-lg cursor-pointer "
        >
          View Projects
        </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <div
          onClick={() => scrollToSection("contact")}
          className="bg-gray-500 inline-block w-full md:w-auto text-white hover:text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-500 transition-colors text-md md:text-lg cursor-pointer "
        >
          Contact me
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroButton;
