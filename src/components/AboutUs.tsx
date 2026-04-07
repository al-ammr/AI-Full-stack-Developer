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
      className="bg-[#f8f9fb] text-[#1a1a1a] font-sans rounded-3xl overflow-hidden shadow-xl"
    >
      <header className="bg-[#6c5ce7] text-white py-10 px-5 text-center">
        <img 
          src="https://www.facebook.com/photo.php?fbid=1179343390971434&set=a.410627971176317&type=3&mibextid=rS40aB7S9Ucbxw6v" 
          alt="TechOptyx Logo" 
          className="max-w-[120px] mx-auto mb-5 rounded-xl"
          referrerPolicy="no-referrer"
        />
        <h1 className="m-0 text-4xl font-bold">About TechOptyx</h1>
      </header>

      <main className="max-w-[900px] mx-auto my-10 px-5">
        <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", textAlign: "center", lineHeight: 1.8, color: "#2c2c2c" }}>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: "1px", marginBottom: "20px", fontSize: "1.5rem", textAlign: "center" }}>ABOUT TECHOPTYX</h2>
          
          <p className="mb-4">
            TechOptyx ecosystem, designed to take individuals from foundational digital skills to the creation and monetization of AI-powered products and applications.
          </p>

          <p className="mb-4">
            This system provides a structured, phase-based framework that moves users through digital fundamentals, generative AI and applied prompt engineering, no-code and low-code development, AI-assisted workflows, automation, full-stack architecture, SaaS development, and distribution strategies.
          </p>

          <p className="mb-4">
            Each phase is built with one purpose: to produce builders who understand what they learn, apply it through creation, and deploy it as functioning, monetizable systems.
          </p>

          <p className="mb-4">
            The system is not passive learning; it is an operational framework for executing independently and consistently, transforming knowledge into products that generate value.
          </p>

          <div className="mt-6 mb-10 flex items-center gap-4 justify-center">
            <a href="https://www.facebook.com/profile.php?id=100066873520674" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[#6c5ce7]/10 text-[#6c5ce7] hover:bg-[#6c5ce7] hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/techoptyx?igsh=dnJ0OGdyNDZydWti" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[#6c5ce7]/10 text-[#6c5ce7] hover:bg-[#6c5ce7] hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://x.com/techoptyx23?t=StVniHVIRwj7-1ItTDZTvg&s=09" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[#6c5ce7]/10 text-[#6c5ce7] hover:bg-[#6c5ce7] hover:text-white transition-colors" aria-label="X (Twitter)">
              <XIcon className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@techoptyx?_r=1&_t=ZS-95K3DoO63we" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[#6c5ce7]/10 text-[#6c5ce7] hover:bg-[#6c5ce7] hover:text-white transition-colors" aria-label="TikTok">
              <TikTokIcon className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/@techoptyx?si=quSfRrljyj79wRJd" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[#6c5ce7]/10 text-[#6c5ce7] hover:bg-[#6c5ce7] hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: "1px", marginTop: "40px", marginBottom: "20px", fontSize: "1.5rem", textAlign: "center" }}>ABOUT THE SYSTEM</h2>

          <p className="mb-4">
            TechOptyx is an AI-driven builder ecosystem designed to equip individuals with the ability to build, deploy, and monetize digital products.
          </p>

          <p className="mb-4">
            In a world where technology is no longer a tool but the environment itself, most people consume information endlessly without converting knowledge into tangible outcomes.
          </p>

          <p className="mb-4">
            TechOptyx exists to close this gap. It is not a content platform, a motivation brand, or a trend-chasing tech site. Instead, it is a structured execution system that guides users from understanding digital fundamentals to creating scalable, functional systems that produce real-world results.
          </p>

          <p className="mb-4">
            By combining education, application, monetization, and ethical responsibility, TechOptyx ensures that knowledge is transformed into actionable output rather than passive consumption.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: "1px", marginTop: "40px", marginBottom: "20px", fontSize: "1.5rem", textAlign: "center" }}>ABOUT THE FOUNDER</h2>

          <div className="flex flex-col items-center text-center mt-6 gap-6">
            <img 
              src="https://www.facebook.com/photo.php?fbid=1653392159233015&set=a.247904833115095&type=3&mibextid=rS40aB7S9Ucbxw6v" 
              alt="Amr Suleiman" 
              className="max-w-[150px] sm:max-w-[200px] rounded-xl shrink-0"
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="mb-4">
                Amr Suleiman is the founder of TechOptyx and the architect behind its systems. His experience spans digital technology, structured learning, and applied problem-solving, with hands-on expertise in development environments, automation, and practical technology integration.
              </p>

              <p className="mb-4">
                Amr does not operate as a traditional educator. His focus is on designing systems that reduce friction between learning and execution, enabling individuals to move from consuming knowledge to building, validating, and scaling functional products.
              </p>

              <p className="mb-4">
                His philosophy is simple but rigorous: <em style={{ fontStyle: "italic" }}>"Build quickly, validate in the real world, and scale through systems rather than effort."</em>
              </p>

              <p className="mb-4">
                TechOptyx embodies this approach, serving as a direct extension of Amr’s vision for creating capable, independent builders in a technology-driven world.
              </p>

              <div className="mt-6 flex items-center gap-4 justify-center">
                <a href="https://www.facebook.com/al.ammr.tech" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[#6c5ce7]/10 text-[#6c5ce7] hover:bg-[#6c5ce7] hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/al.ammr.tech?igsh=anJhaHRidmpiNHV3" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[#6c5ce7]/10 text-[#6c5ce7] hover:bg-[#6c5ce7] hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/al-ammr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[#6c5ce7]/10 text-[#6c5ce7] hover:bg-[#6c5ce7] hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@al.ammr.tech?_r=1&_t=ZS-95K32EpYxRx" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[#6c5ce7]/10 text-[#6c5ce7] hover:bg-[#6c5ce7] hover:text-white transition-colors" aria-label="TikTok">
                  <TikTokIcon className="w-5 h-5" />
                </a>
                <a href="https://x.com/Ammr_Suleiman?t=TX3PBhKjkGYf7lZC0sCU_w&s=09" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[#6c5ce7]/10 text-[#6c5ce7] hover:bg-[#6c5ce7] hover:text-white transition-colors" aria-label="X (Twitter)">
                  <XIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </motion.div>
  );
}
