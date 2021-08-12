import * as React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Cursor from "../components/lib/Cursor/Cursor";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";

import Projects from "../components/Projects/Projects";

import Navigation from "../components/Navigation/Navigation";
import { StoreProvider } from "../components/lib/StoreProvider/StoreProvider";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IndexPage: React.FC<any> = ({}) => {
  useEffect(() => {
    initAnimations();
  }, []);

  const initAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);

    /////////////////////
    // Bg color change //
    /////////////////////
    const body = document.getElementsByTagName("main")[0];
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#experience",
          start: "top bottom",
          end: "+=100%",
          scrub: true,
        },
      })
      .to(body, {
        backgroundColor: "#0038f5",
      })
      .to(".navLink", {
        color: "#fcfcfc",
      })
      .to(".navLinkHome", {
        border: "5px solid #fcfcfc",
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#works",
          start: "top bottom",
          end: "+=100%",
          scrub: true,
        },
      })
      .to(body, {
        backgroundColor: "#111111",
      });

    /////////////////////
    //// Fade in up /////
    /////////////////////
    const fadeInUpTween = document.querySelectorAll(".fade-in-up");
    fadeInUpTween.forEach((item, idx) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "Power2.easeOut",
      });
    });
  };

  return (
    <StoreProvider>
      <main>
        <title>Portfolio 2021</title>
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Cursor />
      </main>
    </StoreProvider>
  );
};

export default IndexPage;
