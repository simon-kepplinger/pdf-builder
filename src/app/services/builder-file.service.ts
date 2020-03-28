import { Injectable } from '@angular/core';
import { BuilderFile } from '../core/model/builder-file';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BuilderFileService {

  public files: BehaviorSubject<BuilderFile[]> = new BehaviorSubject<BuilderFile[]>([]);

  public constructor() {
  }

  public addFile(file: BuilderFile): void {
    let files: BuilderFile[] = this.files.getValue();
    files.push(file);
    this.files.next(files);
  }
}
