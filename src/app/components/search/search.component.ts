import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() form!: FormGroup;
  @Input() key!: string;
  @Input() placeholder!: string;
  @Output() keyDownEnter = new EventEmitter();

  keyDownEnterEvent(): void {
    this.keyDownEnter.emit(this.form.value);
  }
}
