import { Routes } from '@angular/router';

import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import { Projects } from './pages/projects';

// Note: the /secret route is intentionally NOT linked anywhere in the navigation.
// It is a placeholder page that Lucy edits by hand — see src/app/pages/secret.ts.
export const routes: Routes = [
  { path: '', component: Home, title: 'Lucy Sundorf — sundorf.me' },
  { path: 'projects', component: Projects, title: 'Projects — sundorf.me' },
  {
    path: 'secret',
    loadComponent: () => import('./pages/secret').then((m) => m.Secret),
    title: '.',
  },
  { path: '**', component: NotFound, title: '404 — sundorf.me' },
];
