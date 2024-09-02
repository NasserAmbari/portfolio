"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

const SplitText = forwardRef(({ text }: { text: string }, ref) => {
  const internalRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useImperativeHandle(ref, () => internalRefs.current);

  return (
    <div className="block">
      {text.split(" ").map((elm, idx) => (
        <span key={idx} className="py-0 lg:py-2 overflow-hidden inline-block">
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
});

SplitText.displayName = "SplitText";

export default SplitText;
