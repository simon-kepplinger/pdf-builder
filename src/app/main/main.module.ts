import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { BottomToolbarComponent } from './bottom-toolbar/bottom-toolbar.component';
import { PdfBuilderComponent } from './pdf-builder/pdf-builder.component';
import { InitButtonsComponent } from './init-buttons/init-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
  ],
  declarations: [
    MainPage,
    BottomToolbarComponent,
    PdfBuilderComponent,
    InitButtonsComponent
  ],
  providers: []
})
export class MainPageModule {
}
