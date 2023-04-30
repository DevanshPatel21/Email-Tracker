import { TestBed } from '@angular/core/testing';

import { UsermailService } from './usermail.service';

describe('UsermailService', () => {
  let service: UsermailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsermailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
