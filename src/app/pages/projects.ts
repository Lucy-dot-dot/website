import { Component } from '@angular/core';

import { featuredProject, GITHUB_URL, projects } from '../projects.data';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly githubUrl = GITHUB_URL;
  protected readonly featured = featuredProject;
  protected readonly projects = projects;
}
