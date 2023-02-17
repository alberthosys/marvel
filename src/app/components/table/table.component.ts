import { Hero } from '../../models/table/hero/hero';
import { DisplayedColumnsConfig } from './../../models/table/DisplayedColumnsConfig';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() title = '';
  @Input() list: any = [];
  @Input() conlumnsConfig: DisplayedColumnsConfig[] = [];
  @Input() totalRecords = 0;
  @Input() maxRows = 10;
  @Input() pageIndex = 0;
  @Input() pagesConfig: number[] = [20, 25, 30];
  @Input() rowHover = false;
  @Output() pageChange = new EventEmitter();
  @Output() selectRow = new EventEmitter();

  onPageChange(pageChange: any): void {
    const params = {
      offset: pageChange.page * pageChange.rows,
      page: pageChange.page,
      limit: pageChange.rows,
    };
    console.log(params);
    this.pageChange.emit(params);
  }

  selectRowEvent(rowData: any) {
    this.selectRow.emit(rowData);
  }
}
