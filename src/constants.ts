export interface Resource {
  title: string;
  url: string;
  type: 'yt' | 'doc' | 'cert' | 'tool' | 'free' | 'course';
}

export interface Task {
  id: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  deliverables: string[];
  sellingStrategy: {
    pricing: string;
    whereToFind: string[];
    pitch: string;
  };
}

export interface FreeResource {
  title: string;
  url: string;
  type: 'certification' | 'course' | 'guide' | 'tool';
  provider: string;
}

export interface FollowAlongProject {
  title: string;
  url: string;
  outcome: string;
  steps: string[];
}

export interface Phase {
  id: string;
  number: string;
  title: string;
  badge: string;
  weeks: string;
  objective: string;
  resources: Resource[];
  freeResources: FreeResource[];
  followAlongProjects: FollowAlongProject[];
  tools: { name: string; url: string }[];
  tasks: Task[];
  project: Project;
  color: string;
}

export const PHASES: Phase[] = [
  {
    id: "p0",
    number: "00",
    title: "DIGITAL & TECH FOUNDATIONS",
    badge: "Foundation",
    weeks: "WEEK 1",
    objective: "Understand how the internet, products, and digital systems actually work.",
    color: "text-sky-400",
    resources: [
      { title: "How the Internet Works - Full Course", url: "https://www.youtube.com/watch?v=UXMIxCYZu8o", type: "yt" },
      { title: "DNS Explained Tutorial", url: "https://www.youtube.com/watch?v=27r4BZBA_T8", type: "yt" },
      { title: "Frontend vs Backend vs Full Stack Explained", url: "https://www.youtube.com/watch?v=ysEN5RaKOlA", type: "yt" },
      { title: "How the Web Works (2024 Edition)", url: "https://www.youtube.com/watch?v=hJHvdBlSxug", type: "yt" },
      { title: "UI/UX Design Basics for Beginners", url: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU", type: "yt" },
      { title: "What Makes a Landing Page Convert", url: "https://www.youtube.com/watch?v=jFSNMKpkiLg", type: "yt" },
      { title: "Product Thinking for Beginners", url: "https://www.youtube.com/watch?v=l0UCgO1DHKQ", type: "yt" }
    ],
    freeResources: [
      { title: "Fundamentals of Digital Marketing", url: "https://skillshop.exceedlms.com/student/collection/654330-digital-marketing", type: "certification", provider: "Google" },
      { title: "Inbound Sales Certification", url: "https://academy.hubspot.com/courses/inbound-sales", type: "certification", provider: "HubSpot" }
    ],
    followAlongProjects: [
      {
        title: "Figma Landing Page Wireframe",
        url: "https://www.youtube.com/watch?v=jwMv_96WjXk",
        outcome: "A professional wireframe for a high-converting landing page.",
        steps: ["Define user flow", "Layout hero section", "Design feature grid", "Add CTA elements"]
      }
    ],
    tools: [
      { name: "Notion", url: "https://notion.so" },
      { name: "Figma", url: "https://figma.com" },
      { name: "Google Workspace", url: "https://workspace.google.com" }
    ],
    tasks: [
      { id: "p0-t1", label: "Set up personal knowledge base in Notion" },
      { id: "p0-t2", label: "Create 1 landing page wireframe in Figma" },
      { id: "p0-t3", label: "Complete Google Digital Garage lessons 1-5" }
    ],
    project: {
      title: "The Visionary Wireframe",
      description: "Design a high-converting landing page for a fictional AI product.",
      deliverables: ["1 Figma Wireframe", "Notion Product Spec"],
      sellingStrategy: {
        pricing: "₦30,000–₦80,000 ($20–$50)",
        whereToFind: ["Twitter/X", "LinkedIn", "Local Facebook groups", "Upwork/Fiverr"],
        pitch: "I noticed your business doesn't have a landing page. I design high-converting pages that turn visitors into customers. Can I show you a quick demo?"
      }
    }
  },
  {
    id: "p1",
    number: "01",
    title: "GENERATIVE AI + PROMPT ENGINEERING",
    badge: "AI Core",
    weeks: "WEEKS 2–3",
    objective: "Control AI outputs like a precision weapon.",
    color: "text-emerald-400",
    resources: [
      { title: "Prompt Engineering Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=_ZvnD73m40o", type: "yt" },
      { title: "Claude AI — Complete Tutorial & Prompting Guide", url: "https://www.youtube.com/watch?v=jC4v5AS4RIM", type: "yt" },
      { title: "AI Workflow Automation with Prompts", url: "https://www.youtube.com/watch?v=TFa539R09EQ", type: "yt" },
      { title: "Prompt Chaining Explained Step by Step", url: "https://www.youtube.com/watch?v=yzNG3NnF0YE", type: "yt" },
      { title: "ChatGPT Structured Output / JSON Mode Tutorial", url: "https://www.youtube.com/watch?v=ahnGLM-RC1Y", type: "yt" }
    ],
    freeResources: [
      { title: "Prompt Engineering for ChatGPT", url: "https://www.coursera.org/learn/prompt-engineering", type: "course", provider: "Vanderbilt University" },
      { title: "ChatGPT Prompt Engineering for Developers", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/", type: "certification", provider: "DeepLearning.AI" }
    ],
    followAlongProjects: [
      {
        title: "AI Content Engine with Claude",
        url: "https://www.youtube.com/watch?v=f-v2fV_u208",
        outcome: "A custom prompt-based system for automated marketing copy.",
        steps: ["Set up Claude API", "Design prompt chains", "Implement context injection", "Test output quality"]
      }
    ],
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Claude", url: "https://claude.ai" },
      { name: "Perplexity", url: "https://perplexity.ai" }
    ],
    tasks: [
      { id: "p1-t1", label: "Build an AI content generator using prompt chains" },
      { id: "p1-t2", label: "Create a personal prompt library in Notion" },
      { id: "p1-t3", label: "Complete DeepLearning.AI Prompt Engineering course" }
    ],
    project: {
      title: "AI Content Engine",
      description: "A structured prompt system that generates high-quality marketing copy.",
      deliverables: ["Prompt Library", "Content Workflow"],
      sellingStrategy: {
        pricing: "₦20,000–₦100,000 ($15–$65)",
        whereToFind: ["LinkedIn", "Upwork", "Indie Hackers"],
        pitch: "I build custom prompt libraries that automate 80% of your content creation while maintaining your brand voice."
      }
    }
  },
  {
    id: "p2",
    number: "02",
    title: "NO-CODE + WEBSITE BUILDING",
    badge: "Build",
    weeks: "WEEKS 4–6",
    objective: "Build fast, sellable websites without deep coding knowledge.",
    color: "text-amber-400",
    resources: [
      { title: "Webflow Full Course (Flux Academy)", url: "https://www.youtube.com/watch?v=E-yhBxTLkFQ", type: "yt" },
      { title: "Framer Website Builder Full Tutorial 2024", url: "https://www.youtube.com/watch?v=gRWnRkLF8gg", type: "yt" },
      { title: "WordPress Full Course 2024", url: "https://www.youtube.com/watch?v=kRez7tZm_jU", type: "yt" }
    ],
    freeResources: [
      { title: "Webflow 101 Certification", url: "https://university.webflow.com/courses/webflow-101", type: "certification", provider: "Webflow University" },
      { title: "Framer Masterclass (Free Tier)", url: "https://www.framer.com/academy/", type: "course", provider: "Framer Academy" }
    ],
    followAlongProjects: [
      {
        title: "Modern Portfolio with Framer",
        url: "https://www.youtube.com/watch?v=p7962S_F8Yg",
        outcome: "A live, responsive portfolio website with smooth animations.",
        steps: ["Import Figma design", "Set up CMS for projects", "Add scroll animations", "Deploy to custom domain"]
      }
    ],
    tools: [
      { name: "Webflow", url: "https://webflow.com" },
      { name: "Framer", url: "https://framer.com" },
      { name: "WordPress", url: "https://wordpress.org" }
    ],
    tasks: [
      { id: "p2-t1", label: "Build 2-3 websites using Webflow or Framer" },
      { id: "p2-t2", label: "Deploy a live portfolio landing page" },
      { id: "p2-t3", label: "Complete Webflow University core lessons" }
    ],
    project: {
      title: "Business Showcase",
      description: "A professional business website with animations and responsive design.",
      deliverables: ["Live Website URL", "Design Assets"],
      sellingStrategy: {
        pricing: "₦80,000–₦300,000 ($50–$200)",
        whereToFind: ["Local Directories", "Instagram DMs", "LinkedIn"],
        pitch: "I specialize in building fast, beautiful websites for businesses. I noticed your current site could use a refresh — can I send you a free mockup?"
      }
    }
  },
  {
    id: "p2-5",
    number: "2.5",
    title: "VIBE CODING + AI DESIGN",
    badge: "AI-Powered Build",
    weeks: "WEEKS 6.5–7.5",
    objective: "Build stunning websites and 3D experiences using AI tools.",
    color: "text-teal-400",
    resources: [
      { title: "Vibe Coding Explained (Fireship)", url: "https://www.youtube.com/watch?v=1pWiOeQnE0M", type: "yt" },
      { title: "Google Stitch AI Tutorial", url: "https://www.youtube.com/watch?v=3AnaLk1s8tE", type: "yt" },
      { title: "Google Anti Gravity Tutorial", url: "https://www.youtube.com/watch?v=8I3NTE4cn5s", type: "yt" }
    ],
    freeResources: [
      { title: "v0 by Vercel Documentation", url: "https://v0.dev/docs", type: "guide", provider: "Vercel" },
      { title: "Generative AI for Everyone", url: "https://www.coursera.org/learn/generative-ai-for-everyone", type: "course", provider: "DeepLearning.AI" }
    ],
    followAlongProjects: [
      {
        title: "3D Interactive Site with Spline",
        url: "https://www.youtube.com/watch?v=H7p8K4v-yS8",
        outcome: "An immersive 3D landing page built with AI-assisted design.",
        steps: ["Model 3D assets in Spline", "Add mouse-follow interactions", "Export to web code", "Integrate with Framer/Webflow"]
      }
    ],
    tools: [
      { name: "Google Stitch", url: "https://stitch.withgoogle.com" },
      { name: "v0 by Vercel", url: "https://v0.dev" },
      { name: "Lovable", url: "https://lovable.dev" }
    ],
    tasks: [
      { id: "p25-t1", label: "Build a website using Google Stitch" },
      { id: "p25-t2", label: "Create a landing page with Google Anti Gravity" },
      { id: "p25-t3", label: "Generate 3D interactive elements with AI" }
    ],
    project: {
      title: "The Vibe Portfolio",
      description: "An AI-generated, high-performance portfolio site.",
      deliverables: ["Vibe-coded Website", "AI Design Assets"],
      sellingStrategy: {
        pricing: "₦50,000–₦150,000 ($30–$100)",
        whereToFind: ["Twitter/X", "Instagram", "TikTok"],
        pitch: "Traditional agencies take weeks. I use AI to deliver premium quality in days — at half the cost."
      }
    }
  },
  {
    id: "p3",
    number: "03",
    title: "AI INTEGRATION",
    badge: "AI Integration",
    weeks: "WEEKS 7–9",
    objective: "Turn websites into intelligent, revenue-generating systems.",
    color: "text-orange-400",
    resources: [
      { title: "How to Add an AI Chatbot to ANY Website", url: "https://www.youtube.com/watch?v=4rcMHvCOSMU", type: "yt" },
      { title: "OpenAI API Tutorial", url: "https://www.youtube.com/watch?v=uRQH2CFvedY", type: "yt" },
      { title: "Build AI Chatbot for Website", url: "https://www.youtube.com/watch?v=UTs4uFLRyM8", type: "yt" }
    ],
    freeResources: [
      { title: "Voiceflow Academy", url: "https://www.voiceflow.com/academy", type: "course", provider: "Voiceflow" },
      { title: "Botpress Documentation & Guides", url: "https://botpress.com/docs", type: "guide", provider: "Botpress" }
    ],
    followAlongProjects: [
      {
        title: "AI Chatbot for Business",
        url: "https://www.youtube.com/watch?v=mY7X5vL5K_0",
        outcome: "A custom-trained AI assistant integrated into a live website.",
        steps: ["Train model on business data", "Design conversation flow", "Connect to OpenAI API", "Embed on website"]
      }
    ],
    tools: [
      { name: "n8n", url: "https://n8n.io" },
      { name: "Make", url: "https://make.com" },
      { name: "Webflow", url: "https://webflow.com" }
    ],
    tasks: [
      { id: "p3-t1", label: "Embed an AI chatbot in a live website" },
      { id: "p3-t2", label: "Set up lead capture to email automation" },
      { id: "p3-t3", label: "Connect chatbot to a simple knowledge base" }
    ],
    project: {
      title: "Intelligent Assistant",
      description: "A website with a custom-trained AI chatbot for lead gen.",
      deliverables: ["Live AI Website", "Automation Workflow"],
      sellingStrategy: {
        pricing: "₦150,000–₦500,000 ($100–$350)",
        whereToFind: ["Clinics", "E-commerce", "Real Estate"],
        pitch: "Your website works while you sleep. I add an AI assistant that answers questions and books appointments 24/7."
      }
    }
  },
  {
    id: "p4",
    number: "04",
    title: "AUTOMATION SYSTEMS",
    badge: "Automation",
    weeks: "WEEKS 10–13",
    objective: "Build systems businesses will pay recurring fees for.",
    color: "text-rose-500",
    resources: [
      { title: "n8n Full Tutorial (NetworkChuck)", url: "https://www.youtube.com/watch?v=1MwSoB0gnM4", type: "yt" },
      { title: "n8n Business Automation Examples", url: "https://www.youtube.com/watch?v=3tHWA8ULj3I", type: "yt" },
      { title: "WhatsApp Business API Automation", url: "https://www.youtube.com/watch?v=o_7Cs1RZzEE", type: "yt" }
    ],
    freeResources: [
      { title: "n8n Beginner Course", url: "https://academy.n8n.io/courses/beginner", type: "certification", provider: "n8n Academy" },
      { title: "Make.com Foundation Certificate", url: "https://academy.make.com/", type: "certification", provider: "Make Academy" }
    ],
    followAlongProjects: [
      {
        title: "Automated Lead Gen System",
        url: "https://www.youtube.com/watch?v=7X9N_o7Y8_4",
        outcome: "A fully automated workflow connecting forms, CRM, and email.",
        steps: ["Set up n8n trigger", "Map data to Airtable", "Configure email alerts", "Test end-to-end flow"]
      }
    ],
    tools: [
      { name: "n8n", url: "https://n8n.io" },
      { name: "Airtable", url: "https://airtable.com" },
      { name: "Make", url: "https://make.com" }
    ],
    tasks: [
      { id: "p4-t1", label: "Build a lead gen automation (Form -> CRM -> Email)" },
      { id: "p4-t2", label: "Set up a WhatsApp business notification system" },
      { id: "p4-t3", label: "Complete n8n Academy certification" }
    ],
    project: {
      title: "The Auto-Pilot Business",
      description: "A fully automated lead management system.",
      deliverables: ["n8n Workflows", "Airtable CRM Setup"],
      sellingStrategy: {
        pricing: "₦100k–₦300k setup + ₦30k–₦100k/mo maintenance",
        whereToFind: ["Agencies", "E-commerce", "Coaches"],
        pitch: "I build automation systems that run 24/7, saving you 15+ hours a week on manual tasks."
      }
    }
  },
  {
    id: "p5",
    number: "05",
    title: "AGENTIC AI SYSTEMS",
    badge: "Agentic AI",
    weeks: "WEEKS 14–17",
    objective: "Build AI that thinks, plans, and acts — the premium tier.",
    color: "text-indigo-400",
    resources: [
      { title: "AI Agents Full Tutorial", url: "https://www.youtube.com/watch?v=F8NKVhkZZWI", type: "yt" },
      { title: "LangChain Full Course", url: "https://www.youtube.com/watch?v=aywZrzNaKjs", type: "yt" },
      { title: "Build Autonomous AI Agent", url: "https://www.youtube.com/watch?v=DWUdGNRZfw8", type: "yt" }
    ],
    freeResources: [
      { title: "LangChain for LLM Application Development", url: "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/", type: "course", provider: "DeepLearning.AI" },
      { title: "Building Agentic RAG with LlamaIndex", url: "https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/", type: "course", provider: "DeepLearning.AI" }
    ],
    followAlongProjects: [
      {
        title: "Multi-Agent Research System",
        url: "https://www.youtube.com/watch?v=pBBe1pk8mSg",
        outcome: "An autonomous AI agent system that performs complex research tasks.",
        steps: ["Define agent roles", "Set up tool access", "Implement memory management", "Deploy as API"]
      }
    ],
    tools: [
      { name: "Claude Code", url: "https://claude.ai/claude-code" },
      { name: "n8n", url: "https://n8n.io" }
    ],
    tasks: [
      { id: "p5-t1", label: "Build an AI sales agent that books calls" },
      { id: "p5-t2", label: "Create an AI research assistant with memory" },
      { id: "p5-t3", label: "Complete DeepLearning.AI LangChain course" }
    ],
    project: {
      title: "Autonomous Sales Rep",
      description: "An AI agent that handles discovery calls and scheduling.",
      deliverables: ["Agent Workflow", "Tool Integrations"],
      sellingStrategy: {
        pricing: "₦300,000–₦1,500,000 ($200–$1,000+)",
        whereToFind: ["Tech Startups", "Enterprise", "Agencies"],
        pitch: "I build AI agents that think, plan, and act. Imagine a virtual employee that works 24/7 at a fraction of the cost."
      }
    }
  },
  {
    id: "p6",
    number: "06",
    title: "GIT & DEPLOYMENT",
    badge: "Dev Basics",
    weeks: "WEEKS 18–19",
    objective: "Host your work. Version your code. Look like a pro.",
    color: "text-slate-400",
    resources: [
      { title: "Git & GitHub Full Course", url: "https://www.youtube.com/watch?v=RGOj5yH7evk", type: "yt" },
      { title: "How to Deploy to GitHub Pages", url: "https://www.youtube.com/watch?v=9p2d-CuVlgc", type: "yt" },
      { title: "Git Workflow Explained", url: "https://www.youtube.com/watch?v=mxfMdlHnOBM", type: "yt" }
    ],
    freeResources: [
      { title: "Introduction to GitHub", url: "https://skills.github.com/", type: "certification", provider: "GitHub Skills" },
      { title: "Version Control with Git", url: "https://www.coursera.org/learn/version-control-with-git", type: "course", provider: "Atlassian" }
    ],
    followAlongProjects: [
      {
        title: "CI/CD Pipeline for Web Apps",
        url: "https://www.youtube.com/watch?v=scEDHsr3APg",
        outcome: "Automated deployment pipeline using GitHub Actions and Vercel.",
        steps: ["Initialize Git repo", "Configure GitHub Actions", "Connect Vercel account", "Push and verify deploy"]
      }
    ],
    tools: [
      { name: "GitHub", url: "https://github.com" },
      { name: "Vercel", url: "https://vercel.com" }
    ],
    tasks: [
      { id: "p6-t1", label: "Host all previous projects on GitHub" },
      { id: "p6-t2", label: "Deploy one project live on Vercel" },
      { id: "p6-t3", label: "Complete GitHub Skills 'Intro to GitHub'" }
    ],
    project: {
      title: "The Live Portfolio",
      description: "A centralized GitHub profile showcasing all your builds.",
      deliverables: ["GitHub Profile", "Live Vercel Link"],
      sellingStrategy: {
        pricing: "Priceless (Your Resume)",
        whereToFind: ["Recruiters", "Clients", "Twitter"],
        pitch: "My portfolio isn't just a PDF. It's live code, versioned and deployed, proving I can ship products."
      }
    }
  },
  {
    id: "p7",
    number: "07",
    title: "HTML, CSS & JAVASCRIPT",
    badge: "Code Foundations",
    weeks: "WEEKS 20–24",
    objective: "Own your code. Build custom components no-code tools can't.",
    color: "text-yellow-400",
    resources: [
      { title: "HTML Full Course", url: "https://www.youtube.com/watch?v=mU6anWqZJcc", type: "yt" },
      { title: "CSS Tutorial Full Course", url: "https://www.youtube.com/watch?v=ieTHC78giGQ", type: "yt" },
      { title: "JavaScript Full Course", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg", type: "yt" }
    ],
    freeResources: [
      { title: "Responsive Web Design Certification", url: "https://www.freecodecamp.org/learn/responsive-web-design/", type: "certification", provider: "freeCodeCamp" },
      { title: "JavaScript Algorithms and Data Structures", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/", type: "certification", provider: "freeCodeCamp" }
    ],
    followAlongProjects: [
      {
        title: "Responsive Site from Scratch",
        url: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
        outcome: "A modern, fully responsive website built with pure HTML, CSS, and JS.",
        steps: ["Write semantic HTML", "Build mobile-first CSS", "Add JS interactivity", "Optimize for performance"]
      }
    ],
    tools: [
      { name: "VS Code", url: "https://code.visualstudio.com" },
      { name: "MDN Docs", url: "https://developer.mozilla.org" }
    ],
    tasks: [
      { id: "p7-t1", label: "Build an interactive website from scratch" },
      { id: "p7-t2", label: "Create 5 custom UI components (Modal, Tabs, etc)" },
      { id: "p7-t3", label: "Complete freeCodeCamp Responsive Web Design cert" }
    ],
    project: {
      title: "Custom Component Library",
      description: "A set of hand-coded UI elements for your future apps.",
      deliverables: ["GitHub Repo", "Interactive Demo"],
      sellingStrategy: {
        pricing: "₦150,000–₦600,000 ($100–$400)",
        whereToFind: ["Startups", "Agencies", "Indie Hackers"],
        pitch: "I build custom web experiences from scratch — no templates, no limitations. Faster, cleaner, and unique."
      }
    }
  },
  {
    id: "p8",
    number: "08",
    title: "3D IMMERSIVE WEB",
    badge: "Premium",
    weeks: "WEEKS 25–28",
    objective: "Build premium-tier websites that command $2,000+ price tags.",
    color: "text-fuchsia-400",
    resources: [
      { title: "Three.js Beginner Tutorial", url: "https://www.youtube.com/watch?v=Q7AOvWpIVHU", type: "yt" },
      { title: "Spline 3D Website Tutorial", url: "https://www.youtube.com/watch?v=3yw2UX7KJJo", type: "yt" },
      { title: "GSAP Animation Tutorial", url: "https://www.youtube.com/watch?v=T6PhV4JAsaY", type: "yt" }
    ],
    freeResources: [
      { title: "Three.js Journey (Free Lessons)", url: "https://threejs-journey.com/", type: "course", provider: "Bruno Simon" },
      { title: "Spline Community Tutorials", url: "https://docs.spline.design/", type: "guide", provider: "Spline" }
    ],
    followAlongProjects: [
      {
        title: "3D Scrolling Experience",
        url: "https://www.youtube.com/watch?v=vM8649vS5S4",
        outcome: "A premium 3D website with GSAP-powered scroll animations.",
        steps: ["Set up Three.js scene", "Import 3D models", "Configure GSAP timeline", "Bind animations to scroll"]
      }
    ],
    tools: [
      { name: "Spline", url: "https://spline.design" },
      { name: "Three.js", url: "https://threejs.org" }
    ],
    tasks: [
      { id: "p8-t1", label: "Create a 3D animated landing page" },
      { id: "p8-t2", label: "Build an interactive 3D product showcase" },
      { id: "p8-t3", label: "Implement GSAP scroll animations" }
    ],
    project: {
      title: "The Immersive Experience",
      description: "A high-end website with 3D interactions and smooth animations.",
      deliverables: ["Live 3D Website", "Spline Scene"],
      sellingStrategy: {
        pricing: "₦500,000–₦3,000,000+ ($350–$2,000+)",
        whereToFind: ["Luxury Brands", "Tech Startups", "Agencies"],
        pitch: "Most websites are forgettable. I build immersive 3D experiences that people remember and share."
      }
    }
  },
  {
    id: "p9",
    number: "09",
    title: "BACKEND + FULL STACK AI APPS",
    badge: "Full Stack",
    weeks: "WEEKS 29–36",
    objective: "Build complete apps with databases, auth, and AI — the SaaS foundation.",
    color: "text-blue-400",
    resources: [
      { title: "Node.js Full Course", url: "https://www.youtube.com/watch?v=ENrzD9HAZK4", type: "yt" },
      { title: "Supabase Full Tutorial", url: "https://www.youtube.com/watch?v=ydz7Dj5QHKY", type: "yt" },
      { title: "Next.js Full Course 2024", url: "https://www.youtube.com/watch?v=pTjx5cBkHJ8", type: "yt" }
    ],
    freeResources: [
      { title: "Back End Development and APIs", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/", type: "certification", provider: "freeCodeCamp" },
      { title: "Next.js Official Foundations Course", url: "https://nextjs.org/learn", type: "course", provider: "Vercel" }
    ],
    followAlongProjects: [
      {
        title: "Full-Stack AI SaaS MVP",
        url: "https://www.youtube.com/watch?v=wm5gMKuwSYk",
        outcome: "A functional AI application with authentication and database.",
        steps: ["Set up Next.js project", "Configure Supabase Auth", "Integrate OpenAI API", "Build user dashboard"]
      }
    ],
    tools: [
      { name: "Node.js", url: "https://nodejs.org" },
      { name: "Supabase", url: "https://supabase.com" },
      { name: "Next.js", url: "https://nextjs.org" }
    ],
    tasks: [
      { id: "p9-t1", label: "Build a full stack AI app with auth + database" },
      { id: "p9-t2", label: "Create a user dashboard with AI features" },
      { id: "p9-t3", label: "Complete freeCodeCamp Back End cert" }
    ],
    project: {
      title: "The AI SaaS MVP",
      description: "A functional web application with user accounts and AI logic.",
      deliverables: ["Live App URL", "GitHub Repo"],
      sellingStrategy: {
        pricing: "₦500,000+ ($350+)",
        whereToFind: ["Founders", "Small Businesses", "Product Hunt"],
        pitch: "I build fully functional AI applications that solve real business problems, from database to deployment."
      }
    }
  },
  {
    id: "p10",
    number: "10",
    title: "MICRO SAAS & SAAS",
    badge: "Product",
    weeks: "WEEKS 37–52",
    objective: "Build recurring revenue machines. Your first real software product.",
    color: "text-orange-500",
    resources: [
      { title: "How to Build a Micro SaaS in 2024", url: "https://www.youtube.com/watch?v=Z3d8Qn9THIE", type: "yt" },
      { title: "SaaS MVP Tutorial", url: "https://www.youtube.com/watch?v=yMCnAyZiJtk", type: "yt" },
      { title: "Stripe Subscription Tutorial", url: "https://www.youtube.com/watch?v=6mnu-nNAP8U", type: "yt" }
    ],
    freeResources: [
      { title: "Startup School", url: "https://www.startupschool.org/", type: "course", provider: "Y Combinator" },
      { title: "Stripe Docs: Accept Payments", url: "https://docs.stripe.com/payments", type: "guide", provider: "Stripe" }
    ],
    followAlongProjects: [
      {
        title: "Micro SaaS with Stripe",
        url: "https://www.youtube.com/watch?v=M6O7Z2W2S_Y",
        outcome: "A live software product with recurring subscription billing.",
        steps: ["Set up Stripe products", "Implement checkout flow", "Handle webhooks", "Manage user subscriptions"]
      }
    ],
    tools: [
      { name: "Stripe", url: "https://stripe.com" },
      { name: "Paystack", url: "https://paystack.com" },
      { name: "Product Hunt", url: "https://producthunt.com" }
    ],
    tasks: [
      { id: "p10-t1", label: "Build a MicroSaaS with subscription billing" },
      { id: "p10-t2", label: "Launch your product on Product Hunt" },
      { id: "p10-t3", label: "Get your first 5 paying customers" }
    ],
    project: {
      title: "The Revenue Machine",
      description: "A live software product generating recurring revenue.",
      deliverables: ["Live SaaS Product", "Stripe/Paystack Dashboard"],
      sellingStrategy: {
        pricing: "₦5k–₦50k/mo ($3–$35) per user",
        whereToFind: ["Product Hunt", "Twitter", "Indie Hackers"],
        pitch: "I build tools that solve [Problem X] for [Audience Y]. We're already helping users save [Z] hours/week."
      }
    }
  }
];
