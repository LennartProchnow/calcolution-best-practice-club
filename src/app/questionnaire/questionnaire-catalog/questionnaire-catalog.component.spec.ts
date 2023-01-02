import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireCatalogComponent } from './questionnaire-catalog.component';

describe('QuestionnaireCatalogComponent', () => {
  let component: QuestionnaireCatalogComponent;
  let fixture: ComponentFixture<QuestionnaireCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnaireCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
