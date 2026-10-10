import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

/**
 * SECRET PAGE — edit this file to add your content.
 *
 * This route is deliberately not linked anywhere in the navigation.
 * It is prerendered to /secret/index.html like any other page, but search
 * engines are told to ignore it (see the noindex meta below).
 *
 * Replace the template below with whatever you want. Everything on this page
 * is yours to change.
 */
@Component({
  selector: 'app-secret',
  imports: [],
  template: `
    <h1 class="text-3xl font-bold tracking-tight text-white">You found the door.</h1>
    <p class="mt-4 max-w-prose text-fog">
      This page exists, but it has nothing to say yet.
    </p>
    <p class="mt-3 max-w-prose text-fog">
      If you are me: the content lives in
      <code class="rounded bg-panel px-1.5 py-0.5 font-mono text-sm">src/app/pages/secret.ts</code>.
      Edit the template, rebuild, redeploy. Nobody is watching.
    </p>
    <p class="mt-3 max-w-prose text-fog">
      If you are not me: congratulations on reading a URL bar. There is genuinely nothing here. Go
      look at the <a class="text-accent underline" href="/projects">projects</a> instead.
    </p>
  `,
})
export class Secret {
  constructor(meta: Meta) {
    meta.addTag({ name: 'robots', content: 'noindex, nofollow' });
  }
}
