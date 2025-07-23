import aboutImg from '../assets/logo.jpeg';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef();

  useEffect(() => {
    const el = aboutRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="min-h-screen py-20 container mx-auto px-4 text-center"
    >
      <h2 className="text-5xl font-modern-negra mb-10">About Us</h2>
      <div className="flex justify-center mb-10">
        <img
          src={aboutImg}
          alt="About D-Coders"
          className="w-full md:w-1/2 rounded-2xl shadow-lg"
        />
      </div>
      <p className="text-lg max-w-4xl mx-auto leading-8">
        <strong>D-Coders Squad</strong> is the official student-driven tech community of the
          Computer Science & Engineering Department at <strong>COER University</strong>. Formed to
          inspire, educate, and empower aspiring engineers, the community provides a vibrant space
          where curiosity meets creativity and knowledge transforms into real-world impact.
          <br /><br />
          We believe in learning beyond the classroom. Our mission is to bridge the gap between
          academic theory and industry practice through collaborative activities, hands-on
          projects, peer mentoring, and competitive events. From organizing hackathons and coding
          challenges to hosting expert-led workshops and seminars, D-Coders Squad is at the
          forefront of student engagement in the ever-evolving world of technology.
          <br /><br />
          The community thrives under the guidance of visionary faculty members like
          <strong> Dr. Deepak Painuli (HOD, CSE)</strong>, ensuring that every student gets the
          right platform to discover their strengths and pursue their passions in tech. D-Coders
          Squad not only promotes technical excellence but also nurtures leadership,
          communication, and innovation through active team collaboration.
          <br /><br />
          Whether you are a first-year student looking for a starting point or a senior aiming to
          polish your expertise, D-Coders Squad welcomes everyone. We are more than just a club —
          we are a family of future developers, researchers, designers, innovators, and
          problem-solvers.
          <br /><br />
          Explore our <strong>Clubs</strong> page to learn more about the specialized groups and how
          you can become a part of this thriving community.
     
      </p>
    </section>
  );
};

export default About;


