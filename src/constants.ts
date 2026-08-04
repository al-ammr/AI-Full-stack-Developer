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

export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: 'business' | 'coding' | 'writing' | 'image' | 'video' | 'marketing' | 'productivity' | 'learning';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
}

export const PROMPTS: Prompt[] = [
  {
    id: "pr-1",
    title: "SaaS Idea Validator",
    description: "Critically analyze a SaaS idea for market fit, potential challenges, and monetization strategies.",
    prompt: "I have a SaaS idea: [INSERT IDEA]. Act as a startup consultant. Analyze this idea for: 1. Market demand, 2. Potential competitors, 3. Technical feasibility, 4. Three possible monetization models. Be brutally honest and provide actionable next steps.",
    category: "business",
    difficulty: "Intermediate",
    tags: ["Startup", "Strategy", "Validation"]
  },
  {
    id: "pr-2",
    title: "React Component Refactor",
    description: "Refactor a React component for better performance, readability, and adherence to best practices.",
    prompt: "Refactor the following React component: [INSERT CODE]. Focus on: 1. Reducing unnecessary re-renders, 2. Improving type safety with TypeScript, 3. Using modern hooks, 4. Enhancing readability. Explain the changes you made.",
    category: "coding",
    difficulty: "Advanced",
    tags: ["React", "Refactoring", "Performance"]
  },
  {
    id: "pr-3",
    title: "Viral Thread Creator",
    description: "Transform a long-form article or idea into a compelling, high-engagement Twitter/X thread.",
    prompt: "Convert the following content into a 7-10 post Twitter thread: [INSERT CONTENT]. The first post must be a hook that stops the scroll. Use a mix of storytelling and data. End with a strong call to action.",
    category: "marketing",
    difficulty: "Beginner",
    tags: ["Twitter", "Copywriting", "Growth"]
  },
  {
    id: "pr-4",
    title: "Midjourney Photorealistic Portrait",
    description: "Generate a highly detailed, photorealistic portrait with specific lighting and camera settings.",
    prompt: "A photorealistic portrait of [SUBJECT], shot on 85mm lens, f/1.8, natural golden hour lighting, cinematic composition, highly detailed skin texture, sharp focus, 8k resolution, --ar 4:5 --v 6.0",
    category: "image",
    difficulty: "Intermediate",
    tags: ["Midjourney", "Art", "Photography"]
  },
  {
    id: "pr-5",
    title: "Python Automation Script",
    description: "Create a Python script to automate a repetitive task like file organization or data scraping.",
    prompt: "Write a Python script that [DESCRIBE TASK, e.g., 'organizes files in a folder by their extension']. The script should be robust, include error handling, and be well-documented. Use standard libraries where possible.",
    category: "coding",
    difficulty: "Intermediate",
    tags: ["Python", "Automation", "Scripting"]
  },
  {
    id: "pr-6",
    title: "Cold Email for High-Ticket Clients",
    description: "Write a personalized cold email that gets responses from high-value prospects.",
    prompt: "Write a cold email to [PROSPECT NAME] at [COMPANY]. I am offering [SERVICE]. Focus on a specific pain point they might have: [PAIN POINT]. Keep it under 150 words, avoid 'salesy' language, and end with a low-friction question.",
    category: "writing",
    difficulty: "Intermediate",
    tags: ["Sales", "Email", "Outreach"]
  },
  {
    id: "pr-7",
    title: "Video Script Hook Generator",
    description: "Generate 5 different hooks for a short-form video (TikTok/Reels) to maximize retention.",
    prompt: "I'm making a video about [TOPIC]. Generate 5 different opening hooks. One should be a 'negative' hook (what NOT to do), one should be a 'curiosity' hook, and one should be a 'direct benefit' hook. Each hook must be under 10 seconds.",
    category: "video",
    difficulty: "Beginner",
    tags: ["TikTok", "Reels", "Content"]
  },
  {
    id: "pr-8",
    title: "Complex Topic Simplifier",
    description: "Explain a complex technical or scientific concept to a 10-year-old using analogies.",
    prompt: "Explain [COMPLEX TOPIC] to a 10-year-old. Use a simple analogy related to [EVERYDAY OBJECT]. Avoid jargon and keep the explanation under 200 words.",
    category: "learning",
    difficulty: "Beginner",
    tags: ["Education", "Simplification", "Analogy"]
  }
,
  {
    id: "pr-9",
    title: "Saas Idea Validator",
    description: "Stress- test a SaaS idea for real- world viability.",
    prompt: "Act as a senior startup advisor with deep experience in SaaS, market validation, and product strategy. Your goal is to evaluate the viability of this idea: [describe your SaaS idea], targeting [target audience], solving [problem], in [market/region], with optional pricing of [pricing]. Break down whether the problem is real, urgent, and worth paying for, then identify 3- 5 realistic competitors or alternatives and analyze how they solve it. Evaluate demand using logical reasoning, expose weak assumptions, hidden risks, and blind spots, and explain why most versions of this idea fail. Then redesign the idea into a stronger, more viable version with sharper positioning and a clear niche. Define a lean MVP with only essential features and explain why each matters. Conclude with a blunt verdict (Go, Modify, or Kill) and justify it. Finally, ask 3 precise questions that would significantly improve your evaluation.",
    category: "business",
    difficulty: "Intermediate",
    tags: ["Business"]
  },
  {
    id: "pr-10",
    title: "Business Model Builder",
    description: "Turn an idea into a structured, monetizable business.",
    prompt: "Act as a business strategist and transform this idea: [describe your idea], using my available resources [skills/resources] and budget [budget], targeting [audience], into a complete business model. Clearly define the value proposition and why it matters, identify specific customer segments, and design 2- 3 realistic revenue streams. Break down the cost structure and key expenses, outline the core activities required to run the business, and suggest practical distribution channels. Recommend tools, platforms, or systems needed to operate efficiently. Keep everything practical and grounded in execution, not theory. End with a concise summary of how this business actually makes money and one unconventional idea that could give it a competitive advantage.",
    category: "business",
    difficulty: "Beginner",
    tags: ["Business"]
  },
  {
    id: "pr-11",
    title: "Target Audience Deep Dive",
    description: "Build a highly detailed customer persona.",
    prompt: "Act as a customer research expert and build a deep, realistic profile for the ideal customer of this product/service: [describe product] in the [industry] market, currently assumed to target [audience]. Define a specific primary persona including demographics and psychographics, then analyze their real pain points, daily behavior, habits, motivations, and desires. Identify what triggers them to buy, what objections they raise, and what alternatives they consider. Explain where they spend time (online/offline) and how they consume information. Then craft messaging angles that would resonate strongly with them. Avoid generic answers and focus on specificity. End by listing 3 major mistakes most people make when targeting this audience.",
    category: "business",
    difficulty: "Intermediate",
    tags: ["Business"]
  },
  {
    id: "pr-12",
    title: "Competitive Analysis Engine",
    description: "Identify competitors and uncover market gaps.",
    prompt: "Act as a competitive intelligence analyst and analyze the competitive landscape for my business: [describe business] in the [industry], with known competitors [list or unknown]. Identify the top 5 realistic competitors if not provided, then compare their strengths, weaknesses, positioning, and pricing strategies. Highlight patterns in how they operate and where they succeed or fail. Identify clear gaps in their offerings and underserved customer segments. Then propose a strong differentiation strategy that would make my business stand out immediately. Avoid surface- level insights and focus on strategic opportunities that can actually be executed. End with one aggressive move that could help outperform competitors quickly.",
    category: "business",
    difficulty: "Advanced",
    tags: ["Business"]
  },
  {
    id: "pr-13",
    title: "Pricing Strategy Optimizer",
    description: "Create a pricing model that maximizes profit and conversion.",
    prompt: "Act as a pricing strategist using principles of behavioral economics to design a pricing strategy for this product/service: [describe], targeting [audience], with competitor pricing [optional] and cost structure [optional]. Propose 2- 3 pricing models (e.g., subscription, one- time, tiered) and recommend specific price points with justification. Explain the psychological principles behind your choices, including anchoring, perceived value, and pricing tiers. Suggest upsells, bundles, or add- ons that increase average order value. Identify risks of underpricing or overpricing and how to avoid them. Keep everything practical and revenue- focused. End by explaining how pricing should evolve as the business scales.",
    category: "business",
    difficulty: "Intermediate",
    tags: ["Business"]
  },
  {
    id: "pr-14",
    title: "Mvp Launch Plan",
    description: "Launch a product quickly with minimal resources.",
    prompt: "Act as a startup execution expert and create a fast, practical MVP launch plan for this idea: [describe idea], considering my skills [skills] and budget [budget]. Define the exact MVP scope by stripping the idea down to only essential features, then break execution into a clear 4- 6 week plan with actionable weekly steps. Recommend specific tools or platforms that enable fast building without unnecessary complexity. Identify validation checkpoints to test whether the idea is working before scaling. Then outline a simple but effective launch strategy to get first users. Focus on speed and efficiency. End by showing how to cut the timeline by 50% without destroying quality.",
    category: "business",
    difficulty: "Intermediate",
    tags: ["Business"]
  },
  {
    id: "pr-15",
    title: "Revenue Growth Plan",
    description: "Build a structured plan to grow revenue.",
    prompt: "Act as a growth strategist and design a revenue growth plan for this business: [describe business], currently making [current revenue] with a goal of reaching [target]. Identify the key growth levers available, then propose specific acquisition strategies, monetization improvements, and retention tactics. Highlight where money is currently being lost or left on the table. Suggest high- impact experiments that could unlock growth quickly. Keep recommendations realistic and focused on execution, not theory. Prioritize all actions by expected ROI. End by identifying the single most important action that would drive the highest revenue increase.",
    category: "business",
    difficulty: "Advanced",
    tags: ["Business"]
  },
  {
    id: "pr-16",
    title: "Pitch Deck Architect",
    description: "Create a persuasive investor pitch structure.",
    prompt: "Act as an investor pitch expert and create a compelling pitch deck for this startup: [describe startup], targeting [type of investors/audience]. Build a clear slide- by- slide structure including problem, solution, market size, product, traction, business model, competition, and financials. For each slide, write the key message in a concise but persuasive way and suggest what visuals or data should be included. Focus on clarity, credibility, and impact rather than fluff. Highlight what investors care about most and how to present it convincingly. End by suggesting how to strengthen the pitch to make it more fundable.",
    category: "business",
    difficulty: "Intermediate",
    tags: ["Business"]
  },
  {
    id: "pr-17",
    title: "Offer Creation Machine",
    description: "Turn a basic product into an irresistible offer.",
    prompt: "Act as a sales strategist and transform this product/service: [describe product], for [target audience], into a high- converting offer. Clearly define the core offer and its value, then enhance it with relevant bonuses that increase perceived value. Add risk- reversal mechanisms such as guarantees, and introduce urgency or scarcity in a credible way. Ensure the offer is compelling, clear, and hard to refuse without being manipulative. Focus on real value rather than gimmicks. End by suggesting one specific change that could double conversion rates.",
    category: "business",
    difficulty: "Beginner",
    tags: ["Business"]
  },
  {
    id: "pr-18",
    title: "Business Problem Solver",
    description: "Diagnose and solve a critical business issue.",
    prompt: "Act as a high- level business consultant and solve this problem: [describe problem] in my business [describe business and current situation]. Start by diagnosing the root cause instead of treating symptoms, then identify hidden issues or flawed assumptions contributing to the problem. Propose multiple solutions with clear reasoning, and prioritize them based on impact and feasibility. Explain the expected outcomes of each option and the risks involved. Focus on clarity and decisive action. End by asking 3 tough questions that challenge my thinking and expose what I might be avoiding.",
    category: "business",
    difficulty: "Advanced",
    tags: ["Business"]
  },
  {
    id: "pr-19",
    title: "Full- Stack Feature Builder",
    description: "Build a complete feature with frontend, backend, and logic.",
    prompt: "Act as a senior full- stack engineer and build a complete, production- ready feature for this application: [describe your app idea] using [preferred tech stack, e.g., React, Node.js, MongoDB]. The goal is to implement [specific feature], ensuring scalability, clean architecture, and maintainability. Start by outlining the system design (frontend, backend, API structure, and database schema), then write clean, well- structured code for each layer. Include API endpoints, data models, validation, and error handling. Ensure the frontend properly integrates with the backend and handles loading, errors, and edge cases. Follow best practices such as modularization, naming conventions, and security considerations. Provide comments where necessary but avoid over- explaining. Output should include a clear file/folder structure, complete code snippets, and instructions to run locally. End by suggesting improvements or optimizations for production readiness.",
    category: "coding",
    difficulty: "Advanced",
    tags: ["Coding"]
  },
  {
    id: "pr-20",
    title: "Bug Debugger &amp; Fixer",
    description: "Identify and fix bugs in code with explanation.",
    prompt: "Act as an expert software debugger. I will provide code that is not working correctly. Your goal is to identify the root cause of the issue, explain it clearly, and fix it. Here is the code: [paste your code] and the issue I'm facing: [describe the error or unexpected behavior]. First, analyze the code step- by- step and pinpoint the exact problem (logic error, syntax issue, edge case, etc.). Then provide the corrected version of the code with improvements where necessary. Explain why the fix works in simple terms, and highlight any bad practices that caused the issue. Also suggest how to prevent similar bugs in the future. If multiple solutions exist, briefly compare them and recommend the best one.",
    category: "coding",
    difficulty: "Beginner",
    tags: ["Coding"]
  },
  {
    id: "pr-21",
    title: "Code Refactor &amp; Optimization",
    description: "Improve code quality, readability, and performance.",
    prompt: "Act as a senior engineer specializing in clean code and performance optimization. Refactor the following code to make it more efficient, readable, and maintainable: [paste code]. First, analyze its current structure and identify problems such as redundancy, poor naming, inefficiency, or bad practices. Then rewrite the code using best practices, including proper structure, modularization, and optimized logic. Improve performance where possible without sacrificing clarity. Follow standard conventions for the language used. After refactoring, explain the key improvements made and why they matter. Keep explanations concise but insightful. End by suggesting further enhancements if this code were to scale significantly.",
    category: "coding",
    difficulty: "Intermediate",
    tags: ["Coding"]
  },
  {
    id: "pr-22",
    title: "Api Design Architect",
    description: "Design a clean, scalable API structure.",
    prompt: "Act as a backend architect and design a RESTful (or GraphQL if specified) API for this system: [describe system or app]. Define all necessary endpoints, including request/response formats, authentication, and error handling. Structure the API for scalability and maintainability, following best practices such as versioning and proper resource naming. Design the database schema and relationships that support the API. Include validation rules and security considerations such as rate limiting and access control. Provide example requests and responses. Keep everything practical and implementation- ready. End by suggesting how this API could evolve as the system grows.",
    category: "coding",
    difficulty: "Advanced",
    tags: ["Coding"]
  },
  {
    id: "pr-23",
    title: "Project Starter Blueprint",
    description: "Set up a complete coding project structure.",
    prompt: "Act as a software engineer and create a complete starter blueprint for this project: [describe project idea] using [programming language/framework]. Define the folder structure, dependencies, and setup process. Include initial boilerplate code for main components (e.g., frontend layout, backend server, configuration files). Ensure the structure is clean, scalable, and follows best practices. Provide commands to install dependencies and run the project locally. Include comments explaining key parts but keep it concise. End by suggesting the next 3 steps to start building features immediately.",
    category: "coding",
    difficulty: "Beginner",
    tags: ["Coding"]
  },
  {
    id: "pr-24",
    title: "Algorithm Explainer &amp; Builder",
    description: "Understand and implement algorithms clearly.",
    prompt: "Act as a computer science expert and explain how to solve this problem step- by- step: [describe problem]. First, break down the logic and approach in simple terms, then implement the solution in [programming language]. Ensure the code is clean, efficient, and handles edge cases. Analyze time and space complexity and explain it clearly. If multiple approaches exist, compare them briefly and explain why one is preferred. Avoid unnecessary theory and focus on clarity and practical understanding. End by suggesting a slightly harder variation of the problem for practice.",
    category: "coding",
    difficulty: "Intermediate",
    tags: ["Coding"]
  },
  {
    id: "pr-25",
    title: "Code Translator (language Conversion)",
    description: "Convert code from one language to another.",
    prompt: "Act as a multi- language programming expert and convert the following code from [source language] to [target language]: [paste code]. Ensure the translated code maintains the same functionality and logic. Adapt it to follow idiomatic conventions and best practices of the target language instead of doing a direct literal translation. After conversion, briefly explain key differences between the two versions, including syntax, structure, and performance considerations. Ensure the output is clean, readable, and ready to run.",
    category: "coding",
    difficulty: "Beginner",
    tags: ["Coding"]
  },
  {
    id: "pr-26",
    title: "Tech Stack Advisor",
    description: "Choose the best technologies for a project.",
    prompt: "Act as a senior software architect and recommend the best tech stack for this project: [describe project]. Consider factors such as scalability, performance, development speed, and maintainability. Suggest frontend, backend, database, and hosting solutions, and justify each choice clearly. Compare at least two alternative stacks and explain trade- offs. Avoid generic suggestions and tailor everything to the project requirements. Keep the recommendations practical and realistic. End by outlining how to start building with the chosen stack.",
    category: "coding",
    difficulty: "Intermediate",
    tags: ["Coding"]
  },
  {
    id: "pr-27",
    title: "Code Review &amp; Feedback",
    description: "Get professional- level feedback on code quality.",
    prompt: "Act as a senior developer performing a professional code review. Analyze the following code: [paste code]. Identify issues related to readability, structure, performance, and best practices. Point out specific lines or patterns that need improvement. Suggest concrete fixes and explain why they matter. Avoid generic advice and focus on actionable feedback. Highlight what is done well in the code as well. End by giving an overall rating (1- 10) and what is needed to reach production- level quality.",
    category: "coding",
    difficulty: "Intermediate",
    tags: ["Coding"]
  },
  {
    id: "pr-28",
    title: "Feature Breakdown Planner",
    description: "Break a complex feature into actionable tasks.",
    prompt: "Act as a technical project manager and break down this feature: [describe feature] for [type of application] into clear, actionable development tasks. Start by defining the overall goal and required functionality, then split it into frontend, backend, and integration tasks. Ensure tasks are small, logical, and can be executed step- by- step. Include dependencies between tasks and highlight potential technical challenges. Keep everything practical and focused on execution. End by suggesting the most efficient order to implement the feature and why.",
    category: "coding",
    difficulty: "Advanced",
    tags: ["Coding"]
  },
  {
    id: "pr-29",
    title: "Long- Form Article Generator",
    description: "Create a structured, high- quality long- form article on any topic.",
    prompt: "ACT as a professional writer and subject- matter expert. Your goal is to write a comprehensive, engaging, and well- structured article on this topic: [topic], targeting [audience] with the objective of [inform/educate/persuade]. Start by outlining a clear structure, then write the full article with a strong introduction, logically flowing sections, and a compelling conclusion. Use clear language, avoid fluff, and ensure each section provides real value. Include examples, explanations, or insights that deepen understanding. Maintain a consistent tone suitable for the audience and purpose. Optimize readability with smooth transitions and concise paragraphs. Avoid generic statements—be specific and practical. End with a short summary and 3 actionable takeaways. Finally, suggest 2 ways to improve or expand the article further.",
    category: "writing",
    difficulty: "Intermediate",
    tags: ["Writing"]
  },
  {
    id: "pr-30",
    title: "Persuasive Copywriter (sales Page)",
    description: "Write a high- converting sales page.",
    prompt: "ACT as a world- class direct response copywriter. Write a persuasive sales page for this product/service: [describe product], targeting [audience] with the goal of [conversion goal]. Start with a strong hook that grabs attention, then clearly define the problem and amplify its impact. Introduce the product as the solution, highlighting benefits (not just features). Address objections, build credibility, and include social proof (create realistic examples if needed). Use persuasive techniques such as storytelling, emotional triggers, and logical reasoning. Structure the page clearly with sections that flow naturally. Include a strong call- to- action and urgency element. Avoid vague claims—be specific and convincing. End by suggesting 2 ways to increase conversion further.",
    category: "writing",
    difficulty: "Advanced",
    tags: ["Writing"]
  },
  {
    id: "pr-31",
    title: "Content Rewriter &amp; Improver",
    description: "Rewrite and enhance existing content.",
    prompt: "Act as a professional editor. Rewrite and improve the following content: [paste text]. Your goal is to make it clearer, more engaging, and more impactful without changing its core meaning. Fix grammar, improve sentence structure, and enhance flow. Remove unnecessary words and make the writing more concise and powerful. Adjust tone if needed to match [desired tone, e.g., professional, casual, persuasive]. Ensure the final version is easy to read and sounds natural. Avoid overcomplicating the language. After rewriting, briefly explain the key improvements made and why they matter.",
    category: "writing",
    difficulty: "Beginner",
    tags: ["Writing"]
  },
  {
    id: "pr-32",
    title: "Story Generator (creative Writing)",
    description: "Create an engaging fictional story.",
    prompt: "Act as a creative writer and craft a compelling story based on this idea: [story idea]. The story should target [audience] and follow a clear narrative structure (beginning, conflict, climax, resolution). Develop strong characters with clear motivations and personality. Use vivid descriptions to bring scenes to life, but avoid unnecessary detail. Maintain pacing so the story remains engaging throughout. Include dialogue where appropriate and ensure it sounds natural. Keep the tone consistent with the genre [genre]. End with a meaningful or memorable conclusion. Finally, suggest one way the story could be expanded into a longer piece.",
    category: "writing",
    difficulty: "Intermediate",
    tags: ["Writing"]
  },
  {
    id: "pr-33",
    title: "Email Writer (professional &amp; Persuasive)",
    description: "Write effective professional or marketing emails.",
    prompt: "Act as an expert email writer. Write a clear, effective email for this purpose: [describe purpose], addressed to [recipient type], with the goal of [desired outcome]. Start with a strong subject line that encourages opening, then write a concise and engaging body that communicates the message clearly. Maintain an appropriate tone (professional, friendly, persuasive, etc.). Structure the email so it is easy to read and avoids unnecessary length. Include a clear call- to- action. Ensure the email feels natural and not robotic. Avoid generic phrases. End by suggesting 2 alternative subject lines that could improve open rates.",
    category: "writing",
    difficulty: "Beginner",
    tags: ["Writing"]
  },
  {
    id: "pr-34",
    title: "Blog Post Idea Generator",
    description: "Generate high-quality blog content ideas.",
    prompt: "Act as a content strategist. Generate 10 high-quality blog post ideas for this niche: [niche], targeting [audience], with the goal of [traffic/engagement/authority]. Ensure each idea is specific, relevant, and valuable to the audience. Avoid generic topics—focus on unique angles, practical insights, or trending discussions. For each idea, include a short explanation of why it would perform well and what key points it should cover. Prioritize ideas that can realistically attract attention and provide value. End by recommending the single best idea to start with and explain why.",
    category: "writing",
    difficulty: "Beginner",
    tags: ["Writing"]
  },
  {
    id: "pr-35",
    title: "Essay Writer (academic Style)",
    description: "Write structured academic essays.",
    prompt: "Act as an academic writer. Write a well-structured essay on this topic: [topic], following [academic level/style if needed]. Begin with a clear introduction that outlines the argument, then develop the body with logically structured paragraphs that support the main points. Use clear reasoning, examples, and evidence where appropriate. Maintain formal tone and coherence throughout. Conclude with a strong summary that reinforces the key argument. Avoid unnecessary repetition and ensure clarity. End by suggesting 2 ways to strengthen the essay further.",
    category: "writing",
    difficulty: "Intermediate",
    tags: ["Writing"]
  },
  {
    id: "pr-36",
    title: "Social Media Post Generator",
    description: "Create engaging social media content.",
    prompt: "Act as a social media content creator. Write 5 engaging posts for [platform, e.g., Twitter, LinkedIn, Instagram] about [topic], targeting [audience]. Each post should be clear, attention- grabbing, and aligned with the platform's style. Include hooks, concise messaging, and a strong takeaway. Use tone appropriate for the platform (professional, casual, witty, etc.). Avoid generic or overused phrases. Include hashtags if relevant. Ensure each post delivers value (insight, advice, or perspective). End by identifying which post is most likely to perform best and why.",
    category: "writing",
    difficulty: "Beginner",
    tags: ["Writing"]
  },
  {
    id: "pr-37",
    title: "Script Writer (video/content)",
    description: "Write scripts for videos or presentations.",
    prompt: "Act as a scriptwriter. Write a compelling script for a [type of video, e.g., YouTube, TikTok, presentation] about [topic], targeting [audience]. Start with a strong hook in the first few seconds, then structure the content clearly with engaging flow. Keep the language natural and conversational. Include key points, transitions, and moments that keep attention. Avoid unnecessary complexity. Ensure the script delivers value and maintains interest throughout. End with a strong closing or call- to- action. Finally, suggest how the script could be improved for higher engagement.",
    category: "writing",
    difficulty: "Intermediate",
    tags: ["Writing"]
  },
  {
    id: "pr-38",
    title: "Tone Transformer",
    description: "Change the tone of any piece of writing.",
    prompt: "Act as a writing expert. Transform the following text: [paste text] into a [desired tone, e.g., professional, persuasive, casual, authoritative]. Maintain the original meaning but adjust wording, structure, and style to match the new tone. Ensure the result feels natural and appropriate for the intended audience. Improve clarity and readability where possible. Avoid simply swapping words—focus on rewriting effectively. After transforming, briefly explain what changes were made to achieve the new tone.",
    category: "writing",
    difficulty: "Beginner",
    tags: ["Writing"]
  },
  {
    id: "pr-39",
    title: "Complete Marketing Strategy Builder",
    description: "Create a full, actionable marketing strategy from scratch.",
    prompt: "Act as a senior marketing strategist and design a complete, execution- ready marketing strategy for this business/product: [describe product/service], targeting [target audience], operating in [market/region], with a goal of [traffic/leads/sales/brand awareness]. Start by defining the core positioning and unique value proposition, then identify the most effective customer acquisition channels (organic, paid, partnerships, etc.) based on where the audience actually pays attention. Break down messaging angles that will resonate and differentiate from competitors. Create a step- by- step marketing plan covering content, distribution, and conversion. Include a simple funnel (awareness → consideration → conversion) and explain how each stage is handled. Avoid generic advice- focus on practical, executable actions. End by prioritizing the top 3 actions with the highest ROI and explain why, then suggest 2 ways to scale the strategy.",
    category: "marketing",
    difficulty: "Advanced",
    tags: ["Marketing"]
  },
  {
    id: "pr-40",
    title: "Content Marketing Engine",
    description: "Build a structured content strategy that drives growth.",
    prompt: "Act as a content marketing strategist and design a content system for this business: [describe business], targeting [audience], with the goal of [traffic/authority/leads]. Identify the main content pillars based on audience interests and problems, then generate a structured plan of content types (blog, video, social, etc.) tailored to the most effective platforms. Explain how content should move people through the funnel from awareness to conversion. Provide examples of high- performing content angles and hooks. Include a realistic posting schedule and distribution strategy. Focus on consistency and leverage, not burnout. End by identifying one content strategy that has the highest chance of going viral or generating disproportionate results.",
    category: "marketing",
    difficulty: "Intermediate",
    tags: ["Marketing"]
  },
  {
    id: "pr-41",
    title: "Customer Acquisition Plan",
    description: "Develop a system to consistently acquire customers.",
    prompt: "Act as a growth marketer and create a customer acquisition plan for this business: [describe business], targeting [audience], with a goal of acquiring [target number] customers. Identify the most effective acquisition channels based on the audience's behavior (paid ads, SEO, social, referrals, etc.). Break down how each channel should be executed, including messaging, targeting, and budget allocation (if applicable). Highlight potential bottlenecks and risks. Focus on practical strategies that can be implemented immediately. Avoid theory- prioritize execution. End by identifying the fastest way to acquire the first 100 customers and explain why it works.",
    category: "marketing",
    difficulty: "Advanced",
    tags: ["Marketing"]
  },
  {
    id: "pr-42",
    title: "High-converting Funnel Builder",
    description: "Design a marketing funnel that converts traffic into customers.",
    prompt: "Act as a funnel strategist and design a high- converting funnel for this product/service: [describe product], targeting [audience]. Map out each stage of the funnel (awareness, lead capture, nurturing, conversion, retention) and explain what content, messaging, and offers should be used at each stage. Include landing page ideas, lead magnets, email sequences, and conversion triggers. Focus on reducing friction and increasing trust. Avoid generic funnel templates- tailor everything to the product and audience. End by identifying the biggest potential drop- off point in the funnel and how to fix it.",
    category: "marketing",
    difficulty: "Advanced",
    tags: ["Marketing"]
  },
  {
    id: "pr-43",
    title: "Ad Campaign Creator",
    description: "Create effective ad campaigns with targeting and messaging.",
    prompt: "Act as a paid advertising expert and create a complete ad campaign for this product/service: [describe product], targeting [audience], on [platform, e.g., Facebook, Google, TikTok]. Define the campaign objective, audience targeting, and budget approach. Write multiple ad variations including headlines, primary text, and calls- to- action. Explain the strategy behind each variation. Include suggestions for visuals or creatives. Focus on clarity, persuasion, and testing. Avoid generic ad copy. End by recommending how to test and optimize the campaign for better performance.",
    category: "marketing",
    difficulty: "Intermediate",
    tags: ["Marketing"]
  },
  {
    id: "pr-44",
    title: "Brand Positioning Strategist",
    description: "Define a strong, clear brand position in the market.",
    prompt: "Act as a brand strategist and define the positioning for this brand/business: [describe business], targeting [audience], in the [industry]. Clearly articulate the unique value proposition and what makes the brand different from competitors. Identify the core message, tone, and personality of the brand. Explain how the brand should be perceived and why that matters. Suggest messaging angles and key phrases that reinforce positioning. Avoid vague branding language—be specific and strategic. End by suggesting one bold positioning move that could make the brand stand out immediately.",
    category: "marketing",
    difficulty: "Advanced",
    tags: ["Marketing"]
  },
  {
    id: "pr-45",
    title: "Social Media Growth Plan",
    description: "Build a plan to grow an audience on social platforms.",
    prompt: "Act as a social media growth expert and create a plan to grow an audience on [platform] for this brand: [describe brand], targeting [audience]. Define the type of content that will perform best, including themes, formats, and hooks. Suggest a realistic posting schedule and explain how to maintain consistency. Include strategies for increasing engagement, reach, and follower growth. Focus on what actually works on the platform instead of generic advice. End by identifying one strategy that could accelerate growth significantly if executed well.",
    category: "marketing",
    difficulty: "Beginner",
    tags: ["Marketing"]
  },
  {
    id: "pr-46",
    title: "Email Marketing System",
    description: "Build an email marketing strategy that converts.",
    prompt: "Act as an email marketing strategist and design a complete email system for this business: [describe business], targeting [audience], with the goal of [sales/nurturing/retention]. Define the types of emails needed (welcome, nurture, promotional, etc.) and how they should be structured. Suggest key messaging themes and timing for each email. Focus on building trust and driving action without being spammy. Include subject line strategies and personalization ideas. End by suggesting how to increase open and conversion rates over time.",
    category: "marketing",
    difficulty: "Intermediate",
    tags: ["Marketing"]
  },
  {
    id: "pr-47",
    title: "Product Launch Plan",
    description: "Plan and execute a successful product launch.",
    prompt: "Act as a launch strategist and create a detailed launch plan for this product: [describe product], targeting [audience]. Break the launch into phases (pre- launch, launch, post- launch) and define actions for each stage. Include content, promotions, partnerships, and communication strategies. Focus on building anticipation before launch and maximizing conversions during launch. Avoid generic steps—make it specific and actionable. End by identifying the biggest risk to the launch and how to mitigate it.",
    category: "marketing",
    difficulty: "Advanced",
    tags: ["Marketing"]
  },
  {
    id: "pr-48",
    title: "Conversion Rate Optimizer",
    description: "Improve conversion rates across marketing assets.",
    prompt: "Act as a conversion rate optimization expert and analyze this marketing asset: [describe or paste landing page/ad/funnel]. Identify weaknesses in messaging, structure, design, or user experience that could reduce conversions. Suggest specific improvements that would increase clarity, trust, and action. Focus on practical changes that can be implemented quickly. Avoid vague advice—be precise. End by identifying the single highest- impact change that would most likely increase conversions significantly.",
    category: "marketing",
    difficulty: "Advanced",
    tags: ["Marketing"]
  },
  {
    id: "pr-49",
    title: "Ultra- Realistic Product Render",
    description: "Generate high- end, photorealistic product images for branding or ads.",
    prompt: "Act as a professional product photographer and 3D rendering expert. Generate a highly realistic image of this product: [describe product in detail], designed for [purpose: e.g., e- commerce, advertisement, branding]. The image should feature premium lighting, sharp focus, and realistic textures that make the product look tangible and high- quality. Specify environment details such as background [e.g., clean white, luxury setting, lifestyle scene], lighting style [soft studio lighting, dramatic shadows, natural light], and camera angle [close- up, top- down, angled]. Ensure materials (metal, glass, fabric, etc.) are rendered accurately with proper reflections and depth. Avoid unrealistic distortions. The composition should feel professional and visually balanced. Output should be optimized for high resolution and clarity. Finally, suggest 2 variations of the same product shot that could be used for A/B testing in marketing.",
    category: "image",
    difficulty: "Intermediate",
    tags: ["Image"]
  },
  {
    id: "pr-50",
    title: "Brand Identity Visual Generator",
    description: "Create a cohesive visual identity for a brand.",
    prompt: "Act as a brand designer and visual identity expert. Generate a set of visual assets for this brand: [brand name and description], targeting [audience], with a tone of [modern, luxury, playful, etc.]. The output should include logo style direction, color palette suggestions, typography style, and a sample visual composition that represents the brand. Ensure consistency across all elements and explain how they reinforce the brand identity. The visual should reflect the brand's personality and differentiate it from competitors. Avoid generic styles. Focus on uniqueness and clarity. Include design reasoning in a concise way. Finally, suggest how this identity can be adapted for social media and marketing materials.",
    category: "image",
    difficulty: "Advanced",
    tags: ["Image"]
  },
  {
    id: "pr-51",
    title: "Social Media Creative Generator",
    description: "Generate eye- catching social media visuals.",
    prompt: "Act as a social media designer. Create a visually engaging image concept for a post about [topic], targeting [audience], on [platform]. Define layout, color scheme, typography style, and visual hierarchy clearly. The design should grab attention quickly, communicate the message clearly, and fit the platform's style. Include a strong focal point and minimal clutter. Specify image elements such as icons, illustrations, or photos. Ensure the design aligns with the intended tone [casual, professional, bold, etc.]. Output should be optimized for the platform's dimensions. Finally, suggest one variation that could improve engagement.",
    category: "image",
    difficulty: "Beginner",
    tags: ["Image"]
  },
  {
    id: "pr-52",
    title: "Cinematic Scene Generator",
    description: "Create visually rich cinematic- style scenes.",
    prompt: "Act as a cinematic director and visual artist. Generate a highly detailed scene based on this concept: [describe scene]. The image should feel like a movie still, with strong composition, depth, and storytelling. Define lighting (golden hour, neon, dramatic shadows), camera perspective (wide shot, close- up, over- the- shoulder), and environment details. Include mood and atmosphere (e.g., tense, peaceful, mysterious). Ensure elements in the scene interact naturally and contribute to the narrative. Avoid generic visuals—focus on emotional impact and realism. The final image should feel immersive and visually compelling. End by suggesting how the scene could be enhanced for even stronger storytelling.",
    category: "image",
    difficulty: "Intermediate",
    tags: ["Image"]
  },
  {
    id: "pr-53",
    title: "Character Design Generator",
    description: "Create detailed character visuals for stories or games.",
    prompt: "Act as a character designer and illustrator. Create a detailed visual concept for a character based on this description: [describe character]. Define physical appearance, clothing, posture, and expression. Include personality traits and how they reflect in the design. Specify art style (realistic, anime, stylized, etc.) and color palette. Ensure the character feels unique and visually consistent. Add environmental or background elements if relevant. Avoid generic character tropes. Focus on strong identity and storytelling through design. Finally, suggest one alternative version of the character with a different tone or style.",
    category: "image",
    difficulty: "Intermediate",
    tags: ["Image"]
  },
  {
    id: "pr-54",
    title: "Ai Art Style Transformer",
    description: "Reimagine an image or concept in a different art style.",
    prompt: "Act as a digital artist. Transform this concept or image: [describe or upload image] into a different style: [specify style, e.g., watercolor, cyberpunk, oil painting]. Maintain the core subject but reinterpret it visually using the chosen style's defining characteristics such as color palette, texture, and composition. Ensure the final result feels authentic to the style rather than a superficial overlay. Avoid losing important details. Focus on creativity and artistic quality. Finally, suggest one additional style that could work even better and explain why.",
    category: "image",
    difficulty: "Beginner",
    tags: ["Image"]
  },
  {
    id: "pr-55",
    title: "Poster &amp; Cover Art Generator",
    description: "Design posters or cover art for media or campaigns.",
    prompt: "Act as a graphic designer. Create a poster or cover art concept for [project type: movie, book, event, etc.] titled [title], based on [description]. Define layout, focal point, typography style, and color palette. Ensure the design communicates the theme clearly and attracts attention. Include key visual elements and explain how they contribute to the message. Avoid clutter and maintain visual balance. The design should feel professional and market- ready. Finally, suggest how the design could be adapted for digital platforms.",
    category: "image",
    difficulty: "Intermediate",
    tags: ["Image"]
  },
  {
    id: "pr-56",
    title: "Environment &amp; World Builder",
    description: "Create immersive environments or world visuals.",
    prompt: "Act as a world- building artist. Generate a detailed visual environment based on this concept: [describe world or setting]. Define terrain, architecture, atmosphere, lighting, and environmental details. Ensure everything feels coherent and immersive. Include elements that hint at history, culture, or activity within the world. Avoid generic fantasy or sci- fi cliches—focus on originality. The composition should guide the viewer's eye naturally. Finally, suggest how this world could be expanded visually into multiple scenes.",
    category: "image",
    difficulty: "Advanced",
    tags: ["Image"]
  },
  {
    id: "pr-57",
    title: "Thumbnail Generator (high Ctr)",
    description: "Create attention- grabbing thumbnails for videos.",
    prompt: "Act as a YouTube thumbnail designer. Create a high- converting thumbnail concept for a video about [topic], targeting [audience]. Define composition, text placement, colors, and facial expressions (if applicable). Ensure the design is clear, bold, and readable even at small sizes. Use contrast and visual cues to grab attention instantly. Avoid clutter and unnecessary elements. Focus on curiosity and clarity. Finally, suggest one variation that could increase click- through rate further.",
    category: "image",
    difficulty: "Beginner",
    tags: ["Image"]
  },
  {
    id: "pr-58",
    title: "Visual Prompt Enhancer",
    description: "Turn simple ideas into detailed AI image prompts.",
    prompt: "Act as an expert prompt engineer for AI image generation tools. Take this basic idea: [describe idea], and transform it into a highly detailed, optimized prompt. Expand it with precise descriptions of subject, lighting, composition, style, textures, colors, and mood. Ensure the prompt is clear, structured, and designed to produce high- quality, consistent results. Avoid vague wording and add specific details that improve output quality. Include optional variations or modifiers that can be used for experimentation. Finally, explain briefly why the enhanced prompt will produce better results.",
    category: "image",
    difficulty: "Advanced",
    tags: ["Image"]
  },
  {
    id: "pr-59",
    title: "Ai Video Script- To- Visual Builder",
    description: "Turn an idea into a complete AI- generated video with scenes and direction.",
    prompt: "Act as a video director and AI video production expert. Create a complete video plan for this concept: [describe idea], targeting [audience], with the goal of [educate/entertain/sell]. Structure the video into clear scenes, each with a description of visuals, camera angles, motion, transitions, and mood. Include narration/voiceover script that matches the visuals and keeps engagement high. Define pacing, tone, and emotional flow across the video. Suggest background music style and sound effects. Ensure each scene contributes to the overall message and avoids filler. Keep it optimized for AI video tools (Runway, Pika, Sora, etc.) by making visuals clear and prompt- friendly. End by suggesting how to shorten or adapt the video for short- form platforms.",
    category: "video",
    difficulty: "Advanced",
    tags: ["Video"]
  },
  {
    id: "pr-60",
    title: "Short- Form Viral Video Generator",
    description: "Create high- engagement short videos for platforms like TikTok/Reels.",
    prompt: "Act as a viral content strategist. Create a short- form video concept (15- 60 seconds) about [topic], targeting [audience], optimized for [platform]. Start with a strong hook in the first 3 seconds, then structure the video with fast pacing and high engagement. Define visuals, on- screen text, and voiceover clearly. Use proven patterns like curiosity gaps, storytelling, or shocking facts. Ensure the content is simple, clear, and attention- grabbing. Avoid unnecessary complexity. Include captions or text overlays where needed. End with a strong call- to- action. Finally, suggest one variation that could increase chances of going viral.",
    category: "video",
    difficulty: "Intermediate",
    tags: ["Video"]
  },
  {
    id: "pr-61",
    title: "Youtube Video Script Generator",
    description: "Write structured, engaging YouTube video scripts.",
    prompt: "Act as a YouTube content strategist and scriptwriter. Write a full video script for a video about [topic], targeting [audience], with the goal of [engagement/education/retention]. Start with a compelling hook, then structure the content logically with clear sections. Maintain a conversational tone and keep the audience engaged throughout. Include cues for visuals, B- roll, and transitions. Avoid fluff—every part should add value. End with a strong conclusion and call- to- action. Ensure pacing keeps attention high. Finally, suggest how to improve audience retention further.",
    category: "video",
    difficulty: "Intermediate",
    tags: ["Video"]
  },
  {
    id: "pr-62",
    title: "Video Ad Creator",
    description: "Create high- converting video ads.",
    prompt: "Act as a performance marketing expert and video ad creator. Create a video ad for this product/service: [describe product], targeting [audience], on [platform]. Start with a strong attention- grabbing hook, then highlight the problem and introduce the solution clearly. Structure the ad for maximum conversion using emotional triggers and logical persuasion. Define visuals, scenes, and voiceover clearly. Include text overlays and key selling points. Keep the ad concise and impactful. Avoid generic messaging. End with a compelling call- to- action. Finally, suggest how to test and optimize the ad for better performance.",
    category: "video",
    difficulty: "Advanced",
    tags: ["Video"]
  },
  {
    id: "pr-63",
    title: "Storyboard Generator",
    description: "Create a scene- by- scene storyboard for video production.",
    prompt: "Act as a storyboard artist and video planner. Break down this video concept: [describe idea] into a detailed storyboard. Divide the video into scenes and describe each one clearly, including visuals, camera angles, movement, and transitions. Ensure logical flow and continuity between scenes. Include notes on timing and pacing. Keep it practical for production. Avoid vague descriptions—be specific. End by identifying the most critical scene and why it matters most.",
    category: "video",
    difficulty: "Intermediate",
    tags: ["Video"]
  },
  {
    id: "pr-64",
    title: "Talking Head Video Optimizer",
    description: "Improve scripts and structure for talking- head videos.",
    prompt: "Act as a video content coach. Optimize this talking- head video idea/script: [paste or describe]. Improve the hook, clarity, structure, and engagement. Suggest where to add emphasis, pauses, or visual aids. Ensure the delivery feels natural and keeps attention. Remove unnecessary parts and tighten the message. Focus on clarity and impact. End by suggesting one change that would significantly improve viewer retention.",
    category: "video",
    difficulty: "Beginner",
    tags: ["Video"]
  },
  {
    id: "pr-65",
    title: "Educational Video Creator",
    description: "Create clear and engaging educational videos.",
    prompt: "Act as an educational content creator. Design a video that teaches [topic] to [audience]. Break down the concept into simple, easy- to- understand sections. Define visuals, examples, and explanations for each part. Keep the content engaging without oversimplifying. Include analogies or real- world examples to improve understanding. Maintain logical progression from basic to advanced ideas. End with a summary and key takeaways. Finally, suggest one way to make the content more engaging.",
    category: "video",
    difficulty: "Intermediate",
    tags: ["Video"]
  },
  {
    id: "pr-66",
    title: "Cinematic Video Concept Designer",
    description: "Design visually compelling cinematic video concepts.",
    prompt: "Act as a cinematic director. Create a visually rich video concept based on this idea: [describe concept]. Define scenes with strong composition, lighting, camera movement, and mood. Ensure the video tells a story visually, even without heavy dialogue. Include transitions and pacing that enhance emotional impact. Avoid generic visuals—focus on originality and depth. The output should feel like a film concept. End by suggesting how to elevate the concept further.",
    category: "video",
    difficulty: "Advanced",
    tags: ["Video"]
  },
  {
    id: "pr-67",
    title: "Repurposing Content Engine",
    description: "Turn one piece of content into multiple video formats.",
    prompt: "Act as a content repurposing strategist. Take this content: [paste or describe content] and convert it into multiple video formats (short- form clips, long- form video, teaser, etc.). Define how each version should be structured and what parts of the content should be highlighted. Ensure each format is optimized for its platform. Avoid simple duplication—adapt the content properly. Focus on maximizing reach and efficiency. End by identifying which version will likely perform best and why.",
    category: "video",
    difficulty: "Intermediate",
    tags: ["Video"]
  },
  {
    id: "pr-68",
    title: "Video Prompt Enhancer (ai Tools)",
    description: "Turn simple ideas into optimized prompts for AI video tools.",
    prompt: "Act as an expert prompt engineer for AI video generation tools. Take this basic idea: [describe idea] and transform it into a highly detailed prompt suitable for tools like Runway, Pika, or Sora. Expand it with clear descriptions of scenes, motion, camera angles, lighting, style, and transitions. Ensure the prompt is structured and specific enough to produce consistent, high- quality results. Avoid vague wording. Include optional variations or modifiers for experimentation. Finally, explain briefly why the enhanced prompt will produce better output.",
    category: "video",
    difficulty: "Advanced",
    tags: ["Video"]
  },
  {
    id: "pr-69",
    title: "Personal Productivity Audit",
    description: "Analyze your current productivity and identify improvements.",
    prompt: "Act as a productivity coach. Evaluate my current workflow, habits, and tools based on this description: [describe daily routine, tasks, tools used]. Identify bottlenecks, distractions, and inefficiencies. Provide a detailed step- by- step action plan to optimize time management, task prioritization, and focus. Suggest practical techniques (e.g., batching, time blocking, automation) and specify which tools or apps would best support each improvement. End by recommending the top 3 changes that will have the greatest immediate impact on productivity.",
    category: "productivity",
    difficulty: "Beginner",
    tags: ["Productivity"]
  },
  {
    id: "pr-70",
    title: "Task Prioritization System",
    description: "Organize tasks effectively using proven prioritization frameworks.",
    prompt: "Act as a productivity strategist. Create a personalized task prioritization system for me based on this list of tasks: [paste tasks] and this context: [describe deadlines, importance, and impact]. Recommend a framework (Eisenhower Matrix, ABC method, MoSCoW, etc.) and map each task accordingly. Explain why each task is categorized as such and provide a clear daily or weekly schedule. Include suggestions for tracking progress and avoiding procrastination. End by highlighting the tasks that should be done first to maximize impact.",
    category: "productivity",
    difficulty: "Intermediate",
    tags: ["Productivity"]
  },
  {
    id: "pr-71",
    title: "Goal Setting &amp; Tracking Planner",
    description: "Build a system to define, track, and achieve goals.",
    prompt: "Act as a goal achievement coach. Help me define specific, measurable, achievable, relevant, and time- bound (SMART) goals for this area of my life or work: [describe context]. Break each goal into actionable milestones and assign deadlines. Recommend tools or methods to track progress consistently. Include accountability mechanisms and ways to adjust goals when necessary. Suggest a weekly reflection routine to review achievements and obstacles. End by identifying which single milestone should be prioritized for maximum progress.",
    category: "productivity",
    difficulty: "Intermediate",
    tags: ["Productivity"]
  },
  {
    id: "pr-72",
    title: "Focus &amp; Deep Work Planner",
    description: "Design a system to maximize deep work and minimize distractions.",
    prompt: "Act as a productivity strategist specializing in deep work. Design a daily and weekly schedule that maximizes uninterrupted focus for my tasks: [describe tasks], considering my environment: [describe work setting] and typical distractions. Include techniques like time blocking, Pomodoro variations, and environment optimization. Recommend specific habits, apps, or tools to reduce interruptions and increase concentration. Explain how to handle meetings, messages, and multitasking efficiently. End by suggesting one habit change that will have the most significant impact on deep work sessions.",
    category: "productivity",
    difficulty: "Advanced",
    tags: ["Productivity"]
  },
  {
    id: "pr-73",
    title: "Automation &amp; Workflow Optimization",
    description: "Identify and automate repetitive tasks to save time.",
    prompt: "Act as a workflow automation expert. Analyze my current tasks: [describe tasks, software, and processes]. Identify repetitive or low- value activities suitable for automation. Recommend automation tools or scripts (Zapier, Make, macros, AI assistants, etc.) and provide step- by- step instructions to implement them. Suggest how to integrate these automations into my daily workflow without disruption. Focus on practicality and measurable time savings. End by highlighting which automation will save the most time immediately.",
    category: "productivity",
    difficulty: "Advanced",
    tags: ["Productivity"]
  },
  {
    id: "pr-74",
    title: "Meeting Efficiency Consultant",
    description: "Optimize meetings for productivity and clarity.",
    prompt: "Act as a productivity consultant. Analyze my meeting schedule and goals: [describe meetings, attendees, objectives, and duration]. Recommend strategies to reduce unnecessary meetings, improve focus, and maximize output. Suggest agendas, time limits, and follow- up systems. Include methods to ensure actionable outcomes and accountability. Avoid vague advice- provide practical steps. End by identifying the single most impactful change I can make to improve overall meeting efficiency.",
    category: "productivity",
    difficulty: "Beginner",
    tags: ["Productivity"]
  },
  {
    id: "pr-75",
    title: "Daily &amp; Weekly Planner Generator",
    description: "Create structured daily and weekly schedules for maximum efficiency.",
    prompt: "Act as a productivity coach. Generate a daily and weekly planner for me based on these tasks and responsibilities: [list tasks] and my working hours: [specify]. Include task prioritization, breaks, focus blocks, and buffer times. Recommend an optimal sequence for completing tasks based on urgency, energy levels, and deadlines. Suggest productivity techniques like batching, theme days, or morning routines. End by highlighting which part of the schedule will have the greatest effect on completing tasks efficiently.",
    category: "productivity",
    difficulty: "Beginner",
    tags: ["Productivity"]
  },
  {
    id: "pr-76",
    title: "Email &amp; Communication Optimization",
    description: "Reduce time spent on emails and improve communication workflow.",
    prompt: "Act as a productivity and communication expert. Review my current email/communication practices: [describe platforms, frequency, volume]. Recommend strategies to reduce overload, prioritize important messages, and automate repetitive communication. Suggest templates, scheduling rules, and filters. Include steps for handling messages efficiently without losing important information. Focus on practical implementation rather than theory. End by suggesting the single change that will save the most time.",
    category: "productivity",
    difficulty: "Intermediate",
    tags: ["Productivity"]
  },
  {
    id: "pr-77",
    title: "Habit Formation &amp; Consistency Plan",
    description: "Build sustainable productivity habits.",
    prompt: "Act as a habit formation coach. Help me build and maintain productive habits related to: [describe habits, e.g., exercise, learning, work routines]. Provide step- by- step guidance on habit stacking, triggers, reinforcement, and tracking. Suggest ways to overcome procrastination, resistance, and environmental challenges. Include tools for tracking consistency and measuring progress. End by recommending one keystone habit that will have the most cascading effect on overall productivity.",
    category: "productivity",
    difficulty: "Intermediate",
    tags: ["Productivity"]
  },
  {
    id: "pr-78",
    title: "Productivity Reflection &amp; Improvement",
    description: "Review performance and optimize long- term productivity.",
    prompt: "Act as a productivity analyst. Review my recent productivity: [describe last week/month's activities, goals, successes, and failures]. Identify patterns, bottlenecks, and areas of wasted effort. Suggest specific, actionable strategies to improve efficiency, focus, and time management in the next period. Include recommendations for task batching, delegation, automation, and habit adjustments. Avoid vague suggestions—focus on measurable, practical steps. End by highlighting the single most impactful change I can implement immediately to improve overall productivity.",
    category: "productivity",
    difficulty: "Advanced",
    tags: ["Productivity"]
  },
  {
    id: "pr-79",
    title: "Personalized Learning Roadmap",
    description: "Create a complete learning path tailored to skills and goals.",
    prompt: "Act as a learning strategist and curriculum designer. Create a detailed, step- by- step learning roadmap for mastering [subject/skill], considering my current level: [beginner/intermediate/advanced] and my goal: [e.g., career advancement, exam readiness, personal mastery]. Include core topics, subtopics, resources (books, courses, articles, videos), practice exercises, and recommended timelines. Specify milestones and measurable outcomes for each stage. Suggest techniques for retention, spaced repetition, and active recall. Include tips for integrating learning into a daily routine and adapting when progress stalls. End by highlighting the one highest- impact resource or strategy that will accelerate learning fastest.",
    category: "learning",
    difficulty: "Advanced",
    tags: ["Learning"]
  },
  {
    id: "pr-80",
    title: "Deep Understanding Study Plan",
    description: "Develop a structured plan for mastering complex concepts.",
    prompt: "Act as an educational consultant. Create a step- by- step study plan for [subject/topic] for someone aiming to achieve deep understanding. Break down the material into manageable chunks, explain the optimal sequence for learning, and provide specific practice exercises or problem- solving tasks. Include strategies for reviewing, summarizing, and testing understanding. Suggest active learning methods (Feynman technique, concept mapping, interleaving). End by identifying the one area most likely to be misunderstood and how to master it efficiently.",
    category: "learning",
    difficulty: "Intermediate",
    tags: ["Learning"]
  },
  {
    id: "pr-81",
    title: "Exam Prep &amp; Success Blueprint",
    description: "Build a comprehensive plan to excel in exams.",
    prompt: "Act as an exam preparation strategist. Develop a complete study and revision plan for [exam name], targeting [score/grade goal], based on my current level: [describe]. Include a schedule with time allocation for each topic, practice exams, and review cycles. Suggest high- yield study methods, memory techniques, and exam strategies. Provide specific resources like past papers, question banks, or online tools. Highlight common pitfalls and how to avoid them. End by recommending the single most impactful practice method that will maximize exam performance.",
    category: "learning",
    difficulty: "Advanced",
    tags: ["Learning"]
  },
  {
    id: "pr-82",
    title: "Learning Style Optimizer",
    description: "Adapt study methods to personal learning style for efficiency.",
    prompt: "Act as a cognitive learning expert. Analyze my learning preferences: [describe tendencies, e.g., visual, auditory, kinesthetic] and create a customized study strategy for [subject/topic]. Suggest methods, resources, and exercises that align with my strengths and compensate for weaknesses. Include techniques to maintain engagement, improve retention, and reduce cognitive overload. Recommend a schedule and habit cues for consistent learning. End by identifying the method that will most quickly improve comprehension in my strongest learning modality.",
    category: "learning",
    difficulty: "Beginner",
    tags: ["Learning"]
  },
  {
    id: "pr-83",
    title: "Skill Application &amp; Mastery Plan",
    description: "Build a plan to not just learn but apply and master a skill.",
    prompt: "Act as a mastery coach. Create a structured plan to achieve practical mastery of [skill/subject]. Include learning phases: foundational knowledge, applied practice, real- world projects, feedback cycles, and refinement. Recommend exercises, simulations, or projects that ensure skills transfer to real- world application. Suggest performance benchmarks and methods to evaluate progress objectively. Include techniques to retain and expand knowledge over time. End by identifying the single practice or project that will provide the highest skill improvement.",
    category: "learning",
    difficulty: "Advanced",
    tags: ["Learning"]
  },
  {
    id: "pr-84",
    title: "Accelerated Learning Framework",
    description: "Reduce learning time while maximizing retention and skill acquisition.",
    prompt: "Act as an accelerated learning specialist. Design a learning framework for [subject/skill] that optimizes retention and reduces time to proficiency. Include strategies such as active recall, spaced repetition, interleaving, deliberate practice, and meta- learning techniques. Specify resource types and sequencing for maximum efficiency. Include ways to track progress and adjust pace dynamically. End by recommending the one change to my current learning approach that will yield the largest efficiency gain.",
    category: "learning",
    difficulty: "Advanced",
    tags: ["Learning"]
  },
  {
    id: "pr-85",
    title: "Learning Through Teaching Method",
    description: "Use teaching as a tool to reinforce and consolidate learning.",
    prompt: "Act as an educational coach. Create a plan for me to learn [topic] effectively by teaching it to others. Break the subject into teachable modules, explain key concepts to simplify, and include exercises where I simulate teaching scenarios. Recommend tools for sharing knowledge (videos, blogs, presentations). Include feedback loops to identify gaps in understanding. End by suggesting the single teaching activity that will most strengthen my comprehension and retention.",
    category: "learning",
    difficulty: "Intermediate",
    tags: ["Learning"]
  },
  {
    id: "pr-86",
    title: "Knowledge Retention System",
    description: "Build a system to retain and recall learned information long- term.",
    prompt: "Act as a cognitive science expert. Design a retention system for [subject/skill] that ensures I remember key concepts over the long term. Include techniques like spaced repetition, mnemonic devices, retrieval practice, and concept mapping. Suggest practical ways to integrate these methods into daily learning and review schedules. Recommend tools or apps to support the system. End by identifying the technique most likely to prevent forgetting critical information.",
    category: "learning",
    difficulty: "Intermediate",
    tags: ["Learning"]
  },
  {
    id: "pr-87",
    title: "Learning Obstacles Troubleshooter",
    description: "Identify and solve learning challenges for faster progress.",
    prompt: "Act as a learning optimization consultant. Analyze my current learning challenges in [subject/skill] based on this description: [describe struggles, e.g., retention, motivation, comprehension]. Identify root causes for slow progress and cognitive roadblocks. Recommend practical, step- by- step solutions for each challenge. Include habit adjustments, resource recommendations, and technique modifications. Avoid vague suggestions—focus on actionable fixes. End by highlighting the single adjustment likely to yield the biggest improvement in learning efficiency.",
    category: "learning",
    difficulty: "Advanced",
    tags: ["Learning"]
  },
  {
    id: "pr-88",
    title: "Multi- Disciplinary Learning Planner",
    description: "Create a system to learn multiple subjects or skills simultaneously.",
    prompt: "Act as a polylearning strategist. Design a learning plan for mastering multiple subjects/skills at once: [list subjects/skills], considering my available time: [hours per week] and desired proficiency levels. Provide an optimized schedule balancing time across disciplines, sequencing topics for cognitive efficiency, and suggesting techniques for cross- disciplinary reinforcement. Include practical exercises, review cycles, and strategies to prevent burnout. End by identifying which subject or skill should receive priority in early stages for the greatest overall learning synergy.",
    category: "learning",
    difficulty: "Advanced",
    tags: ["Learning"]
  }
];

