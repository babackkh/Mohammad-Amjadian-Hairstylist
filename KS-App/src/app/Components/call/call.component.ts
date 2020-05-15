import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar/snackbar.component';


@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent {
  requestDone = false;
  buttonText = 'Call Request';
  formData: string;
  numError = false;
  durationInSeconds = 4;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  onCallRequest() {
    console.log(this.formData.length)
     if(this.formData.length === 10) {
      this.requestDone = true;
      this.buttonText = 'Done!';
      setTimeout(() => this.requestDone = false, 4000);
    }else {
      this.openSnackBar()
    } 
  }

}
