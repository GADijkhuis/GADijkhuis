import { Component, DestroyRef, ElementRef, Input, afterNextRender, inject, signal } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() align: 'left' | 'right' = 'right';
  @Input() ariaLabel?: string;
  @Input() closeOnPanelClick = true;

  readonly isOpen = signal(false);

  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const onDocumentClick = (event: MouseEvent) => {
        if (!this.elementRef.nativeElement.contains(event.target as Node)) {
          this.close();
        }
      };
      const onKeydown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          this.close();
        }
      };

      document.addEventListener('click', onDocumentClick);
      document.addEventListener('keydown', onKeydown);

      this.destroyRef.onDestroy(() => {
        document.removeEventListener('click', onDocumentClick);
        document.removeEventListener('keydown', onKeydown);
      });
    });
  }

  open(): void {
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }

  toggle(): void {
    this.isOpen.update((open) => !open);
  }

  onPanelClick(): void {
    if (this.closeOnPanelClick) {
      this.close();
    }
  }
}
