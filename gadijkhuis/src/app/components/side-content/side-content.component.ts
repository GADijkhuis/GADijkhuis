import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { ProfileButtonComponent } from "../profile-button/profile-button.component";
import { Links } from '../../models/links/links';

@Component({
  selector: 'app-side-content',
  imports: [NgOptimizedImage, ProfileButtonComponent],
  templateUrl: './side-content.component.html',
  styleUrl: './side-content.component.scss',
})
export class SideContentComponent {
  readonly Links = Links;
}
