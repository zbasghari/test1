/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Layout, 
  Zap, 
  Globe, 
  Layers,
  ArrowUpRight,
  Menu,
  X
} from "lucide-react";
import { useState, useRef, ReactNode } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass-light rounded-full px-6 py-3 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Sparkles className="text-white w-4 h-4" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">Gemini.Build</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#vision" className="hover:text-accent transition-colors">Vision</a>
            <a href="#features" className="hover:text-accent transition-colors">Features</a>
            <a href="#showcase" className="hover:text-accent transition-colors">Showcase</a>
            <button className="bg-brand-primary text-white px-5 py-2 rounded-full hover:scale-105 transition-transform flex items-center gap-2">
              Start Building <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[120vh] flex items-center justify-center overflow-hidden px-6">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0 opacity-10"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Zap className="w-3 h-3 fill-accent" /> Powered by Gemini 3.1
          </motion.div>
          
          <motion.h1 
            style={{ y: textY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-7xl md:text-9xl font-serif font-black leading-[0.85] mb-8"
          >
            PROMPT TO <br />
            <span className="text-accent italic">STUNNING</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto mb-12 text-balance leading-relaxed"
          >
            The future of web development isn't just code—it's conversation. 
            Build production-ready apps with elite design, instantly.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-brand-primary text-white text-lg px-8 py-4 rounded-2xl hover:bg-neutral-900 transition-colors flex items-center justify-center gap-3">
              Try the Generator <Sparkles className="w-5 h-5 text-accent" />
            </button>
            <button className="w-full sm:w-auto border-2 border-brand-primary px-8 py-4 rounded-2xl font-bold hover:bg-brand-primary hover:text-white transition-all">
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Floating Code Card */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [2, -2, 2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-12 hidden lg:block bottom-1/4 w-80 p-6 glass-dark text-white rounded-3xl shadow-2xl z-20"
        >
          <div className="flex gap-1.5 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <p className="font-mono text-xs text-blue-300 leading-relaxed">
            {"const app = await gemini.build({"}<br />
            {"  intent: 'premium_landing', "}<br />
            {"  aesthetic: 'swiss_modern',"}<br />
            {"  animations: true"}<br />
            {"});"}
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-brand-primary text-white rounded-[3rem] -mt-24 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-6xl mb-6">Designed for <span className="italic text-accent">Excellence</span></h2>
              <p className="text-gray-400 text-lg">We don't just generate text. We architect systems that delight users and scale with your business.</p>
            </div>
            <div className="text-accent font-mono text-sm tracking-tighter">
              [ 01 / ARCHITECTURE ]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            <FeatureCard 
              icon={<Code2 className="w-6 h-6" />}
              title="Clean TypeScript"
              description="Type-safe, maintainable code generated with modern React patterns."
            />
            <FeatureCard 
              icon={<Layout className="w-6 h-6" />}
              title="Semantic UI"
              description="Accessible, standard-compliant markup that search engines love."
            />
            <FeatureCard 
              icon={<Globe className="w-6 h-6" />}
              title="Global Scalability"
              description="Edge-ready applications designed for lightning-fast performance."
            />
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-square bg-neutral-200 rounded-[4rem] overflow-hidden shadow-inner relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-blue-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
            
            {/* Stat Overlay */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-10 -left-10 glass-light p-8 rounded-3xl shadow-xl hidden md:block"
            >
              <div className="text-5xl font-serif font-black mb-1">98%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Design Fidelity</div>
            </motion.div>
          </div>

          <div>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
              One prompt. <br />
              Infinite <span className="italic underline decoration-accent underline-offset-8">Possibilities.</span>
            </h2>
            <p className="text-xl font-light text-gray-600 mb-12 leading-relaxed">
              Whether it's a brutalist portfolio, a clean fintech app, or a dark luxury travel site, 
              Gemini understands the aesthetic nuances that make a brand premium.
            </p>
            
            <ul className="space-y-6 mb-12">
              <ShowcaseListItem text="Integrated Framer Motion support" />
              <ShowcaseListItem text="Tailwind CSS 4.0 configuration" />
              <ShowcaseListItem text="Dynamic Lucide icon selection" />
              <ShowcaseListItem text="Responsive mobile breakpoints" />
            </ul>

            <button className="group text-xl font-bold flex items-center gap-3 hover:text-accent transition-colors">
              Explore the Template Library <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="py-24 px-6 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-accent font-serif italic text-3xl mb-12">Building the future of the web.</div>
          <h2 className="text-6xl md:text-8xl font-serif mb-16 tracking-tighter">Ready to build?</h2>
          
          <div className="flex flex-wrap justify-center gap-24 mb-24">
            <FooterStat label="Apps Built" value="12k+" />
            <FooterStat label="Dev Hours Saved" value="450k" />
            <FooterStat label="Deployment Ready" value="100%" />
          </div>

          <div className="flex justify-between items-center border-t border-neutral-200 pt-12 text-sm text-gray-500">
            <div>© 2024 Gemini Builder. Built with elite AI.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-brand-primary">Twitter</a>
              <a href="#" className="hover:text-brand-primary">GitHub</a>
              <a href="#" className="hover:text-brand-primary">Documentation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="p-12 hover:bg-white/5 transition-colors group">
      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-serif mb-4">{title}</h3>
      <p className="text-gray-400 font-light leading-relaxed">{description}</p>
    </div>
  );
}

function ShowcaseListItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-4 text-lg">
      <div className="w-2 h-2 rounded-full bg-accent" />
      <span>{text}</span>
    </li>
  );
}

function FooterStat({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <div className="text-6xl font-serif font-black mb-2">{value}</div>
      <div className="text-xs font-bold uppercase tracking-widest text-accent">{label}</div>
    </div>
  );
}
