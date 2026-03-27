"use client";

import { motion } from "framer-motion";
import { 
  Star, 
  Quote, 
  ArrowRight, 
  Globe, 
  TrendingUp, 
  CheckCircle2, 
  ChevronLeft,
  MousePointer2,
  Calendar,
  Sparkles,
  Zap
} from "lucide-react";
import Link from "next/link";
import CTAButton from "../../components/CTAButton";

const ease = [0.16, 1, 0.3, 1];

const TestimonialCard = ({ quote, author, role, results, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease }}
    className="p-8 rounded-3xl bg-surface-elevated border border-border/50 hover:border-primary/30 transition-all flex flex-col justify-between"
  >
    <div className="space-y-4">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} className="w-4 h-4 text-primary fill-primary" />
        ))}
      </div>
      <p className="text-muted-foreground italic leading-relaxed">"{quote}"</p>
    </div>
    <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap gap-4 items-center justify-between">
      <div>
        <h4 className="font-bold text-white text-sm">{author}</h4>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{role}</p>
      </div>
      <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold">
        {results}
      </div>
    </div>
  </motion.div>
);

const ScreenshotMockup = ({ title, desc, icon: Icon, color = "primary" }) => (
  <div className={`relative rounded-2xl border border-border/50 bg-surface-subtle overflow-hidden shadow-2xl aspect-video group`}>
    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-transparent z-10" />
    <div className={`absolute inset-0 bg-${color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    <div className="absolute top-0 left-0 w-full h-8 bg-surface-elevated border-b border-border/30 flex items-center px-4 gap-1.5 z-20">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
    </div>
    <div className="absolute inset-0 flex items-center justify-center p-12">
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="text-center space-y-4 relative z-20"
      >
        <div className={`w-16 h-16 rounded-2xl bg-${color}/20 flex items-center justify-center mx-auto border border-${color}/30 backdrop-blur-xl`}>
          <Icon className={`w-8 h-8 text-${color}`} />
        </div>
        <h3 className="text-xl font-bold text-white/80">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">{desc}</p>
      </motion.div>
    </div>
  </div>
);

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 overflow-x-hidden">
      {/* Hero Decor */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 relative z-10">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-16 group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Header */}
        <header className="max-w-3xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3 h-3" />
            Social Proof & Results
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8"
          >
            Proven Results For <span className="text-primary">Premier Clinics.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            We don’t just run ads or build websites. We create predictable growth systems that turn clinic visitors into confirmed patients.
          </motion.p>
        </header>

        {/* Section 1: Hanzala (Web Dev) */}
        <section className="mb-32 space-y-16">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 pb-8 border-b border-border/50">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Engineered Digital Foundations</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">High-performance landing pages and booking funnels designed for maximum conversion.</p>
            </div>
            <Link href="/profile/hanzala" className="group shrink-0">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-elevated border border-border group-hover:border-primary transition-all">
                <img src="/Hanzala.png" className="w-12 h-12 rounded-full object-contain bg-background" />
                <div className="text-left">
                  <div className="text-xs uppercase font-bold text-muted-foreground tracking-widest">Web Specialist</div>
                  <div className="font-bold text-white group-hover:text-primary transition-colors">Hanzala Khaliq</div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors ml-4" />
              </div>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-6 rounded-2xl bg-surface-elevated border border-border">
                      <Zap className="w-6 h-6 text-primary mb-3" />
                      <div className="text-2xl font-bold text-white">+40%</div>
                      <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Conversion Lift</div>
                   </div>
                   <div className="p-6 rounded-2xl bg-surface-elevated border border-border">
                      <MousePointer2 className="w-6 h-6 text-primary mb-3" />
                      <div className="text-2xl font-bold text-white">1.2s</div>
                      <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Load Speed</div>
                   </div>
                </div>
                <TestimonialCard 
                  quote="The landing page Hanzala built changed everything. We went from chasing enquiries to having booked consultations in our calendar every morning."
                  author="Dr. Sarah Mitchell"
                  role="Owner, Bloom Clinic"
                  results="3.2x Booking Rate"
                  delay={0.2}
                />
             </div>
             <ScreenshotMockup 
                title="Aura Aesthetics" 
                desc="High-converting funnel with integrated booking and seamless patient onboarding." 
                icon={Globe}
             />
          </div>
        </section>

        {/* Section 2: Raza (Marketing) */}
        <section className="mb-32 space-y-16">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 pb-8 border-b border-border/50">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">High-Impact Growth Strategy</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">Precision-targeted Meta Ads and performance marketing that delivers qualified patients, not just clicks.</p>
            </div>
            <Link href="/profile/raza" className="group shrink-0">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-elevated border border-border group-hover:border-indigo-400 transition-all">
                <img src="/Ali.png" className="w-12 h-12 rounded-full object-cover bg-background" />
                <div className="text-left">
                  <div className="text-xs uppercase font-bold text-muted-foreground tracking-widest">Ads Specialist</div>
                  <div className="font-bold text-white group-hover:text-indigo-400 transition-colors">Raza Sandhu</div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-indigo-400 transition-colors ml-4" />
              </div>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <ScreenshotMockup 
                title="Growth Performance" 
                desc="Real-time ad results showing lead volume and high ROAS across multiple treatment categories." 
                icon={TrendingUp}
                color="indigo-500"
             />
             <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-6 rounded-2xl bg-surface-elevated border border-border">
                      <Calendar className="w-6 h-6 text-indigo-400 mb-3" />
                      <div className="text-2xl font-bold text-white">45+</div>
                      <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">New Leads/Week</div>
                   </div>
                   <div className="p-6 rounded-2xl bg-surface-elevated border border-border">
                      <TrendingUp className="w-6 h-6 text-indigo-400 mb-3" />
                      <div className="text-2xl font-bold text-white">$12.4k</div>
                      <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Added Revenue/Mo</div>
                   </div>
                </div>
                <TestimonialCard 
                  quote="Raza's ad strategy was a game changer for us. We're now consistently getting patients who are ready to pay for premium treatments, not just price shoppers."
                  author="Marcus Thorne"
                  role="Director, Elite Skin & Laser"
                  results="6.4x Ad Spend Return"
                  delay={0.4}
                />
             </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pt-24 text-center border-t border-border/30">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-8"
          >
            Ready for Your <span className="text-primary tracking-tight">Growth System?</span>
          </motion.h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/book-strategy-call">
              <CTAButton className="px-10 py-5">
                Book My Strategy Call <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </CTAButton>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
