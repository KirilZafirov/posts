

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


  constructor() { }

  ngOnInit() {
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
