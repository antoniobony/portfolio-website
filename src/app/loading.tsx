"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="w-6 h-6 rounded-full bg-blue-500 mx-2"
        animate={{
          rotate: 360,
          scale: [1, 0.5, 0, 0.5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />
      <motion.div
        className="w-6 h-6 rounded-full bg-red-500 mx-2"
        animate={{
          rotate: -360,
          scale: [1, 0.5, 0, 0.5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
          delay: 0.3, // petit décalage pour un effet fluide
        }}
      />
    </div>
  );
}
