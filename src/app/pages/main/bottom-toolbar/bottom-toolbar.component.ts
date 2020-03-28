import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-toolbar',
  templateUrl: './bottom-toolbar.component.html',
  styleUrls: ['./bottom-toolbar.component.scss'],
})
export class BottomToolbarComponent {

  @Input()
  public isDisabled: boolean = false;

  public constructor() {
  }
}
