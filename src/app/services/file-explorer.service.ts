import { Injectable } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Injectable({
  providedIn: 'root'
})
export class FileExplorerService {
  public constructor(private fileOpener: FileOpener) {
  }
}
