import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRegForm } from './emp-reg-form';

describe('EmpRegForm', () => {
  let component: EmpRegForm;
  let fixture: ComponentFixture<EmpRegForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpRegForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpRegForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
