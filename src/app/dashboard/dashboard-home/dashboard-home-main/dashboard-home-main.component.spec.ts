import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomeMainComponent } from './dashboard-home-main.component';

describe('DashboardHomeMainComponent', () => {
  let component: DashboardHomeMainComponent;
  let fixture: ComponentFixture<DashboardHomeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHomeMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHomeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
