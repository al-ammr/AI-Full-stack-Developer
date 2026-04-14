import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Filter,
  Sparkles,
  Code,
  PenTool,
  Image as ImageIcon,
  Video,
  TrendingUp,
  Zap,
  BookOpen,
  Star
} from 'lucide-react';
import { PROMPTS, Prompt } from '../constants';
import { cn } from '../lib/utils';

const CATEGORIES = [
  { id: 'all', label: 'All Prompts', icon: Sparkles },
  { id: 'favorites', label: 'Favorites', icon: Star },
  { id: 'business', label: 'Business', icon: TrendingUp },
  { id: 'coding', label: 'Coding', icon: Code },
  { id: 'writing', label: 'Writing', icon: PenTool },
  { id: 'marketing', label: 'Marketing', icon: Zap },
  { id: 'image', label: 'Image Gen', icon: ImageIcon },
  { id: 'video', label: 'Video', icon: Video },
  { id: 'productivity', label: 'Productivity', icon: Filter },
  { id: 'learning', label: 'Learning', icon: BookOpen },
];

const CATEGORY_COLORS: Record<string, string> = {
  business: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  coding: 'text-green-400 bg-green-400/10 border-green-400/20',
  writing: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  marketing: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  image: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
  video: 'text-red-400 bg-red-400/10 border-red-400/20',
  productivity: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
  learning: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
};

