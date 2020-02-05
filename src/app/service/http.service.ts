import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const myUrl = 'https://dummy.restapiexample.com/api/v1/';

const allEmp = 'employees';
const empById = 'employee'

@Injectable ({
    providedIn: 'root'
})

export class HttpService {

  constructor(private httpClient: HttpClient ) {

  }
  
  getEmployees(){
    return new Promise( resolve => {
      this.httpClient.get(myUrl + '' + allEmp).subscribe( (res) => {
        return resolve(res);
     }, errResponse => {
       return resolve(errResponse);
     });
    });
  }

  getEmployeeById( empId ){
    let resp = {};
    return new Promise( resolve => {
      this.httpClient.get(myUrl + '' + empById + '/' + empId).subscribe( (res) => {
        console.log(res);
        if(res === null){
          resp['status'] = 'No records found, server response with null value';
          resp['data'] = [];
        } else {
          resp = res;
        }
        console.log(resp);
        return resolve(resp);
     }, errResponse => {
       return resolve(errResponse);
     });
    });
  }
  
}