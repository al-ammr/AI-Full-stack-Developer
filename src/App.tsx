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
  ChevronLeft,
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
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { GoogleGenAI } from "@google/genai";
import AboutUs from './components/AboutUs';
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
  const [activePhaseId, setActivePhaseId] = useState<string | 'dashboard' | 'about'>('dashboard');
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiMessage, setAiMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize();

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

  const currentPhaseIndex = PHASES.findIndex(p => p.id === activePhaseId);
  const nextPhase = currentPhaseIndex >= 0 && currentPhaseIndex < PHASES.length - 1 ? PHASES[currentPhaseIndex + 1] : null;
  const prevPhase = currentPhaseIndex > 0 ? PHASES[currentPhaseIndex - 1] : null;

  const phaseTasks = activePhase.tasks;
  const completedPhaseTasks = phaseTasks.filter(t => completedTasks.includes(t.id));
  const isPhaseCompleted = phaseTasks.length > 0 && completedPhaseTasks.length === phaseTasks.length;

  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-primary-container selection:text-white animated-bg">
      {isPhaseCompleted && activePhaseId !== 'dashboard' && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.15}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 100 }}
        />
      )}
      
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-panel z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <h2 className="font-headline font-black text-xl tracking-wider text-white">TechOptyx <span className="text-primary text-sm">AI Full-stack Mastery</span></h2>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-surface/60 backdrop-blur-xl z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 w-[260px] bg-surface-container-low border-r border-outline-variant/20 z-50 transition-transform duration-300 overflow-y-auto custom-scrollbar",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-6 min-h-full flex flex-col">
          <nav className="flex-1 space-y-2 pb-8">
            <button 
              onClick={() => {
                setActivePhaseId('dashboard');
                setIsSidebarOpen(false);
              }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left group mb-2",
                  activePhaseId === 'dashboard'
                    ? "bg-primary-container/20 text-primary shadow-[0_0_10px_rgba(108,59,255,0.2)]"
                    : "text-on-surface-variant hover:text-white hover:bg-primary-container/10"
                )}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="text-sm font-medium">Dashboard</span>
              </button>

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
                      ? "bg-primary-container/20 text-primary shadow-[0_0_10px_rgba(108,59,255,0.2)]" 
                      : "text-on-surface-variant hover:text-white hover:bg-primary-container/10"
                  )}
                >
                  <span className="font-mono text-[10px] opacity-50">PH {phase.number}</span>
                  <span className="text-sm font-medium truncate">{phase.title}</span>
                </button>
              ))}

              <button
                onClick={() => {
                  setActivePhaseId('about');
                  setIsSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left group mt-4 border-t border-outline-variant/10 pt-4",
                  activePhaseId === 'about'
                    ? "bg-primary-container/20 text-primary shadow-[0_0_10px_rgba(108,59,255,0.2)]"
                    : "text-on-surface-variant hover:text-white hover:bg-primary-container/10"
                )}
              >
                <Briefcase className="w-4 h-4" />
                <span className="text-sm font-medium">About Us</span>
              </button>
            </nav>

            <div className="mt-auto pt-4 border-t border-outline-variant/20">
              <div className="p-4 rounded-xl bg-surface-container border border-outline-variant/20">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-label text-[10px] text-on-surface-variant uppercase">Progress</span>
                  <span className="font-mono text-xs text-secondary">{progress}%</span>
                </div>
                <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary-container to-secondary" 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>

      <div className="flex relative z-10">
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
                  <div className="relative rounded-3xl overflow-hidden p-8 lg:p-16 mb-12 border border-outline-variant/20 group">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-all duration-1000 group-hover:scale-105"
                    >
                      <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="relative z-10"
                    >
                      <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6">
                        Build AI Products That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">People Pay For.</span>
                      </h1>
                      <div className="text-on-surface-variant text-lg max-w-2xl mb-8 leading-relaxed space-y-4">
                        <p>Stop consuming tutorials. Start building real AI-powered products that generate income.</p>
                        <p>You’ll learn how to go from zero to a deployed product using AI, automation, and modern tools, step by step.</p>
                        <p>No theory. No wasted time.<br/>Just practical systems that turn your skills into real-world revenue.</p>
                      </div>
                      <button 
                        onClick={() => setActivePhaseId(PHASES[0].id)}
                        className="px-8 py-4 rounded-xl bg-primary-container text-white font-bold hover:translate-y-[-2px] transition-all shadow-[0_15px_30px_-5px_rgba(108,59,255,0.3)] flex items-center gap-2 text-lg"
                      >
                        <Rocket className="w-6 h-6" />
                        Start Building & Earning Now
                      </button>
                    </motion.div>
                  </div>

                  {/* Fast Track Section */}
                  <div className="p-8 rounded-3xl glass-panel relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Sparkles className="w-32 h-32 text-secondary" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <Rocket className="w-4 h-4 text-secondary" />
                        <span className="font-label text-[10px] text-secondary tracking-widest uppercase">Fast Track</span>
                      </div>
                      <h2 className="text-3xl font-bold mb-3 text-white">Get Results in 1 Hour</h2>
                      <p className="text-on-surface-variant mb-6 max-w-2xl">
                        Short on time? Execute these high-impact tasks to get a tangible output immediately.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a 
                          href="https://www.youtube.com/watch?v=c9Wg6Cb_YlU" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 rounded-xl bg-secondary text-on-secondary text-sm font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_15px_rgba(103,255,198,0.3)]"
                        >
                          <Play className="w-4 h-4 fill-current" />
                          Start Now
                        </a>
                        <div className="px-6 py-2.5 rounded-xl bg-surface-container-highest/40 border border-outline-variant/20 text-[11px] font-mono flex items-center gap-2 text-on-surface">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          Outcome: Live Wireframe
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { label: "Overall Progress", value: `${progress}%`, icon: Target, color: "text-secondary" },
                      { label: "Tasks Completed", value: completedTasks.length, icon: CheckCircle2, color: "text-primary" },
                      { label: "Active Phase", value: `Phase ${PHASES.find(p => p.tasks.some(t => !completedTasks.includes(t.id)))?.number || "10"}`, icon: Zap, color: "text-amber-400" },
                      { label: "Potential Value", value: "₦2.5M+", icon: DollarSign, color: "text-emerald-400" }
                    ].map((stat, i) => (
                      <div key={i} className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 relative overflow-hidden group hover:border-secondary/30 transition-all card-glow">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <stat.icon className="w-16 h-16" />
                        </div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-3">
                            <stat.icon className={cn("w-4 h-4", stat.color)} />
                            <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">{stat.label}</span>
                          </div>
                          <div className="text-3xl font-black text-white">{stat.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart & Activity */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 p-8 rounded-3xl glass-card">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h3 className="text-xl font-bold text-white">Learning Velocity</h3>
                          <p className="text-xs text-on-surface-variant font-label uppercase tracking-wider mt-1">Tasks completed per phase</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-secondary" />
                            <span className="text-[10px] font-label text-on-surface-variant uppercase">COMPLETED</span>
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
                                <stop offset="5%" stopColor="#67ffc6" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#67ffc6" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(203,190,255,0.05)" vertical={false} />
                            <XAxis 
                              dataKey="name" 
                              stroke="rgba(203,190,255,0.2)" 
                              fontSize={10} 
                              tickLine={false} 
                              axisLine={false}
                              dy={10}
                            />
                            <YAxis 
                              stroke="rgba(203,190,255,0.2)" 
                              fontSize={10} 
                              tickLine={false} 
                              axisLine={false}
                              dx={-10}
                            />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#151b2d', 
                                border: '1px solid rgba(203,190,255,0.1)',
                                borderRadius: '12px',
                                fontSize: '12px'
                              }}
                              itemStyle={{ color: '#67ffc6' }}
                            />
                            <Area 
                              type="monotone" 
                              dataKey="completed" 
                              stroke="#67ffc6" 
                              fillOpacity={1} 
                              fill="url(#colorComp)" 
                              strokeWidth={3}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="p-6 rounded-3xl glass-card card-glow relative overflow-hidden group">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2 relative z-10 text-white">
                          <Clock className="w-4 h-4 text-primary" />
                          Recent Activity
                        </h3>
                        <div className="space-y-4 relative z-10">
                          {completedTasks.length === 0 ? (
                            <p className="text-xs text-on-surface-variant italic">No tasks completed yet.</p>
                          ) : (
                            completedTasks.slice(-5).reverse().map((taskId, i) => {
                              const phase = PHASES.find(p => p.tasks.some(t => t.id === taskId));
                              const task = phase?.tasks.find(t => t.id === taskId);
                              return (
                                <div key={i} className="flex items-start gap-4">
                                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                                  </div>
                                  <div>
                                    <h4 className="text-xs font-medium text-white">{task?.label}</h4>
                                    <p className="text-[9px] text-on-surface-variant mt-0.5 uppercase tracking-wider font-label">Phase {phase?.number}</p>
                                  </div>
                                </div>
                              );
                            })
                          )}
                        </div>
                      </div>

                      <div className="p-6 rounded-3xl bg-gradient-to-br from-primary-container/20 to-secondary-container/10 border border-primary-container/30 card-glow relative overflow-hidden group">
                        <div className="flex items-center gap-2 mb-4 relative z-10">
                          <Briefcase className="w-4 h-4 text-secondary" />
                          <span className="font-label text-[10px] text-secondary tracking-widest uppercase">Career Path</span>
                        </div>
                        <h4 className="font-bold text-sm mb-2 relative z-10 text-white">Ready to Monetize?</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed mb-4 relative z-10">
                          You've completed {completedTasks.length} tasks. Based on your progress, you're ready to start pitching for Phase 1 projects.
                        </p>
                        <button 
                          onClick={() => setActivePhaseId('p1')}
                          className="w-full py-3 rounded-xl bg-primary-container text-white text-[10px] font-bold uppercase tracking-wider hover:scale-[1.02] transition-transform relative z-10 shadow-[0_0_15px_rgba(108,59,255,0.3)]"
                        >
                          View Selling Strategy
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Next Milestones */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold flex items-center gap-2 text-white">
                        <Target className="w-5 h-5 text-secondary" />
                        Next Milestones
                      </h3>
                      <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Your Roadmap</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {PHASES.filter(p => p.tasks.some(t => !completedTasks.includes(t.id))).slice(0, 3).map((p, i) => (
                        <div 
                          key={i} 
                          onClick={() => setActivePhaseId(p.id)}
                          className="p-6 rounded-3xl glass-card hover:border-secondary/30 transition-all cursor-pointer group card-glow relative overflow-hidden"
                        >
                          <div className="flex items-center justify-between mb-4 relative z-10">
                            <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                              <span className="text-xs font-mono text-on-surface-variant group-hover:text-secondary">{p.number}</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-on-surface-variant group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                          </div>
                          <h4 className="font-bold mb-2 group-hover:text-secondary transition-colors relative z-10 text-white">{p.title}</h4>
                          <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed relative z-10">{p.badge}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : activePhaseId === 'about' ? (
                <AboutUs key="about" />
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
                        <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-[10px] font-label text-secondary uppercase tracking-wider">
                          Phase {activePhase.number}
                        </span>
                        <span className="text-on-surface-variant font-label text-xs tracking-widest uppercase">{activePhase.badge}</span>
                      </div>
                      <h2 className="text-4xl font-black mb-4 text-white">{activePhase.title}</h2>
                      <p className="text-on-surface-variant max-w-2xl italic">"{activePhase.objective}"</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="px-4 py-2 rounded-xl bg-surface-container-highest border border-outline-variant/20 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-secondary" />
                        <span className="text-xs font-label">{activePhase.weeks}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Tasks & Resources */}
                    <div className="lg:col-span-2 space-y-10">
                      
                      {/* Tasks */}
                      <section>
                        <div className="flex items-center gap-3 mb-6">
                          <LayoutDashboard className="w-5 h-5 text-secondary" />
                          <h3 className="text-xl font-bold tracking-wide uppercase text-white">Action Tasks</h3>
                        </div>
                        <div className="space-y-3">
                          {activePhase.tasks.map((task) => (
                            <button
                              key={task.id}
                              onClick={() => toggleTask(task.id)}
                              className={cn(
                                "w-full flex items-center gap-4 p-5 rounded-xl border transition-all text-left group relative overflow-hidden",
                                completedTasks.includes(task.id)
                                  ? "bg-secondary/5 border-secondary/20 text-white"
                                  : "bg-surface-container border-outline-variant/10 text-on-surface-variant hover:border-secondary/30 hover:shadow-[0_0_15px_rgba(103,255,198,0.1)]"
                              )}
                            >
                              {completedTasks.includes(task.id) ? (
                                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                              ) : (
                                <Circle className="w-5 h-5 text-on-surface-variant/30 group-hover:text-secondary/50 shrink-0" />
                              )}
                              <span className="text-sm font-medium">{task.label}</span>
                            </button>
                          ))}
                        </div>
                      </section>

                      {/* Resources */}
                      <section>
                        <div className="flex items-center gap-3 mb-6">
                          <BookOpen className="w-5 h-5 text-primary" />
                          <h3 className="text-xl font-bold tracking-wide uppercase text-white">Learning Resources</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {activePhase.resources.map((res, idx) => (
                            <a
                              key={idx}
                              href={res.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-4 p-5 rounded-xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all group card-glow relative overflow-hidden"
                            >
                              <div className={cn(
                                "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 relative z-10",
                                res.type === 'yt' ? "bg-red-500/10 text-red-500" : "bg-primary/10 text-primary"
                              )}>
                                {res.type === 'yt' ? <Play className="w-4 h-4 fill-current" /> : <ExternalLink className="w-4 h-4" />}
                              </div>
                              <div className="flex flex-col min-w-0 relative z-10">
                                <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-wider mb-1">{res.type}</span>
                                <span className="text-sm font-medium truncate group-hover:text-primary transition-colors text-white">{res.title}</span>
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
                            <h3 className="text-xl font-bold tracking-wide uppercase text-white">Free Certifications & Guides</h3>
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            {activePhase.freeResources.map((res, idx) => (
                              <a
                                key={idx}
                                href={res.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-surface-container to-surface-container-highest border border-outline-variant/10 hover:border-fuchsia-400/30 transition-all group card-glow relative overflow-hidden"
                              >
                                <div className="flex items-center gap-4 min-w-0 relative z-10">
                                  <div className="w-10 h-10 rounded-lg bg-fuchsia-400/10 text-fuchsia-400 flex items-center justify-center shrink-0">
                                    <Award className="w-5 h-5" />
                                  </div>
                                  <div className="flex flex-col min-w-0">
                                    <span className="text-[10px] font-label text-fuchsia-400 uppercase tracking-wider mb-1">{res.type} • {res.provider}</span>
                                    <span className="text-sm font-medium truncate group-hover:text-fuchsia-400 transition-colors text-white">{res.title}</span>
                                  </div>
                                </div>
                                <ExternalLink className="w-4 h-4 text-on-surface-variant group-hover:text-fuchsia-400 shrink-0 ml-4 relative z-10" />
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
                            <h3 className="text-xl font-bold tracking-wide uppercase text-white">Follow-Along Projects</h3>
                          </div>
                          <div className="grid grid-cols-1 gap-6">
                            {activePhase.followAlongProjects.map((proj, idx) => (
                              <div 
                                key={idx}
                                className="p-6 rounded-3xl bg-gradient-to-br from-surface-container to-surface-container-low border border-outline-variant/10 relative overflow-hidden group card-glow"
                              >
                                <div className="flex flex-col md:flex-row gap-6 relative z-10">
                                  <a 
                                    href={proj.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full md:w-48 h-32 rounded-xl bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center group/thumb relative overflow-hidden shrink-0"
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
                                    <Play className="w-8 h-8 text-on-surface-variant group-hover/thumb:text-emerald-400 group-hover/thumb:scale-110 transition-all" />
                                    <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-surface-container-highest/80 text-[8px] font-label text-on-surface-variant uppercase tracking-wider">Tutorial</div>
                                  </a>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors text-white">{proj.title}</h4>
                                    <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">{proj.outcome}</p>
                                    <div className="space-y-2">
                                      <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Build Steps:</span>
                                      <div className="flex flex-wrap gap-2">
                                        {proj.steps.map((step, i) => (
                                          <span key={i} className="px-2 py-1 rounded-md bg-surface-container-highest border border-outline-variant/20 text-[10px] text-on-surface-variant">
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
                      <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 relative overflow-hidden group card-glow">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <Award className="w-24 h-24" />
                        </div>
                        
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-4">
                            <Award className="w-5 h-5 text-amber-400" />
                            <span className="font-label text-[10px] text-amber-400 tracking-widest uppercase">Deliverable</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 text-white">{activePhase.project.title}</h3>
                          <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                            {activePhase.project.description}
                          </p>
                          
                          <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-surface-container-highest border border-outline-variant/20">
                              <div className="flex items-center gap-2 mb-2">
                                <DollarSign className="w-4 h-4 text-secondary" />
                                <span className="font-label text-[10px] text-secondary">Market Value</span>
                              </div>
                              <span className="text-sm font-bold text-white">{activePhase.project.sellingStrategy.pricing}</span>
                            </div>

                            <div className="space-y-2">
                              <span className="font-label text-[10px] text-on-surface-variant uppercase">Outcome</span>
                              <ul className="space-y-2">
                                {activePhase.project.deliverables.map((d, i) => (
                                  <li key={i} className="flex items-center gap-2 text-xs text-on-surface-variant">
                                    <ChevronRight className="w-3 h-3 text-secondary" />
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Monetization */}
                      <div className="p-6 rounded-3xl glass-card border-outline-variant/20 relative overflow-hidden group card-glow">
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-4">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            <span className="font-label text-[10px] text-primary tracking-widest uppercase">Monetization</span>
                          </div>
                          <h4 className="font-bold text-sm mb-4 text-white">How to sell this skill:</h4>
                          <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                            {activePhase.project.sellingStrategy.pitch}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {activePhase.project.sellingStrategy.whereToFind.map((place, i) => (
                              <span key={i} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] text-primary uppercase tracking-wider">
                                {place}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Stack */}
                      <div className="p-6 rounded-3xl border border-outline-variant/10 bg-surface-container relative overflow-hidden group card-glow">
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-4">
                            <Wrench className="w-5 h-5 text-secondary" />
                            <span className="font-label text-[10px] text-secondary tracking-widest uppercase">Stack</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {activePhase.tools.map((tool, i) => (
                              <a 
                                key={i} 
                                href={tool.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-lg bg-surface-container-highest border border-outline-variant/20 text-xs hover:border-secondary/50 transition-colors text-on-surface-variant hover:text-white"
                              >
                                {tool.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Phase Navigation & Sharing */}
                  <div className="mt-12 pt-8 border-t border-outline-variant/20 flex flex-col items-center gap-6">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-6 rounded-2xl bg-gradient-to-r from-primary-container/20 to-secondary-container/20 border border-primary/30 text-center max-w-lg w-full"
                    >
                      <h3 className="text-xl font-bold text-white mb-2">
                        {isPhaseCompleted ? "🎉 Phase Completed!" : "🚀 Share Your Progress"}
                      </h3>
                      <p className="text-sm text-on-surface-variant mb-4">
                        {isPhaseCompleted 
                          ? `You've mastered ${activePhase.title}. Let the world know about your progress!` 
                          : `Working on ${activePhase.title}? Share your journey with the community!`}
                      </p>
                      <div className="flex justify-center gap-4">
                        <a 
                          href={`https://twitter.com/intent/tweet?text=I'm%20currently%20working%20on%20Phase%20${activePhase.number}:%20${encodeURIComponent(activePhase.title)}%20in%20the%20TechOptyx%20AI%20Full-stack%20Mastery%20Roadmap!%20%23TechOptyx%20%23AI%20%23FullStack`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-[#1DA1F2] text-white text-sm font-bold hover:bg-[#1a91da] transition-colors flex items-center gap-2"
                        >
                          Share on X
                        </a>
                        <a 
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-[#0A66C2] text-white text-sm font-bold hover:bg-[#0958a6] transition-colors flex items-center gap-2"
                        >
                          Share on LinkedIn
                        </a>
                      </div>
                    </motion.div>

                    <div className="flex w-full justify-between items-center mt-4">
                      {prevPhase ? (
                        <button 
                          onClick={() => {
                            setActivePhaseId(prevPhase.id);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="px-6 py-3 rounded-xl border border-outline-variant/30 text-on-surface-variant hover:text-white hover:bg-surface-container transition-all flex items-center gap-2"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <div className="text-left">
                            <div className="text-[10px] font-label uppercase tracking-wider opacity-50">Previous</div>
                            <div className="text-sm font-bold">Phase {prevPhase.number}</div>
                          </div>
                        </button>
                      ) : (
                        <div />
                      )}

                      {nextPhase && (
                        <button 
                          onClick={() => {
                            setActivePhaseId(nextPhase.id);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="px-6 py-3 rounded-xl bg-primary-container text-white hover:bg-primary-container/80 transition-all flex items-center gap-2 text-right shadow-[0_5px_15px_-3px_rgba(108,59,255,0.3)]"
                        >
                          <div>
                            <div className="text-[10px] font-label uppercase tracking-wider opacity-70">Next</div>
                            <div className="text-sm font-bold">Phase {nextPhase.number}</div>
                          </div>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
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
            className="fixed bottom-24 right-8 w-96 h-[500px] glass-card border-outline-variant/20 rounded-3xl z-50 flex flex-col overflow-hidden shadow-2xl"
          >
            <div className="p-4 border-b border-outline-variant/10 flex items-center justify-between bg-secondary/5">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-secondary" />
                <span className="font-bold text-sm tracking-wide uppercase text-white">AI Path Assistant</span>
              </div>
              <button onClick={() => setIsAiOpen(false)} className="p-1 hover:bg-white/10 rounded text-on-surface-variant">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {chatHistory.length === 0 && (
                <div className="text-center py-8">
                  <Bot className="w-12 h-12 text-on-surface-variant/30 mx-auto mb-4" />
                  <p className="text-sm text-on-surface-variant">
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
                      ? "bg-secondary text-surface rounded-tr-none" 
                      : "bg-surface-container-highest text-white rounded-tl-none border border-outline-variant/10"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-xs font-label">Thinking...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleAiChat} className="p-4 border-t border-outline-variant/10 bg-surface-container/50">
              <div className="relative">
                <input
                  type="text"
                  value={aiMessage}
                  onChange={(e) => setAiMessage(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-secondary/50 transition-all text-white placeholder:text-on-surface-variant"
                />
                <button 
                  type="submit"
                  disabled={isTyping || !aiMessage.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-secondary disabled:opacity-30"
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
            : "bg-gradient-to-br from-secondary to-primary shadow-[0_0_20px_rgba(103,255,198,0.4)]"
        )}
      >
        {isAiOpen ? <X className="w-6 h-6 text-white" /> : <Bot className="w-6 h-6 text-surface group-hover:scale-110 transition-transform" />}
      </button>
    </div>
  );
}
