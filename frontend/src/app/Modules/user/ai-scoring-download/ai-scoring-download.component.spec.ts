import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIScoringDownloadComponent } from './ai-scoring-download.component';

describe('AIScoringDownloadComponent', () => {
  let component: AIScoringDownloadComponent;
  let fixture: ComponentFixture<AIScoringDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AIScoringDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIScoringDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
