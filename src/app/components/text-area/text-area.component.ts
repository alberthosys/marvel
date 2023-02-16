import { InputError } from './../../models/forms/InputError.model';
import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent {
  @Input() form!: FormGroup;
  @Input() validations: InputError[] = [];
  @Input() key = '';
  @Input() label = '';
}
