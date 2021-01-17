import { UserService } from 'src/app/core/services.ts/user.service';


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Output() updatePost: EventEmitter<Post> = new EventEmitter();
  @Output() addNewComment: EventEmitter<string> = new EventEmitter();


  constructor(private user: UserService) { }

  currentUserId: number;
  ngOnInit() {
    this.currentUserId = this.user.currentUser.id;
  }

  likePost() {
    this.updatePost.emit({
      ...this.post,
      likes: this.post.likes++
    })
  }

  postComment(comment: string) {
    this.addNewComment.emit(comment);
  }
}
