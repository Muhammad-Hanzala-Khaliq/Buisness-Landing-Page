"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Layout, 
  Lock, 
  Settings, 
  Smartphone, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronLeft,
  Sparkles,
  BarChart3
} from "lucide-react";
import Link from "next/link";
import CTAButton from "../../../components/CTAButton";

const ease = [0.16, 1, 0.3, 1];

const Section = ({ children, title, icon: Icon }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease }}
    className="py-12 lg:py-16 border-t border-border/50"
  >
    <div className="flex items-center gap-3 mb-10">
      <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
    {children}
  </motion.section>
);

export default function HanzalaProfile() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20 relative z-10">
        {/* Back Navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Hero Section */}
        <header className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <img 
                src="/Hanzala.png" 
                alt="Muhammad Hanzala Khaliq" 
                className="w-32 h-32 md:w-44 md:h-44 rounded-full object-contain border-4 border-white/10 shadow-2xl relative z-10 bg-surface-elevated"
              />
            </motion.div>

            <div className="text-center md:text-left space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider"
              >
                <Sparkles className="w-3 h-3" />
                Specialist Developer
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
              >
                Muhammad <br className="hidden md:block" />
                <span className="text-primary">Hanzala</span> Khaliq
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-lg"
              >
                Full-Stack Developer Specializing in MERN & Next.js Architecture.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-4 justify-center md:justify-start pt-2"
              >
                <a href="#" className="p-2.5 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 transition-all text-muted-foreground hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2.5 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 transition-all text-muted-foreground hover:text-primary">
                  <Github className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <Section title="About" icon={Sparkles}>
          <div className="grid md:grid-cols-1 gap-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Muhammad Hanzala Khaliq is a passionate Full-Stack Developer with professional experience building modern web applications using the MERN stack — MongoDB, Express.js, React.js, Next.js, and Node.js.
            </p>
            <p>
              He actively shares development projects, insights, and code examples, demonstrating a commitment to building performant and secure systems that solve real business challenges.
            </p>
          </div>
        </Section>

        {/* Skills Grid */}
        <Section title="Key Expertise" icon={Code2}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "MERN Stack", icon: Database, desc: "Full-Stack Architecture" },
              { name: "Next.js", icon: Sparkles, desc: "Server-Side Rendering" },
              { name: "Auth Systems", icon: Lock, desc: "JWT & Secure Login" },
              { name: "Modern UI/UX", icon: Layout, desc: "Tailwind CSS Experts" },
              { name: "Backend Services", icon: Settings, desc: "Node.js & API Mastery" },
              { name: "Mobile Apps", icon: Smartphone, desc: "React Native Integration" }
            ].map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-all group"
              >
                <skill.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-1">{skill.name}</h3>
                <p className="text-xs text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="Notable Projects" icon={BarChart3}>
          <div className="space-y-6">
            {[
              {
                title: "Full-Stack Financial Dashboard",
                desc: "Real-time analytics, authentication, reporting, and export features built for high-performance financial tracking.",
                tags: ["Next.js", "MongoDB", "Auth.js", "Recharts"]
              },
              {
                title: "React Native App with AI Chat",
                desc: "A cross-platform mobile application featuring real-time chat and Appwrite integration for seamless backend services.",
                tags: ["React Native", "Appwrite", "Real-time", "Mobile"]
              }
            ].map((project, index) => (
              <motion.div 
                key={project.title}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-surface-elevated border border-border hover:border-primary/20 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 max-w-xl">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-surface-subtle border border-border text-[10px] font-bold text-primary uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Final CTA */}
        <footer className="pt-12 text-center border-t border-border/50">
          <p className="text-muted-foreground mb-8">Interested in working on a project together?</p>
          <Link href="/book-strategy-call">
            <CTAButton>Let's Collaborate</CTAButton>
          </Link>
        </footer>
      </div>
    </div>
  );
}
