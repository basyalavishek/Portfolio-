
"use client";

import { useEffect, useState } from "react";
import { menuItems as MenuData } from "./menu";

export default function useGetActive() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let activeId = "";

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeId = entry.target.id;
          }
        });

        if (activeId) setActiveSection(activeId);
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    MenuData.forEach((menu) => {
      const section = document.getElementById(menu.href);
      if (section) {
        sectionObserver.observe(section);
      }
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  const isActive = (sectionId: string) => {
    return sectionId === activeSection;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // adjust this to your navbar height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return { isActive, scrollToSection };
}
