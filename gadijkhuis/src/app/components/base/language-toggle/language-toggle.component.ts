import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-language-toggle',
  imports: [],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.scss',
})
export class LanguageToggleComponent {
  readonly languageService = inject(LanguageService);
  readonly codes = this.languageService.getAvailableLanguageCodes();

  onChange(event: Event): void {
    const code = (event.target as HTMLSelectElement).value;
    this.languageService.setLanguage(code === this.languageService.defaultCode ? 'default' : code);
  }

  isActive(code: string): boolean {
    const current = this.languageService.language();
    return code === this.languageService.defaultCode ? current === 'default' : current === code;
  }

  get currentFlag(): string {
    const current = this.languageService.language();
    const code = current === 'default' ? this.languageService.defaultCode : current;
    return this.languageService.getFlagEmoji(code);
  }
}
