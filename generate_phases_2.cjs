const fs = require('fs');

const phasesData = [
  {
    id: "p4", number: "04", title: "AUTOMATION, TASK SCHEDULING AND AI TOOLS DEPLOYMENT", badge: "Automation", weeks: "WEEKS 10-13", objective: "Build systems businesses will pay recurring fees for.", color: "text-rose-500",
    resources: [
      { title: "n8n Full Tutorial", url: "https://youtu.be/M2Q3fP2yXwE?si=v6A20L112yN2f05p", type: "yt" },
      { title: "n8n Business Automation Examples", url: "https://youtu.be/JStC_MFi9Oo?si=WDNfN4gPBco6-ET9", type: "yt" },
      { title: "WhatsApp Business API Automation", url: "https://youtu.be/iOg7SpprYiw?si=5wdUXpCAF7TUDYKO", type: "yt" },
      { title: "Email Automation Systems", url: "https://youtu.be/SWP3k-24jT4?si=Z1gKy-ia15ntEREX", type: "yt" },
      { title: "Airtable / CRM Setup", url: "https://youtu.be/A4vB0poh8mM?si=pDJJT2c_uZmSHmyP", type: "yt" }
    ],
    freeResources: [
      { title: "n8n Academy", url: "https://academy.n8n.io", type: "certification", provider: "n8n" },
      { title: "Make Academy", url: "https://academy.make.com", type: "certification", provider: "Make" }
    ],
    followAlongProjects: [
      { title: "Automated Lead Gen System", url: "https://youtu.be/SNwqkdhv1HQ?si=aaZ6cW3TKPPkbrhY", outcome: "A fully automated workflow connecting forms, CRM, and email.", steps: ["Set up trigger", "Map data", "Configure alerts", "Test flow"] }
    ],
    tools: [
      { name: "n8n", url: "https://n8n.io" },
      { name: "Airtable", url: "https://airtable.com" },
      { name: "Make", url: "https://make.com" }
    ],
    tasks: [
      { id: "p4-t1", label: "Lead gen automation (Form → CRM → Email)" },
      { id: "p4-t2", label: "WhatsApp business notification system" },
      { id: "p4-t3", label: "n8n Academy certification" }
    ],
    project: {
      title: "Business Automation System",
      description: "Develop automated systems that connect different software tools to streamline business operations.",
      deliverables: ["n8n Workflows", "Airtable CRM Setup"],
      sellingStrategy: {
        pricing: "100k - 300k NGN setup + 30k - 100k/mo maintenance",
        whereToFind: ["Agencies", "E-commerce", "Coaches", "LinkedIn, Upwork, Cold Outreach"],
        pitch: "I develop automated systems that connect different software tools to streamline business operations. By setting up workflows that handle data entry, lead management, and customer notifications, I help businesses reduce manual work and improve efficiency."
      }
    }
  },
  {
    id: "p5", number: "05", title: "AGENTIC AI AND USES", badge: "Agentic AI", weeks: "WEEKS 14-17", objective: "Build AI that thinks, plans, and acts.", color: "text-indigo-400",
    resources: [
      { title: "AI Agents Full Tutorial", url: "https://youtu.be/O2gerCxEXvc?si=TFHTVkQ6mOWL9TJ", type: "yt" },
      { title: "LangChain Full Course", url: "https://youtu.be/1bGuT6pQNDk?si=1l2I6yK3m6K_e0D9", type: "yt" },
      { title: "Build Autonomous AI Agent", url: "https://youtu.be/zkXonmqIBFg?si=4bi5hpsr3zKFYoC", type: "yt" },
      { title: "CrewAI Tutorial", url: "https://youtu.be/sPzc6hMg7So?si=8YhP9x-7Vn4B1c3E", type: "yt" },
      { title: "Multi-Agent Systems", url: "https://youtu.be/JStC_MFi9Oo?si=WDNfN4gPBco6-ET9", type: "yt" }
    ],
    freeResources: [
      { title: "LangChain Documentation", url: "https://python.langchain.com", type: "guide", provider: "LangChain" },
      { title: "CrewAI Documentation", url: "https://docs.crewai.com", type: "guide", provider: "CrewAI" }
    ],
    followAlongProjects: [
      { title: "Multi-Agent Research System", url: "https://youtu.be/SNwqkdhv1HQ?si=aaZ6cW3TKPPkbrhY", outcome: "An autonomous AI agent system that performs complex research tasks.", steps: ["Define roles", "Set up tools", "Implement memory", "Deploy"] }
    ],
    tools: [
      { name: "LangChain", url: "https://langchain.com" },
      { name: "CrewAI", url: "https://crewai.com" }
    ],
    tasks: [
      { id: "p5-t1", label: "AI sales agent that books calls" },
      { id: "p5-t2", label: "AI research assistant with memory" },
      { id: "p5-t3", label: "Multi-agent workflow using CrewAI" }
    ],
    project: {
      title: "Autonomous AI Agents",
      description: "Build advanced AI agents capable of autonomous decision-making and task execution.",
      deliverables: ["Agent Workflow", "Tool Integrations"],
      sellingStrategy: {
        pricing: "300,000 - 1,500,000 NGN ($200 - $1,000+)",
        whereToFind: ["Tech Startups", "Enterprise", "Agencies", "LinkedIn, specialized freelance networks"],
        pitch: "I build advanced AI agents capable of autonomous decision-making and task execution. These systems can handle complex, multi-step processes like customer support resolution, market research, and data analysis without human intervention."
      }
    }
  },
  {
    id: "p6", number: "06", title: "GIT AND GITHUB FULL COURSES", badge: "Dev Basics", weeks: "WEEKS 18-19", objective: "Host your work. Version your code. Look like a pro.", color: "text-slate-400",
    resources: [
      { title: "Git & GitHub Full Course", url: "https://youtu.be/RGOj5yH7evk?si=1r6F1k0H7r8y6x5s", type: "yt" },
      { title: "How to Deploy to GitHub Pages", url: "https://youtu.be/QyFcl_Fba-k?si=9z2s1d3f4g5h6j7k", type: "yt" },
      { title: "Git Workflow Explained", url: "https://youtu.be/8JJ101D3knE?si=2l3k4j5h6g7f8d9s", type: "yt" }
    ],
    freeResources: [
      { title: "GitHub Skills", url: "https://skills.github.com", type: "certification", provider: "GitHub" }
    ],
    followAlongProjects: [
      { title: "CI/CD Pipeline", url: "https://youtu.be/scEDHsr3APg?si=1a2b3c4d5e6f7g8h", outcome: "Automated deployment pipeline.", steps: ["Init repo", "Config Actions", "Connect Vercel", "Deploy"] }
    ],
    tools: [
      { name: "GitHub", url: "https://github.com" },
      { name: "Git", url: "https://git-scm.com" }
    ],
    tasks: [
      { id: "p6-t1", label: "Host all previous projects on GitHub" },
      { id: "p6-t2", label: "Deploy one project live on Vercel/Pages" },
      { id: "p6-t3", label: "Complete GitHub Skills 'Intro to GitHub'" }
    ],
    project: {
      title: "Version Control Setup",
      description: "Set up version control and deployment pipelines.",
      deliverables: ["GitHub Profile", "Live Deployments"],
      sellingStrategy: {
        pricing: "Included in development projects",
        whereToFind: ["Development teams", "Open source", "Freelance clients"],
        pitch: "I ensure all code is properly versioned and deployed using industry-standard tools like Git and GitHub, providing a professional and reliable development process."
      }
    }
  },
  {
    id: "p6-5", number: "6.5", title: "RUN AI MODELS FROM GITHUB AND HUGGINGFACE", badge: "AI Deployment", weeks: "WEEKS 19.5", objective: "Deploy open-source AI models.", color: "text-purple-400",
    resources: [
      { title: "Hugging Face Full Course", url: "https://youtu.be/1bGuT6pQNDk?si=1l2I6yK3m6K_e0D9", type: "yt" },
      { title: "Deploy AI Models Locally", url: "https://youtu.be/sPzc6hMg7So?si=8YhP9x-7Vn4B1c3E", type: "yt" }
    ],
    freeResources: [
      { title: "Hugging Face Course", url: "https://huggingface.co/course", type: "course", provider: "Hugging Face" }
    ],
    followAlongProjects: [
      { title: "Local AI Model Deployment", url: "https://youtu.be/zkXonmqIBFg?si=4bi5hpsr3zKFYoC", outcome: "A locally running open-source AI model.", steps: ["Download model", "Set up environment", "Run inference", "Build API"] }
    ],
    tools: [
      { name: "Hugging Face", url: "https://huggingface.co" },
      { name: "Ollama", url: "https://ollama.com" }
    ],
    tasks: [
      { id: "p65-t1", label: "Run a local LLM using Ollama" },
      { id: "p65-t2", label: "Deploy a Hugging Face model via API" }
    ],
    project: {
      title: "Open-Source AI Deployment",
      description: "Deploy and integrate open-source AI models for specific business use cases.",
      deliverables: ["Local Model Setup", "API Integration"],
      sellingStrategy: {
        pricing: "100,000 - 400,000 NGN ($70 - $250)",
        whereToFind: ["Startups", "Researchers", "Tech companies"],
        pitch: "I help businesses leverage powerful open-source AI models by deploying them locally or via cloud APIs, ensuring data privacy and reducing reliance on expensive proprietary models."
      }
    }
  }
];

fs.writeFileSync('phases_part2.json', JSON.stringify(phasesData, null, 2));
