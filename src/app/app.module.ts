import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './services/post.service';
import { PostComponent } from './post/post.component';
import { FilterPipe } from './shared/FilterPipe';
import { AuthorService } from './services/author.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PostComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule, PostService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
