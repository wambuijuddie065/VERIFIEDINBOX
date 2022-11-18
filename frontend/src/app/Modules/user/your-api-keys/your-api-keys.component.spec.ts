import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourApiKeysComponent } from './your-api-keys.component';

describe('YourApiKeysComponent', () => {
  let component: YourApiKeysComponent;
  let fixture: ComponentFixture<YourApiKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourApiKeysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourApiKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
