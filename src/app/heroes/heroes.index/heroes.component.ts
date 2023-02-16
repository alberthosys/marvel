import { ToastService } from './../../_services/toast.service';
import { HeroeDialogComponent } from './heroe-dialog/heroe-dialog.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Hero } from '../../models/table/hero/hero';
import { HeroesService } from './../heroes.service';
import { DisplayedColumnsConfig } from './../../models/table/DisplayedColumnsConfig';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  params = {
    offset: 0,
    limit: 20,
  };
  totalRecords: number = 0;
  heroes: any[] = [];
  search: string = '';
  formSearch!: FormGroup;
  columnsConfig: DisplayedColumnsConfig[] = DISPLAYED_COLUMNS;
  pendingRequest = false;
  constructor(
    private heroesService: HeroesService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private toastService: ToastService
  ) {
    this.formSearch = this.fb.group({
      name: new FormControl(null),
    });
  }

  searchHero() {
    if (this.pendingRequest) {
      return;
    }
    this.resetPage();
  }

  ngOnInit(): void {
    this.getHeros();
  }

  resetPage(): void {
    this.params.offset = 0;
    this.getHeros();
  }

  getHeros(): void {
    this.pendingRequest = true;
    const newParams = (): any => {
      const name = this.formSearch.get('name')?.value;
      if (!name) {
        return this.params;
      }
      return { ...this.params, ...this.formSearch.value };
    };
    this.heroesService.getCharacters(newParams()).subscribe((response) => {
      this.heroes = response.data.results;
      this.totalRecords = response.data.total;
      this.pendingRequest = false;
    });
  }

  pageChange({ offset, limit }: any): void {
    this.params.offset = offset;
    if (this.params.limit != limit) {
      this.params.limit = limit;
      this.resetPage();
      return;
    }
    this.getHeros();
  }
  showHero(hero: Hero) {
    const config: MatDialogConfig = {
      data: hero,
      panelClass: 'dialog',
    };
    const dialogRef = this.dialog.open(HeroeDialogComponent, config);
    dialogRef.afterClosed().subscribe((res) => {
      if (!res) {
        return;
      }
      this.update(res);
    });
  }

  update(hero: Hero): void {
    let update = false;
    // We can replace it by call to back-end
    this.heroes = this.heroes.map((it) => {
      if (hero.id === it.id) {
        it.name = hero.name;
        it.description = hero.description;
        update = true;
      }
      return it;
    });
    // Here we can evaluate only the response of back-end
    if (update) {
      this.toastService.success(`${hero.name}`, `Info has been updated`);
    }
  }
}
const DISPLAYED_COLUMNS: DisplayedColumnsConfig[] = [
  {
    key: 'thumbnail',
    title: 'Image',
    getValue: (hero: Hero) =>
      `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
    type: 'image',
  },
  {
    key: 'name',
    title: 'Name',
    getValue: (hero: Hero) => hero.name,
  },
  {
    key: 'description',
    title: 'Description',
    getValue: (hero: Hero) => hero.description || 'Without description',
  },
];
