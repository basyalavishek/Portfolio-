import React from "react";
import { FaLaptop } from "react-icons/fa";
import { motion } from "framer-motion";

const BackendSkills = () => {
  return (
    <motion.div
      className="bg-gray-100/20 dark:bg-dark/50 p-6 rounded-lg shadow-md "
      whileHover={{ scale: 1.05 }} // ✅ explicit
      transition={{ type: "spring", stiffness: 300 }}
    >
      <FaLaptop className="h-8 w-8 text-primary mb-4 " />
      <h3 className="text-xl font-semibold mb-2">Backend</h3>
      <ul className="text-secondary space-y-2 ">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Fast API</li>
      </ul>
    </motion.div>
  );
};

export default BackendSkills;
