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
} from "lucide-react";
import CTAButton from "@/components/CTAButton";
import Section, { fadeUpItem } from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";

const ease = [0.16, 1, 0.3, 1];

/* ─── HERO ─── */
const Hero = () => (
  <section className="relative pt-36 lg:pt-44 pb-28 px-6 overflow-hidden">
    {/* Background gradient orb */}
    <div className="absolute top-0 right-0 w-[800px] h-[800px] glow-blob rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />

    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Accepting 2 new clinics for Q3
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-foreground leading-[1.08] tracking-tight mb-8"
        >
          Aesthetic Clinics: Stop Losing Patients to Competitors
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
        >
          We run high-converting Meta Ads that bring aesthetic clinics real
          booked consultations — not just clicks and empty enquiries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="flex flex-col sm:flex-row gap-5 items-start sm:items-center"
        >
          <CTAButton>Get Your Free Clinic Audit</CTAButton>
          <p className="text-sm text-muted-foreground/50 ml-1">
            No agency fluff.
            <br className="hidden sm:block" /> Just booked consultations.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease }}
        className="relative"
      >
        <div className="absolute -inset-8 glow-blob rounded-full opacity-60" />
        <div className="relative surface-card rounded-[2.5rem] p-8 lg:p-10 shadow-2xl">
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-muted-foreground/50 text-xs uppercase tracking-widest font-semibold mb-1">
                  New Bookings
                </p>
                <p className="text-5xl font-bold text-foreground">+42</p>
              </div>
              <div className="h-14 w-28 bg-primary/10 rounded-xl flex items-end p-2 gap-1">
                {[40, 70, 45, 90, 65].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.1, ease }}
                    className="bg-primary w-full rounded-t-sm"
                  />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.12, ease }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-muted/20 border border-muted/50"
                >
                  <div className="w-10 h-10 rounded-full bg-muted/60" />
                  <div className="flex-1">
                    <div className="h-2 w-24 bg-muted/60 rounded mb-2" />
                    <div className="h-2 w-16 bg-muted/30 rounded" />
                  </div>
                  <div className="text-primary text-sm font-bold">Booked</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── PROBLEM ─── */
