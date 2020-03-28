import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdfBuilderComponent } from './pdf-builder.component';

describe('PdfBuilderComponent', () => {
  let component: PdfBuilderComponent;
  let fixture: ComponentFixture<PdfBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PdfBuilderComponent],
      imports: [IonicModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PdfBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
