import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoshnaComponent } from './joshna.component';

describe('JoshnaComponent', () => {
  let component: JoshnaComponent;
  let fixture: ComponentFixture<JoshnaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoshnaComponent]
    });
    fixture = TestBed.createComponent(JoshnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
