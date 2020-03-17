import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{DialogComponent} from '../dialog/dialog.component'
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }


openDialog() {
  const dialogRef = this.dialog.open(DialogComponent, {
    width: '250px',
    data: {name:'soubu', gender: 'male'}
  })
}

}