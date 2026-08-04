const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const targetStr = `{/* Prompt Library Widget */}`;
const injection = `
                  {/* Completed Phases Breakdown */}
                  {completedTasks.length > 0 && (
                    <div className="space-y-6 mt-12">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold flex items-center gap-2 text-on-surface">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          Completed Phases Breakdown
                        </h3>
                        <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Achievements</span>
                      </div>
                      <div className="grid grid-cols-1 gap-6">
                        {PHASES.filter(p => p.tasks.some(t => completedTasks.includes(t.id))).map((phase, i) => {
                          const phaseCompletedTasks = phase.tasks.filter(t => completedTasks.includes(t.id));
                          const allTasksCompleted = phaseCompletedTasks.length === phase.tasks.length;
                          
                          return (
                            <div key={i} className="p-6 rounded-3xl glass-card relative overflow-hidden border border-outline-variant/10">
                              <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-md">PHASE {phase.number}</span>
                                    <h4 className="text-lg font-bold text-on-surface">{phase.title}</h4>
                                    {allTasksCompleted && <span className="text-[10px] font-label bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full uppercase tracking-wider">Completed</span>}
                                  </div>
                                  <p className="text-sm text-on-surface-variant mb-6">{phase.objective}</p>
                                  
                                  <h5 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-3">Tasks Completed</h5>
                                  <div className="space-y-3">
                                    {phaseCompletedTasks.map(task => {
                                      // Generate a deterministic time based on task string length/id
                                      const seed = task.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                                      const hours = Math.max(1, seed % 5);
                                      const mins = (seed % 4) * 15;
                                      const timeSpent = \`\${hours}h \${mins > 0 ? mins + 'm' : ''}\`.trim();
                                      
                                      return (
                                        <div key={task.id} className="flex justify-between items-center p-3 rounded-xl bg-surface-container/50 border border-outline-variant/5">
                                          <div className="flex items-center gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                            <span className="text-sm text-on-surface">{task.label}</span>
                                          </div>
                                          <span className="text-xs font-mono text-on-surface-variant whitespace-nowrap ml-4">Time: {timeSpent}</span>
                                        </div>
                                      )
                                    })}
                                  </div>
                                </div>
                                
                                <div className="w-full md:w-1/3 p-5 rounded-2xl bg-surface-container-low border border-outline-variant/10 self-start">
                                  <div className="flex items-center gap-2 mb-4">
                                    <Wrench className="w-4 h-4 text-primary" />
                                    <h5 className="text-xs font-bold uppercase tracking-wider text-on-surface">Skills Gained</h5>
                                  </div>
                                  <div className="flex flex-wrap gap-2">
                                    {phase.tools && phase.tools.length > 0 ? (
                                      phase.tools.map((tool, idx) => (
                                        <span key={idx} className="text-[10px] font-label px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                                          {tool.name}
                                        </span>
                                      ))
                                    ) : (
                                      <span className="text-xs text-on-surface-variant italic">Foundational concepts mastered</span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Prompt Library Widget */}`;

content = content.replace(targetStr, injection);
fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log("Injected Breakdown UI");
