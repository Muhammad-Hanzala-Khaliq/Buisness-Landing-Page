"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Building2,
  MapPin,
  Globe,
  Instagram,
  Target,
  Layout,
  Zap,
  ArrowRight,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Star
} from "lucide-react";
import CTAButton from "../../components/CTAButton";

const ease = [0.16, 1, 0.3, 1];

const SERVICES = [
  {
    id: "ads",
    title: "Performance Marketing",
    subtitle: "Meta Ads & Lead Gen",
    description: "Get more qualified patient leads consistently",
    icon: Target,
    pricing: ["$300 – $600/month", "$600 – $900/month", "$900 – $1,200/month", "$1,200 – $1,800/month"]
  },
  {
    id: "website",
    title: "Website / Landing Page",
    subtitle: "High-Converting Pages",
    description: "Mobile-optimized clinic pages that convert",
    icon: Layout,
    pricing: ["$400 – $700", "$700 – $1,000", "$1,000 – $1,500", "$1,500 – $2,200"]
  },
  {
    id: "funnel",
    title: "Funnel Strategy",
    subtitle: "Booking System",
    description: "Turn leads into actual booked consultations",
    icon: Zap,
    pricing: ["$500 – $900", "$900 – $1,200", "$1,200 – $1,800", "$1,800 – $2,800"]
  }
];

const COMBOS = {
  "ads,website": {
    title: "Combo: Meta Ads + Landing Page",
    discount: "Save 15%",
    pricing: [
      "A) $600 – $1,100/month",
      "B) $1,100 – $1,600/month",
      "C) $1,600 – $2,300/month",
      "D) $2,300 – $3,400/month",
    ],
  },
  "ads,funnel": {
    title: "Combo: Meta Ads + Funnel",
    discount: "Save 15%",
    pricing: [
      "A) $700 – $1,300/month",
      "B) $1,300 – $1,800/month",
      "C) $1,800 – $2,550/month",
      "D) $2,550 – $3,900/month",
    ],
  },
  "funnel,website": {
    title: "Combo: Landing Page + Funnel",
    discount: "Save 15%",
    pricing: [
      "A) $800 – $1,400",
      "B) $1,400 – $1,900",
      "C) $1,900 – $2,800",
      "D) $2,800 – $4,250",
    ],
  },
  "ads,funnel,website": {
    title: "Full Growth System ⭐",
    discount: "Save 25%",
    description: "Designed for clinics that want consistent bookings at scale",
    pricing: [
      "A) $900 – $1,700",
      "B) $1,700 – $2,300",
      "C) $2,300 – $3,400",
      "D) $3,400 – $5,100",
    ],
  },
};

