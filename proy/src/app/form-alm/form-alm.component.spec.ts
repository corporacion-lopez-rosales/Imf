import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlmComponent } from './form-alm.component';

describe('FormAlmComponent', () => {
  let component: FormAlmComponent;
  let fixture: ComponentFixture<FormAlmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAlmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
