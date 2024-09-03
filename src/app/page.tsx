"use client";
import React, { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";

import { Button, SplitText } from "./components/ui";
import { isEven } from "./libs/func";
import { ReactLogo } from "./assets/logo";

import Jobify from "./assets/jobify.png";
import Theisme from "./assets/thisisme.png";

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
    techStack: [
      { image: ReactLogo, name: "react" },
      { image: ReactLogo, name: "react" },
      { image: ReactLogo, name: "react" },
    ],
  },
  {
    image: Jobify,
    name: "Jobify",
    techStack: [{ image: ReactLogo, name: "react" }],
  },
];

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const text = useRef<HTMLSpanElement[]>([]);
  const image = useRef<HTMLImageElement[]>([]);
  const button = useRef<HTMLButtonElement[]>([]);
  const social = useRef<HTMLDivElement[]>([]);

  const imageHero = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    const elementTextAnimation = [
      ...text.current,
      ...image.current,
      ...button.current,
    ];

    elementTextAnimation.forEach((elm) => {
      gsap.fromTo(
        elm,
        {
          yPercent: "100",
        },
        {
          yPercent: "0",
          stagger: 0.125,
          duration: 1.3,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: elm,
            toggleActions: "play none none none",
            start: "top 100%",
          },
        }
      );
    });

    gsap.fromTo(
      imageHero.current,
      { scale: 1.5 },
      {
        scale: 1,
        borderRadius: "1.5rem",
        scrollTrigger: {
          scrub: 1,
          trigger: imageHero.current,
          start: "top 100%",
          end: "center center",
        },
      }
    );
  }, []);

  return (
    <main className="">
      <section className="mb-20 md:mb-40">
        <div className="flex justify-center items-center min-h-[calc(100vh-10rem)]">
          <h1 className="font-light text-5xl md:text-6xl lg:text-8xl flex justify-center items-center flex-col">
            <SplitText
              center={true}
              text="Im Creating Something Aesthetic"
              ref={(ref: HTMLSpanElement) => {
                text.current.push(ref);
              }}
            />
          </h1>
        </div>
      </section>

      <section className="mb-20 md:mb-72">
        <div className="overflow-x-hidden">
          <Image
            src={Theisme}
            alt="this is me"
            ref={imageHero}
            className="w-full mb-6"
          />
        </div>
        <h3 className="text-3xl md:text-6xl">
          <SplitText
            ref={(ref: HTMLSpanElement) => {
              text.current.push(ref);
            }}
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
                <Image
                  ref={(ref: HTMLImageElement) => {
                    image.current.push(ref);
                  }}
                  src={elm.image}
                  alt={elm.name}
                  className="rounded-3xl"
                />
              </div>

              <div
                className={`flex justify-center items-center flex-col ${
                  isEven(idx) ? " lg:items-start" : " lg:items-end"
                }`}>
                <h4 className="text-center text-6xl md:text-9xl mb-4 font-bold">
                  <SplitText
                    center={true}
                    ref={(ref: HTMLSpanElement) => {
                      text.current.push(ref);
                    }}
                    text={elm.name}
                  />
                </h4>

                <div className="flex gap-4 mb-4">
                  {elm.techStack.map((elm, idx) => {
                    return (
                      <div
                        key={idx}
                        className="w-8 md:w-full overflow-hidden mb-4">
                        <Image
                          ref={(ref: HTMLImageElement) => {
                            image.current.push(ref);
                          }}
                          src={elm.image}
                          alt={elm.name}
                          className="w-16"
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-2">
                  <Button
                    text="View Project"
                    ref={(ref: HTMLButtonElement) => {
                      button.current.push(ref);
                    }}
                  />
                  <Button
                    text="View Github"
                    ref={(ref: HTMLButtonElement) => {
                      button.current.push(ref);
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="h-screen mb-20 md:mb-72">
        <h3 className="text-5xl md:text-8xl text-center mb-8">
          <SplitText
            center={true}
            ref={(ref: HTMLSpanElement) => {
              text.current.push(ref);
            }}
            text="Find my social"
          />
        </h3>

        {socialLink.map((elm, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-center items-center overflow-hidden">
              <div
                ref={(elm: HTMLDivElement) => {
                  social.current.push(elm);
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
