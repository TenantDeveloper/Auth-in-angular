import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Logic/user';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginUser } from '../Logic/loginUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string = 'https://localhost:44340/api/';
  currentUserValue:boolean = false;
  constructor(private http:HttpClient,private router:Router) { }

  Register(user:User)
  {
      return this.http.post<any>(`${this.baseUrl}Account/register`,user).pipe(map(user => {
          console.log(user);
          if(user.status) this.router.navigate(['/login']);
      }));
  }

  Login(loginUser:LoginUser) {
     return this.http.post<any>('https://localhost:44340/api/Account/login',{Username:loginUser.userName,Password:loginUser.password}).pipe(map(user => {
       console.log(user);
       if(user.status) {
         localStorage.setItem('access_token',user.token);
         this.currentUserValue = true;
         this.router.navigate(['']);
       }
     }))
  }
}
