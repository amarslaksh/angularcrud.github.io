import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../../login/local-storage.service";
import {EmployeeInterface} from "../../../assets/userData";
import {Router} from "@angular/router";


@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  getUserData:string;
  employeeContents: EmployeeInterface[];
  searchText: string;
  pageChanges: number;
  message:string;
  constructor(private localStorageService: LocalStorageService,
              private router: Router) {

  }


  ngOnInit() {
    this.getEmployeeData();
  }

  /*Get Data from the Service*/
  getEmployeeData(): void {
    this.localStorageService.getEmployeeContent().subscribe(content => this.employeeContents = content);
    this.storeData();
  }

  /*store the data in local storage*/
  storeData(): void {
    this.localStorageService.setValues('employeeDetails', this.employeeContents);
    this.getUserData = this.localStorageService.getValues('employeeDetails')
  }

  /*Confirmation Dialog*/
  deleteUser(name: string) {
    if(confirm("Are you sure to delete "+name)) {
      this.message = name;
    } else {
        this.router.navigateByUrl('/users/view-users');
    }
  }
}
