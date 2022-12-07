import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubMeasureComponent } from './club-measure.component';

describe('ClubMeasureComponent', () => {
  let component: ClubMeasureComponent;
  let fixture: ComponentFixture<ClubMeasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubMeasureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
