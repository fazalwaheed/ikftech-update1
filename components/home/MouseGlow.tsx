"use client";

import { useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (glowRef.current) {
      glowRef.current.style.left = `${x}px`;
      glowRef.current.style.top = `${y}px`;
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden rounded-3xl"
    >
      <div
        ref={glowRef}
        className="
          pointer-events-none
          absolute
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          opacity-0
          blur-3xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(circle, rgba(155,28,49,0.28) 0%, rgba(155,28,49,0.10) 35%, transparent 70%)",
        }}
      />
    </div>
  );
}