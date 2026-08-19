import { Component } from '@angular/core';

@Component({
  selector: 'app-contentblock-footer',
  imports: [],
  templateUrl: './contentblock-footer.component.html',
  styleUrl: './contentblock-footer.component.scss',
})
export class ContentblockFooterComponent {
  localYear = new Date().getFullYear()
}
