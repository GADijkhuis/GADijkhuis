import { Component, inject } from '@angular/core';
import { Content } from '../../../models/content/content';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-contentblock-about',
  imports: [],
  templateUrl: './contentblock-about.component.html',
  styleUrl: './contentblock-about.component.scss',
})
export class ContentblockAboutComponent {
  readonly Content = Content;
  readonly contentService = inject(ContentService);
}
