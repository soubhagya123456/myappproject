import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';
  constructor(public dialog: MatDialog) {

  }
  ngOnIntit() {

  }
  openDilog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: 'Ankit', Gender: 'Male' }
    })
  }
}