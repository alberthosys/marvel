import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from 'primeng/button';

import { ComponentsModule } from '../components/components.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroeDialogComponent } from './heroes.index/heroe-dialog/heroe-dialog.component';
import { HeroesComponent } from './heroes.index/heroes.component';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [HeroesComponent, HeroeDialogComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ButtonModule,
    ComponentsModule,
    MatDialogModule,
    ImageModule,
  ],
})
export class HeroesModule {}
