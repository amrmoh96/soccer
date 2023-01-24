import { TestBed } from '@angular/core/testing';

import { LeagueMatchesService } from './league-matches.service';

describe('LeagueMatchesService', () => {
  let service: LeagueMatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeagueMatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
