import { LangService } from 'src/app/shared/services/lang.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeDate'
})
export class RelativeDatePipe implements PipeTransform {

  constructor(private langService: LangService) { }

  transform(value: any, past: boolean = false): unknown {
    const currentLang = this.langService.CurrentLang;
    const numberNotion: number = past ? -1 : 1;
    const rtf = new Intl.RelativeTimeFormat(currentLang, {
      localeMatcher: "best fit", // other values: "lookup"
      numeric: "always", // other values: "auto"
      style: "long", // other values: "short" or "narrow"
    });
    // if the date is past current date subtract past date from today
    // else get future date by subtracting future dates from today
    // get date diffrence for past dates
    let diffMS = new Date().getTime() - new Date(value).getTime();
    // get date diffrence for future dates
    if (numberNotion == 1)
      diffMS = new Date(value).getTime() - new Date().getTime();

    const diffDays = (((diffMS / 1000) / 60) / 60) / 24;

    // Show Seconds
    if ((diffDays * 24 * 60) < numberNotion)
      return rtf.format(numberNotion * (Math.ceil(diffDays * 24 * 60)), 'seconds');
    // show minutes
    if ((diffDays * 24) < numberNotion)
      return rtf.format(numberNotion * (Math.ceil(diffDays * 24 * 60)), 'minutes');
    // show hours
    if (diffDays < numberNotion)
      return rtf.format(numberNotion * (Math.ceil(diffDays * 24)), 'hour');
    // show days
    return rtf.format(numberNotion * (Math.ceil(diffDays)), 'day');
  }

}
