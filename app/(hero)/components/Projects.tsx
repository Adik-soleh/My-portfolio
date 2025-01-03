"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AnimatedSection } from "@/components/ui/animated-reveal";
import beautyWeb from "../../../components/assets/beautyweb.png";
import mern from "../../../components/assets/mern.png";
import circle from "../../../components/assets/circle.png";
import lakoe from "../../../components/assets/lakoe.png"
import { MdJavascript } from "react-icons/md";
import { FaCss3Alt, FaReact } from "react-icons/fa6";
import { DiHtml5 } from "react-icons/di";
import { GrCss3 } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { SiChakraui, SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
function Projects() {
  return (
    <div className="min-h-screen ">
      <AnimatedSection>
        <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300">
          My Projects
        </h1>
      </AnimatedSection>
      <AnimatedSection>
        <HoverEffect items={projects} />
      </AnimatedSection>
    </div>
  );
}

export const projects = [
  {
    title: "Social Media App",
    description:
      "This project is developed using TypeScript, React, and Vite for the frontend, providing a fast and modern user interface. The backend leverages Express for server-side logic, with PostgreSQL as the database and Supabase for seamless data management and real-time capabilities. This tech stack ensures scalability, maintainability, and efficient data handling.",
    link: "https://cirle-app-type-script.vercel.app/",
    image: circle,
    githubLink: "https://github.com/Adik-soleh/Cirle-App_TypeScript",
    icons: [
      { icon: FaReact, link: "https://react.dev/" },
      { icon: DiHtml5, link: "https://www.w3schools.com/html/" },
      { icon: FaCss3Alt, link: "https://www.w3schools.com/css/" },
      { icon: IoLogoJavascript, link: "https://www.javascript.com/" },
    ],
  },
  {
    title: "E-Commerce Web Lakoe",
    description:
      "This e-commerce project is developed using TypeScript, React, and Chakra UI for a responsive and modern frontend. The backend is powered by Express with PostgreSQL as the primary database for product and transaction management. Payment systems are integrated with Midtrans and Bitechip, ensuring secure and efficient transactions. This technology stack is designed to deliver a seamless, well-structured, and reliable online shopping experience.",
    link: "https://lakoe-frontend-beta.vercel.app/",
    image: lakoe,
    githubLink: "https://github.com/kevincornellius/MERN-ecommerceweb",
    icons: [
      { icon: SiPostgresql, link: "https://www.mongodb.com/" },
      { icon: SiExpress, link: "https://expressjs.com/" },
      { icon: FaReact, link: "https://react.dev/" },
      { icon: RiNodejsLine, link: "https://nodejs.org/en" },
      { icon: DiHtml5, link: "https://www.w3schools.com/html/" },
      { icon: SiChakraui, link: "https://www.w3schools.com/css/" },
      { icon: IoLogoJavascript, link: "https://www.javascript.com/" },
    ],
  },
];

export default Projects;
