export type Screen = 'dashboard' | 'script' | 'calendar' | 'inspiration' | 'war-room';

export interface Production {
  id: string;
  title: string;
  type: string;
  genre: string;
  progress: number;
  statusLabel: string;
  meta1: string;
  meta2: string;
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface Task {
  id: string;
  title: string;
  deadline: string;
  priority: 'alpha' | 'beta' | 'gamma';
  completed: boolean;
}

export interface Script {
  id: string;
  project: string;
  title: string;
  revision: string;
  progress: number;
  pageCount: number;
  estRuntime: string;
}

export interface Scene {
  id: string;
  code: string;
  title: string;
  description: string;
  shotCount: number;
  status: 'ready' | 'storyboarded' | 'draft';
  imageUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  online: boolean;
}

export interface LogEntry {
  id: string;
  time: string;
  date: string;
  message: string;
  user: string;
}
