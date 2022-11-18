import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageContactListsComponent } from './manage-contact-lists.component';

describe('ManageContactListsComponent', () => {
  let component: ManageContactListsComponent;
  let fixture: ComponentFixture<ManageContactListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageContactListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageContactListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
