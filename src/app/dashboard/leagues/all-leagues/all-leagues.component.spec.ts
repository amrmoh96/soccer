import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLeaguesComponent } from './all-leagues.component';

describe('AllLeaguesComponent', () => {
  let component: AllLeaguesComponent;
  let fixture: ComponentFixture<AllLeaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLeaguesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
