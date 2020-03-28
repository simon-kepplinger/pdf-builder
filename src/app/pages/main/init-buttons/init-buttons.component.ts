import { Component } from '@angular/core';
import { FileExplorerService } from '../../../services/file-explorer.service';

@Component({
  selector: 'app-init-buttons',
  templateUrl: './init-buttons.component.html',
  styleUrls: ['./init-buttons.component.scss'],
})
export class InitButtonsComponent {
  public constructor(private fileExplorer: FileExplorerService) {
  }

  public openFiles(): void {
    this.fileExplorer.openFiles();
  }
}
