import React from "react";
import { FaRobot } from "react-icons/fa6";
import { motion } from "framer-motion";

const MLSkills = () => {
  return (
    <motion.div
      className="bg-gray-100/20 dark:bg-dark/50 p-6 rounded-lg shadow-md "
      whileHover={{ scale: 1.05 }} // ✅ explicit
      transition={{ type: "spring", stiffness: 300 }}
    >
      <FaRobot className="h-8 w-8 text-pink-500 mb-4 " />
      <h3 className="text-xl font-semibold mb-2">AI / ML</h3>
      <ul className="text-secondary space-y-2 ">
        <li>NumPy & Pandas (data manipulation & analysis)</li>
        <li>Machine Learning (regression, classification, etc.)</li>
        <li>Deep Learning (CNN , RNN , Transformers)</li>
        <li>Natural Language Processing </li>
        <li>Agentic AI (AI Agents, LLMs + tools)</li>
      </ul>
    </motion.div>
  );
};

export default MLSkills;
