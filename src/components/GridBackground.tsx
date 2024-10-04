import React from "react";

interface GridBackgroundProps {
    children: React.ReactNode;
    className?: string; // Make className optional
}

export function GridBackground({ children, className = "" }: GridBackgroundProps) {
  return (
    <div className={`h-[50rem] w-full bg-black bg-grid-white/[0.8] inset z-0 relative flex items-center justify-center ${className}`}>
      <div className="absolute pointer-events-none inset-0 flex items-center z-100 justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,green)]"></div>
      {children}
    </div>
  );
}
