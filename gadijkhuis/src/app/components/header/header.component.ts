import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
