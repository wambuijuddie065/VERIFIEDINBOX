import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallbackStatusComponent } from './api-callback-status.component';

describe('ApiCallbackStatusComponent', () => {
  let component: ApiCallbackStatusComponent;
  let fixture: ComponentFixture<ApiCallbackStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCallbackStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCallbackStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
