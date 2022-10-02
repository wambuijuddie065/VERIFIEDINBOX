import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIKeysComponent } from './api-keys.component';

describe('APIKeysComponent', () => {
  let component: APIKeysComponent;
  let fixture: ComponentFixture<APIKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIKeysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
