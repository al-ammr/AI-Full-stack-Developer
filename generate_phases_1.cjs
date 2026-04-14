const fs = require('fs');

const phasesData = [
  {
    id: "p0", number: "00", title: "DIGITAL FUNDAMENTALS", badge: "Foundation", weeks: "WEEK 1", objective: "Google Workspace, Developers Environments", color: "text-sky-400",
    resources: [
      { title: "Google Workspace Fundamentals", url: "https://youtu.be/7YE7jX1Xg7g?si=EKcYrft0uIFcXPIC", type: "yt" },
      { title: "Developer Environments Setup", url: "https://youtu.be/IWEKiak0WVU?si=ysMrOtyQn40Zptst", type: "yt" },
      { title: "How the Internet Works", url: "https://youtu.be/zN8YNNHcaZc?si=1-fJHCxjXUkz5ZF6", type: "yt" },
      { title: "DNS Explained", url: "https://youtu.be/nyH0nYhMW9M?si=x2mm6ZK0GhWImV50", type: "yt" },
      { title: "Frontend vs Backend vs Full Stack", url: "https://youtu.be/Lq6BJag6Zs4?si=6r29IN_peAObytI8", type: "yt" },
      { title: "How Websites Work (Behind the Scenes)", url: "https://youtu.be/-Hh9DpgULHU?si=KnRh9s5t8m06Ki7R", type: "yt" },
      { title: "UI/UX Design Basics", url: "https://youtu.be/kbZejnPxYLM?si=68Fmxz84p9s4MUD-", type: "yt" },
      { title: "What Makes a Landing Page Convert", url: "https://youtu.be/az1Zh-FNSno?si=-hRF6CpXNRF10ciV", type: "yt" },
      { title: "Product Thinking for Beginners", url: "https://youtu.be/Tk-EI2yYT3A?si=0S0thY1E_kY7V-rh", type: "yt" }
    ],
    freeResources: [
      { title: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage", type: "certification", provider: "Google" },
      { title: "Google Cloud Skills Boost", url: "https://www.cloudskillsboost.google", type: "course", provider: "Google" }
    ],
    followAlongProjects: [
      { title: "Landing Page Wireframe", url: "https://youtu.be/c1EW8Ucj6sQ?si=_1uXMZ44ud9cK0dY", outcome: "A professional wireframe for a high-converting landing page.", steps: ["Define user flow", "Layout hero section", "Design feature grid", "Add CTA elements"] }
    ],
    tools: [
      { name: "Notion", url: "https://www.notion.so" },
      { name: "Figma", url: "https://www.figma.com" },
      { name: "Google Workspace", url: "https://support.google.com/a/users" }
    ],
    tasks: [
      { id: "p0-t1", label: "1 landing page wireframe in Figma" },
      { id: "p0-t2", label: "Personal knowledge base in Notion (set up)" },
      { id: "p0-t3", label: "Google Digital Garage – lesson 1–5 done" }
    ],
    project: {
      title: "Digital Ecosystem Setup",
      description: "Design and structure pages intentionally built to guide visitors toward a specific action.",
      deliverables: ["Landing page wireframe", "Digital system setup"],
      sellingStrategy: {
        pricing: "30,000 - 80,000 NGN ($20 - $50)",
        whereToFind: ["Local SMEs", "Personal brands and coaches", "Startup landing pages", "LinkedIn, Twitter/X, Upwork, Fiverr"],
        pitch: "I design and structure pages that are intentionally built to guide visitors toward a specific action. I also help businesses set up foundational digital systems such as workspace organization and internal knowledge management."
      }
    }
  },
  {
    id: "p1", number: "01", title: "GENERATIVE AI AND PROMPT ENGINEERING", badge: "AI Core", weeks: "WEEKS 2-3", objective: "Language Models and use cases too, AI family ecosystem", color: "text-emerald-400",
    resources: [
      { title: "Language Models & Use Cases", url: "https://youtu.be/5sLYAQS9sWQ?si=YctP0Gf5eLF55xvi", type: "yt" },
      { title: "AI Family Ecosystem", url: "https://youtu.be/DsKZpgoy830?si=VNMTYxZiqyBc_lFh", type: "yt" },
      { title: "Prompt Engineering Full Course", url: "https://youtu.be/p09yRj47kNM?si=8N241Ad2lTVW1PT8", type: "yt" },
      { title: "Claude AI - Complete Tutorial & Prompting Guide", url: "https://youtu.be/rRrBbyv3ChM?si=har1nzTGcu92ftSs", type: "yt" },
      { title: "AI Workflow Automations", url: "https://youtu.be/1uCE0uoKXL8?si=BYlpme8UhjFL6Wep", type: "yt" },
      { title: "Prompt Chaining Explained", url: "https://youtu.be/lGdiKtCzhRc?si=Be0TZKVuEmUubwDw", type: "yt" },
      { title: "ChatGPT Structured Output / JSON Mode", url: "https://youtu.be/XDfhwOZHYYs?si=S9Um_mTCoKOeRoa", type: "yt" },
      { title: "AI Agents vs Generative AI", url: "https://youtu.be/O2gerCxEXvc?si=TFHTVkQ6mOWL9TJ", type: "yt" }
    ],
    freeResources: [
      { title: "Anthropic Prompt Engineering Guide", url: "https://docs.anthropic.com", type: "guide", provider: "Anthropic" },
      { title: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering", type: "guide", provider: "OpenAI" },
      { title: "ChatGPT Prompt Engineering for Developers", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers", type: "course", provider: "DeepLearning.AI" }
    ],
    followAlongProjects: [
      { title: "AI Content Engine", url: "https://youtu.be/zkXonmqIBFg?si=4bi5hpsr3zKFYoC", outcome: "A custom prompt-based system for automated marketing copy.", steps: ["Set up API", "Design prompt chains", "Implement context injection", "Test output quality"] }
    ],
    tools: [
      { name: "Claude", url: "https://claude.ai" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Perplexity", url: "https://perplexity.ai" }
    ],
    tasks: [
      { id: "p1-t1", label: "AI content generator (Claude + prompt chain)" },
      { id: "p1-t2", label: "AI research assistant (Claude Code project)" },
      { id: "p1-t3", label: "DeepLearning.AI Prompt Engineering certificate" },
      { id: "p1-t4", label: "Personal 'prompt library' doc in Notion" }
    ],
    project: {
      title: "AI-Driven Workflows",
      description: "Design AI-driven workflows and prompt systems that allow businesses to automate processes.",
      deliverables: ["AI content generator", "AI research assistant"],
      sellingStrategy: {
        pricing: "20,000 - 100,000 NGN ($15 - $65)",
        whereToFind: ["Marketing teams", "Content agencies", "Founders and startups", "LinkedIn, Upwork, Indie Hackers, Gumroad"],
        pitch: "I design AI-driven workflows and prompt systems that allow businesses to automate processes in a structured and repeatable way. This includes building content generation systems, research assistants, structured output pipelines, and internal knowledge tools."
      }
    }
  },
  {
    id: "p2", number: "02", title: "NO-CODE WEB DEVELOPMENT", badge: "Build", weeks: "WEEKS 4-6", objective: "Build high-quality, responsive, and conversion-focused websites.", color: "text-amber-400",
    resources: [
      { title: "Webflow Full Course", url: "https://youtube.com/playlist?list=PLXC_gcsKLD6nseaESleQemeJn6SG0-Xbn&si=m3ah491WldZVEr5s", type: "yt" },
      { title: "Framer Website Builder Full Tutorial", url: "https://youtu.be/1w6HlurOqjw?si=Usnsa8_PMxT05Flo", type: "yt" },
      { title: "WordPress Full Course", url: "https://youtu.be/R4v_7hh4Yys?si=493bJINXH1iQjazv", type: "yt" },
      { title: "Build with Elementor", url: "https://youtu.be/3YG3XLmBX4A?si=5zwDh9PSs65ll9Al", type: "yt" },
      { title: "Mobile Responsive Web Design", url: "https://youtu.be/m9uXR4xt95w?si=cmqfMQG1RGWGyBgrm", type: "yt" }
    ],
    freeResources: [
      { title: "Webflow Expert Certification", url: "https://university.webflow.com/certifications", type: "certification", provider: "Webflow" },
      { title: "WordPress Learn", url: "https://learn.wordpress.org", type: "course", provider: "WordPress" },
      { title: "Google UX Design Certificate", url: "https://www.coursera.org/professional-certificates/google-ux-design", type: "certification", provider: "Google" }
    ],
    followAlongProjects: [
      { title: "Modern Portfolio", url: "https://youtu.be/JnwATqjYohl?si=okSn3NTmerC2ogsm", outcome: "A live, responsive portfolio website.", steps: ["Import design", "Set up CMS", "Add animations", "Deploy"] }
    ],
    tools: [
      { name: "Webflow", url: "https://webflow.com" },
      { name: "Framer", url: "https://framer.com" },
      { name: "WordPress", url: "https://wordpress.org" }
    ],
    tasks: [
      { id: "p2-t1", label: "2-3 websites (Webflow + Framer)" },
      { id: "p2-t2", label: "1 portfolio-ready landing page (live URL)" },
      { id: "p2-t3", label: "Webflow University core lessons done" },
      { id: "p2-t4", label: "First freelance pitch ready" }
    ],
    project: {
      title: "No-Code Websites",
      description: "Build high-quality, responsive, and conversion-focused websites using modern no-code tools.",
      deliverables: ["Live Websites", "Portfolio Landing Page"],
      sellingStrategy: {
        pricing: "80,000 - 300,000 NGN ($50 - $200)",
        whereToFind: ["Local businesses", "Startup founders", "Personal brands", "Instagram outreach, LinkedIn, referrals, freelance platforms"],
        pitch: "I build high-quality, responsive, and conversion-focused websites using modern no-code tools. This allows me to deliver production-ready websites in significantly shorter timeframes while maintaining a high level of design and performance."
      }
    }
  },
  {
    id: "p2-5", number: "2.5", title: "VIBE CODING AND AI ASSISTED DESIGNS", badge: "AI-Powered Build", weeks: "WEEKS 6.5-7.5", objective: "Claude Code, Google Stich, Google AI studio, Google Antigravity, KIMI Code", color: "text-teal-400",
    resources: [
      { title: "Vibe Coding Explained", url: "https://youtu.be/iLCDSY2XX7E?si=9rXYTZvdx_Mkheyo", type: "yt" },
      { title: "Google Stitch AI - Full Tutorial", url: "https://youtu.be/Dk0dSiEke0M?si=X2djGKhDVaMcQitO", type: "yt" },
      { title: "Google Anti Gravity", url: "https://youtu.be/mvHGI6zEA3w?si=ukZLL9TwFJVtc3-i", type: "yt" },
      { title: "Google Jules", url: "https://youtu.be/LWqxbq2smp0?si=K0uWNWjX28byD9QM", type: "yt" },
      { title: "Google Firebase Studio", url: "https://youtu.be/Rd6F5wHlysM?si=J8wzrurtlOakl48w", type: "yt" },
      { title: "Google Gems", url: "https://youtu.be/UYGOEdlyN3Y?si=77uGe__0Tim0aaaK", type: "yt" },
      { title: "Notebook LM", url: "https://youtu.be/OdMTSmTqexq?si=FSB_OmveP9AWWtcY", type: "yt" },
      { title: "AI UI/UX Design", url: "https://youtu.be/1ClbYm_mgpk?si=BKZkIR0oNkfEilnr", type: "yt" },
      { title: "Vibe 3D Website Design", url: "https://youtu.be/nhibi9TRgNc?si=abjOUZ-R88WjTFDl", type: "yt" },
      { title: "Build Websites with AI", url: "https://youtu.be/Klsulj-LI3k?si=EKxGTU6w2MWZEtkb", type: "yt" },
      { title: "Claude Code Free Set-Up", url: "https://youtu.be/GRUjApPqCoE?si=ckUA7rFUDXRMlPQL", type: "yt" }
    ],
    freeResources: [
      { title: "v0 by Vercel", url: "https://v0.dev", type: "tool", provider: "Vercel" },
      { title: "Google AI Studio", url: "https://aistudio.google.com", type: "tool", provider: "Google" }
    ],
    followAlongProjects: [
      { title: "Vibe Coded Website", url: "https://youtu.be/9PmEzZD1aEU?si=2zNL03fJGhOYzmiN", outcome: "An immersive landing page built with AI-assisted design.", steps: ["Generate UI", "Refine with AI", "Export code", "Deploy"] }
    ],
    tools: [
      { name: "Google Stitch", url: "https://stitch.withgoogle.com" },
      { name: "v0 by Vercel", url: "https://v0.dev" },
      { name: "Bolt.new", url: "https://bolt.new" }
    ],
    tasks: [
      { id: "p25-t1", label: "1 website built with Google Stitch (live URL)" },
      { id: "p25-t2", label: "1 landing page with Google Anti Gravity" },
      { id: "p25-t3", label: "3D interactive element using AI tools" },
      { id: "p25-t4", label: "Vibe-coded portfolio piece" }
    ],
    project: {
      title: "AI-Assisted Web Design",
      description: "Produce high-quality websites and interfaces in significantly reduced timeframes.",
      deliverables: ["Vibe-coded Website", "AI Design Assets"],
      sellingStrategy: {
        pricing: "50,000 - 150,000 NGN ($30 - $100)",
        whereToFind: ["Fast-delivery website services", "Content creation", "Template selling", "Twitter/X, TikTok, Instagram, Discord"],
        pitch: "I combine AI tools with structured design principles to produce high-quality websites and interfaces in significantly reduced timeframes. This allows businesses to get premium-level results without the traditional delays and high costs."
      }
    }
  },
  {
    id: "p3", number: "03", title: "AI EMBEDDED WEBSITE AND DEVELOPMENT", badge: "AI Integration", weeks: "WEEKS 7-9", objective: "Turn websites into intelligent, revenue-generating systems.", color: "text-orange-400",
    resources: [
      { title: "How to Add an AI Chatbot to ANY Website", url: "https://youtu.be/U5ku1dSIWFY?si=VT2kzPrKUglcBRNE", type: "yt" },
      { title: "OpenAI API Tutorial", url: "https://www.youtube.com/live/zDvYnuo1aQw?si=MIODmNUyezG-w3cl", type: "yt" },
      { title: "Claude API Integration", url: "https://youtu.be/A4vB0poh8mM?si=pDJJT2c_uZmSHmyP", type: "yt" },
      { title: "Build AI Chatbot for Website", url: "https://youtu.be/SWP3k-24jT4?si=Z1gKy-ia15ntEREX", type: "yt" },
      { title: "AI Lead Generation Workflow", url: "https://youtu.be/iOg7SpprYiw?si=5wdUXpCAF7TUDYKO", type: "yt" },
      { title: "Connect Chatbot to CRM", url: "https://youtu.be/JStC_MFi9Oo?si=WDNfN4gPBco6-ET9", type: "yt" }
    ],
    freeResources: [
      { title: "Anthropic Claude API", url: "https://docs.anthropic.com", type: "guide", provider: "Anthropic" },
      { title: "OpenAI API", url: "https://platform.openai.com", type: "guide", provider: "OpenAI" }
    ],
    followAlongProjects: [
      { title: "AI Chatbot for Business", url: "https://youtu.be/SNwqkdhv1HQ?si=aaZ6cW3TKPPkbrhY", outcome: "A custom-trained AI assistant integrated into a live website.", steps: ["Train model", "Design flow", "Connect API", "Embed"] }
    ],
    tools: [
      { name: "n8n", url: "https://n8n.io" },
      { name: "Make", url: "https://make.com" }
    ],
    tasks: [
      { id: "p3-t1", label: "AI chatbot embedded in a live website" },
      { id: "p3-t2", label: "Lead capture → email notification system" },
      { id: "p3-t3", label: "First sellable 'AI website' product" }
    ],
    project: {
      title: "Intelligent AI Website",
      description: "Build intelligent websites that integrate AI directly into the user experience.",
      deliverables: ["Live AI Website", "Lead Capture System"],
      sellingStrategy: {
        pricing: "150,000 - 500,000 NGN ($100 - $350)",
        whereToFind: ["Real estate", "Clinics", "E-commerce", "Consultants", "LinkedIn, local business associations"],
        pitch: "I build intelligent websites that integrate AI directly into the user experience. These systems can respond to customer inquiries in real time, guide users through services, and capture leads automatically."
      }
    }
  }
];

fs.writeFileSync('phases_part1.json', JSON.stringify(phasesData, null, 2));
