import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Book2 } from './book2';

describe('Book2', () => {
  let component: Book2;
  let fixture: ComponentFixture<Book2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Book2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Book2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
