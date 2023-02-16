import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DialogLayoutComponent } from './dialog-layout/dialog-layout.component';
import { CardModule } from 'primeng/card';
import { InputComponent } from './input/input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ImageModule } from 'primeng/image';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    IconButtonComponent,
    TableComponent,
    SearchComponent,
    DialogLayoutComponent,
    InputComponent,
    TextAreaComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MatIconModule,
    TableModule,
    PaginatorModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    CardModule,
    InputTextareaModule,
    ImageModule,
    ToastModule,
  ],
  exports: [
    IconButtonComponent,
    TableComponent,
    SearchComponent,
    DialogLayoutComponent,
    InputComponent,
    TextAreaComponent,
  ],
})
export class ComponentsModule {}
