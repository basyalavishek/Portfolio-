"use client";
import React from "react";
import Image from "next/image";
import SocialLinks from "../Constants/Sociallinks";
import HeroButton from "../Constants/HeroButton";

import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "@/utils/animations";

const Hero = () => {
  return (
    <section id="home" className="container py-20 max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          {...scaleIn}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mb-4"
        >
          <Image
            src="/profile.jpg"
            alt="profile image"
            width={200}
            height={200}
            className="rounded-full w-40 h-40 mb-4 md:w-60 md:h-60 object-cover ring-2 ring-primary"
          />
        </motion.div>
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi , I&apos;m{" "}
          <motion.span
            {...fadeIn}
            transition={{ delay: 0.8 }}
            className="text-primary"
          >
            Avishek Basyal
          </motion.span>
        </motion.h1>
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Full stack developer | AI/ML enthusiast
        </motion.p>
        <SocialLinks />
        <HeroButton />
      </div>
    </section>
  );
};

export default Hero;
