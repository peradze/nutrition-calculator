import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  languages: string[] = this.languageService.getLanguageOptions();
  constructor(private languageService: LanguageService) {}

  changeLanguage(lang: string) {
    this.languageService.updateLang(lang);
  }
}
