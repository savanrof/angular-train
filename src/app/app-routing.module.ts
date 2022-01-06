import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginActivate } from './services/login-activate';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'posts', component: PostsComponent},
  { path: 'profile', component: ProfileComponent, canActivate:[LoginActivate]},
  { path: 'login', component: LoginComponent},
  { path: 'posts/:id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, PostsComponent, ProfileComponent, LoginComponent, PostComponent]
