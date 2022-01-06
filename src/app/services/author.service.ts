import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../model/user';
import { Token } from '../model/token';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  readonly AUTH_API = "https://60dff0ba6b689e001788c858.mockapi.io/users/";
  readonly TOKEN_API = "https://60dff0ba6b689e001788c858.mockapi.io/tokens";
  constructor(private http: HttpClient) { 
  }
  
  login(token: string){
    localStorage.setItem('token', token);
  }

  logout(){
    localStorage.removeItem('token');
  }

  isLogged(): boolean{
    return localStorage.getItem('token') !== null;
  }

  getToken(): void{
    this.http.get<Token>(this.TOKEN_API).subscribe(value => this.login(value.token));
  }

  authenticate(): Observable<User>{
    let id = Math.floor(Math.random() * 15)
    return this.http.get<User>(this.AUTH_API + `${id}`)
  }
}
