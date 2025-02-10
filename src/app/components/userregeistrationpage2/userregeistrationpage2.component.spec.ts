import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userregeistrationpage2Component } from './userregeistrationpage2.component';

describe('Userregeistrationpage2Component', () => {
  let component: Userregeistrationpage2Component;
  let fixture: ComponentFixture<Userregeistrationpage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Userregeistrationpage2Component]
    });
    fixture = TestBed.createComponent(Userregeistrationpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
