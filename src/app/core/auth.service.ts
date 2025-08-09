import { Injectable, computed, effect, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { toUserLite, UserLite } from '../shared/models/user-lite';
import { EMPTY } from 'rxjs';

export interface LoginResponse {
  access_token: string;
  user: UserLite;
}

type RegisterPayload = {
  email: string;
  name: string;
  surname: string;
  username: string;
  password: string;
  avatarUrl?: string;
  settings?: {
    activeModules: (
      | 'movies'
      | 'anime'
      | 'tv-series'
      | 'books'
      | 'games'
      | 'music'
    )[];
  };
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly API = environment.apiBase;

  currentUser = signal<UserLite | null>(null);
  token = signal<string | null>(localStorage.getItem('mh_token'));
  isLoggedIn = computed(() => this.token() != null);
  ready = signal(false);
  constructor(private readonly http: HttpClient) {
    const tok = localStorage.getItem('mh_token');
    this.token.set(tok ?? null);

    const raw = localStorage.getItem('mh_user');
    if (raw) {
      try {
        this.currentUser.set(JSON.parse(raw));
      } catch {}
    }

    if (tok) {
      this.me().subscribe({ complete: () => this.ready.set(true) });
    } else {
      this.currentUser.set(null);
      this.ready.set(true);
    }

    effect(() => {
      const t = this.token();
      if (t) localStorage.setItem('mh_token', t);
      else localStorage.removeItem('mh_token');
    });
    effect(() => {
      const u = this.currentUser();
      if (u) localStorage.setItem('mh_user', JSON.stringify(u));
      else localStorage.removeItem('mh_user');
    });
  }

  login(dto: { email: string; password: string }) {
    return this.http
      .post<LoginResponse>(`${this.API}/auth/login`, {
        identifier: dto.email,
        password: dto.password,
      })
      .pipe(
        tap((res) => {
          this.token.set(res.access_token);
          this.currentUser.set(toUserLite(res.user));
        })
      );
  }

  loginWithUsername(username: string, password: string) {
    return this.http
      .post<LoginResponse>(`${this.API}/auth/login`, { username, password })
      .pipe(
        tap((res) => {
          this.token.set(res.access_token);
          this.currentUser.set(toUserLite(res.user));
        })
      );
  }

  devLogin() {
    return this.login({ email: 'testuser', password: 'password123' });
  }

  register(dto: RegisterPayload) {
    const body: RegisterPayload = {
      email: dto.email.trim(),
      name: (dto.name ?? '').trim(),
      surname: (dto.surname ?? '').trim(),
      username: (dto.username ?? dto.email).trim(),
      password: dto.password,
      avatarUrl: dto.avatarUrl?.trim() || undefined,
      settings: dto.settings?.activeModules?.length
        ? { activeModules: dto.settings.activeModules }
        : undefined,
    };

    return this.http.post<UserLite>(`${this.API}/users`, body).pipe(
      switchMap((user) =>
        this.http.post<LoginResponse>(`${this.API}/auth/login`, {
          identifier: user.username,
          password: dto.password,
        })
      )
    );
  }

  me() {
    return this.http.get<UserLite>(`${this.API}/auth/me`).pipe(
      tap((user) => this.currentUser.set(user)),
      catchError((err) => {
        if (err?.status === 401) {
          this.token.set(null);
          this.currentUser.set(null);
        }
        return EMPTY;
      })
    );
  }

  logout() {
    this.token.set(null);
    this.currentUser.set(null);
  }
}
