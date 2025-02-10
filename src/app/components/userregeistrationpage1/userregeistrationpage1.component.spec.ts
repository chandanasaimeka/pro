import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userregeistrationpage1Component } from './userregeistrationpage1.component';

describe('Userregeistrationpage1Component', () => {
  let component: Userregeistrationpage1Component;
  let fixture: ComponentFixture<Userregeistrationpage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Userregeistrationpage1Component]
    });
    fixture = TestBed.createComponent(Userregeistrationpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
