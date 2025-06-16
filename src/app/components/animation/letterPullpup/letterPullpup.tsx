"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
}

export default function LetterPullup({
  className,
  words,
  delay = 0.05,
}: LetterPullupProps) {
  const letters = words.split("");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );
  
    if (ref.current) {
      observer.observe(ref.current);
    }
  
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * delay,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const containerClassName = words.includes("Contato") || words.includes("Conversar") 
    ? "flex justify-center" 
    : "flex justify-start";

  return (
    <div
      ref={ref}
      className={`${containerClassName} w-full max-w-full flex-wrap overflow-hidden mb-6`}
    >
      {isVisible &&
        letters.map((letter, i) => (
          <motion.span
            key={i}
            variants={pullupVariant}
            initial="initial"
            animate="animate"
            custom={i}
            className={`font-display font-bold tracking-tight bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 bg-clip-text text-transparent drop-shadow-sm ${className}`}
            style={{ 
              fontSize: 'clamp(2rem, 4vw + 1rem, 3.5rem)', 
              lineHeight: 'clamp(2.5rem, 4.5vw + 1.5rem, 4rem)' 
            }}
          >
            {letter === " " ? <span>&nbsp;</span> : letter}
          </motion.span>
        ))}
    </div>
  );
}