"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import SplitText from "./ui/SplitText";

const Hero = () => {
  const text1 = useRef<(HTMLSpanElement | null)[]>([]);
  const text2 = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.fromTo(
      [...text1.current, ...text2.current],
      { yPercent: 120 },
      {
        yPercent: "0",
        stagger: 0.1,
        ease: "power4.inOut",
      }
    );

    // gsap.fromT;
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-10rem)]">
      <h1 className="font-light text-5xl md:text-6xl lg:text-8xl flex justify-center items-center flex-col">
        <SplitText text="Hi! im Bari 👋" ref={text1}></SplitText>
        <SplitText text="Im Frond End Developer " ref={text2}></SplitText>
      </h1>
    </div>
  );
};

export default Hero;
