"use client";
import { forwardRef, useImperativeHandle, useRef } from "react";

const SplitText = forwardRef(
  ({ text, center }: { text: string; center?: boolean }, ref) => {
    const internalRefs = useRef<(HTMLSpanElement | null)[]>([]);
    useImperativeHandle(ref, () => internalRefs.current);

    return (
      <div
        className={`flex flex-wrap ${
          center ? "justify-center" : "justify-start"
        }`}>
        {text.split(" ").map((elm, idx) => (
          <span key={idx} className="py-0 lg:py-2 overflow-hidden block">
            <span
              ref={(elm) => {
                internalRefs.current[idx] = elm;
              }}
              className="mr-2 md:mr-4 inline-block">
              {elm}
            </span>
          </span>
        ))}
      </div>
    );
  }
);

SplitText.displayName = "SplitText";

export default SplitText;
