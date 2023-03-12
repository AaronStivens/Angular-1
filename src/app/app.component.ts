import {Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  title = 'angulars8';
  sidenavTextColor="white";

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(Direccion1,);
  }
  
}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'Direccion.html',
})

export class Direccion1 {
  constructor(public dialogRef: MatDialogRef<Direccion1>) {}
  close() {
    this.dialogRef.close();
  }
}







