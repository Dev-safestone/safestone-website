import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'safestone-main';
  // In your component.ts file
  imagePath: string = 'assets/bg.png';

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '600px', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(() => {
      // Handle any actions after the dialog is closed, if necessary
    });
  }

}
