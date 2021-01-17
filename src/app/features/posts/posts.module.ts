import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostComponent } from './post/post.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { PostCommentComponent } from './post-comment/post-comment.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    PostsComponent,
    PostComponent,
    PostCommentsComponent,
    PostCommentComponent
  ]
})
export class PostsModule { }
