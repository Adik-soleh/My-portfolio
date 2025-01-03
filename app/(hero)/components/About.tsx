import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/moving-border";
import React from "react";

function About({
  OnSectionClick,
}: {
  OnSectionClick: (section: string) => void;
}) {
  const words = [
    "Competitive Programmer",
    "Problem Solver",
    "Fullstack Developer",
    "Web Developer",
  ];

  return (
    <div className="min-h-full mt-24 mb-32">
      <h1 className="font-black text-4xl sm:text-7xl">Soleh</h1>
      <FlipWords
        className="font-medium text-xl sm:text-4xl mt-3"
        words={words}
      />
      <br />
      <p className="pt-10 mb-16 ">
      I am a fullstack developer with 1 year of professional experience. I have expertise in building modern web applications using various technologies, including TypeScript, React, and backend frameworks. With a passion for solving problems and creating efficient digital solutions, I continuously strive to enhance my skills and deliver the best outcomes for every project I work on.
        
      </p>

      <Button
        borderRadius="1.75rem"
        className="bg-white font-black hover:bg-amber-300 transition  dark:bg-black text-black dark:text-white border-neutral-200 dark:border-neutral-600"
        // onClick={() => {
        //   window.open(
        //     "https://drive.google.com/file/d/1DIRrnFLbnbdAhAGAluGKT6uuBhFxQHXr/view?usp=drive_link",
        //     "_blank"
        //   );
        // }}
      >
        My CV
      </Button>
      <button
        onClick={() => OnSectionClick("Contacts")}
        className="h-16 w-32 font-black text-sm bg-amber-300 ml-6 text-black hover:bg-white border hover:opacity-70 rounded-[1.75rem] "
      >
        Contact Me
      </button>
    </div>
  );
}

export default About;
