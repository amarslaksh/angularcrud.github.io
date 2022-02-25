import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {LocalStorageService} from "../../login/local-storage.service";

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  editUser:any = new FormGroup({});
  isDataLoaded:boolean = false;
  userId: any = '';
  userDetail:any;
  userInfo: any;
  latestData: any;
  dateFormat = "dd-MM-yyyy";
  date: string;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phone', 'address', 'meeting'];
  constructor(
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.isDataLoaded = false;
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data;
    }, error => {
      console.log('err', error)
    });

    this.userDetail = this.localStorageService.getValues('employeeDetails');

    if(this.userId != '') {
      this.userInfo = this.userDetail.filter((data, index) => {
        return this.userId.id == data.id;
      });
      this.editUserFormDetails(this.userInfo)
    }
  }

  editUserFormDetails(userData): void {

    userData.forEach((val) => {
      this.date = new Date(val.meetingTime).toISOString().slice(0, 16);
      this.editUser = this.formBuilder.group({
        'firstName' : new FormControl(val.firstName, [
          Validators.required,
          Validators.pattern(/^[a-zA-Z ]*$/)
        ]),
        'lastName' : new FormControl(val.lastName),
        'email' : new FormControl(val.email, [
          Validators.required,
          Validators.pattern(/\S+@\S+\.\S+/)
        ]),
        'phone' : new FormControl(val.phone),
        'address' : new FormControl(val.address.street + ',' + val.address.city + ',' + val.address.zipcode),
        'meeting' : new FormControl(this.date),
      });
      this.isDataLoaded = true;
    })
  }

  /*After Update User providing information to the user*/
  updateUser(): void {
    this.latestData = this.editUser.value;
  }
}
