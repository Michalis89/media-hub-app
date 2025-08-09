import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

type UserModule =
  | 'movies'
  | 'anime'
  | 'tv-series'
  | 'books'
  | 'games'
  | 'music';

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
@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-register.html',
  styleUrls: ['./login-register.css'], // ✅ fix
})
export class LoginRegister {
  tab = signal<'login' | 'register'>('login');
  loading = signal(false);
  error = signal<string | null>(null);

  availableModules: UserModule[] = [
    'movies',
    'anime',
    'tv-series',
    'books',
    'games',
    'music',
  ];

  login = { email: '', password: '' };

  register: RegisterPayload = {
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    avatarUrl: '',
    settings: { activeModules: [] }, // ✅ init
  };

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  async onLogin() {
    await this.run(async () => {
      await firstValueFrom(this.auth.login(this.login));
      await this.router.navigateByUrl('/');
    });
  }

  toggleModule(mod: UserModule, checked: boolean) {
    const set = new Set(this.register.settings?.activeModules ?? []);
    checked ? set.add(mod) : set.delete(mod);
    this.register.settings = { activeModules: Array.from(set) };
  }

  async onRegister() {
    this.error.set(null);
    this.loading.set(true);

    const payload: RegisterPayload = {
      name: this.register.name?.trim(),
      surname: this.register.surname?.trim(),
      username: this.register.username?.trim(),
      email: this.register.email?.trim(),
      password: this.register.password,
      avatarUrl: this.register.avatarUrl?.trim() || undefined,
      settings: this.register.settings?.activeModules?.length
        ? { activeModules: this.register.settings?.activeModules ?? [] }
        : undefined,
    };

    try {
      await firstValueFrom(this.auth.register(payload));
      this.tab.set('login');
    } catch (e: any) {
      this.error.set(e?.error?.message ?? 'Registration failed');
    } finally {
      this.loading.set(false);
    }
  }

  async onDevLogin() {
    await this.run(async () => {
      await firstValueFrom(this.auth.devLogin());
      await this.router.navigateByUrl('/');
    });
  }

  private async run(fn: () => Promise<void>) {
    this.loading.set(true);
    this.error.set(null);
    try {
      await fn();
    } catch (e: any) {
      this.error.set(e?.error?.message ?? 'Something went wrong');
    } finally {
      this.loading.set(false);
    }
  }
}
