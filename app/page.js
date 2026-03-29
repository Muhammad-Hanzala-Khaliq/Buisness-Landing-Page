"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Calendar,
  BarChart3,
  Zap,
  Target,
  MousePointer2,
  Phone,
  Laptop,
  Settings,
  Shield,
  Users,
  Rocket,
  TrendingUp,
  XCircle,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Mail,
} from "lucide-react";
import CTAButton from "../components/CTAButton";
import Section, { fadeUpItem } from "../components/Section";
import FeatureCard from "../components/FeatureCard";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1];

const Hero = () => {
  return (
  <section className="relative pt-36 lg:pt-44 pb-28 px-6 overflow-hidden">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] glow-blob rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />

    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
      

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.08] tracking-tight mb-8"
        >
          Aesthetic Clinics: Stop Losing Patients to Competitors Who Run Better Ads
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
        >
          We do both High converting Meta Ads + websites designed to turn visitors into booked consultations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="flex flex-col sm:flex-row gap-5 items-start sm:items-center"
        >
          <Link href="/book-strategy-call">
            <CTAButton>Book Your Strategy Call</CTAButton>
          </Link>
          {/* <p className="text-sm text-muted-foreground/50 ml-1">Limited slots available for Q3 clinics</p> */}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease }}
        className="relative"
      >
        <div className="absolute -inset-8 glow-blob rounded-full opacity-60" />
        <div className="relative space-y-4 lg:space-y-5">
          {/* Pill 1 — INNOVATION + Ali image on right */}
          <Link href="/profile/raza" className="block w-full">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between py-4 px-6 lg:py-5 lg:px-8 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-2xl cursor-pointer"
            >
              <span className="text-2xl lg:text-4xl font-extrabold uppercase tracking-wide text-foreground">
                Innovation
              </span>
              <motion.img
                src="/Ali.png"
                alt="Ali"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-white/20 shadow-lg"
              />
            </motion.div>
          </Link>

          {/* Pill 2 — Hanzala image on left + CREATIVITY */}
          <Link href="/profile/hanzala" className="block w-full">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between py-4 px-6 lg:py-5 lg:px-8 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-2xl cursor-pointer"
            >
              <motion.img
                src="/Hanzala.png"
                alt="Hanzala"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-12 h-12 mt01 lg:w-16 lg:h-16 rounded-full object-contain border-2 border-white/20 shadow-lg"
              />
              <span className="text-2xl lg:text-4xl font-extrabold uppercase tracking-wide text-foreground">
                Creativity
              </span>
            </motion.div>
          </Link>

          {/* Pill 3 — EFFECT + arrow button */}
          <Link href="/testimonials" className="block w-full">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between py-4 px-6 lg:py-5 lg:px-8 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-2xl cursor-pointer"
            >
              <span className="text-2xl lg:text-4xl font-extrabold uppercase tracking-wide text-foreground">
                Testimonials
              </span>
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center shadow-lg"
              >
                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground" />
              </motion.div>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);}

const Problem = () => (
  <Section className="bg-surface-subtle">
    <motion.div variants={fadeUpItem} className="text-center mb-20">
      <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
        Your Ads Are Running.
        <br />
        Your Chairs Are Still Empty.
      </h2>
      <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
        Most clinics don't have an ads problem. They have a targeting + strategy problem.And every day without the right system? Your competitor down the road is booking those patients instead.
      </p>
    </motion.div>
    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
      <FeatureCard
        icon={MousePointer2}
        title="Price Shoppers"
        description="Leads who ghost the moment they see your filler or Botox prices."
      />
      <FeatureCard
        icon={Target}
        title="Low-Quality Leads"
        description="People who click 'Learn More' but never actually intend to show up."
      />
      <FeatureCard
        icon={BarChart3}
        title="No Booking System"
        description="No automated way to turn a raw enquiry into a confirmed appointment."
      />
    </div>
  </Section>
);

