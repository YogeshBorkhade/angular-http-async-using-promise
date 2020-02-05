import { Component } from '@angular/core';
import { HttpService } from './service/http.service';

interface Records {
  status: string,
  data: {
    id, 
    employee_name,
    employee_salary,
    employee_age,
    profile_image
  }
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  title = 'Http Async call using promise ';
  description = "We all know how useful is the rest apis, in this demo we are going to make a rest call to fetch data. The amount of time it takes is mostly based on network speed, server's processing time to generate the reqested data. So sometimes if we use the requested data for further execution, we need to keep hold on our program execution.";
  conclusion = "Using async/await with promise response to achieve Async behaviour";
  records: Records;
  empRecord: any;
  empId = 1;
  serverResponse = '';

  constructor( private httpService: HttpService){
  }

  async getRecords(){
    this.records = await this.httpService.getEmployees();
    this.empRecord = this.records.data;
    if(this.records === null){
      this.serverResponse = 'No records found, server response with null value';
    } else {
      this.serverResponse = 'Successs';
    }
  }

  async getRecordById() {
    // using two way binding
    let temp =  this.empId;
    if(temp !== 0) {
      this.records = await this.httpService.getEmployeeById( temp );
      
      this.empRecord = this.records.data;
      this.serverResponse = this.records.status;
    } else {
      alert(' enter emp id between 1 to 24');
    }
  }

  resetRecords() {
    this.empRecord = [];
  }

}
