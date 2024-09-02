import { ReactNode, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const splitText = ({ text }: { text: string }) => {
  return text.split(" ").map((elm, idx) => {
    return (
      <span key={idx} className="overflow-hidden px-2">
        <span>{elm}</span>
      </span>
    );
  });
};

const isEven = (num: number) => {
  return num % 2 ? true : false;
};

export { splitText, isEven };
