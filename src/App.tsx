import { motion } from "motion/react";
import { ShoppingBag, Menu, X, ArrowRight, Instagram, Twitter, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const CrackedText = ({ text, subtitle }: { text: string; subtitle: string }) => {
  return (
    <div className="relative flex flex-col items-center justify-center py-20 px-4 select-none">
      <div className="relative group">
        {/* Main Logo Text with SVG Filter for cracks */}
        <h1 
          className="text-8xl md:text-[12rem] lg:text-[18rem] font-display uppercase leading-none tracking-tighter text-white transition-transform duration-700 hover:scale-[1.02]"
          style={{ filter: 'url(#cracks)' }}
        >
          {text}
        </h1>
        
        {/* Motto */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xs md:text-sm lg:text-md uppercase tracking-[0.6em] text-neutral-400 mt-[-0.5rem] md:mt-[-1.5rem] font-medium text-center"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* SVG Crack Pattern Filter */}
      <svg className="absolute invisible h-0 w-0">
        <defs>
          <filter id="cracks">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.05" 
              numOctaves="5" 
              seed="10" 
              result="noise" 
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="3" 
            />
            <feComposite 
              in="SourceGraphic" 
              in2="noise" 
              operator="out" 
            />
          </filter>
        </defs>
      </svg>
      
      {/* Visual Crack Overlay (Manual Paths for precise detail) */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700">
         <svg viewBox="0 0 1000 400" className="w-full h-full stroke-neutral-400 fill-none stroke-[0.3]">
            <path d="M100,50 L110,70 L105,90 M140,40 L135,65 M180,60 L190,80" />
            <path d="M300,40 L310,70 L305,100 M330,50 L325,75 M370,80 L385,100" />
            <path d="M500,60 L515,90 L505,120 M540,70 L535,95 M570,100 L585,130" />
            <path d="M700,50 L710,80 L705,110 M730,60 L725,85 M770,90 L785,120" />
            <path d="M900,40 L915,70 L905,100 M940,50 L935,75 M970,80 L985,110" />
         </svg>
      </div>
    </div>
  );
};

const AirPodModel = ({ flipped, isLeft }: { flipped?: boolean; isLeft?: boolean }) => (
  <div className={`relative w-28 h-44 ${flipped ? "-scale-x-100" : ""}`}>
    {/* Ear Tip (Silicone part) */}
    <div className="absolute top-4 -right-1 w-14 h-16 bg-neutral-100 rounded-[2rem] shadow-[inset_0_5px_15px_rgba(0,0,0,0.05),-5px_0_10px_rgba(0,0,0,0.1)] border border-neutral-200 z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-neutral-300/30 rounded-full blur-sm"></div>
    </div>

    {/* Main Body (The ergonomic head) */}
    <div className="absolute top-0 right-2 w-22 h-22 bg-gradient-to-br from-white via-white to-neutral-200 rounded-[3rem] shadow-[0_10px_25px_rgba(0,0,0,0.2),inset_-2px_-5px_10px_rgba(0,0,0,0.05)] border border-neutral-100 z-10 overflow-hidden">
      {/* Front Speaker Mesh */}
      <div className="absolute top-3 right-4 w-11 h-11 bg-neutral-900 rounded-full flex items-center justify-center border-t-2 border-neutral-800 shadow-inner">
        <div className="w-full h-full opacity-40 bg-[radial-gradient(#555_1.5px,transparent_1.5px)] bg-[size:3px_3px]"></div>
      </div>
      
      {/* Side Sensor (Pill shape) */}
      <div className="absolute top-1/2 -left-1 w-2.5 h-6 bg-neutral-800 rounded-full -translate-y-1/2 shadow-inner"></div>
      
      {/* Top Microphone Vent */}
      <div className="absolute top-2 left-6 w-5 h-1.5 bg-neutral-800/80 rounded-full"></div>
      
      {/* Glossy Reflection */}
      <div className="absolute top-2 left-8 w-12 h-6 bg-white/60 blur-md rounded-full -rotate-12"></div>

      {/* L/R Mark */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-bold text-neutral-400 opacity-50 select-none">
        {isLeft ? "L" : "R"}
      </div>
    </div>
    
    {/* Stem */}
    <div className="absolute top-14 right-5 w-8 h-32 bg-gradient-to-r from-neutral-100 via-white to-neutral-100 rounded-full shadow-[5px_10px_20px_rgba(0,0,0,0.15),inset_-2px_-5px_10px_rgba(0,0,0,0.02)] border border-neutral-200 z-20">
      {/* Touch Control Surface (Subtle indentation) */}
      <div className="absolute top-8 left-1 w-1.5 h-12 bg-neutral-100/50 rounded-full shadow-inner border border-white/20"></div>
      
      {/* Glossy Stem Highlight */}
      <div className="absolute top-4 left-1 w-2 h-24 bg-white/70 blur-[2px] rounded-full"></div>
      
      {/* Bottom Charging Tip (Chrome/Metallic) */}
      <div className="absolute bottom-0 w-full h-4 bg-gradient-to-b from-neutral-300 via-neutral-100 to-neutral-300 rounded-b-full border-t border-neutral-200 shadow-[inset_0_-2px_5px_rgba(0,0,0,0.1)] flex flex-col justify-between p-[2px]">
         <div className="w-full h-[1px] bg-neutral-400/30"></div>
         <div className="w-full h-[1px] bg-neutral-400/30"></div>
      </div>
    </div>
  </div>
);

const AirPodsShowcase = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative max-w-sm mx-auto cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden bg-black/80 rounded-sm border border-white/5 p-12 flex items-center justify-center">
        {/* Shine Particles (Glitter) */}
        <div className="absolute inset-0 z-40 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={isHovered ? { 
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
                x: [0, (i % 2 === 0 ? 40 : -40) + Math.random() * 30, 0],
                y: [0, (i < 4 ? -40 : 40) + Math.random() * 30, 0],
              } : { opacity: 0 }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity, 
                delay: i * 0.15,
                ease: "easeInOut" 
              }}
              className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-white shadow-[0_0_10px_white] rounded-full"
            />
          ))}
        </div>

        {/* Custom Styled AirPods Case (White Box) */}
        <motion.div
           animate={isHovered ? { 
             scale: 1.1,
             y: -30,
             opacity: 0,
             filter: "blur(12px)"
           } : { 
             scale: 1, 
             y: 0, 
             opacity: 1,
             filter: "blur(0px)"
           }}
           transition={{ duration: 0.4, ease: "easeOut" }}
           className="relative z-10 w-44 h-36 bg-white rounded-[2.5rem] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.05),0_15px_40px_rgba(0,0,0,0.4)] flex flex-col items-center border border-neutral-100"
        >
          {/* Lid Line (Grey line on top middle) */}
          <div className="w-full h-[1.5px] bg-neutral-300 absolute top-10 shadow-sm opacity-50"></div>
          
          {/* Status Light */}
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.6)] mt-16"></div>
          
          {/* Lighting/Gloss Reflection */}
          <div className="absolute top-3 left-6 w-14 h-4 bg-white/80 blur-md rounded-full rotate-[-15deg]"></div>
        </motion.div>

        {/* Earbud Left: Pops out and hovers (Facing Left) */}
        <motion.div
           className="absolute z-20 pointer-events-none flex items-center justify-center"
           initial={{ opacity: 0, scale: 0.1, x: 0, y: 0 }}
           animate={isHovered ? { 
             opacity: 1, 
             scale: 1,
             x: -85,
             y: [-15, -45, -15],
             rotate: [-15, -25, -15]
           } : { 
             opacity: 0, 
             scale: 0.1,
             x: 0,
             y: 0
           }}
           transition={{ 
             delay: isHovered ? 0.2 : 0,
             y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
             rotate: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
             default: { duration: 0.6, ease: "backOut" }
           }}
        >
          <div className="relative">
            <AirPodModel flipped isLeft />
            {/* Glitter shine on the airpod */}
            <motion.div 
               animate={isHovered ? { opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] } : { opacity: 0 }}
               transition={{ duration: 1.5, repeat: Infinity }}
               className="absolute top-2 right-12 w-2 h-2 bg-white rounded-full blur-[1px] shadow-[0_0_12px_white]"
            />
          </div>
        </motion.div>

        {/* Earbud Right: Pops out and hovers (Facing Right) */}
        <motion.div
           className="absolute z-20 pointer-events-none flex items-center justify-center"
           initial={{ opacity: 0, scale: 0.1, x: 0, y: 0 }}
           animate={isHovered ? { 
             opacity: 1, 
             scale: 1,
             x: 85,
             y: [-35, -5, -35],
             rotate: [15, 25, 15]
           } : { 
             opacity: 0, 
             scale: 0.1,
             x: 0,
             y: 0
           }}
           transition={{ 
             delay: isHovered ? 0.35 : 0,
             y: { repeat: Infinity, duration: 2.8, ease: "easeInOut" },
             rotate: { repeat: Infinity, duration: 3.8, ease: "easeInOut" },
             default: { duration: 0.6, ease: "backOut" }
           }}
        >
          <div className="relative">
            <AirPodModel />
            {/* Glitter shine on the airpod */}
            <motion.div 
               animate={isHovered ? { opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] } : { opacity: 0 }}
               transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
               className="absolute top-10 left-12 w-1.5 h-1.5 bg-white rounded-full blur-[1px] shadow-[0_0_10px_white]"
            />
          </div>
        </motion.div>

        <div className="absolute top-4 right-4 flex gap-1 z-50">
          <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
          <div className="w-1 h-1 rounded-full bg-neutral-800" />
        </div>
        
        <div className="absolute bottom-3 left-3 bg-white text-black px-2 py-0.5 text-[8px] font-black tracking-tighter uppercase leading-none z-50">
          Drop Active
        </div>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-3xl font-display uppercase tracking-tight text-white mb-2">Aiprods pro2</h3>
        <p className="text-[10px] md:text-xs text-neutral-400 uppercase tracking-widest font-medium max-w-[220px] mx-auto leading-relaxed">
          AirPods Pro2 Dual-Ear In-Ear Bluetooth Noise-Canceling Headphones
        </p>
        <p className="text-[8px] text-neutral-600 uppercase tracking-[0.4em] mt-3 font-bold">
          BE BZ, WITH THE AIRPODS PRO 2
        </p>
        
        <div className="mt-8">
          <button className="relative overflow-hidden group/btn bg-white text-black px-10 py-4 text-[9px] font-black uppercase tracking-[0.3em] transition-all active:scale-95 leading-none">
            <span className="relative z-10">Purchase — £249</span>
            <motion.div 
              className="absolute inset-0 bg-neutral-200 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-neutral-900" : "py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <a href="#" className="text-2xl font-display uppercase tracking-tighter hover:opacity-70 transition-opacity">
              JBZ
            </a>
            <div className="hidden md:flex gap-8">
              {["Shop", "Archive", "Manifesto", "Stockists"].map((item) => (
                <a key={item} href="#" className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-6">
             <button className="hidden md:block text-[10px] uppercase font-bold tracking-widest text-neutral-400 hover:text-white transition-colors">
               Cart (0)
             </button>
             <button className="md:hidden" onClick={() => setMobileMenu(true)}>
               <Menu size={20} />
             </button>
             <ShoppingBag size={20} className="hover:opacity-70 cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black flex flex-col p-8"
        >
          <div className="flex justify-end">
            <button onClick={() => setMobileMenu(false)}>
              <X size={32} />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-12">
             {["Store", "Archive", "Journal", "Contacts"].map((item, i) => (
               <motion.a 
                 key={item}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 }}
                 href="#" 
                 onClick={() => setMobileMenu(false)}
                 className="text-6xl font-display uppercase hover:text-neutral-500 transition-colors"
                >
                 {item}
               </motion.a>
             ))}
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <header className="relative pt-32 pb-16 overflow-hidden min-h-[80vh] flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,1)_0%,rgba(10,10,10,1)_100%)]">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neutral-800 rounded-full blur-[120px] opacity-10"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neutral-800 rounded-full blur-[120px] opacity-10"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <CrackedText text="JUSTBZ" subtitle="ALWAYS BE BZ" />
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600">
           <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Scroll</span>
           <motion.div 
             animate={{ y: [0, 8, 0] }}
             transition={{ repeat: Infinity, duration: 2 }}
           >
             <ChevronDown size={14} />
           </motion.div>
        </div>
      </header>

      {/* Intro / Manifesto */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-tight"
         >
           Forged in transition. <br/>
           Built for the <span className="text-neutral-600 block sm:inline">perpetual motion.</span>
         </motion.h2>
         <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-sm md:text-lg max-w-2xl mx-auto tracking-wide leading-relaxed text-neutral-400"
          >
           JUSTBZ is more than clothing. It's a timestamp for the restless. Every crack in our identity is a mark of resilience. Stay bold. Stay busy. Always be BZ.
         </motion.p>
      </section>

      {/* Collection Grid - Exclusive Drop */}
      <section className="max-w-7xl mx-auto px-6 py-20 pb-40 border-t border-neutral-900">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-neutral-600 mb-4">Limited Edition Release</h2>
          <div className="h-px w-20 bg-neutral-800"></div>
        </div>

        <AirPodsShowcase />
      </section>

      {/* Brand Ethos Full Width */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-neutral-950">
        <img 
          src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply grayscale"
          alt="Atmospheric"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
           <div className="max-w-xl">
             <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-6">Manifesto</h4>
             <h2 className="text-5xl md:text-7xl font-display uppercase leading-[0.9] mb-8">Chaos is <br/> The catalyst.</h2>
             <p className="text-neutral-400 max-w-sm text-sm tracking-wide leading-relaxed mb-8">
               We believe perfection is static. Progress happens in the cracks between who you were and who you're becoming.
             </p>
             <button className="border border-white/20 hover:bg-white hover:text-black transition-all duration-500 px-8 py-3 text-[10px] font-bold uppercase tracking-widest leading-none">
               Read Journal
             </button>
           </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
           <h2 className="text-4xl font-display uppercase tracking-tight mb-4">Stay informed</h2>
           <p className="text-neutral-500 text-sm tracking-wide mb-10">Join the collective for early access and archive updates.</p>
           <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="flex-1 bg-neutral-900 border border-neutral-800 px-6 py-4 text-xs font-bold tracking-widest focus:outline-none focus:border-neutral-500 transition-colors uppercase"
              />
              <button className="bg-white text-black text-[10px] font-black tracking-[0.2em] px-10 py-5 uppercase hover:bg-neutral-300 transition-all">
                Subscribe
              </button>
           </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-neutral-900 pb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-display uppercase tracking-tighter mb-6">JUSTBZ</h2>
            <p className="text-neutral-500 text-xs max-w-xs tracking-widest leading-relaxed uppercase">
              Premium apparel for the constant hustle. Designed in London. Distributed globally.
            </p>
            <div className="flex gap-6 mt-8">
               <Instagram size={18} className="hover:text-neutral-400 cursor-pointer transition-colors" />
               <Twitter size={18} className="hover:text-neutral-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-600 mb-6 font-sans">Support</h4>
            <ul className="flex flex-col gap-3 text-[10px] font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-neutral-400 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-neutral-400 transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-neutral-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-600 mb-6 font-sans">Company</h4>
            <ul className="flex flex-col gap-3 text-[10px] font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-neutral-400 transition-colors">Archive</a></li>
              <li><a href="#" className="hover:text-neutral-400 transition-colors">Manifesto</a></li>
              <li><a href="#" className="hover:text-neutral-400 transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold tracking-[0.4em] text-neutral-700 uppercase">
           <span>© 2024 JUSTBZ STUDIO</span>
           <span className="text-neutral-500">ALWAYS BE BZ</span>
        </div>
      </footer>
    </div>
  );
}
