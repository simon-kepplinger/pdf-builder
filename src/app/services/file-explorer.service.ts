import { Injectable } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Plugins } from '@capacitor/core';

const { Filesystem } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FileExplorerService {
  public constructor(private fileOpener: FileOpener) {
  }

  public openFiles(): Promise<any> {
    return this.fileOpener.showOpenWithDialog('', 'application/pdf');
  }
}
