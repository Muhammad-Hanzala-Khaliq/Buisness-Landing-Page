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
      
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20 relative z-10">
        
        {/* Back */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* HERO */}
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
                Full Stack Developer
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

              <p className="text-primary font-semibold">
                MERN Stack | Next.js Developer
              </p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-lg"
              >
                I build modern, scalable web applications using MERN Stack & Next.js — focused on performance, clean UI, and real-world solutions.
              </motion.p>
              
              {/* SOCIAL */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-4 justify-center md:justify-start pt-2"
              >
                <a href="https://www.linkedin.com/in/muhammad-hanzala-khaliq-34159a269/" target="_blank">
                  <Linkedin className="w-5 h-5 hover:text-primary" />
                </a>
                <a href="https://github.com/Muhammad-Hanzala-Khaliq" target="_blank">
                  <Github className="w-5 h-5 hover:text-primary" />
                </a>
              </motion.div>
            </div>
          </div>
        </header>

        {/* ABOUT */}
        <Section title="About" icon={Sparkles}>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm Muhammad Hanzala Khaliq, a Full Stack MERN Developer passionate about building real-world web applications that are fast, scalable, and user-focused.
            </p>
            <p>
              I specialize in React.js, Next.js, Node.js, and MongoDB — creating complete solutions from frontend UI to backend APIs.
            </p>
            <p>
              My goal is to build products that solve real business problems with clean code and modern technologies.
            </p>
          </div>
        </Section>

        {/* SKILLS */}
        <Section title="Key Expertise" icon={Code2}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "MERN Stack", icon: Database, desc: "MongoDB, Express, React, Node" },
              { name: "Next.js", icon: Sparkles, desc: "SSR & Performance" },
              { name: "Authentication", icon: Lock, desc: "JWT & Security" },
              { name: "Frontend UI", icon: Layout, desc: "Tailwind CSS" },
              { name: "Backend APIs", icon: Settings, desc: "REST APIs" },
              { name: "Deployment", icon: Smartphone, desc: "Vercel & Hosting" }
            ].map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-all"
              >
                <skill.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-bold text-white">{skill.name}</h3>
                <p className="text-xs text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section title="Projects" icon={BarChart3}>
          <div className="space-y-6">
            {[
              {
                title: "Portfolio Website",
                desc: "Modern animated portfolio built with Next.js and Framer Motion.",
                tags: ["Next.js", "Framer Motion", "Tailwind"]
              },
              {
                title: "MERN Stack App",
                desc: "Full-stack application with authentication and REST APIs.",
                tags: ["MongoDB", "Express", "React", "Node"]
              },
              {
                title: "Authentication System",
                desc: "JWT-based login system with access & refresh tokens.",
                tags: ["JWT", "Security"]
              }
            ].map((project) => (
              <div 
                key={project.title}
                className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/20"
              >
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <footer className="pt-12 text-center border-t border-border/50">
          <p className="text-muted-foreground mb-6">
            Have a project in mind? Let’s build something amazing together.
          </p>
          <Link href="/contact">
            <CTAButton>Work With Me</CTAButton>
          </Link>
        </footer>

      </div>
    </div>
  );
}