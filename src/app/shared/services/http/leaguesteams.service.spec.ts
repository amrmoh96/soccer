import { TestBed } from '@angular/core/testing';

import { LeaguesteamsService } from './leaguesteams.service';

describe('LeaguesteamsService', () => {
  let service: LeaguesteamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaguesteamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
