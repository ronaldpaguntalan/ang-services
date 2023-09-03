import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
  // providers: [PostService]
})
export class PostlistComponent {
  postList: Array<any> = [];

  constructor(private postService: PostService){
    this.postList = postService.postList;
  }

}
