export type Role = 'owner' | 'admin' | 'user' | 'test-user';
export type ModuleKey =
  | 'movies'
  | 'anime'
  | 'tv-series'
  | 'books'
  | 'games'
  | 'music';

export interface UserLite {
  id: string;
  username: string;
  role: Role;
  name?: string;
  email?: string;
  settings?: { activeModules: ModuleKey[] };
  avatarUrl?: string;
}

export function toUserLite(u: any): UserLite {
  if (!u) return u;
  return {
    id: u.id,
    username: u.username,
    role: u.role,
    name: u.name,
    email: u.email,
    settings: u.settings,
    avatarUrl: u.avatarUrl,
  };
}
