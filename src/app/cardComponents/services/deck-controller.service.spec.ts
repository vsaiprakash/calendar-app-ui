import { TestBed } from '@angular/core/testing';

import { DeckControllerService } from './deck-controller.service';

describe('DeckControllerService', () => {
  let service: DeckControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
