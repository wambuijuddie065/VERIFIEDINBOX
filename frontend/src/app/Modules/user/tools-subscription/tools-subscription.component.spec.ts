import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsSubscriptionComponent } from './tools-subscription.component';

describe('ToolsSubscriptionComponent', () => {
  let component: ToolsSubscriptionComponent;
  let fixture: ComponentFixture<ToolsSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsSubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
