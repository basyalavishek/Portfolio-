import React from "react";
import { FaCode } from "react-icons/fa";

const FrontendSkills = () => {
  return (
    <div className="bg-gray-100/20 dark:bg-dark/50 p-6 rounded-lg shadow-md ">
      <FaCode className="h-8 w-8 text-primary mb-4 " />
      <h3 className="text-xl font-semibold mb-2">Frontend</h3>
      <ul className="text-secondary space-y-2 ">
        <li>React / Next.js</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>
  );
};

export default FrontendSkills;
