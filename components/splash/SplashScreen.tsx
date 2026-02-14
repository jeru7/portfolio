"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const bootSequence = [
  "LOADING PROJECTS...",
  "INITIALIZING SKILLS...",
  "COMPILING EXPERIENCE...",
  "RENDERING PORTFOLIO...",
];

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 1000);
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,#333_1px,transparent_2px)] bg-size-[100%_2px]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_1px,#333_1px,transparent_2px)] bg-size-[2px_100%]" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent"
            />
          </div>

          <div className="relative z-10 flex flex-col items-start gap-2 min-w-80 max-w-md px-8">
            <div className="text-xs font-mono text-white/40 mb-4">
              <span className="text-white/60">JERU7 v1.0.0</span>
              <span className="ml-2">//{new Date().getFullYear()}</span>
            </div>

            <div className="flex flex-col gap-1 font-mono text-sm">
              {bootSequence.map((line, index) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: index <= currentLine ? 1 : 0, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-white/50">
                    [{index.toString().padStart(2, "0")}]
                  </span>
                  <span
                    className={
                      index < currentLine
                        ? "text-white"
                        : index === currentLine
                        ? "text-white/60"
                        : "text-white/20"
                    }
                  >
                    {line}
                  </span>
                  {index === currentLine && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="text-white"
                    >
                      _
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
              className="h-px bg-white/30 mt-2"
            />

            {currentLine >= bootSequence.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-4 flex items-center gap-2"
              >
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-white"
                />
                <span className="text-white font-mono text-sm tracking-widest">
                  READY TO EXPLORE
                </span>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 right-8 text-xs text-white/30 font-mono"
          >
            <div className="flex items-center gap-2">
              <span>JERU7</span>
              <span className="text-white/20">//</span>
              <span>PORTFOLIO</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.5, delay: 3 }}
            className="absolute inset-0 bg-black pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
