import { Component } from '@angular/core';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
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
