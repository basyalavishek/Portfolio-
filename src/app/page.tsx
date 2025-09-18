import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export const metadata = {
  title: "Avishek Basyal | Portfolio",
  description:
    "Portfolio of Avishek Basyal, a Computer Engineering student , Web developer  and  AI/ML enthusiast. Explore projects, skills",
  keywords: [
    "Portfolio",
    "Avishek",
    "Basyal",
    "Avishek Basyal",
    "Computer Engineering",
    "WRC",
    "Western Regional Campus",
    "AI",
    "ML",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Frontend",
    "Backend",
    "avishek basyal",
    "Avishek Basyal",
  ],
  author: "Avishek Basyal",
  openGraph: {
    title: "Avishek Basyal ",
    description:
      "Portfolio of Avishek Basyal, a Computer Engineering student and AI/ML enthusiast. Explore projects, skills, and contact information.",
    url: "https://www.avishekbasyal.com.np",
    siteName: "Avishek Basyal Portfolio",
    images: [
      {
        url: "https://www.avishekbasyal.com.np/og-image.png",
        width: 1200,
        height: 630,
        alt: "Avishek Basyal Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avishek Basyal | Portfolio",
    description:
      "Portfolio of Avishek Basyal, a Computer Engineering student and AI/ML enthusiast.",
    images: ["https://www.avishekbasyal.com.np/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
