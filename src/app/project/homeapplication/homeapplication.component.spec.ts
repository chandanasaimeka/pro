import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeapplicationComponent } from './homeapplication.component';

describe('HomeapplicationComponent', () => {
  let component: HomeapplicationComponent;
  let fixture: ComponentFixture<HomeapplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeapplicationComponent]
    });
    fixture = TestBed.createComponent(HomeapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
