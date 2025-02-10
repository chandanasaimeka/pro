import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCourseDetailsComponent } from './selected-course-details.component';

describe('SelectedCourseDetailsComponent', () => {
  let component: SelectedCourseDetailsComponent;
  let fixture: ComponentFixture<SelectedCourseDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedCourseDetailsComponent]
    });
    fixture = TestBed.createComponent(SelectedCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
