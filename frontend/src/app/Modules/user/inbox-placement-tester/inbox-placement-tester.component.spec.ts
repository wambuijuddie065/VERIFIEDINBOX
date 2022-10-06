import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxPlacementTesterComponent } from './inbox-placement-tester.component';

describe('InboxPlacementTesterComponent', () => {
  let component: InboxPlacementTesterComponent;
  let fixture: ComponentFixture<InboxPlacementTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxPlacementTesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboxPlacementTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
