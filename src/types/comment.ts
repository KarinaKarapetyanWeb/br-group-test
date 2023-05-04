export type Comments = Comment[];

export type CommentIds = number[];

export type Comment = {
  id: number;
  by: string;
  parent: number;
  text: string;
  time: number;
  type: string;
  kids?: CommentIds;
};
