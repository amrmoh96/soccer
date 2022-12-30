import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationsListComponent } from './navigations-list.component';

describe('NavigationsListComponent', () => {
  let component: NavigationsListComponent;
  let fixture: ComponentFixture<NavigationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
