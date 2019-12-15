import { TestBed } from '@angular/core/testing';

import { ReviewDetailsService } from './review-details.service';

describe('ReviewDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewDetailsService = TestBed.get(ReviewDetailsService);
    expect(service).toBeTruthy();
  });
});