export default function PromptLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favoritePrompts');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoritePrompts', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const filteredPrompts = useMemo(() => {
    return PROMPTS.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
      let matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      if (activeCategory === 'favorites') {
        matchesCategory = favorites.includes(p.id);
      }
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, favorites]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    localStorage.setItem('lastCopiedPromptId', id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Infinite scroll / Lazy loading simulation
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        setVisibleCount(prev => Math.min(prev + 6, filteredPrompts.length));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredPrompts.length]);

  return (
    <section className="relative min-h-screen py-12 md:py-20 px-4 md:px-6 lg:px-10 overflow-hidden w-full max-w-[100vw]">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[150vw] md:w-[800px] h-[600px] md:h-[800px]">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 0.9, 1],
              rotate: [0, 90, 180, 360],
              borderRadius: ["100%", "80%", "100%"]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-primary/10 blur-[80px] md:blur-[120px] opacity-50" 
          />
        </div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[120vw] md:w-[600px] h-[500px] md:h-[600px]">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 0.8, 1],
              rotate: [360, 180, 90, 0],
              borderRadius: ["100%", "70%", "100%"]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-secondary/10 blur-[60px] md:blur-[100px] opacity-30" 
          />
        </div>
        <div className="absolute top-[20%] left-[-10%] w-[100vw] md:w-[500px] h-[400px] md:h-[500px]">
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 0.9, 1],
              rotate: [0, -90, -180, -360],
              borderRadius: ["100%", "60%", "100%"]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-purple-500/10 blur-[70px] md:blur-[100px] opacity-20" 
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-primary text-xs font-label uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(108,59,255,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Prompt Library
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-headline font-black mb-6 text-on-surface tracking-tight"
          >
            Master the Art of <br className="md:hidden" /><em className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary not-italic">AI Precision</em>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed px-4"
          >
            A curated collection of high-performance prompts designed to help you build, automate, and scale your digital products.
          </motion.p>
        </div>

        {/* Controls - Glassmorphism */}
        <div className="glass-panel p-4 md:p-5 rounded-3xl mb-10 flex flex-col lg:flex-row gap-4 items-center justify-between shadow-2xl">
          <div className="relative w-full lg:w-96 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/50" />
            <input 
              type="text" 
              id="search" 
              placeholder="Search prompts, tags..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl py-3 pl-11 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:bg-surface-container transition-all shadow-inner"
            />
          </div>
          
          <div className="w-full flex flex-col sm:flex-row items-center gap-4 overflow-hidden">
            <div className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant/60 whitespace-nowrap hidden sm:block">
              Showing {Math.min(visibleCount, filteredPrompts.length)} of {filteredPrompts.length}
            </div>
            
            {/* Categories Scrollable Row */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full custom-scrollbar">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap border shrink-0",
                    activeCategory === cat.id 
                      ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(108,59,255,0.4)]" 
                      : "bg-surface-container-low text-on-surface-variant border-outline-variant/10 hover:bg-surface-container-high hover:text-on-surface"
                  )}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrompts.slice(0, visibleCount).map((p, idx) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ 
                  layout: { type: "spring", bounce: 0.2, duration: 0.8 },
                  opacity: { duration: 0.5, delay: (idx % 6) * 0.05 },
                  y: { type: "spring", bounce: 0.3, duration: 0.8, delay: (idx % 6) * 0.05 },
                  scale: { type: "spring", bounce: 0.3, duration: 0.8, delay: (idx % 6) * 0.05 },
                  default: { duration: 0.5 }
                }}
                className="glass-card card-glow interactive-glow rounded-3xl p-6 md:p-8 flex flex-col group relative overflow-hidden border border-outline-variant/10 hover:border-primary/30 hover:shadow-[0_12px_40px_rgba(108,59,255,0.15)] transition-colors"
              >
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <div className="flex gap-2">
                    <span className={cn("text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl border backdrop-blur-md", CATEGORY_COLORS[p.category] || 'text-gray-400 bg-gray-400/10 border-gray-400/20')}>
                      {p.category}
                    </span>
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl border backdrop-blur-md",
                      p.difficulty === 'Beginner' ? 'text-green-400 bg-green-400/10 border-green-400/20' :
                      p.difficulty === 'Intermediate' ? 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' :
                      'text-red-400 bg-red-400/10 border-red-400/20'
                    )}>
                      {p.difficulty}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleFavorite(p.id)}
                    className={cn(
                      "p-2 rounded-xl border transition-all",
                      favorites.includes(p.id)
                        ? "bg-yellow-400/20 border-yellow-400/30 text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.2)]"
                        : "bg-surface-container-highest/20 border-outline-variant/10 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest/40"
                    )}
                    title={favorites.includes(p.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Star className={cn("w-4 h-4", favorites.includes(p.id) && "fill-current")} />
                  </button>
                </div>
                
                <h3 className="relative z-10 text-xl md:text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors leading-tight">{p.title}</h3>
                <p className="relative z-10 text-sm text-on-surface-variant mb-6 flex-grow leading-relaxed">{p.description}</p>
                
                <motion.div 
                  layout
                  animate={{ 
                    height: expandedId === p.id ? "auto" : "120px",
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  className={cn(
                    "relative z-10 bg-surface-container border border-outline-variant/10 rounded-2xl p-5 text-sm font-mono text-on-surface-variant/90 mb-5 overflow-hidden shadow-inner",
                    expandedId === p.id ? "overflow-y-auto custom-scrollbar" : ""
                  )}
                >
                  <div className="whitespace-pre-wrap">{p.prompt}</div>
                  <AnimatePresence>
                    {expandedId !== p.id && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111623] to-transparent pointer-events-none" 
                      />
                    )}
                  </AnimatePresence>
                </motion.div>

                <div className="relative z-10 flex gap-3 mt-auto">
                  <button 
                    onClick={() => handleCopy(p.prompt, p.id)}
                    className={cn(
                      "flex-grow flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold border btn-glow",
                      copiedId === p.id 
                        ? "bg-green-500/20 text-green-400 border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]" 
                        : "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(108,59,255,0.2)]"
                    )}
                  >
                    {copiedId === p.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Prompt
                      </>
                    )}
                  </button>
                  <button 
                    onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
                    className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-surface-container-low border border-outline-variant/10 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
                    title={expandedId === p.id ? "Collapse" : "Expand"}
                  >
                    <motion.div
                      animate={{ rotate: expandedId === p.id ? 180 : 0 }}
                      transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                </div>

                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-on-surface-variant/60 bg-surface-container-low border border-outline-variant/10 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPrompts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 glass-panel rounded-3xl mt-8"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-primary/50" />
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">No prompts found</h3>
            <p className="text-on-surface-variant font-sans max-w-md mx-auto">We couldn't find any prompts matching your search or category filters. Try adjusting your criteria.</p>
          </motion.div>
        )}

        {visibleCount < filteredPrompts.length && (
          <div className="text-center mt-16">
            <button 
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-4 rounded-2xl glass-panel text-sm font-bold uppercase tracking-widest text-on-surface hover:bg-surface-container-high hover:scale-105 active:scale-95 shadow-xl btn-glow"
            >
              Load More Prompts
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
