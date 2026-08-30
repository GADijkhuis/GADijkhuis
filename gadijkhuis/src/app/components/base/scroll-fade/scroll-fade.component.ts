import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-fade',
  imports: [],
  templateUrl: './scroll-fade.component.html',
  styleUrl: './scroll-fade.component.scss',
})
export class ScrollFadeComponent {
  readonly canScrollLeft = signal(false);
  readonly canScrollRight = signal(false);

  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const el = this.elementRef.nativeElement.querySelector<HTMLElement>('.scroll-container')!;

      const update = () => {
        this.canScrollLeft.set(el.scrollLeft > 0);
        this.canScrollRight.set(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
      };
      update();

      el.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);

      this.destroyRef.onDestroy(() => {
        el.removeEventListener('scroll', update);
        window.removeEventListener('resize', update);
      });
    });
  }
}
