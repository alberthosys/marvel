import { InputError } from './../../models/forms/InputError.model';
import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() form!: FormGroup;
  @Input() validations: InputError[] = [];
  @Input() key = '';
  @Input() label = '';
}
