import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIScoringUploadComponent } from './ai-scoring-upload.component';

describe('AIScoringUploadComponent', () => {
  let component: AIScoringUploadComponent;
  let fixture: ComponentFixture<AIScoringUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AIScoringUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIScoringUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
