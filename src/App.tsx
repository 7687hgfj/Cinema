import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar as CalendarIcon, 
  Palette, 
  Rocket, 
  Bell,
  Search,
  Film,
  SquarePen,
  ChevronRight,
  Check,
  Plus,
  ImageOff,
  MoreVertical,
  ChevronLeft,
  Clock,
  Database,
  Activity,
  Timer,
  User,
  LogOut,
  Target,
  TrendingUp,
  Users,
  History,
  Zap
} from 'lucide-react';
import { Screen } from './types';
import { PRODUCTIONS, TASKS, SCRIPTS, SCENES, TEAM, LOGS } from './constants';

// --- Dashboard Screen ---
const Dashboard = () => {
  return (
    <div className="space-y-12">
      {/* Quick Spark Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <div className="bg-surface-container p-8 rounded-lg relative overflow-hidden group border border-white/5">
            <div className="absolute top-0 right-0 p-4 font-label text-[10px] text-outline opacity-40 uppercase tracking-widest">
              Input_Buffer // 001
            </div>
            <label className="block font-label text-xs font-bold text-primary mb-4 uppercase tracking-[0.2em]">Quick Spark</label>
            <div className="relative">
              <textarea 
                className="w-full bg-transparent border-none focus:ring-0 text-2xl font-headline font-light placeholder:text-surface-highest resize-none h-32 py-4 outline-none" 
                placeholder="Capture the next sequence..."
              />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left"></div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-label text-[10px] text-on-surface-variant uppercase">Autosave: Enabled</span>
              <button className="bg-gradient-to-br from-primary-container to-primary text-white px-6 py-2 rounded-md font-label text-sm font-bold uppercase tracking-wider hover:scale-95 transition-transform">Commit Idea</button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-4">
          <div className="h-full bg-surface-high rounded-lg p-6 relative flex flex-col justify-end overflow-hidden group border border-white/5">
            <div className="absolute inset-0 z-0">
              <img 
                alt="Inspiration" 
                className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700" 
                src="https://picsum.photos/seed/desert/600/400"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-high via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10">
              <span className="font-label text-[10px] text-primary uppercase mb-2 block">Daily Visual Focus</span>
              <p className="font-body italic text-on-surface-variant text-sm">
                "The screen is a magic medium. It has such power that it can retain interest as it conveys emotions and moods that no other art form can hope to tackle."
              </p>
              <p className="font-label text-xs mt-4 text-on-surface">— Stanley Kubrick</p>
            </div>
          </div>
        </div>
      </section>

      {/* Productions & Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="font-headline text-2xl font-extrabold text-on-surface tracking-tight uppercase">Active Productions</h2>
            <span className="font-label text-xs text-outline uppercase tracking-widest pb-1">3 Tracks Active</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRODUCTIONS.map(prod => (
              <motion.div 
                key={prod.id}
                whileHover={{ scale: 1.02 }}
                className={`bg-surface-high p-6 rounded-lg border-l-4 ${prod.color === 'primary' ? 'border-primary' : 'border-tertiary'} transition-all hover:bg-surface-highest cursor-pointer border-y border-r border-white/5`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-headline font-bold text-lg text-on-surface">{prod.title}</h3>
                    <p className="font-label text-[10px] text-on-surface-variant uppercase">{prod.type} // {prod.genre}</p>
                  </div>
                  {prod.color === 'primary' ? <Film className="text-primary w-5 h-5" /> : <SquarePen className="text-tertiary w-5 h-5" />}
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between font-label text-[10px] uppercase mb-1">
                      <span>{prod.statusLabel}</span>
                      <span className={prod.color === 'primary' ? 'text-primary' : 'text-tertiary'}>{prod.progress}%</span>
                    </div>
                    <div className="w-full h-1 bg-background">
                      <div 
                        className={`h-full ${prod.color === 'primary' ? 'bg-primary' : 'bg-tertiary'}`} 
                        style={{ width: `${prod.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex gap-4 font-label text-[10px] text-outline uppercase">
                    <span>{prod.meta1}</span>
                    <span>{prod.meta2}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-end">
            <h2 className="font-headline text-2xl font-extrabold text-on-surface tracking-tight uppercase">Task Queue</h2>
            <span className="font-label text-xs text-primary uppercase pb-1">Live Feed</span>
          </div>
          <div className="bg-background border border-outline-variant/10 rounded-lg overflow-hidden flex-1 flex flex-col">
            <div className="bg-surface-container p-4 border-b border-outline-variant/10 flex justify-between items-center">
              <span className="font-label text-[10px] uppercase font-bold text-primary">Priority Alpha</span>
              <Search className="w-3 h-3 text-outline" />
            </div>
            <div className="p-2 flex-1">
              {TASKS.map(task => (
                <div key={task.id} className="group flex items-center gap-4 p-4 hover:bg-surface-container transition-colors cursor-pointer rounded">
                  <div className={`w-2 h-2 rounded-full ${task.completed ? 'border border-outline' : task.id === '1' ? 'bg-primary' : 'bg-tertiary'}`}></div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${task.completed ? 'text-on-surface/50 line-through' : ''}`}>{task.title}</p>
                    <p className={`font-label text-[10px] uppercase ${task.completed ? 'text-outline/50' : 'text-outline'}`}>{task.completed ? 'Completed' : `Deadline: ${task.deadline}`}</p>
                  </div>
                  {task.completed ? <Check className="w-4 h-4 text-outline" /> : <ChevronRight className="w-4 h-4 text-outline opacity-0 group-hover:opacity-100" />}
                </div>
              ))}
            </div>
            <div className="p-4 mt-auto">
              <button className="w-full py-3 border border-dashed border-outline-variant hover:bg-surface-container hover:border-primary transition-all flex justify-center items-center gap-2 group">
                <Plus className="w-3 h-3 group-hover:text-primary" />
                <span className="font-label text-[10px] uppercase font-bold group-hover:text-primary">Inject Task</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Overlays */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Timecode', value: '12:44:08:21', icon: Clock, color: 'text-primary' },
          { label: 'Global Storage', value: '4.2 TB', icon: Database, color: 'text-on-surface' },
          { label: 'Render Status', value: 'IDLE', icon: Activity, color: 'text-tertiary' },
          { label: 'Session Duration', value: '04:12', icon: Timer, color: 'text-on-surface' }
        ].map((stat, i) => (
          <div key={i} className="bg-surface-container/50 p-4 flex flex-col items-center justify-center border border-outline-variant/10 rounded">
            <span className="font-label text-[10px] text-outline uppercase mb-1">{stat.label}</span>
            <span className={`font-label text-xl font-bold ${stat.color} tracking-widest`}>{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Script Screen ---
const ScriptManager = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <aside className="lg:col-span-4 space-y-6">
        <div className="bg-surface-container rounded-lg p-6 space-y-6 border border-white/5">
          <div className="flex justify-between items-end border-b border-outline-variant/15 pb-4">
            <h2 className="font-headline font-bold text-lg text-primary tracking-tight">ACTIVE SCRIPTS</h2>
            <span className="font-label text-xs text-on-surface-variant opacity-60">HUD_VER: 2.0.4</span>
          </div>
          <div className="space-y-4">
            {SCRIPTS.map(script => (
              <div key={script.id} className={`group bg-surface-high hover:bg-surface-highest transition-all p-4 rounded-md cursor-pointer border-l-2 ${script.id === '1' ? 'border-primary' : 'border-transparent'}`}>
                <div className="flex justify-between mb-2">
                  <span className="font-label text-[10px] text-primary uppercase tracking-widest">{script.project}</span>
                  <span className="font-label text-[10px] text-on-surface-variant">{script.revision}</span>
                </div>
                <h3 className="font-headline font-bold text-on-surface mb-1">{script.title}</h3>
                <div className="flex items-center gap-4">
                  <span className="font-label text-[11px] text-on-surface-variant uppercase">Draft v04</span>
                  <div className="h-1 flex-1 bg-background rounded-full overflow-hidden">
                    <div className={`h-full ${script.id === '1' ? 'bg-primary' : 'bg-secondary'}`} style={{ width: `${script.progress}%` }}></div>
                  </div>
                  <span className={`font-label text-[11px] ${script.id === '1' ? 'text-primary' : 'text-on-surface-variant'}`}>{script.progress}%</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-background p-4 rounded border border-outline-variant/10">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-label text-[10px] text-on-surface-variant uppercase">Page Count</p>
                <p className="font-label text-lg font-bold text-primary">112</p>
              </div>
              <div>
                <p className="font-label text-[10px] text-on-surface-variant uppercase">Est. Runtime</p>
                <p className="font-label text-lg font-bold text-primary">01:54:20</p>
              </div>
            </div>
          </div>
          <button className="w-full bg-surface-high text-secondary py-3 rounded font-label text-sm uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 border border-white/5">
            <Plus className="w-4 h-4" />
            New Script Entry
          </button>
        </div>
      </aside>

      <section className="lg:col-span-8 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="font-headline font-extrabold text-3xl text-on-surface tracking-tight">STORYBOARD MANAGER</h2>
            <p className="font-label text-xs text-on-surface-variant tracking-wider uppercase">Sequence 04: The Rooftop Chase</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-surface-high text-on-surface px-4 py-2 rounded font-label text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-surface-highest transition-all border border-white/5">
              <Plus className="w-3 h-3" />
              Upload Sketches
            </button>
            <button className="bg-gradient-to-br from-primary-container to-primary text-white px-6 py-2 rounded font-label text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-primary-container/20 hover:scale-105 transition-all">
              <Film className="w-3 h-3" />
              New Scene
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SCENES.map(scene => (
            <div key={scene.id} className="bg-surface-container rounded-lg overflow-hidden group border border-white/5">
              <div className="relative aspect-video bg-background">
                {scene.imageUrl ? (
                  <img alt={scene.title} className="w-full h-full object-cover" src={scene.imageUrl} referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-outline-variant/20">
                    <div className="text-center">
                      <ImageOff className="w-10 h-10 text-outline-variant/40 mx-auto mb-2" />
                      <p className="font-label text-[10px] text-outline-variant uppercase">Awaiting Sketch</p>
                    </div>
                  </div>
                )}
                <div className="absolute top-2 left-2 bg-background/80 backdrop-blur px-2 py-1 rounded">
                  <span className="font-label text-[10px] text-primary">{scene.code}</span>
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className={`text-[10px] font-label px-2 py-1 rounded uppercase ${
                    scene.status === 'ready' ? 'bg-tertiary text-background' : 
                    scene.status === 'storyboarded' ? 'bg-surface-highest text-on-surface-variant' : 
                    'bg-primary-container text-white'
                  }`}>
                    {scene.status}
                  </span>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <h4 className="font-body font-semibold text-on-surface">{scene.title}</h4>
                <p className="text-xs text-on-surface-variant line-clamp-2">{scene.description}</p>
                <div className="pt-2 flex justify-between items-center border-t border-outline-variant/10">
                  <span className="font-label text-[10px] text-on-surface-variant">{scene.shotCount} SHOTS</span>
                  <div className="flex gap-2">
                    <SquarePen className="w-4 h-4 text-on-surface-variant cursor-pointer hover:text-primary" />
                    <MoreVertical className="w-4 h-4 text-on-surface-variant cursor-pointer hover:text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// --- Calendar Screen ---
const Calendar = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <aside className="lg:col-span-4 flex flex-col gap-8">
        <section className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
          <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6">Schedule Legend</h3>
          <div className="space-y-4">
            {[
              { label: 'Shoot Day', color: 'bg-primary-container', meta: 'INT/EXT' },
              { label: 'Pre-production', color: 'bg-tertiary', meta: 'PLANNING' },
              { label: 'Personal', color: 'bg-secondary', meta: 'PRIVATE' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-3 h-3 ${item.color} rounded-sm`}></div>
                <span className="font-label text-sm uppercase">{item.label}</span>
                <span className="ml-auto font-label text-[10px] text-on-surface-variant">{item.meta}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface-high rounded-xl p-6 border border-outline-variant/10 flex-grow">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-headline font-extrabold text-2xl text-primary uppercase">TODAY</h2>
              <p className="font-label text-xs text-on-surface-variant">OCTOBER 24, 2023</p>
            </div>
            <div className="text-right">
              <span className="font-label text-3xl font-bold text-primary tracking-tighter">09:42</span>
              <p className="font-label text-[10px] text-on-surface-variant uppercase">Local Time</p>
            </div>
          </div>
          <div className="relative space-y-10 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant/30">
            {[
              { time: '06:00 - 08:30', title: 'Call Time: Location A', sub: 'Downtown Industrial Site', color: 'primary' },
              { time: '09:00 - 13:00', title: 'Scene 42: "The Confrontation"', sub: 'Principal Photography', color: 'outline', dim: true },
              { time: '14:00 - 16:00', title: 'Script Polish w/ Writers', sub: 'Production Office', color: 'tertiary' }
            ].map((event, i) => (
              <div key={i} className={`relative pl-10 ${event.dim ? 'opacity-60' : ''}`}>
                <div className={`absolute left-0 top-1 w-6 h-6 rounded-full bg-background border ${event.color === 'primary' ? 'border-primary' : event.color === 'tertiary' ? 'border-tertiary' : 'border-outline-variant'} flex items-center justify-center z-10`}>
                  <div className={`w-2 h-2 rounded-full ${event.color === 'primary' ? 'bg-primary' : event.color === 'tertiary' ? 'bg-tertiary' : 'bg-outline-variant'}`}></div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className={`font-label text-[10px] uppercase font-bold ${event.color === 'primary' ? 'text-primary' : event.color === 'tertiary' ? 'text-tertiary' : 'text-on-surface-variant'}`}>{event.time}</span>
                  <h4 className="font-headline font-bold text-lg leading-tight uppercase">{event.title}</h4>
                  <p className="text-sm text-on-surface-variant italic">{event.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </aside>

      <section className="lg:col-span-8">
        <div className="bg-surface-container rounded-xl overflow-hidden border border-outline-variant/10">
          <div className="p-8 border-b border-outline-variant/10 flex justify-between items-center">
            <div>
              <h2 className="font-headline text-3xl font-extrabold tracking-tighter uppercase">October 2023</h2>
              <p className="font-label text-xs text-on-surface-variant tracking-widest mt-1">PRODUCTION CYCLE: ALPHA-6</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-surface-high border border-outline-variant/10 hover:bg-surface-highest transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-surface-high border border-outline-variant/10 hover:bg-surface-highest transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 border-b border-outline-variant/10">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="p-4 text-center font-label text-[10px] uppercase text-on-surface-variant font-bold border-r border-outline-variant/5 last:border-r-0">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {Array.from({ length: 35 }).map((_, i) => {
              const dayNum = i - 3; // Offset for start of month
              const isCurrentMonth = dayNum > 0 && dayNum <= 31;
              return (
                <div key={i} className={`min-h-[120px] p-4 border-r border-b border-outline-variant/5 last:border-r-0 ${!isCurrentMonth ? 'opacity-30 bg-surface-container-lowest' : ''}`}>
                  <span className={`font-label text-sm ${dayNum === 11 ? 'text-primary font-bold' : ''}`}>{isCurrentMonth ? dayNum.toString().padStart(2, '0') : ''}</span>
                  {dayNum === 11 && (
                    <div className="mt-2 w-full h-4 bg-primary-container border-l-2 border-white flex items-center px-1">
                      <span className="text-[8px] font-label text-white truncate uppercase font-bold">SHOOT DAY 1</span>
                    </div>
                  )}
                  {dayNum === 3 && (
                    <div className="mt-2 space-y-1">
                      <div className="w-full h-1 bg-tertiary"></div>
                      <div className="w-full h-1 bg-tertiary"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

// --- War Room Screen ---
const WarRoom = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <header className="text-center space-y-4">
        <div className="flex justify-center items-center gap-3">
          <span className="bg-tertiary/20 text-tertiary px-3 py-1 rounded text-[10px] font-label uppercase tracking-widest">In Production</span>
          <span className="text-outline font-label text-[10px] uppercase tracking-widest">Project Code: N30N-2024</span>
        </div>
        <h1 className="font-headline text-6xl font-extrabold tracking-tighter uppercase leading-none">NEON NIGHTFALL</h1>
        <p className="text-on-surface-variant text-lg max-w-xl mx-auto">A high-octane psychological thriller exploring the rain-slicked underbelly of a near-future metropolis.</p>
      </header>

      <section className="bg-surface-container p-8 rounded-lg border border-white/5 relative overflow-hidden">
        <div className="font-label text-[10px] text-primary uppercase tracking-widest mb-4">Production Starts In</div>
        <div className="flex items-baseline gap-4">
          <span className="font-headline text-8xl font-extrabold text-white leading-none">12</span>
          <span className="font-headline text-4xl font-bold text-on-surface-variant uppercase">Days</span>
        </div>
        <div className="flex gap-6 mt-6">
          {['08 HRS', '42 MIN', '15 SEC'].map((t, i) => (
            <div key={i} className="text-outline font-label text-[10px] uppercase tracking-widest">{t}</div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-surface-container p-6 rounded-lg border border-white/5 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Budget Status</h3>
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between font-label text-[10px] uppercase">
              <span>Spent: $1.2M</span>
              <span>Remaining: $800K</span>
            </div>
            <div className="w-full h-2 bg-background rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '60%' }}></div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/10">
              <div>
                <p className="font-label text-[10px] text-outline uppercase">Day Burn Rate</p>
                <p className="font-headline text-xl font-bold">$12,450</p>
              </div>
              <div>
                <p className="font-label text-[10px] text-outline uppercase">Contingency</p>
                <p className="font-headline text-xl font-bold text-tertiary">15.2%</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container p-6 rounded-lg border border-white/5 space-y-6">
          <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Asset Readiness</h3>
          <div className="space-y-3">
            {[
              { label: 'Locations', val: '8/12 Locked', color: 'text-primary' },
              { label: 'Equipment', val: 'Cleared', color: 'text-on-surface' },
              { label: 'Talent Deals', val: 'Pending (2)', color: 'text-on-surface-variant' }
            ].map((asset, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-background rounded border border-white/5">
                <span className="font-label text-[10px] uppercase text-outline">{asset.label}</span>
                <span className={`font-label text-sm font-bold ${asset.color}`}>{asset.val}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="bg-surface-container p-6 rounded-lg border border-white/5 space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Critical Team</h3>
          <span className="bg-surface-highest text-[10px] font-label px-2 py-1 rounded uppercase">9 Active</span>
        </div>
        <div className="space-y-4">
          {TEAM.map(member => (
            <div key={member.id} className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full border border-white/10" referrerPolicy="no-referrer" />
                {member.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface-container rounded-full"></div>}
              </div>
              <div className="flex-1">
                <h4 className="font-headline font-bold text-sm tracking-tight">{member.name}</h4>
                <p className="font-label text-[10px] text-outline uppercase">{member.role}</p>
              </div>
              <MoreVertical className="w-4 h-4 text-outline opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>
        <button className="w-full py-3 bg-surface-high border border-white/5 text-secondary font-label text-xs uppercase tracking-widest hover:bg-surface-highest transition-all">Open Comms Hub</button>
      </section>

      <section className="bg-surface-container p-6 rounded-lg border border-white/5 space-y-6">
        <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Mission Log</h3>
        <div className="space-y-8 relative before:absolute before:left-[4px] before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant/30">
          {LOGS.map(log => (
            <div key={log.id} className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-primary/40 border border-primary"></div>
              <div className="space-y-1">
                <p className="font-label text-[10px] text-outline uppercase">{log.time} • {log.date}</p>
                <p className="text-sm text-on-surface leading-relaxed">
                  {log.message.split(log.user).map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && <span className="font-bold text-primary">{log.user}</span>}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gradient-to-t from-surface-highest to-transparent p-8 rounded-xl border border-white/5 text-center space-y-6">
        <h2 className="font-headline text-3xl font-extrabold uppercase">Ready for Day 1?</h2>
        <p className="text-on-surface-variant">All departments are reporting 92% readiness for the opening sequence.</p>
        <button className="w-full bg-gradient-to-r from-primary-container to-primary text-white py-4 rounded-lg font-headline font-black text-lg uppercase tracking-widest flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform shadow-2xl shadow-primary/20">
          Execute Pre-pro Checklist
          <Rocket className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

// --- Inspiration Screen ---
const Inspiration = () => {
  const images = [
    'https://picsum.photos/seed/cinema1/400/600',
    'https://picsum.photos/seed/cinema2/600/400',
    'https://picsum.photos/seed/cinema3/400/400',
    'https://picsum.photos/seed/cinema4/600/600',
    'https://picsum.photos/seed/cinema5/400/300',
    'https://picsum.photos/seed/cinema6/300/400'
  ];
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight uppercase">Visual Inspiration</h2>
        <span className="font-label text-xs text-primary uppercase pb-1">Mood Board // Alpha</span>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((src, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.02 }}
            className="break-inside-avoid rounded-lg overflow-hidden border border-white/5 bg-surface-container"
          >
            <img src={src} alt={`Inspiration ${i}`} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- Main App Shell ---
export default function App() {
  const [activeScreen, setActiveScreen] = React.useState<Screen>('dashboard');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard': return <Dashboard />;
      case 'script': return <ScriptManager />;
      case 'calendar': return <Calendar />;
      case 'inspiration': return <Inspiration />;
      case 'war-room': return <WarRoom />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen pb-32">
      {/* Top Bar */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/15 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/30">
            <img 
              alt="Profile" 
              src="https://i.pravatar.cc/150?u=director" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-xl font-bold tracking-widest text-on-surface font-headline uppercase">DIRECTOR'S HUD</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-primary hover:bg-surface-high p-2 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-primary hover:bg-surface-high p-2 rounded-lg transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 px-6 max-w-7xl mx-auto">
        <motion.div
          key={activeScreen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {renderScreen()}
        </motion.div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 pb-6 bg-surface-container/70 backdrop-blur-xl border-t border-outline-variant/15 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { id: 'script', label: 'Script', icon: FileText },
          { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
          { id: 'inspiration', label: 'Inspiration', icon: Palette },
          { id: 'war-room', label: 'War Room', icon: Rocket }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setActiveScreen(item.id as Screen)}
            className={`flex flex-col items-center justify-center pt-2 transition-all cursor-pointer ${
              activeScreen === item.id 
                ? 'text-primary font-bold border-t-2 border-primary' 
                : 'text-on-surface-variant opacity-60 hover:opacity-100'
            }`}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="font-label text-[10px] uppercase font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
