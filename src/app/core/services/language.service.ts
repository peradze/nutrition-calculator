import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languages: string[] = ['en', 'ka'];

  constructor(private translateService: TranslateService) {
    let lang = sessionStorage.getItem('appLang');
    if (lang != null) {
      this.translateService.use(lang).subscribe();
      this.updateLang(this.translateService.currentLang);
    } else {
      this.translateService.use('ka').subscribe();
      this.updateLang('ka');
    }
  }

  getLanguageOptions() {
    return this.languages;
  }

  updateLang(lang: string) {
    sessionStorage.setItem('appLang', lang);
    document.documentElement.lang = lang.toLowerCase();
    this.translateService.use(lang.toLowerCase()).subscribe();
  }
}
