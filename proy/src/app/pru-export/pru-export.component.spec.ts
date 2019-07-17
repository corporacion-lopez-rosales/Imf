import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruExportComponent } from './pru-export.component';

describe('PruExportComponent', () => {
  let component: PruExportComponent;
  let fixture: ComponentFixture<PruExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
