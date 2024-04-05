import { Component } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class CareersComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', [Validators.required, Validators.email]],
  });
  documentFormGroup = this._formBuilder.group({
    documentCtrl: [null, Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.documentFormGroup.patchValue({
      documentCtrl: file
    });
  }

  submitForm() {
    // Handle submission of the form, e.g., send data to server
    console.log('Form submitted successfully!');
  }

}