export const PHASES: Phase[] = [
  {
    "id": "p0",
    "number": "00",
    "title": "DIGITAL FUNDAMENTALS",
    "badge": "Foundation",
    "weeks": "WEEK 1",
    "objective": "Google Workspace, Developers Environments",
    "color": "text-sky-400",
    "resources": [
      {
        "title": "Google Workspace Fundamentals",
        "url": "https://youtu.be/7YE7jX1Xg7g?si=EKcYrft0uIFcXPIC",
        "type": "yt"
      },
      {
        "title": "Developer Environments Setup",
        "url": "https://youtu.be/lWEKiak0WVU?si=ysMrOtyQn40Zptst",
        "type": "yt"
      },
      {
        "title": "How the Internet Works",
        "url": "https://youtu.be/zN8YNNHcaZc?si=1-fJHCxjXUkz5ZF6",
        "type": "yt"
      },
      {
        "title": "DNS Explained",
        "url": "https://youtu.be/nyH0nYhMW9M?si=x2mm6ZK0GhWImV50",
        "type": "yt"
      },
      {
        "title": "Frontend vs Backend vs Full Stack",
        "url": "https://youtu.be/Lq6BJag6Zs4?si=6r29IN_peAObytI8",
        "type": "yt"
      },
      {
        "title": "How Websites Work (Behind the Scenes)",
        "url": "https://youtu.be/-Hh9DpgULHU?si=KnRh9s5t8m06Ki7R",
        "type": "yt"
      },
      {
        "title": "UI/UX Design Basics",
        "url": "https://youtu.be/kbZejnPXyLM?si=68Fmxz84p9s4MUD-",
        "type": "yt"
      },
      {
        "title": "What Makes a Landing Page Convert",
        "url": "https://youtu.be/az1Zh-FNSno?si=-hRF6CpXNRF10ciV",
        "type": "yt"
      },
      {
        "title": "Product Thinking for Beginners",
        "url": "https://youtu.be/Tk-EI2yYT3A?si=0S0thY1E_kY7V-rh",
        "type": "yt"
      }
    ,
      {
        "title": "CLI Mastery: Command Prompt & PowerShell",
        "url": "https://www.youtube.com/watch?v=ueKFupiT2wA",
        "type": "yt"
      },
      {
        "title": "Modern SDLC & Agile AI Development",
        "url": "https://www.youtube.com/watch?v=P1mbqnACR0M",
        "type": "yt"
      },
      {
        "title": "Technical Writing for Developers",
        "url": "https://www.youtube.com/watch?v=vT5pcc30Ffw",
        "type": "yt"
      },
      {
        "title": "System Documentation & Technical Specs Engineering",
        "url": "https://www.youtube.com/watch?v=nypgQn7sMY8",
        "type": "yt"
      },
      {
        "title": "AI-Enhanced Market & Product Research",
        "url": "https://www.youtube.com/watch?v=wGuRuuPuYNQ",
        "type": "yt"
      },
      {
        "title": "Neural Architectures & AI Brain Design",
        "url": "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "Google Digital Garage",
        "url": "https://learndigital.withgoogle.com/digitalgarage",
        "type": "certification",
        "provider": "Google"
      },
      {
        "title": "Google Cloud Skills Boost",
        "url": "https://www.cloudskillsboost.google",
        "type": "course",
        "provider": "Google"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/c1EW8Ucj6sQ?si=_1uXMZ44ud9cK0dY",
        "outcome": "A professional wireframe for a high-converting landing page.",
        "steps": [
          "Define user flow",
          "Layout hero section",
          "Design feature grid",
          "Add CTA elements"
        ]
      }
    ],
    "tools": [
      {
        "name": "Notion",
        "url": "https://www.notion.so"
      },
      {
        "name": "Figma",
        "url": "https://www.figma.com"
      },
      {
        "name": "Google Workspace",
        "url": "https://support.google.com/a/users"
      }
    ],
    "tasks": [
      {
        "id": "p0-t1",
        "label": "1 landing page wireframe in Figma"
      },
      {
        "id": "p0-t2",
        "label": "Personal knowledge base in Notion (set up)"
      },
      {
        "id": "p0-t3",
        "label": "Google Digital Garage – lesson 1–5 done"
      }
    ],
    "project": {
      "title": "Digital Ecosystem Setup",
      "description": "Design and structure pages intentionally built to guide visitors toward a specific action.",
      "deliverables": [
        "Landing page wireframe",
        "Digital system setup"
      ],
      "sellingStrategy": {
        "pricing": "30,000 - 80,000 NGN ($20 - $50)",
        "whereToFind": [
          "Local SMEs",
          "Personal brands and coaches",
          "Startup landing pages",
          "LinkedIn, Twitter/X, Upwork, Fiverr"
        ],
        "pitch": "I design and structure pages that are intentionally built to guide visitors toward a specific action. I also help businesses set up foundational digital systems such as workspace organization and internal knowledge management."
      }
    }
  },
  {
    "id": "p1",
    "number": "01",
    "title": "GENERATIVE AI AND PROMPT ENGINEERING",
    "badge": "AI Core",
    "weeks": "WEEKS 2-3",
    "objective": "Language Models and use cases too, AI family ecosystem",
    "color": "text-emerald-400",
    "resources": [
      {
        "title": "Language Models & Use Cases",
        "url": "https://youtu.be/5sLYAQS9sWQ?si=YctP0Gf5eLF55xvi",
        "type": "yt"
      },
      {
        "title": "AI Family Ecosystem (Claude, ChatGPT, Gemini, Perplexity)",
        "url": "https://youtu.be/DsKZpgoy830?si=VNMTYxZiqyBc_lFh",
        "type": "yt"
      },
      {
        "title": "Prompt Engineering Full Course",
        "url": "https://youtu.be/p09yRj47kNM?si=8N241Ad2lTVW1PT8",
        "type": "yt"
      },
      {
        "title": "Claude AI - Complete Tutorial & Prompting Guide",
        "url": "https://youtu.be/rRrBbyv3ChM?si=har1nzTGcu92ftSs",
        "type": "yt"
      },
      {
        "title": "AI Workflow Automations (Open-source Models)",
        "url": "https://youtu.be/1uCE0uoKXL8?si=BYlpme8UhjFL6Wep",
        "type": "yt"
      },
      {
        "title": "Prompt Chaining Explained",
        "url": "https://youtu.be/IGdiKtCzhRc?si=Be0TZKVuEmUubwDw",
        "type": "yt"
      },
      {
        "title": "ChatGPT Structured Output / JSON Mode",
        "url": "https://youtu.be/XDfhwOZHYYs?si=S9Um_mTCoKOeRoa",
        "type": "yt"
      },
      {
        "title": "AI Agents vs Generative AI - Key Differences",
        "url": "https://youtu.be/O2gerCxEXvc?si=TFHTVkQ6mOWL9TJ",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "Anthropic Prompt Engineering Guide",
        "url": "https://docs.anthropic.com",
        "type": "guide",
        "provider": "Anthropic"
      },
      {
        "title": "OpenAI Prompt Engineering Guide",
        "url": "https://platform.openai.com/docs/guides/prompt-engineering",
        "type": "guide",
        "provider": "OpenAI"
      },
      {
        "title": "ChatGPT Prompt Engineering for Developers",
        "url": "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers",
        "type": "course",
        "provider": "DeepLearning.AI"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/zkXonmqIBFg?si=4bi5hpsr3zKFYoC",
        "outcome": "A custom prompt-based system for automated marketing copy.",
        "steps": [
          "Set up API",
          "Design prompt chains",
          "Implement context injection",
          "Test output quality"
        ]
      }
    ],
    "tools": [
      {
        "name": "Claude",
        "url": "https://claude.ai"
      },
      {
        "name": "ChatGPT",
        "url": "https://chat.openai.com"
      },
      {
        "name": "Perplexity",
        "url": "https://perplexity.ai"
      }
    ],
    "tasks": [
      {
        "id": "p1-t1",
        "label": "AI content generator (Claude + prompt chain)"
      },
      {
        "id": "p1-t2",
        "label": "AI research assistant (Claude Code project)"
      },
      {
        "id": "p1-t3",
        "label": "DeepLearning.AI Prompt Engineering certificate"
      },
      {
        "id": "p1-t4",
        "label": "Personal 'prompt library' doc in Notion"
      }
    ],
    "project": {
      "title": "AI-Driven Workflows",
      "description": "Design AI-driven workflows and prompt systems that allow businesses to automate processes.",
      "deliverables": [
        "AI content generator",
        "AI research assistant"
      ],
      "sellingStrategy": {
        "pricing": "20,000 - 100,000 NGN ($15 - $65)",
        "whereToFind": [
          "Marketing teams",
          "Content agencies",
          "Founders and startups",
          "LinkedIn, Upwork, Indie Hackers, Gumroad"
        ],
        "pitch": "I design AI-driven workflows and prompt systems that allow businesses to automate processes in a structured and repeatable way. This includes building content generation systems, research assistants, structured output pipelines, and internal knowledge tools."
      }
    }
  },
  {
    "id": "p2",
    "number": "02",
    "title": "NO-CODE WEB DEVELOPMENT",
    "badge": "Build",
    "weeks": "WEEKS 4-6",
    "objective": "Build high-quality, responsive, and conversion-focused websites.",
    "color": "text-amber-400",
    "resources": [
      {
        "title": "Webflow Video",
        "url": "https://youtu.be/RXdH2H01P88?si=EJYQ7bJsj35xUsTb",
        "type": "yt"
      },
      {
        "title": "Framer Website Builder Full Tutorial",
        "url": "https://youtu.be/1w6HIurOqjw?si=Usnsa8_PMxT05FIo",
        "type": "yt"
      },
      {
        "title": "WordPress Full Course",
        "url": "https://youtu.be/R4v_7hh4Yys?si=493bJINXH1iQjazv",
        "type": "yt"
      },
      {
        "title": "Build with Elementor - WordPress Page Builder",
        "url": "https://youtu.be/3YG3XLmBX4A?si=5zwDh9PSs65ll9Al",
        "type": "yt"
      },
      {
        "title": "Mobile Responsive Web Design",
        "url": "https://youtu.be/m9uXR4xt95w?si=cmqfMQG1RGWGyBgrm",
        "type": "yt"
      },
      {
        "title": "Webflow Full Course",
        "url": "https://youtu.be/1EvoteyU6PA?si=Bvl7qgWI6jM0BFLO",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "Webflow Expert Certification",
        "url": "https://university.webflow.com/certifications",
        "type": "certification",
        "provider": "Webflow"
      },
      {
        "title": "WordPress Learn",
        "url": "https://learn.wordpress.org",
        "type": "course",
        "provider": "WordPress"
      },
      {
        "title": "Google UX Design Certificate",
        "url": "https://www.coursera.org/professional-certificates/google-ux-design",
        "type": "certification",
        "provider": "Google"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/JnwATqjYohI?si=okSn3NTmerC2ogsm",
        "outcome": "A live, responsive portfolio website.",
        "steps": [
          "Import design",
          "Set up CMS",
          "Add animations",
          "Deploy"
        ]
      }
    ],
    "tools": [
      {
        "name": "Webflow",
        "url": "https://webflow.com"
      },
      {
        "name": "Framer",
        "url": "https://framer.com"
      },
      {
        "name": "WordPress",
        "url": "https://wordpress.org"
      }
    ],
    "tasks": [
      {
        "id": "p2-t1",
        "label": "2-3 websites (Webflow + Framer)"
      },
      {
        "id": "p2-t2",
        "label": "1 portfolio-ready landing page (live URL)"
      },
      {
        "id": "p2-t3",
        "label": "Webflow University core lessons done"
      },
      {
        "id": "p2-t4",
        "label": "First freelance pitch ready"
      }
    ],
    "project": {
      "title": "No-Code Websites",
      "description": "Build high-quality, responsive, and conversion-focused websites using modern no-code tools.",
      "deliverables": [
        "Live Websites",
        "Portfolio Landing Page"
      ],
      "sellingStrategy": {
        "pricing": "80,000 - 300,000 NGN ($50 - $200)",
        "whereToFind": [
          "Local businesses",
          "Startup founders",
          "Personal brands",
          "Instagram outreach, LinkedIn, referrals, freelance platforms"
        ],
        "pitch": "I build high-quality, responsive, and conversion-focused websites using modern no-code tools. This allows me to deliver production-ready websites in significantly shorter timeframes while maintaining a high level of design and performance."
      }
    }
  },
  {
    "id": "p2-5",
    "number": "2.5",
    "title": "VIBE CODING AND AI ASSISTED DESIGNS",
    "badge": "AI-Powered Build",
    "weeks": "WEEKS 6.5-7.5",
    "objective": "Claude Code, Google Stich, Google AI studio, Google Antigravity, KIMI Code",
    "color": "text-teal-400",
    "resources": [
      {
        "title": "Vibe Coding Explained - Build with AI",
        "url": "https://youtu.be/iLCDSY2XX7E?si=9rXYTZvdx_Mkheyo",
        "type": "yt"
      },
      {
        "title": "Google Stitch AI - Full Tutorial",
        "url": "https://youtu.be/Dk0dSiEke0M?si=X2djGKhDVaMcQitO",
        "type": "yt"
      },
      {
        "title": "Google Anti Gravity - Zero-Friction AI Design",
        "url": "https://youtu.be/mvHGl6zEA3w?si=ukZLL9TwFJVtc3-i",
        "type": "yt"
      },
      {
        "title": "Google Jules",
        "url": "https://youtu.be/LWqxbq2smp0?si=K0uWNWjX28byD9QM",
        "type": "yt"
      },
      {
        "title": "Google AI Studio",
        "url": "https://youtu.be/PsE9u37gJjU?si=Od6EiJTrlICD4Y_m",
        "type": "yt"
      },
      {
        "title": "Google Code Wiki",
        "url": "https://youtu.be/osb_mt3ne70?si=I61buw0pQdoVndWd",
        "type": "yt"
      },
      {
        "title": "Notebook LM",
        "url": "https://youtu.be/OdMTSmTqexg?si=FSB_OmveP9AWWtcY",
        "type": "yt"
      },
      {
        "title": "AI UI/UX Design - Complete Workflow",
        "url": "https://youtu.be/1ClbYm_mgpk?si=BKZkIR0oNkfEilnr",
        "type": "yt"
      },
      {
        "title": "Vibe 3D Website Design with AI Tools",
        "url": "https://youtu.be/nhibi9TRgNc?si=abjOUZ-R88WjTFDl",
        "type": "yt"
      },
      {
        "title": "Build Websites with AI - Full Guide",
        "url": "https://youtu.be/KIsuIj-Ll3k?si=EKxGTU6w2MWZEtkb",
        "type": "yt"
      },
      {
        "title": "Claude Code Free Set-Up",
        "url": "https://youtu.be/GRUjApPqCoE?si=ckUA7rFUDXRMlPQL",
        "type": "yt"
      }
    ,
      {
        "title": "Google Antigravity: Advanced AI Workflows",
        "url": "https://www.youtube.com/watch?v=BeRnLV8EZJs",
        "type": "yt"
      },
      {
        "title": "OPENCODE FULLCOURSE",
        "url": "https://youtu.be/uZGDO0L-Dr4?si=ab2ZammaQWdAiX8A",
        "type": "yt"
      },
      {
        "title": "KIMICODE FULL COURSE",
        "url": "https://youtu.be/iyXDidb8IG8?si=ECCHhOnjO1p2rNe-",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "v0 by Vercel",
        "url": "https://v0.dev",
        "type": "tool",
        "provider": "Vercel"
      },
      {
        "title": "Google AI Studio",
        "url": "https://aistudio.google.com",
        "type": "tool",
        "provider": "Google"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/9PmEzZD1aEU?si=2zNL03fJGhOYzmiN",
        "outcome": "An immersive landing page built with AI-assisted design.",
        "steps": [
          "Generate UI",
          "Refine with AI",
          "Export code",
          "Deploy"
        ]
      }
    ],
    "tools": [
      {
        "name": "Google Stitch",
        "url": "https://stitch.withgoogle.com"
      },
      {
        "name": "v0 by Vercel",
        "url": "https://v0.dev"
      },
      {
        "name": "Bolt.new",
        "url": "https://bolt.new"
      }
    ],
    "tasks": [
      {
        "id": "p25-t1",
        "label": "1 website built with Google Stitch (live URL)"
      },
      {
        "id": "p25-t2",
        "label": "1 landing page with Google Anti Gravity"
      },
      {
        "id": "p25-t3",
        "label": "3D interactive element using AI tools"
      },
      {
        "id": "p25-t4",
        "label": "Vibe-coded portfolio piece"
      }
    ],
    "project": {
      "title": "AI-Assisted Web Design",
      "description": "Produce high-quality websites and interfaces in significantly reduced timeframes.",
      "deliverables": [
        "Vibe-coded Website",
        "AI Design Assets"
      ],
      "sellingStrategy": {
        "pricing": "50,000 - 150,000 NGN ($30 - $100)",
        "whereToFind": [
          "Fast-delivery website services",
          "Content creation",
          "Template selling",
          "Twitter/X, TikTok, Instagram, Discord"
        ],
        "pitch": "I combine AI tools with structured design principles to produce high-quality websites and interfaces in significantly reduced timeframes. This allows businesses to get premium-level results without the traditional delays and high costs."
      }
    }
  },
  {
    "id": "p3",
    "number": "03",
    "title": "AI EMBEDDED WEBSITE AND DEVELOPMENT",
    "badge": "AI Integration",
    "weeks": "WEEKS 7-9",
    "objective": "Turn websites into intelligent, revenue-generating systems.",
    "color": "text-orange-400",
    "resources": [
      {
        "title": "How to Add an AI Chatbot to ANY Website",
        "url": "https://youtu.be/U5ku1dSIWFY?si=VT2kzPrKUglcBRNE",
        "type": "yt"
      },
      {
        "title": "OpenAI API Tutorial — Build Your First AI App",
        "url": "https://www.youtube.com/live/zDvYnuo1aQw?si=MIODmNUyezG-w3cl",
        "type": "yt"
      },
      {
        "title": "Claude API Integration — Step by Step",
        "url": "https://youtu.be/A4vB0poh8mM?si=pDJJT2c_uZmSHmyP",
        "type": "yt"
      },
      {
        "title": "Build AI Chatbot for Website — Full Project",
        "url": "https://youtu.be/SWP3k-24jT4?si=Z1gKy-ia15ntEREX",
        "type": "yt"
      },
      {
        "title": "AI Lead Generation Workflow Tutorial",
        "url": "https://youtu.be/iOg7SpprYiw?si=5wdUXpCAF7TUDYKO",
        "type": "yt"
      },
      {
        "title": "Connect Chatbot to CRM (Make/n8n)",
        "url": "https://youtu.be/JStC_MFi9Oo?si=WDNfN4gPBco6-ET9",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "Anthropic Claude API",
        "url": "https://docs.anthropic.com",
        "type": "guide",
        "provider": "Anthropic"
      },
      {
        "title": "OpenAI API",
        "url": "https://platform.openai.com",
        "type": "guide",
        "provider": "OpenAI"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Follow Up Project",
        "url": "https://youtu.be/SNwqkdhv1HQ?si=aaZ6cW3TKPPkbrhY",
        "outcome": "A custom-trained AI assistant integrated into a live website.",
        "steps": [
          "Train model",
          "Design flow",
          "Connect API",
          "Embed"
        ]
      }
    ],
    "tools": [
      {
        "name": "n8n",
        "url": "https://n8n.io"
      },
      {
        "name": "Make",
        "url": "https://make.com"
      }
    ],
    "tasks": [
      {
        "id": "p3-t1",
        "label": "AI chatbot embedded in a live website"
      },
      {
        "id": "p3-t2",
        "label": "Lead capture → email notification system"
      },
      {
        "id": "p3-t3",
        "label": "First sellable 'AI website' product"
      }
    ],
    "project": {
      "title": "Intelligent AI Website",
      "description": "Build intelligent websites that integrate AI directly into the user experience.",
      "deliverables": [
        "Live AI Website",
        "Lead Capture System"
      ],
      "sellingStrategy": {
        "pricing": "150,000 - 500,000 NGN ($100 - $350)",
        "whereToFind": [
          "Real estate",
          "Clinics",
          "E-commerce",
          "Consultants",
          "LinkedIn, local business associations"
        ],
        "pitch": "I build intelligent websites that integrate AI directly into the user experience. These systems can respond to customer inquiries in real time, guide users through services, and capture leads automatically."
      }
    }
  },
  {
    "id": "p4",
    "number": "04",
    "title": "AUTOMATION, TASK SCHEDULING AND AI TOOLS DEPLOYMENT",
    "badge": "Automation",
    "weeks": "WEEKS 10-13",
    "objective": "Build systems businesses will pay recurring fees for.",
    "color": "text-rose-500",
    "resources": [
      {
        "title": "n8n Full Automation",
        "url": "https://youtu.be/UIf-SlmMays?si=Nkn67L18zTH6vCVr",
        "type": "yt"
      },
      {
        "title": "n8n Business Automation Examples",
        "url": "https://youtu.be/JStC_MFi9Oo?si=WDNfN4gPBco6-ET9",
        "type": "yt"
      },
      {
        "title": "WhatsApp Business API Automation",
        "url": "https://youtu.be/iOg7SpprYiw?si=5wdUXpCAF7TUDYKO",
        "type": "yt"
      },
      {
        "title": "Email Automation Systems",
        "url": "https://youtu.be/SWP3k-24jT4?si=Z1gKy-ia15ntEREX",
        "type": "yt"
      },
      {
        "title": "Airtable / CRM Setup",
        "url": "https://youtu.be/A4vB0poh8mM?si=pDJJT2c_uZmSHmyP",
        "type": "yt"
      },
      {
        "title": "Make full tutorials",
        "url": "https://youtu.be/JSA2oezQWOU?si=IKrDRgni1eQfd_17",
        "type": "yt"
      },
      {
        "title": "Webhook & CRM Automation",
        "url": "https://youtu.be/uFc7YQG0a1M?si=y6pZ8pKdclofuG7l / https://youtu.be/QKTyqLz8a4g?si=qCCLyBI_I74JXi1w",
        "type": "yt"
      },
      {
        "title": "WhatsApp & Email Automation",
        "url": "https://youtu.be/pzMbHdqPTEI?si=L1-HSQ2-fy7pabs7",
        "type": "yt"
      },
      {
        "title": "Google Workspace Automation",
        "url": "https://youtu.be/4d-kZiS0PRs?si=pRljINcY6Kd9-236",
        "type": "yt"
      },
      {
        "title": "Manus AI",
        "url": "https://youtu.be/sKJW5QOPRy4?si=5TTcBYySqL73UHii",
        "type": "yt"
      },
      {
        "title": "Google Opal",
        "url": "https://www.youtube.com/live/T3A42YYP29I?si=-c35Mw2D3znw6WLZ",
        "type": "yt"
      }
    ,
      {
        "title": "Automated Data Extraction & Web Scraping",
        "url": "https://www.youtube.com/watch?v=RKsLLG-bzEY",
        "type": "yt"
      },
      {
        "title": "Shell Scripting & Regular Expressions",
        "url": "https://www.youtube.com/watch?v=mSQM8Xo78Wc",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "n8n Academy",
        "url": "https://academy.n8n.io",
        "type": "certification",
        "provider": "n8n"
      },
      {
        "title": "Make Academy",
        "url": "https://academy.make.com",
        "type": "certification",
        "provider": "Make"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Automated Lead Gen System",
        "url": "https://youtu.be/SNwqkdhv1HQ?si=aaZ6cW3TKPPkbrhY",
        "outcome": "A fully automated workflow connecting forms, CRM, and email.",
        "steps": [
          "Set up trigger",
          "Map data",
          "Configure alerts",
          "Test flow"
        ]
      },
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/XPK7D1qd2XY?si=fG60-wPICYMkzhKm",
        "outcome": "Project outcome",
        "steps": []
      }
    ],
    "tools": [
      {
        "name": "n8n",
        "url": "https://n8n.io"
      },
      {
        "name": "Airtable",
        "url": "https://airtable.com"
      },
      {
        "name": "Make",
        "url": "https://make.com"
      }
    ],
    "tasks": [
      {
        "id": "p4-t1",
        "label": "Lead gen automation (Form → CRM → Email)"
      },
      {
        "id": "p4-t2",
        "label": "WhatsApp business notification system"
      },
      {
        "id": "p4-t3",
        "label": "n8n Academy certification"
      }
    ],
    "project": {
      "title": "Business Automation System",
      "description": "Develop automated systems that connect different software tools to streamline business operations.",
      "deliverables": [
        "n8n Workflows",
        "Airtable CRM Setup"
      ],
      "sellingStrategy": {
        "pricing": "100k - 300k NGN setup + 30k - 100k/mo maintenance",
        "whereToFind": [
          "Agencies",
          "E-commerce",
          "Coaches",
          "LinkedIn, Upwork, Cold Outreach"
        ],
        "pitch": "I develop automated systems that connect different software tools to streamline business operations. By setting up workflows that handle data entry, lead management, and customer notifications, I help businesses reduce manual work and improve efficiency."
      }
    }
  },
  {
    "id": "p5",
    "number": "05",
    "title": "AGENTIC AI AND USES",
    "badge": "Agentic AI",
    "weeks": "WEEKS 14-17",
    "objective": "Build AI that thinks, plans, and acts.",
    "color": "text-indigo-400",
    "resources": [
      {
        "title": "AI Agents Full Tutorial",
        "url": "https://youtu.be/w0H1-b044KY?si=gSsAdrrNk_oMILaC",
        "type": "yt"
      },
      {
        "title": "LangChain Full Course",
        "url": "https://youtu.be/Cyv-dgv80kE?si=Q6yDouglaYqwhSq6",
        "type": "yt"
      },
      {
        "title": "Build Autonomous AI Agent",
        "url": "https://youtu.be/jb4AAFCRPrI?si=MgehzKPfYow0jjA",
        "type": "yt"
      },
      {
        "title": "CrewAI Tutorial",
        "url": "https://youtu.be/sPzc6hMg7So?si=8YhP9x-7Vn4B1c3E",
        "type": "yt"
      },
      {
        "title": "Multi-Agent Collaboration",
        "url": "https://youtu.be/X3XJeTApVMM?si=n63Awybgx9ni13fj",
        "type": "yt"
      },
      {
        "title": "Tool Calling in AI",
        "url": "https://youtu.be/h8gMhXYAv1k?si=2OXnkTk6QkG128Tg",
        "type": "yt"
      },
      {
        "title": "Memory in AI Agents",
        "url": "https://youtu.be/W2HVdB4Jbjs?si=PD9EidkG3tKa0203",
        "type": "yt"
      },
      {
        "title": "Build AI Sales Agent with n8n + Claude",
        "url": "https://youtu.be/uAtSMEBosGU?si=dL8dQh5TlG5z2W0Y",
        "type": "yt"
      },
      {
        "title": "Advanced AI agents for marketing/research",
        "url": "https://youtu.be/Sjc7rcblJY4?si=zX87UeoQKUvT467f",
        "type": "yt"
      },
      {
        "title": "AI-assisted decision-making systems",
        "url": "https://youtu.be/8lo1s29ODj8?si=_N8ZhOdMR6z3I17r",
        "type": "yt"
      }
    ,
      {
        "title": "MCP & Tool Integration",
        "url": "https://www.youtube.com/watch?v=5xqFjh56AwM",
        "type": "yt"
      },
      {
        "title": "Simulating Autonomous Agentic Workflows",
        "url": "https://www.youtube.com/watch?v=uXVLyJJLEKA",
        "type": "yt"
      },
      {
        "title": "Engineering Agentic Pipelines",
        "url": "https://www.youtube.com/watch?v=eooxQPZQUEM",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "LangChain Documentation",
        "url": "https://python.langchain.com",
        "type": "guide",
        "provider": "LangChain"
      },
      {
        "title": "CrewAI Documentation",
        "url": "https://docs.crewai.com",
        "type": "guide",
        "provider": "CrewAI"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Multi-Agent Research System",
        "url": "https://youtu.be/SNwqkdhv1HQ?si=aaZ6cW3TKPPkbrhY",
        "outcome": "An autonomous AI agent system that performs complex research tasks.",
        "steps": [
          "Define roles",
          "Set up tools",
          "Implement memory",
          "Deploy"
        ]
      },
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/EI5VmqNsjzg?si=aPTI-aVZpo9cQkRa",
        "outcome": "Project outcome",
        "steps": []
      }
    ],
    "tools": [
      {
        "name": "LangChain",
        "url": "https://langchain.com"
      },
      {
        "name": "CrewAI",
        "url": "https://crewai.com"
      }
    ],
    "tasks": [
      {
        "id": "p5-t1",
        "label": "AI sales agent that books calls"
      },
      {
        "id": "p5-t2",
        "label": "AI research assistant with memory"
      },
      {
        "id": "p5-t3",
        "label": "Multi-agent workflow using CrewAI"
      }
    ],
    "project": {
      "title": "Autonomous AI Agents",
      "description": "Build advanced AI agents capable of autonomous decision-making and task execution.",
      "deliverables": [
        "Agent Workflow",
        "Tool Integrations"
      ],
      "sellingStrategy": {
        "pricing": "300,000 - 1,500,000 NGN ($200 - $1,000+)",
        "whereToFind": [
          "Tech Startups",
          "Enterprise",
          "Agencies",
          "LinkedIn, specialized freelance networks"
        ],
        "pitch": "I build advanced AI agents capable of autonomous decision-making and task execution. These systems can handle complex, multi-step processes like customer support resolution, market research, and data analysis without human intervention."
      }
    }
  },
  {
    "id": "p6",
    "number": "06",
    "title": "GIT AND GITHUB FULL COURSES",
    "badge": "Dev Basics",
    "weeks": "WEEKS 18-19",
    "objective": "Host your work. Version your code. Look like a pro.",
    "color": "text-slate-400",
    "resources": [
      {
        "title": "Git & GitHub Full Course",
        "url": "https://youtu.be/S7XpTAnSDL4?si=HAB-QBmIMsPjEfEb",
        "type": "yt"
      },
      {
        "title": "How to Deploy to GitHub Pages",
        "url": "https://youtu.be/QyFcl_Fba-k?si=9z2s1d3f4g5h6j7k",
        "type": "yt"
      },
      {
        "title": "Git Workflow — Branches, Commits, Push",
        "url": "https://youtu.be/e2IbNHi4uCI?si=tsUSt1FIOKEKD1ZX",
        "type": "yt"
      },
      {
        "title": "How to Deploy a Website to GitHub Pages",
        "url": "https://youtu.be/e5AwNU3Y2es?si=rhArmZhdo157pDzn",
        "type": "yt"
      },
      {
        "title": "Advanced Git branching strategies",
        "url": "https://youtu.be/Uszj_k0DGsg?si=mEXUpxInKL3kSupd",
        "type": "yt"
      },
      {
        "title": "GitHub Actions & CI/CD",
        "url": "https://youtu.be/YLtlz88zrLg?si=KiGzTgUhKFilkxbx",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "GitHub Skills",
        "url": "https://skills.github.com",
        "type": "certification",
        "provider": "GitHub"
      }
    ],
    "followAlongProjects": [
      {
        "title": "CI/CD Pipeline",
        "url": "https://youtu.be/scEDHsr3APg?si=1a2b3c4d5e6f7g8h",
        "outcome": "Automated deployment pipeline.",
        "steps": [
          "Init repo",
          "Config Actions",
          "Connect Vercel",
          "Deploy"
        ]
      }
    ],
    "tools": [
      {
        "name": "GitHub",
        "url": "https://github.com"
      },
      {
        "name": "Git",
        "url": "https://git-scm.com"
      }
    ],
    "tasks": [
      {
        "id": "p6-t1",
        "label": "Host all previous projects on GitHub"
      },
      {
        "id": "p6-t2",
        "label": "Deploy one project live on Vercel/Pages"
      },
      {
        "id": "p6-t3",
        "label": "Complete GitHub Skills 'Intro to GitHub'"
      }
    ],
    "project": {
      "title": "Version Control Setup",
      "description": "Set up version control and deployment pipelines.",
      "deliverables": [
        "GitHub Profile",
        "Live Deployments"
      ],
      "sellingStrategy": {
        "pricing": "Included in development projects",
        "whereToFind": [
          "Development teams",
          "Open source",
          "Freelance clients"
        ],
        "pitch": "I ensure all code is properly versioned and deployed using industry-standard tools like Git and GitHub, providing a professional and reliable development process."
      }
    }
  },
  {
    "id": "p6-5",
    "number": "6.5",
    "title": "RUN AI MODELS FROM GITHUB AND HUGGINGFACE",
    "badge": "AI Deployment",
    "weeks": "WEEKS 19.5",
    "objective": "Deploy open-source AI models.",
    "color": "text-purple-400",
    "resources": [
      {
        "title": "Hugging Face Full Course",
        "url": "https://youtu.be/00GKzGyWFEs?si=1l2I6yK3m6K_e0D9",
        "type": "yt"
      },
      {
        "title": "Deploy AI Models Locally",
        "url": "https://youtu.be/sPzc6hMg7So?si=8YhP9x-7Vn4B1c3E",
        "type": "yt"
      },
      {
        "title": "HuggingFace Models Tutorial",
        "url": "https://youtu.be/3kRB2TXewus?si=MqclwmRPPq94Bjc2",
        "type": "yt"
      },
      {
        "title": "GitHub-hosted AI model deployment",
        "url": "https://youtu.be/WiBB8Lsgl7I?si=F7f_ZhdUhVhrDTls",
        "type": "yt"
      },
      {
        "title": "API integration with websites",
        "url": "https://youtu.be/WXsD0ZgxjRw?si=5U3hbtUYf3WF_b6l",
        "type": "yt"
      },
      {
        "title": "Model optimization & quantization",
        "url": "https://youtu.be/K75j8MkwgJ0?si=kdjLFPagvz1mXWtU",
        "type": "yt"
      },
      {
        "title": "Fine-tuning pre-trained models",
        "url": "https://youtu.be/iOdFUJiB0Zc?si=oY5cw583cSvOdzlI",
        "type": "yt"
      },
      {
        "title": "Deployment on cloud platforms",
        "url": "https://youtu.be/vROMXzOWqec?si=eZUSUwIPEdAkoOS3",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "Hugging Face Course",
        "url": "https://huggingface.co/course",
        "type": "course",
        "provider": "Hugging Face"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Local AI Model Deployment",
        "url": "https://youtu.be/zkXonmqIBFg?si=4bi5hpsr3zKFYoC",
        "outcome": "A locally running open-source AI model.",
        "steps": [
          "Download model",
          "Set up environment",
          "Run inference",
          "Build API"
        ]
      },
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/fXUT87PzKKs?si=L8pa61NFhCRWpamZ",
        "outcome": "Project outcome",
        "steps": []
      }
    ],
    "tools": [
      {
        "name": "Hugging Face",
        "url": "https://huggingface.co"
      },
      {
        "name": "Ollama",
        "url": "https://ollama.com"
      }
    ],
    "tasks": [
      {
        "id": "p65-t1",
        "label": "Run a local LLM using Ollama"
      },
      {
        "id": "p65-t2",
        "label": "Deploy a Hugging Face model via API"
      }
    ],
    "project": {
      "title": "Open-Source AI Deployment",
      "description": "Deploy and integrate open-source AI models for specific business use cases.",
      "deliverables": [
        "Local Model Setup",
        "API Integration"
      ],
      "sellingStrategy": {
        "pricing": "100,000 - 400,000 NGN ($70 - $250)",
        "whereToFind": [
          "Startups",
          "Researchers",
          "Tech companies"
        ],
        "pitch": "I help businesses leverage powerful open-source AI models by deploying them locally or via cloud APIs, ensuring data privacy and reducing reliance on expensive proprietary models."
      }
    }
  },
  {
    "id": "p7",
    "number": "07",
    "title": "3D WEB DEVELOPMENT (NO CODE)",
    "badge": "Premium Web",
    "weeks": "WEEKS 20-22",
    "objective": "Build premium-tier websites with 3D elements.",
    "color": "text-fuchsia-400",
    "resources": [
      {
        "title": "Spline 3D Website Tutorial",
        "url": "https://youtu.be/7vMRRT6nhKI?si=1a2b3c4d5e6f7g8h",
        "type": "yt"
      },
      {
        "title": "Webflow + Spline Integration",
        "url": "https://youtu.be/Q7AOvWpIVHU?si=9z2s1d3f4g5h6j7k",
        "type": "yt"
      },
      {
        "title": "Spline 3D Web Design",
        "url": "https://youtu.be/7vMRRT6nhKI?si=OxYv4dtEks9vvfEq",
        "type": "yt"
      },
      {
        "title": "Interactive Landing Pages",
        "url": "https://youtu.be/rL98raGvE_k?si=iPouQ8QNcYCTC23",
        "type": "yt"
      },
      {
        "title": "AI 3D design tools (Runway, Kaedim, Spline AI)",
        "url": "https://youtu.be/S9UQItTpwUQ?si=4A3ybgLSvONBG5eZ / https://youtu.be/QS5QINGGzZQ?si=Sd7BT_U1m0slug08",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "Spline Community Tutorials",
        "url": "https://docs.spline.design",
        "type": "guide",
        "provider": "Spline"
      }
    ],
    "followAlongProjects": [
      {
        "title": "3D Interactive Landing Page",
        "url": "https://youtu.be/JtXVOHKDpHk?si=2l3k4j5h6g7f8d9s",
        "outcome": "A premium 3D website.",
        "steps": [
          "Model in Spline",
          "Export",
          "Integrate in Webflow",
          "Add interactions"
        ]
      },
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/T1VOVArT9YI?si=1Fg5eMxPfgZiUPP6",
        "outcome": "Project outcome",
        "steps": []
      }
    ],
    "tools": [
      {
        "name": "Spline",
        "url": "https://spline.design"
      },
      {
        "name": "Webflow",
        "url": "https://webflow.com"
      }
    ],
    "tasks": [
      {
        "id": "p7-t1",
        "label": "Create a 3D animated landing page"
      },
      {
        "id": "p7-t2",
        "label": "Build an interactive 3D product showcase"
      }
    ],
    "project": {
      "title": "Immersive 3D Web Experience",
      "description": "Design high-end websites with interactive 3D elements.",
      "deliverables": [
        "Live 3D Website",
        "Spline Scene"
      ],
      "sellingStrategy": {
        "pricing": "200,000 - 800,000 NGN ($150 - $550)",
        "whereToFind": [
          "Luxury Brands",
          "Tech Startups",
          "Creative Agencies"
        ],
        "pitch": "I build immersive 3D web experiences that captivate users and elevate brand perception, moving beyond standard flat designs."
      }
    }
  },
  {
    "id": "p8",
    "number": "08",
    "title": "HTML, CSS, JS",
    "badge": "Code Foundations",
    "weeks": "WEEKS 23-26",
    "objective": "Own your code. Build custom components.",
    "color": "text-yellow-400",
    "resources": [
      {
        "title": "HTML Full Course",
        "url": "https://youtu.be/kUMe1FH4CHE?si=-hx9G_O_MWiYZtzY",
        "type": "yt"
      },
      {
        "title": "CSS Tutorial Full Course",
        "url": "https://youtu.be/ieTHC78giGQ?si=9z2s1d3f4g5h6j7k",
        "type": "yt"
      },
      {
        "title": "JavaScript Full Course",
        "url": "https://youtu.be/PkZNo7MFNFg?si=_heUqQd0xKvEPzgD",
        "type": "yt"
      },
      {
        "title": "CSS Full Course",
        "url": "https://youtu.be/OXGznpKZ_sA?si=ulm7EMDn1KONkTT2",
        "type": "yt"
      },
      {
        "title": "JS DOM Manipulation",
        "url": "https://youtu.be/5fb2aPlgoys?si=5FuTCnacxkGr2llg",
        "type": "yt"
      },
      {
        "title": "Build Interactive Website",
        "url": "https://youtu.be/moRqo158NGc?si=Av-uAnWITgMqxYB3",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "Responsive Web Design",
        "url": "https://www.freecodecamp.org/learn/responsive-web-design",
        "type": "certification",
        "provider": "freeCodeCamp"
      },
      {
        "title": "JavaScript Algorithms",
        "url": "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8",
        "type": "certification",
        "provider": "freeCodeCamp"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Responsive Site from Scratch",
        "url": "https://youtu.be/pQN-pnXPaVg?si=1a2b3c4d5e6f7g8h",
        "outcome": "A modern, fully responsive website.",
        "steps": [
          "Write HTML",
          "Build CSS",
          "Add JS",
          "Optimize"
        ]
      },
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/0YFrGy_mzjY?si=SWy70VBGLk8xLIht",
        "outcome": "Project outcome",
        "steps": []
      }
    ],
    "tools": [
      {
        "name": "VS Code",
        "url": "https://code.visualstudio.com"
      },
      {
        "name": "MDN Docs",
        "url": "https://developer.mozilla.org"
      }
    ],
    "tasks": [
      {
        "id": "p8-t1",
        "label": "Build an interactive website from scratch"
      },
      {
        "id": "p8-t2",
        "label": "Create 5 custom UI components"
      },
      {
        "id": "p8-t3",
        "label": "Complete freeCodeCamp Responsive Web Design"
      }
    ],
    "project": {
      "title": "Custom Web Development",
      "description": "Develop custom websites and components from scratch.",
      "deliverables": [
        "GitHub Repo",
        "Interactive Demo"
      ],
      "sellingStrategy": {
        "pricing": "150,000 - 600,000 NGN ($100 - $400)",
        "whereToFind": [
          "Startups",
          "Agencies",
          "Indie Hackers"
        ],
        "pitch": "I build custom web experiences from scratch — no templates, no limitations. Faster, cleaner, and unique."
      }
    }
  },
  {
    "id": "p8-5",
    "number": "8.5",
    "title": "3D WEB DEVELOPMENT (CODE)",
    "badge": "Advanced Web",
    "weeks": "WEEKS 27-29",
    "objective": "Build advanced 3D experiences with code.",
    "color": "text-pink-500",
    "resources": [
      {
        "title": "Three.js Beginner Tutorial",
        "url": "https://youtu.be/Q7AOvWpIVHU?si=1r6F1k0H7r8y6x5s",
        "type": "yt"
      },
      {
        "title": "GSAP Animation Tutorial",
        "url": "https://youtu.be/1wn7oE7t71s?si=9z2s1d3f4g5h6j7k",
        "type": "yt"
      },
      {
        "title": "Three.js Full Tutorial",
        "url": "https://youtu.be/UMqNHi1GDAE?si=9Z9W64KKHbcqzqskx",
        "type": "yt"
      },
      {
        "title": "GSAP Animation",
        "url": "https://youtu.be/AW1yfBKRMKc?si=MTKcaB7kSIXkBhI4",
        "type": "yt"
      },
      {
        "title": "Interactive 3D Websites",
        "url": "https://youtu.be/kRQbRAJ4-Fs?si=MtsjnMoDkCEbhpCT",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "Three.js Journey (Free)",
        "url": "https://threejs-journey.com",
        "type": "course",
        "provider": "Bruno Simon"
      }
    ],
    "followAlongProjects": [
      {
        "title": "3D Scrolling Experience",
        "url": "https://youtu.be/yrQpyA_WwvY?si=2l3k4j5h6g7f8d9s",
        "outcome": "A premium 3D website with GSAP.",
        "steps": [
          "Set up scene",
          "Import models",
          "Config GSAP",
          "Bind animations"
        ]
      },
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/ak1CP5tFpHE?si=bWWfCfpqZYp45Dgx",
        "outcome": "Project outcome",
        "steps": []
      }
    ],
    "tools": [
      {
        "name": "Three.js",
        "url": "https://threejs.org"
      },
      {
        "name": "GSAP",
        "url": "https://gsap.com"
      }
    ],
    "tasks": [
      {
        "id": "p85-t1",
        "label": "Create a Three.js scene"
      },
      {
        "id": "p85-t2",
        "label": "Implement GSAP scroll animations"
      }
    ],
    "project": {
      "title": "Coded 3D Web Experience",
      "description": "Develop highly customized 3D web experiences using code.",
      "deliverables": [
        "Live 3D Website",
        "Source Code"
      ],
      "sellingStrategy": {
        "pricing": "500,000 - 3,000,000+ NGN ($350 - $2,000+)",
        "whereToFind": [
          "Luxury Brands",
          "Tech Startups",
          "Agencies"
        ],
        "pitch": "I develop highly customized 3D web experiences using code, allowing for unparalleled interactivity and performance."
      }
    }
  },
  {
    "id": "p9",
    "number": "09",
    "title": "BACKEND DEVELOPMENT (CODE)",
    "badge": "Backend",
    "weeks": "WEEKS 30-34",
    "objective": "Build complete apps with databases and auth.",
    "color": "text-blue-400",
    "resources": [
      {
        "title": "Node.js Full Course",
        "url": "https://youtu.be/Oe421EPjeBE?si=GOe2DcAJSTzOa_W5",
        "type": "yt"
      },
      {
        "title": "Supabase Database & Authentication",
        "url": "https://youtu.be/kyphLGnSz6Q?si=gU2mXIIZlMGZ_Adk",
        "type": "yt"
      },
      {
        "title": "Next.js Full Course",
        "url": "https://youtu.be/I1V9YWqRIeI?si=2l3k4j5h6g7f8d9s",
        "type": "yt"
      },
      {
        "title": "Firebase Auth",
        "url": "https://youtu.be/_L8j-ZC83y4?si=mWk5qgwwjlvOZ8qz",
        "type": "yt"
      }
    ,
      {
        "title": "Relational Databases & SQL Scripting",
        "url": "https://www.youtube.com/watch?v=SpfIwlAYaKk",
        "type": "yt"
      },
      {
        "title": "Architecting AI-Integrated Backends",
        "url": "https://www.youtube.com/watch?v=F5ZsLbBqWLU",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "Back End Development",
        "url": "https://www.freecodecamp.org/learn/back-end-development-and-apis",
        "type": "certification",
        "provider": "freeCodeCamp"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/JiwTGGGIhDs?si=YklfC8Cb1cOvqneb",
        "outcome": "A functional application with auth and DB.",
        "steps": [
          "Set up Next.js",
          "Config Supabase",
          "Build API",
          "Create UI"
        ]
      }
    ],
    "tools": [
      {
        "name": "Node.js",
        "url": "https://nodejs.org"
      },
      {
        "name": "Supabase",
        "url": "https://supabase.com"
      },
      {
        "name": "Next.js",
        "url": "https://nextjs.org"
      }
    ],
    "tasks": [
      {
        "id": "p9-t1",
        "label": "Build a full stack app with auth + database"
      },
      {
        "id": "p9-t2",
        "label": "Create a user dashboard"
      },
      {
        "id": "p9-t3",
        "label": "Complete freeCodeCamp Back End cert"
      }
    ],
    "project": {
      "title": "Full-Stack Web Application",
      "description": "Develop robust backend systems and integrate them with frontend interfaces.",
      "deliverables": [
        "Live App URL",
        "GitHub Repo"
      ],
      "sellingStrategy": {
        "pricing": "500,000+ NGN ($350+)",
        "whereToFind": [
          "Founders",
          "Small Businesses",
          "Product Hunt"
        ],
        "pitch": "I build fully functional web applications that solve real business problems, from database architecture to frontend deployment."
      }
    }
  },
  {
    "id": "p9-5",
    "number": "9.5",
    "title": "BACKEND DEVELOPMENT (CODE) - Advanced",
    "badge": "Advanced Backend",
    "weeks": "WEEKS 35-36",
    "objective": "Advanced backend concepts.",
    "color": "text-blue-600",
    "resources": [
      {
        "title": "Advanced Node.js",
        "url": "https://youtu.be/ENrzD9HAZK4?si=1r6F1k0H7r8y6x5s",
        "type": "yt"
      },
      {
        "title": "Advanced Backend Integration",
        "url": "https://youtu.be/rOpEN1JDaD0?si=QnjrQ5JuiUtDv_1h",
        "type": "yt"
      },
      {
        "title": "API Design & Deployment",
        "url": "https://youtu.be/WXsD0ZgxjRw?si=VsYShwdUDn1uqxYy",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "Node.js Best Practices",
        "url": "https://github.com/goldbergyoni/nodebestpractices",
        "type": "guide",
        "provider": "Community"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Scalable API",
        "url": "https://youtu.be/wm5gMKuwSYk?si=1a2b3c4d5e6f7g8h",
        "outcome": "A highly scalable API.",
        "steps": [
          "Design architecture",
          "Implement caching",
          "Optimize queries",
          "Deploy"
        ]
      }
    ],
    "tools": [
      {
        "name": "Docker",
        "url": "https://docker.com"
      },
      {
        "name": "Redis",
        "url": "https://redis.io"
      }
    ],
    "tasks": [
      {
        "id": "p95-t1",
        "label": "Implement caching in an API"
      },
      {
        "id": "p95-t2",
        "label": "Dockerize a Node.js application"
      }
    ],
    "project": {
      "title": "Scalable Backend Architecture",
      "description": "Design and implement highly scalable and performant backend systems.",
      "deliverables": [
        "Architecture Diagram",
        "Source Code"
      ],
      "sellingStrategy": {
        "pricing": "800,000+ NGN ($550+)",
        "whereToFind": [
          "Growing Startups",
          "Enterprise",
          "Tech Consultancies"
        ],
        "pitch": "I design and implement highly scalable and performant backend systems capable of handling significant traffic and complex data operations."
      }
    }
  },
  {
    "id": "p10",
    "number": "10",
    "title": "MICRO SAAS BUILDING (NO CODE)",
    "badge": "Product",
    "weeks": "WEEKS 37-40",
    "objective": "Build recurring revenue machines.",
    "color": "text-orange-500",
    "resources": [
      {
        "title": "How to Build a Micro SaaS",
        "url": "https://youtu.be/aQZkra1kEcg?si=1r6F1k0H7r8y6x5s",
        "type": "yt"
      },
      {
        "title": "SaaS MVP Tutorial",
        "url": "https://youtu.be/YwEEV0wHnaA?si=9z2s1d3f4g5h6j7k",
        "type": "yt"
      },
      {
        "title": "Stripe / Paystack Integration",
        "url": "https://youtu.be/LEmOAsyVC8k?si=KNa2tWkUb7moTcyi / https://youtu.be/4eN9by7m2eA?si=aMXZQdfIDihwpLsR",
        "type": "yt"
      },
      {
        "title": "Micro SaaS MVP",
        "url": "https://youtu.be/ChTGbmR2NeM?si=WQNzZXqnWR-1t6vc",
        "type": "yt"
      },
      {
        "title": "Launch Strategy",
        "url": "https://youtu.be/Ki3qBvIRo6A?si=YV6d4N0u1vK9xy3R",
        "type": "yt"
      }
    ,
      {
        "title": "Monetization & Payment Gateway Integration",
        "url": "https://www.youtube.com/watch?v=_YCC9Osq6y4",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "Startup School",
        "url": "https://www.startupschool.org",
        "type": "course",
        "provider": "Y Combinator"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Micro SaaS with Stripe",
        "url": "https://youtu.be/InnFqk5RWgQ?si=1a2b3c4d5e6f7g8h",
        "outcome": "A live software product with subscriptions.",
        "steps": [
          "Set up Stripe",
          "Implement checkout",
          "Handle webhooks",
          "Manage users"
        ]
      },
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/aQZkra1kEcg?si=Yyj8BP1TEC7cTyva",
        "outcome": "Project outcome",
        "steps": []
      }
    ],
    "tools": [
      {
        "name": "Stripe",
        "url": "https://stripe.com"
      },
      {
        "name": "Bubble",
        "url": "https://bubble.io"
      }
    ],
    "tasks": [
      {
        "id": "p10-t1",
        "label": "Build a MicroSaaS with subscription billing"
      },
      {
        "id": "p10-t2",
        "label": "Launch your product on Product Hunt"
      }
    ],
    "project": {
      "title": "Micro SaaS Product",
      "description": "Develop and launch a micro SaaS product using no-code tools.",
      "deliverables": [
        "Live SaaS Product",
        "Stripe Dashboard"
      ],
      "sellingStrategy": {
        "pricing": "5k - 50k NGN/mo ($3 - $35) per user",
        "whereToFind": [
          "Product Hunt",
          "Twitter",
          "Indie Hackers"
        ],
        "pitch": "I build specialized micro SaaS products that solve specific problems for niche audiences, creating recurring revenue streams."
      }
    }
  },
  {
    "id": "p10-5",
    "number": "10.5",
    "title": "CREATE AND DEPLOY AI TOOLS FOR BUSINESSES",
    "badge": "AI Tools",
    "weeks": "WEEKS 41-43",
    "objective": "Deploy custom AI tools.",
    "color": "text-emerald-500",
    "resources": [
      {
        "title": "AI SaaS MVP",
        "url": "https://youtu.be/_CttoOfvh1I?si=1DxXRB36kONxlTbk",
        "type": "yt"
      },
      {
        "title": "AI Tools Deployment for Enterprises",
        "url": "https://youtu.be/GWB9ApTPTv4?si=aLW4qHELgg2DUwyh",
        "type": "yt"
      },
      {
        "title": "Integrate AI with business workflow",
        "url": "https://youtu.be/w0H1-b044KY?si=0YBjRDTytJNWcW4t",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "OpenAI Cookbook",
        "url": "https://cookbook.openai.com",
        "type": "guide",
        "provider": "OpenAI"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Custom Internal AI Tool",
        "url": "https://youtu.be/vspBGjmYeE0?si=9z2s1d3f4g5h6j7k",
        "outcome": "An internal AI tool for a business.",
        "steps": [
          "Identify need",
          "Build tool",
          "Deploy internally",
          "Train staff"
        ]
      },
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/_5ud3vEV3_M?si=bg-qSehiG_6Upiwb",
        "outcome": "Project outcome",
        "steps": []
      }
    ],
    "tools": [
      {
        "name": "Retool",
        "url": "https://retool.com"
      },
      {
        "name": "OpenAI API",
        "url": "https://platform.openai.com"
      }
    ],
    "tasks": [
      {
        "id": "p105-t1",
        "label": "Build an internal AI tool for a specific business process"
      }
    ],
    "project": {
      "title": "Custom AI Business Tools",
      "description": "Develop and deploy custom AI tools to optimize internal business operations.",
      "deliverables": [
        "Deployed AI Tool",
        "User Guide"
      ],
      "sellingStrategy": {
        "pricing": "200,000 - 1,000,000 NGN ($150 - $700)",
        "whereToFind": [
          "Mid-size Businesses",
          "Agencies",
          "Consultants"
        ],
        "pitch": "I develop and deploy custom AI tools tailored to your specific business processes, significantly increasing efficiency and reducing operational costs."
      }
    }
  },
  {
    "id": "p11",
    "number": "11",
    "title": "SEO AND AEO IN 2026",
    "badge": "Marketing",
    "weeks": "WEEKS 44-46",
    "objective": "Master Search and AI Engine Optimization.",
    "color": "text-yellow-500",
    "resources": [
      {
        "title": "SEO Full Course",
        "url": "https://youtu.be/Qs0_Qu22v4M?si=_AeAeR7UdlVhQ6FI",
        "type": "yt"
      },
      {
        "title": "AEO Strategies",
        "url": "https://youtu.be/bhTo8fDmr5I?si=9z2s1d3f4g5h6j7k",
        "type": "yt"
      },
      {
        "title": "Programmatic SEO",
        "url": "https://youtu.be/RYyX752URYM?si=KzEWaS4ZnSv9gHb4",
        "type": "yt"
      },
      {
        "title": "AI SEO Tools (Surfer, ChatGPT)",
        "url": "https://youtu.be/PmKPtCUZlCE?si=1cUMr1TkVmtoQ2s4",
        "type": "yt"
      },
      {
        "title": "Google Search Console & Analytics 4",
        "url": "https://youtu.be/01NYa01j-1Y?si=h02Qpm4jyojDIFzc",
        "type": "yt"
      },
      {
        "title": "Pomelli AI SEO Tools",
        "url": "https://youtu.be/YfecCjUCuGQ?si=DQyka8ZcS5SyVyHd",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "Google Search Central",
        "url": "https://developers.google.com/search",
        "type": "guide",
        "provider": "Google"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/LOLzw_ZkoIc?si=NlQngO8ebcDDHrL3",
        "outcome": "An optimized website.",
        "steps": [
          "Audit site",
          "Optimize content",
          "Implement schema",
          "Monitor rankings"
        ]
      }
    ],
    "tools": [
      {
        "name": "Ahrefs",
        "url": "https://ahrefs.com"
      },
      {
        "name": "Google Search Console",
        "url": "https://search.google.com/search-console"
      }
    ],
    "tasks": [
      {
        "id": "p11-t1",
        "label": "Perform an SEO audit on a website"
      },
      {
        "id": "p11-t2",
        "label": "Optimize content for AI overviews (AEO)"
      }
    ],
    "project": {
      "title": "Search Visibility Optimization",
      "description": "Optimize websites for both traditional search engines and emerging AI platforms.",
      "deliverables": [
        "SEO Audit Report",
        "Optimized Content"
      ],
      "sellingStrategy": {
        "pricing": "100,000 - 500,000 NGN/mo ($70 - $350/mo)",
        "whereToFind": [
          "E-commerce",
          "Local Businesses",
          "Content Creators"
        ],
        "pitch": "I optimize your digital presence for both traditional search engines and emerging AI platforms, ensuring your business remains visible and competitive in the evolving search landscape."
      }
    }
  },
  {
    "id": "p11-5",
    "number": "11.5",
    "title": "DIGITAL SETUPS FOR SELLING AND MARKETING TECH PRODUCTS",
    "badge": "Sales",
    "weeks": "WEEKS 47-49",
    "objective": "Set up systems to sell tech products.",
    "color": "text-red-500",
    "resources": [
      {
        "title": "Tech Sales Strategies",
        "url": "https://youtu.be/-UjLwDa5c8c?si=1r6F1k0H7r8y6x5s",
        "type": "yt"
      },
      {
        "title": "Digital Marketing Setup",
        "url": "https://youtu.be/h95cQkEWBx0?si=RZEB0hcN1whtKZOC",
        "type": "yt"
      },
      {
        "title": "Social Media Integration",
        "url": "https://youtu.be/t09ECV6VhTE?si=0pOliJ05_qLrvG7ID",
        "type": "yt"
      },
      {
        "title": "Product Storefronts (Gumroad, Lemon Squeezy)",
        "url": "https://youtu.be/NZhHu-Dd5Ys?si=thtp3MwVMqElpWBI / https://youtu.be/5E7fbdDJZK4?si=1yTSz8i5UQmdskQi / https://youtu.be/jhWb38VUDss?si=D0-pYBcAYyjvAJ0a",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "HubSpot Sales Software Cert",
        "url": "https://academy.hubspot.com",
        "type": "certification",
        "provider": "HubSpot"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Sales Funnel Setup",
        "url": "https://youtu.be/aQZkra1kEcg?si=9z2s1d3f4g5h6j7k",
        "outcome": "A complete sales funnel.",
        "steps": [
          "Design funnel",
          "Set up CRM",
          "Create email sequence",
          "Launch"
        ]
      },
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/A2boaRR5iEU?si=doaBG_fEoNXdi2dG",
        "outcome": "Project outcome",
        "steps": []
      }
    ],
    "tools": [
      {
        "name": "HubSpot",
        "url": "https://hubspot.com"
      },
      {
        "name": "ActiveCampaign",
        "url": "https://activecampaign.com"
      }
    ],
    "tasks": [
      {
        "id": "p115-t1",
        "label": "Set up a complete sales funnel for a tech product"
      }
    ],
    "project": {
      "title": "Tech Product Sales System",
      "description": "Design and implement comprehensive digital setups for marketing and selling technology products.",
      "deliverables": [
        "Sales Funnel",
        "CRM Configuration"
      ],
      "sellingStrategy": {
        "pricing": "300,000 - 1,000,000 NGN ($200 - $700)",
        "whereToFind": [
          "SaaS Startups",
          "Tech Founders",
          "Agencies"
        ],
        "pitch": "I design and implement comprehensive digital setups for marketing and selling technology products, from lead generation funnels to CRM integration and automated follow-ups."
      }
    }
  },
  {
    "id": "p12",
    "number": "12",
    "title": "FULL SAAS (NO CODE)",
    "badge": "Enterprise",
    "weeks": "WEEKS 50-52",
    "objective": "Build complex SaaS applications without code.",
    "color": "text-purple-600",
    "resources": [
      {
        "title": "Bubble Full Course",
        "url": "https://youtu.be/n8iM5Oeiz9k?si=1r6F1k0H7r8y6x5s",
        "type": "yt"
      },
      {
        "title": "SaaS MVP Setup",
        "url": "https://youtu.be/1hHMwLxN6EM?si=SihoB3i3CEUIHcQC",
        "type": "yt"
      },
      {
        "title": "Full Stack SaaS",
        "url": "https://youtu.be/RkYIWg5XAnI?si=CBpCemIkJrIHdG-K",
        "type": "yt"
      },
      {
        "title": "Subscription Revenue System",
        "url": "https://youtu.be/T3b8ijT27f4?si=NPPs7HkbU0FXBHzL",
        "type": "yt"
      },
      {
        "title": "Launch & Scale",
        "url": "https://youtu.be/r-98YRAF1dY?si=oTNttEuhi6r4tUNI",
        "type": "yt"
      }
    ,
      {
        "title": "Cross-Platform AI Mobile Development",
        "url": "https://www.youtube.com/watch?v=VPvVD8t02U8",
        "type": "yt"
      }
    ],
    "freeResources": [
      {
        "title": "Bubble Academy",
        "url": "https://bubble.io/academy",
        "type": "course",
        "provider": "Bubble"
      }
    ],
    "followAlongProjects": [
      {
        "title": "Complex SaaS Application",
        "url": "https://youtu.be/aQZkra1kEcg?si=9z2s1d3f4g5h6j7k",
        "outcome": "A fully functional SaaS.",
        "steps": [
          "Design database",
          "Build workflows",
          "Create UI",
          "Launch"
        ]
      },
      {
        "title": "Follow Along Project",
        "url": "https://youtu.be/xTtynSB1Aak?si=f_txpGwow_nQZtvs",
        "outcome": "Project outcome",
        "steps": []
      }
    ],
    "tools": [
      {
        "name": "Bubble",
        "url": "https://bubble.io"
      },
      {
        "name": "Xano",
        "url": "https://xano.com"
      }
    ],
    "tasks": [
      {
        "id": "p12-t1",
        "label": "Build a complex SaaS application using Bubble"
      }
    ],
    "project": {
      "title": "Enterprise No-Code SaaS",
      "description": "Develop complex, scalable SaaS applications using advanced no-code platforms.",
      "deliverables": [
        "Live SaaS Application",
        "Database Architecture"
      ],
      "sellingStrategy": {
        "pricing": "1,000,000+ NGN ($700+)",
        "whereToFind": [
          "Enterprise Clients",
          "Funded Startups",
          "Established Businesses"
        ],
        "pitch": "I develop complex, scalable SaaS applications using advanced no-code platforms, delivering enterprise-grade solutions in a fraction of the time required for traditional development."
      }
    }
  }
];
