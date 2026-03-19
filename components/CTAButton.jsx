"use client";

import { motion } from "framer-motion";

const variants = {
  primary: "bg-primary text-primary-foreground glow-primary hover:brightness-110",
  secondary: "bg-muted text-foreground border border-subtle hover:bg-muted/80",
};

const CTAButton = ({ children, variant = "primary", className = "", ...props }) => (
  <motion.button
    whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(16,185,129,0.3)" }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className={`px-8 py-4 rounded-full font-semibold text-base transition-colors duration-200 cursor-pointer ${variants[variant]} ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

export default CTAButton;