export default function BookStrategyCall() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    clinicName: "",
    location: "",
    website: "",
    instagram: "",
    selectedServices: [],
    runningAds: "",
    biggestChallenge: "",
    missingPiece: "",
    budget: "",
    timeline: "",
    commitment: "",
    name: "",
    whatsapp: "",
    email: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleService = (id) => {
    setFormData(prev => {
      const services = prev.selectedServices.includes(id)
        ? prev.selectedServices.filter(s => s !== id)
        : [...prev.selectedServices, id];
      // Reset budget (selected pricing) when services change
      return { ...prev, selectedServices: services, budget: "" };
    });
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const getActiveCombo = () => {
    const sorted = [...formData.selectedServices].sort().join(",");
    return COMBOS[sorted] || null;
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    try {
      setIsSubmitting(true);
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, createdAt: new Date().toISOString() }),
      });

      if (!res.ok) throw new Error("Submission failed");

      const params = new URLSearchParams({
        services: formData.selectedServices.join(","),
        name: formData.name
      });
      router.push(`/thank-you?${params.toString()}`);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasService = (id) => formData.selectedServices.includes(id);

  const getStep2Config = () => {
    const services = formData.selectedServices;
    
    if (services.length === 1) {
      if (hasService("ads")) {
        return {
          title: "Tell Us About Your Ads Performance",
          runningQuestion: "Are you currently running ads?",
          challenges: ["Not enough leads", "Low-quality leads", "High cost per lead", "Ads not converting"],
          missing: ["No ad strategy", "Poor creatives", "Wrong targeting", "No tracking setup"]
        };
      }
      if (hasService("website")) {
        return {
          title: "Tell Us About Your Website",
          runningQuestion: "Do you currently have a website?",
          challenges: ["Low conversion rate", "Poor design", "Slow loading speed", "Not mobile optimized"],
          missing: ["No landing page", "No CTA structure", "No trust elements", "Weak copywriting"]
        };
      }
      if (hasService("funnel")) {
        return {
          title: "Tell Us About Your Booking System",
          runningQuestion: "Do you have a booking system?",
          challenges: ["Leads not converting", "No follow-up system", "Manual booking process", "Low show-up rate"],
          missing: ["No funnel", "No CRM system", "No automation", "No tracking"]
        };
      }
    }
    
    // Default / Multiple services
    return {
      title: "Tell Us About Your Current Marketing",
      runningQuestion: "Are you currently running ads?",
      challenges: ["Not enough leads", "Low-quality leads", "No bookings", "Scaling problem"],
      missing: ["No landing page", "No funnel", "Ads not converting", "No clear strategy"]
    };
  };

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease }}
      className="space-y-8"
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
          Let’s See How We Can Help Grow Your Clinic
        </h2>
        <p className="text-muted-foreground">Tell us a bit about your clinic to get started.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { id: "clinicName", label: "Clinic Name", icon: Building2, placeholder: "Your Clinic Name" },
          { id: "location", label: "Location", icon: MapPin, placeholder: "City, Country" },
          { id: "website", label: "Website", icon: Globe, placeholder: "www.yourclinic.com", optional: true },
          { id: "instagram", label: "Instagram", icon: Instagram, placeholder: "@yourclinic" }
        ].map(field => (
          <div key={field.id} className="space-y-2">
            <label className="text-sm font-medium text-foreground pl-1">
              {field.label} {field.optional && <span className="text-muted-foreground/50 text-[10px] ml-1 uppercase">(Optional)</span>}
            </label>
            <div className="relative">
              <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
              <input
                type="text"
                value={formData[field.id]}
                onChange={(e) => updateFormData(field.id, e.target.value)}
                placeholder={field.placeholder}
                className="w-full bg-surface-elevated border border-border rounded-2xl py-3.5 pl-11 pr-4 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 pt-4">
        <label className="text-sm font-medium text-foreground pl-1">Select Services You're Interested In</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERVICES.map(service => {
            const isSelected = formData.selectedServices.includes(service.id);
            return (
              <button
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`flex flex-col text-left p-5 rounded-3xl border-2 transition-all duration-300 relative overflow-hidden group ${
                  isSelected 
                    ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(16,185,129,0.15)]" 
                    : "bg-surface-elevated border-border hover:border-primary/30"
                }`}
              >
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                  isSelected ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                }`}>
                  <service.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-foreground mb-1">{service.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                {isSelected && (
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full p-1"
                  >
                    <Check className="w-3 h-3" />
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {formData.selectedServices.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 pt-6 border-t border-border"
        >
          {hasService("ads") && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-bold text-sm bg-primary/5 px-4 py-3 rounded-xl border border-primary/20"
            >
              🔷 1. PERFORMANCE MARKETING (Meta Ads + Lead Gen) Monthly management fee + ad spend not included
            </motion.p>
          )}

          {getActiveCombo() ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-foreground">{getActiveCombo().title}</h3>
                    <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full border border-primary/20">
                      {getActiveCombo().discount}
                    </span>
                    {getActiveCombo().badge && (
                      <span className="bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-orange-500/20">
                        {getActiveCombo().badge}
                      </span>
                    )}
                  </div>
                  {getActiveCombo().description && (
                    <p className="text-sm text-muted-foreground">{getActiveCombo().description}</p>
                  )}
                  {formData.selectedServices.length === 2 && (
                    <p className="text-xs text-primary font-medium italic mt-1 font-serif">
                      "Most clinics choose the full system for better results 🚀"
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {getActiveCombo().pricing.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => updateFormData("budget", p)}
                    className={`p-3 rounded-2xl border transition-all text-center ${
                      formData.budget === p 
                        ? "bg-primary/20 border-primary shadow-[0_0_15px_rgba(16,185,129,0.1)]" 
                        : "bg-surface-elevated border-border hover:border-primary/30"
                    }`}
                  >
                    <p className={`text-sm font-bold ${formData.budget === p ? "text-primary" : "text-foreground"}`}>
                      {p}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {formData.selectedServices.map(sid => {
                const s = SERVICES.find(x => x.id === sid);
                return (
                  <div key={sid} className="space-y-3">
                    <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                      <s.icon className="w-4 h-4" /> {s.title} Pricing
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {s.pricing.map((p, i) => (
                        <button
                          key={i}
                          onClick={() => updateFormData("budget", p)}
                          className={`p-3 rounded-2xl border transition-all text-center ${
                            formData.budget === p 
                              ? "bg-primary/20 border-primary shadow-[0_0_15px_rgba(16,185,129,0.1)]" 
                              : "bg-surface-elevated border-border hover:border-primary/30"
                          }`}
                        >
                          <p className={`text-xs font-medium ${formData.budget === p ? "text-primary" : "text-foreground"}`}>
                            {p}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>
      )}

      <div className="flex pt-6">
        <CTAButton 
          onClick={nextStep} 
          disabled={!formData.clinicName || formData.selectedServices.length === 0 || !formData.budget}
          className="w-full md:w-auto ml-auto"
        >
          Next Step <ChevronRight className="w-5 h-5 inline-block ml-1" />
        </CTAButton>
      </div>
    </motion.div>
  );

  const renderStep2 = () => {
    const step2 = getStep2Config();
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease }}
        className="space-y-8"
      >
        <div className="text-center space-y-3">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
            {step2.title}
          </h2>
          <p className="text-muted-foreground">This helps us understand your needs before the call.</p>
        </div>

        <div className="space-y-8">
          {/* Running Ads */}
          <div className="space-y-4">
            <label className="text-base font-bold text-foreground">{step2.runningQuestion}</label>
            <div className="grid grid-cols-2 gap-4">
              {["Yes", "No"].map(opt => (
                <button
                  key={opt}
                  onClick={() => updateFormData("runningAds", opt)}
                  className={`p-4 rounded-2xl border-2 font-bold transition-all ${
                    formData.runningAds === opt 
                      ? "bg-primary/10 border-primary text-primary" 
                      : "bg-surface-elevated border-border text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Biggest Challenge */}
          <div className="space-y-4">
            <label className="text-base font-bold text-foreground">What’s your biggest marketing challenge?</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {step2.challenges.map(opt => (
                <button
                  key={opt}
                  onClick={() => updateFormData("biggestChallenge", opt)}
                  className={`p-4 text-left rounded-2xl border-2 font-medium transition-all flex items-center justify-between ${
                    formData.biggestChallenge === opt 
                      ? "bg-primary/10 border-primary text-foreground" 
                      : "bg-surface-elevated border-border text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {opt}
                  {formData.biggestChallenge === opt && <Check className="w-4 h-4 text-primary" />}
                </button>
              ))}
            </div>
          </div>

          {/* What's Missing */}
          <div className="space-y-4">
            <label className="text-base font-bold text-foreground">What’s currently missing in your system?</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {step2.missing.map(opt => (
                <button
                  key={opt}
                  onClick={() => updateFormData("missingPiece", opt)}
                  className={`p-4 text-left rounded-2xl border-2 font-medium transition-all flex items-center justify-between ${
                    formData.missingPiece === opt 
                      ? "bg-primary/10 border-primary text-foreground" 
                      : "bg-surface-elevated border-border text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {opt}
                  {formData.missingPiece === opt && <Check className="w-4 h-4 text-primary" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button onClick={prevStep} className="text-muted-foreground hover:text-foreground transition-colors py-4 px-6 font-medium">
            <ChevronLeft className="w-5 h-5 inline-block mr-1" /> Back
          </button>
          <CTAButton 
            onClick={nextStep} 
            disabled={!formData.runningAds || !formData.biggestChallenge || !formData.missingPiece}
            className="w-full md:w-auto"
          >
            Next Step <ChevronRight className="w-5 h-5 inline-block ml-1" />
          </CTAButton>
        </div>
      </motion.div>
    );
  };

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease }}
      className="space-y-8"
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
          Final Step: Check Your Eligibility
        </h2>
        <p className="text-muted-foreground">Almost done! We just need a few more details to qualify you.</p>
      </div>

      <div className="space-y-8">
        {/* Timeline */}
        <div className="space-y-4">
          <label className="text-base font-bold text-foreground">When do you want to start?</label>
          <div className="flex flex-wrap gap-3">
            {["Immediately", "Within 30 days", "Just exploring"].map(opt => (
              <button
                key={opt}
                onClick={() => updateFormData("timeline", opt)}
                className={`px-6 py-3 rounded-full border-2 font-bold transition-all ${
                  formData.timeline === opt 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-surface-elevated border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Commitment */}
        <div className="space-y-4">
          <label className="text-base font-bold text-foreground">Are you committed to growth?</label>
          <div className="flex flex-wrap gap-3">
            {["Yes", "Maybe", "No"].map(opt => (
              <button
                key={opt}
                onClick={() => updateFormData("commitment", opt)}
                className={`px-6 py-3 rounded-full border-2 font-bold transition-all ${
                  formData.commitment === opt 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-surface-elevated border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 pt-4 border-t border-border">
          <label className="text-base font-bold text-foreground">Where should we send your growth plan?</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
              className="w-full bg-surface-elevated border border-border rounded-2xl py-3.5 px-5 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            <input
              type="text"
              placeholder="WhatsApp Number"
              value={formData.whatsapp}
              onChange={(e) => updateFormData("whatsapp", e.target.value)}
              className="w-full bg-surface-elevated border border-border rounded-2xl py-3.5 px-5 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              className="w-full bg-surface-elevated border border-border rounded-2xl py-3.5 px-5 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button onClick={prevStep} className="text-muted-foreground hover:text-foreground transition-colors py-4 px-6 font-medium">
          <ChevronLeft className="w-5 h-5 inline-block mr-1" /> Back
        </button>
        <CTAButton 
          onClick={handleSubmit} 
          disabled={!formData.name || !formData.email || isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 animate-spin" /> Analyzing...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Get My Growth Plan <ArrowRight className="w-5 h-5" />
            </span>
          )}
        </CTAButton>
      </div>
    </motion.div>
  );

  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] glow-blob rounded-full -translate-y-1/2 translate-x-1/3 opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] glow-blob rounded-full translate-y-1/2 -translate-x-1/3 opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-32 relative z-10">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {["Clinic Info", "Current Marketing", "Qualification"].map((label, i) => (
              <div 
                key={label} 
                className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${
                  step > i + 1 ? "text-primary" : step === i + 1 ? "text-primary" : "text-muted-foreground/40"
                }`}
              >
                Step {i + 1}: {label}
              </div>
            ))}
          </div>
          <div className="h-1.5 w-full bg-surface-elevated rounded-full overflow-hidden border border-border">
            <motion.div 
              initial={{ width: "33.33%" }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.8, ease }}
              className="h-full bg-primary glow-primary"
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="surface-card rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative">
          {/* Subtle Top Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />
          
          <AnimatePresence mode="wait">
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
          </AnimatePresence>
        </div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12"
        >
          <div className="flex items-center gap-2 text-muted-foreground/60 text-sm">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Secure & Private</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground/60 text-sm">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>Results-Driven</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground/60 text-sm">
            <Star className="w-4 h-4 text-primary" />
            <span>Aesthetic Niche Experts</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
