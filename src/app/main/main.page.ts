import { Component, OnInit } from '@angular/core';
import { BaseSubscriptionComponent } from '../core/base-components/base-subscription.component';
import { BuilderFileService } from '../services/builder-file.service';
import { BuilderFile } from '../core/model/builder-file';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage extends BaseSubscriptionComponent implements OnInit {

  public isBuilderOpened: boolean = false;

  public constructor(private builderFileService: BuilderFileService) {
    super();
  }

  public ngOnInit(): void {
    // this.addSub(this.builderFileService.files.subscribe(() => ))
  }

  private onFileChange(files: BuilderFile[]): void {
    // if (files?.length !== 0) {

    // }
  }
}
