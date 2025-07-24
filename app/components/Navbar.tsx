"use client";
import Image from "next/image";
import gsap from "gsap";
import { assets } from "@/assets/assets";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)"
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)"
        }
      ], {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, !00% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, !00% 100%, 100% 0%, 0% 0%)",
        }
      ], {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );
  }

  /* ---  GSAP character split  --- */
  useGSAP(
    () => {
      if (!containerRef.current || !logoRef.current) return;

      // Animate logo
      gsap.fromTo(
        logoRef.current,
        {
          opacity: 0,
          filter: "blur(20px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.inOut",
          delay: 0.5,
        }
      );

      // Animate nav links
      const links = containerRef.current.querySelectorAll("ul li a");

      links.forEach((link) => {
        const split = new SplitType(link as HTMLElement, { types: "chars" });

        // Manually reveal the parent <a> now that chars are wrapped
        (link as HTMLElement).style.visibility = "visible";

        // Animate characters
        gsap.from(split.chars, {
          yPercent: 100,
          autoAlpha: 0,
          duration: 1,
          ease: "power4.inOut",
          stagger: 0.03,
          delay: 0.5,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <>
      <nav
        ref={containerRef}
        className="navb pt-6 md:pt-10 w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50"
      >
        <a
          href="/"
        >
          <div ref={logoRef} className="logo-container">
            <Image
              src={assets.logo_dark_nobg}
              alt="Logo"
              className="w-12 h-auto cursor-pointer"
            />
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto">
          <li>
            <a
              className="font-Ovo hover:text-neutral-400 transition-colors duration-300 clip-link"
              href="/clubs"
            >
              C L U B S
            </a>
          </li>
          <li>
            <a
              className="font-Ovo hover:text-neutral-400 transition-colors duration-300 clip-link"
              href="/about"
            >
              A B O U T
            </a>
          </li>
          <li>
            <a
              className="font-Ovo hover:text-neutral-400 transition-colors duration-300 clip-link"
              href="/contact"
            >
              C O N T A C T
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            className="block md:hidden ml-3 transition-transform duration-200 hover:scale-110"
            onClick={openMenu}
          >
            <Image src={assets.menu} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <ul
          className={`text-xl transform transition-transform duration-500 ease-in-out
                      fixed top-0 right-0 bottom-0 w-full h-screen z-50 bg-neutral-950/95 backdrop-blur-md text-white
                      flex flex-col items-center justify-center gap-4 py-20 px-10 md:hidden
                      ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div
            className="absolute right-6 top-6 transition-transform duration-200 hover:scale-110"
            onClick={closeMenu}
          >
            <Image
              src={assets.close || "/placeholder.svg"}
              alt="Close"
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a
              className="font-Ovo hover:text-gray-300 transition-colors duration-300"
              onClick={closeMenu}
              href="/clubs"
            >
              C L U B S
            </a>
          </li>
          <li>
            <a
              className="font-Ovo hover:text-gray-300 transition-colors duration-300"
              onClick={closeMenu}
              href="/about"
            >
              A B O U T
            </a>
          </li>
          <li>
            <a
              className="font-Ovo hover:text-gray-300 transition-colors duration-300"
              onClick={closeMenu}
              href="/contact"
            >
              C O N T A C T
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
