import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.css']
})
export class AddAppartmentComponent {
  apartmentForm!: FormGroup;

  ngOnInit(): void {
    this.apartmentForm = new FormGroup({
      apartmentNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      floorNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      surface: new FormControl('', Validators.required),
      terraceYes: new FormControl(false),
      terraceNo: new FormControl(false),
      surfaceTerrace: new FormControl('', []),
      category: new FormControl('', Validators.required),
      residence: new FormControl('', Validators.required),
    });

    this.apartmentForm.get('terraceYes')?.valueChanges.subscribe(checked => {
      if (checked) {
        this.apartmentForm.get('surfaceTerrace')?.setValidators(Validators.required);
      } else {
        this.apartmentForm.get('surfaceTerrace')?.clearValidators();
      }
      this.apartmentForm.get('surfaceTerrace')?.updateValueAndValidity();
    });
  }

  onSubmit(): void {
    if (this.apartmentForm.valid) {
      const newApartment = this.apartmentForm.value;
      console.log(newApartment); 
    }
  }

}
