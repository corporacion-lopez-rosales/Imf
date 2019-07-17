import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlmActComponent } from './form-alm-act.component';

describe('FormAlmActComponent', () => {
  let component: FormAlmActComponent;
  let fixture: ComponentFixture<FormAlmActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAlmActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlmActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
