import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-posts',
  template: `
    <input type="text" (input)="filterText=$any($event.target).value" placeholder="Search..."/>
    <div >
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody *ngFor="let post of allPosts | filterPipe:filterText">
        <tr>
          <td>{{post.id}}</td>
          <td>{{post.title}}</td>
          <td>
            <a [routerLink]="['/posts',post.id]">Details</a>
            <button (click)="deletePost(post.id)">Delete</button>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  `,
  styles: ['table {font-family: Arial, Helvetica, sans-serif; width: 100%;} td, th { border: 1px solid #dddddd; text-align: left;padding: 8px;} button {margin-left: 10px} input{ margin: 20px;}']
})
export class PostsComponent implements OnInit {

  filterText = '';
  allPosts: Post[];
  orderById: boolean;

  constructor(private postSerivce: PostService) { }

  ngOnInit(): void {
    this.postSerivce.getAllPosts().subscribe(data => this.allPosts = data);
    this.orderById = false;
  }
  
  sortById(){

  }

  sortByTitle(){
    
  }

  deletePost(id: number){
    this.allPosts.forEach((post,index)=>{
      if(post.id === id) this.allPosts.splice(index,1)
    })
  };
}
