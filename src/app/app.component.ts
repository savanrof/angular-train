import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from './services/author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public get isLogged() {return this.authService.isLogged();}
  constructor(private authService: AuthorService, private router: Router) { }
  //isLogged = this.authService.isLogged();
  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }

}
