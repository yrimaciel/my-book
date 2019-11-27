import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GoogleApiService } from './google-api.service';

describe('GoogleApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [GoogleApiService]
  }));

  it('should be created', () => {
    const service: GoogleApiService = TestBed.get(GoogleApiService);
    expect(service).toBeTruthy();
  });
});
