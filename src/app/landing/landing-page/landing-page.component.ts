import { LangService } from './../../shared/services/lang.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private translateService: TranslateService, private langService: LangService) { }

  ngOnInit(): void {
  }

  translate(lang: string) {
    this.langService.translate(lang)
  }

  public get currentLang(): string {
    return this.langService.CurrentLang;
  }

}
