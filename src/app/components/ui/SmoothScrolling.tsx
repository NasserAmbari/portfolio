"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

const SmoothScrolling = ({ children }: { children: ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScrolling;
