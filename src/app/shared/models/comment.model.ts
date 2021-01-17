export interface PostComment {
  id: number;
  body: string;
  postId: number;
  commentedOn: Date;
  commentedBy: number;
}
