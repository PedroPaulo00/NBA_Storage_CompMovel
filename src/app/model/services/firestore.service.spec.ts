import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firestore.service';

describe('FirestoreService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
