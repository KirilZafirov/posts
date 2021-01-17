import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services.ts/api.service';
import { PostComment } from 'src/app/shared/models/comment.model';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {

  @Input() postId : number;

  postComments$: Observable<PostComment[]>;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.postComments$ = this.apiService.getPostComments(this.postId)
  }

}
