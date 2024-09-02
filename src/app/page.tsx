"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";
import Hero from "./components/Hero";
import MySelf from "./assets/thisisme.png";
import Jobify from "./assets/jobify.png";
import ReactLogo from "./assets/ReactLogoMini.png";
import SplitText from "./components/ui/SplitText";
import { isEven } from "./libs/func";

interface SocialLink {
  social: string;
}

type TechStack = {
  image: StaticImageData;
  name: string;
};

interface Works {
  image: StaticImageData;
  name: string;
  techStack: TechStack[];
}

const socialLink: SocialLink[] = [
  {
    social: "Linkedin",
  },
  {
    social: "Github",
  },
  {
    social: "Instagram",
  },
  {
    social: "Whatsapp",
  },
];

const works: Works[] = [
  {
    image: Jobify,
    name: "Jobify",
    techStack: [{ image: ReactLogo, name: "react" }],
  },
  {
    image: Jobify,
    name: "Jobify",
    techStack: [{ image: ReactLogo, name: "react" }],
  },
];

export default function Home() {
  const imageHero = useRef<HTMLImageElement>(null);
  const textAbout = useRef<(HTMLSpanElement | null)[]>([]);
  const textSocial = useRef<(HTMLSpanElement | null)[]>([]);
  const social = useRef<(HTMLDivElement | null)[]>([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const textAnimationElements = [
      textAbout.current,
      textSocial.current,
      social.current,
    ];

    gsap.fromTo(
      imageHero.current,
      {
        yPercent: "120",
      },
      {
        yPercent: "0",
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        // scrollTrigger: {
        //   trigger: imageHero.current,
        //   toggleActions: "play none none none",
        //   // markers: true,
        //   start: "0 95%",
        // },
      }
    );

    textAnimationElements.forEach((elm, idx) => {
      gsap.fromTo(
        elm,
        {
          yPercent: "120",
        },
        {
          yPercent: "0",
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: elm,
            toggleActions: "play reverse play reverse",
            start: "top 100%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <main className="">
      <section className="mb-16 md:mb-40">
        <Hero></Hero>
      </section>

      <section className="mb-20 md:mb-72">
        <h3 className="text-2xl md:text-6xl">
          <SplitText
            ref={textAbout}
            text="strong foundation in website development especially in front-end web development using javascript, not only that I am also experienced in planning event creation in building brand awareness. "
          />
        </h3>
      </section>

      <section className="mb-20 md:mb-72">
        {works.map((elm, idx) => {
          return (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-2 mb-32 lg:mb-60">
              <div
                className={`overflow-hidden mb-4 md:mb-0 
                  ${isEven(idx) ? "lg:order-last" : ""}`}>
                <Image src={elm.image} alt={elm.name} className="rounded-3xl" />
              </div>

              <div
                className={`flex justify-center items-center flex-col ${
                  isEven(idx) ? " lg:items-start" : " lg:items-end"
                }`}>
                <h4 className="text-center text-4xl md:text-9xl mb-4 font-bold">
                  Jobify
                </h4>

                <div className="flex gap-4 mb-4">
                  {elm.techStack.map((elm, idx) => {
                    return (
                      <div key={idx} className="w-8 md:w-full">
                        <Image src={elm.image} alt={elm.name} />
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-8">
                  <button className="py-2 px-4 md:py-4 md:px-8 border border-white rounded-full">
                    View Project
                  </button>
                  <button className="py-2 px-4 md:py-4 md:px-8 border border-white rounded-full">
                    Github
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="h-screen mb-20 md:mb-72">
        <h3 className="text-5xl md:text-8xl text-center mb-8">
          <SplitText center={true} ref={textSocial} text="Find my social" />
        </h3>

        {socialLink.map((elm, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-center items-center overflow-hidden">
              <div
                ref={(element) => {
                  social.current[idx] = element;
                }}
                className="flex min-w-full md:min-w-[42rem] justify-between py-4 border-b border-b-white ">
                <div>{elm.social}</div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
