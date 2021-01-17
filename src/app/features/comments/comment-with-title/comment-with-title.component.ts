import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services.ts/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { PostComment } from 'src/app/shared/models/comment.model';

@Component({
  selector: 'app-comment-with-title',
  templateUrl: './comment-with-title.component.html',
  styleUrls: ['./comment-with-title.component.scss']
})
export class CommentWithTitleComponent implements OnInit {

  @Input() comment: PostComment;

  constructor(private api:ApiService) { }

  postTitle$: Observable<string>;

  ngOnInit() {
    this.postTitle$ = this.api.getPostTitle(this.comment.postId)
  }

}
