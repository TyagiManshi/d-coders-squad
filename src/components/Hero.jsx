import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    const el = heroRef.current;

    gsap.fromTo(
      el.querySelector('h1'),
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      el.querySelector('p'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center text-center pt-32 px-4"
    >
      <h1 className="text-5xl md:text-[8vw] font-modern-negra text-white hover:text-blue-300 transition duration-300 hover:drop-shadow-[0_0_25px_rgba(96,165,250,0.7)]">
        D-Coders Squad
      </h1>
      <p className="mt-4 text-lg text-blue-200 max-w-xl">
        A passionate student-led community under the CSE department at COER University.
      </p>
    </section>
  );
};

export default Hero;

