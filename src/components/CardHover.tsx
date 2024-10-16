import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "../libs/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon: any;  // Add icon property
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3", 
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.link}
          className="relative text-xl sm:text-2xl group block p-2 h-full w-full" 
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-green-600/50 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription className="text-sm sm:text-lg"> 
              {item.description}
            </CardDescription>
            <item.icon
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-6xl sm:text-8xl text-green-400 opacity-20 group-hover:opacity-50 transition-opacity duration-300"
            />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#141414] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 md:text-lg font-bold tracking-wide sm:mt-3", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 text-xs tracking-wide leading-relaxed md:text-sm  group-hover:text-white",
        className
      )}
    >
      {children}
    </p>
  );
};
