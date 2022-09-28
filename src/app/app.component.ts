import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  slides = [
    { 'image': 'https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg' },
    { 'image': 'https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg' },
    { 'image': 'https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg' },
    { 'image': 'https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg' },
    { 'image': 'https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg' }
  ];
  title = 'Angular Reactive Form Validation';
  submittedRequest: any;
  angForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    joinUs: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    adress: new FormControl(''),
    haveCar: new FormControl(''),
    pickupOthers: new FormControl(''),
    howMany: new FormControl(''),
    transportationMethod: new FormControl(''),




  });
  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.createForm();
    this.submittedRequest = localStorage.getItem("submittedRequest");
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      joinUs: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      adress: ['', Validators.required],
      haveCar: ['', Validators.required],
      pickupOthers: ['', Validators.required],
      howMany: ['', Validators.required],
      transportationMethod: ['', Validators.required],


    });
  }
  logData() {
    if (!this.angForm.value.name) {
      return
    }
    if (!this.angForm.value.joinUs) {
      return
    }
    if (this.angForm.value.joinUs == 'true' && !this.angForm.value.email) {
      return
    }
    if (this.angForm.value.joinUs == 'true' && !this.angForm.value.phoneNumber) {
      return
    }
    if (this.angForm.value.joinUs == 'true' && !this.angForm.value.adress) {
      return
    }
    if (this.angForm.value.joinUs == 'true' && !this.angForm.value.transportationMethod) {
      return
    }
    if (this.angForm.value.joinUs == 'true' && !this.angForm.value.transportationMethod) {
      return
    }
    this.httpClient.post(
      'https://lozan-farm-default-rtdb.firebaseio.com/users.json',
      this.angForm.value
    ).subscribe(r => {
      localStorage.setItem('submittedRequest', this.angForm.value)
      this.submittedRequest = this.angForm.value
    }
    )
  }
}