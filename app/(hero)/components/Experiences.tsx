"use client";
import React from "react";
import logoPPSN from "../../../components/assets/ppsn.png";
import logoTOKI from "../../../components/assets/Toki.jpg";

import { AnimatedSection } from "@/components/ui/animated-reveal";
function Experiences() {
  return (
    <div className="min-h-full">
      <AnimatedSection>
        <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300 my-12">
          My Experiences
        </h1>
      </AnimatedSection>

      <div>
        <ul>
          <AnimatedSection>
            <li
              onClick={() => window.open("https://www.linkedin.com/school/dumbways-id/posts/?feedView=all", "_blank")}
              className=" cursor-pointer hover:border-amber-100  flex flex-col lg:flex-row justify-start items-center gap-6 w-full my-4 bg-white border-4 dark:hover:border-amber-500  dark:bg-black  border-amber-300 px-16 py-8 rounded-3xl"
            >
              <img
                draggable="false"
                src={"https://ewr1.vultrobjects.com/lmsbzzbx/attachment/44c9uqjr8tcbcask.png"}
                alt=""
                className="w-20 rounded-full"
              />
              <div>
                <h2 className="font-black text-md sm:text-xl">
                  Fullstack Web Developer
                </h2>
                <h3 className="font-bold text-black dark:text-white opacity-40 text-xs sm:text-sm  mb-4">
                  PT. DumbWays Indonesia Teknologi- 2024
                </h3>
                <p className="text-xs">
                I am a fullstack web developer with 1 year of experience. I studied coding at Dumbways, where I gained a strong foundation in web development using modern technologies to create efficient and high-quality solutions.
                </p>
              </div>
            </li>
          </AnimatedSection>
        </ul>
      </div>
    </div>
  );
}

export default Experiences;
