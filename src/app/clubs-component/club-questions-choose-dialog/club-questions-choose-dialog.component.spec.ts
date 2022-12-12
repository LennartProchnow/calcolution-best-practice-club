import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubQuestionsChooseDialogComponent } from './club-questions-choose-dialog.component';

describe('ClubQuestionsChooseDialogComponent', () => {
  let component: ClubQuestionsChooseDialogComponent;
  let fixture: ComponentFixture<ClubQuestionsChooseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubQuestionsChooseDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubQuestionsChooseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
