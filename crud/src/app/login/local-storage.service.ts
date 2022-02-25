import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {employeeContent, EmployeeInterface} from '../../assets/userData';
import {CountryInterface, CountryList} from '../../assets/country-list';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /*Setting Values to Local Storage for Employee Data
  * @params data - will get the Employee data and user admin data for login*/
  setValues(key: string, data: any): void {
    try {
      localStorage.setItem(key,JSON.stringify(data));
    }
    catch (err) {
      console.log('Error Saving to LocalStorage', err);
    }
  }

  /*Getting Values from Local Storage for Employee Data
  * @params key - will use to retrieve the Employee data and user admin data for login*/

  getValues(key:string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    }
    catch (err) {
      console.log('Error Fetching Data from localStorage', err);
      return null;
    }
  }

  /*Hit the Mock Data and get the employee content - userData.ts*/
  getEmployeeContent(): Observable<EmployeeInterface[]> {
    return of(employeeContent);
  }

  /*Hit the Mock Data and get the country dropdown data - country-list.ts*/
  getCoutryData(): Observable<CountryInterface[]> {
      return of(CountryList);
  }


  /*Remove data from localStorage*/
  removeValues(id: any): void {
    const items = JSON.parse(localStorage.getItem('employeeDetails'));
    const filtered = items.filter(item => {
      return item.id !== parseInt(id);
    });
    localStorage.setItem('employeeDetails', JSON.stringify(filtered));
    JSON.parse(localStorage.getItem('employeeDetails'));
  }

}
