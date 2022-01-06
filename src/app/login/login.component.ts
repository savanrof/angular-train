import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="reactiveForm">
      <label for="username">Username</label>
      <br>
      <input type="text"
        placeholder="Username"
        formControlName="username"
        name="username"
      />
      <br>

      <label for="password">Password</label>
      <br>
      <input type="password"
        placeholder="Password"
        formControlName="password"
        name="password"
      />
      <br>
      <button (click)="submit()">Login</button>
    </form>
  `,
  styles: ['input{margin: 10px 0} form {margin: 10px 20px}']
})
export class LoginComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor(private authService: AuthorService, 
      private router: Router) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  submit(){
    this.authService.getToken();
    this.router.navigate(['']);
  }
}
