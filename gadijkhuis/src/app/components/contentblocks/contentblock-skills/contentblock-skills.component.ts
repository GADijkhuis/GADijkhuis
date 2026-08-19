import { Component } from '@angular/core';
import { SkillCategoryComponent } from "../../skill-category/skill-category.component";
import { Content } from '../../../models/content/content';

@Component({
  selector: 'app-contentblock-skills',
  imports: [SkillCategoryComponent],
  templateUrl: './contentblock-skills.component.html',
  styleUrl: './contentblock-skills.component.scss',
})
export class ContentblockSkillsComponent {
  readonly Content = Content;
}
