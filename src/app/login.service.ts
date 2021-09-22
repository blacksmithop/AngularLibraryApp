import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
    private router: Router) { }

  //address: string = 'http://localhost:8080';
  address: string = '/api';

  loginUser(user: any) {
    return this.http.post<any>(`${this.address}/login`, user)
  }

  newUser(item: any) {
    return this.http.post(`${this.address}/login/signup`, { "user": item })
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  getUser() {
    return localStorage.getItem('role')
  }



  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role')
    this.router.navigate(['auth'])
  }
}
