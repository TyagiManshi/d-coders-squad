'use client'
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 ease-in-out">
        <a href="/">
        <Image
          src={assets.logo_dark_nobg}
          alt="Logo"
          className="w-12 h-auto cursor-pointer"
        />
      </a>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto font-Ovo transition-all duration-500 ease-in-out">
          <li>
            <a className="font-Ovo hover:text-gray-600 transition-colors duration-300" href="/clubs">
              C L U B S
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-gray-600 transition-colors duration-300" href="/about">
                A B O U T
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-gray-600 transition-colors duration-300" href="/contact">
                C O N T A C T
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            className="block md:hidden ml-3 transition-transform duration-200 hover:scale-110"
            onClick={openMenu}
          >
            <Image
              src={assets.menu} 
              alt=""
              className="w-6"
            />
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

export default Navbar