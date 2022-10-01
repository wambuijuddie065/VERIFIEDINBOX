import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEmailValidatorComponent } from './single-email-validator.component';

describe('SingleEmailValidatorComponent', () => {
  let component: SingleEmailValidatorComponent;
  let fixture: ComponentFixture<SingleEmailValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleEmailValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleEmailValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
