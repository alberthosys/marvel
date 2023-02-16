import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeDialogComponent } from './heroe-dialog.component';

describe('HeroeDialogComponent', () => {
  let component: HeroeDialogComponent;
  let fixture: ComponentFixture<HeroeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
