import React from "react";
import FrontendSkills from "../Constants/FrontendSkills";
import BackendSkills from "../Constants/BackendSkills";
import ML_Skills from "../Constants/MLSkills";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
} from "@/utils/animations";

const About = () => {
  return (
    <div className="container mx-auto max-w-7xl py-20">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About me
      </motion.h1>

      {/* bio section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          Hi, I’m Avishek Basyal, a passionate Computer Engineering student with
          a keen interest in AI, Machine Learning, and Full-Stack Development. I
          love building innovative projects that solve real-world problems and
          continuously learning new technologies.
        </p>
      </motion.section>

      {/* skills section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title">Skills</motion.h2>
        <motion.div
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <FrontendSkills />
          <BackendSkills />
          <ML_Skills />
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            whileHover={{ scale: 1.05 }} // ✅ explicit
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-100/20 dark:bg-dark/50 p-6 rounded-lg shadow-md text-center"
          >
            <h3 className="font-semibold text-xl mb-2">
              Studying Bachelor in Computer Engineering
            </h3>
            <p className="text-primary mb-2">
              Western Regional Campus • 2022 - Present
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
