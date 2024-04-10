// table.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class TableComponent {
  @Input()
  dataSource!: any[];
  @Input() displayedColumns!: string[];
}
