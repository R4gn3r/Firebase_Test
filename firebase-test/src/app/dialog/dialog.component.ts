import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  loginSuccessful: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {message: string}) {
    // Setzen Sie loginSuccessful auf den Wert, der bestimmt, ob der Login erfolgreich war oder nicht
    this.loginSuccessful = data.message === 'Login Successful';
  }
}
