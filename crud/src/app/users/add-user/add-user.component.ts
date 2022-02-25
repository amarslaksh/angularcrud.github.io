import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from "../../login/local-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUser: FormGroup;
  countryList:any;
  newUserData:any;
  isUserAdded: boolean = false;
  constructor(private localStorageService: LocalStorageService,
              private router: Router) { }

  ngOnInit() {

    /*Getting Country code from MOCK data*/
    this.localStorageService.getCoutryData().subscribe((data) => {
      this.countryList = data.map(value => value.code).sort();
    });

    /*Form Control and Validations*/
    this.addUser = new FormGroup({
      'firstName': new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z ]*$/)
      ]),
      'lastName': new FormControl(),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern(/\S+@\S+\.\S+/)
      ]),
      'phone': new FormControl('', [
        Validators.required,
        Validators.pattern(/^[-0-9]*$/)
      ]),
      'address': new FormControl(),
      'meeting': new FormControl(new Date(), [
        Validators.required
      ])
    });

  }

  /*Add new user to store the data in local storage*/
  addNewUser() {
    const body = {
      firstName: this.addUser.get('firstName').value,
      lastName: this.addUser.get('lastName').value,
      email: this.addUser.get('email').value,
      phone: this.addUser.get('phone').value,
      address: this.addUser.get('address').value,
      meeting: this.addUser.get('meeting').value,
    }
    this.localStorageService.setValues('employeeDetails', body);
    this.newUserData = this.localStorageService.getValues('employeeDetails');
    this.isUserAdded = true;
    if(this.isUserAdded) {
      setTimeout(() => {
        this.router.navigate(['/users/view-users']);
      }, 5000);  //5s
    }
  }

}
