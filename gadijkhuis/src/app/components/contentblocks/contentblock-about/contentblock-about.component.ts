import { Component } from '@angular/core';
import { Content } from '../../../models/content/content';

@Component({
  selector: 'app-contentblock-about',
  imports: [],
  templateUrl: './contentblock-about.component.html',
  styleUrl: './contentblock-about.component.scss',
})
export class ContentblockAboutComponent {
  readonly Content = Content;
}
