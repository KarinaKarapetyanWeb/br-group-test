import { itemType } from "./item";

export type Comments = Partial<Comment>[];

export type CommentIds = number[];

export type Comment = {
  id: number;
  deleted: boolean;
  type: itemType;
  by: string;
  time: number;
  text: number;
  dead: boolean;
  parent: number;
  poll: boolean;
  kids: CommentIds;
  url: string;
  score: number;
  title: string;
  parts: [];
  descendants: number;
};
