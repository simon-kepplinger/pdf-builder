import { TestBed } from '@angular/core/testing';

import { BuilderFileService } from './builder-file.service';

describe('BuilderFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuilderFileService = TestBed.get(BuilderFileService);
    expect(service).toBeTruthy();
  });
});
