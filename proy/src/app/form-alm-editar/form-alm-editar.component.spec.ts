import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlmEditarComponent } from './form-alm-editar.component';

describe('FormAlmEditarComponent', () => {
  let component: FormAlmEditarComponent;
  let fixture: ComponentFixture<FormAlmEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAlmEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlmEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
