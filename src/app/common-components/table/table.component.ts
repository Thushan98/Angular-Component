import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Column } from './column';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> implements OnInit {
  @Input() tableColumns: Array<Column> = [];

  set tableData(value: Array<T>) {
    this._tableData = value;
    this.dataSource = new MatTableDataSource([...value]);
  }

  @Input()
  get tableData(): Array<T> {
    return this._tableData;
  }

  private _tableData!: Array<T>;

  @Output() selectedIndex = new EventEmitter<number>();
  displayedColumns: Array<string> = [];
  dataSource: MatTableDataSource<T> = new MatTableDataSource();
  selectedRowIndex!: number;

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  emitSelection(index: number) {
    this.selectedRowIndex = index;
    this.selectedIndex.emit(index);
  }

  applyFilter(filterValue: string) {
    if (filterValue && filterValue.trim()) {
      filterValue = filterValue.trim().toLowerCase();
      this.dataSource.filter = filterValue;
    }
  }
}
