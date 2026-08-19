import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { ButtonComponent } from "../../base/button/button.component";
import { Links } from "../../../models/links/links";

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly Links = Links;
  readonly isPill = signal(false);

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const onScroll = () => this.isPill.set(window.scrollY > window.innerHeight * 0.4);
      onScroll();

      window.addEventListener('scroll', onScroll, { passive: true });
      this.destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
    });
  }
}
