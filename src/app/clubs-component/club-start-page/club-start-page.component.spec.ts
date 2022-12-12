import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubStartPageComponent } from './club-start-page.component';

describe('ClubStartPageComponent', () => {
  let component: ClubStartPageComponent;
  let fixture: ComponentFixture<ClubStartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubStartPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
