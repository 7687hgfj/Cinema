import { Production, Task, Script, Scene, TeamMember, LogEntry } from './types';

export const PRODUCTIONS: Production[] = [
  {
    id: '1',
    title: 'Neon Horizon',
    type: 'Feature',
    genre: 'Sci-Fi',
    progress: 68,
    statusLabel: 'Principal Photography',
    meta1: 'Scene 42/110',
    meta2: 'Day 14/30',
    color: 'primary'
  },
  {
    id: '2',
    title: 'Silent Echo',
    type: 'Short',
    genre: 'Noir',
    progress: 92,
    statusLabel: 'Script Revisions',
    meta1: 'Draft 04',
    meta2: 'Locked: Tomorrow',
    color: 'tertiary'
  }
];

export const TASKS: Task[] = [
  { id: '1', title: 'Review Scene 04 Color Grade', deadline: '14:00', priority: 'alpha', completed: false },
  { id: '2', title: 'Call DP - Lens Selection', deadline: '16:30', priority: 'alpha', completed: false },
  { id: '3', title: 'Draft Location Agreement', deadline: 'Completed', priority: 'beta', completed: true }
];

export const SCRIPTS: Script[] = [
  {
    id: '1',
    project: 'Project Omega',
    title: 'THE LAST FREQUENCY',
    revision: 'REV_8.22',
    progress: 75,
    pageCount: 112,
    estRuntime: '01:54:20'
  },
  {
    id: '2',
    project: 'Neon Dreams',
    title: 'CHROME RAIN',
    revision: 'REV_8.15',
    progress: 22,
    pageCount: 84,
    estRuntime: '00:45:10'
  }
];

export const SCENES: Scene[] = [
  {
    id: '1',
    code: 'SCENE 12A',
    title: 'EXT. ROOFTOP - NIGHT',
    description: 'The protagonist leaps across the gap. Wind whipped hair. Lens flare from the passing hover-car.',
    shotCount: 4,
    status: 'ready',
    imageUrl: 'https://picsum.photos/seed/rooftop/800/450'
  },
  {
    id: '2',
    code: 'SCENE 12B',
    title: 'CU. PROTAGONIST EYE',
    description: 'Digital HUD reflections dance across the cornea. Micro-twitches in the iris as the hack completes.',
    shotCount: 1,
    status: 'storyboarded',
    imageUrl: 'https://picsum.photos/seed/eye/800/450'
  },
  {
    id: '3',
    code: 'SCENE 13',
    title: 'INT. ABANDONED LAB',
    description: 'Dust motes in a single shaft of light. The ancient console hums to life with a dying breath.',
    shotCount: 8,
    status: 'draft'
  },
  {
    id: '4',
    code: 'SCENE 14',
    title: 'EXT. CITY LIMITS - DAWN',
    description: 'Wide establishing shot. The scale of the city wall dwarfs the protagonist\'s small vessel.',
    shotCount: 2,
    status: 'ready',
    imageUrl: 'https://picsum.photos/seed/city/800/450'
  }
];

export const TEAM: TeamMember[] = [
  { id: '1', name: 'MARCUS VANCE', role: 'DIRECTOR OF PHOTOGRAPHY', avatar: 'https://i.pravatar.cc/150?u=marcus', online: true },
  { id: '2', name: 'ELENA ROSSI', role: 'LEAD PRODUCER', avatar: 'https://i.pravatar.cc/150?u=elena', online: true },
  { id: '3', name: 'SIMON CHEN', role: 'SCRIPT SUPERVISOR', avatar: 'https://i.pravatar.cc/150?u=simon', online: false },
  { id: '4', name: 'SARA JAEGER', role: 'PRODUCTION DESIGNER', avatar: 'https://i.pravatar.cc/150?u=sara', online: true }
];

export const LOGS: LogEntry[] = [
  { id: '1', time: '09:12 AM', date: 'TODAY', message: 'Draft 4 of Scene 12 uploaded by Chen.', user: 'Chen' },
  { id: '2', time: '06:45 PM', date: 'YESTERDAY', message: 'Location scout for \'The Pier\' approved.', user: 'Rossi' },
  { id: '3', time: '02:30 PM', date: 'YESTERDAY', message: 'Casting call finalized for \'Dax\' role.', user: 'Jaeger' },
  { id: '4', time: '11:15 AM', date: '2 DAYS AGO', message: 'Initial lens kit requisition approved by Rossi.', user: 'Rossi' }
];
