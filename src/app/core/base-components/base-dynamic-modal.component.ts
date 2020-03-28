import { EventEmitter, HostListener, Output } from '@angular/core';
import { BaseSubscriptionComponent } from './base-subscription.component';

export class BaseDynamicModalComponent extends BaseSubscriptionComponent {

  @Output()
  public close: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('document:keydown.escape', ['$event'])
  public escapeHandler() {
    this.close.emit();
  }

  public closeModal(): void {
    this.close.emit();
  }
}
