import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({
      "Authorization": "Token " + localStorage.getItem("access_token")
    })
  };
@Injectable()
export class VacationService {
   baseUrl:string = 'https://localhost:44340/api/';
  constructor(private http:HttpClient) {
  }
   

  get(){
      console.log('access token is' +  localStorage.getItem("access_token"));
     return this.http.get<any>(`${this.baseUrl}Job/GetAll/10/1` , httpOptions);
  }

  getDetails(id) {
      return this.http.get<any>(`${this.baseUrl}Job/GetJobDetails/${id}`);
  }
}