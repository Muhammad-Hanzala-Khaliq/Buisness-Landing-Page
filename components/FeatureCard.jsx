"use client";

import { motion } from "framer-motion";
import { fadeUpItem } from "./Section";

const FeatureCard = ({ icon: Icon, title, description, className = "" }) => (
  <motion.div
    variants={fadeUpItem}
    whileHover={{
      y: -8,
      borderColor: "rgba(255,255,255,0.18)",
      boxShadow: "0 20px 40px -12px rgba(0,0,0,0.5)",
    }}
    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    className={`p-8 lg:p-10 rounded-3xl surface-card transition-colors ${className}`}
  >
    {Icon && (
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-primary" />
      </div>
    )}
    <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

export default FeatureCard;
