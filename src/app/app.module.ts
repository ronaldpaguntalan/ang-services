import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
