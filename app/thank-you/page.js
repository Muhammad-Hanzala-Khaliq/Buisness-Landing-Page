"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, MessageCircle, ArrowLeft, Trophy, Users, Star } from "lucide-react";
import Link from "next/link";
import CTAButton from "../../components/CTAButton";
import { Suspense } from "react";

const ease = [0.16, 1, 0.3, 1];

const ThankYouContent = () => {
  const searchParams = useSearchParams();
  const services = searchParams.get("services")?.split(",") || [];
  const name = searchParams.get("name") || "Clinic Owner";

  const isFullCombo = services.length === 3;
  const hasAds = services.includes("ads");
  const hasWebsite = services.includes("website");
  const hasFunnel = services.includes("funnel");

  const getDynamicMessage = () => {
    if (isFullCombo) return "We’ll design a complete growth system to scale your clinic consistently.";

    const parts = [];
    if (hasAds) parts.push("Advertising (Meta Ads)");
    if (hasWebsite) parts.push("High-Converting Website");
    if (hasFunnel) parts.push("Booking Funnel");

    if (parts.length === 0) return "We’ve received your details and we’re excited to help you grow.";

    if (parts.length === 1) {
      if (hasAds) return "We’ll show you how to generate consistent, high-quality leads using Advertising (Meta Ads).";
      if (hasWebsite) return "We’ll show how to build a high-converting clinic website.";
      if (hasFunnel) return "We’ll map out a booking funnel to increase your consultations.";
    }

    if (parts.length === 2) {
      return `We'll show you how to combine ${parts[0]} and ${parts[1]} to scale your clinic's patient bookings.`;
    }

    return "We’ve received your details and we’re excited to help you grow.";
  };

  return (
    <div className="max-w-3xl w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease }}
        className="text-center space-y-8"
      >
        <div className="relative inline-block">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(16,185,129,0.4)]"
          >
            <CheckCircle2 className="w-12 h-12 text-primary-foreground" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full -m-2"
          />
        </div>

        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight"
          >
            You're Pre-Qualified, {name}!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-primary font-bold font-serif italic"
          >
            "You're Pre-Qualified for a Free Growth Strategy Call"
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
          >
            {getDynamicMessage()}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-surface-elevated/50 backdrop-blur-md border border-primary/20 p-8 rounded-[2.5rem] space-y-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Trophy className="w-24 h-24" />
          </div>
          
          <p className="text-foreground font-medium text-lg">
            What's next? Choose your preferred way to connect:
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/923194390885" target="_blank" className="flex-1">
              <CTAButton variant="secondary" className="w-full flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" /> Chat on WhatsApp
              </CTAButton>
            </Link>
          </div>

          <div className="pt-6 border-t border-border flex flex-col items-center gap-4">
            <p className="text-sm text-orange-400 font-bold flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20">
              <Star className="w-4 h-4 fill-current" />
              "We only work with a limited number of clinics each month to ensure results."
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1 }}
           className="flex justify-center gap-12"
        >
           <div className="flex flex-col items-center gap-1">
              <Users className="w-5 h-5 text-muted-foreground/40" />
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground/40 font-bold">Priority Support</span>
           </div>
           <div className="flex flex-col items-center gap-1">
              <Trophy className="w-5 h-5 text-muted-foreground/40" />
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground/40 font-bold">Proven Strategy</span>
           </div>
        </motion.div>

        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Website
        </Link>
      </motion.div>
    </div>
  );
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden py-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-blob rounded-full opacity-20 pointer-events-none" />
      
      <Suspense fallback={<div className="text-primary animate-pulse">Loading strategy plan...</div>}>
        <ThankYouContent />
      </Suspense>
    </main>
  );
}
