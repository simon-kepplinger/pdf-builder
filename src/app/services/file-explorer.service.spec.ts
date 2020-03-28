import { TestBed } from '@angular/core/testing';

import { FileExplorerService } from './file-explorer.service';
import { FileOpener } from '@ionic-native/file-opener/ngx';

describe('FileExplorerService', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [FileOpener] }));

  it('should be created', () => {
    const service: FileExplorerService = TestBed.inject(FileExplorerService);
    expect(service).toBeTruthy();
  });
});
