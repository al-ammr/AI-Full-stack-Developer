const fs = require('fs');

const phasesData = [
  {
    id: "p7", number: "07", title: "3D WEB DEVELOPMENT (NO CODE)", badge: "Premium Web", weeks: "WEEKS 20-22", objective: "Build premium-tier websites with 3D elements.", color: "text-fuchsia-400",
    resources: [
      { title: "Spline 3D Website Tutorial", url: "https://youtu.be/3yw2UX7KJJo?si=1a2b3c4d5e6f7g8h", type: "yt" },
      { title: "Webflow + Spline Integration", url: "https://youtu.be/Q7AOvWpIVHU?si=9z2s1d3f4g5h6j7k", type: "yt" }
    ],
    freeResources: [
      { title: "Spline Community Tutorials", url: "https://docs.spline.design", type: "guide", provider: "Spline" }
    ],
    followAlongProjects: [
      { title: "3D Interactive Landing Page", url: "https://youtu.be/vM8649vS5S4?si=2l3k4j5h6g7f8d9s", outcome: "A premium 3D website.", steps: ["Model in Spline", "Export", "Integrate in Webflow", "Add interactions"] }
    ],
    tools: [
      { name: "Spline", url: "https://spline.design" },
      { name: "Webflow", url: "https://webflow.com" }
    ],
    tasks: [
      { id: "p7-t1", label: "Create a 3D animated landing page" },
      { id: "p7-t2", label: "Build an interactive 3D product showcase" }
    ],
    project: {
      title: "Immersive 3D Web Experience",
      description: "Design high-end websites with interactive 3D elements.",
      deliverables: ["Live 3D Website", "Spline Scene"],
      sellingStrategy: {
        pricing: "200,000 - 800,000 NGN ($150 - $550)",
        whereToFind: ["Luxury Brands", "Tech Startups", "Creative Agencies"],
        pitch: "I build immersive 3D web experiences that captivate users and elevate brand perception, moving beyond standard flat designs."
      }
    }
  },
  {
    id: "p8", number: "08", title: "HTML, CSS, JS", badge: "Code Foundations", weeks: "WEEKS 23-26", objective: "Own your code. Build custom components.", color: "text-yellow-400",
    resources: [
      { title: "HTML Full Course", url: "https://youtu.be/mU6anWqZJcc?si=1r6F1k0H7r8y6x5s", type: "yt" },
      { title: "CSS Tutorial Full Course", url: "https://youtu.be/ieTHC78giGQ?si=9z2s1d3f4g5h6j7k", type: "yt" },
      { title: "JavaScript Full Course", url: "https://youtu.be/PkZNo7MFNFg?si=2l3k4j5h6g7f8d9s", type: "yt" }
    ],
    freeResources: [
      { title: "Responsive Web Design", url: "https://www.freecodecamp.org/learn/responsive-web-design", type: "certification", provider: "freeCodeCamp" },
      { title: "JavaScript Algorithms", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8", type: "certification", provider: "freeCodeCamp" }
    ],
    followAlongProjects: [
      { title: "Responsive Site from Scratch", url: "https://youtu.be/pQN-pnXPaVg?si=1a2b3c4d5e6f7g8h", outcome: "A modern, fully responsive website.", steps: ["Write HTML", "Build CSS", "Add JS", "Optimize"] }
    ],
    tools: [
      { name: "VS Code", url: "https://code.visualstudio.com" },
      { name: "MDN Docs", url: "https://developer.mozilla.org" }
    ],
    tasks: [
      { id: "p8-t1", label: "Build an interactive website from scratch" },
      { id: "p8-t2", label: "Create 5 custom UI components" },
      { id: "p8-t3", label: "Complete freeCodeCamp Responsive Web Design" }
    ],
    project: {
      title: "Custom Web Development",
      description: "Develop custom websites and components from scratch.",
      deliverables: ["GitHub Repo", "Interactive Demo"],
      sellingStrategy: {
        pricing: "150,000 - 600,000 NGN ($100 - $400)",
        whereToFind: ["Startups", "Agencies", "Indie Hackers"],
        pitch: "I build custom web experiences from scratch — no templates, no limitations. Faster, cleaner, and unique."
      }
    }
  },
  {
    id: "p8-5", number: "8.5", title: "3D WEB DEVELOPMENT (CODE)", badge: "Advanced Web", weeks: "WEEKS 27-29", objective: "Build advanced 3D experiences with code.", color: "text-pink-500",
    resources: [
      { title: "Three.js Beginner Tutorial", url: "https://youtu.be/Q7AOvWpIVHU?si=1r6F1k0H7r8y6x5s", type: "yt" },
      { title: "GSAP Animation Tutorial", url: "https://youtu.be/T6PhV4JAsaY?si=9z2s1d3f4g5h6j7k", type: "yt" }
    ],
    freeResources: [
      { title: "Three.js Journey (Free)", url: "https://threejs-journey.com", type: "course", provider: "Bruno Simon" }
    ],
    followAlongProjects: [
      { title: "3D Scrolling Experience", url: "https://youtu.be/vM8649vS5S4?si=2l3k4j5h6g7f8d9s", outcome: "A premium 3D website with GSAP.", steps: ["Set up scene", "Import models", "Config GSAP", "Bind animations"] }
    ],
    tools: [
      { name: "Three.js", url: "https://threejs.org" },
      { name: "GSAP", url: "https://gsap.com" }
    ],
    tasks: [
      { id: "p85-t1", label: "Create a Three.js scene" },
      { id: "p85-t2", label: "Implement GSAP scroll animations" }
    ],
    project: {
      title: "Coded 3D Web Experience",
      description: "Develop highly customized 3D web experiences using code.",
      deliverables: ["Live 3D Website", "Source Code"],
      sellingStrategy: {
        pricing: "500,000 - 3,000,000+ NGN ($350 - $2,000+)",
        whereToFind: ["Luxury Brands", "Tech Startups", "Agencies"],
        pitch: "I develop highly customized 3D web experiences using code, allowing for unparalleled interactivity and performance."
      }
    }
  },
  {
    id: "p9", number: "09", title: "BACKEND DEVELOPMENT (CODE)", badge: "Backend", weeks: "WEEKS 30-34", objective: "Build complete apps with databases and auth.", color: "text-blue-400",
    resources: [
      { title: "Node.js Full Course", url: "https://youtu.be/ENrzD9HAZK4?si=1r6F1k0H7r8y6x5s", type: "yt" },
      { title: "Supabase Full Tutorial", url: "https://youtu.be/ydz7Dj5QHKY?si=9z2s1d3f4g5h6j7k", type: "yt" },
      { title: "Next.js Full Course", url: "https://youtu.be/pTjx5cBkHJ8?si=2l3k4j5h6g7f8d9s", type: "yt" }
    ],
    freeResources: [
      { title: "Back End Development", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis", type: "certification", provider: "freeCodeCamp" }
    ],
    followAlongProjects: [
      { title: "Full-Stack MVP", url: "https://youtu.be/wm5gMKuwSYk?si=1a2b3c4d5e6f7g8h", outcome: "A functional application with auth and DB.", steps: ["Set up Next.js", "Config Supabase", "Build API", "Create UI"] }
    ],
    tools: [
      { name: "Node.js", url: "https://nodejs.org" },
      { name: "Supabase", url: "https://supabase.com" },
      { name: "Next.js", url: "https://nextjs.org" }
    ],
    tasks: [
      { id: "p9-t1", label: "Build a full stack app with auth + database" },
      { id: "p9-t2", label: "Create a user dashboard" },
      { id: "p9-t3", label: "Complete freeCodeCamp Back End cert" }
    ],
    project: {
      title: "Full-Stack Web Application",
      description: "Develop robust backend systems and integrate them with frontend interfaces.",
      deliverables: ["Live App URL", "GitHub Repo"],
      sellingStrategy: {
        pricing: "500,000+ NGN ($350+)",
        whereToFind: ["Founders", "Small Businesses", "Product Hunt"],
        pitch: "I build fully functional web applications that solve real business problems, from database architecture to frontend deployment."
      }
    }
  }
];

fs.writeFileSync('phases_part3.json', JSON.stringify(phasesData, null, 2));
