import { Component, OnInit } from '@angular/core';
import { BuilderFileService } from '../../services/builder-file.service';
import { BuilderFile } from '../../core/model/builder-file';
import { BaseBehaviorSubjectComponent } from '../../core/base-components/base-behavoir-subject.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage extends BaseBehaviorSubjectComponent implements OnInit {

  public isBuilderOpened: boolean = false;

  public constructor(private builderFileService: BuilderFileService) {
    super();
  }

  public ngOnInit(): void {
    this.listen(this.builderFileService.files, this.onFileChange.bind(this));
  }

  private onFileChange(files: BuilderFile[]): void {
    this.isBuilderOpened = files?.length !== 0;
  }
}
