import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LocalStorageService} from "./local-storage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  userObj:any;
  errorVal:string;
  constructor(private localStorageService: LocalStorageService,
              private route: ActivatedRoute,
              private router: Router) { }

  /*Assign data to localStorage using services*/
  ngOnInit() {
    const user = {
      'username': 'admin',
      'password': 'admin'
    };
    this.localStorageService.setValues("loginDetails", user);
    this.userObj = this.localStorageService.getValues('loginDetails');
  }

  /*@param formValue to get the form values from the template
  * comparing the input value with the localstorage data*/
  getUserDetails(formValue: NgForm) {
    if (formValue.valid) {
      if (formValue.value.username === this.userObj.username &&
          formValue.value.password === this.userObj.password) {
            this.router.navigateByUrl('users/view-users');
      } else {
        this.errorVal = "Please provide Correct username and password";
        return;
      }
    }
  }

}
