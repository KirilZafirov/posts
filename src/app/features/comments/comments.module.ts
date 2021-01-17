import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments.component';
import { CommentsRoutingModule } from './comments-routing.module';
import { CommentWithTitleComponent } from './comment-with-title/comment-with-title.component';

@NgModule({
  imports: [
    SharedModule,
    CommentsRoutingModule
  ],
  declarations: [CommentsComponent , CommentWithTitleComponent]
})
export class CommentsModule { }
