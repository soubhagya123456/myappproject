import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'soubhagya', weight: 70, symbol: '@'},
  {position: 2, name: 'Raghu', weight: 65, symbol: '%'},
  {position: 3, name: 'suman', weight: 72, symbol: '&'},
  {position: 4, name: 'Benky', weight: 82, symbol: '*'},
  {position: 5, name: 'ankit', weight: 71, symbol: '!'},
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }


  
}



