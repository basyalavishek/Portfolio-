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

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-400 dark:border-gray-700 shadow-sm trannsition-colors">
      <div className="container max-w-5xl mx-auto px-4 ">
        {/* Desktop Menu */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Avishek&trade;
          </Link>

          {/* Desktop Menus */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`hover:text-primary transition-colors font-medium ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:text-white hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} onClick={toggleMobileMenu}>
                  <Link
                    href={item.href}
                    className="block py-2 px-4 rounded-lg hover: dark:hover:bg-gray-800 transition-colors"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div>
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
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
