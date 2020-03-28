import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';
import { BottomToolbarComponent } from './bottom-toolbar/bottom-toolbar.component';
import { PdfBuilderComponent } from './pdf-builder/pdf-builder.component';
import { InitButtonsComponent } from './init-buttons/init-buttons.component';
import { BuilderFileService } from '../services/builder-file.service';
import { BuilderFile } from '../core/model/builder-file';

describe('MainPage', () => {
  let component: MainPage;
  let fixture: ComponentFixture<MainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainPage, BottomToolbarComponent, PdfBuilderComponent, InitButtonsComponent],
      providers: [BuilderFileService],
      imports: [IonicModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should setBuilderOpened according to builder files length', () => {
    const builderFileService: BuilderFileService = TestBed.get(BuilderFileService);

    expect(builderFileService.files.getValue().length).toBe(0);
    expect(component.isBuilderOpened).toBeFalsy();

    builderFileService.addFile(new BuilderFile());

    expect(builderFileService.files.getValue().length).toBe(1);
    expect(component.isBuilderOpened).toBeTruthy();
  });
});
