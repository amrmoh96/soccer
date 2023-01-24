import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchAcrdComponent } from './match-acrd.component';

describe('MatchAcrdComponent', () => {
  let component: MatchAcrdComponent;
  let fixture: ComponentFixture<MatchAcrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchAcrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchAcrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
