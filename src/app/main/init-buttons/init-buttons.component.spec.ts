import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InitButtonsComponent } from './init-buttons.component';

describe('InitButtonsComponent', () => {
  let component: InitButtonsComponent;
  let fixture: ComponentFixture<InitButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InitButtonsComponent],
      imports: [IonicModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InitButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
