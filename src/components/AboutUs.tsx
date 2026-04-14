import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-surface text-on-surface font-sans rounded-3xl overflow-hidden shadow-xl text-center border border-outline-variant/10"
    >
      <header className="bg-primary-container text-white py-12 px-6 flex flex-col items-center justify-center">
        <h1 className="m-0 text-4xl md:text-5xl font-bold tracking-tight">About TechOptyx</h1>
      </header>

      <main className="max-w-4xl mx-auto my-12 px-6">
        <div className="flex flex-col items-center" style={{ lineHeight: 1.8 }}>

          <h2 className="uppercase tracking-[0.2em] font-bold mb-6 text-sm text-on-surface-variant/60" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>The Vision</h2>
          
          <div className="bg-primary/5 p-6 sm:p-10 rounded-3xl mb-12 border border-primary/10 w-full max-w-2xl">
            <h3 className="uppercase tracking-[0.1em] font-bold mb-4 text-primary text-sm sm:text-base" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>OUR MISSION</h3>
            <p className="font-medium text-lg sm:text-xl leading-relaxed italic text-on-surface">
              "To empower individuals by transforming passive learning into active creation, providing the structured framework needed to build, deploy, and monetize AI-driven digital products."
            </p>
          </div>
          
          <div className="space-y-6 text-sm sm:text-base max-w-2xl text-left sm:text-center">
            <p>
              TechOptyx is an ecosystem designed to take individuals from foundational digital skills to the creation and monetization of AI-powered products and applications.
            </p>

            <p>
              This system provides a structured, phase-based framework that moves users through digital fundamentals, generative AI and applied prompt engineering, no-code and low-code development, AI-assisted workflows, automation, full-stack architecture, SaaS development, and distribution strategies.
            </p>

            <p>
              Each phase is built with one purpose: to produce builders who understand what they learn, apply it through creation, and deploy it as functioning, monetizable systems.
            </p>

            <p>
              The system is not passive learning; it is an operational framework for executing independently and consistently, transforming knowledge into products that generate value.
            </p>
          </div>

          <div className="mt-10 mb-16 flex items-center gap-6 justify-center">
            <a href="https://www.facebook.com/profile.php?id=100066873520674" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all hover:scale-110" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/techoptyx?igsh=dnJ0OGdyNDZydWti" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all hover:scale-110" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://x.com/techoptyx23?t=StVniHVIRwj7-1ItTDZTvg&s=09" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all hover:scale-110" aria-label="X (Twitter)">
              <XIcon className="w-6 h-6" />
            </a>
            <a href="https://www.tiktok.com/@techoptyx?_r=1&_t=ZS-95K3DoO63we" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all hover:scale-110" aria-label="TikTok">
              <TikTokIcon className="w-6 h-6" />
            </a>
            <a href="https://youtube.com/@techoptyx?si=quSfRrljyj79wRJd" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all hover:scale-110" aria-label="YouTube">
              <Youtube className="w-6 h-6" />
            </a>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-16" />

          <h2 className="uppercase tracking-[0.2em] font-bold mb-8 text-xl sm:text-2xl text-on-surface" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>ABOUT THE SYSTEM</h2>

          <div className="space-y-6 text-sm sm:text-base max-w-2xl mb-16 text-left sm:text-center">
            <p>
              TechOptyx is an AI-driven builder ecosystem designed to equip individuals with the ability to build, deploy, and monetize digital products.
            </p>

            <p>
              In a world where technology is no longer a tool but the environment itself, most people consume information endlessly without converting knowledge into tangible outcomes.
            </p>

            <p>
              TechOptyx exists to close this gap. It is not a content platform, a motivation brand, or a trend-chasing tech site. Instead, it is a structured execution system that guides users from understanding digital fundamentals to creating scalable, functional systems that produce real-world results.
            </p>

            <p>
              By combining education, application, monetization, and ethical responsibility, TechOptyx ensures that knowledge is transformed into actionable output rather than passive consumption.
            </p>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-16" />

          <h2 className="uppercase tracking-[0.2em] font-bold mb-10 text-xl sm:text-2xl text-on-surface" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>THE FOUNDER</h2>

          <div className="flex flex-col items-center gap-8 max-w-3xl w-full px-4 sm:px-6 mx-auto">
            <div className="w-full max-w-2xl mx-auto px-4 sm:px-8 py-6 bg-surface-container/40 rounded-3xl shadow-sm border border-primary/10">
              <div className="space-y-6 text-sm sm:text-base text-left sm:text-center break-words text-on-surface-variant">
                <p>
                  Amr Suleiman is the founder of TechOptyx and the architect behind its systems. His experience spans digital technology, structured learning, and applied problem-solving, with hands-on expertise in development environments, automation, and practical technology integration.
                </p>

                <p>
                  Amr does not operate as a traditional educator. His focus is on designing systems that reduce friction between learning and execution, enabling individuals to move from consuming knowledge to building, validating, and scaling functional products.
                </p>

                <p className="font-bold text-base sm:text-lg text-primary italic py-4">
                  "Build quickly, validate in the real world, and scale through systems rather than effort."
                </p>

                <p>
                  TechOptyx embodies this approach, serving as a direct extension of Amr’s vision for creating capable, independent builders in a technology-driven world.
                </p>

                <div className="mt-8 flex items-center gap-4 sm:gap-6 justify-center flex-wrap">
                <a href="https://www.facebook.com/al.ammr.tech" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all hover:scale-110" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/al.ammr.tech?igsh=anJhaHRidmpiNHV3" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all hover:scale-110" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/al-ammr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all hover:scale-110" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@al.ammr.tech?_r=1&_t=ZS-95K32EpYxRx" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all hover:scale-110" aria-label="TikTok">
                  <TikTokIcon className="w-6 h-6" />
                </a>
                <a href="https://x.com/Ammr_Suleiman?t=TX3PBhKjkGYf7lZC0sCU_w&s=09" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all hover:scale-110" aria-label="X (Twitter)">
                  <XIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          </div>

        </div>
      </main>
    </motion.div>
  );
}
