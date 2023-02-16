import { ComponentsModule } from './../components/components.module';
import { NotFoundComponent } from './not-found.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRoutingModule } from './not-found-routing.module';
@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    RouterModule,
    ComponentsModule,
  ],
})
export class NotFoundModule {}
