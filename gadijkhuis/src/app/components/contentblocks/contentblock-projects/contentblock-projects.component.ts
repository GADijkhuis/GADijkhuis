import { Component, inject, OnInit, signal } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { Project } from '../../../models/project/project';
import { Content } from '../../../models/content/content';
import { ProjectComponent } from "../../project/project.component";

@Component({
  selector: 'app-contentblock-projects',
  imports: [ProjectComponent],
  templateUrl: './contentblock-projects.component.html',
  styleUrl: './contentblock-projects.component.scss',
})
export class ContentblockProjectsComponent implements OnInit {
  readonly Content = Content;

  private readonly projectsService = inject(ProjectsService);

  readonly projects = signal<Project[]>([]);

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((projects) => this.projects.set(projects));
  }
}
