"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

const Button = forwardRef(({ text }: { text: string }, ref) => {
  const internalRefs = useRef<(HTMLButtonElement | null)[]>([]);
  useImperativeHandle(ref, () => internalRefs.current);

  return (
    <div className="overflow-hidden">
      <button
        ref={(elm) => {
          internalRefs.current.push(elm);
        }}
        className="py-2 px-4 md:py-4 md:px-8 border border-white rounded-full">
        {text}
      </button>
    </div>
  );
});

Button.displayName = "SplitText";

export default Button;
