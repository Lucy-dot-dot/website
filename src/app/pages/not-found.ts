import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="py-16 text-center">
      <p class="font-mono text-6xl font-bold text-accent">404</p>
      <h1 class="mt-4 text-2xl font-semibold text-white">Nothing listening on this port.</h1>
      <p class="mt-3 text-fog">The page you asked for does not exist. Even the honeypot was confused.</p>
      <a
        routerLink="/"
        class="mt-6 inline-block rounded-md border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >Back home</a
      >
    </section>
  `,
})
export class NotFound {}
