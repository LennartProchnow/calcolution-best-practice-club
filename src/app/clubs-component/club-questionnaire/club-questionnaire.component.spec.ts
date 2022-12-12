import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubQuestionnaireComponent } from './club-questionnaire.component';

describe('ClubQuestionnaireComponent', () => {
  let component: ClubQuestionnaireComponent;
  let fixture: ComponentFixture<ClubQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubQuestionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
