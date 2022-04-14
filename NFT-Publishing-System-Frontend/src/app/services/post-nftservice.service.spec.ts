import { TestBed } from '@angular/core/testing';

import { PostNFTServiceService } from './post-nftservice.service';

describe('PostNFTServiceService', () => {
  let service: PostNFTServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostNFTServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
