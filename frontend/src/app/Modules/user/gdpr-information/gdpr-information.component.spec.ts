import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GDPRInformationComponent } from './gdpr-information.component';

describe('GDPRInformationComponent', () => {
  let component: GDPRInformationComponent;
  let fixture: ComponentFixture<GDPRInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GDPRInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GDPRInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
