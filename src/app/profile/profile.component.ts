import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-profile',
  template: `
    <div>
      <p> User ID: {{user.id}} </p>
      <p> Username: {{user.name}} </p>
    </div>
  `,
  styles: ['div {margin: 10px 20px}']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private authService: AuthorService) { }

  ngOnInit(): void {
    this.authService.authenticate().subscribe(value => this.user = value);
  }

}
