import { TestBed } from '@angular/core/testing';

import { ExcelDBService } from './excel-db.service';

describe('ExcelDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcelDBService = TestBed.get(ExcelDBService);
    expect(service).toBeTruthy();
  });
});
