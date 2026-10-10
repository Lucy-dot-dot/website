import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { featuredProject, GITHUB_URL, projects } from '../projects.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class Home {
  protected readonly githubUrl = GITHUB_URL;
  protected readonly featured = featuredProject;
  protected readonly projectCount = projects.length + 1;

  protected readonly stack = [
    'Rust',
    'TypeScript',
    'Angular',
    'PostgreSQL',
    'Docker',
    'Linux',
    'SSH',
    'egui',
  ];
}
