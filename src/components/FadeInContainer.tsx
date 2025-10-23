"use client";

import { motion } from "framer-motion";
import React from "react";

interface FadeInContainerProps {
  children: React.ReactNode;
  className?: string;
}

const FadeInContainer: React.FC<FadeInContainerProps> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInContainer;
