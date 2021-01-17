import { User } from './../../shared/models/user.model';
import { UserService } from './../../core/services.ts/user.service';


import { ApiService } from './../../core/services.ts/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;
  totalComments$: Observable<number>;
  userTotalLikes$: Observable<number>;

  constructor(private apiService: ApiService , private user: UserService) { }

  ngOnInit() {
    this.posts$ = this.apiService.getPosts();
    this.totalComments$ = this.apiService.getUserComments(this.user.currentUser.id).pipe(
      map(userComments => userComments.length)
    )

    this.userTotalLikes$ = this.apiService.getUserTotalLikes(1);
  }

  likePost(post: Post) {
    //No need to unsubscribe because http client handles the unsubscribe for us
    this.apiService.updatePost(post.id , {...post , likedBy: this.user.currentUser.id}).subscribe();
  }

  addComment(comment: string, postId: number) {
    this.apiService.addPostComment(comment, postId , this.user.currentUser.id).subscribe();
  }

  getNewPosts() {
    this.apiService.triggerNewPostChangeEvent();
  }
}
