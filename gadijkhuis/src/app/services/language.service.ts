import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Content, Localized } from '../models/content/content';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly defaultCode = 'gb';

  private readonly storageKey = 'language';
  private readonly platformId = inject(PLATFORM_ID);
  private readonly languageSignal = signal<string>(this.detectInitialLanguage());
  readonly language = this.languageSignal.asReadonly();

  setLanguage(code: string): void {
    this.languageSignal.set(code);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, code);
    }
  }

  getAvailableLanguageCodes(): string[] {
    const codes = new Set<string>();
    for (const value of Object.values(Content)) {
      if (this.isLocalized(value)) {
        Object.keys(value)
          .filter((key) => key !== 'default')
          .forEach((key) => codes.add(key));
      }
    }
    return [this.defaultCode, ...Array.from(codes).sort()];
  }

  private detectInitialLanguage(): string {
    if (!isPlatformBrowser(this.platformId)) {
      return 'default';
    }

    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      return stored;
    }

    const raw = navigator.language ?? 'default';
    const parts = raw.split('-');
    return (parts.length > 1 ? parts[1] : parts[0]).toLowerCase();
  }

  getFlagEmoji(code: string): string {
    const base = 0x1f1e6; // regional indicator symbol letter A
    return code
      .toUpperCase()
      .split('')
      .map((c) => String.fromCodePoint(base + (c.charCodeAt(0) - 65)))
      .join('');
  }

  private isLocalized(value: unknown): value is Localized {
    return typeof value === 'object' && value !== null && !Array.isArray(value) && 'default' in value;
  }
}
