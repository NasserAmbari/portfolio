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
          <span key={idx} className="overflow-hidden block">
            <span
              ref={(elm) => {
                internalRefs.current.push(elm);
              }}
              className="mx-2 pb-2 lg:py-4 inline-block">
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
