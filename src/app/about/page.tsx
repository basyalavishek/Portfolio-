import React from "react";
import FrontendSkills from "../Constants/FrontendSkills";
import BackendSkills from "../Constants/BackendSkills";
import ML_Skills from "../Constants/ML_Skills";

const page = () => {
  return (
    <div className="container mx-auto max-w-7xl py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">About me</h1>

      {/* bio section */}
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          Hi, I’m Avishek Basyal, a passionate Computer Engineering student with
          a keen interest in AI, Machine Learning, and Full-Stack Development. I
          love building innovative projects that solve real-world problems and
          continuously learning new technologies.
        </p>
      </section>

      {/* skills section */}
      <section className="mb-16">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FrontendSkills />
          <BackendSkills />
          <ML_Skills />
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-gray-100/20 dark:bg-dark/50 p-6 rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">
              Studying Bachelor in Computer Engineering
            </h3>
            <p className="text-primary mb-2">
              Western Regional Campus • 2022 - Present
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