const Problem = () => (
  <Section className="bg-surface-subtle">
    <motion.div variants={fadeUpItem} className="text-center mb-20">
      <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
        Your Ads Are Running.
        <br />
        Your Chairs Are Still Empty.
      </h2>
      <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
        Most clinics don't have an ads problem. They have a targeting + strategy
        problem.
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

/* ─── SOLUTION ─── */
const Solution = () => (
  <Section>
    <motion.h2 variants={fadeUpItem} className="text-3xl lg:text-5xl font-bold text-foreground mb-20 text-center">
      We Fix That. End to End.
    </motion.h2>
    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
      {[
        {
          name: "Raza Sandhu",
          role: "Meta Ads & Performance Marketing",
          items: [
            "Laser-targeted audiences",
            "Ad creatives strategy",
            "Cost-per-lead tracking",
          ],
          quote: "You work directly with the specialist.",
        },
        {
          name: "Hanzala",
          role: "Web & Funnel Development",
          items: [
            "High-converting landing pages",
            "Booking funnel setup",
            "Fast mobile-optimised sites",
          ],
          quote: "Built to convert, not just look good.",
        },
      ].map((person, i) => (
        <motion.div
          key={person.name}
          variants={fadeUpItem}
          whileHover={{
            y: -8,
            borderColor: "rgba(255,255,255,0.18)",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
          }}
          transition={{ duration: 0.3, ease }}
          className="p-10 lg:p-12 rounded-4xl bg-gradient-to-b from-surface-elevated to-background surface-card"
        >
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {person.name}
          </h3>
          <p className="text-primary font-medium mb-8">{person.role}</p>
          <ul className="space-y-5 mb-10">
            {person.items.map((li) => (
              <li key={li} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /> {li}
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-muted/50 text-sm text-muted-foreground/50 italic">
            "{person.quote}"
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

/* ─── HOW IT WORKS ─── */
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
          title: "Free Audit Call",
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
          whileHover={{
            y: -8,
            borderColor: "rgba(255,255,255,0.18)",
            boxShadow: "0 20px 40px -12px rgba(0,0,0,0.5)",
          }}
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

/* ─── SERVICES ─── */
const Services = () => (
  <Section>
    <motion.h2 variants={fadeUpItem} className="text-3xl lg:text-5xl font-bold text-foreground mb-20 text-center">
      Our Services
    </motion.h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <FeatureCard
        icon={TrendingUp}
        title="Performance Marketing (Meta Ads)"
        description="Data-driven Meta Ads campaigns laser-focused on booked consultations for aesthetic clinics."
      />
      <FeatureCard
        icon={Laptop}
        title="Landing Page / Website"
        description="High-converting, mobile-first landing pages and websites built to turn clicks into confirmed appointments."
      />
    </div>
  </Section>
);

/* ─── WHY CHOOSE US ─── */
const WhyUs = () => (
  <Section className="bg-surface-subtle">
    <motion.div variants={fadeUpItem} className="text-center mb-20">
      <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
        Not An Agency. Not A Generalist.
        <br />
        Just Results.
      </h2>
      <p className="text-muted-foreground text-lg lg:text-xl max-w-xl mx-auto leading-relaxed">
        Everything we do is built around one niche — aesthetic clinics.
      </p>
    </motion.div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
      {[
        { icon: Target, title: "Aesthetic Clinics Only" },
        { icon: Users, title: "Work Directly With Specialist" },
        { icon: Zap, title: "Outcome-Focused" },
        { icon: Rocket, title: "Fast Setup" },
        { icon: Shield, title: "No Retainer Traps" },
        { icon: TrendingUp, title: "Built to Scale" },
      ].map((f) => (
        <motion.div
          key={f.title}
          variants={fadeUpItem}
          whileHover={{
            y: -6,
            borderColor: "rgba(255,255,255,0.18)",
            boxShadow: "0 16px 32px -8px rgba(0,0,0,0.4)",
          }}
          transition={{ duration: 0.3, ease }}
          className="flex items-center gap-4 p-6 lg:p-7 rounded-2xl surface-card"
        >
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <f.icon className="w-5 h-5 text-primary" />
          </div>
          <span className="font-semibold text-foreground">{f.title}</span>
        </motion.div>
      ))}
    </div>
  </Section>
);

/* ─── RESULTS ─── */
const Results = () => (
  <Section className="bg-primary/[0.04]">
    <motion.h2 variants={fadeUpItem} className="text-3xl lg:text-5xl font-bold text-foreground mb-20 text-center">
      Real Results. Real Clinics.
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
      {[
        { clinic: "Botox & Filler Clinic", cpl: "£6.80", bookings: "42", roas: "6.2x" },
        { clinic: "Laser Skin Center", cpl: "£4.20", bookings: "68", roas: "8.1x" },
        { clinic: "Aesthetic Wellness", cpl: "£9.10", bookings: "31", roas: "5.4x" },
      ].map((res, i) => (
        <motion.div
          key={i}
          variants={fadeUpItem}
          whileHover={{
            y: -8,
            boxShadow: "0 20px 40px -12px rgba(16,185,129,0.15)",
          }}
          className="p-8 lg:p-10 rounded-3xl surface-card"
          style={{ borderColor: "rgba(16,185,129,0.15)" }}
        >
          <p className="text-foreground font-bold mb-8 text-lg">{res.clinic}</p>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="text-muted-foreground/50 text-xs uppercase tracking-widest mb-2">
                Cost Per Lead
              </p>
              <p className="text-3xl font-bold text-primary">{res.cpl}</p>
            </div>
            <div>
              <p className="text-muted-foreground/50 text-xs uppercase tracking-widest mb-2">
                Bookings
              </p>
              <p className="text-3xl font-bold text-foreground">{res.bookings}</p>
            </div>
            <div className="col-span-2 pt-5 border-t border-muted/50">
              <p className="text-muted-foreground/50 text-xs uppercase tracking-widest mb-2">
                ROAS
              </p>
              <p className="text-3xl font-bold text-foreground">{res.roas}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

/* ─── WHO THIS IS FOR ─── */
const WhoIsThisFor = () => (
  <Section>
    <div className="max-w-4xl mx-auto">
      <motion.h2 variants={fadeUpItem} className="text-3xl lg:text-5xl font-bold text-foreground mb-16 text-center">
        Is This For You?
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div variants={fadeUpItem} className="p-8 lg:p-10 rounded-3xl surface-card">
          <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-primary" />
            </div>
            This IS for you
          </h3>
          <ul className="space-y-5">
            {[
              "Clinic owners (Botox, filler, laser)",
              "Want predictable, qualified leads",
              "Tired of no-shows and ghosting",
              "Ready to invest in growth",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          variants={fadeUpItem}
          className="p-8 lg:p-10 rounded-3xl surface-card"
          style={{ borderColor: "rgba(239,68,68,0.15)" }}
        >
          <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
              <XCircle className="w-5 h-5 text-destructive" />
            </div>
            This is NOT for you
          </h3>
          <ul className="space-y-5">
            {[
              "You want cheap or overnight results",
              "Not willing to invest in quality leads",
              "Looking for a magic bullet with zero effort",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <ArrowRight className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </Section>
);

/* ─── FINAL CTA ─── */
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <CTAButton className="mb-10">Book My Free Strategy Call</CTAButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-8 text-sm text-muted-foreground/40 uppercase tracking-widest font-medium flex-wrap"
        >
          <span>● Free</span>
          <span>● No Commitment</span>
          <span>● Results-Focused</span>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── FOOTER ─── */
const Footer = () => (
  <footer className="py-16 px-6 border-t border-muted/50">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex gap-14">
        <div>
          <p className="text-foreground font-bold mb-1">Raza Sandhu</p>
          <p className="text-sm text-muted-foreground/60">Meta Specialist</p>
        </div>
        <div>
          <p className="text-foreground font-bold mb-1">Hanzala</p>
          <p className="text-sm text-muted-foreground/60">Funnel Specialist</p>
        </div>
      </div>
      <div className="flex gap-8 text-sm">
        {["Email", "WhatsApp", "Calendly"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

/* ─── PAGE ─── */
const Index = () => (
  <main>
    <Hero />
    <Problem />
    <Solution />
    <HowItWorks />
    <Services />
    <WhyUs />
    <Results />
    <WhoIsThisFor />
    <FinalCTA />
    <Footer />
  </main>
);

export default Index;
