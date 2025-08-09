import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-register.html',
  styleUrl: './login-register.css',
  standalone: true,
})
export class LoginRegister {
  tab = signal<'login' | 'register'>('login');
  loading = signal(false);
  error = signal<string | null>(null);

  login = { email: '', password: '' };
  register = { name: '', email: '', password: '' };

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

  async onRegister() {
    await this.run(async () => {
      await firstValueFrom(this.auth.register(this.register));
      await this.router.navigateByUrl('/');
    });
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
