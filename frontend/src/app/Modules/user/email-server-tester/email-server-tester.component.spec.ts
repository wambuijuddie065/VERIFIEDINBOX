import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailServerTesterComponent } from './email-server-tester.component';

describe('EmailServerTesterComponent', () => {
  let component: EmailServerTesterComponent;
  let fixture: ComponentFixture<EmailServerTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailServerTesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailServerTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