const Solution = () => (
  <Section>
   <div className="mb-20">
     <motion.h2 variants={fadeUpItem} className="text-3xl lg:text-5xl font-bold text-foreground text-center">
      We Fix That. End to End.
    </motion.h2>
    <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mt-2">
       One focused team. Two specialisms. Built for Aesthetic Clinics  only.
      </p>
   </div>
    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
      {[
        {
          name: "Raza Sandhu",
          role: "Performance Marketing | Meta Ads | Lead Generation Strategist For Aesthetic Clinics.",
          items: [" Meta Ads setup, Management & Optimisation.", "Laser Targeted Audiences (Age, Location, Income, Interest)", "Ad Creatives Strategy Built for Aesthetic Clinic Buyers","Cost Per Lead Tracking & Continuous Optimisation"],
          quote: "Unlike Agencies,You work directly with us One Specialist, One Focus, One Goal, Booked Consultations",
        },
        {
          name: "Hanzala",
          role: "Web & Funnel Development | Conversion Focused Systems for  Aesthetic Clinics.",
          items: ["High converting Landing pages Designed for Aesthetic Clinics Growth.", "Booking Funnels that turn Leads into actual Appointments.", "Fast, Mobile Optimised Websites for better user experience.","Conversion Driven Structure (not just design, but results)"],
          quote: "Luxury Design that Drives Real Patient Bookings.",
        },
      ].map((person) => (
        <motion.div
          key={person.name}
          variants={fadeUpItem}
          whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.18)", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
          transition={{ duration: 0.3, ease }}
          className="p-10 lg:p-12 rounded-4xl bg-gradient-to-b from-surface-elevated to-background surface-card"
        >
          <h3 className="text-2xl font-bold text-foreground mb-2">{person.name}</h3>
          <p className="text-primary font-medium mb-8">{person.role}</p>
          <ul className="space-y-5 mb-10">
            {person.items.map((li) => (
              <li key={li} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> {li}
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-muted/50 text-sm text-muted-foreground/50 italic">{person.quote}</div>
        </motion.div>
      ))}
    </div>
  </Section>
);

const HowItWorks = () => (
  <Section className="bg-surface-subtle">
    <motion.h2 variants={fadeUpItem} className="text-3xl lg:text-5xl font-bold text-foreground mb-20 text-center">
      How It Works
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
      {[
        {
          step: "01",
          icon: Phone,
          title: "Strategy Call",
          desc: "We review your current ads, funnel, and booking flow — and show you exactly where you're leaking leads.",
        },
        {
          step: "02",
          icon: Settings,
          title: "We Build Your System",
          desc: "Custom Meta Ads campaigns, landing pages, and booking funnels — all optimised for your clinic.",
        },
        {
          step: "03",
          icon: Calendar,
          title: "Leads Come In. You Book Them.",
          desc: "Real, qualified patients land in your calendar. No chasing. No guesswork.",
        },
      ].map((s) => (
        <motion.div
          key={s.step}
          variants={fadeUpItem}
          whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.18)", boxShadow: "0 20px 40px -12px rgba(0,0,0,0.5)" }}
          className="relative p-8 lg:p-10 rounded-3xl surface-card text-center overflow-hidden"
        >
          <span className="text-7xl font-extrabold text-primary/[0.07] absolute top-2 right-4 select-none">
            {s.step}
          </span>
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
            <s.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Services = () => (
  <Section>
    <div className="mb-10">
      <motion.h2 variants={fadeUpItem} className="text-3xl lg:text-5xl font-bold text-foreground text-center">
      Our Services
    </motion.h2>
    <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mt-2">
       One focused team. Two specialisms. Built for Aesthetic Clinics  only.
     </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <FeatureCard
        icon={TrendingUp}
        title="Performance Marketing | Paid Social | Meta Ads | Lead Generation."
        description="Full campaign setup, management, and optimisation on Facebook & Instagram. Laser targeted audiences, ad creative strategy, and continuous performance tracking all engineered for one outcome: Qualified Leads Land In Your Inbox. Ready To Book."
      />
      <FeatureCard
  icon={Laptop}
  title="Landing Page / Website + Full Booking System"
  description="We don’t just build landing pages we create complete conversion systems. From high-converting, mobile-first websites to full booking funnels and backend setup, everything is designed to turn clicks into real confirmed appointments."
/>

    </div>
  </Section>
);

const WhyUs = () => (
  <Section className="bg-surface-subtle">
    <motion.div variants={fadeUpItem} className="text-center mb-16 lg:mb-20">
      <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
        WHY US OVER A MARKETING AGENCY?
      </h2>
      <p className="text-lg lg:text-xl mx-auto leading-relaxed text-primary font-medium mb-4">
        One Niche. One Focus. Better Results.
      </p>
      <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
        Most agencies work with everyone—restaurants, gyms, dentists, e-commerce, you name it. We work with aesthetic clinics only. That's our edge.
      </p>
    </motion.div>

    <div className="max-w-5xl mx-auto">
      <div className="surface-card rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-2xl border border-muted/20">
        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-2 gap-8 pb-6 border-b border-muted/20 mb-6">
          <div className="text-xl font-bold text-muted-foreground/80 pl-2">Typical Agency</div>
          <div className="text-xl font-bold text-primary pl-2">Our Agency (Us)</div>
        </div>

        {/* Table Body */}
        <div className="space-y-6 sm:space-y-0 sm:divide-y sm:divide-muted/20">
          {[
            {
              typical: "Works with every industry",
              us: "Focused only on aesthetic clinics",
            },
            {
              typical: "Separate teams, disconnected strategy",
              us: "One unified system (Ads + Website + Funnel)",
            },
            {
              typical: "Generic ad campaigns",
              us: "Strategies built for Botox, fillers & skin clinics",
            },
            {
              typical: "Focus on traffic & impressions",
              us: "Focus on booked consultations",
            },
            {
              typical: "Sends leads to weak websites",
              us: "We build high-converting websites that close leads",
            },
            {
              typical: "No control over backend conversion",
              us: "Full funnel control (click → booking)",
            },
            {
              typical: "Junior account managers",
              us: "Work directly with specialists",
            },
            {
              typical: "Long onboarding & delays",
              us: "Fast setup & direct communication",
            },
            {
              typical: "You’re one of many clients",
              us: "You get priority & focused attention",
            },
          ].map((row, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              className="grid sm:grid-cols-2 gap-4 sm:gap-8 sm:py-5 items-center"
            >
              {/* Mobile Layout */}
              <div className="sm:hidden text-sm font-bold text-muted-foreground/80 mb-[-8px]">Typical Agency</div>
              <div className="flex items-start gap-3 opacity-70 bg-muted/10 sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none">
                <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-muted-foreground font-medium">{row.typical}</span>
              </div>

              <div className="sm:hidden text-sm font-bold text-primary mt-2 mb-[-8px]">Our Agency</div>
              <div className="flex items-start gap-3 bg-primary/5 sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none border border-primary/10 sm:border-none">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base font-bold text-foreground">{row.us}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);



const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-36 lg:py-44 px-6 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] glow-blob rounded-full pointer-events-none" />
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-4xl lg:text-6xl font-bold text-foreground mb-10"
        >
          Ready to Fill Your Appointment Book?
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2, ease }}>
          <Link href="/book-strategy-call">
  <CTAButton className="mb-10">Book Your Strategy Call</CTAButton>
</Link>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="flex justify-center gap-8 text-sm text-muted-foreground/40 uppercase tracking-widest font-medium flex-wrap">
          <span>● Limited Availability</span>
          <span>● Strategy Call</span>
          <span>● Consultation</span>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

 
 const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };


  const navLinks = ["Home", "Services", "Portfolio", "Contact"];

  return (
    <footer ref={ref} className="relative bg-background overflow-hidden border-t border-muted/20">
      {/* Animated Fluid Wave Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <style>{`
          @keyframes waveFlow1 {
            0%   { transform: translateX(0%) translateY(0px); }
            50%  { transform: translateX(-25%) translateY(8px); }
            100% { transform: translateX(0%) translateY(0px); }
          }
          @keyframes waveFlow2 {
            0%   { transform: translateX(0%) translateY(0px); }
            50%  { transform: translateX(-20%) translateY(-10px); }
            100% { transform: translateX(0%) translateY(0px); }
          }
          @keyframes waveFlow3 {
            0%   { transform: translateX(0%) translateY(0px); }
            50%  { transform: translateX(-30%) translateY(6px); }
            100% { transform: translateX(0%) translateY(0px); }
          }
          @keyframes waveFlow4 {
            0%   { transform: translateX(0%) translateY(0px); }
            50%  { transform: translateX(-15%) translateY(-5px); }
            100% { transform: translateX(0%) translateY(0px); }
          }
        `}</style>

        {/* Wave Layer 1 — 70% height, slow */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-[70%]"
          viewBox="0 0 2880 400"
          preserveAspectRatio="none"
          style={{ animation: "waveFlow1 25s ease-in-out infinite", filter: "blur(8px)", opacity: 0.3 }}
        >
          <defs>
            <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(160 84% 39%)" />
              <stop offset="50%" stopColor="hsl(160 70% 28%)" />
              <stop offset="100%" stopColor="hsl(160 84% 39%)" />
            </linearGradient>
          </defs>
          <path d="M0,120 C320,240 640,60 960,180 C1280,300 1600,80 1920,200 C2240,320 2560,100 2880,180 L2880,400 L0,400 Z" fill="url(#wg1)" />
        </svg>

        {/* Wave Layer 2 — 40% height, medium speed */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-[40%]"
          viewBox="0 0 2880 200"
          preserveAspectRatio="none"
          style={{ animation: "waveFlow2 18s ease-in-out infinite", filter: "blur(4px)", opacity: 0.45 }}
        >
          <defs>
            <linearGradient id="wg2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(160 84% 39%)" />
              <stop offset="60%" stopColor="hsl(165 80% 30%)" />
              <stop offset="100%" stopColor="hsl(160 84% 39%)" />
            </linearGradient>
          </defs>
          <path d="M0,80 C360,30 720,150 1080,70 C1440,10 1800,130 2160,60 C2520,20 2700,120 2880,80 L2880,200 L0,200 Z" fill="url(#wg2)" />
        </svg>

        {/* Wave Layer 3 — 55% height, fast */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-[55%]"
          viewBox="0 0 2880 300"
          preserveAspectRatio="none"
          style={{ animation: "waveFlow3 15s ease-in-out infinite", filter: "blur(2px)", opacity: 0.55 }}
        >
          <defs>
            <linearGradient id="wg3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(160 90% 35%)" />
              <stop offset="50%" stopColor="hsl(155 84% 25%)" />
              <stop offset="100%" stopColor="hsl(160 90% 35%)" />
            </linearGradient>
          </defs>
          <path d="M0,100 C480,220 960,40 1440,160 C1920,260 2400,60 2880,180 L2880,300 L0,300 Z" fill="url(#wg3)" />
        </svg>

        {/* Wave Layer 4 — 30% height, slow */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-[30%]"
          viewBox="0 0 2880 160"
          preserveAspectRatio="none"
          style={{ animation: "waveFlow4 22s ease-in-out infinite", filter: "blur(16px)", opacity: 0.25 }}
        >
          <defs>
            <linearGradient id="wg4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(160 84% 50%)" />
              <stop offset="50%" stopColor="hsl(170 80% 40%)" />
              <stop offset="100%" stopColor="hsl(160 84% 50%)" />
            </linearGradient>
          </defs>
          <path d="M0,60 C400,120 800,20 1200,80 C1600,140 2000,30 2400,90 C2640,120 2760,50 2880,70 L2880,160 L0,160 Z" fill="url(#wg4)" />
        </svg>

        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/85 to-background" />
      </div>

      {/* Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-16 text-center"
      >
        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-6"
        >
         Asthetic Growth Partner
        </motion.p>

        {/* Contact Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-8 opacity-70">
            Get in Touch
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12">
            {[
              { email: "mr.razasandhu@gmail.com", label: "Performance Marketing Specialist" },
              { email: "hanzallahkhaliq@gmail.com", label: "Full-Stack Developer" },
            ].map((contact, i) => (
              <motion.a
                key={contact.email}
                href={`mailto:${contact.email}`}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative px-8 py-6 rounded-3xl bg-surface-elevated/40 backdrop-blur-xl border border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col items-center gap-3 overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                
                <div className="relative z-10 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold mb-1 group-hover:text-primary/70 transition-colors">
                    {contact.label}
                  </p>
                  <span className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                    {contact.email}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

    

     

        {/* Divider + Copyright */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-muted/10"
        >
          <p className="text-xs text-muted-foreground/40 tracking-wide">
            © 2026 Asthetic Growth Partner. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default function Page() {
  return (
    <main key="home-page">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Services />
      <WhyUs />
      <FinalCTA />
      <Footer />
    </main>
  );
}
