import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(private translateService: TranslateService) { }

  public translate(lang: string): void {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang)
    document.querySelector('html')?.setAttribute('lang', lang)
    window.location.reload()
  }

  public get CurrentLang(): string {
    return localStorage.getItem('lang') || 'en';
  }

}
