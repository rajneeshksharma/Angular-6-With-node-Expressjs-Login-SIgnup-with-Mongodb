import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './signup3/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AduserService {

  uri = 'http://localhost:4000/user';

  constructor(private http: HttpClient) { }

  addAdUser(data) {
    // console.log(data, 'Service DAta', httpOptions, this.uri);
    this.http.post(`${this.uri}/add`, data, httpOptions).subscribe(res => console.log('Done'));
  }
  getAdUnits() {
    return this
      .http
      .get(`${this.uri}`);
  }
  checkUser(data) {
    console.log(data, 'Service');
    this.http.post(`${this.uri}/login`, data, httpOptions).subscribe(res => console.log('Done'));
  }
}
