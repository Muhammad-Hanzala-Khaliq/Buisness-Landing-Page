"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Target, 
  Search, 
  ChevronLeft,
  Briefcase,
  Award,
  Globe,
  BarChart,
  ArrowRight,
  Settings
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
      <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
        <Icon className="w-5 h-5 text-indigo-400" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
    {children}
  </motion.section>
);

export default function RazaProfile() {
  return (
    <div className="min-h-screen bg-[#050505] relative selection:bg-indigo-500/20 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20 relative z-10">
        {/* Back Navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-indigo-400 transition-colors mb-12 group"
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
              <div className="absolute -inset-4 bg-indigo-500/10 rounded-full blur-2xl" />
              <img 
                src="/Ali.png" 
                alt="Raza Sandhu" 
                className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-4 border-white/5 shadow-2xl relative z-10 bg-surface-elevated"
              />
            </motion.div>

            <div className="text-center md:text-left space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider"
              >
                <Award className="w-3 h-3" />
                Operations Expert
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
              >
                Raza <span className="text-indigo-400">Sandhu</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-lg"
              >
                Operations & Business Management Professional with a Focus on Strategic Excellence.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-4 justify-center md:justify-start pt-2"
              >
                <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-elevated border border-border hover:border-indigo-500/30 transition-all text-sm font-medium text-white hover:bg-indigo-500/5">
                  <Globe className="w-4 h-4 text-indigo-400" /> Professional Portfolio
                </a>
              </motion.div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <Section title="Professional Summary" icon={TrendingUp}>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Raza Sandhu is an experienced Operations Manager with a strong background in driving operational excellence and strategic execution. His expertise lies in overseeing complex business functions and contributing to scalable growth.
            </p>
            <p>
              His professional experience includes leadership roles in major corporations such as Shell, where he has successfully overseen high-stakes operations and mentored cross-functional teams to achieve organizational milestones.
            </p>
          </div>
        </Section>

        {/* Experience Timeline */}
        <Section title="Professional Experience" icon={Briefcase}>
          <div className="space-y-10 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border/50 ml-6" />
            {[
              {
                role: "Operations Manager",
                company: "Shell (UAE)",
                period: "Multi-Year Leadership",
                desc: "Overseeing regional operations, ensuring compliance with global standards, and optimizing process efficiency to drive business growth."
              },
              {
                role: "Strategic Performance Lead",
                company: "Market Operations",
                period: "2019 - Present",
                desc: "Implementing data-driven strategies to monitor cross-functional performance and stakeholder engagement."
              }
            ].map((exp, index) => (
              <motion.div 
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-16 group"
              >
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-surface-elevated border-2 border-indigo-500/30 flex items-center justify-center z-10 group-hover:border-indigo-400 transition-colors">
                  <Building2 className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-xs font-bold text-indigo-400/70 uppercase tracking-widest bg-indigo-500/5 px-3 py-1 rounded-full border border-indigo-500/10">
                    {exp.period}
                  </span>
                </div>
                <div className="text-sm font-bold text-muted-foreground mb-4">{exp.company}</div>
                <p className="text-muted-foreground leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Skills & Achievements Grid */}
        <Section title="Expertise & Impact" icon={Target}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Operations Strategy", desc: "Crafting long-term visions and immediate execution plans.", icon: Target },
              { title: "Process Optimization", desc: "Reducing friction and identifying efficiency gains.", icon: Settings },
              { title: "Team Leadership", desc: "Mentoring diverse teams across global regions.", icon: Users },
              { title: "Performance Reporting", desc: "Data-driven monitoring and stakeholder insights.", icon: BarChart }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                className="p-6 rounded-2xl bg-surface-elevated border border-border flex gap-4 hover:border-indigo-500/20 transition-all border-l-4 border-l-indigo-500/40"
              >
                <div className="p-2.5 rounded-xl bg-indigo-500/10 h-fit">
                  <item.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Achievement Callout */}
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 text-center"
        >
          <p className="text-indigo-400 font-bold mb-4 uppercase tracking-[0.2em] text-xs">Major Achievement</p>
          <h3 className="text-2xl font-bold text-white mb-6">Led Multi-Million Dollar Infrastructure Implementation at Shell UAE</h3>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">15%</div>
              <div className="text-[10px] text-muted-foreground/60 uppercase font-bold tracking-widest mt-1">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">40+</div>
              <div className="text-[10px] text-muted-foreground/60 uppercase font-bold tracking-widest mt-1">Team Members</div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <footer className="pt-20 text-center">
          <p className="text-muted-foreground mb-8">Ready to optimize your business operations?</p>
          <Link href="/book-strategy-call">
            <CTAButton className="!bg-indigo-500 hover:!bg-indigo-400">
              Get Strategic Insight <ArrowRight className="w-5 h-5 inline-block ml-2" />
            </CTAButton>
          </Link>
        </footer>
      </div>
    </div>
  );
}
