import { ApiService } from 'src/app/core/services.ts/api.service';
import { UserService } from './../../core/services.ts/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostComment } from 'src/app/shared/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private user: UserService , private api: ApiService) { }

  userComments$: Observable<PostComment[]>;

  ngOnInit() {
   this.userComments$ = this.api.getUserComments(this.user.currentUser.id)
  }

}
