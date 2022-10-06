import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOptionComponent } from './account-option.component';

describe('AccountOptionComponent', () => {
  let component: AccountOptionComponent;
  let fixture: ComponentFixture<AccountOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
