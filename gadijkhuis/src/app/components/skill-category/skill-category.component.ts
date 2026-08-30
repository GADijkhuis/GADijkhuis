import { Component, Input } from '@angular/core';
import { TagComponent } from "../base/tag/tag.component";
import { ScrollFadeComponent } from "../base/scroll-fade/scroll-fade.component";

@Component({
  selector: 'app-skill-category',
  imports: [TagComponent, ScrollFadeComponent],
  templateUrl: './skill-category.component.html',
  styleUrl: './skill-category.component.scss',
})
export class SkillCategoryComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) items!: string[];
}
