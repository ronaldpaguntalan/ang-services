import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  // providers: [PostService]
})
export class PostComponent {

  posts: Array<any> = [];

  constructor(private postService : PostService){
    // let postService = new PostService();
    this.posts = postService.postList;
  }

  addNewData(){
    let newPost : Post = {
      id: 7,
      postTitle: 'Post 7'
    }

    this.postService.addPost(newPost)
  }

}
