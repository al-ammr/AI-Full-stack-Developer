const fs = require('fs');

const phasesData = [
  {
    id: "p9-5", number: "9.5", title: "BACKEND DEVELOPMENT (CODE) - Advanced", badge: "Advanced Backend", weeks: "WEEKS 35-36", objective: "Advanced backend concepts.", color: "text-blue-600",
    resources: [
      { title: "Advanced Node.js", url: "https://youtu.be/ENrzD9HAZK4?si=1r6F1k0H7r8y6x5s", type: "yt" }
    ],
    freeResources: [
      { title: "Node.js Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices", type: "guide", provider: "Community" }
    ],
    followAlongProjects: [
      { title: "Scalable API", url: "https://youtu.be/wm5gMKuwSYk?si=1a2b3c4d5e6f7g8h", outcome: "A highly scalable API.", steps: ["Design architecture", "Implement caching", "Optimize queries", "Deploy"] }
    ],
    tools: [
      { name: "Docker", url: "https://docker.com" },
      { name: "Redis", url: "https://redis.io" }
    ],
    tasks: [
      { id: "p95-t1", label: "Implement caching in an API" },
      { id: "p95-t2", label: "Dockerize a Node.js application" }
    ],
    project: {
      title: "Scalable Backend Architecture",
      description: "Design and implement highly scalable and performant backend systems.",
      deliverables: ["Architecture Diagram", "Source Code"],
      sellingStrategy: {
        pricing: "800,000+ NGN ($550+)",
        whereToFind: ["Growing Startups", "Enterprise", "Tech Consultancies"],
        pitch: "I design and implement highly scalable and performant backend systems capable of handling significant traffic and complex data operations."
      }
    }
  },
  {
    id: "p10", number: "10", title: "MICRO SAAS BUILDING (NO CODE)", badge: "Product", weeks: "WEEKS 37-40", objective: "Build recurring revenue machines.", color: "text-orange-500",
    resources: [
      { title: "How to Build a Micro SaaS", url: "https://youtu.be/Z3d8Qn9THIE?si=1r6F1k0H7r8y6x5s", type: "yt" },
      { title: "SaaS MVP Tutorial", url: "https://youtu.be/yMCnAyZiJtk?si=9z2s1d3f4g5h6j7k", type: "yt" },
      { title: "Stripe Subscription Tutorial", url: "https://youtu.be/6mnu-nNAP8U?si=2l3k4j5h6g7f8d9s", type: "yt" }
    ],
    freeResources: [
      { title: "Startup School", url: "https://www.startupschool.org", type: "course", provider: "Y Combinator" }
    ],
    followAlongProjects: [
      { title: "Micro SaaS with Stripe", url: "https://youtu.be/M6O7Z2W2S_Y?si=1a2b3c4d5e6f7g8h", outcome: "A live software product with subscriptions.", steps: ["Set up Stripe", "Implement checkout", "Handle webhooks", "Manage users"] }
    ],
    tools: [
      { name: "Stripe", url: "https://stripe.com" },
      { name: "Bubble", url: "https://bubble.io" }
    ],
    tasks: [
      { id: "p10-t1", label: "Build a MicroSaaS with subscription billing" },
      { id: "p10-t2", label: "Launch your product on Product Hunt" }
    ],
    project: {
      title: "Micro SaaS Product",
      description: "Develop and launch a micro SaaS product using no-code tools.",
      deliverables: ["Live SaaS Product", "Stripe Dashboard"],
      sellingStrategy: {
        pricing: "5k - 50k NGN/mo ($3 - $35) per user",
        whereToFind: ["Product Hunt", "Twitter", "Indie Hackers"],
        pitch: "I build specialized micro SaaS products that solve specific problems for niche audiences, creating recurring revenue streams."
      }
    }
  },
  {
    id: "p10-5", number: "10.5", title: "CREATE AND DEPLOY AI TOOLS FOR BUSINESSES", badge: "AI Tools", weeks: "WEEKS 41-43", objective: "Deploy custom AI tools.", color: "text-emerald-500",
    resources: [
      { title: "Build AI Tools", url: "https://youtu.be/Z3d8Qn9THIE?si=1r6F1k0H7r8y6x5s", type: "yt" }
    ],
    freeResources: [
      { title: "OpenAI Cookbook", url: "https://cookbook.openai.com", type: "guide", provider: "OpenAI" }
    ],
    followAlongProjects: [
      { title: "Custom Internal AI Tool", url: "https://youtu.be/yMCnAyZiJtk?si=9z2s1d3f4g5h6j7k", outcome: "An internal AI tool for a business.", steps: ["Identify need", "Build tool", "Deploy internally", "Train staff"] }
    ],
    tools: [
      { name: "Retool", url: "https://retool.com" },
      { name: "OpenAI API", url: "https://platform.openai.com" }
    ],
    tasks: [
      { id: "p105-t1", label: "Build an internal AI tool for a specific business process" }
    ],
    project: {
      title: "Custom AI Business Tools",
      description: "Develop and deploy custom AI tools to optimize internal business operations.",
      deliverables: ["Deployed AI Tool", "User Guide"],
      sellingStrategy: {
        pricing: "200,000 - 1,000,000 NGN ($150 - $700)",
        whereToFind: ["Mid-size Businesses", "Agencies", "Consultants"],
        pitch: "I develop and deploy custom AI tools tailored to your specific business processes, significantly increasing efficiency and reducing operational costs."
      }
    }
  },
  {
    id: "p11", number: "11", title: "SEO AND AEO IN 2026", badge: "Marketing", weeks: "WEEKS 44-46", objective: "Master Search and AI Engine Optimization.", color: "text-yellow-500",
    resources: [
      { title: "SEO Full Course", url: "https://youtu.be/Z3d8Qn9THIE?si=1r6F1k0H7r8y6x5s", type: "yt" },
      { title: "AEO Strategies", url: "https://youtu.be/yMCnAyZiJtk?si=9z2s1d3f4g5h6j7k", type: "yt" }
    ],
    freeResources: [
      { title: "Google Search Central", url: "https://developers.google.com/search", type: "guide", provider: "Google" }
    ],
    followAlongProjects: [
      { title: "SEO/AEO Audit and Optimization", url: "https://youtu.be/6mnu-nNAP8U?si=2l3k4j5h6g7f8d9s", outcome: "An optimized website.", steps: ["Audit site", "Optimize content", "Implement schema", "Monitor rankings"] }
    ],
    tools: [
      { name: "Ahrefs", url: "https://ahrefs.com" },
      { name: "Google Search Console", url: "https://search.google.com/search-console" }
    ],
    tasks: [
      { id: "p11-t1", label: "Perform an SEO audit on a website" },
      { id: "p11-t2", label: "Optimize content for AI overviews (AEO)" }
    ],
    project: {
      title: "Search Visibility Optimization",
      description: "Optimize websites for both traditional search engines and emerging AI platforms.",
      deliverables: ["SEO Audit Report", "Optimized Content"],
      sellingStrategy: {
        pricing: "100,000 - 500,000 NGN/mo ($70 - $350/mo)",
        whereToFind: ["E-commerce", "Local Businesses", "Content Creators"],
        pitch: "I optimize your digital presence for both traditional search engines and emerging AI platforms, ensuring your business remains visible and competitive in the evolving search landscape."
      }
    }
  },
  {
    id: "p11-5", number: "11.5", title: "DIGITAL SETUPS FOR SELLING AND MARKETING TECH PRODUCTS", badge: "Sales", weeks: "WEEKS 47-49", objective: "Set up systems to sell tech products.", color: "text-red-500",
    resources: [
      { title: "Tech Sales Strategies", url: "https://youtu.be/Z3d8Qn9THIE?si=1r6F1k0H7r8y6x5s", type: "yt" }
    ],
    freeResources: [
      { title: "HubSpot Sales Software Cert", url: "https://academy.hubspot.com", type: "certification", provider: "HubSpot" }
    ],
    followAlongProjects: [
      { title: "Sales Funnel Setup", url: "https://youtu.be/yMCnAyZiJtk?si=9z2s1d3f4g5h6j7k", outcome: "A complete sales funnel.", steps: ["Design funnel", "Set up CRM", "Create email sequence", "Launch"] }
    ],
    tools: [
      { name: "HubSpot", url: "https://hubspot.com" },
      { name: "ActiveCampaign", url: "https://activecampaign.com" }
    ],
    tasks: [
      { id: "p115-t1", label: "Set up a complete sales funnel for a tech product" }
    ],
    project: {
      title: "Tech Product Sales System",
      description: "Design and implement comprehensive digital setups for marketing and selling technology products.",
      deliverables: ["Sales Funnel", "CRM Configuration"],
      sellingStrategy: {
        pricing: "300,000 - 1,000,000 NGN ($200 - $700)",
        whereToFind: ["SaaS Startups", "Tech Founders", "Agencies"],
        pitch: "I design and implement comprehensive digital setups for marketing and selling technology products, from lead generation funnels to CRM integration and automated follow-ups."
      }
    }
  },
  {
    id: "p12", number: "12", title: "FULL SAAS (NO CODE)", badge: "Enterprise", weeks: "WEEKS 50-52", objective: "Build complex SaaS applications without code.", color: "text-purple-600",
    resources: [
      { title: "Bubble Full Course", url: "https://youtu.be/Z3d8Qn9THIE?si=1r6F1k0H7r8y6x5s", type: "yt" }
    ],
    freeResources: [
      { title: "Bubble Academy", url: "https://bubble.io/academy", type: "course", provider: "Bubble" }
    ],
    followAlongProjects: [
      { title: "Complex SaaS Application", url: "https://youtu.be/yMCnAyZiJtk?si=9z2s1d3f4g5h6j7k", outcome: "A fully functional SaaS.", steps: ["Design database", "Build workflows", "Create UI", "Launch"] }
    ],
    tools: [
      { name: "Bubble", url: "https://bubble.io" },
      { name: "Xano", url: "https://xano.com" }
    ],
    tasks: [
      { id: "p12-t1", label: "Build a complex SaaS application using Bubble" }
    ],
    project: {
      title: "Enterprise No-Code SaaS",
      description: "Develop complex, scalable SaaS applications using advanced no-code platforms.",
      deliverables: ["Live SaaS Application", "Database Architecture"],
      sellingStrategy: {
        pricing: "1,000,000+ NGN ($700+)",
        whereToFind: ["Enterprise Clients", "Funded Startups", "Established Businesses"],
        pitch: "I develop complex, scalable SaaS applications using advanced no-code platforms, delivering enterprise-grade solutions in a fraction of the time required for traditional development."
      }
    }
  }
];

fs.writeFileSync('phases_part4.json', JSON.stringify(phasesData, null, 2));
