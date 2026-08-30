import { Injectable, inject } from '@angular/core';
import { Localized } from '../models/content/content';
import { LanguageService } from './language.service';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly languageService = inject(LanguageService);

  resolve<T>(entry: Localized<T>): T {
    const lang = this.languageService.language();
    return entry[lang] ?? entry['default'];
  }
}
