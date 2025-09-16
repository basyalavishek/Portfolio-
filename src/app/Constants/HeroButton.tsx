import Link from "next/link";
import React from "react";

const HeroButton = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 ">
      <Link
        href="/projects"
        className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors text-md md:text-lg "
      >
        View Projects
      </Link>
      <Link
        href="/contact"
        className="bg-gray-500 inline-block w-full md:w-auto text-white hover:text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-500 transition-colors text-md md:text-lg "
      >
        Contact me
      </Link>
    </div>
  );
};

export default HeroButton;
