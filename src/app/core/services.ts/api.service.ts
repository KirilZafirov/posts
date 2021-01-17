
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, switchMap, tap } from 'rxjs/operators';
import { Post } from 'src/app/shared/models/post.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { PostComment } from 'src/app/shared/models/comment.model';
import { v4 as uuidv4 } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.apiUrl;

  private triggerDataChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  hasNewPost: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(protected http: HttpClient) {
  }

  getPosts():Observable<Post[]> {
    return this.hasNewPost.pipe(
      switchMap(() => this.http.get(`${this.baseUrl}posts`).pipe(
        map(response => response as Post[])
      ))
    )
  }

  getPostComments(postId: number):Observable<PostComment[]> {
    return this.triggerDataChange.pipe(
      switchMap(() => this.http.get(`${this.baseUrl}comments`).pipe(
        map(response => response as PostComment[]),
        map( postComments =>
          postComments.filter(comment => comment.postId === postId)
          .map(comment => ({
            ...comment,
            commentedOn: comment.commentedOn ? comment.commentedOn : new Date()
          })))
      ))
    )
  }

  updatePost(postId: number, post: Post) {
    return this.http.put(`${this.baseUrl}posts/${postId}`, post).pipe(
        tap(() => {
          this.triggerDataChange.next(true);
          console.log('Updated successfully')
        })
      )
  }

  addPostComment( comment: string, postId: number) {
    const commentBody: PostComment = {
      id: uuidv4(),
      body: comment,
      postId: postId,
      commentedOn: new Date()
    };

    return this.http.post(`${this.baseUrl}comments/`, commentBody).pipe(
        tap(() => {
          this.triggerDataChange.next(true);
          console.log('Updated successfully')
        })
    )
  }


  triggerNewPostChangeEvent() {
    this.hasNewPost.next(true);
  }
}
