import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
  
 
export class APIService {

  constructor(private http: HttpClient) { }

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
getResponse() {
  return new Promise((resolve, reject) => {
      console.log("Get response method called")
      return this.http.get(this.endpoint).pipe(map(this.extractData))
          resolve();
});
}
}
