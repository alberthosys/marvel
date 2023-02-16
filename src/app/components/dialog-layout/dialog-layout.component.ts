import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-layout',
  templateUrl: './dialog-layout.component.html',
  styleUrls: ['./dialog-layout.component.scss'],
})
export class DialogLayoutComponent {
  @Input() title = '';
  @Output() actionNegative = new EventEmitter();
  @Output() actionPositive = new EventEmitter();

  actionPositiveEvent() {
    this.actionPositive.emit();
  }

  actionNegativeEvent() {
    this.actionNegative.emit();
  }
}
