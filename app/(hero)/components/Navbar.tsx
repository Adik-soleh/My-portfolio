"use client";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import circle from "../../../components/assets/circle.png";
import lakoe from "../../../components/assets/lakoe.png";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Navbar({
  OnSectionClick,
}: {
  OnSectionClick: (section: string) => void;
}) {
  const [active, setActive] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down
        setShowNavbar(false);
      } else {
        // if scroll up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <div
      className={cn(
        "fixed top-16 inset-x-0 max-w-sm sm:max-w-lg mx-auto z-50 border border-amber-300 rounded-full flex justify-evenly dark:bg-black bg-white transition-transform duration-300",
        showNavbar ? "transform-y-0" : "translate-y-[-300%]"
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="icon"
          onClick={() => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <div className="cursor-pointer" onClick={() => setTheme("light")}>
              Light
            </div>
            <div className="cursor-pointer" onClick={() => setTheme("dark")}>
              Dark
            </div>
          </div>
        </MenuItem>{" "}
        <div className="mr-5 sm:mr-20">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Adik Soleh"
            onClick={() => OnSectionClick("Contacts")}
          >
            <div className="flex flex-col space-y-4 text-sm items-start">
              <HoveredLink href="https://www.instagram.com/adk.soleh/">
                <div className="mr-1">
                  <AiFillInstagram />
                </div>
                Instagram
              </HoveredLink>
              <HoveredLink href="https://github.com/Adik-soleh">
                <div className="mr-1">
                  <FaGithub />
                </div>
                Github
              </HoveredLink>
              {/* <HoveredLink href="https://www.linkedin.com/in/kevincornellius/"> */}
                <div className="mr-1">
                  <FaLinkedinIn />
                </div>
                LinkedIn
              {/* </HoveredLink> */}
            </div>
          </MenuItem>
        </div>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Projects"
          onClick={() => OnSectionClick("Projects")}
        >
          <div className="  grid grid-cols-1 gap-10 p-4)">
            <ProductItem
              title="Circle App"
              href="https://cirle-app-type-script.vercel.app/"
              src={circle.src}
              description=" Made With React TypeScript"
            />
            <ProductItem
              title="E-Commerce Lakoe"
              href="https://lakoe-frontend-beta.vercel.app/"
              src={lakoe.src}
              description="Integrated with bitechip and Midtrans"
            />
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="About"
          onClick={() => OnSectionClick("About")}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <div
              className="cursor-pointer"
              onClick={() => OnSectionClick("About")}
            >
              About Me
            </div>
            <div
              className="cursor-pointer"
              onClick={() => OnSectionClick("Experiences")}
            >
              Experiences
            </div>
            <div
              className="cursor-pointer"
              onClick={() => OnSectionClick("Education")}
            >
              Education
            </div>
            <div
              className="cursor-pointer"
              onClick={() => OnSectionClick("Achievement")}
            >
              Achievement
            </div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
