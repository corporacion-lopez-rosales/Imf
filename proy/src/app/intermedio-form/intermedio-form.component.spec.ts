import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermedioFormComponent } from './intermedio-form.component';

describe('IntermedioFormComponent', () => {
  let component: IntermedioFormComponent;
  let fixture: ComponentFixture<IntermedioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermedioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermedioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
