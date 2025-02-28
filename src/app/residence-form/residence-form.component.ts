import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-residence-form',
  templateUrl: './residence-form.component.html',
  styleUrls: ['./residence-form.component.css']
})
export class ResidenceFormComponent {
  residenceForm!:FormGroup ;

  ngOnInit() {
    this.residenceForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(50) 
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(50) 
      ]),
      status: new FormControl('',
        Validators.required
      ),
      image: new FormControl(null,
        Validators.required
      )
    });





  }
  get name()
{
  return this.residenceForm.get('name')?.value
}


}
