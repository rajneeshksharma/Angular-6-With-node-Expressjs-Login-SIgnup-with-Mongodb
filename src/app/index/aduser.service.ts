import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './signup3/user';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToasterService } from './shared/toaster.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AduserService {

  uri = 'http://localhost:4000/user';
  token: any;

  constructor(private http: HttpClient, private toasterService: ToasterService) { }

  addAdUser(data) {
    // console.log(data, 'Service DAta', httpOptions, this.uri);
    this.http.post(`${this.uri}/add`, data, httpOptions).subscribe(res => console.log('Done'));
  }
  getAdUnits() {
    return this
      .http
      .get(`${this.uri}`);
  }
  // checkUser(data) {
  //   console.log(data, 'Service');
  //   this.http.post(`${this.uri}/login`, data, httpOptions).subscribe(res =>  console.log(res));

  checkUser(user_info): Observable<boolean> {
    // console.log(user_info, 'testttttttttttttttttttttt');
    return this.http.post<{ data, success }>(`${this.uri}/login`, user_info)
      .pipe(
        map(result => {
          localStorage.setItem('token', result.data.token);
          this.toasterService.successToaster(result.success.str1, result.success.str2);
          return true;
        })
      );
  }

  isAuthenticated() {
    this.token = window.localStorage.getItem('token');
    return this.token != null;
  }

}


