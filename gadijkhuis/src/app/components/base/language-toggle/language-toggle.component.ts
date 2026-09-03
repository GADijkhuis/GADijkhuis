import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-language-toggle',
  imports: [DropdownComponent],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.scss',
})
export class LanguageToggleComponent {
  readonly languageService = inject(LanguageService);
  readonly codes = this.languageService.getAvailableLanguageCodes();

  select(code: string): void {
    this.languageService.setLanguage(code === this.languageService.defaultCode ? 'default' : code);
  }

  isActive(code: string): boolean {
    const current = this.languageService.language();
    return code === this.languageService.defaultCode ? current === 'default' : current === code;
  }

  get currentCode(): string {
    const current = this.languageService.language();
    return current === 'default' ? this.languageService.defaultCode : current;
  }
}
