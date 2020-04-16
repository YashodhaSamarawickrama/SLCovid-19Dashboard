import { Component, OnInit } from '@angular/core';
import {APIService} from '../api.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import * as Chartist from 'chartist';
// import { AnyARecord } from 'dns';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {chart} from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  test : Date = new Date();
  data:any;
  updated_date_time:any;
  local_total_cases:any;
  local_total_number_of_individuals_in_hospitals:any;
  local_deaths:any;
  local_new_deaths:any;
  local_recovered:any;
  local_new_cases:any;
  local_active_cases:any;
  global_total_cases:any;
  global_deaths:any;
  global_new_deaths:any;
  global_recovered:any;
  global_new_cases:any;
  datearray:any;
  active_cases:any;
  chartdata:any=[];
  
  constructor(public APIService:APIService,private http: HttpClient) { }
  endpoint = 'https://hpb.health.gov.lk/api/get-current-statistical';
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
  
};

 
private extractData(res: Response) {
  let body = res;
  return body || { };
}
 
  ngOnInit() {
     
 
  this.getResponse().subscribe((data) => {
  
    this.data = data.data;
    //console.log(this.data);
    this.global_deaths=this.data.global_deaths
    //console.log(this.global_deaths)
    this.global_recovered=this.data.global_recovered
    //console.log(this.global_recovered)
    this.global_total_cases=this.data.global_total_cases
    //console.log(this.global_total_cases)
    this.global_new_cases=this.data.global_new_cases
    this.global_new_deaths=this.data.global_new_deaths
    this.local_deaths=this.data.local_deaths
    //console.log(this.local_deaths)
    this.local_recovered=this.data.local_recovered
    //console.log(this.local_recovered)
    this.local_total_cases=this.data.local_total_cases
    //console.log(this.local_total_cases)
    this.local_new_cases=this.data.local_new_cases
    this.local_new_deaths=this.data.local_new_deaths
    this.local_total_number_of_individuals_in_hospitals=this.data.local_total_number_of_individuals_in_hospitals
    this.updated_date_time=this.data.update_date_time
    //console.log(this.updated_date_time)
  });

}

  getResponse(): Observable<any> {
    //console.log("Inside method")
    return this.http.get(this.endpoint)
      .pipe(map(this.extractData));
  }
}
