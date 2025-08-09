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
    const body = { username: dto.email, password: dto.password };
    return this.http.post<any>(`${this.API}/auth/login`, body).pipe(
      tap((res) => {
        this.token.set(res.access_token);
        this.currentUser.set(toUserLite(res.user));
      })
    );
  }

  devLogin() {
    return this.login({ email: 'testuser', password: 'password123' });
  }

  register(dto: { name?: string; email: string; password: string }) {
    return this.http
      .post(`${this.API}/users`, {
        name: dto.name ?? '',
        surname: '',
        email: dto.email,
        username: dto.email, // απλό mapping
        password: dto.password,
        role: 'user',
        settings: { activeModules: [] },
        isActive: true,
      })
      .pipe(
        switchMap(() =>
          this.login({ email: dto.email, password: dto.password })
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
