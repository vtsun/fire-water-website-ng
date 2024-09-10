import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor (private snackBar: MatSnackBar) {}


  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', Validators.required);
  organization = new FormControl('', Validators.required);



  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid email address';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
