import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubAssessmentComponent } from './club-assessment.component';

describe('ClubAssessmentComponent', () => {
  let component: ClubAssessmentComponent;
  let fixture: ComponentFixture<ClubAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
