import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Column } from 'src/app/common-components/table/column';

class Details {
  name!: string;
  dob!: string;
  role!: string;
}

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MatTableComponent {

  setSelected(id: number) {
    console.log(id)
  }

  tableColumns: Array<Column> = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, unknown>) => `${element['name']}`
    },
    {
      columnDef: 'dob',
      header: 'Date Of Birth',
      cell: (element: Record<string, unknown>) => `${element['dob']}`
    },
    {
      columnDef: 'role',
      header: 'Role',
      cell: (element: Record<string, unknown>) => `${element['role']}`
    },
  ];

  tableData: Details[] = [
    {
      name: "thush",
      dob: "222",
      role: "stu"
    },
    {
      name: "Dana",
      dob: "2542",
      role: "admin"
    }
  ];
}
