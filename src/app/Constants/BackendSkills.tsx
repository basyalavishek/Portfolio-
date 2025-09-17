import React from "react";
import { FaLaptop } from "react-icons/fa";

const BackendSkills = () => {
  return (
    <div className="bg-gray-100/20 dark:bg-dark/50 p-6 rounded-lg shadow-md ">
      <FaLaptop className="h-8 w-8 text-primary mb-4 " />
      <h3 className="text-xl font-semibold mb-2">Backend</h3>
      <ul className="text-secondary space-y-2 ">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Fast API</li>
      </ul>
    </div>
  );
};

export default BackendSkills;
