import { Component, Input } from '@angular/core';
import { Project } from '../../../models/project/project';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-project',
  imports: [ButtonComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input({ required: true }) project!: Project;

  get isButtonGitHub(): boolean {
    return this.project?.link?.includes('github') ?? false;
  }
}
