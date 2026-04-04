import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Circle, 
  ExternalLink, 
  Play, 
  BookOpen, 
  Award, 
  Wrench, 
  TrendingUp, 
  ChevronRight,
  LayoutDashboard,
  Rocket,
  DollarSign,
  Menu,
  X,
  ArrowRight,
  Bot,
  Send,
  Loader2,
  Sparkles,
  Zap,
  Target,
  Clock,
  Briefcase
} from 'lucide-react';
import { PHASES, Phase, Task } from './constants';
import { cn } from './lib/utils';
import { GoogleGenAI } from "@google/genai";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export default function App() {
  const [activePhaseId, setActivePhaseId] = useState<string | 'dashboard'>('dashboard');
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiMessage, setAiMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Handle mouse move for card glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.card-glow');
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--x', `${x}px`);
        (card as HTMLElement).style.setProperty('--y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('completedTasks');
    if (saved) setCompletedTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const toggleTask = (taskId: string) => {
    const newCompleted = completedTasks.includes(taskId)
      ? completedTasks.filter(id => id !== taskId)
      : [...completedTasks, taskId];
    setCompletedTasks(newCompleted);
    localStorage.setItem('completedTasks', JSON.stringify(newCompleted));
  };

  const handleAiChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiMessage.trim()) return;

    const userMsg = aiMessage;
    setAiMessage("");
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const activePhase = PHASES.find(p => p.id === activePhaseId);
      const prompt = `You are the AI Assistant for the "Full Stack AI Builder Path". 
      The user is currently in Phase ${activePhase?.number}: ${activePhase?.title}.
      Objective: ${activePhase?.objective}.
      User question: ${userMsg}
      Provide actionable, concise advice to help them complete their tasks or projects. 
      Focus on execution and real-world outcomes.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      setChatHistory(prev => [...prev, { role: 'ai', text: response.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      console.error(error);
      setChatHistory(prev => [...prev, { role: 'ai', text: "Error connecting to AI. Please check your API key." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const activePhase = PHASES.find(p => p.id === activePhaseId) || PHASES[0];
  
  const totalTasks = PHASES.reduce((acc, p) => acc + p.tasks.length, 0);
  const progress = Math.round((completedTasks.length / totalTasks) * 100);

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white selection:bg-[#00ffc8]/30 animated-bg">
      
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 glass z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <h2 className="font-display text-xl tracking-wider text-[#00ffc8]">TechOptyx</h2>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </header>

      <div className="flex relative z-10">
        {/* Sidebar */}
        <aside className={cn(
          "fixed inset-y-0 left-0 w-[260px] bg-[#0d1326] border-r border-white/5 z-50 transition-transform duration-300 lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="p-6 h-full flex flex-col">
            <div className="mb-10">
              <h2 className="font-display text-2xl tracking-wider text-[#00ffc8]">TechOptyx</h2>
              <p className="text-[10px] font-mono text-white/40 tracking-[0.2em] mt-1 uppercase">AI Mastery Path</p>
            </div>

            <nav className="flex-1 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
              <button 
                onClick={() => {
                  setActivePhaseId('dashboard');
                  setIsSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left group",
                  activePhaseId === 'dashboard'
                    ? "bg-[#00ffc8]/10 text-[#00ffc8] shadow-[0_0_10px_rgba(0,255,200,0.2)]"
                    : "text-white/60 hover:text-white hover:bg-[#00ffc8]/10 hover:shadow-[0_0_10px_rgba(0,255,200,0.2)]"
                )}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="text-sm font-medium">Dashboard</span>
              </button>
              
              <div className="pt-4 pb-2">
                <span className="font-mono text-[10px] text-white/20 px-4 uppercase tracking-[0.2em]">Learning Path</span>
              </div>

              {PHASES.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => {
                    setActivePhaseId(phase.id);
                    setIsSidebarOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left group",
                    activePhaseId === phase.id 
                      ? "bg-[#00ffc8]/10 text-[#00ffc8] shadow-[0_0_10px_rgba(0,255,200,0.2)]" 
                      : "text-white/60 hover:text-white hover:bg-[#00ffc8]/10 hover:shadow-[0_0_10px_rgba(0,255,200,0.2)]"
                  )}
                >
                  <span className="font-mono text-[10px] opacity-50">PH {phase.number}</span>
                  <span className="text-sm font-medium truncate">{phase.title.split(' ')[0]}</span>
                </button>
              ))}
            </nav>

            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="flex justify-between items-end mb-2">
                <span className="font-mono text-[10px] text-white/40 uppercase">Progress</span>
                <span className="font-mono text-xs text-[#00ffc8]">{progress}%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#00ffc8] to-[#007bff]" 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-[260px] min-h-screen pt-20 lg:pt-0">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10">
            
            <AnimatePresence mode="wait">
              {activePhaseId === 'dashboard' ? (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  {/* Hero Section */}
                  <div className="relative">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="relative z-10"
                    >
                      <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#00ffc8] to-[#007bff] bg-clip-text text-fill-transparent leading-tight">
                        Build Real AI Systems
                      </h1>
                      <p className="text-white/60 text-lg max-w-2xl mb-8">
                        Learn, build, and monetize your skills step-by-step with our execution-first roadmap.
                      </p>
                      <button 
                        onClick={() => setActivePhaseId(PHASES[0].id)}
                        className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#00ffc8] to-[#007bff] text-[#0a0f1c] font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,200,0.4)] flex items-center gap-2"
                      >
                        <Rocket className="w-5 h-5" />
                        Start Building
                      </button>
                    </motion.div>

                    {/* Dynamic Moving Animation in Hero */}
                    <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20 lg:opacity-40">
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 90, 180, 270, 360],
                          x: [0, 20, 0, -20, 0],
                          y: [0, -20, 0, 20, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full border-2 border-[#00ffc8] rounded-full flex items-center justify-center"
                      >
                        <motion.div 
                          animate={{ rotate: [360, 0] }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="w-3/4 h-3/4 border border-[#007bff] rounded-lg"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Fast Track Section */}
                  <div className="p-8 rounded-2xl glass relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Sparkles className="w-32 h-32 text-[#00ffc8]" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <Rocket className="w-4 h-4 text-[#00ffc8]" />
                        <span className="font-mono text-[10px] text-[#00ffc8] tracking-widest uppercase">Fast Track</span>
                      </div>
                      <h2 className="text-3xl font-bold mb-3">Get Results in 1 Hour</h2>
                      <p className="text-white/60 mb-6 max-w-2xl">
                        Short on time? Execute these high-impact tasks to get a tangible output immediately.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a 
                          href="https://www.youtube.com/watch?v=c9Wg6Cb_YlU" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 rounded-lg bg-[#00ffc8] text-[#0a0f1c] text-sm font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,200,0.3)]"
                        >
                          <Play className="w-4 h-4 fill-current" />
                          Start Now
                        </a>
                        <div className="px-6 py-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00ffc8]" />
                          Outcome: Live Wireframe
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { label: "Overall Progress", value: `${progress}%`, icon: Target, color: "text-[#00ffc8]" },
                      { label: "Tasks Completed", value: completedTasks.length, icon: CheckCircle2, color: "text-[#007bff]" },
                      { label: "Active Phase", value: `Phase ${PHASES.find(p => p.tasks.some(t => !completedTasks.includes(t.id)))?.number || "10"}`, icon: Zap, color: "text-amber-400" },
                      { label: "Potential Value", value: "₦2.5M+", icon: DollarSign, color: "text-emerald-400" }
                    ].map((stat, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-[#11182e] border border-white/5 relative overflow-hidden group hover:border-[#00ffc8]/30 transition-all card-glow">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <stat.icon className="w-16 h-16" />
                        </div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-3">
                            <stat.icon className={cn("w-4 h-4", stat.color)} />
                            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">{stat.label}</span>
                          </div>
                          <div className="text-3xl font-bold">{stat.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart & Activity */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 p-8 rounded-2xl bg-[#11182e] border border-white/5">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h3 className="text-xl font-bold">Learning Velocity</h3>
                          <p className="text-xs text-white/40 font-mono uppercase tracking-wider mt-1">Tasks completed per phase</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#00ffc8]" />
                            <span className="text-[10px] font-mono text-white/40">COMPLETED</span>
                          </div>
                        </div>
                      </div>
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={PHASES.map(p => ({
                            name: `PH ${p.number}`,
                            completed: p.tasks.filter(t => completedTasks.includes(t.id)).length,
                            total: p.tasks.length
                          }))}>
                            <defs>
                              <linearGradient id="colorComp" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00ffc8" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#00ffc8" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                            <XAxis 
                              dataKey="name" 
                              stroke="rgba(255,255,255,0.2)" 
                              fontSize={10} 
                              tickLine={false} 
                              axisLine={false}
                              dy={10}
                            />
                            <YAxis 
                              stroke="rgba(255,255,255,0.2)" 
                              fontSize={10} 
                              tickLine={false} 
                              axisLine={false}
                              dx={-10}
                            />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#0d1326', 
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                fontSize: '12px'
                              }}
                              itemStyle={{ color: '#00ffc8' }}
                            />
                            <Area 
                              type="monotone" 
                              dataKey="completed" 
                              stroke="#00ffc8" 
                              fillOpacity={1} 
                              fill="url(#colorComp)" 
                              strokeWidth={3}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="p-6 rounded-2xl bg-[#11182e] border border-white/5 card-glow relative overflow-hidden group">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2 relative z-10">
                          <Clock className="w-4 h-4 text-[#007bff]" />
                          Recent Activity
                        </h3>
                        <div className="space-y-4 relative z-10">
                          {completedTasks.length === 0 ? (
                            <p className="text-xs text-white/20 italic">No tasks completed yet.</p>
                          ) : (
                            completedTasks.slice(-5).reverse().map((taskId, i) => {
                              const phase = PHASES.find(p => p.tasks.some(t => t.id === taskId));
                              const task = phase?.tasks.find(t => t.id === taskId);
                              return (
                                <div key={i} className="flex items-start gap-4">
                                  <div className="w-8 h-8 rounded-lg bg-[#00ffc8]/10 flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-4 h-4 text-[#00ffc8]" />
                                  </div>
                                  <div>
                                    <h4 className="text-xs font-medium">{task?.label}</h4>
                                    <p className="text-[9px] text-white/40 mt-0.5 uppercase tracking-wider">Phase {phase?.number}</p>
                                  </div>
                                </div>
                              );
                            })
                          )}
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#00ffc8]/10 to-[#007bff]/10 border border-[#00ffc8]/20 card-glow relative overflow-hidden group">
                        <div className="flex items-center gap-2 mb-4 relative z-10">
                          <Briefcase className="w-4 h-4 text-[#00ffc8]" />
                          <span className="font-mono text-[10px] text-[#00ffc8] tracking-widest uppercase">Career Path</span>
                        </div>
                        <h4 className="font-bold text-sm mb-2 relative z-10">Ready to Monetize?</h4>
                        <p className="text-xs text-white/60 leading-relaxed mb-4 relative z-10">
                          You've completed {completedTasks.length} tasks. Based on your progress, you're ready to start pitching for Phase 1 projects.
                        </p>
                        <button 
                          onClick={() => setActivePhaseId('p1')}
                          className="w-full py-2 rounded-lg bg-[#00ffc8] text-[#0a0f1c] text-[10px] font-bold uppercase tracking-wider hover:scale-[1.02] transition-transform relative z-10"
                        >
                          View Selling Strategy
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Next Milestones */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Target className="w-5 h-5 text-[#00ffc8]" />
                        Next Milestones
                      </h3>
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Your Roadmap</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {PHASES.filter(p => p.tasks.some(t => !completedTasks.includes(t.id))).slice(0, 3).map((p, i) => (
                        <div 
                          key={i} 
                          onClick={() => setActivePhaseId(p.id)}
                          className="p-6 rounded-2xl bg-[#11182e] border border-white/5 hover:border-[#00ffc8]/30 transition-all cursor-pointer group card-glow relative overflow-hidden"
                        >
                          <div className="flex items-center justify-between mb-4 relative z-10">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#00ffc8]/10 transition-colors">
                              <span className="text-xs font-mono text-white/40 group-hover:text-[#00ffc8]">{p.number}</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#00ffc8] group-hover:translate-x-1 transition-all" />
                          </div>
                          <h4 className="font-bold mb-2 group-hover:text-[#00ffc8] transition-colors relative z-10">{p.title}</h4>
                          <p className="text-xs text-white/40 line-clamp-2 leading-relaxed relative z-10">{p.badge}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={activePhase.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Phase Header */}
                  <div className="mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-[#00ffc8]/10 border border-[#00ffc8]/20 text-[10px] font-mono text-[#00ffc8] uppercase tracking-wider">
                          Phase {activePhase.number}
                        </span>
                        <span className="text-white/40 font-mono text-xs tracking-widest uppercase">{activePhase.badge}</span>
                      </div>
                      <h2 className="text-4xl font-bold mb-4">{activePhase.title}</h2>
                      <p className="text-white/60 max-w-2xl italic">"{activePhase.objective}"</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#00ffc8]" />
                        <span className="text-xs font-mono">{activePhase.weeks}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Tasks & Resources */}
                    <div className="lg:col-span-2 space-y-10">
                      
                      {/* Tasks */}
                      <section>
                        <div className="flex items-center gap-3 mb-6">
                          <LayoutDashboard className="w-5 h-5 text-[#00ffc8]" />
                          <h3 className="text-xl font-bold tracking-wide uppercase">Action Tasks</h3>
                        </div>
                        <div className="space-y-3">
                          {activePhase.tasks.map((task) => (
                            <button
                              key={task.id}
                              onClick={() => toggleTask(task.id)}
                              className={cn(
                                "w-full flex items-center gap-4 p-5 rounded-xl border transition-all text-left group relative overflow-hidden",
                                completedTasks.includes(task.id)
                                  ? "bg-[#00ffc8]/5 border-[#00ffc8]/20 text-white"
                                  : "bg-[#11182e] border-white/5 text-white/60 hover:border-[#00ffc8]/30 hover:shadow-[0_0_15px_rgba(0,255,200,0.1)]"
                              )}
                            >
                              {completedTasks.includes(task.id) ? (
                                <CheckCircle2 className="w-5 h-5 text-[#00ffc8] shrink-0" />
                              ) : (
                                <Circle className="w-5 h-5 text-white/10 group-hover:text-[#00ffc8]/50 shrink-0" />
                              )}
                              <span className="text-sm font-medium">{task.label}</span>
                            </button>
                          ))}
                        </div>
                      </section>

                      {/* Resources */}
                      <section>
                        <div className="flex items-center gap-3 mb-6">
                          <BookOpen className="w-5 h-5 text-[#007bff]" />
                          <h3 className="text-xl font-bold tracking-wide uppercase">Learning Resources</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {activePhase.resources.map((res, idx) => (
                            <a
                              key={idx}
                              href={res.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-4 p-5 rounded-xl bg-[#11182e] border border-white/5 hover:border-[#007bff]/30 transition-all group card-glow relative overflow-hidden"
                            >
                              <div className={cn(
                                "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 relative z-10",
                                res.type === 'yt' ? "bg-red-500/10 text-red-500" : "bg-[#007bff]/10 text-[#007bff]"
                              )}>
                                {res.type === 'yt' ? <Play className="w-4 h-4 fill-current" /> : <ExternalLink className="w-4 h-4" />}
                              </div>
                              <div className="flex flex-col min-w-0 relative z-10">
                                <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider mb-1">{res.type}</span>
                                <span className="text-sm font-medium truncate group-hover:text-[#007bff] transition-colors">{res.title}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </section>

                      {/* Free Resources */}
                      {activePhase.freeResources && activePhase.freeResources.length > 0 && (
                        <section>
                          <div className="flex items-center gap-3 mb-6">
                            <Award className="w-5 h-5 text-fuchsia-400" />
                            <h3 className="text-xl font-bold tracking-wide uppercase">Free Certifications & Guides</h3>
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            {activePhase.freeResources.map((res, idx) => (
                              <a
                                key={idx}
                                href={res.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-[#11182e] to-[#1a233a] border border-white/5 hover:border-fuchsia-400/30 transition-all group card-glow relative overflow-hidden"
                              >
                                <div className="flex items-center gap-4 min-w-0 relative z-10">
                                  <div className="w-10 h-10 rounded-lg bg-fuchsia-400/10 text-fuchsia-400 flex items-center justify-center shrink-0">
                                    <Award className="w-5 h-5" />
                                  </div>
                                  <div className="flex flex-col min-w-0">
                                    <span className="text-[10px] font-mono text-fuchsia-400 uppercase tracking-wider mb-1">{res.type} • {res.provider}</span>
                                    <span className="text-sm font-medium truncate group-hover:text-fuchsia-400 transition-colors">{res.title}</span>
                                  </div>
                                </div>
                                <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-fuchsia-400 shrink-0 ml-4 relative z-10" />
                              </a>
                            ))}
                          </div>
                        </section>
                      )}

                      {/* Follow-Along Projects */}
                      {activePhase.followAlongProjects && activePhase.followAlongProjects.length > 0 && (
                        <section>
                          <div className="flex items-center gap-3 mb-6">
                            <Rocket className="w-5 h-5 text-emerald-400" />
                            <h3 className="text-xl font-bold tracking-wide uppercase">Follow-Along Projects</h3>
                          </div>
                          <div className="grid grid-cols-1 gap-6">
                            {activePhase.followAlongProjects.map((proj, idx) => (
                              <div 
                                key={idx}
                                className="p-6 rounded-2xl bg-gradient-to-br from-[#11182e] to-[#0d1326] border border-white/5 relative overflow-hidden group card-glow"
                              >
                                <div className="flex flex-col md:flex-row gap-6 relative z-10">
                                  <a 
                                    href={proj.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full md:w-48 h-32 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center group/thumb relative overflow-hidden shrink-0"
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
                                    <Play className="w-8 h-8 text-white/20 group-hover/thumb:text-emerald-400 group-hover/thumb:scale-110 transition-all" />
                                    <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/60 text-[8px] font-mono text-white/60 uppercase tracking-wider">Tutorial</div>
                                  </a>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors">{proj.title}</h4>
                                    <p className="text-sm text-white/60 mb-4 leading-relaxed">{proj.outcome}</p>
                                    <div className="space-y-2">
                                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Build Steps:</span>
                                      <div className="flex flex-wrap gap-2">
                                        {proj.steps.map((step, i) => (
                                          <span key={i} className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-white/60">
                                            {i + 1}. {step}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}
                    </div>

                    {/* Right Column: Project & Monetization */}

                    <div className="space-y-8">
                      
                      {/* Project */}
                      <div className="p-6 rounded-2xl bg-[#11182e] border border-white/5 relative overflow-hidden group card-glow">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <Award className="w-24 h-24" />
                        </div>
                        
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-4">
                            <Award className="w-5 h-5 text-amber-400" />
                            <span className="font-mono text-[10px] text-amber-400 tracking-widest uppercase">Deliverable</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-3">{activePhase.project.title}</h3>
                          <p className="text-sm text-white/60 mb-6 leading-relaxed">
                            {activePhase.project.description}
                          </p>
                          
                          <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                              <div className="flex items-center gap-2 mb-2">
                                <DollarSign className="w-4 h-4 text-[#00ffc8]" />
                                <span className="font-mono text-[10px] text-[#00ffc8]">Market Value</span>
                              </div>
                              <span className="text-sm font-bold">{activePhase.project.sellingStrategy.pricing}</span>
                            </div>

                            <div className="space-y-2">
                              <span className="font-mono text-[10px] text-white/40 uppercase">Outcome</span>
                              <ul className="space-y-2">
                                {activePhase.project.deliverables.map((d, i) => (
                                  <li key={i} className="flex items-center gap-2 text-xs text-white/80">
                                    <ChevronRight className="w-3 h-3 text-[#00ffc8]" />
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Monetization */}
                      <div className="p-6 rounded-2xl glass border-white/5 bg-white/5 relative overflow-hidden group card-glow">
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-4">
                            <TrendingUp className="w-5 h-5 text-[#007bff]" />
                            <span className="font-mono text-[10px] text-[#007bff] tracking-widest uppercase">Monetization</span>
                          </div>
                          <h4 className="font-bold text-sm mb-4">How to sell this skill:</h4>
                          <p className="text-xs text-white/60 leading-relaxed mb-4">
                            {activePhase.project.sellingStrategy.pitch}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {activePhase.project.sellingStrategy.whereToFind.map((place, i) => (
                              <span key={i} className="px-3 py-1 rounded-full bg-[#007bff]/10 border border-[#007bff]/20 text-[10px] text-[#007bff] uppercase tracking-wider">
                                {place}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Stack */}
                      <div className="p-6 rounded-2xl border border-white/5 bg-[#11182e] relative overflow-hidden group card-glow">
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-4">
                            <Wrench className="w-5 h-5 text-[#00ffc8]" />
                            <span className="font-mono text-[10px] text-[#00ffc8] tracking-widest uppercase">Stack</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {activePhase.tools.map((tool, i) => (
                              <a 
                                key={i} 
                                href={tool.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs hover:border-[#00ffc8]/50 transition-colors"
                              >
                                {tool.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer */}
            <footer className="mt-20 pt-10 border-t border-white/5 text-center">
              <p className="font-mono text-[10px] text-white/40 tracking-[0.3em] uppercase">
                Built by Al Ammr • Powered by TechOptyx
              </p>
            </footer>
          </div>
        </main>
      </div>

      {/* AI Assistant Modal */}
      <AnimatePresence>
        {isAiOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-8 w-96 h-[500px] glass border-white/10 rounded-2xl z-50 flex flex-col overflow-hidden shadow-2xl"
          >
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#00ffc8]/5">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-[#00ffc8]" />
                <span className="font-bold text-sm tracking-wide uppercase">AI Path Assistant</span>
              </div>
              <button onClick={() => setIsAiOpen(false)} className="p-1 hover:bg-white/10 rounded">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {chatHistory.length === 0 && (
                <div className="text-center py-8">
                  <Bot className="w-12 h-12 text-white/10 mx-auto mb-4" />
                  <p className="text-sm text-white/40">
                    Ask me anything about Phase {activePhase.number}. I'm here to help you build and monetize.
                  </p>
                </div>
              )}
              {chatHistory.map((msg, i) => (
                <div key={i} className={cn(
                  "flex flex-col max-w-[85%]",
                  msg.role === 'user' ? "ml-auto items-end" : "items-start"
                )}>
                  <div className={cn(
                    "p-3 rounded-2xl text-sm",
                    msg.role === 'user' 
                      ? "bg-[#00ffc8] text-[#0a0f1c] rounded-tr-none" 
                      : "bg-white/5 text-white/80 rounded-tl-none border border-white/5"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-white/40">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-xs font-mono">Thinking...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleAiChat} className="p-4 border-t border-white/5 bg-black/20">
              <div className="relative">
                <input
                  type="text"
                  value={aiMessage}
                  onChange={(e) => setAiMessage(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-[#0d1326] border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-[#00ffc8]/50 transition-all"
                />
                <button 
                  type="submit"
                  disabled={isTyping || !aiMessage.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#00ffc8] disabled:opacity-30"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating AI Assistant Button */}
      <button 
        onClick={() => setIsAiOpen(!isAiOpen)}
        className={cn(
          "fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center group z-50 transition-all duration-300",
          isAiOpen 
            ? "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)] rotate-90" 
            : "bg-gradient-to-br from-[#00ffc8] to-[#007bff] shadow-[0_0_20px_rgba(0,255,200,0.4)]"
        )}
      >
        {isAiOpen ? <X className="w-6 h-6 text-white" /> : <Bot className="w-6 h-6 text-[#0a0f1c] group-hover:scale-110 transition-transform" />}
      </button>
    </div>
  );
}
