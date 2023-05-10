import { TestBed } from '@angular/core/testing';

import { AdBannerService } from './ad-banner.service';

describe('AdBannerService', () => {
  let service: AdBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
