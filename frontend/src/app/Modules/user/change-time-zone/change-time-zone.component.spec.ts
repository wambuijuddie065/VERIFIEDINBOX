import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTimeZoneComponent } from './change-time-zone.component';

describe('ChangeTimeZoneComponent', () => {
  let component: ChangeTimeZoneComponent;
  let fixture: ComponentFixture<ChangeTimeZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTimeZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTimeZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
