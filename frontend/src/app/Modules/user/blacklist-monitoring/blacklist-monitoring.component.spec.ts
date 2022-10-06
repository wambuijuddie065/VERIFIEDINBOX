import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistMonitoringComponent } from './blacklist-monitoring.component';

describe('BlacklistMonitoringComponent', () => {
  let component: BlacklistMonitoringComponent;
  let fixture: ComponentFixture<BlacklistMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacklistMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlacklistMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
