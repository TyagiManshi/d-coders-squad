import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Footer = () => {
  useGSAP(() => {
    gsap.from(".wave", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });
    gsap.from(".footer-links, .footer-icons, .footer-text", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <footer className="relative bg-[#021114] text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="wave w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0ca2b7"
            d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,186.7C840,181,960,139,1080,138.7C1200,139,1320,181,1380,202.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
          <path
            fill="#0ca2b7"
            fillOpacity="1"
            d="M0,288L60,272C120,256,240,224,360,208C480,192,600,192,720,197.3C840,203,960,213,1080,208C1200,203,1320,181,1380,170.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 pt-40 pb-8">
        <div className="footer-icons flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-blue-300 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-blue-300 transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-blue-300 transition">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#" className="hover:text-blue-300 transition">
            <FaInstagram size={20} />
          </a>
        </div>

        <div className="footer-links flex flex-wrap justify-center space-x-4 mb-4 text-sm">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Team
          </a>
          <a href="#" className="hover:underline">
            Insights
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>

        <p className="footer-text text-center text-xs">
          All Rights Reserved | ©2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
