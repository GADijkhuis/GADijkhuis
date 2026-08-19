import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ProjectsService } from '../../../services/projects.service';
import { Project } from '../../../models/project/project';
import { Content } from '../../../models/content/content';
import { ProjectComponent } from '../../base/project/project.component';
import { ProjectSkeletonComponent } from '../../base/project-skeleton/project-skeleton.component';

@Component({
  selector: 'app-contentblock-projects',
  imports: [ProjectComponent, ProjectSkeletonComponent],
  templateUrl: './contentblock-projects.component.html',
  styleUrl: './contentblock-projects.component.scss',
})
export class ContentblockProjectsComponent implements OnInit {
  readonly Content = Content;

  private readonly projectsService = inject(ProjectsService);

  readonly projects = signal<Project[]>([]);
  readonly isLoading = signal<boolean>(true);
  readonly errorMessage = signal<string | null>(null);

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe({
      next: (projects) => {
        this.projects.set(projects);
        this.isLoading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(
          `An error occured fetching projects. Status code: ${error.status}`
        );
        this.isLoading.set(false);
      },
    });
  }
}
