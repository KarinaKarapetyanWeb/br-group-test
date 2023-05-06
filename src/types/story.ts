import { CommentIds } from "./comment";
import { itemType } from "./item";

export type Story = {
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

export type Stories = Partial<Story>[];

export type StoriesIds = number[];
