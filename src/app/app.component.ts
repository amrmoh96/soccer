import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'soccer';
  constructor(private primengConfig: PrimeNGConfig, private translateService: TranslateService) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    const storedLang = localStorage.getItem('lang') || 'en';
    this.translate(storedLang)
  }

  translate(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang)
    document.getElementsByTagName('html').item(0)?.setAttribute('lang', lang)
  }
}
