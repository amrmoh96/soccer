import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'soc-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {
  @Input() title!: string;
  @Input() isSectionTitle:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
