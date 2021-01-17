import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export interface PostCommentForm {
  postComment: string;
}
@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {


  form: FormGroup = new FormGroup({
    postComment: new FormControl(null),
  });

  @Output() postComment: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formValue: PostCommentForm) {
    this.postComment.emit(formValue.postComment)
  }
}
