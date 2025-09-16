import React from "react";
import Image from "next/image";
import SocialLinks from "../Constants/Sociallinks";
import HeroButton from "../Constants/HeroButton";

const Hero = () => {
  return (
    <section className="container py-28 max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/profile.avif"
            alt="profile image"
            width={100}
            height={100}
            className="rounded-full mb-4 w-40 h-40 object-cover ring-2 ring-primary"
          />
        </div>
        <h1 className="4xl md:text-6xl font-bold mb-6">
          Hi , I'm <span className="text-primary">Avishek Basyal</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Full stack developer | AI/ML enthusiast
        </p>
        <SocialLinks />
        <HeroButton />
      </div>
    </section>
  );
};

export default Hero;
