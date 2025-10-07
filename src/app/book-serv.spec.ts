import { TestBed } from '@angular/core/testing';

import { BookServ } from './book-serv';

describe('BookServ', () => {
  let service: BookServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
