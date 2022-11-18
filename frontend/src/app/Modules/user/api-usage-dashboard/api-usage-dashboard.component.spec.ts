import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUsageDashboardComponent } from './api-usage-dashboard.component';

describe('ApiUsageDashboardComponent', () => {
  let component: ApiUsageDashboardComponent;
  let fixture: ComponentFixture<ApiUsageDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUsageDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUsageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
