import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUpdateComponent } from './datos-update.component';

describe('DatosUpdateComponent', () => {
  let component: DatosUpdateComponent;
  let fixture: ComponentFixture<DatosUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
