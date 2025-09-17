"use client";

import {
  SunIcon,
  MoonIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { menuItems } from "./menu";

import { motion, AnimatePresence } from "framer-motion";
import useGetActive from "./useGetActive";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { isActive, scrollToSection } = useGetActive();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-400 dark:border-gray-700 shadow-sm trannsition-colors">
      <div className="container max-w-5xl mx-auto px-4 ">
        {/* Desktop Menu */}
        <div className="flex items-center justify-between h-16">
          <div
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold text-primary cursor-pointer"
          >
            Avishek&trade;
          </div>

          {/* Desktop Menus */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              return (
                <div
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`hover:text-primary transition-colors font-medium cursor-pointer ${
                    isActive(item.href) ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                </div>
              );
            })}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:text-white hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </motion.button>
          </div>
          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </motion.button>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={toggleMobileMenu}
                  >
                    <div
                      onClick={() => scrollToSection(item.href)}
                      className="block py-2 px-4 rounded-lg hover: dark:hover:bg-gray-800 transition-colors"
                    >
                      {item.label}
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                >
                  <button
                    onClick={toggleTheme}
                    className="flex items-center py-2 hover:text-primary transition-colors"
                  >
                    {theme === "dark" ? (
                      <>
                        <SunIcon className="w-5 h-5" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <MoonIcon className="w-5 h-5" />
                        Dark Mode
                      </>
                    )}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
