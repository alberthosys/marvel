import { of } from 'rxjs';
import { REQUIRED_FIELD } from './../../../models/forms/InputError.model';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Hero } from '../../../models/table/hero/hero';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-heroe-dialog',
  templateUrl: './heroe-dialog.component.html',
  styleUrls: ['./heroe-dialog.component.scss'],
})
export class HeroeDialogComponent {
  form!: FormGroup;
  validationMessages = VALIDATION_MESSAGES;
  constructor(
    private dialogRef: MatDialogRef<HeroeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public hero: Hero,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      description: new FormControl(null),
    });
    this.form.patchValue(this.hero);
  }

  close() {
    this.dialogRef.close();
  }

  update() {
    if (this.form.invalid) {
      return;
    }
    this.dialogRef.close(this.form.value);
  }
}
const VALIDATION_MESSAGES = {
  name: [REQUIRED_FIELD],
};
