

import { ApiService } from './../../core/services.ts/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.posts$ = this.apiService.getPosts();
  }

  likePost(post: Post) {
    //No need to unsubscribe because http client handles the unsubscribe for us
    this.apiService.updatePost(post.id , post).subscribe();
  }

  addComment(comment: string, postId: number) {
    this.apiService.addPostComment(comment, postId).subscribe();
  }

  getNewPosts() {
    this.apiService.triggerNewPostChangeEvent();
  }
}
