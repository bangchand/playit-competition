"use client";

import letakGeografis from "../assets/geografis.png";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../libs/utils";

export const PinContainer = ({
  children,
  title,
  to,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  to?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };

  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <Link
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      to={to || "/"}
    > 
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
            backgroundImage: `url(${letakGeografis})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute left-1/2 py-24 px-[11rem] -top-60 rounded-xl md:py-56 md:px-[25rem] md:top-1/2 flex justify-start items-start shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-400/0 via-white-400/90 to-white-400/0 transition-all duration-500 opacity-0 group-hover/pin:opacity-50"></span>

          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} to={to} />
    </Link>
  );
};

export const PinPerspective = ({
  // title,
  to,
}: {
  title?: string;
  to?: string;
}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        {/* Pin pertama */}
        <div className="absolute -top-72 md:-top-20 inset-x-0 flex justify-center">
          {to && (
            <Link
              to={to}
              target={"_blank"}
              className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
            >
              <span className="relative z-20 text-white text-[0.4rem] md:text-sm font-bold inline-block py-0.5">
                Desa Gondang
              </span>
              {/* Garis untuk pin */}
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 opacity-0 group-hover/pin:opacity-100"></span>
            </Link>
          )}
        </div>

        {/* Pin kedua */}
        <div className="absolute -top-64 md:-top-12 -left-48 md:-left-72 inset-x-0 flex justify-center">
          {to && (
            <Link
              to={to}
              target={"_blank"}
              className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
            >
              <span className="relative z-20 text-white text-[0.4rem] md:text-sm font-bold inline-block py-0.5">
                Desa Bentek
              </span>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 opacity-0 group-hover/pin:opacity-100"></span>
            </Link>
          )}
        </div>

        <div className="absolute -top-56 md:-top-0 left-12 md:left-40 inset-x-0 flex justify-center">
          {to && (
            <Link
              to={to}
              target={"_blank"}
              className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
            >
              <span className="relative z-20 text-white text-[0.4rem] md:text-sm font-bold inline-block py-0.5">
                Desa Rempek
              </span>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 opacity-0 group-hover/pin:opacity-100"></span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};
