import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

import BannerImage from "../assets/d-coders-banner-2.png";

const About = () => {
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.to(".mask-clip-path", {
      width: "80vw",
      height: "80vh",
      borderRadius: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#clip",
        start: "top 50%",
        end: "+=400",
        scrub: true,
      },
    });

    gsap.to(buttonRef.current, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top bottom",
        end: "top 80%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div id="about" className="min-h-screen w-full overflow-x-hidden">
      <div className="relative mb-20 mt-20 flex flex-col items-center gap-5">
        <h2 className="text-3xl font-medium uppercase">Welcome Coders</h2>

        <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
          Unlock your Passion
        </div>

        <div className="h-dvh w-full relative overflow-hidden" id="clip">
          <div className="mask-clip-path about-image absolute top-1/2 left-1/2 w-[50vw] h-[50vh] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl">
            <img
              src={BannerImage}
              alt="bg-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-2xl text-center px-4">
          Join the squad that dreams big and codes bigger.
        </p>

        <a
          href="/join"
          ref={buttonRef}
          style={{ opacity: 0, transform: "translateY(50px)" }}
          className="group relative mt-8 inline-flex items-center gap-3 rounded-full p-[2px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,400,499)]"
        >
          <span className="flex items-center rounded-full bg-black px-8 py-4 text-lg font-semibold uppercase tracking-wider text-white transition-all group-hover:bg-white group-hover:text-black">
            Join Now
            <svg
              className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 7L7 17M17 7h-6M17 7v6"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default About;
